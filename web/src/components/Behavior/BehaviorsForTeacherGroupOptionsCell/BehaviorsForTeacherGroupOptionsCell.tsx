import { useState } from 'react'

import type { BehaviorsForTeacherGroupOptionsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BehaviorsForTeacherGroupOptions from 'src/components/Behavior/BehaviorsForTeacherGroupOptions'
import NewBehavior from 'src/components/Behavior/NewBehavior'
import Button from 'src/components/Button/Button'

export const QUERY = gql`
  query BehaviorsForTeacherGroupOptionsQuery($groupId: String!) {
    behaviorsOfGroup(id: $groupId) {
      id
      name
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({ groupId }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="w-full h-full p-4 rounded-lg flex flex-col border-indigo-600 border-[1px]">
      <div className="flex border-indigo-600 border-b-[1px] pb-2 mb-2">
        <div className="font-display text-2xl text-indigo-600">Behaviors</div>
      </div>
      <div>No behaviors yet, add some to get started!</div>
      <NewBehavior groupId={groupId} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full flex flex-row-reverse">
        <Button onClick={() => setIsOpen(true)}>+ Add Behavior</Button>
      </div>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  behaviorsOfGroup,
  groupId,
}: CellSuccessProps<BehaviorsForTeacherGroupOptionsQuery>) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full h-full p-4 rounded-lg flex flex-col border-indigo-600 border-[1px]">
      <div className="flex border-indigo-600 border-b-[1px] pb-2 mb-2">
        <div className="font-display text-2xl text-indigo-600">Behaviors</div>
      </div>
      <BehaviorsForTeacherGroupOptions behaviorsOfGroup={behaviorsOfGroup} />
      <NewBehavior groupId={groupId} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full flex flex-row-reverse">
        <Button onClick={() => setIsOpen(true)}>+ Add Behavior</Button>
      </div>
    </div>
  )
}
