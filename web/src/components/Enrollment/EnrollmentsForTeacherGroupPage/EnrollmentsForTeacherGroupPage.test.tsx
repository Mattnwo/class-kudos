import { render } from '@redwoodjs/testing/web'

import EnrollmentsForTeacherGroupPage from './EnrollmentsForTeacherGroupPage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EnrollmentsForTeacherGroupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EnrollmentsForTeacherGroupPage />)
    }).not.toThrow()
  })
})
