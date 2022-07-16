export interface TeacherGroupPageStudentListProps {
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
  setCurrentStudent: ({ id, firstName, lastName, points, groupPoints }) => void
  currentStudent: {
    id: string
    firstName: string
    lastName: string
    points: number
    groupPoints: number
  }
}

const TeacherGroupPageStudentList = (
  groupData: TeacherGroupPageStudentListProps
) => {
  return (
    <table className="w-full table-fixed overflow-y-scroll">
      <tbody>
        <tr className="text-indigo-500 border-b-[1px] border-b-indigo-500 text-xs font-body">
          <th className="text-left px-4 pb-4">Name</th>
          <th className="text-right px-4 pb-4 w-12">Group Points</th>
          <th className="text-right px-4 pb-4 w-12">Total Points</th>
        </tr>
        {Array.isArray(groupData.enrollments) &&
          groupData.enrollments.map((enrollment) => {
            const isSelected = () => {
              if (groupData.currentStudent === null) return false
              if (groupData.currentStudent.id == enrollment.user.id) return true
            }
            return (
              <tr
                className={`font-body text-indigo-900 hover:bg-indigo-200 ${
                  isSelected() && 'bg-indigo-200'
                }`}
                key={enrollment.id}
                onClick={() => {
                  groupData.setCurrentStudent({
                    id: enrollment.user.id,
                    firstName: enrollment.user.firstName,
                    lastName: enrollment.user.lastName,
                    points: enrollment.user.points,
                    groupPoints: enrollment.groupPoints,
                  })
                }}
              >
                <td className="text-left rounded-l-lg px-4 py-3">
                  {enrollment.user.firstName && enrollment.user.firstName}{' '}
                  {enrollment.user.lastName && enrollment.user.lastName}
                </td>
                <td className="text-right px-4 py-3">
                  {enrollment.groupPoints}
                </td>
                <td className="text-right rounded-r-lg px-4 py-3 text-indigo-300">
                  {enrollment.user.points}
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default TeacherGroupPageStudentList
export { TeacherGroupPageStudentListProps }
