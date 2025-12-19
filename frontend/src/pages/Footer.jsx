import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-amber-500/40 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Main Footer Content - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left Column - Company Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1765977541/Asset_7_kium0j.png"
                alt="Gamotech Logo"
                className="h-12 w-auto"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm uppercase mb-2 relative pb-2">
                ABOUT OUR COMPANY
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500"></span>
              </h3>
              <p className="text-amber-100/80 text-sm leading-relaxed mt-3">
                Our sole purpose as an IT & Web Solutions company is to elevate your business beyond the reach of your competitors. You bring the vision—Gamotech turns it into a powerful and outstanding digital presence.
              </p>
            </div>
          </div>

          {/* Middle Column - Explore Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase mb-2 relative pb-2">
              EXPLORE
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-amber-500 hover:text-amber-400 transition-colors text-sm">
                Home
              </Link>
              <Link to="/services" className="text-white hover:text-amber-400 transition-colors text-sm">
                Services
              </Link>
              <Link to="/about-us" className="text-white hover:text-amber-400 transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact-us" className="text-white hover:text-amber-400 transition-colors text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase mb-2 relative pb-2">
              CONTACT
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-amber-100/80 text-sm">
                618, Gera's Imperum Rise, Wipro Circle, Hinjewadi, Pune – 411057
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-amber-100/80 text-sm">
                  info@gamotech.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Call to Action */}
        <div className="border-t border-amber-500/30 pt-4 sm:pt-6 space-y-3 sm:space-y-4">
          <div className="text-center">
            <p className="text-amber-500 font-semibold text-base sm:text-lg px-2 sm:px-0">
              Have Any Project? Let&apos;s Talk & Grow your Business
            </p>
          </div>
          
          <div className="border-t border-amber-500/30 pt-3 sm:pt-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white text-xs sm:text-sm">+91 9637319746
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white text-xs sm:text-sm">+91 9766670916</span>
              </div>
            </div>
          </div>

          {/* Legal and Copyright */}
          <div className="border-t border-amber-500/30 pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <Link to="/data-privacy" className="text-white hover:text-amber-400 transition-colors">
                Data Privacy
              </Link>
              <Link to="/privacy-policy" className="text-white hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-white hover:text-amber-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-white text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Gamotech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
