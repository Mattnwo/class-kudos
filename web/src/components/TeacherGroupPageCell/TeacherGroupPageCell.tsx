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
  const [selectingMultiple, setSelectingMultiple] = useState<boolean>(false)
  const [currentStudents, setCurrentStudents] = useState<CurrentStudent[] | []>(
    []
  )

  const toggleSelectingMultiple = () => {
    setCurrentStudent(null)
    setCurrentStudents([])
    setSelectingMultiple(!selectingMultiple)
  }

  const handleMultiSelect = (student: CurrentStudent) => {
    const currentlySelected = [...currentStudents]
    const existingStudentIndex = currentlySelected.findIndex(
      (selected) => selected.id == student.id
    )
    // is student not aleady selected into array, add them
    if (existingStudentIndex === -1) {
      currentlySelected.push(student)
      setCurrentStudents(currentlySelected)
    } else {
      //if the student IS already selected, remove them from selection
      currentlySelected.splice(existingStudentIndex, 1)
      setCurrentStudents(currentlySelected)
    }
  }

  const selectAll = () => {
    setCurrentStudent(null)
    const allStudents = enrollmentsForGroup.map((enrollment) => ({
      id: enrollment.user.id,
      firstName: enrollment.user.firstName,
      lastName: enrollment.user.lastName,
      points: enrollment.user.points,
      groupPoints: enrollment.groupPoints,
    }))
    setCurrentStudents(allStudents)
  }

  return (
    <div className="w-full h-full grid grid-cols-12 gap-4">
      <div className={'col-span-4 overflow-y-auto p-1'}>
        <TeacherGroupPageStudentList
          enrollments={enrollmentsForGroup}
          currentStudent={currentStudent}
          setCurrentStudent={setCurrentStudent}
          selectingMultiple={selectingMultiple}
          currentStudents={currentStudents}
          toggleSelectingMultiple={toggleSelectingMultiple}
          handleMultiSelect={handleMultiSelect}
          selectAll={selectAll}
        />
      </div>
      <div className={'flex flex-col col-span-8 overflow-y-auto'}>
        {currentStudent && (
          <div className="w-full h-full p-4 rounded-lg flex flex-col border-indigo-600 border-[1px]">
            <div className="flex border-indigo-600 border-b-[1px] pb-2">
              <div className="font-display text-2xl text-indigo-600">
                {currentStudent.firstName}{' '}
                {currentStudent.lastName && currentStudent.lastName}
              </div>
              <div className="flex-grow text-right">
                <span className="font-body text-2xl text-indigo-600">
                  {currentStudent && currentStudent.groupPoints}
                </span>
                <span className="font-body text-indigo-400">
                  {currentStudent.groupPoints == 1
                    ? ' group kudo'
                    : ' group kudos'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
