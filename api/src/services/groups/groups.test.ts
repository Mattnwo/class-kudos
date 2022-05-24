import { groups, group, createGroup, updateGroup, deleteGroup } from './groups'
import type { StandardScenario } from './groups.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('groups', () => {
  scenario('returns all groups', async (scenario: StandardScenario) => {
    const result = await groups()

    expect(result.length).toEqual(Object.keys(scenario.group).length)
  })

  scenario('returns a single group', async (scenario: StandardScenario) => {
    const result = await group({ id: scenario.group.one.id })

    expect(result).toEqual(scenario.group.one)
  })

  scenario('creates a group', async (scenario: StandardScenario) => {
    const result = await createGroup({
      input: {
        type: 'String',
        name: 'String',
        ownerId: scenario.group.two.ownerId,
      },
    })

    expect(result.type).toEqual('String')
    expect(result.name).toEqual('String')
    expect(result.ownerId).toEqual(scenario.group.two.ownerId)
  })

  scenario('updates a group', async (scenario: StandardScenario) => {
    const original = await group({ id: scenario.group.one.id })
    const result = await updateGroup({
      id: original.id,
      input: { type: 'String2' },
    })

    expect(result.type).toEqual('String2')
  })

  scenario('deletes a group', async (scenario: StandardScenario) => {
    const original = await deleteGroup({ id: scenario.group.one.id })
    const result = await group({ id: original.id })

    expect(result).toEqual(null)
  })
})
