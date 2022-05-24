import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type RewardLayoutProps = {
  children: React.ReactNode
}

const RewardsLayout = ({ children }: RewardLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.rewards()}
            className="rw-link"
          >
            Rewards
          </Link>
        </h1>
        <Link
          to={routes.newReward()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Reward
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default RewardsLayout
