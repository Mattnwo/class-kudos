import { render } from '@redwoodjs/testing/web'

import DashboardPageLayout from './DashboardPageLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DashboardPageLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardPageLayout />)
    }).not.toThrow()
  })
})
