import SiteHeader from 'src/components/SiteHeader'
import TeacherNav from 'src/components/TeacherNav'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-screen">
      <SiteHeader />
      <div className="flex h-full border-indigo-200 border-t">
        <div className="hidden md:block md:w-[300px] lg: w-[400px] px-4 border-indigo-200 border-r">
          <TeacherNav />
        </div>
        <div className="w-full p-4">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
