import EditFeedbackCell from 'src/components/Feedback/EditFeedbackCell'

type FeedbackPageProps = {
  id: string
}

const EditFeedbackPage = ({ id }: FeedbackPageProps) => {
  return <EditFeedbackCell id={id} />
}

export default EditFeedbackPage
