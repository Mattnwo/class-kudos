import EnrollmentCell from 'src/components/Enrollment/EnrollmentCell'

type EnrollmentPageProps = {
  id: string
}

const EnrollmentPage = ({ id }: EnrollmentPageProps) => {
  return <EnrollmentCell id={id} />
}

export default EnrollmentPage
