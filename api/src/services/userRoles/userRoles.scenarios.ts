import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserRoleCreateArgs>({
  userRole: {
    one: {
      data: {
        role: 'String',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1047561',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        role: 'String',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String878270',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
