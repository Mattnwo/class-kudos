import { render } from '@redwoodjs/testing/web'

import TeacherSvg from './TeacherSvg'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeacherSvg', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherSvg />)
    }).not.toThrow()
  })
})
