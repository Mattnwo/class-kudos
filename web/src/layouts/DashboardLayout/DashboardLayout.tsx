import SiteHeader from 'src/components/SiteHeader'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-screen">
      <SiteHeader />
      <div className="flex bg-blue-200">
        <div className="hidden md:block md:w-[250px]"></div>
        <div className="bg-green-200 w-full">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
