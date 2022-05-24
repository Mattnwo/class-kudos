import EditRewardCell from 'src/components/Reward/EditRewardCell'

type RewardPageProps = {
  id: string
}

const EditRewardPage = ({ id }: RewardPageProps) => {
  return <EditRewardCell id={id} />
}

export default EditRewardPage
