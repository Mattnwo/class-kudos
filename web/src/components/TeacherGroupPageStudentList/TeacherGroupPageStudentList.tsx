import Button from 'src/components/Button'
export interface CurrentStudent {
  id: string
  firstName: string
  lastName: string
  points: number
  groupPoints: number
}

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
  currentStudent: CurrentStudent
  setCurrentStudent: ({ id, firstName, lastName, points, groupPoints }) => void
  selectingMultiple: boolean
  currentStudents: CurrentStudent[]
  toggleSelectingMultiple: () => void
  handleMultiSelect: ({ id, firstName, lastName, points, groupPoints }) => void
}

const TeacherGroupPageStudentList = (
  groupData: TeacherGroupPageStudentListProps
) => {
  return (
    <>
      <Button
        onClick={() => {
          groupData.toggleSelectingMultiple()
        }}
        red={groupData.selectingMultiple}
      >
        {groupData.selectingMultiple ? 'Select None' : 'Select Multiple'}
      </Button>
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
                if (groupData.selectingMultiple) {
                  // selecting multiple students
                  if (
                    groupData.currentStudents
                      .map((student) => student.id)
                      .includes(enrollment.user.id)
                  )
                    return true
                } else {
                  //selecting one student
                  if (groupData.currentStudent === null) return false
                  if (groupData.currentStudent.id == enrollment.user.id)
                    return true
                }
              }
              return (
                <tr
                  className={`font-body text-indigo-900 hover:bg-indigo-100 ${
                    isSelected() && 'bg-indigo-100'
                  }`}
                  key={enrollment.id}
                  onClick={() => {
                    if (groupData.selectingMultiple) {
                      groupData.handleMultiSelect({
                        id: enrollment.user.id,
                        firstName: enrollment.user.firstName,
                        lastName: enrollment.user.lastName,
                        points: enrollment.user.points,
                        groupPoints: enrollment.groupPoints,
                      })
                    } else {
                      if (isSelected()) {
                        groupData.setCurrentStudent(null)
                      } else {
                        groupData.setCurrentStudent({
                          id: enrollment.user.id,
                          firstName: enrollment.user.firstName,
                          lastName: enrollment.user.lastName,
                          points: enrollment.user.points,
                          groupPoints: enrollment.groupPoints,
                        })
                      }
                    }
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
    </>
  )
}

export default TeacherGroupPageStudentList
export { TeacherGroupPageStudentListProps }
