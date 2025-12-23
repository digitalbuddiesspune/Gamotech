import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact-us', label: 'Contact' },
]

const serviceLinks = [
  { to: '/services/website-design', label: 'Website Design & Development' },
  { to: '/services/ecommerce', label: 'E-Commerce Website Development' },
  { to: '/services/crm-software', label: 'CRM & Custom Software Development' },
  { to: '/services/application-software', label: 'Application Software Development' },
]

const Navbar = ({ onLinkClick, isMobile = false }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()
  const whatsappNumber = '919637319746' // +91 9637319746 without + and spaces
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  // Check if current route is a service page
  const isServicePage = location.pathname.startsWith('/services/')

  const handleLinkClick = () => {
    // Scroll to top when clicking a nav link
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    
    setIsServicesOpen(false)
    
    if (onLinkClick) {
      onLinkClick()
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isServicesOpen])

  return (
    <nav className={`${isMobile ? 'flex flex-col py-4 px-4 space-y-2' : 'flex items-center gap-2'} text-sm relative`}>
      {/* Home Link */}
      <NavLink
        key={links[0].to}
        to={links[0].to}
        end={links[0].to === '/'}
        onClick={handleLinkClick}
        className={({ isActive }) =>
          `${isMobile ? 'w-full px-4 py-3' : 'px-3 py-2'} rounded-md font-medium transition-colors ${
            isActive
              ? 'bg-amber-500 !text-white shadow-md shadow-amber-500/30'
              : '!text-white hover:!text-white hover:bg-amber-500/10'
          }`
        }
      >
        {links[0].label}
      </NavLink>
      
      {/* Services Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          className={`${isMobile ? 'w-full px-4 py-3 justify-between' : 'px-3 py-2'} flex items-center gap-2 rounded-md font-medium transition-colors ${
            isServicePage
              ? 'bg-amber-500 !text-white shadow-md shadow-amber-500/30'
              : '!text-white hover:!text-white hover:bg-amber-500/10'
          }`}
        >
          <span>Services</span>
          <svg
            className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isServicesOpen && (
          <div className={`absolute ${isMobile ? 'relative mt-2 w-full' : 'top-full left-0 mt-2 w-64'} bg-black border border-amber-500/30 rounded-lg shadow-xl z-50 overflow-hidden`}>
            <NavLink
              to="/services"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm font-medium transition-colors border-b border-amber-500/10 ${
                  isActive
                    ? 'bg-amber-500/20 !text-amber-400'
                    : '!text-white hover:!text-white hover:bg-amber-500/10'
                }`
              }
            >
              All Services
            </NavLink>
            {serviceLinks.map((service) => (
              <NavLink
                key={service.to}
                to={service.to}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm transition-colors border-b border-amber-500/10 last:border-b-0 ${
                    isActive
                      ? 'bg-amber-500/20 !text-amber-400'
                      : '!text-white hover:!text-white hover:bg-amber-500/10'
                  }`
                }
              >
                {service.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
      
      {/* Remaining Links (About Us, Careers, Contact) */}
      {links.slice(1).map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === '/'}
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `${isMobile ? 'w-full px-4 py-3' : 'px-3 py-2'} rounded-md font-medium transition-colors ${
              isActive
                ? 'bg-amber-500 !text-white shadow-md shadow-amber-500/30'
                : '!text-white hover:!text-white hover:bg-amber-500/10'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLinkClick}
        className={`${isMobile ? 'w-full px-4 py-3 mt-2' : 'ml-2 p-2'} flex items-center justify-center hover:bg-amber-500/10 transition-colors rounded-md`}
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="w-5 h-5"
          fill="white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        {isMobile && <span className="ml-2">WhatsApp</span>}
      </a>
    </nav>
  )
}

export default Navbar
