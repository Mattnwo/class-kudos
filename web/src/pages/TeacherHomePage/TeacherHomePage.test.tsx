import { render } from '@redwoodjs/testing/web'

import TeacherHomePage from './TeacherHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TeacherHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherHomePage />)
    }).not.toThrow()
  })
})
