import BehaviorCell from 'src/components/Behavior/BehaviorCell'

type BehaviorPageProps = {
  id: string
}

const BehaviorPage = ({ id }: BehaviorPageProps) => {
  return <BehaviorCell id={id} />
}

export default BehaviorPage
