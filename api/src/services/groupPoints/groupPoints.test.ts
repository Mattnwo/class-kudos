import {
  groupPoints,
  groupPoint,
  createGroupPoint,
  updateGroupPoint,
  deleteGroupPoint,
} from './groupPoints'
import type { StandardScenario } from './groupPoints.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('groupPoints', () => {
  scenario('returns all groupPoints', async (scenario: StandardScenario) => {
    const result = await groupPoints()

    expect(result.length).toEqual(Object.keys(scenario.groupPoint).length)
  })

  scenario(
    'returns a single groupPoint',
    async (scenario: StandardScenario) => {
      const result = await groupPoint({ id: scenario.groupPoint.one.id })

      expect(result).toEqual(scenario.groupPoint.one)
    }
  )

  scenario('creates a groupPoint', async (scenario: StandardScenario) => {
    const result = await createGroupPoint({
      input: {
        userId: scenario.groupPoint.two.userId,
        groupId: scenario.groupPoint.two.groupId,
      },
    })

    expect(result.userId).toEqual(scenario.groupPoint.two.userId)
    expect(result.groupId).toEqual(scenario.groupPoint.two.groupId)
  })

  scenario('updates a groupPoint', async (scenario: StandardScenario) => {
    const original = await groupPoint({ id: scenario.groupPoint.one.id })
    const result = await updateGroupPoint({
      id: original.id,
      input: { userId: scenario.groupPoint.two.userId },
    })

    expect(result.userId).toEqual(scenario.groupPoint.two.userId)
  })

  scenario('deletes a groupPoint', async (scenario: StandardScenario) => {
    const original = await deleteGroupPoint({ id: scenario.groupPoint.one.id })
    const result = await groupPoint({ id: original.id })

    expect(result).toEqual(null)
  })
})
