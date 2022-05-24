import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  FeedbackResolvers,
} from 'types/graphql'

export const feedbacks: QueryResolvers['feedbacks'] = () => {
  return db.feedback.findMany()
}

export const feedback: QueryResolvers['feedback'] = ({ id }) => {
  return db.feedback.findUnique({
    where: { id },
  })
}

export const createFeedback: MutationResolvers['createFeedback'] = ({
  input,
}) => {
  return db.feedback.create({
    data: input,
  })
}

export const updateFeedback: MutationResolvers['updateFeedback'] = ({
  id,
  input,
}) => {
  return db.feedback.update({
    data: input,
    where: { id },
  })
}

export const deleteFeedback: MutationResolvers['deleteFeedback'] = ({ id }) => {
  return db.feedback.delete({
    where: { id },
  })
}

export const Feedback: FeedbackResolvers = {
  user: (_obj, { root }) =>
    db.feedback.findUnique({ where: { id: root.id } }).user(),
  behavior: (_obj, { root }) =>
    db.feedback.findUnique({ where: { id: root.id } }).behavior(),
  group: (_obj, { root }) =>
    db.feedback.findUnique({ where: { id: root.id } }).group(),
}
