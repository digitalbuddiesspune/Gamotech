import React, { useEffect, useRef, useState } from 'react'

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    content: false,
    values: false,
    location: false
  })
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const valuesRef = useRef(null)
  const locationRef = useRef(null)

  useEffect(() => {
    const observers = []

    // Hero section observer
    if (heroRef.current) {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, hero: true }))
            }
          })
        },
        { threshold: 0.2 }
      )
      heroObserver.observe(heroRef.current)
      observers.push(heroObserver)
    }

    // Content section observer
    if (contentRef.current) {
      const contentObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, content: true }))
            }
          })
        },
        { threshold: 0.2 }
      )
      contentObserver.observe(contentRef.current)
      observers.push(contentObserver)
    }

    // Values section observer
    if (valuesRef.current) {
      const valuesObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, values: true }))
            }
          })
        },
        { threshold: 0.2 }
      )
      valuesObserver.observe(valuesRef.current)
      observers.push(valuesObserver)
    }

    // Location section observer
    if (locationRef.current) {
      const locationObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, location: true }))
            }
          })
        },
        { threshold: 0.2 }
      )
      locationObserver.observe(locationRef.current)
      observers.push(locationObserver)
    }

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="space-y-0">
      {/* Hero Banner Section */}
      <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a]">
        {/* Blackish Cover Overlay */}
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        
        {/* Geometric Shapes - 3D Cubes/Pyramids with Amber Edges */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          {/* Top Right Cube */}
          <div className="absolute top-20 right-20 w-24 h-24 transform rotate-12 animate-float-slow">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <polygon points="20,20 80,20 80,80 20,80" fill="none" stroke="#f5b400" strokeWidth="2" opacity="0.4" />
              <polygon points="20,20 50,5 80,20" fill="none" stroke="#f5b400" strokeWidth="2" opacity="0.4" />
              <polygon points="80,20 80,80 50,95 50,5" fill="none" stroke="#f5b400" strokeWidth="2" opacity="0.3" />
              <line x1="20" y1="20" x2="50" y2="5" stroke="#f5b400" strokeWidth="2" opacity="0.4" />
              <line x1="80" y1="20" x2="50" y2="5" stroke="#f5b400" strokeWidth="2" opacity="0.4" />
            </svg>
          </div>
          
          {/* Mid Left Cube */}
          <div className="absolute top-1/3 left-16 w-20 h-20 transform -rotate-12 animate-float-medium">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <polygon points="30,30 70,30 70,70 30,70" fill="none" stroke="#f5b400" strokeWidth="2" opacity="0.35" />
              <polygon points="30,30 50,15 70,30" fill="none" stroke="#f5b400" strokeWidth="2" opacity="0.35" />
              <line x1="30" y1="30" x2="50" y2="15" stroke="#f5b400" strokeWidth="2" opacity="0.35" />
              <line x1="70" y1="30" x2="50" y2="15" stroke="#f5b400" strokeWidth="2" opacity="0.35" />
            </svg>
          </div>
          
          {/* Bottom Right Cube */}
          <div className="absolute bottom-32 right-1/4 w-28 h-28 transform rotate-45 animate-float-slow">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <polygon points="15,15 85,15 85,85 15,85" fill="none" stroke="#f5b400" strokeWidth="2" opacity="0.3" />
              <polygon points="15,15 50,0 85,15" fill="none" stroke="#f5b400" strokeWidth="2" opacity="0.3" />
              <line x1="15" y1="15" x2="50" y2="0" stroke="#f5b400" strokeWidth="2" opacity="0.3" />
              <line x1="85" y1="15" x2="50" y2="0" stroke="#f5b400" strokeWidth="2" opacity="0.3" />
            </svg>
          </div>
          
          {/* Top Center Pyramid */}
          <div className="absolute top-40 left-1/2 w-16 h-16 transform -translate-x-1/2 animate-float-medium">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <polygon points="50,10 20,80 80,80" fill="none" stroke="#f5b400" strokeWidth="2" opacity="0.4" />
              <line x1="50" y1="10" x2="50" y2="80" stroke="#f5b400" strokeWidth="2" opacity="0.3" />
            </svg>
          </div>
          
          {/* Additional Small Cubes */}
          <div className="absolute top-1/2 right-1/3 w-12 h-12 transform rotate-30 animate-float-fast">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <polygon points="25,25 75,25 75,75 25,75" fill="none" stroke="#f5b400" strokeWidth="1.5" opacity="0.3" />
            </svg>
          </div>
        </div>
        
        {/* Amber Diagonal Lines */}
        <svg className="absolute inset-0 z-[2] pointer-events-none opacity-30">
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#f5b400" strokeWidth="1" opacity="0.4" />
          <line x1="70%" y1="15%" x2="90%" y2="35%" stroke="#f5b400" strokeWidth="1" opacity="0.4" />
          <line x1="20%" y1="60%" x2="50%" y2="80%" stroke="#f5b400" strokeWidth="1" opacity="0.4" />
          <line x1="60%" y1="70%" x2="85%" y2="90%" stroke="#f5b400" strokeWidth="1" opacity="0.4" />
        </svg>
        
        {/* Amber Dots */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-amber-500 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '2s', animationDelay: '0s' }}></div>
          <div className="absolute top-48 right-1/3 w-2 h-2 bg-amber-500 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-amber-500 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '2.2s', animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-amber-500 rounded-full opacity-50 animate-pulse" style={{ animationDuration: '2.3s', animationDelay: '0.7s' }}></div>
        </div>
        
        {/* Hero Content - Centered */}
        <div ref={heroRef} className="relative z-10 pt-24 pb-24 sm:pt-32 sm:pb-32">
          <div className="max-w-4xl mx-auto text-center space-y-6 px-4 sm:px-8">
            <div className={`space-y-4 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-amber-500 text-xl sm:text-2xl font-semibold uppercase tracking-wide">
                ABOUT US
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                About Gamotech
              </h1>
            </div>
            
            <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-white/90 text-xl sm:text-2xl font-medium leading-relaxed">
                Gamotech was started with one clear belief: technology should simplify business — not complicate it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative w-full bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Introduction */}
          <div ref={contentRef} className={`space-y-6 transition-all duration-1000 ${isVisible.content ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
              We&apos;re a Pune-based IT solutions company working with startups, growing brands, and businesses across India to build websites, e-commerce platforms, CRM systems, and custom software that actually serve a purpose.
            </p>
          </div>

          {/* Values Section */}
          <div ref={valuesRef} className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* What We Don't Do */}
            <div className="bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10 p-8 sm:p-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-400">We don&apos;t follow templates.</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                We don&apos;t push unnecessary features. And we don&apos;t treat clients like &quot;projects.&quot;
              </p>
            </div>

            {/* What We Do */}
            <div className="bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10 p-8 sm:p-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-400">Every solution we build starts with understanding</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Every solution we build starts with understanding how your business works, where time is being wasted, and how technology can improve speed, clarity, and growth.
              </p>
            </div>

            {/* Our Focus */}
            <div className="bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10 p-8 sm:p-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-400">Our Focus</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Whether it&apos;s a simple business website or a complex internal system, our focus stays the same: clean execution, scalable architecture, and long-term reliability.
              </p>
            </div>

            {/* Partnership */}
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/40 rounded-xl shadow-lg shadow-amber-500/20 p-8 sm:p-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-300">Gamotech is not a one-time vendor.</h2>
              <p className="text-white/90 text-xl font-semibold leading-relaxed">
                We aim to be your long-term technology partner.
              </p>
            </div>
          </div>

          {/* Location Section */}
          <div ref={locationRef} className={`pt-8 border-t border-amber-500/30 transition-all duration-1000 delay-300 ${isVisible.location ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-amber-200/90 text-lg sm:text-xl font-medium">
                Based in Pune | Working with clients across India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
