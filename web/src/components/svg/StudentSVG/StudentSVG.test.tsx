import { render } from '@redwoodjs/testing/web'

import StudentSvg from './StudentSvg'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StudentSvg', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentSvg />)
    }).not.toThrow()
  })
})
