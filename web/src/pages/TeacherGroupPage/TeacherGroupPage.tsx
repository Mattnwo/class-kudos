import { MetaTags } from '@redwoodjs/web'

import TeacherGroupPageStudentList from 'src/components/TeacherGroupPageStudentList/TeacherGroupPageStudentList'

const TeacherGroupPage = () => {
  const students = [
    {
      name: 'Alissa',
      groupPoints: 9,
      points: 34,
    },
    {
      name: 'Brynlee',
      groupPoints: 6,
      points: 24,
    },
    {
      name: 'Ryan',
      groupPoints: 4,
      points: 14,
    },
  ]

  return (
    <div>
      <MetaTags title="TeacherGroup" description="TeacherGroup page" />
      <TeacherGroupPageStudentList students={students} />
    </div>
  )
}

export default TeacherGroupPage
