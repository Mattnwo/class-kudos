import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import BehaviorForm from 'src/components/Behavior/BehaviorForm'

const CREATE_BEHAVIOR_MUTATION = gql`
  mutation CreateBehaviorMutation($input: CreateBehaviorInput!) {
    createBehavior(input: $input) {
      id
    }
  }
`

const NewBehavior = () => {
  const [createBehavior, { loading, error }] = useMutation(CREATE_BEHAVIOR_MUTATION, {
    onCompleted: () => {
      toast.success('Behavior created')
      navigate(routes.behaviors())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createBehavior({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Behavior</h2>
      </header>
      <div className="rw-segment-main">
        <BehaviorForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBehavior
