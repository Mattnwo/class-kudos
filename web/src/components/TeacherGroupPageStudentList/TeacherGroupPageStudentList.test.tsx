import { render } from '@redwoodjs/testing/web'

import TeacherGroupPageStudentList from './TeacherGroupPageStudentList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeacherGroupPageStudentList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherGroupPageStudentList />)
    }).not.toThrow()
  })
})
