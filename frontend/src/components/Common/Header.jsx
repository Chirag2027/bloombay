import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='border-b border-gray-200'>
        {/* Top bar */}
        <Topbar />
        {/* Navbar */}
        <Navbar />
        {/* cart drawer */}
    </header>
  ) 
}

export default Header
