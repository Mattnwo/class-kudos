import { render } from '@redwoodjs/testing/web'

import ManageSvg from './ManageSvg'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ManageSvg', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ManageSvg />)
    }).not.toThrow()
  })
})
