import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5">
          <p className="text-sm font-semibold text-amber-400">Demo launchpad</p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-amber-100">
            Build, test, and ship memorable gaming experiences with Gamotech.
          </h1>
          <p className="text-lg text-amber-200/80">
            This is placeholder content to showcase layout and copy. Swap it with your own story when you are ready to go live.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/services"
              className="px-5 py-3 rounded-md bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/25"
            >
              View services
            </Link>
            <Link
              to="/contact-us"
              className="px-5 py-3 rounded-md border border-amber-500/60 text-amber-100 font-semibold hover:border-amber-400 hover:text-amber-300 transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
        <div className="bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10 p-6 space-y-4">
          <h3 className="text-lg font-semibold text-amber-200">Latest prototype snapshot</h3>
          <ul className="space-y-3 text-amber-100/90">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <div>
                <p className="font-medium text-amber-50">Stable 60fps build</p>
                <p className="text-sm text-amber-200/70">Optimized assets running across desktop and mobile.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" />
              <div>
                <p className="font-medium text-amber-50">Multiplayer lobby</p>
                <p className="text-sm text-amber-200/70">Matchmaking, chat, and party invites wired for demos.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-600" />
              <div>
                <p className="font-medium text-amber-50">Live operations ready</p>
                <p className="text-sm text-amber-200/70">Analytics, A/B toggles, and remote configs connected.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10">
          <p className="text-sm font-semibold text-amber-400">Engines</p>
          <h3 className="text-lg font-semibold mt-1 text-amber-50">Unity & Unreal friendly</h3>
          <p className="text-sm text-amber-200/70 mt-2">We plug into your stack to prototype mechanics rapidly.</p>
        </div>
        <div className="p-5 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10">
          <p className="text-sm font-semibold text-amber-400">Platforms</p>
          <h3 className="text-lg font-semibold mt-1 text-amber-50">Cross-platform ready</h3>
          <p className="text-sm text-amber-200/70 mt-2">Ship to PC, console, and mobile with unified workflows.</p>
        </div>
        <div className="p-5 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10">
          <p className="text-sm font-semibold text-amber-400">Support</p>
          <h3 className="text-lg font-semibold mt-1 text-amber-50">Live service playbook</h3>
          <p className="text-sm text-amber-200/70 mt-2">Content drops, event cadences, and monetization experiments.</p>
        </div>
      </div>
    </section>
  )
}

export default Home
