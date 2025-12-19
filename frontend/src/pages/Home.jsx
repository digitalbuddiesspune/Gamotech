import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const COUNTERS = [
  { label: 'Projects Delivered', target: 100 },
  { label: 'Certified Developers', target: 50 },
  { label: 'Happy Customers', target: 80 },
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
    <section className="space-y-16 sm:space-y-20 pt-20 md:pt-0">
      <div className="relative overflow-hidden w-full h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766038533/original-ac3fe9a266eaf9054cfc02e52d1ee3d3_rijhur.gif"
            alt=""
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0d0d0f] rounded-xl">
          <div className="px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-4 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Our Services</h2>
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
                className="w-full text-left px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 flex items-center gap-3 sm:gap-4"
                onClick={() => setOpenService(isOpen ? null : idx)}
              >
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-amber-50">{service.title}</h3>
                  {isOpen && (
                    <p className="mt-2 sm:mt-3 text-amber-200/80 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">{service.description}</p>
                  )}
                </div>
                <div
                  className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-amber-200 transition-transform duration-200 flex-shrink-0 ${
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
                <p className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-none">
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
          <div className="flex animate-scroll-left">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-amber-400">Demo launchpad</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight text-amber-100">
            Build, test, and ship memorable gaming experiences with Gamotech.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-amber-200/80">
            This is placeholder content to showcase layout and copy. Swap it with your own story when you are ready to go live.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <Link
              to="/services"
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-md bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/25"
            >
              View services
            </Link>
            <Link
              to="/contact-us"
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-md border border-amber-500/60 text-amber-100 font-semibold hover:border-amber-400 hover:text-amber-300 transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
        <div className="bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-amber-200">Latest prototype snapshot</h3>
          <ul className="space-y-3 sm:space-y-4 text-amber-100/90">
            <li className="flex items-start gap-3 sm:gap-4">
              <span className="mt-2 h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-emerald-500 flex-shrink-0" />
              <div>
                <p className="text-base sm:text-lg lg:text-xl font-medium text-amber-50">Stable 60fps build</p>
                <p className="text-sm sm:text-base lg:text-lg text-amber-200/70">Optimized assets running across desktop and mobile.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <span className="mt-2 h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-amber-400 flex-shrink-0" />
              <div>
                <p className="text-base sm:text-lg lg:text-xl font-medium text-amber-50">Multiplayer lobby</p>
                <p className="text-sm sm:text-base lg:text-lg text-amber-200/70">Matchmaking, chat, and party invites wired for demos.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <span className="mt-2 h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-amber-600 flex-shrink-0" />
              <div>
                <p className="text-base sm:text-lg lg:text-xl font-medium text-amber-50">Live operations ready</p>
                <p className="text-sm sm:text-base lg:text-lg text-amber-200/70">Analytics, A/B toggles, and remote configs connected.</p>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 sm:p-8 lg:p-10 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10">
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-amber-400">Engines</p>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-2 text-amber-50">Unity & Unreal friendly</h3>
          <p className="text-base sm:text-lg lg:text-xl text-amber-200/70 mt-3">We plug into your stack to prototype mechanics rapidly.</p>
        </div>
        <div className="p-6 sm:p-8 lg:p-10 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10">
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-amber-400">Platforms</p>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-2 text-amber-50">Cross-platform ready</h3>
          <p className="text-base sm:text-lg lg:text-xl text-amber-200/70 mt-3">Ship to PC, console, and mobile with unified workflows.</p>
        </div>
        <div className="p-6 sm:p-8 lg:p-10 bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10">
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-amber-400">Support</p>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-2 text-amber-50">Live service playbook</h3>
          <p className="text-base sm:text-lg lg:text-xl text-amber-200/70 mt-3">Content drops, event cadences, and monetization experiments.</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Home
