import { render } from '@redwoodjs/testing/web'

import DeleteRewardForm from './DeleteRewardForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DeleteRewardForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeleteRewardForm />)
    }).not.toThrow()
  })
})
