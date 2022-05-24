import EditEnrollmentCell from 'src/components/Enrollment/EditEnrollmentCell'

type EnrollmentPageProps = {
  id: string
}

const EditEnrollmentPage = ({ id }: EnrollmentPageProps) => {
  return <EditEnrollmentCell id={id} />
}

export default EditEnrollmentPage
