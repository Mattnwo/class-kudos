import type { FindRedeemeds } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Redeemeds from 'src/components/Redeemed/Redeemeds'

export const QUERY = gql`
  query FindRedeemeds {
    redeemeds {
      id
      userId
      name
      cost
      response
      reviewed
      reviewedAt
      groupId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No redeemeds yet. '}
      <Link
        to={routes.newRedeemed()}
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

export const Success = ({ redeemeds }: CellSuccessProps<FindRedeemeds>) => {
  return <Redeemeds redeemeds={redeemeds} />
}
