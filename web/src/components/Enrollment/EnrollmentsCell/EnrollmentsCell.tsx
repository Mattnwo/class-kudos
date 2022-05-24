import type { FindEnrollments } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Enrollments from 'src/components/Enrollment/Enrollments'

export const QUERY = gql`
  query FindEnrollments {
    enrollments {
      id
      userId
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No enrollments yet. '}
      <Link
        to={routes.newEnrollment()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ enrollments }: CellSuccessProps<FindEnrollments>) => {
  return <Enrollments enrollments={enrollments} />
}
