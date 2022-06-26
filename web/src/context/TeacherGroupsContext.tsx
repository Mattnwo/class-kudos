import { useState, useContext, createContext } from 'react'

const TeacherGroupsContext = createContext({})
TeacherGroupsContext.displayName = 'TeacherGroupsContext'

const TeacherGroupsContextProvider = ({ children }) => {
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
