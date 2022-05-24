import EditRedeemedCell from 'src/components/Redeemed/EditRedeemedCell'

type RedeemedPageProps = {
  id: string
}

const EditRedeemedPage = ({ id }: RedeemedPageProps) => {
  return <EditRedeemedCell id={id} />
}

export default EditRedeemedPage
