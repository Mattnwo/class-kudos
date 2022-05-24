import type { FindRewardById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Reward from 'src/components/Reward/Reward'

export const QUERY = gql`
  query FindRewardById($id: String!) {
    reward: reward(id: $id) {
      id
      name
      cost
      responseRequired
      responsePrompt
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Reward not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ reward }: CellSuccessProps<FindRewardById>) => {
  return <Reward reward={reward} />
}
