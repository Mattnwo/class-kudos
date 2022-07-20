import { render } from '@redwoodjs/testing/web'

import BehaviorsForTeacherGroupOptionsRow from './BehaviorsForTeacherGroupOptionsRow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BehaviorsForTeacherGroupOptionsRow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BehaviorsForTeacherGroupOptionsRow />)
    }).not.toThrow()
  })
})
