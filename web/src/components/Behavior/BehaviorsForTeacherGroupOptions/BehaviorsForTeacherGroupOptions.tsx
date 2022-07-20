const BehaviorsForTeacherGroupOptions = ({ behaviorsOfGroup }) => {
  return (
    <table className="w-full table-auto overflow-y-scroll my-2">
      <tbody>
        <tr className="text-indigo-500 border-b-[1px] border-b-indigo-500 text-xs font-body">
          <th className="text-left px-4 pb-2">Name</th>
          <th className="text-right px-4 pb-2">Kudo Value</th>
          <th className="text-right px-4 pb-2"></th>
        </tr>
        {behaviorsOfGroup.map((behavior) => {
          return (
            <tr
              className={`font-body text-indigo-900 hover:bg-indigo-100`}
              key={behavior.id}
            >
              <td className="text-left rounded-l-lg px-4 py-3">
                {behavior.name}
              </td>
              <td className="text-right px-4 py-3">{behavior.value}</td>
              <td className="text-right rounded-r-lg px-4 py-3 text-indigo-300">
                <div className="flex justify-end gap-y-2">
                  <button
                    type="button"
                    title={'Edit behavior: ' + behavior.name}
                    className="rw-button rw-button-small rw-button-blue mx-1"
                    onClick={() => onDeleteClick(behavior.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    title={'Delete behavior: ' + behavior.name}
                    className="rw-button rw-button-small rw-button-red mx-1"
                    onClick={() => onDeleteClick(behavior.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default BehaviorsForTeacherGroupOptions
