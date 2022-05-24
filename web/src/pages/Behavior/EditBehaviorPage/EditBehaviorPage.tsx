import EditBehaviorCell from 'src/components/Behavior/EditBehaviorCell'

type BehaviorPageProps = {
  id: string
}

const EditBehaviorPage = ({ id }: BehaviorPageProps) => {
  return <EditBehaviorCell id={id} />
}

export default EditBehaviorPage
