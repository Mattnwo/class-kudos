import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/GroupPoint/GroupPointsCell'

const DELETE_GROUP_POINT_MUTATION = gql`
  mutation DeleteGroupPointMutation($id: String!) {
    deleteGroupPoint(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const GroupPointsList = ({ groupPoints }) => {
  const [deleteGroupPoint] = useMutation(DELETE_GROUP_POINT_MUTATION, {
    onCompleted: () => {
      toast.success('GroupPoint deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete groupPoint ' + id + '?')) {
      deleteGroupPoint({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Points</th>
            <th>User id</th>
            <th>Group id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {groupPoints.map((groupPoint) => (
            <tr key={groupPoint.id}>
              <td>{truncate(groupPoint.id)}</td>
              <td>{truncate(groupPoint.points)}</td>
              <td>{truncate(groupPoint.userId)}</td>
              <td>{truncate(groupPoint.groupId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.groupPoint({ id: groupPoint.id })}
                    title={'Show groupPoint ' + groupPoint.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editGroupPoint({ id: groupPoint.id })}
                    title={'Edit groupPoint ' + groupPoint.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete groupPoint ' + groupPoint.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(groupPoint.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GroupPointsList
