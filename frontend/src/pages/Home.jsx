import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, ShoppingBag } from 'lucide-react'
import webDevIcon from '../assets/WebDevIcon.webp'
import databaseIcon from '../assets/Database.webp'
import mobileAppIcon from '../assets/MobileAppIcon.webp'
import serverInfraIcon from '../assets/ServerInfraIcon (1).webp'
import brainIcon from '../assets/BrainIcon.webp'

const HERO_LINE = "We'll Bring the Execution."

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const COUNTERS = [
  { label: 'Projects Delivered', target: 100 },
  { label: 'Certified Developers', target: 50 },
  { label: 'Happy Customers', target: 80 },
]

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

const SERVICES = [
  {
    title: 'Website Design & Development',
    description: 'We design modern, responsive websites that load fast, look premium, and convert visitors into customers.',
    features: [
      'Business websites',
      'Corporate & portfolio websites',
      'Landing pages',
      'Website redesign & performance optimization',
    ],
    to: '/services/website-design',
    icon: webDevIcon,
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
    to: '/services/ecommerce',
    icon: ShoppingBag,
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
    to: '/services/crm-software',
    icon: databaseIcon,
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
    to: '/services/application-software',
    icon: mobileAppIcon,
  },
  {
    title: 'SaaS Application Development',
    description: 'End-to-end development of scalable, secure, and user-friendly SaaS applications tailored to your business needs.',
    features: [
      'End-to-end product development',
      'Scalable architecture',
      'Secure application design',
      'User-friendly experience',
    ],
    to: '/services/saas-application',
    icon: serverInfraIcon,
  },
  {
    title: 'AI Integrations',
    description:
      'We help businesses integrate AI into their systems to streamline operations, enhance customer experiences, and unlock smarter decision-making. From automation to analytics, our solutions are built to fit your goals.',
    features: [
      'Streamline operations',
      'Enhance customer experiences',
      'Smarter decision-making',
      'Automation and analytics',
    ],
    to: '/services/ai-integrations',
    icon: brainIcon,
  },
]

const PROCESS = [
  {
    title: 'Strategy',
    description:
      'We begin by understanding your business goals, target audience, and market positioning. Our team conducts thorough research and analysis to develop a comprehensive strategy that aligns with your vision and drives measurable results.',
  },
  {
    title: 'Planning',
    description:
      'With a clear strategy in place, we create detailed project plans, wireframes, and technical specifications. Our planning phase ensures every aspect of your project is carefully mapped out before development begins.',
  },
  {
    title: 'Build',
    description:
      'Our expert developers bring your vision to life using cutting-edge technologies and best practices. We build scalable, secure, and high-performance solutions that exceed industry standards.',
  },
  {
    title: 'Our Work',
    description:
      'We deliver fully functional, tested, and optimized solutions ready for deployment. Our work includes responsive designs, cross-platform compatibility, and ongoing support to ensure your success.',
  },
]

const HIGHLIGHTS = ['IT services', 'Web design', 'Digital strategy']

function SectionLabel({ children, center = false }) {
  return (
    <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <span className="h-px w-10 bg-amber-500" aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">{children}</p>
    </div>
  )
}

function ClientMark({ client }) {
  const isPlaceholder = client.logo.includes('placeholder.com')

  return (
    <div className="flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 transition-colors duration-200 hover:border-amber-500/40 hover:bg-white/[0.07]">
      {isPlaceholder ? (
        <span className="text-base font-semibold tracking-wide text-amber-50/80">{client.name}</span>
      ) : (
        <img
          src={client.logo}
          alt={client.name}
          className="h-full w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
          loading="lazy"
        />
      )}
    </div>
  )
}

