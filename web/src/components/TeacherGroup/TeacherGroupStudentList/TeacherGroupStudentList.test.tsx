import { render } from '@redwoodjs/testing/web'

import TeacherGroupStudentList from './TeacherGroupStudentList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeacherGroupStudentList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherGroupStudentList />)
    }).not.toThrow()
  })
})
