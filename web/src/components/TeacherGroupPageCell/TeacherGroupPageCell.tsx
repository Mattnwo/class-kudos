import { useState } from 'react'

import type {
  FindTeacherGroupPageQuery,
  FindTeacherGroupPageQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TeacherGroupPageStudentList from 'src/components/TeacherGroupPageStudentList/TeacherGroupPageStudentList'

export const QUERY = gql`
  query FindTeacherGroupPageQuery($groupId: String!) {
    enrollmentsForGroup(groupId: $groupId) {
      id
      groupPoints
      user {
        id
        firstName
        lastName
        points
      }
    }
  }
`

export interface CurrentStudent {
  id: string
  firstName: string
  lastName: string
  points: number
  groupPoints: number
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTeacherGroupPageQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  enrollmentsForGroup,
}: CellSuccessProps<
  FindTeacherGroupPageQuery,
  FindTeacherGroupPageQueryVariables
>) => {
  const [currentStudent, setCurrentStudent] = useState<CurrentStudent | null>(
    null
  )

  return (
    <div className="w-full h-full grid grid-cols-12 gap-4">
      <div className={'col-span-4 overflow-y-auto p-1'}>
        <TeacherGroupPageStudentList
          enrollments={enrollmentsForGroup}
          currentStudent={currentStudent}
          setCurrentStudent={setCurrentStudent}
        />
      </div>
      <div className={'flex flex-col col-span-8 overflow-y-auto'}>
        <div className="w-full h-[200px] p-4 rounded-lg flex flex-col border-indigo-600 border-[1px]">
          {currentStudent && (
            <div className="font-display text-2xl text-indigo-600">
              {currentStudent.firstName}{' '}
              {currentStudent.lastName && currentStudent.lastName}
            </div>
          )}
          {currentStudent && currentStudent.points}
          {currentStudent && currentStudent.groupPoints}
        </div>
      </div>
    </div>
  )
}
