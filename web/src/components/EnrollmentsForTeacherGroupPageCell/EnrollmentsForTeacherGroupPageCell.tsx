import type {
  FindEnrollmentsForTeacherGroupPageQuery,
  FindEnrollmentsForTeacherGroupPageQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TeacherGroupPageStudentList from 'src/components/TeacherGroupPageStudentList/TeacherGroupPageStudentList'

export const QUERY = gql`
  query FindEnrollmentsForTeacherGroupPageQuery($groupId: String!) {
    enrollments: enrollmentsForTeacherGroupPage(groupId: $groupId) {
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
  enrollments,
}: CellSuccessProps<
  FindEnrollmentsForTeacherGroupPageQuery,
  FindEnrollmentsForTeacherGroupPageQueryVariables
>) => {
  return (
    <>
      <TeacherGroupPageStudentList enrollments={enrollments} />
    </>
  )
}
