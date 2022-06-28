interface TeacherGroupPageStudentListProps {
  students: {
    name: string
    points: number
    groupPoints: number
  }[]
}

const TeacherGroupPageStudentList = (
  students: TeacherGroupPageStudentListProps
) => {
  return (
    <table className="min-w-[600px] table-auto">
      <tbody>
        <tr className="text-indigo-500 border-b-[1px] border-b-indigo-500 text-xs font-body">
          <th className="text-left px-4 py-4">Name</th>
          <th className="text-right px-4 py-4">Group Points</th>
          <th className="text-right px-4 py-4">Total Points</th>
        </tr>
        {Array.isArray(students.students) &&
          students.students.map((student) => (
            <>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
                </td>
              </tr>
              <tr
                className="font-body text-indigo-900 border-t-[1px] border-t-indigo-200 hover:border-t-transparent hover:bg-indigo-200"
                key={student.name}
              >
                <td className="text-left rounded-l-lg px-4 py-4">
                  {student.name}
                </td>
                <td className="text-right px-4 py-4">{student.groupPoints}</td>
                <td className="text-right rounded-r-lg px-4 py-4">
                  {student.points}
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
