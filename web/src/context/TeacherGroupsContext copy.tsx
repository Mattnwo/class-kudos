import { useState, useContext, createContext } from 'react'

type StudentsPointsContextProps = {
  studentTotals: {
    userId: string
    points: number
  }[]
  studentGroupPoints: {
    userId: string
    groupId: string
    groupPoints: number
  }[]
  setStudentTotals: (students: []) => void
  setStudentGroupPoints: (students: []) => void
}

const StudentsPointsContext = createContext<StudentsPointsContextProps | null>(
  null
)
StudentsPointsContext.displayName = 'TeacherGroupsContext'

const StudentsPointsContextProvider = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  const [studentTotals, setStudentTotals] = useState(null)
  const [studentGroupPoints, setStudentGroupPoints] = useState(null)

  return (
    <StudentsPointsContext.Provider
      value={{
        studentTotals: studentTotals,
        studentGroupPoints: studentGroupPoints,
        setStudentTotals: (students) => {
          setStudentTotals(students)
        },
        setStudentGroupPoints: (students) => {
          setStudentGroupPoints(students)
        },
      }}
    >
      {children}
    </StudentsPointsContext.Provider>
  )
}

const useTeacherGroups = () => useContext(StudentsPointsContext)

export { StudentsPointsContextProvider, useTeacherGroups }
export default StudentsPointsContext
