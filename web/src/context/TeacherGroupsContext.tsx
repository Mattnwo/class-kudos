import { useState, useContext, createContext } from 'react'

type TeacherGroupsContextProperties = {
  teacherGroups: {
    id: string
    name: string
  }[]
  setTeacherGroups: (groups: []) => void
}

const TeacherGroupsContext =
  createContext<TeacherGroupsContextProperties | null>(null)
TeacherGroupsContext.displayName = 'TeacherGroupsContext'

const TeacherGroupsContextProvider = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  const [teacherGroups, setTeacherGroups] = useState(null)

  return (
    <TeacherGroupsContext.Provider
      value={{
        teacherGroups: teacherGroups,
        setTeacherGroups: (groups) => {
          setTeacherGroups(groups)
        },
      }}
    >
      {children}
    </TeacherGroupsContext.Provider>
  )
}

const useTeacherGroups = () => useContext(TeacherGroupsContext)

export { TeacherGroupsContextProvider, useTeacherGroups }
export default TeacherGroupsContext
