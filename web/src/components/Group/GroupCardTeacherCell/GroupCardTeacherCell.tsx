import type {
  FindGroupCardTeacherQuery,
  FindGroupCardTeacherQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import GroupCardTeacher from 'src/components/Group/GroupCardTeacher/GroupCardTeacher'

export const QUERY = gql`
  query FindGroupCardTeacherQuery($groupId: String!) {
    enrollmentsForGroup(groupId: $groupId) {
      id
      groupPoints
    }
  }
`

export const Loading = ({ group }) => <GroupCardTeacher group={group} loading />

export const Empty = ({ group }) => (
  <GroupCardTeacher group={group} loading={false} />
)

export const Failure = ({
  error,
}: CellFailureProps<FindGroupCardTeacherQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  group,
  enrollmentsForGroup,
}: CellSuccessProps<
  FindGroupCardTeacherQuery,
  FindGroupCardTeacherQueryVariables
>) => {
  const totalEnrolled = enrollmentsForGroup.length || 0
  const totalPoints =
    enrollmentsForGroup.reduce(
      (p, c) => {
        return p?.groupPoints, c?.groupPoints
      },
      { groupPoints: 0 }
    ) || 0
  return (
    <GroupCardTeacher
      group={group}
      totalPoints={totalPoints}
      totalEnrolled={totalEnrolled}
      loading={false}
    />
  )
}
