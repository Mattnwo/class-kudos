import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const DashboardHomeButton = () => {
  const { hasRole } = useAuth()

  return (
    <div className="flex h-12 mb-2 rounded-md justify-center align-items cursor-pointer text-indigo-600 hover:bg-indigo-600  hover:text-white">
      <button
        className="w-full flex py-2 px-4"
        onClick={() => {
          if (hasRole('teacher')) {
            navigate(routes.teacherHome())
          } else {
            navigate(routes.studentHome())
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-full w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="text-md font-display ml-2 leading-loose">Home</span>
      </button>
    </div>
  )
}

export default DashboardHomeButton
