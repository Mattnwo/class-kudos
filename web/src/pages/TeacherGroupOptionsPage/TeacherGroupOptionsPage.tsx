import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TeacherGroupOptionsPage = () => {
  return (
    <>
      <MetaTags title="TeacherGroupOptions" description="TeacherGroupOptions page" />

      <h1>TeacherGroupOptionsPage</h1>
      <p>
        Find me in <code>./web/src/pages/TeacherGroupOptionsPage/TeacherGroupOptionsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>teacherGroupOptions</code>, link to me with `
        <Link to={routes.teacherGroupOptions()}>TeacherGroupOptions</Link>`
      </p>
    </>
  )
}

export default TeacherGroupOptionsPage
