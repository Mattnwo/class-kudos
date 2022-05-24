import type { EditGroupPointById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import GroupPointForm from 'src/components/GroupPoint/GroupPointForm'

export const QUERY = gql`
  query EditGroupPointById($id: String!) {
    groupPoint: groupPoint(id: $id) {
      id
      points
      userId
      groupId
    }
  }
`
const UPDATE_GROUP_POINT_MUTATION = gql`
  mutation UpdateGroupPointMutation($id: String!, $input: UpdateGroupPointInput!) {
    updateGroupPoint(id: $id, input: $input) {
      id
      points
      userId
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ groupPoint }: CellSuccessProps<EditGroupPointById>) => {
  const [updateGroupPoint, { loading, error }] = useMutation(UPDATE_GROUP_POINT_MUTATION, {
    onCompleted: () => {
      toast.success('GroupPoint updated')
      navigate(routes.groupPoints())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateGroupPoint({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit GroupPoint {groupPoint.id}</h2>
      </header>
      <div className="rw-segment-main">
        <GroupPointForm groupPoint={groupPoint} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
