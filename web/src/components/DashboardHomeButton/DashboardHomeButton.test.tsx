import { render } from '@redwoodjs/testing/web'

import DashboardHomeButton from './DashboardHomeButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DashboardHomeButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardHomeButton />)
    }).not.toThrow()
  })
})
