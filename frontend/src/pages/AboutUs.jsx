import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

const Motion = motion
import {
  ArrowRight,
  Briefcase,
  Code,
  Eye,
  Headphones,
  MapPin,
  MessageSquare,
  Shield,
  ShoppingCart,
  Target,
  Wrench,
  Zap,
} from 'lucide-react'
import webDevIcon from '../assets/WebDevIcon.webp'
import databaseIcon from '../assets/Database.webp'
import mobileAppIcon from '../assets/MobileAppIcon.webp'
import serverInfraIcon from '../assets/ServerInfraIcon (1).webp'
import brainIcon from '../assets/BrainIcon.webp'
import founderImage from '../assets/founder.png'
import coFounderImage from '../assets/cofounder.png'
import directorImage from '../assets/Director.png'

const PRINCIPLES = [
  "At Gamotech Solutions Private Limited, we don't follow templates.",
  "We don't push unnecessary features.",
  'And we never treat clients like "projects."',
]

const LEADERS = [
  {
    name: 'Vinay Mathure',
    role: 'Founder & CEO',
    image: founderImage,
    bio: 'The Founder & CEO of Gamotech Solutions Private Limited and a results-driven digital strategist with extensive expertise in performance marketing, conversion optimization, and data-backed growth strategies. He leads the company\'s vision to deliver technology solutions that simplify business operations and drive measurable results for clients across India.',
  },
  {
    name: 'Shubhangi Pardhi',
    role: 'Co-Founder',
    image: coFounderImage,
    bio: 'The Co-Founder is a dedicated SEO Executive and Digital Marketing specialist with strong expertise in search engine optimization, social media marketing, and performance-driven digital strategies. With a keen understanding of keyword research, content optimization, and audience targeting, she focuses on improving search rankings, increasing online visibility, and building strong brand engagement across digital platforms. Her strategic approach to social media campaigns and data-backed marketing initiatives helps businesses connect with the right audience, strengthen their online presence, and drive consistent growth in an ever-evolving digital landscape.',
  },
  {
    name: 'Nikhil Mathure',
    role: 'Director',
    image: directorImage,
    bio: 'The Director at Gamotech Solutions Private Limited plays a key role in driving strategic execution and operational excellence across projects. With a strong focus on quality delivery, team alignment, and client success, he ensures that every digital solution is built to solve practical business challenges. Through a balanced approach of innovation, process discipline, and performance-focused leadership, he contributes to the company\'s sustained growth and long-term value creation.',
  },
]

const SERVICES = [
  {
    icon: webDevIcon,
    title: 'Website Development',
    description: 'We build fast, responsive, and modern websites that represent your brand clearly and convert visitors into customers.',
    to: '/services/website-design',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'From product catalogs to secure payments and order management, we create scalable e-commerce platforms that help you sell confidently online.',
    to: '/services/ecommerce',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'We develop tailor-made software solutions that streamline operations, automate workflows, and improve efficiency across your business.',
    to: '/services/application-software',
  },
  {
    icon: databaseIcon,
    title: 'CRM & Internal Systems',
    description: 'We build customized CRM systems and internal tools that help manage customers, data, and operations in one centralized place.',
    to: '/services/crm-software',
  },
  {
    icon: mobileAppIcon,
    title: 'Web & Application Development',
    description: 'User-friendly web applications designed for performance, security, and scalability across devices.',
    to: '/services/application-software',
  },
  {
    icon: serverInfraIcon,
    title: 'SaaS Application Development',
    description: 'End-to-end development of scalable, secure, and user-friendly SaaS applications tailored to your business needs.',
    to: '/services/saas-application',
  },
  {
    icon: brainIcon,
    title: 'AI Integrations',
    description:
      'We help businesses integrate AI into their systems to streamline operations, enhance customer experiences, and unlock smarter decision-making. From automation to analytics, our solutions are built to fit your goals.',
    to: '/services/ai-integrations',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Ongoing Support',
    description: 'Technology needs care. We provide updates, improvements, and long-term support to keep your systems running smoothly.',
    to: '/contact-us',
  },
]

const REASONS = [
  {
    icon: Briefcase,
    title: 'Business-Focused Solutions',
    description: 'We understand your goals first and build technology that supports real-world business operations.',
  },
  {
    icon: Code,
    title: '100% Custom Development',
    description: 'No templates. No shortcuts. Every solution is designed specifically for your requirements.',
  },
  {
    icon: Zap,
    title: 'Scalable & Future-Ready',
    description: 'Our systems are built to grow with your business, saving you from costly rebuilds later.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Transparent timelines, regular updates, and honest discussions throughout the project lifecycle.',
  },
  {
    icon: Shield,
    title: 'Reliable & Secure',
    description: 'We follow best practices to deliver stable, secure, and performance-optimized solutions.',
  },
  {
    icon: Headphones,
    title: 'Long-Term Support',
    description: 'We stay with you after launch, providing continuous improvements and technical support as your business evolves.',
  },
]

const MISSION_POINTS = [
  'Build solutions that are simple to use and easy to scale',
  'Help businesses save time, reduce manual effort, and improve productivity',
  'Deliver technology that adds real value, not unnecessary complexity',
  'Create long-term partnerships based on trust, transparency, and results',
]

function SectionLabel({ children, center = false }) {
  return (
    <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <span className="h-px w-10 bg-amber-500" aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">{children}</p>
    </div>
  )
}

