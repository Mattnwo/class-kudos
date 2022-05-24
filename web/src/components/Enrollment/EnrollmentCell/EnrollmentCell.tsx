import type { FindEnrollmentById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Enrollment from 'src/components/Enrollment/Enrollment'

export const QUERY = gql`
  query FindEnrollmentById($id: String!) {
    enrollment: enrollment(id: $id) {
      id
      userId
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Enrollment not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ enrollment }: CellSuccessProps<FindEnrollmentById>) => {
  return <Enrollment enrollment={enrollment} />
}
