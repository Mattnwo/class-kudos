import { render } from '@redwoodjs/testing/web'

import TeacherNav from './TeacherNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeacherNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherNav />)
    }).not.toThrow()
  })
})
