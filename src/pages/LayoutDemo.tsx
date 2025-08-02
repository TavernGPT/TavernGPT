import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { DebugMenu } from '../components/shared/DebugMenu'

export const LayoutDemo: React.FC = () => {
  return (
    <>
      <MainLayout />
      <DebugMenu />
    </>
  )
} 