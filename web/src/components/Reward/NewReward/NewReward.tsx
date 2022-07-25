import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RewardForm from 'src/components/Reward/RewardForm'
import StyledDialog from 'src/components/Styled/StyledDialog/StyledDialog'

const CREATE_REWARD_MUTATION = gql`
  mutation CreateRewardMutation($input: CreateRewardInput!) {
    createReward(input: $input) {
      id
    }
  }
`

const NewReward = ({ groupId, isOpen, setIsOpen }) => {
  const [createReward, { loading, error }] = useMutation(
    CREATE_REWARD_MUTATION,
    {
      onCompleted: () => {
        toast.success('Reward created')
        setIsOpen(false)
      },
      onError: (error) => {
        toast.error(error.message)
      },
      refetchQueries: ['RewardsForTeacherGroupOptionsQuery'],
    }
  )

  const onSave = (input) => {
    createReward({ variables: { input } })
  }

  return (
    <StyledDialog
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Add Reward"
      description="This will add a reward that students can redeem with their kudos."
    >
      <RewardForm
        groupId={groupId}
        onSave={onSave}
        loading={loading}
        error={error}
      />
    </StyledDialog>
  )
}

export default NewReward
