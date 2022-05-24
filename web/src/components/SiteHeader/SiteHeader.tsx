import { navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import CoinSVG from 'src/components/svg/CoinSVG/CoinSVG'
import Button from 'src/components/Button'

const SiteHeader = () => {
  const { isAuthenticated, logOut, hasRole } = useAuth()

  const logInOutButtonHangle = () => {
    if (isAuthenticated) {
      logOut()
      navigate(routes.home())
    } else {
      navigate(routes.login())
    }
  }

  const navigateHome = () => {
    if (isAuthenticated) {
      hasRole('teacher')
        ? navigate(routes.teacherHome())
        : navigate(routes.studentHome())
    } else {
      navigate(routes.home())
    }
  }

  return (
    <header className="h-24 w-full py-4 flex justify-between pl-4 pr-8">
      <button
        className="h-16 my-auto flex"
        onClick={() => {
          navigateHome()
        }}
      >
        <div className="h-16 w-16 my-auto">
          <CoinSVG width={40} height={40}></CoinSVG>
        </div>
        <span className="my-auto ml-6 text-4xl font-display">Class Kudos</span>
      </button>
      <div className="my-auto">
        <Button
          onClick={() => {
            logInOutButtonHangle()
          }}
        >
          {isAuthenticated ? 'Logout' : 'Login'}
        </Button>
      </div>
    </header>
  )
}

export default SiteHeader
