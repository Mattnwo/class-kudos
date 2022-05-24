import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.GroupPointCreateArgs>({
  groupPoint: {
    one: {
      data: {
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1929556',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        group: {
          create: {
            type: 'String',
            name: 'String',
            owner: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String382967',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7816089',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        group: {
          create: {
            type: 'String',
            name: 'String',
            owner: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String7900737',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
