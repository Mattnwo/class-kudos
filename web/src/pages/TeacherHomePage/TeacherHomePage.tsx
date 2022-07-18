import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import GroupCardTeacher from 'src/components/GroupCardTeacher/GroupCardTeacher'
import { useTeacherGroups } from 'src/context/TeacherGroupsContext'

const TeacherHomePage = () => {
  const { currentUser } = useAuth()
  const { teacherGroups } = useTeacherGroups()
  console.log('teacherGroups in teacher home', teacherGroups)

  return (
    <>
      <MetaTags title="TeacherHome" description="TeacherHome page" />

      <h1 className="h-[60px] font-display text-indigo-600 text-3xl pt-2 pb-6">
        {currentUser.firstName
          ? `Welcome, ${currentUser.firstName}!`
          : 'Welcome!'}
      </h1>
      <div className="w-full max-h-full flex flex-wrap pt-4 gap-8 justify-center md:justify-start">
        {/* <GroupCardsTeacherCell userId={currentUser.id} /> */}
        {teacherGroups?.map((group) => (
          <GroupCardTeacher key={group.id} group={group} />
        ))}
      </div>
    </>
  )
}

export default TeacherHomePage
