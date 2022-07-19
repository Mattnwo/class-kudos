import type {
  QueryResolvers,
  MutationResolvers,
  RewardResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const rewards: QueryResolvers['rewards'] = () => {
  return db.reward.findMany()
}

export const reward: QueryResolvers['reward'] = ({ id }) => {
  return db.reward.findUnique({
    where: { id },
  })
}

export const createReward: MutationResolvers['createReward'] = ({ input }) => {
  return db.reward.create({
    data: input,
  })
}

export const updateReward: MutationResolvers['updateReward'] = ({
  id,
  input,
}) => {
  return db.reward.update({
    data: input,
    where: { id },
  })
}

export const deleteReward: MutationResolvers['deleteReward'] = ({ id }) => {
  return db.reward.delete({
    where: { id },
  })
}

export const Reward: RewardResolvers = {
  group: (_obj, { root }) =>
    db.reward.findUnique({ where: { id: root.id } }).group(),
}

export const rewardsOfGroup: QueryResolvers['rewardsOfGroup'] = ({
  groupId,
}) => {
  return db.reward.findMany({
    where: { groupId: groupId },
  })
}
