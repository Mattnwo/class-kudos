import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TeacherGroupPage = ({ groupId }) => {
  return (
    <>
      <MetaTags title="TeacherGroup" description="TeacherGroup page" />

      <h1>{groupId}</h1>

      <p>
        Find me in{' '}
        <code>./web/src/pages/TeacherGroupPage/TeacherGroupPage.tsx</code>
      </p>
      <p>
        My default route is named <code>teacherGroup</code>, link to me with `
        <Link to={routes.teacherHome()}>TeacherGroup</Link>`
      </p>
    </>
  )
}

export default TeacherGroupPage
