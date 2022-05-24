import { useAuth } from '@redwoodjs/auth'

import DashboardHomeButton from 'src/components/DashboardHomeButton/DashboardHomeButton'
import TeacherNavCell from 'src/components/TeacherNavCell'

const TeacherNav = () => {
  // const [currentGroup, setCurrentGroup] = useState(groups[0])
  const { currentUser } = useAuth()
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center items-center p-4">
        <DashboardHomeButton />
      </div>
      <TeacherNavCell userId={currentUser?.id} />
    </div>
  )
}

export default TeacherNav
