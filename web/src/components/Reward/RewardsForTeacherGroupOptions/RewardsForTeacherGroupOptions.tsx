type RewardsOfGroupProps = {
  rewardsOfGroup: {
    id: string
    name: string
    value: number
  }[]
}

const RewardsForTeacherGroupOptions = ({
  rewardsOfGroup,
}: RewardsOfGroupProps) => {
  return (
    <table className="w-full table-auto overflow-y-scroll my-2">
      <tbody>
        <tr className="text-indigo-500 border-b-[1px] border-b-indigo-500 text-xs font-body">
          <th className="text-left px-4 pb-2">Name</th>
          <th className="text-right px-4 pb-2">Kudo Cost</th>
          <th className="text-right px-4 pb-2"></th>
        </tr>
        {rewardsOfGroup.map((reward) => {
          return (
            <tr
              className={`font-body text-indigo-900 hover:bg-indigo-100`}
              key={reward.id}
            >
              <td className="text-left rounded-l-lg px-4 py-3">
                {reward.name}
              </td>
              <td className="text-right px-4 py-3">{reward.cost}</td>
              <td className="text-right rounded-r-lg px-4 py-3 text-indigo-300">
                <div className="flex justify-end gap-y-2">
                  <button
                    type="button"
                    title={'Edit reward: ' + reward.name}
                    className="rw-button rw-button-small rw-button-blue mx-1"
                    onClick={() => onDeleteClick(behavior.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    title={'Delete reward: ' + reward.name}
                    className="rw-button rw-button-small rw-button-red mx-1"
                    onClick={() => onDeleteClick(reward.id)}
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

export default RewardsForTeacherGroupOptions
