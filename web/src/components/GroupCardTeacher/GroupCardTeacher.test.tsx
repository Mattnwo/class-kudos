import { render } from '@redwoodjs/testing/web'

import GroupCardTeacher from './GroupCardTeacher'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupCardTeacher', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupCardTeacher />)
    }).not.toThrow()
  })
})