const AboutUs = () => {
  const reduceMotion = useReducedMotion()

  const fade = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.4, delay, ease: 'easeOut' },
        }

  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 8%, rgba(245,180,0,0.14), transparent 28%), radial-gradient(circle at 88% 30%, rgba(245,180,0,0.08), transparent 24%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,180,0,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(245,180,0,0.18) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)',
        }}
      />

      <div className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
          <Motion.div {...fade()} className="max-w-3xl">
            <SectionLabel>Our story</SectionLabel>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About <span className="text-amber-400">Gamotech Solutions Private Limited</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-amber-50/80 sm:text-xl">
              Gamotech Solutions Private Limited was founded with one clear belief:{' '}
              <span className="font-medium text-amber-300">technology should simplify business — not complicate it.</span>
            </p>
            <p className="mt-4 text-base leading-relaxed text-amber-50/75 sm:text-lg">
              We are a Pune-based IT solutions company working with startups, growing brands, and established businesses
              across India to design and develop websites, e-commerce platforms, CRM systems, and custom software
              solutions that solve real business problems.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-100">
              <MapPin className="h-4 w-4 text-amber-400" aria-hidden="true" />
              Based in Pune | Working with clients across India
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact-us"
                className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold !text-white transition-colors duration-200 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
              >
                Work with us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/services/website-design"
                className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold !text-white transition-colors duration-200 hover:border-amber-400/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
              >
                Explore services
              </Link>
            </div>
          </Motion.div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <Motion.div {...fade(0.05)} className="space-y-5 text-base leading-relaxed text-amber-50/75 sm:text-lg">
            <p>
              Every solution we build starts by understanding how your business actually works — where time is being
              wasted, where processes slow down, and how the right technology can improve speed, clarity, efficiency,
              and growth.
            </p>
            <p>
              Whether it&apos;s a simple business website or a complex internal system, our focus remains the same: clean
              execution, scalable architecture, and long-term reliability.
            </p>
            <div className="rounded-3xl border border-amber-500/25 bg-amber-500/10 p-6 sm:p-8">
              <p className="text-xl font-semibold text-amber-50 sm:text-2xl">
                Gamotech Solutions Private Limited is not a one-time vendor.
              </p>
              <p className="mt-3 text-lg font-medium text-amber-100/90 sm:text-xl">
                We aim to be your long-term technology partner, supporting your growth at every stage.
              </p>
            </div>
          </Motion.div>

          <div className="space-y-3">
            {PRINCIPLES.map((line, index) => (
              <Motion.p
                key={line}
                {...fade(index * 0.06)}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 text-lg font-medium leading-snug text-white sm:text-xl"
              >
                <span className="mb-2 block text-xs font-semibold tracking-[0.18em] text-amber-400">
                  0{index + 1}
                </span>
                {line}
              </Motion.p>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <Motion.div {...fade()} className="max-w-2xl">
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Meet the <span className="text-amber-400">founders</span>
            </h2>
          </Motion.div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {LEADERS.map((person, index) => (
              <Motion.article
                key={person.name}
                {...fade(index * 0.06)}
                className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <div className="aspect-[4/5] bg-neutral-900">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-semibold text-white">{person.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-amber-400">{person.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-amber-50/75">{person.bio}</p>
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Motion.div {...fade()} className="max-w-2xl">
            <SectionLabel>Direction</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Our mission and vision
            </h2>
            <p className="mt-4 text-base leading-relaxed text-amber-50/75 sm:text-lg">
              This describes the desired future position of the company by defining purpose, goals, expertise, and
              expectations.
            </p>
          </Motion.div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Motion.article {...fade(0.05)} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400">
                <Eye className="h-6 w-6" aria-hidden="true" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-white">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-amber-50/75 sm:text-base">
                Our vision is to become a trusted technology partner for businesses across India by building solutions
                that are simple, scalable, and reliable. We aim to help businesses grow by delivering technology that
                adapts with change, supports long-term goals, and removes operational complexity. At Gamotech Solutions
                Private Limited, we envision a future where businesses use technology confidently — not as a burden, but
                as a powerful enabler of growth, clarity, and efficiency.
              </p>
            </Motion.article>

            <Motion.article {...fade(0.1)} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400">
                <Target className="h-6 w-6" aria-hidden="true" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-white">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-amber-50/75 sm:text-base">
                Our mission is to empower businesses through smart, reliable, and purpose-driven technology.
              </p>
              <ul className="mt-5 space-y-3">
                {MISSION_POINTS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-amber-50/80 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Motion.article>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Motion.div {...fade()} className="max-w-3xl">
            <SectionLabel>What we do</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our core services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-amber-50/75 sm:text-lg">
              At Gamotech Solutions Private Limited, we design and develop technology solutions that solve real business
              problems. Our services are focused on clarity, performance, and long-term usability.
            </p>
          </Motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = service.icon
              return (
                <Motion.div key={service.title} {...fade(index * 0.05)}>
                  <Link
                    to={service.to}
                    className="group flex h-full cursor-pointer flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 hover:border-amber-500/40 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
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
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-amber-50/70">{service.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-400">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </Motion.div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Motion.div {...fade()} className="max-w-2xl">
            <SectionLabel>Why Gamotech</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Why choose us
            </h2>
          </Motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Motion.article
                  key={reason.title}
                  {...fade(index * 0.05)}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400">
                    <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-amber-50/75">{reason.description}</p>
                </Motion.article>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s be your technology partner
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-amber-50/75 sm:text-lg">
              Bring the idea. We&apos;ll stay with you from the first plan through launch and the growth that follows.
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
  )
}

export default AboutUs
