import { render } from '@redwoodjs/testing/web'

import BehaviorsForTeacherGroupOptions from './BehaviorsForTeacherGroupOptions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BehaviorsForTeacherGroupOptions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BehaviorsForTeacherGroupOptions />)
    }).not.toThrow()
  })
})
