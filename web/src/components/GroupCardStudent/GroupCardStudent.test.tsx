import { render } from '@redwoodjs/testing/web'

import GroupCardStudent from './GroupCardStudent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupCardStudent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupCardStudent />)
    }).not.toThrow()
  })
})
