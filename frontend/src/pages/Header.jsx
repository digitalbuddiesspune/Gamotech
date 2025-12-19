import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? 'bg-transparent border-b border-transparent shadow-none'
          : 'bg-black border-b border-amber-500/50 shadow-[0_6px_16px_rgba(245,180,0,0.12)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={closeMobileMenu}>
          <img
            src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765977541/Asset_7_kium0j.png"
            alt="Gamotech Logo"
            className="h-8 sm:h-10 lg:h-12 w-auto"
          />
           
        </Link>
        
        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md text-white hover:bg-amber-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-black border-b border-amber-500/50 shadow-lg transition-all duration-300 ease-in-out z-50 ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <Navbar onLinkClick={closeMobileMenu} isMobile={true} />
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  )
}

export default Header
