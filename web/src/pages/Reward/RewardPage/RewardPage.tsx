import RewardCell from 'src/components/Reward/RewardCell'

type RewardPageProps = {
  id: string
}

const RewardPage = ({ id }: RewardPageProps) => {
  return <RewardCell id={id} />
}

export default RewardPage
