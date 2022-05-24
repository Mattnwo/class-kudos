import GroupPointCell from 'src/components/GroupPoint/GroupPointCell'

type GroupPointPageProps = {
  id: string
}

const GroupPointPage = ({ id }: GroupPointPageProps) => {
  return <GroupPointCell id={id} />
}

export default GroupPointPage
