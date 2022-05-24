import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type FeedbackLayoutProps = {
  children: React.ReactNode
}

const FeedbacksLayout = ({ children }: FeedbackLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.feedbacks()}
            className="rw-link"
          >
            Feedbacks
          </Link>
        </h1>
        <Link
          to={routes.newFeedback()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Feedback
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default FeedbacksLayout
