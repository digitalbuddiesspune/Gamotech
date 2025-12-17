import React from 'react'
import { Link } from 'react-router-dom'

const roles = [
  {
    title: 'Gameplay Engineer',
    location: 'Remote, GMT±3',
    summary: 'Prototype mechanics, tune feel, and keep builds stable.',
  },
  {
    title: 'Technical Artist',
    location: 'Hybrid, Bangalore',
    summary: 'Bridge art and engineering to keep performance buttery smooth.',
  },
  {
    title: 'Live Ops Producer',
    location: 'Remote, Americas',
    summary: 'Plan events, content drops, and experiments for live builds.',
  },
]

const perks = ['Remote-friendly culture', 'Learning stipend', 'Flexible hours', 'Bi-weekly playtests']

const Careers = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold text-amber-400">Careers</p>
        <h1 className="text-3xl font-bold text-amber-100">Join the demo crew.</h1>
        <p className="text-lg text-amber-200/80">
          These listings are sample copy. Replace them with your actual openings once recruiting is live.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {roles.map((role) => (
          <div
            key={role.title}
            className="p-6 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10 space-y-2"
          >
            <p className="text-sm font-semibold text-amber-400">{role.location}</p>
            <h3 className="text-xl font-semibold text-amber-50">{role.title}</h3>
            <p className="text-sm text-amber-200/75">{role.summary}</p>
            <Link
              to="/contact-us"
              className="inline-block mt-2 text-sm font-semibold text-amber-300 hover:text-amber-200"
            >
              Apply via contact form →
            </Link>
          </div>
        ))}
      </div>

      <div className="p-6 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10">
        <h2 className="text-xl font-semibold text-amber-50">Perks & culture</h2>
        <div className="flex flex-wrap gap-3 mt-3">
          {perks.map((perk) => (
            <span
              key={perk}
              className="px-3 py-1 rounded-full bg-black border border-amber-500/30 text-sm text-amber-200"
            >
              {perk}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Careers
