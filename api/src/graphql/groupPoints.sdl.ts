export const schema = gql`
  type GroupPoint {
    id: String!
    points: Int!
    user: User!
    userId: String!
    group: Group!
    groupId: String!
  }

  type Query {
    groupPoints: [GroupPoint!]! @requireAuth
    groupPoint(id: String!): GroupPoint @requireAuth
  }

  input CreateGroupPointInput {
    points: Int!
    userId: String!
    groupId: String!
  }

  input UpdateGroupPointInput {
    points: Int
    userId: String
    groupId: String
  }

  type Mutation {
    createGroupPoint(input: CreateGroupPointInput!): GroupPoint! @requireAuth
    updateGroupPoint(id: String!, input: UpdateGroupPointInput!): GroupPoint!
      @requireAuth
    deleteGroupPoint(id: String!): GroupPoint! @requireAuth
  }
`
