import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RewardCreateArgs>({
  reward: {
    one: { data: { name: 'String', cost: 5923543 } },
    two: { data: { name: 'String', cost: 4597070 } },
  },
})

export type StandardScenario = typeof standard
