import RedeemedCell from 'src/components/Redeemed/RedeemedCell'

type RedeemedPageProps = {
  id: string
}

const RedeemedPage = ({ id }: RedeemedPageProps) => {
  return <RedeemedCell id={id} />
}

export default RedeemedPage
