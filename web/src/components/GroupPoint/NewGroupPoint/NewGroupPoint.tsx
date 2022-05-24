import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import GroupPointForm from 'src/components/GroupPoint/GroupPointForm'

const CREATE_GROUP_POINT_MUTATION = gql`
  mutation CreateGroupPointMutation($input: CreateGroupPointInput!) {
    createGroupPoint(input: $input) {
      id
    }
  }
`

const NewGroupPoint = () => {
  const [createGroupPoint, { loading, error }] = useMutation(CREATE_GROUP_POINT_MUTATION, {
    onCompleted: () => {
      toast.success('GroupPoint created')
      navigate(routes.groupPoints())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createGroupPoint({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New GroupPoint</h2>
      </header>
      <div className="rw-segment-main">
        <GroupPointForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewGroupPoint
