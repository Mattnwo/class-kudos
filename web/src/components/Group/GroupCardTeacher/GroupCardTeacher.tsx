import { navigate, routes } from '@redwoodjs/router'

const GroupCardTeacher = ({
  group,
  totalPoints = 0,
  totalEnrolled = 0,
  loading,
}) => {
  const { id, name, description, enrollId } = group
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
            Students:{' '}
            {!loading ? (
              totalEnrolled
            ) : (
              <span className="h-3 w-8 bg-indigo-200 animate-pulse inline-block rounded"></span>
            )}
          </p>
          <p className="font-body mb-1 text-right text-s">
            Total Points:{' '}
            {!loading ? (
              totalPoints
            ) : (
              <span className="h-3 w-8 bg-indigo-200 animate-pulse inline-block rounded"></span>
            )}
          </p>
        </div>
        <p className="font-body mb-1 text-s">Enroll ID: {enrollId}</p>
      </div>
    </button>
  )
}

export default GroupCardTeacher
