export const schema = gql`
  type Enrollment {
    id: String!
    user: User!
    userId: String!
    group: Group
    groupId: String
  }

  type Query {
    enrollments: [Enrollment!]! @requireAuth
    enrollment(id: String!): Enrollment @requireAuth
    enrollmentsForTeacherGroupPage(groupId: String!): [Enrollment!]!
      @requireAuth
  }

  input CreateEnrollmentInput {
    userId: String!
    groupId: String
  }

  input UpdateEnrollmentInput {
    userId: String
    groupId: String
  }

  type Mutation {
    createEnrollment(input: CreateEnrollmentInput!): Enrollment! @requireAuth
    updateEnrollment(id: String!, input: UpdateEnrollmentInput!): Enrollment!
      @requireAuth
    deleteEnrollment(id: String!): Enrollment! @requireAuth
  }
`
