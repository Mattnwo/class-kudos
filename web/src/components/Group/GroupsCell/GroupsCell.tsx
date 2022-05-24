import type { FindGroups } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Groups from 'src/components/Group/Groups'

export const QUERY = gql`
  query FindGroups {
    groups {
      id
      type
      name
      description
      enrollId
      ownerId
      archived
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No groups yet. '}
      <Link
        to={routes.newGroup()}
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

export const Success = ({ groups }: CellSuccessProps<FindGroups>) => {
  return <Groups groups={groups} />
}
