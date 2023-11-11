
import AppBar from '@/components/CustomNavbar'
import NexBridgeCustomNavbar from '@/components/CustomNavbar/NexBridge'
import React from 'react'

const AboutPageLayout = ({ children } : { children: React.ReactNode }) => {
  
  return (
    <div style={{backgroundImage: "linear-gradient(to bottom right, #12056A, #020A07, #06012E, #09092E, #4A056A)", color: "#fff", minHeight: "100vh"}}>
      <AppBar/>
      <div>
        {children}
      </div> 
    </div>
  )
}

export default AboutPageLayout