import BehaviorsForTeacherGroupOptionsRow from 'src/components/Behavior/BehaviorsForTeacherGroupOptionsRow'

type BehaviorsOfGroupProps = {
  behaviorsOfGroup: {
    id: string
    name: string
    value: number
  }[]
}

const BehaviorsForTeacherGroupOptions = ({
  behaviorsOfGroup,
}: BehaviorsOfGroupProps) => {
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
            <BehaviorsForTeacherGroupOptionsRow
              behavior={behavior}
              key={behavior.id}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default BehaviorsForTeacherGroupOptions
