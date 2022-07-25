import { render } from '@redwoodjs/testing/web'

import TeacherGroupNav from './TeacherGroupNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeacherGroupNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherGroupNav />)
    }).not.toThrow()
  })
})
