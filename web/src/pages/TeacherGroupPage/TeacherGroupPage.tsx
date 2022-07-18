import { MetaTags } from '@redwoodjs/web'

import GroupForTeacherGroupPageCell from 'src/components/Group/GroupForTeacherGroupPageCell/GroupForTeacherGroupPageCell'

const TeacherGroupPage = ({ groupId }) => {
  return (
    <>
      <MetaTags title="TeacherGroup" description="TeacherGroup page" />
      {/* Work on meta tags after moving group data to context */}
      <GroupForTeacherGroupPageCell groupId={groupId} />
    </>
  )
}

export default TeacherGroupPage
