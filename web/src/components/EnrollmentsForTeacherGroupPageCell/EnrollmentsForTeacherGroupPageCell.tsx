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
      user {
        id
        firstName
        lastName
        points
      }
    }
    groupPoints: groupPointsOfGroup(id: $groupId) {
      id
      userId
      points
    }
  }
`

export const afterQuery = (data) => {
  console.log('data', data)
  return { ...data }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEnrollmentsForTeacherGroupPageQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  enrollments,
  groupPoints,
}: CellSuccessProps<
  FindEnrollmentsForTeacherGroupPageQuery,
  FindEnrollmentsForTeacherGroupPageQueryVariables
>) => {
  return (
    <>
      <div>{JSON.stringify(enrollments)}</div>
      <div>{JSON.stringify(groupPoints)}</div>
      {/* <TeacherGroupPageStudentList students={} /> */}
    </>
  )
}
