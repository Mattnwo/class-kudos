import SiteHeader from 'src/components/SiteHeader'

type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="max-w-[1200px] min-h-screen m-auto px-2 lg:px-8">
      <SiteHeader />
      {children}
    </div>
  )
}

export default HomeLayout
