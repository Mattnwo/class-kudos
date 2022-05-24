import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type GroupPointLayoutProps = {
  children: React.ReactNode
}

const GroupPointsLayout = ({ children }: GroupPointLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.groupPoints()}
            className="rw-link"
          >
            GroupPoints
          </Link>
        </h1>
        <Link
          to={routes.newGroupPoint()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New GroupPoint
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default GroupPointsLayout
