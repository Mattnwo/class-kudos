import { useState, useContext, createContext } from 'react'

type TeacherGroup = {
  id: string
  name: string
}

type TeacherGroupsContextProperties = {
  teacherGroups: TeacherGroup[]
  currentGroup: TeacherGroup
  setTeacherGroups: (groups: [TeacherGroup?]) => void
  setCurrentGroup: (group: TeacherGroup) => void
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
  const [currentGroup, setCurrentGroup] = useState(null)

  return (
    <TeacherGroupsContext.Provider
      value={{
        teacherGroups: teacherGroups,
        currentGroup: currentGroup,
        setTeacherGroups: (groups) => {
          setTeacherGroups(groups)
        },
        setCurrentGroup: (group) => {
          setCurrentGroup(group)
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
