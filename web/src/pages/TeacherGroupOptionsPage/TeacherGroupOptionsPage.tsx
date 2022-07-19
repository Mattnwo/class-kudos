import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BehaviorsForTeacherGroupOptionsCell from 'src/components/Behavior/BehaviorsForTeacherGroupOptionsCell/BehaviorsForTeacherGroupOptionsCell'
import RewardsForTeacherGroupOptionsCell from 'src/components/Reward/RewardsForTeacherGroupOptionsCell/RewardsForTeacherGroupOptionsCell'

const TeacherGroupOptionsPage = ({ groupId }) => {
  return (
    <div>
      <MetaTags
        title="TeacherGroupOptions"
        description="TeacherGroupOptions page"
      />
      <BehaviorsForTeacherGroupOptionsCell groupId={groupId} />
      <RewardsForTeacherGroupOptionsCell groupId={groupId} />
    </div>
  )
}

export default TeacherGroupOptionsPage