const Home = () => {
  const reducedMotion = prefersReducedMotion()
  const [counts, setCounts] = useState(COUNTERS.map((item) => (reducedMotion ? item.target : 0)))
  const countersRef = useRef(null)
  const hasAnimated = useRef(reducedMotion)
  const welcomeRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const technologiesRef = useRef(null)
  const clientsRef = useRef(null)
  const [visibleSections, setVisibleSections] = useState({
    welcome: reducedMotion,
    services: reducedMotion,
    process: reducedMotion,
    technologies: reducedMotion,
    clients: reducedMotion,
  })
  const [visibleProcessSteps, setVisibleProcessSteps] = useState(
    reducedMotion ? [true, true, true, true] : [false, false, false, false]
  )
  const hasAnimatedProcessSteps = useRef(reducedMotion)
  const heroRef = useRef(null)
  const [typewriterText, setTypewriterText] = useState(reducedMotion ? HERO_LINE : '')
  const [typingDone, setTypingDone] = useState(reducedMotion)
  const hasStartedTyping = useRef(reducedMotion)

  useEffect(() => {
    const node = countersRef.current
    if (!node || hasAnimated.current) return

    const duration = 1800
    const rafIds = []

    const animateIndex = (index, target) => {
      const start = performance.now()
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCounts((prev) => {
          const next = [...prev]
          next[index] = target * eased
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

  useEffect(() => {
    const sections = [
      { ref: welcomeRef, key: 'welcome' },
      { ref: servicesRef, key: 'services' },
      { ref: processRef, key: 'process' },
      { ref: technologiesRef, key: 'technologies' },
      { ref: clientsRef, key: 'clients' },
    ]

    const observers = sections.map(({ ref, key }) => {
      if (!ref.current) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => ({ ...prev, [key]: true }))
            }
          })
        },
        { threshold: 0.12 }
      )

      observer.observe(ref.current)
      return observer
    })

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect()
      })
    }
  }, [])

  useEffect(() => {
    if (visibleSections.process && !hasAnimatedProcessSteps.current) {
      hasAnimatedProcessSteps.current = true
      const timers = [0, 140, 280, 420].map((delay, idx) =>
        setTimeout(() => {
          setVisibleProcessSteps((prev) => {
            const next = [...prev]
            next[idx] = true
            return next
          })
        }, delay)
      )
      return () => timers.forEach(clearTimeout)
    }
  }, [visibleSections.process])

  useEffect(() => {
    if (!heroRef.current || hasStartedTyping.current) return

    let intervalId
    let startId

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedTyping.current) {
            hasStartedTyping.current = true
            startId = setTimeout(() => {
              let currentIndex = 0
              intervalId = setInterval(() => {
                currentIndex += 1
                setTypewriterText(HERO_LINE.slice(0, currentIndex))
                if (currentIndex >= HERO_LINE.length) {
                  clearInterval(intervalId)
                  setTypingDone(true)
                }
              }, 42)
            }, 420)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(heroRef.current)

    return () => {
      observer.disconnect()
      clearTimeout(startId)
      clearInterval(intervalId)
    }
  }, [])

  const reveal = (key) =>
    `transition-all duration-700 ease-out ${
      visibleSections[key] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`

  return (
    <div className="bg-black text-white">
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <video
          src="https://cdn.dmcrms.in/gamotechSolution/photos/1790316910180-gamotech_mw8qre.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(245,180,0,0.16), transparent 55%)',
          }}
        />

        <div ref={heroRef} className="relative z-10 mx-auto max-w-5xl px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300 backdrop-blur-sm sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
            We provide innovative solutions
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-amber-50 sm:text-5xl lg:text-6xl xl:text-7xl">
            Bring Your Ideas.
            <span className="mt-2 block min-h-[1.15em] text-amber-400">
              {typewriterText}
              {!typingDone && (
                <span className="hero-caret ml-0.5 inline-block h-[0.85em] w-[2px] translate-y-[0.08em] bg-amber-400 align-middle" aria-hidden="true" />
              )}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-amber-100/85 sm:text-lg lg:text-xl">
            Whether it&apos;s building platforms, automating workflows, or scaling teams, we make execution feel
            simple, smart, and fast.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact-us"
              className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold !text-white shadow-lg shadow-amber-500/25 transition-colors duration-200 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 sm:text-base"
            >
              Let&apos;s grow together
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/services/website-design"
              className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold !text-white backdrop-blur-sm transition-colors duration-200 hover:border-amber-400/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 sm:text-base"
            >
              Explore services
            </Link>
          </div>
        </div>

        <a
          href="#welcome"
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-100/70 transition-colors hover:text-amber-300"
        >
          Scroll
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-amber-200/40 p-1" aria-hidden="true">
            <span className="h-1.5 w-1 rounded-full bg-amber-400" />
          </span>
        </a>
      </section>

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'radial-gradient(circle at 12% 8%, rgba(245,180,0,0.12), transparent 28%), radial-gradient(circle at 88% 42%, rgba(245,180,0,0.08), transparent 26%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,180,0,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(245,180,0,0.18) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)',
          }}
        />

        <div className="relative z-10">
          <section id="welcome" ref={welcomeRef} className={`mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 ${reveal('welcome')}`}>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionLabel>Welcome</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Welcome to Gamotech IT &amp; Web Solutions
                </h2>
                <p className="mt-5 text-base leading-relaxed text-amber-50/80 sm:text-lg">
                  We&apos;re your one-stop destination for comprehensive digital solutions, offering innovative IT services,
                  captivating web design, and strategic digital marketing expertise. Our mission is to empower businesses with
                  transformative technology and drive growth through targeted digital strategies.
                </p>
                <p className="mt-4 text-base leading-relaxed text-amber-50/70 sm:text-lg">
                  Follow us on LinkedIn to stay updated on the latest industry trends, insightful articles, and expert tips.
                  Let&apos;s collaborate and unlock your full potential in the digital world.
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {HIGHLIGHTS.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1.5 text-sm text-amber-100"
                    >
                      <Check className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-amber-500/10 blur-2xl" aria-hidden="true" />
                <img
                  src="https://cdn.dmcrms.in/gamotechSolution/documents/1790317069681-Deuglo-UI-UX-Design-FAQS_njvkrq.png"
                  alt="Gamotech IT & Web Solutions"
                  className="relative w-full rounded-[1.6rem] border border-white/10 object-cover shadow-2xl shadow-black/40"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <section id="services" ref={servicesRef} className={`mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 ${reveal('services')}`}>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <SectionLabel>Our services</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  We will provide you the best service
                </h2>
              </div>
              <Link
                to="/services/website-design"
                className="inline-flex min-h-12 w-fit cursor-pointer items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold !text-white transition-colors duration-200 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
              >
                Our services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {SERVICES.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.title}
                    to={service.to}
                    className="group flex cursor-pointer flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 hover:border-amber-500/40 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 sm:p-8"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-amber-400">
                        {typeof Icon === 'string' ? (
                          <img src={Icon} alt="" className="h-7 w-7 object-contain" />
                        ) : (
                          <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.75} />
                        )}
                      </span>
                      <h3 className="min-w-0 flex-1 text-xl font-semibold text-white">{service.title}</h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-colors duration-200 group-hover:text-amber-400" aria-hidden="true" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-amber-50/70 sm:text-base">{service.description}</p>
                    <ul className="mt-5 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-amber-50/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                )
              })}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div
              ref={countersRef}
              className="grid overflow-hidden rounded-3xl border border-amber-500/25 bg-gradient-to-br from-amber-500/10 via-white/[0.03] to-transparent sm:grid-cols-3"
            >
              {COUNTERS.map((item, idx) => {
                const current = Math.min(item.target, Math.floor(counts[idx] ?? 0))
                return (
                  <div
                    key={item.label}
                    className="border-b border-white/10 px-6 py-10 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  >
                    <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{current}+</p>
                    <p className="mt-2 text-sm text-amber-100/75 sm:text-base">{item.label}</p>
                  </div>
                )
              })}
            </div>
          </section>

          <section id="technologies" ref={technologiesRef} className={`py-16 sm:py-20 ${reveal('technologies')}`}>
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
              <SectionLabel center>Stack</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Technologies we use
              </h2>
              <p className="mt-4 text-base text-amber-100/75 sm:text-lg">
                Cutting-edge tools and frameworks powering our solutions
              </p>
            </div>

            <div className="marquee-fade relative mt-10 overflow-hidden py-2">
              <div className="flex animate-scroll-left">
                {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, idx) => (
                  <div
                    key={`logo-${tech.name}-${idx}`}
                    className="mx-3 flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:h-28 sm:w-28"
                  >
                    <img src={tech.logo} alt={tech.name} className="h-full w-full object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            <div className="marquee-fade relative mt-6 overflow-hidden py-2">
              <div className="flex animate-scroll-left-slow">
                {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, idx) => (
                  <article
                    key={`card-${tech.name}-${idx}`}
                    className="mx-3 w-[78vw] shrink-0 rounded-3xl border border-white/10 bg-[#0d0d0f] p-6 sm:w-80"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400">{tech.category}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{tech.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-amber-50/70">{tech.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="process" ref={processRef} className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${reveal('process')}`}>
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <SectionLabel>How we work</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Unique. Strategic. Timeless.
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-amber-50/75 sm:text-lg">
                  Explore our comprehensive service offerings, from the first conversation through a product that is ready to ship.
                </p>
                <img
                  src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766647291/68d1b4b9fefaa925ef4ded92_ebvyum.png"
                  alt="How we work"
                  className="mt-8 hidden w-full rounded-3xl border border-white/10 object-cover lg:block"
                  loading="lazy"
                />
              </div>

              <ol className="relative space-y-0 border-l border-amber-500/30 pl-8">
                {PROCESS.map((item, idx) => (
                  <li
                    key={item.title}
                    className={`relative pb-10 last:pb-0 transition-all duration-700 ${
                      visibleProcessSteps[idx] ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <span className="absolute -left-[42px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-amber-500/50 bg-black text-xs font-semibold text-amber-300">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-amber-50/70 sm:text-base">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section id="clients" ref={clientsRef} className={`py-16 sm:py-20 ${reveal('clients')}`}>
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
              <SectionLabel center>Partners</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Our clients</h2>
              <p className="mt-4 text-base text-amber-100/75 sm:text-lg">Trusted by leading businesses worldwide</p>
            </div>

            <div className="marquee-fade relative mt-10 overflow-hidden">
              <div className="flex animate-scroll-right-to-left py-2">
                {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                  <div key={`client-a-${client.name}-${idx}`} className="mx-3">
                    <ClientMark client={client} />
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee-fade relative mt-4 overflow-hidden">
              <div className="flex animate-scroll-left-to-right py-2">
                {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                  <div key={`client-b-${client.name}-${idx}`} className="mx-3">
                    <ClientMark client={client} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="marketing" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-black to-black">
              <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:p-14">
                <div className="text-center lg:text-left">
                  <img
                    src="https://cdn.dmcrms.in/gamotechSolution/documents/1790317220161-digital_buddiess_logo2_ns62aj.png"
                    alt="Digital Buddies Logo"
                    className="mx-auto h-28 w-28 object-contain sm:h-36 sm:w-36 lg:mx-0"
                    loading="lazy"
                  />
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    <span className="text-amber-400">Digital</span> marketing agency
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-amber-50/75 sm:text-lg lg:mx-0">
                    Scale your business with smart digital marketing solutions. We create targeted campaigns that boost
                    visibility, engagement, and conversions.
                  </p>
                  <a
                    href="https://www.digitalbuddiess.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold !text-white shadow-lg shadow-amber-500/20 transition-colors duration-200 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
                  >
                    Get started
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
                <img
                  src="https://cdn.dmcrms.in/gamotechSolution/documents/1790317290462-social-media_lrnv6c.svg"
                  alt="Social media marketing"
                  className="mx-auto w-full max-w-md object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-14 text-center sm:px-12">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to build what&apos;s next?</h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-amber-50/75 sm:text-lg">
                Bring the idea. We&apos;ll bring the execution, from the first plan to a product your customers can use.
              </p>
              <Link
                to="/contact-us"
                className="mt-8 inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold !text-white transition-colors duration-200 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
              >
                Talk to Gamotech
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
