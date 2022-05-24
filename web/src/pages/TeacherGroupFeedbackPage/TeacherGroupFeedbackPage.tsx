import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TeacherGroupFeedbackPage = () => {
  return (
    <>
      <MetaTags title="TeacherGroupFeedback" description="TeacherGroupFeedback page" />

      <h1>TeacherGroupFeedbackPage</h1>
      <p>
        Find me in <code>./web/src/pages/TeacherGroupFeedbackPage/TeacherGroupFeedbackPage.tsx</code>
      </p>
      <p>
        My default route is named <code>teacherGroupFeedback</code>, link to me with `
        <Link to={routes.teacherGroupFeedback()}>TeacherGroupFeedback</Link>`
      </p>
    </>
  )
}

export default TeacherGroupFeedbackPage
