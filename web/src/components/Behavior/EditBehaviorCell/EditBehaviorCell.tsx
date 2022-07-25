import type { EditBehaviorById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BehaviorForm from 'src/components/Behavior/BehaviorForm'

export const QUERY = gql`
  query EditBehaviorById($id: String!) {
    behavior: behavior(id: $id) {
      id
      name
      value
      groupId
    }
  }
`
const UPDATE_BEHAVIOR_MUTATION = gql`
  mutation UpdateBehaviorMutation($id: String!, $input: UpdateBehaviorInput!) {
    updateBehavior(id: $id, input: $input) {
      id
      name
      value
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  behavior,
  setIsOpen,
}: CellSuccessProps<EditBehaviorById>) => {
  const [updateBehavior, { loading, error }] = useMutation(
    UPDATE_BEHAVIOR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Behavior updated')
        setIsOpen(false)
      },
      onError: (error) => {
        toast.error(error.message)
        setIsOpen(false)
      },
    }
  )

  const onSave = (input, id) => {
    updateBehavior({ variables: { id, input } })
  }

  return (
    <BehaviorForm
      behavior={behavior}
      onSave={onSave}
      error={error}
      loading={loading}
    />
  )
}
