import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about-us', label: 'About Us' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact-us', label: 'Contact' },
]

const Navbar = () => {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === '/'}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-medium transition-colors ${
              isActive
                ? 'bg-amber-500 !text-white shadow-md shadow-amber-500/30'
                : '!text-white hover:!text-white hover:bg-amber-500/10'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
