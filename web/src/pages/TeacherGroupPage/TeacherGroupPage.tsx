import { MetaTags } from '@redwoodjs/web'

import EnrollmentsForTeacherGroupPageCell from 'src/components/EnrollmentsForTeacherGroupPageCell/EnrollmentsForTeacherGroupPageCell'

const TeacherGroupPage = ({ groupId }) => {
  return (
    <div>
      <MetaTags title="TeacherGroup" description="TeacherGroup page" />
      <EnrollmentsForTeacherGroupPageCell groupId={groupId} />
      {/* <TeacherGroupPageStudentList students={students} /> */}
    </div>
  )
}

export default TeacherGroupPage
