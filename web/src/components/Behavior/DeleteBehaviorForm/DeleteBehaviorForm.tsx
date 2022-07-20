import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_BEHAVIOR_MUTATION = gql`
  mutation deleteBehavior($id: String!) {
    deleteBehavior(id: $id) {
      id
    }
  }
`

const DeleteBehaviorForm = (props) => {
  const { behavior, setIsOpen } = props
  const [deleteBehavior, { loading, error }] = useMutation(
    DELETE_BEHAVIOR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Behavior deleted')
        setIsOpen(false)
      },
      onError: (error) => {
        toast.error(error.message)
      },
      refetchQueries: ['BehaviorsForTeacherGroupOptionsQuery'],
    }
  )

  const onSubmit = () => {
    deleteBehavior({ variables: { id: behavior.id } })
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: true,
            validate: (value) => value === props.behavior.name,
          }}
        />

        <FieldError name="name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DeleteBehaviorForm
