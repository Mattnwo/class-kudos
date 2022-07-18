import { Dialog } from '@headlessui/react'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BehaviorForm from 'src/components/Behavior/BehaviorForm'

const CREATE_BEHAVIOR_MUTATION = gql`
  mutation CreateBehaviorMutation($input: CreateBehaviorInput!) {
    createBehavior(input: $input) {
      id
    }
  }
`

const NewBehavior = ({ groupId, isOpen, setIsOpen }) => {
  const [createBehavior, { loading, error }] = useMutation(
    CREATE_BEHAVIOR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Behavior created')
        setIsOpen(false)
      },
      onError: (error) => {
        toast.error(error.message)
      },
      refetchQueries: ['BehaviorsForTeacherGroupOptionsQuery'],
    }
  )

  const onSave = (input) => {
    createBehavior({ variables: { input } })
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
            Add Behavior
          </Dialog.Title>
          <Dialog.Description className="font-body p-4">
            This will add a behavior to track on the group.
          </Dialog.Description>
          <div className="font-body p-4">
            <BehaviorForm groupId={groupId} onSave={onSave} />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default NewBehavior
