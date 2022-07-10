import type {
  FindGroupCardsTeacherQuery,
  FindGroupCardsTeacherQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import GroupCardTeacher from 'src/components/GroupCardTeacher/GroupCardTeacher'

export const QUERY = gql`
  query FindGroupCardsTeacherQuery($userId: String!) {
    groupCardsTeacher(userId: $userId) {
      id
      name
      description
      enrollId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindGroupCardsTeacherQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  groupCardsTeacher,
}: CellSuccessProps<
  FindGroupCardsTeacherQuery,
  FindGroupCardsTeacherQueryVariables
>) => {
  return (
    <>
      {groupCardsTeacher.map((group) => (
        <GroupCardTeacher key={group.id} group={group} />
      ))}
    </>
  )
}
