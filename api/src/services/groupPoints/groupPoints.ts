import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  GroupPointResolvers,
} from 'types/graphql'

export const groupPoints: QueryResolvers['groupPoints'] = () => {
  return db.groupPoint.findMany()
}

export const groupPoint: QueryResolvers['groupPoint'] = ({ id }) => {
  return db.groupPoint.findUnique({
    where: { id },
  })
}

export const createGroupPoint: MutationResolvers['createGroupPoint'] = ({
  input,
}) => {
  return db.groupPoint.create({
    data: input,
  })
}

export const updateGroupPoint: MutationResolvers['updateGroupPoint'] = ({
  id,
  input,
}) => {
  return db.groupPoint.update({
    data: input,
    where: { id },
  })
}

export const deleteGroupPoint: MutationResolvers['deleteGroupPoint'] = ({
  id,
}) => {
  return db.groupPoint.delete({
    where: { id },
  })
}

export const GroupPoint: GroupPointResolvers = {
  user: (_obj, { root }) =>
    db.groupPoint.findUnique({ where: { id: root.id } }).user(),
  group: (_obj, { root }) =>
    db.groupPoint.findUnique({ where: { id: root.id } }).group(),
}
