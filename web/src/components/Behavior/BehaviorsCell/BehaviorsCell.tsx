import type { FindBehaviors } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Behaviors from 'src/components/Behavior/Behaviors'

export const QUERY = gql`
  query FindBehaviors {
    behaviors {
      id
      name
      value
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No behaviors yet. '}
      <Link
        to={routes.newBehavior()}
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

export const Success = ({ behaviors }: CellSuccessProps<FindBehaviors>) => {
  return <Behaviors behaviors={behaviors} />
}
