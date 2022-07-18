import { useState } from 'react'

import type {
  FindGroupForTeacherGroupPageQuery,
  FindGroupForTeacherGroupPageQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import GroupForTeacherGroupPage from 'src/components/Group/GroupForTeacherGroupPage'

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
}: CellFailureProps<FindGroupForTeacherGroupPageQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  enrollmentsForGroup,
}: CellSuccessProps<
  FindGroupForTeacherGroupPageQuery,
  FindGroupForTeacherGroupPageQueryVariables
>) => {
  return <GroupForTeacherGroupPage enrollmentsForGroup={enrollmentsForGroup} />
}
