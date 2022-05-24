import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_GROUP_POINT_MUTATION = gql`
  mutation DeleteGroupPointMutation($id: String!) {
    deleteGroupPoint(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const GroupPoint = ({ groupPoint }) => {
  const [deleteGroupPoint] = useMutation(DELETE_GROUP_POINT_MUTATION, {
    onCompleted: () => {
      toast.success('GroupPoint deleted')
      navigate(routes.groupPoints())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete groupPoint ' + id + '?')) {
      deleteGroupPoint({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">GroupPoint {groupPoint.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{groupPoint.id}</td>
            </tr><tr>
              <th>Points</th>
              <td>{groupPoint.points}</td>
            </tr><tr>
              <th>User id</th>
              <td>{groupPoint.userId}</td>
            </tr><tr>
              <th>Group id</th>
              <td>{groupPoint.groupId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editGroupPoint({ id: groupPoint.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(groupPoint.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default GroupPoint
