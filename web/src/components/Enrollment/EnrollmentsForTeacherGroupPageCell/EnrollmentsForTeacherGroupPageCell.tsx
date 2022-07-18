import { useState } from 'react'

import type {
  FindEnrollmentsForTeacherGroupPageQuery,
  FindEnrollmentsForTeacherGroupPageQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import EnrollmentsForTeacherGroupPage from 'src/components/Enrollment/EnrollmentsForTeacherGroupPage/EnrollmentsForTeacherGroupPage'

export const QUERY = gql`
  query FindTeacherGroupPageQuery($groupId: String!) {
    enrollmentsForGroup(groupId: $groupId) {
      id
      groupPoints
      user {
        id
        firstName
        lastName
        points
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEnrollmentsForTeacherGroupPageQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  enrollmentsForGroup,
}: CellSuccessProps<
  FindEnrollmentsForTeacherGroupPageQuery,
  FindEnrollmentsForTeacherGroupPageQueryVariables
>) => {
  return (
    <EnrollmentsForTeacherGroupPage enrollmentsForGroup={enrollmentsForGroup} />
  )
}
