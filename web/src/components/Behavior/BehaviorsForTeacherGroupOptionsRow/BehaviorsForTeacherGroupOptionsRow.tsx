import { useState } from 'react'

import EditBehaviorCell from 'src/components/Behavior/EditBehaviorCell'
import StyledDialog from 'src/components/Styled/StyledDialog/StyledDialog'

import DeleteBehaviorForm from '../DeleteBehaviorForm/DeleteBehaviorForm'

const BehaviorsForTeacherGroupOptionsRow = ({ behavior }) => {
  const [editIsOpen, setEditIsOpen] = useState<boolean>(false)
  const [deleteIsOpen, setDeleteIsOpen] = useState<boolean>(false)
  return (
    <>
      <tr
        className={`font-body text-indigo-900 hover:bg-indigo-100`}
        key={behavior.id}
      >
        <td className="text-left rounded-l-lg px-4 py-3">{behavior.name}</td>
        <td className="text-right px-4 py-3">{behavior.value}</td>
        <td className="text-right rounded-r-lg px-4 py-3 text-indigo-300">
          <div className="flex justify-end gap-y-2">
            <button
              type="button"
              title={'Edit behavior: ' + behavior.name}
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
              title={`Edit Behavior: ${behavior.name}`}
              description={'Change the behavior name or value here.'}
            >
              <EditBehaviorCell id={behavior.id} setIsOpen={setEditIsOpen} />
            </StyledDialog>
            <button
              type="button"
              title={'Delete behavior: ' + behavior.name}
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
              title={`Delete Behavior: ${behavior.name}`}
              description={`Type the name of the behavior to delete. This action cannot be undone!`}
            >
              <DeleteBehaviorForm
                behavior={behavior}
                setIsOpen={setDeleteIsOpen}
              />
            </StyledDialog>
          </div>
        </td>
      </tr>
    </>
  )
}

export default BehaviorsForTeacherGroupOptionsRow
