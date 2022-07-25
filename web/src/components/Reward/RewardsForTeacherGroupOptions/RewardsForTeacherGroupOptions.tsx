import RewardsForTeacherGroupOptionsRow from 'src/components/Reward/RewardsForTeacherGroupOptionsRow'

type RewardsOfGroupProps = {
  rewardsOfGroup: {
    id: string
    name: string
    cost: number
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
            <RewardsForTeacherGroupOptionsRow reward={reward} key={reward.id} />
          )
        })}
      </tbody>
    </table>
  )
}

export default RewardsForTeacherGroupOptions
