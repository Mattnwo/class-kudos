import {
  rewards,
  reward,
  createReward,
  updateReward,
  deleteReward,
} from './rewards'
import type { StandardScenario } from './rewards.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('rewards', () => {
  scenario('returns all rewards', async (scenario: StandardScenario) => {
    const result = await rewards()

    expect(result.length).toEqual(Object.keys(scenario.reward).length)
  })

  scenario('returns a single reward', async (scenario: StandardScenario) => {
    const result = await reward({ id: scenario.reward.one.id })

    expect(result).toEqual(scenario.reward.one)
  })

  scenario('creates a reward', async () => {
    const result = await createReward({
      input: { name: 'String', cost: 4113339 },
    })

    expect(result.name).toEqual('String')
    expect(result.cost).toEqual(4113339)
  })

  scenario('updates a reward', async (scenario: StandardScenario) => {
    const original = await reward({ id: scenario.reward.one.id })
    const result = await updateReward({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a reward', async (scenario: StandardScenario) => {
    const original = await deleteReward({ id: scenario.reward.one.id })
    const result = await reward({ id: original.id })

    expect(result).toEqual(null)
  })
})
