import { render } from '@redwoodjs/testing/web'

import TeacherDashboardLayout from './TeacherDashboardLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TeacherDashboardLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherDashboardLayout />)
    }).not.toThrow()
  })
})
