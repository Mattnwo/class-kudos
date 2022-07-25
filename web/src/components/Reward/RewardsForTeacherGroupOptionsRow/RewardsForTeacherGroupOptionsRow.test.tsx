import { render } from '@redwoodjs/testing/web'

import RewardsForTeacherGroupOptionsRow from './RewardsForTeacherGroupOptionsRow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RewardsForTeacherGroupOptionsRow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RewardsForTeacherGroupOptionsRow />)
    }).not.toThrow()
  })
})
