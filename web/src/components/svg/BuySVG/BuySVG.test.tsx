import { render } from '@redwoodjs/testing/web'

import BuySvg from './BuySvg'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BuySvg', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BuySvg />)
    }).not.toThrow()
  })
})
