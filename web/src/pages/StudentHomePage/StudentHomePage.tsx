import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StudentHomePage = () => {
  return (
    <>
      <MetaTags title="StudentHome" description="StudentHome page" />

      <h1>StudentHomePage</h1>
      <p>
        Find me in <code>./web/src/pages/StudentHomePage/StudentHomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>studentHome</code>, link to me with `
        <Link to={routes.studentHome()}>StudentHome</Link>`
      </p>
    </>
  )
}

export default StudentHomePage
