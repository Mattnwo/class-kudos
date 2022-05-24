import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  BehaviorResolvers,
} from 'types/graphql'

export const behaviors: QueryResolvers['behaviors'] = () => {
  return db.behavior.findMany()
}

export const behavior: QueryResolvers['behavior'] = ({ id }) => {
  return db.behavior.findUnique({
    where: { id },
  })
}

export const createBehavior: MutationResolvers['createBehavior'] = ({
  input,
}) => {
  return db.behavior.create({
    data: input,
  })
}

export const updateBehavior: MutationResolvers['updateBehavior'] = ({
  id,
  input,
}) => {
  return db.behavior.update({
    data: input,
    where: { id },
  })
}

export const deleteBehavior: MutationResolvers['deleteBehavior'] = ({ id }) => {
  return db.behavior.delete({
    where: { id },
  })
}

export const Behavior: BehaviorResolvers = {
  group: (_obj, { root }) =>
    db.behavior.findUnique({ where: { id: root.id } }).group(),
  feedback: (_obj, { root }) =>
    db.behavior.findUnique({ where: { id: root.id } }).feedback(),
}
