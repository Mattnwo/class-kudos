import type { FindGroupPointById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import GroupPoint from 'src/components/GroupPoint/GroupPoint'

export const QUERY = gql`
  query FindGroupPointById($id: String!) {
    groupPoint: groupPoint(id: $id) {
      id
      points
      userId
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>GroupPoint not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ groupPoint }: CellSuccessProps<FindGroupPointById>) => {
  return <GroupPoint groupPoint={groupPoint} />
}
