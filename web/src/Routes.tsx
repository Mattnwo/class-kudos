// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import HomeLayout from 'src/layouts/HomeLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/student-home" page={StudentHomePage} name="studentHome" />
      <Private unauthenticated="home">
        <Route path="/teacher" page={TeacherHomePage} name="teacherHome" />
      </Private>

      <Set wrap={[HomeLayout]}>
        <Route path="/home" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
