import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="bg-black border-b border-amber-500/50 shadow-[0_6px_16px_rgba(245,180,0,0.12)]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765977541/Asset_7_kium0j.png"
            alt="Gamotech Logo"
            className="h-12 w-auto"
          />
           
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
