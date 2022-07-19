import { render } from '@redwoodjs/testing/web'

import RewardsForTeacherGroupOptions from './RewardsForTeacherGroupOptions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RewardsForTeacherGroupOptions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RewardsForTeacherGroupOptions />)
    }).not.toThrow()
  })
})
