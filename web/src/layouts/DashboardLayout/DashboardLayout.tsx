import React from 'react'

import SiteHeader from 'src/components/SiteHeader'
import TeacherNav from 'src/components/TeacherNav'
import { TeacherGroupsContextProvider } from 'src/context/TeacherGroupsContext'
import DashboardPageLayout from 'src/layouts/DashboardPageLayout/DashboardPageLayout'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <TeacherGroupsContextProvider>
      <div className="h-screen">
        <SiteHeader />
        <div className="flex h-[calc(100%_-_5rem)] border-indigo-200 border-t">
          <div className="hidden md:block md:w-[300px] lg: w-[400px] px-4 border-indigo-200 border-r">
            <TeacherNav />
          </div>
          <DashboardPageLayout>{children}</DashboardPageLayout>
        </div>
      </div>
    </TeacherGroupsContextProvider>
  )
}

export default DashboardLayout
