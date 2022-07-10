import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import GroupCardsTeacherCell from 'src/components/GroupCardsTeacherCell/GroupCardsTeacherCell'

const TeacherHomePage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="TeacherHome" description="TeacherHome page" />

      <h1 className="h-[60px] font-display text-indigo-600 text-3xl pt-2 pb-6">
        {currentUser.firstName
          ? `Welcome, ${currentUser.firstName}!`
          : 'Welcome!'}
      </h1>
      <div className="w-full max-h-full flex flex-wrap pt-4 gap-8 justify-center md:justify-start">
        <GroupCardsTeacherCell userId={currentUser.id} />
      </div>
    </>
  )
}

export default TeacherHomePage
