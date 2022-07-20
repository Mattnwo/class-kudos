import { render } from '@redwoodjs/testing/web'

import StyledDialog from './StyledDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StyledDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StyledDialog />)
    }).not.toThrow()
  })
})
