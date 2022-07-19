import { useState } from 'react'

import type { BehaviorsForTeacherGroupOptionsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BehaviorsForTeacherGroupOptions from 'src/components/Behavior/BehaviorsForTeacherGroupOptions'
import NewBehavior from 'src/components/Behavior/NewBehavior'
import Button from 'src/components/Button/Button'
import PageSection from 'src/components/PageSection/PageSection'

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
    <PageSection title="Behaviors">
      <div>No behaviors yet, add some to get started!</div>
      <NewBehavior groupId={groupId} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full flex flex-row-reverse">
        <Button onClick={() => setIsOpen(true)}>Add Behavior</Button>
      </div>
    </PageSection>
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
    <PageSection title="Behaviors">
      <BehaviorsForTeacherGroupOptions behaviorsOfGroup={behaviorsOfGroup} />
      <NewBehavior groupId={groupId} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full flex flex-row-reverse">
        <Button onClick={() => setIsOpen(true)}>Add Behavior</Button>
      </div>
    </PageSection>
  )
}
