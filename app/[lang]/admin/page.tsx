import HeaderAndFooter from '@/components/Admin/HeaderAndFooter'
import LandingPage from '@/components/Admin/LandingPage'
import MenuBar from '@/components/Admin/MenuBar'
import Navbar from '@/components/Admin/Navbar'
import React from 'react'

const Admin = () => {
  return (
    <div className="bg-gradient-to-br from-[#12056A] via-[#020A07] to-[#06012E] h-max">
        <Navbar/>
        <div className="flex">
          <MenuBar/>
          <LandingPage/>
        </div>
        <div className="mt-20">
          <HeaderAndFooter/>
        </div>
    </div>
  )
}

export default Admin