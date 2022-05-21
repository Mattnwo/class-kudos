import { render } from '@redwoodjs/testing/web'

import HighFiveSvg from './HighFiveSvg'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HighFiveSvg', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HighFiveSvg />)
    }).not.toThrow()
  })
})
