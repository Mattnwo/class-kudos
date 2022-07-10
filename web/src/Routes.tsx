// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import BehaviorsLayout from 'src/layouts/BehaviorsLayout'
import DashboardLayout from 'src/layouts/DashboardLayout'
import EnrollmentsLayout from 'src/layouts/EnrollmentsLayout'
import FeedbacksLayout from 'src/layouts/FeedbacksLayout'
import GroupPointsLayout from 'src/layouts/GroupPointsLayout'
import GroupsLayout from 'src/layouts/GroupsLayout'
import HomeLayout from 'src/layouts/HomeLayout'
import RedeemedsLayout from 'src/layouts/RedeemedsLayout'
import RewardsLayout from 'src/layouts/RewardsLayout'
import UserRolesLayout from 'src/layouts/UserRolesLayout'
import UsersLayout from 'src/layouts/UsersLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home" wrap={[DashboardLayout]} roles={['teacher']}>
        <Route path="/teacher" page={TeacherHomePage} name="teacherHome" />
        <Route path="/teacher/group/{groupId}" page={TeacherGroupPage} name="teacherGroup" />
        <Route path="/teacher/group/{groupId}/options" page={TeacherGroupOptionsPage} name="teacherGroupOptions" />
        <Route path="/teacher/group/{groupId}/redeemed" page={TeacherGroupRedeemedPage} name="teacherGroupRedeemed" />
        <Route path="/teacher/group/{groupId}/feedback" page={TeacherGroupFeedbackPage} name="teacherGroupFeedback" />
      </Private>

      <Private unauthenticated="home" wrap={[DashboardLayout]} roles={['student']}>
        <Route path="/student" page={StudentHomePage} name="studentHome" />
      </Private>

      <Private unauthenticated="home" roles={['admin']}>
        <Set wrap={EnrollmentsLayout}>
          <Route path="/enrollments/new" page={EnrollmentNewEnrollmentPage} name="newEnrollment" />
          <Route path="/enrollments/{id}/edit" page={EnrollmentEditEnrollmentPage} name="editEnrollment" />
          <Route path="/enrollments/{id}" page={EnrollmentEnrollmentPage} name="enrollment" />
          <Route path="/enrollments" page={EnrollmentEnrollmentsPage} name="enrollments" />
        </Set>
        <Set wrap={GroupPointsLayout}>
          <Route path="/group-points/new" page={GroupPointNewGroupPointPage} name="newGroupPoint" />
          <Route path="/group-points/{id}/edit" page={GroupPointEditGroupPointPage} name="editGroupPoint" />
          <Route path="/group-points/{id}" page={GroupPointGroupPointPage} name="groupPoint" />
          <Route path="/group-points" page={GroupPointGroupPointsPage} name="groupPoints" />
        </Set>
        <Set wrap={GroupsLayout}>
          <Route path="/groups/new" page={GroupNewGroupPage} name="newGroup" />
          <Route path="/groups/{id}/edit" page={GroupEditGroupPage} name="editGroup" />
          <Route path="/groups/{id}" page={GroupGroupPage} name="group" />
          <Route path="/groups" page={GroupGroupsPage} name="groups" />
        </Set>
        <Set wrap={RewardsLayout}>
          <Route path="/rewards/new" page={RewardNewRewardPage} name="newReward" />
          <Route path="/rewards/{id}/edit" page={RewardEditRewardPage} name="editReward" />
          <Route path="/rewards/{id}" page={RewardRewardPage} name="reward" />
          <Route path="/rewards" page={RewardRewardsPage} name="rewards" />
        </Set>
        <Set wrap={RedeemedsLayout}>
          <Route path="/redeemeds/new" page={RedeemedNewRedeemedPage} name="newRedeemed" />
          <Route path="/redeemeds/{id}/edit" page={RedeemedEditRedeemedPage} name="editRedeemed" />
          <Route path="/redeemeds/{id}" page={RedeemedRedeemedPage} name="redeemed" />
          <Route path="/redeemeds" page={RedeemedRedeemedsPage} name="redeemeds" />
        </Set>
        <Set wrap={BehaviorsLayout}>
          <Route path="/behaviors/new" page={BehaviorNewBehaviorPage} name="newBehavior" />
          <Route path="/behaviors/{id}/edit" page={BehaviorEditBehaviorPage} name="editBehavior" />
          <Route path="/behaviors/{id}" page={BehaviorBehaviorPage} name="behavior" />
          <Route path="/behaviors" page={BehaviorBehaviorsPage} name="behaviors" />
        </Set>
        <Set wrap={FeedbacksLayout}>
          <Route path="/feedbacks/new" page={FeedbackNewFeedbackPage} name="newFeedback" />
          <Route path="/feedbacks/{id}/edit" page={FeedbackEditFeedbackPage} name="editFeedback" />
          <Route path="/feedbacks/{id}" page={FeedbackFeedbackPage} name="feedback" />
          <Route path="/feedbacks" page={FeedbackFeedbacksPage} name="feedbacks" />
        </Set>
        <Set wrap={UserRolesLayout}>
          <Route path="/user-roles/new" page={UserRoleNewUserRolePage} name="newUserRole" />
          <Route path="/user-roles/{id}/edit" page={UserRoleEditUserRolePage} name="editUserRole" />
          <Route path="/user-roles/{id}" page={UserRoleUserRolePage} name="userRole" />
          <Route path="/user-roles" page={UserRoleUserRolesPage} name="userRoles" />
        </Set>
        <Set wrap={UsersLayout}>
          <Route path="/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/users/{id}" page={UserUserPage} name="user" />
          <Route path="/users" page={UserUsersPage} name="users" />
        </Set>
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
