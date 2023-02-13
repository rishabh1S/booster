/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { BoosterEventDispatcher } from '../src/booster-event-dispatcher'
import { fake, replace, restore, createStubInstance } from 'sinon'
import {
  BoosterConfig,
  EntitySnapshotEnvelope,
  UUID,
  EntityInterface,
  ProviderLibrary,
  Register,
  EventInterface,
  NonPersistedEventEnvelope,
} from '@boostercloud/framework-types'
import { expect } from './expect'
import { RawEventsParser } from '../src/services/raw-events-parser'
import { ReadModelStore } from '../src/services/read-model-store'
import { EventStore } from '../src/services/event-store'
import { RegisterHandler } from '../src/booster-register-handler'
import { random } from 'faker'

class SomeEvent {
  public constructor(readonly id: UUID) {}

  public entityID(): UUID {
    return this.id
  }
  public getPrefixedId(prefix: string): string {
    return `${prefix}-${this.id}`
  }
}

class AnEventHandler {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static async handle(event: SomeEvent, register: Register): Promise<void> {
    event.getPrefixedId('prefix')
  }
}
const someEvent: NonPersistedEventEnvelope = {
  version: 1,
  kind: 'event',
  superKind: 'domain',
  entityID: '42',
  entityTypeName: 'SomeEntity',
  value: {
    entityID: (): UUID => {
      return '42'
    },
    id: '42',
  },
  requestID: '123',
  typeName: 'SomeEvent',
}

const someEntity: EntityInterface = {
  id: '42',
}

const someEntitySnapshot: EntitySnapshotEnvelope = {
  version: 1,
  kind: 'snapshot',
  superKind: 'domain',
  entityID: '42',
  entityTypeName: 'SomeEntity',
  value: someEntity,
  requestID: '234',
  typeName: 'SomeEntity',
  createdAt: 'an uncertain future',
  persistedAt: 'a few nanoseconds later',
  snapshottedEventCreatedAt: 'an uncertain future',
}

