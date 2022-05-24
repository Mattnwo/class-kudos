import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.GroupCreateArgs>({
  group: {
    one: {
      data: {
        type: 'String',
        name: 'String',
        owner: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5111418',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        type: 'String',
        name: 'String',
        owner: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1752549',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
