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
    <section className="space-y-0 pt-20 md:pt-0">
      {/* Hero Banner Section */}
      <div className="relative w-full min-h-[60vh] overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a]">
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
        </div>
        
        {/* Amber Diagonal Lines */}
        <svg className="absolute inset-0 z-[2] pointer-events-none opacity-30">
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#f5b400" strokeWidth="1" opacity="0.4" />
          <line x1="70%" y1="15%" x2="90%" y2="35%" stroke="#f5b400" strokeWidth="1" opacity="0.4" />
          <line x1="20%" y1="60%" x2="50%" y2="80%" stroke="#f5b400" strokeWidth="1" opacity="0.4" />
        </svg>
        
        {/* Amber Dots */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-amber-500 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '2s', animationDelay: '0s' }}></div>
          <div className="absolute top-48 right-1/3 w-2 h-2 bg-amber-500 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-amber-500 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '2.2s', animationDelay: '1s' }}></div>
        </div>
        
        {/* Hero Content - Centered */}
        <div ref={heroRef} className="relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-24">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8">
            <div className={`space-y-3 sm:space-y-4 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-amber-500 text-lg sm:text-xl lg:text-2xl font-semibold uppercase tracking-wide">
                ABOUT US
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight px-2 sm:px-0">
                About Gamotech
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative bg-black py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {/* Opening Statement */}
          <div ref={contentRef} className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${isVisible.content ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-amber-200/90 leading-relaxed font-medium px-2 sm:px-0">
              Gamotech was started with one clear belief:
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-amber-400 font-bold leading-tight px-2 sm:px-0">
              technology should simplify business — not complicate it.
            </p>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/80 leading-relaxed px-2 sm:px-0">
              We&apos;re a Pune-based IT solutions company working with startups, growing brands, and 
              businesses across India to build websites, e-commerce platforms, CRM systems, and custom 
              software that actually serve a purpose.
            </p>
          </div>

          {/* Our Approach Section */}
          <div ref={valuesRef} className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-200 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-amber-100">We don&apos;t follow templates.</h2>
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-amber-100">We don&apos;t push unnecessary features.</h2>
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-amber-100">And we don&apos;t treat clients like &quot;projects.&quot;</h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/80 leading-relaxed px-2 sm:px-0">
                Every solution we build starts with understanding how your business works, where time is being 
                wasted, and how technology can improve speed, clarity, and growth.
              </p>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/80 leading-relaxed px-2 sm:px-0">
                Whether it&apos;s a simple business website or a complex internal system, our focus stays the same: 
                clean execution, scalable architecture, and long-term reliability.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border-l-4 border-amber-500 rounded-lg p-6 sm:p-8 lg:p-10">
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-amber-100 mb-2 sm:mb-3">
                Gamotech is not a one-time vendor.
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-amber-100">
                We aim to be your long-term technology partner.
              </p>
            </div>
          </div>

          {/* Location Section */}
          <div ref={locationRef} className={`pt-6 sm:pt-8 border-t border-amber-500/30 transition-all duration-1000 delay-300 ${isVisible.location ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-amber-200/80 text-sm sm:text-base lg:text-lg xl:text-xl px-2 sm:px-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="font-medium text-center">
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
