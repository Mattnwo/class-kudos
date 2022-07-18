import { render } from '@redwoodjs/testing/web'

import GroupForTeacherGroupPage from './GroupForTeacherGroupPage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupForTeacherGroupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupForTeacherGroupPage />)
    }).not.toThrow()
  })
})
