import { useState } from 'react'

import type { RewardsForTeacherGroupOptionsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Button from 'src/components/Button/Button'
import PageSection from 'src/components/PageSection/PageSection'
import NewReward from 'src/components/Reward/NewReward/NewReward'
import RewardsForTeacherGroupOptions from 'src/components/Reward/RewardsForTeacherGroupOptions/RewardsForTeacherGroupOptions'

export const QUERY = gql`
  query RewardsForTeacherGroupOptionsQuery($groupId: String!) {
    rewardsOfGroup(groupId: $groupId) {
      id
      name
      cost
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({ groupId }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <PageSection title="Rewards">
      <div>No behaviors yet, add some to get started!</div>
      <NewReward groupId={groupId} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full flex flex-row-reverse">
        <Button onClick={() => setIsOpen(true)}>Add Reward</Button>
      </div>
    </PageSection>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  rewardsOfGroup,
  groupId,
}: CellSuccessProps<RewardsForTeacherGroupOptionsQuery>) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <PageSection title="Rewards">
      <RewardsForTeacherGroupOptions rewards={rewardsOfGroup} />
      <NewReward groupId={groupId} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full flex flex-row-reverse">
        <Button onClick={() => setIsOpen(true)}>Add Reward</Button>
      </div>
    </PageSection>
  )
}
