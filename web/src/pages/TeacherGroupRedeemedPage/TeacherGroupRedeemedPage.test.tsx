import { render } from '@redwoodjs/testing/web'

import TeacherGroupRedeemedPage from './TeacherGroupRedeemedPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TeacherGroupRedeemedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherGroupRedeemedPage />)
    }).not.toThrow()
  })
})
