import EditUserRoleCell from 'src/components/UserRole/EditUserRoleCell'

type UserRolePageProps = {
  id: string
}

const EditUserRolePage = ({ id }: UserRolePageProps) => {
  return <EditUserRoleCell id={id} />
}

export default EditUserRolePage
