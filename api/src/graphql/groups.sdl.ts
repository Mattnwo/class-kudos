export const schema = gql`
  type Group {
    id: String!
    type: String!
    name: String!
    description: String
    enrollId: String
    owner: User!
    ownerId: String!
    archived: Boolean!
    enrollments: [Enrollment]!
    behaviors: [Behavior]!
    rewards: [Reward]!
    feedback: [Feedback]!
    redeemed: [Redeemed]!
    groupPoints: [GroupPoint]!
  }

  type Query {
    groups: [Group!]! @requireAuth
    group(id: String!): Group @requireAuth
    groupsOwned(userId: String!): [Group!]! @requireAuth
    groupCardsTeacher(userId: String!): [Group!]! @requireAuth
  }

  input CreateGroupInput {
    type: String!
    name: String!
    description: String
    enrollId: String
    ownerId: String!
    archived: Boolean!
  }

  input UpdateGroupInput {
    type: String
    name: String
    description: String
    enrollId: String
    ownerId: String
    archived: Boolean
  }

  type Mutation {
    createGroup(input: CreateGroupInput!): Group! @requireAuth
    updateGroup(id: String!, input: UpdateGroupInput!): Group! @requireAuth
    deleteGroup(id: String!): Group! @requireAuth
  }
`
