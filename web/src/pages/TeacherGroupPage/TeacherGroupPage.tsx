import { MetaTags } from '@redwoodjs/web'

import TeacherGroupPageCell from 'src/components/TeacherGroupPageCell/TeacherGroupPageCell'

const TeacherGroupPage = ({ groupId }) => {
  return (
    <>
      <MetaTags title="TeacherGroup" description="TeacherGroup page" />
      {/* Work on meta tags after moving group data to context */}
      <TeacherGroupPageCell groupId={groupId} />
    </>
  )
}

export default TeacherGroupPage
