import { render } from '@redwoodjs/testing/web'

import GiveSvg from './GiveSvg'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GiveSvg', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GiveSvg />)
    }).not.toThrow()
  })
})
