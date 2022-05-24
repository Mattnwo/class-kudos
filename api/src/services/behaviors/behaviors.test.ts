import {
  behaviors,
  behavior,
  createBehavior,
  updateBehavior,
  deleteBehavior,
} from './behaviors'
import type { StandardScenario } from './behaviors.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('behaviors', () => {
  scenario('returns all behaviors', async (scenario: StandardScenario) => {
    const result = await behaviors()

    expect(result.length).toEqual(Object.keys(scenario.behavior).length)
  })

  scenario('returns a single behavior', async (scenario: StandardScenario) => {
    const result = await behavior({ id: scenario.behavior.one.id })

    expect(result).toEqual(scenario.behavior.one)
  })

  scenario('creates a behavior', async () => {
    const result = await createBehavior({
      input: { name: 'String', value: 5650754 },
    })

    expect(result.name).toEqual('String')
    expect(result.value).toEqual(5650754)
  })

  scenario('updates a behavior', async (scenario: StandardScenario) => {
    const original = await behavior({ id: scenario.behavior.one.id })
    const result = await updateBehavior({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a behavior', async (scenario: StandardScenario) => {
    const original = await deleteBehavior({ id: scenario.behavior.one.id })
    const result = await behavior({ id: original.id })

    expect(result).toEqual(null)
  })
})
