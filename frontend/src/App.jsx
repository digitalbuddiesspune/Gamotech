import React from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App