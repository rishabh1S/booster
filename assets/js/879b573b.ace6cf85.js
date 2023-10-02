"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5163:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(7294);const a="terminalWindow_wGrl",r="terminalWindowHeader_o9Cs",i="buttons_IGLB",l="dot_fGZE",s="terminalWindowBody_tzdS";function p(e){let{children:t}=e;return o.createElement("div",{className:a},o.createElement("div",{className:r},o.createElement("div",{className:i},o.createElement("span",{className:l,style:{background:"#f25f58"}}),o.createElement("span",{className:l,style:{background:"#fbbe3c"}}),o.createElement("span",{className:l,style:{background:"#58cb42"}}))),o.createElement("div",{className:s},t))}},9815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));n(5163);const r={},i="Configuring Infrastructure Providers",l={unversionedId:"going-deeper/infrastructure-providers",id:"going-deeper/infrastructure-providers",title:"Configuring Infrastructure Providers",description:"The providers are different implementations of the Booster runtime to allow Booster applications run on different cloud providers or services. They all implement the same interface, and the main idea behind the providers is that no matter what the developer chooses as backend, they won't need to know anything about the underlying infrastructure.",source:"@site/docs/10_going-deeper/infrastructure-providers.mdx",sourceDirName:"10_going-deeper",slug:"/going-deeper/infrastructure-providers",permalink:"/going-deeper/infrastructure-providers",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/10_going-deeper/infrastructure-providers.mdx",tags:[],version:"current",lastUpdatedBy:"Javier Toledo",lastUpdatedAt:1695984635,formattedLastUpdatedAt:"Sep 29, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Advanced uses of the Register object",permalink:"/going-deeper/register"},next:{title:"Create custom providers",permalink:"/going-deeper/custom-providers"}},s={},p=[{value:"Booster configuration",id:"booster-configuration",level:2},{value:"Providers setup",id:"providers-setup",level:2},{value:"AWS Provider setup",id:"aws-provider-setup",level:3},{value:"Creating an AWS account",id:"creating-an-aws-account",level:3},{value:"Getting the AWS credentials",id:"getting-the-aws-credentials",level:3},{value:"Setting the AWS credentials on Booster",id:"setting-the-aws-credentials-on-booster",level:4},{value:"AWS Provider configuration",id:"aws-provider-configuration",level:4},{value:"Azure Provider Setup",id:"azure-provider-setup",level:2},{value:"Creating an Azure account",id:"creating-an-azure-account",level:3},{value:"Installing the Azure CLI",id:"installing-the-azure-cli",level:3},{value:"Azure Provider configuration",id:"azure-provider-configuration",level:3},{value:"Azure synth command",id:"azure-synth-command",level:3},{value:"Azure and CI/CD environments",id:"azure-and-cicd-environments",level:3},{value:"Azure host.json file",id:"azure-hostjson-file",level:3},{value:"Local Provider",id:"local-provider",level:2},{value:"Cleaning Local Data for New Changes",id:"cleaning-local-data-for-new-changes",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-infrastructure-providers"},"Configuring Infrastructure Providers"),(0,a.kt)("p",null,"The providers are different implementations of the Booster runtime to allow Booster applications run on different cloud providers or services. They all implement the same interface, and the main idea behind the providers is that no matter what the developer chooses as backend, they won't need to know anything about the underlying infrastructure."),(0,a.kt)("p",null,"Currently, the Booster framework provides two fully working provider packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"framework-provider-aws-","*")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"framework-provider-azure-","*"))),(0,a.kt)("p",null,"Booster uses sensible defaults, convention over configuration, and code inference to reduce dramatically the amount of configuration needed. However, there are some aspects that can't be inferred (like the application name) or the provider library used for each ",(0,a.kt)("a",{parentName:"p",href:"environment-configuration"},"environment"),"."),(0,a.kt)("h2",{id:"booster-configuration"},"Booster configuration"),(0,a.kt)("p",null,"You configure your application by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"Booster.configure()")," method. There are no restrictions about where you should do this call, but the convention is to do it in your configuration files located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/config")," folder. This folder will get automatically generated for you after running the ",(0,a.kt)("inlineCode",{parentName:"p"},"boost new:project <project-name>")," CLI command."),(0,a.kt)("p",null,"This is an example of a possible configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Booster } from '@boostercloud/framework-core'\nimport { BoosterConfig } from '@boostercloud/framework-types'\n\nBooster.configure('pre-production', (config: BoosterConfig): void => {\n  config.appName = 'my-app-name'\n  config.providerPackage = '@boostercloud/framework-provider-aws'\n})\n")),(0,a.kt)("p",null,"The following is the list of the fields you can configure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"appName:")," This is the name that identifies your application. It will be used for many things, such us prefixing the resources created by the provider. There are certain restrictions regarding the characters you can use: all of them must be lower-cased and can't contain spaces. Two apps with different names are completely independent.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"providerPackage:")," This field contains the name of the provider package that Booster will use when deploying or running your application.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"enableGraphQLIntrospection")," This field allows to enable/disable get information about the GraphQL schema of your application from client side. By default is enabled but it is recommended to disable for security reasons in production applications.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"assets"),": This is an array of ",(0,a.kt)("em",{parentName:"p"},"relative")," paths from the root of the project pointing to files and folders with static assets. They will be included among the deployed files to the cloud provider.\nFor example, imagine you are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"dotenv")," module so that all the environment variables you have in your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," files are loaded into memory in runtime. In order for this to work, you need to include your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," files as assets of your project, so that they are included when deploying. Assuming you only have a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file in the root of your project, you should add the following to your configuration:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"config.assets = ['.env']\n")))),(0,a.kt)("h2",{id:"providers-setup"},"Providers setup"),(0,a.kt)("h3",{id:"aws-provider-setup"},"AWS Provider setup"),(0,a.kt)("p",null,"In order to dpeloy your app to AWS you only need to provide Booster with the credentials of an AWS account and the\nframework will take care of the rest."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Booster is free to use, but remember that the resources deployed to your cloud provider\nmight generate some expenses."),(0,a.kt)("p",{parentName:"admonition"},"In AWS, all the resources generated by Booster are part of the ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/free"},"AWS free tier"),".\nWhen you're not eligible for the free tier, resources are charged on-demand. Deploying a\nBooster project and sending a few commands and queries should cost just a few cents."),(0,a.kt)("p",{parentName:"admonition"},"In any case, make sure to un-deploy your application with the command ",(0,a.kt)("inlineCode",{parentName:"p"},"boost nuke -e production"),"\nif you're not planning to keep using it.")),(0,a.kt)("h3",{id:"creating-an-aws-account"},"Creating an AWS account"),(0,a.kt)("p",null,"If you don't have an AWS account, you can create one by following the ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/"},"instructions in the AWS documentation"),"."),(0,a.kt)("h3",{id:"getting-the-aws-credentials"},"Getting the AWS credentials"),(0,a.kt)("p",null,"Once you have an AWS account, you need to get the credentials that Booster needs to deploy your application. You can follow the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"instructions in the AWS documentation")," to get them."),(0,a.kt)("p",null,"Booster needs you to get the following credentials:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access Key ID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secret Access Key"))),(0,a.kt)("p",null,"Make sure you get them, as they will be needed in the next step."),(0,a.kt)("h4",{id:"setting-the-aws-credentials-on-booster"},"Setting the AWS credentials on Booster"),(0,a.kt)("p",null,"Booster needs to know how to authenticate against your AWS account. For that reason, create a folder called ",(0,a.kt)("inlineCode",{parentName:"p"},".aws")," under your home folder, and a file inside called ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials")," with this syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:"title=~/.aws/credentials",title:"~/.aws/credentials"},"[default]\naws_access_key_id=<YOUR ACCESS KEY ID>\naws_secret_access_key=<YOUR SECRET ACCESS KEY>\n")),(0,a.kt)("h4",{id:"aws-provider-configuration"},"AWS Provider configuration"),(0,a.kt)("p",null,"To configure AWS as a provider you need to meet certain prerequisites:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check ",(0,a.kt)("inlineCode",{parentName:"li"},"@boostercloud/framework-provider-aws")," is listed in your app ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," dependencies."),(0,a.kt)("li",{parentName:"ul"},"Check ",(0,a.kt)("inlineCode",{parentName:"li"},"@boostercloud/framework-provider-aws-infrastructure")," is listed in your app ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," devDependencies."),(0,a.kt)("li",{parentName:"ul"},"Check both dependencies are installed, otherwise use ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," in the root of your project.")),(0,a.kt)("p",null,"Now go to your ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ts")," file, import the aws provider library and set up your app environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Booster } from '@boostercloud/framework-core'\nimport { BoosterConfig } from '@boostercloud/framework-types'\nimport { Provider as AWSProvider } from\n\nBooster.configure('production', (config: BoosterConfig): void => {\n  config.appName = 'my-app-name'\n  config.providePackage = '@boostercloud/framework-provider-aws'\n})\n")),(0,a.kt)("p",null,"Open your terminal and run the deployment command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"boost deploy -e production\n")),(0,a.kt)("p",null,"Now just let the magic happen, Booster will create everything for you and give you back your app ready to use URL. \ud83d\ude80"),(0,a.kt)("h2",{id:"azure-provider-setup"},"Azure Provider Setup"),(0,a.kt)("p",null,"Booster applications can be deployed to Microsoft Azure. To do so, you need to have an Azure account and to have the Azure CLI installed on your computer."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Booster is free to use, but remember that the resources deployed to your cloud provider\nmight generate some expenses."),(0,a.kt)("p",{parentName:"admonition"},"In Azure, when you're not eligible for the free tier, resources are charged on-demand. Deploying a\nBooster project and sending a few commands and queries should cost just a few cents."),(0,a.kt)("p",{parentName:"admonition"},"In any case, make sure to un-deploy your application with the command ",(0,a.kt)("inlineCode",{parentName:"p"},"boost nuke -e production"),"\nif you're not planning to keep using it.")),(0,a.kt)("h3",{id:"creating-an-azure-account"},"Creating an Azure account"),(0,a.kt)("p",null,"As mentioned, you need to have an Azure account. If you don't have one, you can create one from ",(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/free/"},"the Microsoft SignUp page"),". You can also use your existing Microsoft account to create an Azure account."),(0,a.kt)("h3",{id:"installing-the-azure-cli"},"Installing the Azure CLI"),(0,a.kt)("p",null,"Once you have created the Azure account, you need to install the Azure CLI on your computer. You can do it by following the instructions on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/es-es/cli/azure/install-azure-cli"},"the official documentation"),". You may also need to install ",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/download/"},"jq")," on your system."),(0,a.kt)("h3",{id:"azure-provider-configuration"},"Azure Provider configuration"),(0,a.kt)("p",null,"To configure Azure as a provider you need to meet certain prerequisites:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/download/"},"jq")," in your system."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/tutorials/azure-get-started/install-cli"},"the terraform CLI"),"."),(0,a.kt)("li",{parentName:"ul"},"Check ",(0,a.kt)("inlineCode",{parentName:"li"},"@boostercloud/framework-provider-azure")," is listed in your app ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," dependencies."),(0,a.kt)("li",{parentName:"ul"},"Check ",(0,a.kt)("inlineCode",{parentName:"li"},"@boostercloud/framework-provider-azure-infrastructure")," is listed in your app ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," devDependencies."),(0,a.kt)("li",{parentName:"ul"},"Check both dependencies are installed, otherwise use ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," in the root of your project.")),(0,a.kt)("p",null,"At this moment you have to log in you Azure account using the Azure CLI with the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"az login\n")),(0,a.kt)("p",null,"You will get something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  {\n    "cloudName": "AzureCloud",\n    "homeTenantId": "00000000-0000-0000-0000-000000000000",\n    "id": "00000000-0000-0000-0000-000000000000",\n    "isDefault": true,\n    "managedByTenants": [],\n    "name": "Azure subscription name",\n    "state": "Enabled",\n    "tenantId": "00000000-0000-0000-0000-000000000000",\n    "user": {\n      "name": "boosteduser@boosteddomain.com",\n      "type": "user"\n    }\n  }\n]\n')),(0,a.kt)("p",null,"Keep the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," from the login output around."),(0,a.kt)("p",null,"Then create a service pricipal that is a contributor to a chosen subscription running the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'az ad sp create-for-rbac --name <service-principal-name> --role="Contributor" --scopes="/subscriptions/<the-id-from-the-login-output>"\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Remember to change ",(0,a.kt)("inlineCode",{parentName:"p"},"<service-principal-name>")," for a custom one.")),(0,a.kt)("p",null,"After the service principal is created, create a bash script with the following content. It will set up the necessary environment variables required by the provider in order to work:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#!/usr/bin/env bash\n\nSP_DISPLAY_NAME=\"<service-principal-name>\" #replace <service-principal-name> with the name of your own SP\nREGION=\"East US\" #replace with a region of your choice, see full list here: https://azure.microsoft.com/en-us/global-infrastructure/locations/\n\nexport AZURE_APP_ID=$(az ad sp list --display-name ${SP_DISPLAY_NAME} | jq -r '.[].appId')\nexport AZURE_TENANT_ID=$(az ad sp list --display-name ${SP_DISPLAY_NAME} | jq -r '.[].appOwnerOrganizationId')\nexport AZURE_SECRET=$(az ad sp credential reset --id ${AZURE_APP_ID} | jq -r '.password')\nexport AZURE_SUBSCRIPTION_ID=$(az account show | jq -r '.id')\nexport REGION=$REGION\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Remember to have ",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/download/"},"jq")," installed in your system.")),(0,a.kt)("p",null,"Now go to your ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ts")," file, import the aws provider library and set up your app environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Booster } from '@boostercloud/framework-core'\nimport { BoosterConfig } from '@boostercloud/framework-types'\n\nBooster.configure('production', (config: BoosterConfig): void => {\n  config.appName = 'my-app-name'\n  config.providerPackage = '@boostercloud/framework-provider-azure'\n})\n")),(0,a.kt)("p",null,"Open your terminal and run the bash file to export you env variables and the deploy command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"source <path-to-your-bash-file> && boost deploy -e production\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Remember to have ",(0,a.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/tutorials/azure-get-started/install-cli"},"the terraform CLI")," installed in your system.")),(0,a.kt)("p",null,"Now just let the magic happen, Booster will create everything for you and give you back your app ready to use URL. \ud83d\ude80"),(0,a.kt)("h3",{id:"azure-synth-command"},"Azure synth command"),(0,a.kt)("p",null,"Azure provider implements the experimental ",(0,a.kt)("strong",{parentName:"p"},"Booster")," ",(0,a.kt)("inlineCode",{parentName:"p"},"synth")," command. This command will generate ",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," templates from your code. It will also generate needed files to deploy your Booster application using ",(0,a.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/tutorials/terraform/cdktf"},"cdktf"),"."),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"synth")," command, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"boost synth -e production")," will generate following files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A file ",(0,a.kt)("inlineCode",{parentName:"li"},"cdktf.json"),": A basic json file to deploy your application using ",(0,a.kt)("inlineCode",{parentName:"li"},"cdktf")),(0,a.kt)("li",{parentName:"ul"},"A folder ",(0,a.kt)("inlineCode",{parentName:"li"},"cdktf.out"),": with the Terraform templates.")),(0,a.kt)("p",null,"Booster deploy command for Azure will deploy your application using the generated templates.  You don't need to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"synth")," command for deploy your application, the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," command will generate the templates before deploy for you."),(0,a.kt)("p",null,"Once you have the new files and folders generates you could use ",(0,a.kt)("inlineCode",{parentName:"p"},"cdktf")," to deploy your application if you want to."),(0,a.kt)("h3",{id:"azure-and-cicd-environments"},"Azure and CI/CD environments"),(0,a.kt)("p",null,"It is possible to deploy your Azure infrastructure using the ",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," templates generated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"synth")," command using Terraform executable."),(0,a.kt)("p",null,"To deploy a ",(0,a.kt)("strong",{parentName:"p"},"Booster")," application using the ",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," templates generated by the ",(0,a.kt)("strong",{parentName:"p"},"Booster")," ",(0,a.kt)("inlineCode",{parentName:"p"},"synth")," command:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> cd cdktf.out/stacks/<application name><environment name>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Run (only the first time)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> terraform init\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> terraform plan --out plan\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Run")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'> terraform apply "plan"\n')),(0,a.kt)("p",null,"You could follow similar steps to integrate the Azure ",(0,a.kt)("strong",{parentName:"p"},"Booster")," deploys in your CI/CD environment."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> cd cdktf.out/stacks/<application name><environment name>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Copy ",(0,a.kt)("inlineCode",{parentName:"li"},"functionApp.zip")," to the destination folder")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> cp functionApp.zip <destination>\n")),(0,a.kt)("p",null,"After copying the files you should have the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"<application>\n\u251c\u2500\u2500 cdktf.out\n\u2502   \u2514\u2500\u2500 stacks\n\u2502       \u2514\u2500\u2500 <application name><environment name>\n\u2502           \u2514\u2500\u2500 cdk.tf.json\n")),(0,a.kt)("p",null,"Now deploy the template:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run (only the first time)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> terraform init\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Run")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> terraform plan --out plan\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'> terraform apply "plan"\n')),(0,a.kt)("p",null,"Finally, you need to upload the source code. The main options are (",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/deployment-zip-push"},"more info"),"):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using az-cli. Run")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> az functionapp deployment source config-zip -g <resource_group> -n \\\n   <app_name> --src ./functionApp.json\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Using REST APIs. Send a POST request to ",(0,a.kt)("inlineCode",{parentName:"li"},"https://<app_name>.scm.azurewebsites.net/api/zipdeploy"),". Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'>  curl -X POST -u <deployment_user> --data-binary @"<zip_file_path>" https://<app_name>.scm.azurewebsites.net/api/zipdeploy\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Remember to follow the ",(0,a.kt)("strong",{parentName:"p"},"Azure Provider")," steps in this page to set up your credentials correctly")),(0,a.kt)("h3",{id:"azure-hostjson-file"},"Azure host.json file"),(0,a.kt)("p",null,"Azure Provider will generate a default ",(0,a.kt)("inlineCode",{parentName:"p"},"host.json")," file if there is not a ",(0,a.kt)("inlineCode",{parentName:"p"},"host.json")," entry in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.assets")," array."),(0,a.kt)("p",null,"If you want to use your own ",(0,a.kt)("inlineCode",{parentName:"p"},"host.json")," file just add it to ",(0,a.kt)("inlineCode",{parentName:"p"},"config.assets")," array and Booster will use yours."),(0,a.kt)("h2",{id:"local-provider"},"Local Provider"),(0,a.kt)("p",null,"All Booster projects come with a local development environment configured by default, so you can test your app before deploying it to the cloud."),(0,a.kt)("p",null,"You can see the configured local environment in your ",(0,a.kt)("inlineCode",{parentName:"p"},"src/config/config.ts")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"Booster.configure('local', (config: BoosterConfig): void => {\n  config.appName = 'my-store'\n  config.providerPackage = '@boostercloud/framework-provider-local'\n})\n")),(0,a.kt)("p",null,"In order to start your application using the local provider, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"boost start -e local\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," is one of your defined environments with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Booster.configure")," call."),(0,a.kt)("h3",{id:"cleaning-local-data-for-new-changes"},"Cleaning Local Data for New Changes"),(0,a.kt)("p",null,"When making changes to your entities and events, you might need to reset the local environment to accommodate these changes. The application creates a ",(0,a.kt)("inlineCode",{parentName:"p"},".booster")," folder to store relevant information. To clean the local data and reset the environment:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Locate the ",(0,a.kt)("inlineCode",{parentName:"li"},".booster")," folder in your project directory."),(0,a.kt)("li",{parentName:"ol"},"Delete the contents of the ",(0,a.kt)("inlineCode",{parentName:"li"},".booster")," folder or the folder itself.")),(0,a.kt)("p",null,"This action will clear the local data and allow you to proceed with your new changes effectively."))}c.isMDXComponent=!0}}]);