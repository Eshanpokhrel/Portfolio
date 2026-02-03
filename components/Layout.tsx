'use client'

import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const ClientLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-black text-[#ffd700] font-family-helvetica text-[18px]">
      <div className="flex-1 flex flex-col justify-between sm:px-20 sm:pt-10 pb-10 relative overflow-auto sm:overflow-hidden">
        {/* Top Tags */}
        <div className="absolute top-28 sm:top-6 left-1 sm:left-32 space-y-3 pointer-events-none">
          <div className="pl-6 font-family-la-belle">&lt;body&gt;</div>
        </div>

        {/* Main Content */}
        <main className="flex-1 z-10">
          {children}
        </main>

        {/* Bottom Tags */}
        <div className="absolute bottom-6 left-1 sm:left-32 space-y-3 pointer-events-none">
          <div className="pl-6 font-family-la-belle">&lt;/body&gt;</div>
          <div className="font-family-la-belle">&lt;/html&gt;</div>
        </div>
      </div>
    </div>
  )
}

export default ClientLayout
