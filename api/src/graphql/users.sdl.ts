export const schema = gql`
  type User {
    id: String!
    firstName: String!
    lastName: String!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    profileImage: String
    createdAt: DateTime!
    updatedAt: DateTime!
    points: Int!
    roles: [UserRole]!
    feedback: [Feedback]!
    redeemed: [Redeemed]!
    groups: [Group]!
    groupPoints: [GroupPoint]!
    enrollments: [Enrollment]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    profileImage: String
    points: Int!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    profileImage: String
    points: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
