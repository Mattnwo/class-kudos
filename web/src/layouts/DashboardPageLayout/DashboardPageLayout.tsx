import { useParams } from '@redwoodjs/router'

import { useTeacherGroups } from 'src/context/TeacherGroupsContext'

interface DashboardPageLayoutProps {
  children?: React.ReactNode
}

const DashboardPageLayout = ({ children }: DashboardPageLayoutProps) => {
  const { teacherGroups } = useTeacherGroups()
  const { groupId } = useParams()

  const groupMatch = teacherGroups?.find((group) => group.id === groupId)

  return (
    <div className="w-full p-4">
      {groupMatch && (
        <h1 className="font-display text-indigo-700 text-3xl pt-2 pb-6">
          {groupMatch.name}
        </h1>
      )}
      <div>{children}</div>
    </div>
  )
}

export default DashboardPageLayout
