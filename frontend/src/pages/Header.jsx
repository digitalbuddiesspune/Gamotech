import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="bg-black border-b border-amber-500/50 shadow-[0_6px_16px_rgba(245,180,0,0.12)]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-amber-500 text-black flex items-center justify-center font-bold">
            G
          </div>
          <div>
            <p className="text-lg font-semibold text-amber-300">Gamotech</p>
            <p className="text-sm text-amber-200/70">Game studio playground</p>
          </div>
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
