import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import brainIcon from '../../assets/BrainIcon.webp'

const INCLUDES = [
  'Streamline operations',
  'Enhance customer experiences',
  'Smarter decision-making',
  'Automation and analytics built around your goals',
]

const AiIntegrations = () => {
  return (
    <div className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <nav className="text-sm text-amber-100/70" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-amber-300">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/services/website-design" className="hover:text-amber-300">Services</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white">AI Integrations</li>
          </ol>
        </nav>

        <img src={brainIcon} alt="" className="mt-8 h-12 w-12 object-contain" />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">Services</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          AI Integrations
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-amber-50/80 sm:text-xl">
          We help businesses integrate AI into their systems to streamline operations, enhance customer experiences, and
          unlock smarter decision-making. From automation to analytics, our solutions are built to fit your goals.
        </p>

        <ul className="mt-8 max-w-xl space-y-3">
          {INCLUDES.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-amber-50/80">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/contact-us"
          className="mt-10 inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold !text-white transition-colors duration-200 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          Talk to Gamotech
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>
    </div>
  )
}

export default AiIntegrations
