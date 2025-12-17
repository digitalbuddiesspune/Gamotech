import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-amber-500/40 text-amber-100 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Gamotech. All rights reserved.</p>
        <p className="text-sm text-amber-200/70">Demo content for preview purposes.</p>
      </div>
    </footer>
  )
}

export default Footer
