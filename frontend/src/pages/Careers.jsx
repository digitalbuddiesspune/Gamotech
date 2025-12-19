import React, { useEffect, useRef, useState } from 'react'
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
  const [heroVisible, setHeroVisible] = useState(false)
  const [weAreVisible, setWeAreVisible] = useState(false)
  const [jobCardsVisible, setJobCardsVisible] = useState(false)
  const [perksVisible, setPerksVisible] = useState(false)
  const heroRef = useRef(null)
  const weAreRef = useRef(null)
  const jobCardsRef = useRef(null)
  const perksRef = useRef(null)

  useEffect(() => {
    // Hero section animation on mount
    setHeroVisible(true)

    // Intersection Observer for scroll animations
    const observers = []

    // We Are Section
    if (weAreRef.current) {
      const observer1 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setWeAreVisible(true)
            }
          })
        },
        { threshold: 0.2 }
      )
      observer1.observe(weAreRef.current)
      observers.push(observer1)
    }

    // Job Cards Section
    if (jobCardsRef.current) {
      const observer2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setJobCardsVisible(true)
            }
          })
        },
        { threshold: 0.1 }
      )
      observer2.observe(jobCardsRef.current)
      observers.push(observer2)
    }

    // Perks Section
    if (perksRef.current) {
      const observer3 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setPerksVisible(true)
            }
          })
        },
        { threshold: 0.2 }
      )
      observer3.observe(perksRef.current)
      observers.push(observer3)
    }

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="space-y-8 sm:space-y-10 pt-20 md:pt-0">
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Black Background - Matching Navbar */}
        <div className="absolute inset-0 bg-black" />
        {/* Blackish Cover Overlay */}
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        
        {/* Code Lines Background - Animated */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-20 left-10 text-xs text-cyan-400/40 font-mono transform -rotate-12 animate-pulse"
            style={{ animationDelay: '0s', animationDuration: '3s' }}
          >
            encryption: {'{'} bucket: xxx_bucket_side {'}'}
          </div>
          <div 
            className="absolute top-40 right-20 text-xs text-blue-400/40 font-mono transform rotate-6 animate-pulse"
            style={{ animationDelay: '0.5s', animationDuration: '3s' }}
          >
            no_encryption: {'{'} status: active {'}'}
          </div>
          <div 
            className="absolute top-60 left-1/3 text-xs text-purple-400/40 font-mono transform -rotate-6 animate-pulse"
            style={{ animationDelay: '1s', animationDuration: '3s' }}
          >
            security: {'{'} enabled: true {'}'}
          </div>
          <div 
            className="absolute bottom-40 right-1/4 text-xs text-cyan-400/40 font-mono transform rotate-12 animate-pulse"
            style={{ animationDelay: '1.5s', animationDuration: '3s' }}
          >
            validate: {'{'} type: secure {'}'}
          </div>
          <div 
            className="absolute bottom-60 left-1/4 text-xs text-blue-400/40 font-mono transform -rotate-3 animate-pulse"
            style={{ animationDelay: '2s', animationDuration: '3s' }}
          >
            api: {'{'} endpoint: /secure {'}'}
          </div>
        </div>
        
        {/* Glowing Nodes and Icons - Animated */}
        <div className="absolute inset-0">
          {/* Cyan Node with Shield Icon - Top Right */}
          <div 
            className="absolute top-20 right-32 w-16 h-16 bg-cyan-500/20 rounded-lg backdrop-blur-sm border border-cyan-400/30 shadow-lg shadow-cyan-500/20 flex items-center justify-center animate-bounce"
            style={{ animationDuration: '4s', animationDelay: '0s' }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
              <path
                d="M12 2L4 7v5c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-8-5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          {/* Magenta Node with Warning Icon - Mid Right */}
          <div 
            className="absolute top-1/2 right-20 w-16 h-16 bg-pink-500/20 rounded-lg backdrop-blur-sm border border-pink-400/30 shadow-lg shadow-pink-500/20 flex items-center justify-center animate-bounce"
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-pink-400">
              <path
                d="M12 9v4M12 17h.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          {/* Cyan Node with Shield Icon - Bottom Right */}
          <div 
            className="absolute bottom-32 right-40 w-16 h-16 bg-cyan-500/20 rounded-lg backdrop-blur-sm border border-cyan-400/30 shadow-lg shadow-cyan-500/20 flex items-center justify-center animate-bounce"
            style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
              <path
                d="M12 2L4 7v5c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-8-5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          {/* Magenta Node with Warning Icon - Top Left Area */}
          <div 
            className="absolute top-40 left-1/2 w-14 h-14 bg-pink-500/20 rounded-lg backdrop-blur-sm border border-pink-400/30 shadow-lg shadow-pink-500/20 flex items-center justify-center animate-bounce"
            style={{ animationDuration: '5.5s', animationDelay: '1.5s' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-pink-400">
              <path
                d="M12 9v4M12 17h.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        {/* Light Trails/Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line
            x1="75%"
            y1="25%"
            x2="60%"
            y2="50%"
            stroke="url(#gradient1)"
            strokeWidth="2"
            opacity="0.4"
          />
          <line
            x1="60%"
            y1="50%"
            x2="70%"
            y2="65%"
            stroke="url(#gradient2)"
            strokeWidth="2"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Content - Left Side - Animated */}
        <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
          <div 
            className={`max-w-2xl space-y-4 sm:space-y-6 transition-all duration-1000 ${
              heroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <p 
              className="text-xs sm:text-sm font-semibold text-white/80"
              style={{ transitionDelay: '0.1s' }}
            >
              Careers at Gamotech
            </p>
            <h1 
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight"
              style={{ transitionDelay: '0.2s' }}
            >
              Join Our Team!
            </h1>
            <p 
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 max-w-xl"
              style={{ transitionDelay: '0.3s' }}
            >
              Help us empower businesses with innovative IT solutions and digital transformation. Are you ready to join?
            </p>
            <Link
              to="#job-listings"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('job-listings')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-md bg-amber-500 !text-white font-semibold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/25"
              style={{ transitionDelay: '0.4s' }}
            >
              See Positions
              <svg
                className="w-4 h-4 sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* We Are Section - Animated */}
      <div ref={weAreRef} className="relative bg-black py-12 sm:py-16 lg:py-20">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p 
            className={`text-xs sm:text-sm font-semibold text-amber-400 mb-6 sm:mb-8 transition-all duration-700 ${
              weAreVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            Explore Careers at Gamotech
          </p>
          
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column - Heading */}
            <div 
              className={`transition-all duration-700 ${
                weAreVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight">
                We Are
                <br />
                <span className="text-white">Gamotech</span>
              </h2>
            </div>
            
            {/* Right Column - Description */}
            <div 
              className={`space-y-3 sm:space-y-4 text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed transition-all duration-700 ${
                weAreVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <p>
                At Gamotech, we create more than solutions—we build a place where people thrive. Our culture is rooted in collaboration, respect, and shared ambition, where every team member is encouraged to be themselves while working toward common goals.
              </p>
              
              <p>
                We believe growth is a journey, not a milestone. Learning, mentorship, and innovation are part of our everyday work, helping individuals unlock their potential while overcoming challenges together. Success here is shared, celebrated, and earned as a team.
              </p>
              
              <p>
                Creativity and ownership define life at Gamotech. With the freedom to explore ideas and the support to bring them to life, our teams deliver meaningful, high-impact solutions with passion and purpose.
              </p>
              
              <p className="font-semibold text-white">
                We innovate with intent. We grow together. We move forward—unstoppable.
              </p>
              
              <p className="text-white">
                Welcome to Gamotech.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings Section - Animated */}
      <div id="job-listings" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 space-y-6 sm:space-y-8 lg:space-y-10">
        <div 
          ref={jobCardsRef}
          className="space-y-2 sm:space-y-3 text-center"
        >
          <h2 
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-100 transition-all duration-700 ${
              jobCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Job Openings
          </h2>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, index) => (
          <div
            key={role.title}
              className={`group relative p-4 sm:p-6 bg-[#0d0d0f] border border-amber-500/30 rounded-2xl shadow-lg shadow-amber-500/10 hover:border-amber-500/50 hover:shadow-amber-500/20 transition-all duration-300 flex flex-col ${
                jobCardsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Location Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-400">
                  {role.location}
                </span>
              </div>
              
              {/* Job Title */}
              <h3 className="text-lg sm:text-xl font-bold text-amber-50 mb-2 sm:mb-3 group-hover:text-amber-100 transition-colors">
                {role.title}
              </h3>
              
              {/* Job Summary */}
              <p className="text-xs sm:text-sm text-amber-200/75 mb-4 sm:mb-6 flex-grow leading-relaxed">
                {role.summary}
              </p>
              
              {/* Apply Button */}
            <Link
              to="/contact-us"
                className="inline-flex items-center gap-2 mt-auto text-xs sm:text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors group/link"
              >
                Apply via contact form
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform group-hover/link:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </Link>
          </div>
        ))}
      </div>

        {/* Perks & Culture Section - Animated */}
        <div 
          ref={perksRef}
          className={`mt-8 sm:mt-10 lg:mt-12 p-6 sm:p-8 bg-gradient-to-br from-[#0d0d0f] to-black border border-amber-500/30 rounded-2xl shadow-lg shadow-amber-500/10 transition-all duration-700 ${
            perksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="h-1 w-8 sm:w-12 bg-amber-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-50">Perks & Culture</h2>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {perks.map((perk, index) => (
            <span
              key={perk}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm font-medium text-amber-200 hover:bg-amber-500/20 hover:border-amber-500/50 transition-all duration-200 ${
                  perksVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {perk}
            </span>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Careers
