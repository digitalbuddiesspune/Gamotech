import React from 'react'

const AboutUs = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold text-amber-400">About Gamotech</p>
        <h1 className="text-3xl font-bold text-amber-100">A small crew building bold game ideas.</h1>
        <p className="text-lg text-amber-200/80">
          This is placeholder text for your future story. Use it to describe the studio vision,
          values, and why players will love what you are crafting.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-5 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10">
          <p className="text-3xl font-bold text-amber-400">15+</p>
          <p className="text-sm text-amber-200/75 mt-1">Prototypes shipped for testing</p>
        </div>
        <div className="p-5 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10">
          <p className="text-3xl font-bold text-amber-400">6</p>
          <p className="text-sm text-amber-200/75 mt-1">Countries represented on the team</p>
        </div>
        <div className="p-5 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10">
          <p className="text-3xl font-bold text-amber-400">24/7</p>
          <p className="text-sm text-amber-200/75 mt-1">Live ops coverage window</p>
        </div>
      </div>

      <div className="p-6 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10 space-y-3">
        <h2 className="text-xl font-semibold text-amber-50">How we work</h2>
        <p className="text-sm text-amber-200/75 leading-relaxed">
          We ship in weekly cycles, validate ideas early with playable builds, and collaborate
          closely with partners to de-risk production. Replace this with your own process once
          you have the final copy ready.
        </p>
      </div>
    </section>
  )
}

export default AboutUs
