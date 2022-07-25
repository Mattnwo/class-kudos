import { useState } from 'react'

import EditRewardCell from 'src/components/Reward/EditRewardCell'
import StyledDialog from 'src/components/Styled/StyledDialog/StyledDialog'

// import DeleteBehaviorForm from '../DeleteBehaviorForm/DeleteBehaviorForm'

const RewardsForTeacherGroupOptionsRow = ({ reward }) => {
  const [editIsOpen, setEditIsOpen] = useState<boolean>(false)
  const [deleteIsOpen, setDeleteIsOpen] = useState<boolean>(false)

  return (
    <>
      <tr
        className={`font-body text-indigo-900 hover:bg-indigo-100`}
        key={reward.id}
      >
        <td className="text-left rounded-l-lg px-4 py-3">{reward.name}</td>
        <td className="text-right px-4 py-3">{reward.cost}</td>
        <td className="text-right rounded-r-lg px-4 py-3 text-indigo-300">
          <div className="flex justify-end gap-y-2">
            <button
              type="button"
              title={'Edit reward: ' + reward.name}
              className="rw-button rw-button-small rw-button-blue mx-1"
              onClick={() => setEditIsOpen(true)}
            >
              Edit
            </button>
            <StyledDialog
              isOpen={editIsOpen}
              onClose={() => {
                setEditIsOpen(false)
              }}
              title={`Edit Reward: ${reward.name}`}
              description={'Change the reward name or value here.'}
            >
              <EditRewardCell id={reward.id} setIsOpen={setEditIsOpen} />
            </StyledDialog>
            <button
              type="button"
              title={'Delete reward: ' + reward.name}
              className="rw-button rw-button-small rw-button-red mx-1"
              onClick={() => setDeleteIsOpen(true)}
            >
              Delete
            </button>
            <StyledDialog
              isOpen={deleteIsOpen}
              onClose={() => {
                setDeleteIsOpen(false)
              }}
              title={`Delete Reward: ${reward.name}`}
              description={`Type the name of the reward to delete. This action cannot be undone!`}
            >
              {/* <DeleteBehaviorForm
                behavior={behavior}
                setIsOpen={setDeleteIsOpen}
              /> */}
            </StyledDialog>
          </div>
        </td>
      </tr>
    </>
  )
}

export default RewardsForTeacherGroupOptionsRow
