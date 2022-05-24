import EditGroupPointCell from 'src/components/GroupPoint/EditGroupPointCell'

type GroupPointPageProps = {
  id: string
}

const EditGroupPointPage = ({ id }: GroupPointPageProps) => {
  return <EditGroupPointCell id={id} />
}

export default EditGroupPointPage
