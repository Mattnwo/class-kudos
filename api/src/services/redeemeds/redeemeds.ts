import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  RedeemedResolvers,
} from 'types/graphql'

export const redeemeds: QueryResolvers['redeemeds'] = () => {
  return db.redeemed.findMany()
}

export const redeemed: QueryResolvers['redeemed'] = ({ id }) => {
  return db.redeemed.findUnique({
    where: { id },
  })
}

export const createRedeemed: MutationResolvers['createRedeemed'] = ({
  input,
}) => {
  return db.redeemed.create({
    data: input,
  })
}

export const updateRedeemed: MutationResolvers['updateRedeemed'] = ({
  id,
  input,
}) => {
  return db.redeemed.update({
    data: input,
    where: { id },
  })
}

export const deleteRedeemed: MutationResolvers['deleteRedeemed'] = ({ id }) => {
  return db.redeemed.delete({
    where: { id },
  })
}

export const Redeemed: RedeemedResolvers = {
  user: (_obj, { root }) =>
    db.redeemed.findUnique({ where: { id: root.id } }).user(),
  group: (_obj, { root }) =>
    db.redeemed.findUnique({ where: { id: root.id } }).group(),
}
