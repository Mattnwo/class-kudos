import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TeacherHomePage = () => {
  return (
    <>
      <MetaTags title="TeacherHome" description="TeacherHome page" />

      <h1>TeacherHomePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/TeacherHomePage/TeacherHomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>teacherHome</code>, link to me with `
        <Link to={routes.teacherHome()}>TeacherHome</Link>`
      </p>
    </>
  )
}

export default TeacherHomePage
