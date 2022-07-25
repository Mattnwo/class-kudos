import { useEffect } from 'react'

import type {
  FindTeacherGroupQuery,
  FindTeacherGroupQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import DashboardHomeButton from 'src/components/DashboardHomeButton/DashboardHomeButton'
import TeacherGroupCell from 'src/components/Group/TeacherGroup/TeacherGroupCell/TeacherGroupCell'
import TeacherGroupNav from 'src/components/Group/TeacherGroup/TeacherGroupNav/TeacherGroupNav'
import { useTeacherGroups } from 'src/context/TeacherGroupsContext'
import DashboardPageLayout from 'src/layouts/DashboardPageLayout/DashboardPageLayout'

export const QUERY = gql`
  query groupsOwned($userId: String!) {
    groupsOwned(userId: $userId) {
      id
      type
      name
      description
      enrollId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTeacherGroupQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  groupsOwned,
  children,
  userId,
}: CellSuccessProps<FindTeacherGroupQuery, FindTeacherGroupQueryVariables>) => {
  const groupsContext = useTeacherGroups()

  useEffect(() => {
    groupsContext.setTeacherGroups(groupsOwned)
  }, [groupsOwned, children, userId])

  return (
    <div className="flex h-[calc(100%_-_5rem)] border-indigo-200 border-t">
      {/* Left Nav */}
      <div className="hidden md:block md:w-[300px] lg: w-[400px] px-4 border-indigo-200 border-r">
        <div className="w-full h-full">
          <div className="w-full flex justify-center items-center p-4">
            <DashboardHomeButton />
          </div>
          <TeacherGroupNav />
        </div>
      </div>
      {/* Content */}
      <DashboardPageLayout>{children}</DashboardPageLayout>
    </div>
  )
}
