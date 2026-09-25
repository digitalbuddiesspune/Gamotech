import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'

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
    <div className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">Careers</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Join our team
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-amber-50/75 sm:text-lg">
          Help us empower businesses with innovative IT solutions and digital transformation. Are you ready to join?
        </p>
        <a
          href="#job-listings"
          className="mt-8 inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold !text-white transition-colors duration-200 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          See positions
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 lg:pb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">Explore careers</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          We are Gamotech
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-amber-50/75 sm:text-lg">
          <p>
            At Gamotech, we create more than solutions—we build a place where people thrive. Our culture is rooted in
            collaboration, respect, and shared ambition, where every team member is encouraged to be themselves while
            working toward common goals.
          </p>
          <p>
            We believe growth is a journey, not a milestone. Learning, mentorship, and innovation are part of our
            everyday work, helping individuals unlock their potential while overcoming challenges together. Success here
            is shared, celebrated, and earned as a team.
          </p>
          <p>
            Creativity and ownership define life at Gamotech. With the freedom to explore ideas and the support to bring
            them to life, our teams deliver meaningful, high-impact solutions with passion and purpose.
          </p>
          <p className="font-medium text-white">
            We innovate with intent. We grow together. We move forward—unstoppable.
          </p>
          <p className="text-white">Welcome to Gamotech.</p>
        </div>
      </section>

      <section id="job-listings" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Job openings</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <article
              key={role.title}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {role.location}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">{role.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-amber-50/75">{role.summary}</p>
              <Link
                to="/contact-us"
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold !text-amber-300 hover:!text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              >
                Apply via contact form
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Perks and culture</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {perks.map((perk) => (
              <li
                key={perk}
                className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-100"
              >
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Careers
