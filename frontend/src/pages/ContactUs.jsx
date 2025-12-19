import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    form: false,
    contactInfo: false
  })
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const contactInfoRef = useRef(null)

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

    // Form section observer
    if (formRef.current) {
      const formObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, form: true }))
            }
          })
        },
        { threshold: 0.2 }
      )
      formObserver.observe(formRef.current)
      observers.push(formObserver)
    }

    // Contact info observer
    if (contactInfoRef.current) {
      const contactObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, contactInfo: true }))
            }
          })
        },
        { threshold: 0.2 }
      )
      contactObserver.observe(contactInfoRef.current)
      observers.push(contactObserver)
    }

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="space-y-0 pt-20 md:pt-0">
      {/* Merged Hero Banner and Contact Form Section */}
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
          
          {/* Additional shapes for lower section */}
          <div className="absolute top-[60%] right-10 w-20 h-20 transform rotate-12 animate-float-slow">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <polygon points="20,20 80,20 80,80 20,80" fill="none" stroke="#f5b400" strokeWidth="2" opacity="0.3" />
            </svg>
          </div>
          
          <div className="absolute bottom-20 left-1/4 w-16 h-16 transform -rotate-12 animate-float-medium">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <polygon points="30,30 70,30 70,70 30,70" fill="none" stroke="#f5b400" strokeWidth="2" opacity="0.3" />
            </svg>
          </div>
        </div>
        
        {/* Amber Diagonal Lines */}
        <svg className="absolute inset-0 z-[2] pointer-events-none opacity-30">
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#f5b400" strokeWidth="1" opacity="0.4" />
          <line x1="70%" y1="15%" x2="90%" y2="35%" stroke="#f5b400" strokeWidth="1" opacity="0.4" />
          <line x1="20%" y1="60%" x2="50%" y2="80%" stroke="#f5b400" strokeWidth="1" opacity="0.4" />
          <line x1="60%" y1="70%" x2="85%" y2="90%" stroke="#f5b400" strokeWidth="1" opacity="0.4" />
          <line x1="40%" y1="30%" x2="60%" y2="50%" stroke="#f5b400" strokeWidth="1" opacity="0.3" />
          <line x1="15%" y1="65%" x2="35%" y2="85%" stroke="#f5b400" strokeWidth="1" opacity="0.3" />
          <line x1="75%" y1="75%" x2="90%" y2="95%" stroke="#f5b400" strokeWidth="1" opacity="0.3" />
        </svg>
        
        {/* Amber Dots */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-amber-500 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '2s', animationDelay: '0s' }}></div>
          <div className="absolute top-48 right-1/3 w-2 h-2 bg-amber-500 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-amber-500 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '2.2s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-52 right-1/5 w-2 h-2 bg-amber-500 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '2.8s', animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-amber-500 rounded-full opacity-50 animate-pulse" style={{ animationDuration: '2.3s', animationDelay: '0.7s' }}></div>
          <div className="absolute top-2/3 right-1/2 w-1.5 h-1.5 bg-amber-500 rounded-full opacity-50 animate-pulse" style={{ animationDuration: '2.6s', animationDelay: '1.2s' }}></div>
          <div className="absolute top-[65%] left-1/5 w-2 h-2 bg-amber-500 rounded-full opacity-50 animate-pulse" style={{ animationDuration: '2.4s', animationDelay: '0.8s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-1.5 h-1.5 bg-amber-500 rounded-full opacity-50 animate-pulse" style={{ animationDuration: '2.7s', animationDelay: '0.4s' }}></div>
        </div>
        
        {/* Hero Content - Centered */}
        <div ref={heroRef} className="relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8">
            {/* Main Heading */}
            <div className={`space-y-2 sm:space-y-3 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-amber-500 text-lg sm:text-xl lg:text-2xl font-semibold">
                We deliver
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight px-2 sm:px-0">
                solutions for you
              </h1>
              <p className="text-white/90 text-lg sm:text-xl lg:text-2xl font-medium">
                Best IT service
              </p>
            </div>
            
            {/* Description */}
            <p className={`text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 px-2 sm:px-0 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Transform your business with cutting-edge IT solutions, innovative web development, and strategic digital marketing. We bring your vision to life with expertise, dedication, and results that matter.
            </p>
            
            {/* CTA Buttons */}
            <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4 transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link
                to="#contact-form"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('contact-form')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/25"
                style={{ color: 'white' }}
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg bg-transparent border-2 border-amber-500 text-white font-semibold hover:bg-amber-500/10 hover:border-amber-400 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
        
        {/* Contact Form Section - Merged */}
        <div id="contact-form" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 space-y-6 sm:space-y-8">
          <div className={`space-y-2 sm:space-y-3 text-center transition-all duration-1000 ${isVisible.form ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-amber-400">Contact US</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-100 px-2 sm:px-0">Let&apos;s talk about your next build.</h2>
          <p className="text-sm sm:text-base lg:text-lg text-amber-200/80 px-2 sm:px-0">
              Share what you are building and where you need help. We can scope prototypes, review
              gameplay loops, or plan live operations together.
          </p>
        </div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div ref={contactInfoRef} className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible.contactInfo ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="space-y-4 text-amber-100/85">
          <p>
                Transform your business with cutting-edge IT solutions, innovative web development, and strategic digital marketing. We bring your vision to life with expertise, dedication, and results that matter.
          </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
            <p className="font-semibold text-amber-200">Contact details</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-amber-100/80">Email: info@gamotech.com</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-amber-100/80">Address: 
                    618, Gera's Imperum Rise, Wipro Circle, Hinjewadi, Pune – 411057</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-amber-100/80">Office hours: Mon–Fri, 11am–7pm (GMT)</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

          {/* Contact Form */}
        <form
          ref={formRef}
          className={`bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10 p-4 sm:p-6 space-y-3 sm:space-y-4 transition-all duration-1000 delay-300 ${isVisible.form ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-1">
            <label className="text-xs sm:text-sm font-medium text-amber-100">Name</label>
            <input
              type="text"
              placeholder="Alex Player"
              className="w-full rounded-md border border-amber-500/40 bg-black/40 px-3 py-2 text-sm sm:text-base text-amber-50 placeholder:text-amber-200/50 focus:border-amber-400 focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs sm:text-sm font-medium text-amber-100">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-amber-500/40 bg-black/40 px-3 py-2 text-sm sm:text-base text-amber-50 placeholder:text-amber-200/50 focus:border-amber-400 focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs sm:text-sm font-medium text-amber-100">How can we help?</label>
            <textarea
              rows="4"
              placeholder="I need help with multiplayer architecture..."
              className="w-full rounded-md border border-amber-500/40 bg-black/40 px-3 py-2 text-sm sm:text-base text-amber-50 placeholder:text-amber-200/50 focus:border-amber-400 focus:outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2.5 sm:py-3 rounded-md bg-amber-500 text-sm sm:text-base text-black font-semibold hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/25"
          >
            Send (demo)
          </button>
        </form>
      </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
