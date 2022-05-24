import type { FindBehaviorById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Behavior from 'src/components/Behavior/Behavior'

export const QUERY = gql`
  query FindBehaviorById($id: String!) {
    behavior: behavior(id: $id) {
      id
      name
      value
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Behavior not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ behavior }: CellSuccessProps<FindBehaviorById>) => {
  return <Behavior behavior={behavior} />
}
