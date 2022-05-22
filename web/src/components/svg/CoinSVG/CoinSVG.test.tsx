import { render } from '@redwoodjs/testing/web'

import CoinSvg from './CoinSvg'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CoinSvg', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CoinSvg />)
    }).not.toThrow()
  })
})
