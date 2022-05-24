import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BehaviorCreateArgs>({
  behavior: {
    one: { data: { name: 'String', value: 8621124 } },
    two: { data: { name: 'String', value: 8137538 } },
  },
})

export type StandardScenario = typeof standard
