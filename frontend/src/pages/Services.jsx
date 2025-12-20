import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Globe, ShoppingCart, Database, Code, CheckCircle2, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    subtitle: 'Professional Website Development for Growing Businesses',
    description: 'Your website is often the first interaction people have with your brand. At Gamotech, we build websites that are fast, responsive, and designed to convert visitors into real enquiries. We focus on clarity, performance, and usability — so your website works smoothly across devices and loads quickly for Indian audiences.',
    offers: [
      'Business & corporate websites',
      'Website redesign & performance optimization',
      'SEO-friendly website structure',
      'Mobile-responsive UI',
      'Secure & scalable development'
    ],
    whyChoose: [
      'Business-focused design approach',
      'Clean and maintainable code',
      'SEO-ready structure from day one',
      'Local support and clear communication'
    ],
    cta: "Looking for a reliable website developer in Pune? Let's talk."
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Website Development in Pune',
    subtitle: 'Sell Online with Confidence',
    description: 'We design and develop e-commerce websites that are easy to manage, secure, and built to scale as your business grows. From product listing to checkout flow, every part of the experience is planned to reduce friction and improve conversions.',
    offers: [
      'Custom e-commerce website development',
      'Payment gateway integration (India-ready)',
      'Product & inventory management',
      'Order tracking & admin dashboard',
      'Mobile-optimized shopping experience'
    ],
    whyChoose: null,
    cta: 'Planning to launch or upgrade your e-commerce store?'
  },
  {
    icon: Database,
    title: 'CRM & Custom Software Development in Pune',
    subtitle: 'Software Built Around Your Business Process',
    description: 'Most businesses don\'t need generic software — they need systems built around how they actually work. At Gamotech, we develop custom CRM and internal software solutions that help you manage leads, customers, operations, and data efficiently.',
    offers: [
      'CRM systems',
      'Lead & sales management tools',
      'Admin panels & dashboards',
      'Workflow automation systems',
      'Reporting & analytics tools'
    ],
    whyChoose: [
      'No unnecessary features',
      'Better control over data',
      'Scalable as your team grows',
      'Designed for your exact workflow'
    ],
    cta: 'Custom CRM & software development services in Pune, India.'
  },
  {
    icon: Code,
    title: 'Application Software Development',
    subtitle: 'Reliable Application Development for Businesses',
    description: 'We develop application software focused on performance, security, and scalability. Whether it\'s a web-based application or a backend system supporting your operations, our development process ensures stability and future readiness.',
    offers: [
      'Web application development',
      'Backend systems & APIs',
      'Business automation tools',
      'Secure database architecture',
      'Long-term maintenance & support'
    ],
    whyChoose: null,
    cta: 'We build applications that are easy to manage today and ready for tomorrow.'
  }
]

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-[#0d0d0f] border border-amber-500/30 rounded-xl sm:rounded-2xl shadow-lg shadow-amber-500/10 hover:border-amber-500/50 hover:shadow-amber-500/20 transition-all overflow-hidden"
    >
      <div className="p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 flex-shrink-0">
              <Icon size={24} className="sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                {service.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-amber-400 font-medium">
                {service.subtitle}
        </p>
      </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed">
          {service.description}
        </p>

        {/* What We Offer */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-amber-100">
            {service.title.includes('E-Commerce') ? 'Our E-Commerce Solutions Include:' : 
             service.title.includes('Custom Software') ? 'Custom Software We Build:' :
             service.title.includes('Application') ? 'Our Application Development Services:' :
             'What We Offer:'}
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {service.offers.map((offer, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-300">
                <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" size={20} />
                <span>{offer}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Section */}
        {service.whyChoose && (
          <div className="space-y-3 sm:space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-amber-100">
              Why Choose Gamotech for Website Development?
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {service.whyChoose.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="pt-4 border-t border-white/5">
          <p className="text-sm sm:text-base text-amber-200/80 italic mb-4">
            {service.cta}
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm sm:text-base group transition-colors"
          >
            Get in touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
            </div>
          </div>
    </motion.div>
  )
}

const Services = () => {
  return (
    <div className="bg-black text-white pt-20 md:pt-0">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 sm:space-y-4"
        >
          <p className="text-xs sm:text-sm font-semibold text-amber-400 uppercase tracking-wide">
            Services
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Services
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-2xl mx-auto px-2 sm:px-0">
            Comprehensive IT solutions designed to simplify your business operations and drive growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-8 sm:pt-12 border-t border-white/10"
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 mb-6 sm:mb-8">
            Ready to simplify your technology?
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 sm:gap-3 bg-amber-500 hover:bg-amber-400 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg transition-all hover:scale-105 group shadow-lg shadow-amber-500/25"
          >
            Start a Conversation
            <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
    </section>
    </div>
  )
}

export default Services
