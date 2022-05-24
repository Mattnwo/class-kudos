import { render } from '@redwoodjs/testing/web'

import TeacherGroupFeedbackPage from './TeacherGroupFeedbackPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TeacherGroupFeedbackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherGroupFeedbackPage />)
    }).not.toThrow()
  })
})
