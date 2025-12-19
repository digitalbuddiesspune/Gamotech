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
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-8 sm:space-y-12 pt-20 sm:pt-12">
      <div className="text-center space-y-2 sm:space-y-3">
        <p className="text-xs sm:text-sm font-semibold text-amber-400 uppercase tracking-wide">Services</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-100">Demo service catalog</h1>
        <p className="text-sm sm:text-base lg:text-lg text-amber-200/80 px-2 sm:px-0">
          Swap this placeholder copy with your own offers when you are ready.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-4 sm:p-6 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10 space-y-2 sm:space-y-3"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-amber-50">{service.title}</h3>
              <span className="text-xs sm:text-sm px-2 py-1 rounded-full bg-amber-500 text-black font-semibold flex-shrink-0">Demo</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-amber-400">{service.summary}</p>
            <p className="text-xs sm:text-sm text-amber-200/75 leading-relaxed">{service.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
