import type { FindRedeemedById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Redeemed from 'src/components/Redeemed/Redeemed'

export const QUERY = gql`
  query FindRedeemedById($id: String!) {
    redeemed: redeemed(id: $id) {
      id
      userId
      name
      cost
      response
      reviewed
      reviewedAt
      groupId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Redeemed not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ redeemed }: CellSuccessProps<FindRedeemedById>) => {
  return <Redeemed redeemed={redeemed} />
}
