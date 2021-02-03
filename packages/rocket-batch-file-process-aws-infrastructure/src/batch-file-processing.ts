import { Duration, Stack, RemovalPolicy } from '@aws-cdk/core'
import { RocketUtils } from '@boostercloud/framework-provider-aws-infrastructure'
import { Bucket, EventType } from '@aws-cdk/aws-s3'
import { Function, Runtime, Code } from '@aws-cdk/aws-lambda'
import { S3EventSource } from '@aws-cdk/aws-lambda-event-sources'
import { createPolicyStatement } from '@boostercloud/framework-provider-aws-infrastructure/dist/infrastructure/stacks/policies'
import { Table } from '@aws-cdk/aws-dynamodb'

const path = require('path')

export type AWSBatchProcessingFilesParams = {
  bucketName: string
  chunkSize: string
}

export class BatchFileProcessingStack {
  public static mountStack(params: AWSBatchProcessingFilesParams, stack: Stack): void {
    const appName = stack.stackName.split('-app')[0]

    // Create new bucket to upload file
    const sourceBucket = new Bucket(stack, 'sourceUploadBucket', {
      bucketName: params.bucketName,
      removalPolicy: RemovalPolicy.DESTROY,
    })

    const stagingBucketName = params.bucketName + '-staging'
    // Create Staging Bucket to save Chunks
    const stagingBucket = new Bucket(stack, 'stagingBucket', {
      bucketName: stagingBucketName,
      removalPolicy: RemovalPolicy.DESTROY,
    })

    const eventsStore = stack.node.tryFindChild('events-store') as Table

    // Crete new Lambda function to be triggered once new file is uploaded in bucket
    const processorFunction = new Function(stack, 'TriggerS3BigFile', {
      runtime: Runtime.NODEJS_12_X,
      timeout: Duration.minutes(15),
      memorySize: 1024,
      handler: 'index.handler',
      functionName: appName + '-s3-rocket-trigger',
      code: Code.fromAsset(path.join(__dirname, 'lambdas')),
      environment: {
        EVENT_STORE_NAME: eventsStore.tableName,
        CHUNK_SIZE: params.chunkSize,
        STAGING_BUCKET_NAME: stagingBucketName,
        ENTITY_TYPE_NAME: 'File',
        TYPE_NAME: 'FileAdded',
      },
    })

    // Grant access for this lambda to persist new records in the Events Store
    processorFunction.addToRolePolicy(createPolicyStatement([eventsStore.tableArn], ['dynamodb:Put*']))

    // Grant access for this lambda to read from the source S3 bucket
    sourceBucket.grantRead(processorFunction)
    // Grant access for this lambda to write and HEAD to Staging S3 bucket
    processorFunction.addToRolePolicy(
      createPolicyStatement(
        [stagingBucket.bucketArn, stagingBucket.bucketArn + '/*'],
        ['s3:ListObject', 's3:PutObject', 's3:GetObject']
      )
    )

    // Create trigger from source S3 to Lambda
    const uploadEvent = new S3EventSource(sourceBucket, {
      events: [EventType.OBJECT_CREATED],
    })
    processorFunction.addEventSource(uploadEvent)

    // Grant the Events handler lambda access to read from staging S3 bucket
    const eventsHandlerLambda = stack.node.tryFindChild('events-main') as Function
    eventsHandlerLambda.addToRolePolicy(
      createPolicyStatement([stagingBucket.bucketArn, stagingBucket.bucketArn + '/*'], ['s3:*'])
    )
  }

  public static async unmountStack(params: AWSBatchProcessingFilesParams, utils: RocketUtils): Promise<void> {
    // The bucket must be empty for the stack deletion to succeed
    await utils.s3.emptyBucket(params.bucketName)
  }
}
