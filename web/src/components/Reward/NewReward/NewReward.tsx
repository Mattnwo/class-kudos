import { Dialog } from '@headlessui/react'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RewardForm from 'src/components/Reward/RewardForm'

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
        navigate(routes.rewards())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createReward({ variables: { input } })
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white shadow-lg">
          <Dialog.Title className="bg-indigo-600 rounded-t p-4 text-white font-display text-lg">
            Add Reward
          </Dialog.Title>
          <Dialog.Description className="font-body p-4">
            This will add a reward that students can redeem with their kudos.
          </Dialog.Description>
          <div className="font-body p-4">
            <RewardForm
              groupId={groupId}
              onSave={onSave}
              loading={loading}
              error={error}
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default NewReward
