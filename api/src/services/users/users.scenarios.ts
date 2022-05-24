import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String5945926',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String6087219',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
