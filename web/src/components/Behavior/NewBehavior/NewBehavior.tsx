import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BehaviorForm from 'src/components/Behavior/BehaviorForm'
import StyledDialog from 'src/components/Styled/StyledDialog/StyledDialog'

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
    <StyledDialog
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Add Behavior"
      description="This will add a behavior to track on the group."
    >
      <BehaviorForm
        groupId={groupId}
        onSave={onSave}
        loading={loading}
        error={error}
      />
    </StyledDialog>
  )
}

export default NewBehavior
