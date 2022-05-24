import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type RedeemedLayoutProps = {
  children: React.ReactNode
}

const RedeemedsLayout = ({ children }: RedeemedLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.redeemeds()}
            className="rw-link"
          >
            Redeemeds
          </Link>
        </h1>
        <Link
          to={routes.newRedeemed()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Redeemed
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default RedeemedsLayout
