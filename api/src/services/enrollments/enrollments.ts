import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  EnrollmentResolvers,
} from 'types/graphql'

export const enrollments: QueryResolvers['enrollments'] = () => {
  return db.enrollment.findMany()
}

export const enrollment: QueryResolvers['enrollment'] = ({ id }) => {
  return db.enrollment.findUnique({
    where: { id },
  })
}

export const createEnrollment: MutationResolvers['createEnrollment'] = ({
  input,
}) => {
  return db.enrollment.create({
    data: input,
  })
}

export const updateEnrollment: MutationResolvers['updateEnrollment'] = ({
  id,
  input,
}) => {
  return db.enrollment.update({
    data: input,
    where: { id },
  })
}

export const deleteEnrollment: MutationResolvers['deleteEnrollment'] = ({
  id,
}) => {
  return db.enrollment.delete({
    where: { id },
  })
}

export const Enrollment: EnrollmentResolvers = {
  user: (_obj, { root }) =>
    db.enrollment.findUnique({ where: { id: root.id } }).user(),
  group: (_obj, { root }) =>
    db.enrollment.findUnique({ where: { id: root.id } }).group(),
}
