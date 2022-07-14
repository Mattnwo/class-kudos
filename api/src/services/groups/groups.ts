import type {
  QueryResolvers,
  MutationResolvers,
  GroupResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const groups: QueryResolvers['groups'] = () => {
  return db.group.findMany()
}

export const group: QueryResolvers['group'] = ({ id }) => {
  return db.group.findUnique({
    where: { id },
  })
}

export const createGroup: MutationResolvers['createGroup'] = ({ input }) => {
  return db.group.create({
    data: input,
  })
}

export const updateGroup: MutationResolvers['updateGroup'] = ({
  id,
  input,
}) => {
  return db.group.update({
    data: input,
    where: { id },
  })
}

export const deleteGroup: MutationResolvers['deleteGroup'] = ({ id }) => {
  return db.group.delete({
    where: { id },
  })
}

export const Group: GroupResolvers = {
  owner: (_obj, { root }) =>
    db.group.findUnique({ where: { id: root.id } }).owner(),
  enrollments: (_obj, { root }) =>
    db.group.findUnique({ where: { id: root.id } }).enrollments(),
  behaviors: (_obj, { root }) =>
    db.group.findUnique({ where: { id: root.id } }).behaviors(),
  rewards: (_obj, { root }) =>
    db.group.findUnique({ where: { id: root.id } }).rewards(),
  feedback: (_obj, { root }) =>
    db.group.findUnique({ where: { id: root.id } }).feedback(),
  redeemed: (_obj, { root }) =>
    db.group.findUnique({ where: { id: root.id } }).redeemed(),
}

export const groupsOwned: QueryResolvers['groupsOwned'] = ({ userId }) => {
  return db.group.findMany({
    where: { ownerId: userId, archived: false },
    orderBy: { name: 'desc' },
  })
}

export const groupCardsTeacher: QueryResolvers['groupCardsTeacher'] = ({
  userId,
}) => {
  return db.group.findMany({
    where: { ownerId: userId, archived: false, type: 'class' },
    orderBy: { name: 'desc' },
  })
}
