import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Redeemed/RedeemedsCell'

const DELETE_REDEEMED_MUTATION = gql`
  mutation DeleteRedeemedMutation($id: String!) {
    deleteRedeemed(id: $id) {
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

const RedeemedsList = ({ redeemeds }) => {
  const [deleteRedeemed] = useMutation(DELETE_REDEEMED_MUTATION, {
    onCompleted: () => {
      toast.success('Redeemed deleted')
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
    if (confirm('Are you sure you want to delete redeemed ' + id + '?')) {
      deleteRedeemed({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Response</th>
            <th>Reviewed</th>
            <th>Reviewed at</th>
            <th>Group id</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {redeemeds.map((redeemed) => (
            <tr key={redeemed.id}>
              <td>{truncate(redeemed.id)}</td>
              <td>{truncate(redeemed.userId)}</td>
              <td>{truncate(redeemed.name)}</td>
              <td>{truncate(redeemed.cost)}</td>
              <td>{truncate(redeemed.response)}</td>
              <td>{checkboxInputTag(redeemed.reviewed)}</td>
              <td>{timeTag(redeemed.reviewedAt)}</td>
              <td>{truncate(redeemed.groupId)}</td>
              <td>{timeTag(redeemed.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.redeemed({ id: redeemed.id })}
                    title={'Show redeemed ' + redeemed.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRedeemed({ id: redeemed.id })}
                    title={'Edit redeemed ' + redeemed.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete redeemed ' + redeemed.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(redeemed.id)}
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

export default RedeemedsList
