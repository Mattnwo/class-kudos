import type { EditRewardById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RewardForm from 'src/components/Reward/RewardForm'

export const QUERY = gql`
  query EditRewardById($id: String!) {
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
const UPDATE_REWARD_MUTATION = gql`
  mutation UpdateRewardMutation($id: String!, $input: UpdateRewardInput!) {
    updateReward(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  reward,
  setIsOpen,
}: CellSuccessProps<EditRewardById>) => {
  const [updateReward, { loading, error }] = useMutation(
    UPDATE_REWARD_MUTATION,
    {
      onCompleted: () => {
        toast.success('Reward updated')
        setIsOpen(false)
      },
      onError: (error) => {
        toast.error(error.message)
        setIsOpen(false)
      },
    }
  )

  const onSave = (input, id) => {
    updateReward({ variables: { id, input } })
  }

  return (
    <RewardForm
      reward={reward}
      onSave={onSave}
      error={error}
      loading={loading}
    />
  )
}
