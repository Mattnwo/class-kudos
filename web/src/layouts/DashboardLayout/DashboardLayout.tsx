import React from 'react'

import { useAuth } from '@redwoodjs/auth'

import TeacherGroupCell from 'src/components/Group/TeacherGroup/TeacherGroupCell/TeacherGroupCell'
import SiteHeader from 'src/components/SiteHeader'
import { TeacherGroupsContextProvider } from 'src/context/TeacherGroupsContext'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { currentUser } = useAuth()
  return (
    <TeacherGroupsContextProvider>
      <div className="h-screen">
        <SiteHeader />
        {currentUser?.id && (
          <TeacherGroupCell userId={currentUser?.id}>
            {children}
          </TeacherGroupCell>
        )}
      </div>
    </TeacherGroupsContextProvider>
  )
}

export default DashboardLayout
