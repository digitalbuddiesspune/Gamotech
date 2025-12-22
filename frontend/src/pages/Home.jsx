import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const COUNTERS = [
  { label: 'Projects Delivered', target: 100 },
  { label: 'Certified Developers', target: 50 },
  { label: 'Happy Customers', target: 80 },
]

// Placeholder for client logos - replace with actual image URLs
const CLIENTS = [
  { name: 'Client 1', logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=Client+1' },
  { name: 'Client 2', logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=Client+2' },
  { name: 'Client 3', logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=Client+3' },
  { name: 'Client 4', logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=Client+4' },
  { name: 'Client 5', logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=Client+5' },
  { name: 'Client 6', logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=Client+6' },
  { name: 'Client 7', logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=Client+7' },
  { name: 'Client 8', logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=Client+8' },
]

const TECHNOLOGIES = [
  {
    name: 'React',
    description: 'Modern UI library for building interactive user interfaces.',
    category: 'Frontend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    description: 'JavaScript runtime for scalable server-side applications.',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'MongoDB',
    description: 'NoSQL database for flexible and scalable data storage.',
    category: 'Database',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'AWS',
    description: 'Cloud platform for scalable and reliable infrastructure.',
    category: 'Cloud',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766042477/Amazon-Web-Services-Emblem_suhhoc.png',
  },
  {
    name: 'Azure',
    description: 'Provide scalable computing, storage, networking, and AI services.',
    category: 'Cloud',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766043550/2560px-Microsoft_Azure_Logo.svg_tdjblr.png',
  },
  {
    name: 'Google Cloud',
    description: 'Cloud platform offering scalable infrastructure, data analytics, and AI services.',
    category: 'Cloud',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766043761/google-cloud_koqtfo.png',
  },
  {
    name: 'Python',
    description: 'Versatile programming language for web and data applications.',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'JavaScript',
    description: 'Core language powering modern web development.',
    category: 'Frontend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    description: 'Typed superset of JavaScript for better code quality.',
    category: 'Frontend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'PostgreSQL',
    description: 'Advanced open-source relational database system.',
    category: 'Database',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766041382/PostgreSQL-Logo.wine_fwbibj.png',
  },
  {
    name: 'Java',
    description: 'Object-oriented programming language and development platform.',
    category: 'Backend',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766043007/226777_pllt1s.png',
  },
  {
    name: 'Spring Boot',
    description: 'Production-grade applications with minimal configuration.',
    category: 'Framework',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766043052/spring-boot-logo-icon-hd_sherkd.png',
  },
  {
    name: 'Docker',
    description: 'Containerization platform for packaging applications with all dependencies consistently.',
    category: 'DevOps',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766052226/docker_ifywfm.jpg',
  },
  {
    name: 'Jenkins',
    description: 'Automation server for building, testing, and deploying applications through CI/CD pipelines.',
    category: 'DevOps',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766051002/1483px-Jenkins_logo.svg_mfkell.png',
  },
  {
    name: 'Kubernetes',
    description: 'Container orchestration platform for automating deployment, scaling, and management of applications.',
    category: 'DevOps',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766052006/1055px-Kubernetes_logo_without_workmark.svg_xjpytu.png',
  },
  {
    name: 'React Native',
    description: 'Framework for building cross-platform mobile apps using JavaScript and React.',
    category: 'Mobile Development',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766051525/react-native_thumb_wng54e.png',
  },
  {
    name: 'Next.js',
    description: 'React framework for server-side rendering, routing, and building high-performance web applications.',
    category: 'Frontend',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766051684/nextjs_h03xfi.jpg',
  },
  {
    name: 'Cloudinary',
    description: 'Cloud service for managing, optimizing, and delivering images and videos at scale.',
    category: 'Cloud Storage',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766051854/Cloudinary_logo_blue_0720_2x_qwnqap.png',
  },
  {
    name: 'PHP',
    description: 'Server-side scripting language for building dynamic and database-driven web applications.',
    category: 'Backend',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766051946/1280px-PHP-logo.svg_uhx9nk.png',
  },
  {
    name: 'Wordpress',
    description: 'Content management system for creating, managing, and publishing websites easily.',
    category: 'CMS / Web Development',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766052120/Wordpress_Blue_logo_iqqmyx.png',
  },
  {
    name: 'Shopify',
    description: 'E-commerce platform for creating, managing, and scaling online stores efficiently.',
    category: 'E-commerce Development',
    logo: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766053353/images_hcewiv.png',
  },

]

const Home = () => {
  const [openService, setOpenService] = useState(null)
  const [counts, setCounts] = useState(COUNTERS.map(() => 0))
  const countersRef = useRef(null)
  const hasAnimated = useRef(false)
  const services = [
    {
      title: 'Website Design & Development',
      description: 'We design modern, responsive websites that load fast, look premium, and convert visitors into customers.',
      features: [
        'Business websites',
        'Corporate & portfolio websites',
        'Landing pages',
        'Website redesign & performance optimization',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'E-Commerce Website Development',
      description: 'Sell online with secure, scalable, and easy-to-manage e-commerce platforms.',
      features: [
        'Product-based e-commerce websites',
        'Payment gateway integration',
        'Order & inventory management',
        'Mobile-friendly shopping experience',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      title: 'CRM & Custom Software Development',
      description: 'We build custom CRM and internal systems tailored to your workflow — not generic software.',
      features: [
        'Lead & customer management systems',
        'Sales & operations dashboards',
        'Custom admin panels',
        'Automation & reporting tools',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Application Software Development',
      description: 'Custom applications designed around your business logic.',
      features: [
        'Web applications',
        'Business process automation tools',
        'Scalable backend systems',
        'API integrations',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
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
    <section className="space-y-16 sm:space-y-20 pt-0 md:pt-0">
      <div className="relative overflow-hidden w-full h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            src="https://res.cloudinary.com/dvkxgrcbv/video/upload/v1766398147/gamotech_mw8qre.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center space-y-6 sm:space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-amber-400 uppercase tracking-wide">Cloud-scale delivery</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-amber-50 px-2 sm:px-0">
            Bring Your Ideas. We&apos;ll Bring the Execution.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-amber-200/85 px-2 sm:px-0">
            Whether it&apos;s building platforms, automating workflows, or scaling teams, we make execution feel
            simple, smart, and fast.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2">
            <Link
              to="/contact-us"
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-md bg-amber-500 !text-white font-semibold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/25"
            >
              Let&apos;s grow together
            </Link>
            <Link
              to="/services"
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-md border border-amber-500/60 !text-white font-semibold hover:border-amber-400 hover:text-amber-200 transition-colors"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="p-6 sm:p-12 lg:p-16 rounded-xl space-y-4 sm:space-y-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50">
          Welcome to Gamotech IT &amp; Web Solutions!
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-amber-200/85 leading-relaxed px-2 sm:px-0">
          We&apos;re your one-stop destination for comprehensive digital solutions, offering innovative IT services,
          captivating web design, and strategic digital marketing expertise. Our mission is to empower businesses with
          transformative technology and drive growth through targeted digital strategies. Follow us on LinkedIn to stay
          updated on the latest industry trends, insightful articles, and expert tips on IT, web development, and
          digital marketing. Let&apos;s collaborate and unlock your full potential in the digital world!
        </p>
        </div>

         

        {/* Our Services Section */}
        <div className="relative overflow-hidden bg-black py-12 sm:py-16 lg:py-20">
          {/* Disk-like background pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(245, 180, 0, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(245, 180, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(245, 180, 0, 0.08) 0%, transparent 60%),
                repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(245, 180, 0, 0.03) 1deg, transparent 2deg, rgba(245, 180, 0, 0.03) 3deg)
              `,
              backgroundSize: '100% 100%, 100% 100%, 100% 100%, 200% 200%',
            }}
          />
          {/* Curved overlapping lines pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="disk-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(245, 180, 0, 0.1)" strokeWidth="1" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(245, 180, 0, 0.08)" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(245, 180, 0, 0.06)" strokeWidth="1" />
                <path
                  d="M 20 100 Q 100 20, 180 100 T 20 100"
                  fill="none"
                  stroke="rgba(245, 180, 0, 0.05)"
                  strokeWidth="0.5"
                />
                <path
                  d="M 100 20 Q 180 100, 100 180 T 100 20"
                  fill="none"
                  stroke="rgba(245, 180, 0, 0.05)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#disk-pattern)" />
          </svg>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Side - Text and Button */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-12 sm:w-16 bg-amber-500"></div>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-white font-semibold">OUR SERVICES</p>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white uppercase leading-tight">
                WE WILL PROVIDE YOU THE BEST SERVICE
              </h2>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-amber-500 !text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200"
              >
                <span>OUR SERVICES</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Right Side - Service Cards Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-start">
              {services.map((service, idx) => {
                const isOpen = openService === idx
                return (
                  <div
                    key={service.title}
                    className={`bg-white rounded-lg flex flex-col hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 w-full self-start ${
                      isOpen ? 'p-6 sm:p-8 items-start text-left' : 'p-4 sm:p-6 items-center text-center'
                    }`}
                  >
                    <div className="text-amber-500 mb-3 sm:mb-4">
                      {service.icon}
                    </div>
                    <div className="w-full h-0.5 bg-amber-500 mb-3 sm:mb-4"></div>
                    <h3 className="text-xs sm:text-sm lg:text-base font-bold text-black uppercase leading-tight w-full">
                      {service.title}
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-300 text-left w-full ${
                        isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                        {service.description}
                      </p>
                      {service.features && service.features.length > 0 && (
                        <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                          {service.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className="flex items-start gap-2">
                              <span className="text-amber-500 mt-1 flex-shrink-0">●</span>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenService(isOpen ? null : idx)
                      }}
                      className={`mt-4 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-500 hover:bg-amber-600 text-white transition-all duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      aria-label={isOpen ? 'Close service details' : 'Open service details'}
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={countersRef}
          className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-black px-4 sm:px-8 lg:px-12 py-12 sm:py-20 lg:py-24 xl:py-32 shadow-2xl shadow-amber-500/10"
        >
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(245,180,0,0.2) 0, rgba(245,180,0,0) 35%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.08) 0, rgba(255,255,255,0) 32%), radial-gradient(circle at 50% 75%, rgba(245,180,0,0.15) 0, rgba(245,180,0,0) 34%)',
          }}
        />
        <div className="relative grid gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {COUNTERS.map((item, idx) => {
            const current = Math.min(item.target, Math.floor(counts[idx] ?? 0))
            return (
              <div key={item.label} className="space-y-2 sm:space-y-4">
                <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-none">
                  {current}+{/* keep plus visible */}
                </p>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-amber-200/85">{item.label}</p>
              </div>
            )
          })}
        </div>
        </div>
      </div>

      {/* Technologies We Use Section */}
      <div className="relative overflow-hidden w-full min-h-screen bg-black flex flex-col justify-center items-center space-y-8 sm:space-y-12 py-12 sm:py-16 lg:py-20">
        <div className="relative text-center z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4">
            Technologies We Use
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-amber-200/80 px-2 sm:px-0">
            Cutting-edge tools and frameworks powering our solutions
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden w-full max-w-7xl mx-auto py-4 sm:py-6 lg:py-8">
          <div className="flex animate-scroll-left">
            {/* Duplicate items for seamless loop */}
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, idx) => (
              <div
                key={`logo-${idx}`}
                className="flex-shrink-0 mx-2 sm:mx-4 lg:mx-6 xl:mx-8 flex items-center justify-center bg-white/5 rounded-lg p-2 sm:p-3 hover:bg-white/10 transition-colors"
                style={{ width: '80px', height: '80px', minWidth: '80px' }}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    console.error(`Failed to load logo for ${tech.name}:`, tech.logo)
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Card Carousel */}
        <div className="relative overflow-hidden w-full max-w-7xl mx-auto py-4 sm:py-6">
          <div className="flex animate-scroll-left-slow">
            {/* Duplicate items for seamless loop */}
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, idx) => (
              <div
                key={`card-${idx}`}
                className="flex-shrink-0 mx-2 sm:mx-3 lg:mx-4 xl:mx-6"
                style={{ width: '280px', minWidth: '280px' }}
              >
                <div className="bg-[#0d0d0f] border border-amber-500/30 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg shadow-amber-500/10 h-full hover:border-amber-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tech.category === 'Frontend'
                          ? 'bg-blue-500/20 text-blue-300'
                          : tech.category === 'Backend'
                          ? 'bg-green-500/20 text-green-300'
                          : tech.category === 'Database'
                          ? 'bg-purple-500/20 text-purple-300'
                          : 'bg-orange-500/20 text-orange-300'
                      }`}
                    >
                      {tech.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-amber-50 mb-3">
                    {tech.name}
                  </h3>
                  <p className="text-amber-200/70 text-sm sm:text-base leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="bg-black py-5 sm:py-10 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mb-8 sm:mb-12 lg:mb-16">
              How we works?
            </h2>
            
            <div className="relative">
              {/* Background decorative elements - Sun and Clouds (white/light gray) with floating animation */}
              <div className="absolute -top-4 left-[8%] opacity-30 animate-float-slow">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <div className="absolute -top-2 right-[25%] opacity-25 animate-float-medium">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <div className="absolute -top-2 right-[10%] opacity-25 animate-float-slow">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>

              {/* Process Flow */}
              <div className="relative flex items-center justify-between flex-wrap gap-4 sm:gap-2 lg:gap-4 py-8 sm:py-12" style={{ minHeight: '200px' }}>
                {/* Start Pin - White */}
                <div className="flex-shrink-0 z-10">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>

                {/* Curved SVG Path Container - Dashed curved line passing through all stages */}
                <div className="hidden sm:block absolute inset-0 w-full pointer-events-none z-0" style={{ top: '50%', transform: 'translateY(-50%)', height: '80px' }}>
                  <svg className="w-full h-full" viewBox="0 0 1000 80" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                    {/* Smooth flowing curved dashed path from start pin through all 4 stages to end pin */}
                    {/* Creates a natural, gentle wave that flows through the center of each stage */}
                    <path
                      d="M 20 40 
                         C 120 35, 220 40, 320 45
                         C 420 40, 520 35, 620 40
                         C 720 45, 820 40, 920 40
                         C 960 40, 980 40, 980 40"
                      fill="none"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      strokeDasharray="8,4"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>

                {/* Process Stages */}
                {[
                  {
                    title: 'Strategy',
                    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop',
                  },
                  {
                    title: 'Planning',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop',
                  },
                  {
                    title: 'Build',
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop',
                  },
                  {
                    title: 'Our Work',
                    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=200&h=200&fit=crop',
                  },
                ].map((item, idx) => (
                  <div key={item.title} className="flex flex-col items-center flex-1 min-w-[100px] sm:min-w-[140px] lg:min-w-[180px] z-10">
                    {/* Circular Image - Black border instead of white */}
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-black shadow-lg mb-3 sm:mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/200/FFFFFF/000000?text=${item.title.charAt(0)}`
                        }}
                      />
                    </div>
                    {/* Orange Handwritten-style Text */}
                    <p className="text-amber-500 font-bold text-base sm:text-lg lg:text-xl" style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive, serif" }}>
                      {item.title}
                    </p>
                  </div>
                ))}

                {/* End Pin - White */}
                <div className="flex-shrink-0 z-10">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Our Clients Section */}
      <div className="relative overflow-hidden w-full bg-black py-5 sm:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4">
              Our Clients
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-amber-200/80 px-2 sm:px-0">
              Trusted by leading businesses worldwide
            </p>
          </div>

          {/* First Row - Scroll Right to Left */}
          <div className="relative overflow-hidden w-full mb-6 sm:mb-8">
            <div className="flex animate-scroll-right-to-left">
              {/* Duplicate items for seamless loop */}
              {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                <div
                  key={`client-row1-${idx}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center bg-white/5 rounded-lg p-4 sm:p-6 hover:bg-white/10 transition-colors"
                  style={{ width: '200px', height: '120px', minWidth: '200px' }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      console.error(`Failed to load logo for ${client.name}:`, client.logo)
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scroll Left to Right */}
          <div className="relative overflow-hidden w-full">
            <div className="flex animate-scroll-left-to-right">
              {/* Duplicate items for seamless loop */}
              {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                <div
                  key={`client-row2-${idx}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center bg-white/5 rounded-lg p-4 sm:p-6 hover:bg-white/10 transition-colors"
                  style={{ width: '200px', height: '120px', minWidth: '200px' }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      console.error(`Failed to load logo for ${client.name}:`, client.logo)
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mb-12 sm:mb-16">
          Why choose Gamotech?
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Safe */}
          <div className="flex items-start gap-6 sm:gap-8">
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-teal-500 flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Safe</h3>
              <p className="text-base sm:text-lg lg:text-xl text-amber-200/80 leading-relaxed">
                The concept of marketing support product range, regardless of the cost market trends.
              </p>
            </div>
          </div>

          {/* Fast */}
          <div className="flex items-start gap-6 sm:gap-8">
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-green-500 flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Fast</h3>
              <p className="text-base sm:text-lg lg:text-xl text-amber-200/80 leading-relaxed">
                Business plan elegantly transforms sublimated pool of loyal editions, optimizing budgets.
              </p>
            </div>
          </div>

          {/* Low fee */}
          <div className="flex items-start gap-6 sm:gap-8">
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-yellow-500 flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Low fee</h3>
              <p className="text-base sm:text-lg lg:text-xl text-amber-200/80 leading-relaxed">
                Sponsorship, summing these examples, it is doable. SWOT-analysis, according to Kotler, competitive.
              </p>
            </div>
          </div>

          {/* Quick Support */}
          <div className="flex items-start gap-6 sm:gap-8">
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-orange-500 flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Quick Support</h3>
              <p className="text-base sm:text-lg lg:text-xl text-amber-200/80 leading-relaxed">
                The fact that the advertising platform changes the method of studying the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
