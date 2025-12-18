import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const COUNTERS = [
  { label: 'Projects Delivered', target: 100 },
  { label: 'Certified Developers', target: 50 },
  { label: 'Happy Customers', target: 80 },
]

const Home = () => {
  const [openService, setOpenService] = useState(null)
  const [counts, setCounts] = useState(COUNTERS.map(() => 0))
  const countersRef = useRef(null)
  const hasAnimated = useRef(false)
  const services = [
    {
      title: 'Web Design & Development',
      description: 'Fast, responsive sites built for conversion and maintainability.',
    },
    {
      title: 'SEO',
      description: 'Technical audits, on-page tuning, and content plans to rank and convert.',
    },
    {
      title: 'Social Media Marketing',
      description: 'Channel-first storytelling, ad sets, and reporting that tie to outcomes.',
    },
    {
      title: 'Content Writing',
      description: 'Clear, on-brand copy for blogs, landing pages, and product narratives.',
    },
    {
      title: 'Logo Design',
      description: 'Distinct visual identities that stay sharp across digital and print.',
    },
    {
      title: 'App Development',
      description: 'Reliable mobile experiences with performant frontends and APIs.',
    },
    {
      title: 'Performance Marketing',
      description: 'Full-funnel campaigns with tracking, experimentation, and optimization.',
    },
  ]

  useEffect(() => {
    const node = countersRef.current
    if (!node || hasAnimated.current) return

    const duration = 1200
    const rafIds = []

    const animateIndex = (index, target) => {
      const start = performance.now()
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        setCounts((prev) => {
          const next = [...prev]
          next[index] = target * progress
          return next
        })
        if (progress < 1) {
          rafIds[index] = requestAnimationFrame(step)
        }
      }
      rafIds[index] = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            COUNTERS.forEach((c, idx) => animateIndex(idx, c.target))
          }
        })
      },
      { threshold: 0.35 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      rafIds.forEach((id) => cancelAnimationFrame(id))
    }
  }, [])

  return (
    <section className="space-y-12">
      <div className="relative overflow-hidden w-full bg-black pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766038533/original-ac3fe9a266eaf9054cfc02e52d1ee3d3_rijhur.gif"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center space-y-6 max-w-3xl mx-auto px-4">
          <p className="text-sm font-semibold text-amber-400 uppercase tracking-wide">Cloud-scale delivery</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-amber-50">
            Bring Your Ideas. We&apos;ll Bring the Execution.
          </h1>
          <p className="text-lg sm:text-xl text-amber-200/85">
            Whether it&apos;s building platforms, automating workflows, or scaling teams, we make execution feel
            simple, smart, and fast.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact-us"
              className="px-6 py-3 rounded-md bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/25"
            >
              Let&apos;s grow together
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 rounded-md border border-amber-500/60 text-white font-semibold hover:border-amber-400 hover:text-amber-200 transition-colors"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="p-8 bg-[#0d0d0f] rounded-xl space-y-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-50">
          Welcome to Gamotech IT &amp; Web Solutions!
        </h2>
        <p className="text-lg sm:text-xl text-amber-200/85 leading-relaxed">
          We&apos;re your one-stop destination for comprehensive digital solutions, offering innovative IT services,
          captivating web design, and strategic digital marketing expertise. Our mission is to empower businesses with
          transformative technology and drive growth through targeted digital strategies. Follow us on LinkedIn to stay
          updated on the latest industry trends, insightful articles, and expert tips on IT, web development, and
          digital marketing. Let&apos;s collaborate and unlock your full potential in the digital world!
        </p>
      </div>

      <div className="bg-[#0d0d0f] rounded-xl">
        <div className="px-5 pt-6 pb-2 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Services</h2>
        </div>
        {services.map((service, idx) => {
          const isOpen = openService === idx
          return (
            <div
              key={service.title}
              className={`border-b border-amber-500/20 last:border-b-0 transition-colors ${
                isOpen ? 'bg-amber-500/5' : ''
              }`}
            >
              <button
                className="w-full text-left px-5 py-6 flex items-center gap-4"
                onClick={() => setOpenService(isOpen ? null : idx)}
              >
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-amber-50">{service.title}</h3>
                  {isOpen && (
                    <p className="mt-2 text-amber-200/80 text-base sm:text-lg leading-relaxed">{service.description}</p>
                  )}
                </div>
                <div
                  className={`text-2xl font-semibold text-amber-200 transition-transform duration-200 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </div>
              </button>
            </div>
          )
        })}
      </div>

      <div
        ref={countersRef}
        className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-black px-10 py-20 sm:py-20 shadow-2xl shadow-amber-500/10"
      >
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(245,180,0,0.2) 0, rgba(245,180,0,0) 35%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.08) 0, rgba(255,255,255,0) 32%), radial-gradient(circle at 50% 75%, rgba(245,180,0,0.15) 0, rgba(245,180,0,0) 34%)',
          }}
        />
        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {COUNTERS.map((item, idx) => {
            const current = Math.min(item.target, Math.floor(counts[idx] ?? 0))
            return (
              <div key={item.label} className="space-y-3">
                <p className="text-6xl sm:text-7xl font-extrabold text-white leading-none">
                  {current}+{/* keep plus visible */}
                </p>
                <p className="text-lg sm:text-xl text-amber-200/85">{item.label}</p>
              </div>
            )
          })}
        </div>
      </div>

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
      </div>
    </section>
  )
}

export default Home
