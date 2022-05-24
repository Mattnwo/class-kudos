import type { FindGroupPoints } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import GroupPoints from 'src/components/GroupPoint/GroupPoints'

export const QUERY = gql`
  query FindGroupPoints {
    groupPoints {
      id
      points
      userId
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No groupPoints yet. '}
      <Link
        to={routes.newGroupPoint()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ groupPoints }: CellSuccessProps<FindGroupPoints>) => {
  return <GroupPoints groupPoints={groupPoints} />
}
