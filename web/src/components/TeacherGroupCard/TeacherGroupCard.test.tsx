import { render } from '@redwoodjs/testing/web'

import TeacherGroupCard from './TeacherGroupCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeacherGroupCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherGroupCard />)
    }).not.toThrow()
  })
})
