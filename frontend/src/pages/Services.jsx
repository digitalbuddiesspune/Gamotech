import React from 'react'

const services = [
  {
    title: 'Gameplay prototyping',
    summary: 'Feel the core loop fast.',
    detail: 'White-box builds, mechanics tuning, and quick iteration sprints.',
  },
  {
    title: 'Multiplayer foundations',
    summary: 'Co-op or competitive.',
    detail: 'Matchmaking, party flows, chat, and netcode ready for demos.',
  },
  {
    title: 'Live ops setup',
    summary: 'Operate with confidence.',
    detail: 'Analytics, A/B testing, and event tooling to keep players engaged.',
  },
  {
    title: 'Publishing support',
    summary: 'Go-to-market helpers.',
    detail: 'Store assets, launch checklists, and build automation pipelines.',
  },
]

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center space-y-2">
        <p className="text-sm font-semibold text-amber-400 uppercase tracking-wide">Services</p>
        <h1 className="text-3xl font-bold text-amber-100">Demo service catalog</h1>
        <p className="text-lg text-amber-200/80">
          Swap this placeholder copy with your own offers when you are ready.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10 space-y-3"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-amber-50">{service.title}</h3>
              <span className="text-sm px-2 py-1 rounded-full bg-amber-500 text-black font-semibold">Demo</span>
            </div>
            <p className="text-sm font-semibold text-amber-400">{service.summary}</p>
            <p className="text-sm text-amber-200/75 leading-relaxed">{service.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