describe('BoosterEventDispatcher', () => {
  afterEach(() => {
    restore()
  })

  const config = new BoosterConfig('test')
  config.provider = {} as ProviderLibrary
  config.events[SomeEvent.name] = { class: SomeEvent }
  config.logger = {
    info: fake(),
    error: fake(),
    debug: fake(),
    warn: fake(),
  }

  context('with a configured provider', () => {
    describe('the `dispatch` method', () => {
      it('calls the raw events parser once and processes all messages', async () => {
        replace(RawEventsParser, 'streamPerEntityEvents', fake())

        const rawEvents = [{ some: 'raw event' }, { some: 'other raw event' }]
        await BoosterEventDispatcher.dispatch(rawEvents, config)

        expect(RawEventsParser.streamPerEntityEvents).to.have.been.calledWithMatch(
          config,
          rawEvents,
          (BoosterEventDispatcher as any).eventProcessor
        )
      })

      it('logs and ignores errors thrown by `streamPerEntityEvents`', async () => {
        const error = new Error('some error')
        replace(RawEventsParser, 'streamPerEntityEvents', fake.rejects(error))

        const rawEvents = [{ some: 'raw event' }, { some: 'other raw event' }]
        await expect(BoosterEventDispatcher.dispatch(rawEvents, config)).not.to.be.rejected

        expect(config.logger?.error).to.have.been.calledWith(
          '[Booster]|BoosterEventDispatcher#dispatch: ',
          'Unhandled error while dispatching event: ',
          error
        )
      })
    })

    describe('the `eventProcessor` method', () => {
      it('waits for the snapshot generation process and read model update process to complete', async () => {
        const stubEventStore = createStubInstance(EventStore)
        const stubReadModelStore = createStubInstance(ReadModelStore)

        const boosterEventDispatcher = BoosterEventDispatcher as any
        replace(boosterEventDispatcher, 'snapshotAndUpdateReadModels', fake())
        replace(boosterEventDispatcher, 'dispatchEntityEventsToEventHandlers', fake())

        const callback = boosterEventDispatcher.eventProcessor(stubEventStore, stubReadModelStore)

        await callback(someEvent.entityTypeName, someEvent.entityID, [someEvent], config)

        expect(boosterEventDispatcher.snapshotAndUpdateReadModels).to.have.been.calledOnceWith(
          config,
          someEvent.entityTypeName,
          someEvent.entityID,
          stubEventStore,
          stubReadModelStore
        )
      })

      it('waits for the event to be handled by the event handlers', async () => {
        const stubEventStore = createStubInstance(EventStore)
        const stubReadModelStore = createStubInstance(ReadModelStore)

        const boosterEventDispatcher = BoosterEventDispatcher as any
        replace(boosterEventDispatcher, 'snapshotAndUpdateReadModels', fake())
        replace(boosterEventDispatcher, 'dispatchEntityEventsToEventHandlers', fake())

        const callback = boosterEventDispatcher.eventProcessor(stubEventStore, stubReadModelStore)

        await callback(someEvent.entityTypeName, someEvent.entityID, [someEvent], config)

        expect(boosterEventDispatcher.dispatchEntityEventsToEventHandlers).to.have.been.calledOnceWith(
          [someEvent],
          config
        )
      })
    })

    describe('the `snapshotAndUpdateReadModels` method', () => {
      it('gets the updated state for the event entity', async () => {
        const boosterEventDispatcher = BoosterEventDispatcher as any
        const eventStore = createStubInstance(EventStore)
        const readModelStore = createStubInstance(ReadModelStore)
        eventStore.fetchEntitySnapshot = fake.resolves({}) as any

        await boosterEventDispatcher.snapshotAndUpdateReadModels(
          config,
          someEvent.entityTypeName,
          someEvent.entityID,
          eventStore,
          readModelStore
        )

        expect(eventStore.fetchEntitySnapshot).to.have.been.called
        expect(eventStore.fetchEntitySnapshot).to.have.been.calledOnceWith(someEvent.entityTypeName, someEvent.entityID)
      })

      it('projects the entity state to the corresponding read models', async () => {
        const boosterEventDispatcher = BoosterEventDispatcher as any
        const eventStore = createStubInstance(EventStore)
        eventStore.fetchEntitySnapshot = fake.resolves(someEntitySnapshot) as any

        const readModelStore = createStubInstance(ReadModelStore)

        await boosterEventDispatcher.snapshotAndUpdateReadModels(
          config,
          someEvent.entityTypeName,
          someEvent.entityID,
          eventStore,
          readModelStore
        )
        expect(readModelStore.project).to.have.been.calledOnce
        expect(readModelStore.project).to.have.been.calledWith(someEntitySnapshot)
      })

      context('when the entity reduction fails', () => {
        it('logs the error, does not throw it, and the projects method is not called', async () => {
          const boosterEventDispatcher = BoosterEventDispatcher as any
          const eventStore = createStubInstance(EventStore)
          const readModelStore = createStubInstance(ReadModelStore)
          const error = new Error('some error')
          eventStore.fetchEntitySnapshot = fake.rejects(error) as any

          await expect(
            boosterEventDispatcher.snapshotAndUpdateReadModels(
              config,
              someEvent.entityTypeName,
              someEvent.entityID,
              eventStore,
              readModelStore
            )
          ).to.be.eventually.fulfilled

          expect(readModelStore.project).not.to.have.been.called
          expect(config.logger?.error).to.have.been.calledWith(
            '[Booster]|BoosterEventDispatcher#snapshotAndUpdateReadModels: ',
            'Error while fetching or reducing entity snapshot:',
            error
          )
        })
      })
    })

    describe('the `dispatchEntityEventsToEventHandlers` method', () => {
      afterEach(() => {
        config.eventHandlers[SomeEvent.name] = []
      })

      it('does nothing and does not throw if there are no event handlers', async () => {
        replace(RegisterHandler, 'handle', fake())
        const boosterEventDispatcher = BoosterEventDispatcher as any
        // We try first with null array of event handlers
        config.eventHandlers[SomeEvent.name] = null as any
        await boosterEventDispatcher.dispatchEntityEventsToEventHandlers([someEvent], config)
        // And now with an empty array
        config.eventHandlers[SomeEvent.name] = []
        await boosterEventDispatcher.dispatchEntityEventsToEventHandlers([someEvent], config)
        // It should not throw any errors
      })

      it('calls all the handlers for the current event', async () => {
        const fakeHandler1 = fake()
        const fakeHandler2 = fake()
        config.eventHandlers[SomeEvent.name] = [{ handle: fakeHandler1 }, { handle: fakeHandler2 }]

        replace(RegisterHandler, 'handle', fake())

        const boosterEventDispatcher = BoosterEventDispatcher as any
        await boosterEventDispatcher.dispatchEntityEventsToEventHandlers([someEvent], config)

        const eventValue: any = someEvent.value
        const anEventInstance = new SomeEvent(eventValue.id)
        anEventInstance.entityID = eventValue.entityID

        expect(fakeHandler1).to.have.been.calledOnceWith(anEventInstance)
        expect(fakeHandler2).to.have.been.calledOnceWith(anEventInstance)
      })

      it('calls the register handler for all the published events', async () => {
        let capturedRegister1: Register = {} as any
        let capturedRegister2: Register = {} as any
        const fakeHandler1 = fake((event: EventInterface, register: Register) => {
          capturedRegister1 = register
        })
        const fakeHandler2 = fake((event: EventInterface, register: Register) => {
          capturedRegister2 = register
        })
        config.eventHandlers[SomeEvent.name] = [{ handle: fakeHandler1 }, { handle: fakeHandler2 }]

        replace(RegisterHandler, 'handle', fake())

        const boosterEventDispatcher = BoosterEventDispatcher as any
        await boosterEventDispatcher.dispatchEntityEventsToEventHandlers([someEvent], config)

        expect(RegisterHandler.handle).to.have.been.calledTwice
        expect(RegisterHandler.handle).to.have.been.calledWith(config, capturedRegister1)
        expect(RegisterHandler.handle).to.have.been.calledWith(config, capturedRegister2)
      })

      it('waits for async event handlers to finish', async () => {
        let capturedRegister: Register = new Register(random.uuid(), {} as any, RegisterHandler.flush)
        const fakeHandler = fake(async (event: EventInterface, register: Register) => {
          await new Promise((resolve) => setTimeout(resolve, 100))
          register.events(someEvent.value as EventInterface)
          capturedRegister = register
        })
        config.eventHandlers[SomeEvent.name] = [{ handle: fakeHandler }]

        replace(RegisterHandler, 'handle', fake())

        const boosterEventDispatcher = BoosterEventDispatcher as any
        await boosterEventDispatcher.dispatchEntityEventsToEventHandlers([someEvent], config)

        expect(RegisterHandler.handle).to.have.been.calledWith(config, capturedRegister)
        expect(capturedRegister.eventList[0]).to.be.deep.equal(someEvent.value)
      })
    })

    it('calls an instance method in the event and it is executed without failing', async () => {
      config.eventHandlers[SomeEvent.name] = [{ handle: AnEventHandler.handle }]
      const boosterEventDispatcher = BoosterEventDispatcher as any
      const getPrefixedIdFake = fake()
      replace(SomeEvent.prototype, 'getPrefixedId', getPrefixedIdFake)
      await boosterEventDispatcher.dispatchEntityEventsToEventHandlers([someEvent], config)
      expect(getPrefixedIdFake).to.have.been.called
    })
  })
})
