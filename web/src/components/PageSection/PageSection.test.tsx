import { render } from '@redwoodjs/testing/web'

import PageSection from './PageSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PageSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageSection />)
    }).not.toThrow()
  })
})
