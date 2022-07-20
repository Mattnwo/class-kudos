import { render } from '@redwoodjs/testing/web'

import DeleteBehaviorForm from './DeleteBehaviorForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DeleteBehaviorForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeleteBehaviorForm />)
    }).not.toThrow()
  })
})
