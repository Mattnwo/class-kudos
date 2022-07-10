import { navigate, routes } from '@redwoodjs/router'

const GroupCardTeacher = ({ group }) => {
  const { id, name, description } = group
  return (
    <button
      className="h-[200px] w-[300px] border-indigo-300 border-[1px] rounded-[10px] overflow-hidden hover:shadow-lg text-left"
      onClick={() => {
        navigate(routes.teacherGroup({ groupId: id }))
      }}
    >
      <div className="w-full h-[80px] bg-indigo-600 px-3 py-2">
        <h2 className="font-body text-white text-xl">{name}</h2>
        <span className="font-body text-white text-sm">{description}</span>
      </div>
      <div className="w-full h-[120px] px-3 py-2 flex flex-col justify-between">
        <div>
          <p className="font-body mb-1 text-right text-s">
            Students: {'[replace later]'}
          </p>
          <p className="font-body mb-1 text-right text-s">
            Total Points: {'[replace later]'}
          </p>
        </div>
        <p className="font-body mb-1 text-s">Enroll ID: {group.enrollId}</p>
      </div>
    </button>
  )
}

export default GroupCardTeacher
