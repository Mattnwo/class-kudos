import React from 'react'

import { useAuth } from '@redwoodjs/auth'

import DashboardHomeButton from 'src/components/DashboardHomeButton/DashboardHomeButton'
import GroupsForTeacherCell from 'src/components/Group/GroupsForTeacherCell/GroupsForTeacherCell'
import SiteHeader from 'src/components/SiteHeader'
import { TeacherGroupsContextProvider } from 'src/context/TeacherGroupsContext'
import DashboardPageLayout from 'src/layouts/DashboardPageLayout/DashboardPageLayout'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { currentUser } = useAuth()
  return (
    <TeacherGroupsContextProvider>
      <div className="h-screen">
        <SiteHeader />
        <div className="flex h-[calc(100%_-_5rem)] border-indigo-200 border-t">
          {/* Left Nav */}
          <div className="hidden md:block md:w-[300px] lg: w-[400px] px-4 border-indigo-200 border-r">
            <div className="w-full h-full">
              <div className="w-full flex justify-center items-center p-4">
                <DashboardHomeButton />
              </div>
              <GroupsForTeacherCell userId={currentUser?.id} />
            </div>
          </div>
          {/* Content */}
          <DashboardPageLayout>{children}</DashboardPageLayout>
        </div>
      </div>
    </TeacherGroupsContextProvider>
  )
}

export default DashboardLayout
