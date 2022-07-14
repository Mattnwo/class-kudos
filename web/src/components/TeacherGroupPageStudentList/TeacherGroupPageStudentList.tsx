interface TeacherGroupPageStudentListProps {
  enrollments: {
    id: string
    groupPoints: number
    user: {
      id: string
      firstName: string
      lastName: string
      points: number
    }
  }[]
}

const TeacherGroupPageStudentList = (
  enrollments: TeacherGroupPageStudentListProps
) => {
  console.log(enrollments)
  return (
    <table className="min-w-[400px] table-fixed overflow-hidden">
      <tbody>
        <tr className="text-indigo-500 border-b-[1px] border-b-indigo-500 text-xs font-body">
          <th className="text-left px-4 py-4">Name</th>
          <th className="text-right px-4 py-4 w-12">Group Points</th>
          <th className="text-right px-4 py-4 w-12">Total Points</th>
        </tr>
        {Array.isArray(enrollments.enrollments) &&
          enrollments.enrollments.map((enrollment) => (
            <>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={enrollment.id}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {enrollment.user.firstName && enrollment.user.firstName}{' '}
                  {enrollment.user.lastName && enrollment.user.lastName}
                </td>
                <td className="text-right px-4 py-4">
                  {enrollment.groupPoints}
                </td>
                <td className="text-right rounded-r-lg px-4 py-4 text-indigo-300">
                  {enrollment.user.points}
                </td>
              </tr>
            </>
          ))}
      </tbody>
    </table>
  )
}

export default TeacherGroupPageStudentList
export { TeacherGroupPageStudentListProps }
