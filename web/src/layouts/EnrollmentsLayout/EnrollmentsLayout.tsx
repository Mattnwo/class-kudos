import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type EnrollmentLayoutProps = {
  children: React.ReactNode
}

const EnrollmentsLayout = ({ children }: EnrollmentLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.enrollments()}
            className="rw-link"
          >
            Enrollments
          </Link>
        </h1>
        <Link
          to={routes.newEnrollment()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Enrollment
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default EnrollmentsLayout
