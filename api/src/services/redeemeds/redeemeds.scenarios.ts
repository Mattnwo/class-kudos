import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RedeemedCreateArgs>({
  redeemed: {
    one: {
      data: {
        name: 'String',
        cost: 6885187,
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String2101416',
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
                email: 'String2736051',
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
        name: 'String',
        cost: 9323720,
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String3447832',
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
                email: 'String7727903',
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
