import { MetaTags } from '@redwoodjs/web'

import EnrollmentsForTeacherGroupPageCell from 'src/components/Enrollment/EnrollmentsForTeacherGroupPageCell/EnrollmentsForTeacherGroupPageCell'

const TeacherGroupPage = ({ groupId }) => {
  return (
    <>
      <MetaTags title="TeacherGroup" description="TeacherGroup page" />
      {/* Work on meta tags after moving group data to context */}
      <EnrollmentsForTeacherGroupPageCell groupId={groupId} />
    </>
  )
}

export default TeacherGroupPage
