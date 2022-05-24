import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FeedbackCreateArgs>({
  feedback: {
    one: {
      data: {
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1675251',
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
            email: 'String6037178',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
