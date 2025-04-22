import React from 'react'
import Header from '../Common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Common/Footer'

const UserLayout = () => {
  return (
    <>
        {/* Header */}
        <Header />
        {/* <Outlet /> */}
        {/* Main Content */}
        {/* Footer */}
        <Footer />
        
    </>
  )
}

export default UserLayout
