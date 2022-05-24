import FeedbackCell from 'src/components/Feedback/FeedbackCell'

type FeedbackPageProps = {
  id: string
}

const FeedbackPage = ({ id }: FeedbackPageProps) => {
  return <FeedbackCell id={id} />
}

export default FeedbackPage
