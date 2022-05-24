import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EnrollmentCreateArgs>({
  enrollment: {
    one: {
      data: {
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9680685',
            hashedPassword: 'String',
            salt: 'String',
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
            email: 'String2780593',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
