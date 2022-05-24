export const schema = gql`
  type Behavior {
    id: String!
    name: String!
    value: Int!
    group: Group
    groupId: String
    feedback: [Feedback]!
  }

  type Query {
    behaviors: [Behavior!]! @requireAuth
    behavior(id: String!): Behavior @requireAuth
  }

  input CreateBehaviorInput {
    name: String!
    value: Int!
    groupId: String
  }

  input UpdateBehaviorInput {
    name: String
    value: Int
    groupId: String
  }

  type Mutation {
    createBehavior(input: CreateBehaviorInput!): Behavior! @requireAuth
    updateBehavior(id: String!, input: UpdateBehaviorInput!): Behavior!
      @requireAuth
    deleteBehavior(id: String!): Behavior! @requireAuth
  }
`
