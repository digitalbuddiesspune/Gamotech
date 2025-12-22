import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, CheckCircle2, Globe, ShoppingCart, Code, Database, Layers, Wrench, Briefcase, Zap, MessageSquare, Shield, Headphones } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-20 md:pt-0">
      {/* Main Content Area */}
      <section className="bg-[#0d0d0d] pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
            
            {/* Left Column - Story Section */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-12">
              {/* OUR STORY Heading */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <h2 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-white">
                  OUR STORY
                </h2>
                <div className="flex-1 h-px bg-white/20"></div>
                <div className="w-2 h-2 bg-amber-500"></div>
              </motion.div>

              {/* Main Text Block with Accent Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
                <div className="pl-6 sm:pl-8 space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    About <span className="text-amber-500">Gamotech</span>
                  </h1>
                  
                  <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed">
                    <p>
                      Gamotech was founded with one clear belief:{' '}
                      <span className="text-amber-500 font-semibold">
                        technology should simplify business — not complicate it.
                      </span>
                    </p>
                    
                    <p>
                      We are a Pune-based IT solutions company working with startups, growing brands, and established businesses across India to design and develop websites, e-commerce platforms, CRM systems, and custom software solutions that solve real business problems.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Three Key Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4 sm:space-y-6"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-500">
                  At Gamotech, we don&apos;t follow templates.
                </h3>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-500">
                  We don&apos;t push unnecessary features.
                </h3>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-500">
                  And we never treat clients like &quot;projects.&quot;
                </h3>
              </motion.div>

              {/* Additional Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed pt-6 border-t border-white/10"
              >
                <p>
                  Every solution we build starts by understanding how your business actually works — where time is being wasted, where processes slow down, and how the right technology can improve speed, clarity, efficiency, and growth.
                </p>
                
                <p>
                  Whether it&apos;s a simple business website or a complex internal system, our focus remains the same: clean execution, scalable architecture, and long-term reliability.
                </p>
              </motion.div>

              {/* Partnership Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border-l-4 border-amber-500 rounded-lg p-6 sm:p-8"
              >
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-amber-100 mb-3">
                  Gamotech is not a one-time vendor.
                </p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-amber-100">
                  We aim to be your long-term technology partner, supporting your growth at every stage.
                </p>
              </motion.div>
            </div>

            {/* Right Column - Image Cards Section */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              {/* First Image Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] bg-neutral-900 border border-white/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/80 text-white text-xs font-medium backdrop-blur-sm">
                    Tech Blog
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/80 text-white text-xs font-medium backdrop-blur-sm flex items-center gap-1">
                    Trends
                  </span>
                </div>
              </motion.div>

              {/* Second Image Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative group overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] bg-neutral-900 border border-white/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Business meeting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/80 text-white text-xs font-medium backdrop-blur-sm">
                    Tech Blog
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/80 text-white text-xs font-medium backdrop-blur-sm flex items-center gap-1">
                    Trends
                  </span>
                </div>
              </motion.div>

              {/* Large Team Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative group overflow-hidden rounded-xl sm:rounded-2xl aspect-[16/9] bg-neutral-900 border border-white/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
                  alt="Gamotech team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="flex items-center gap-3 text-white">
                    <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <p className="text-sm sm:text-base font-medium">
                      Based in Pune | Working with clients across India
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 xl:py-40 px-4 sm:px-6 lg:px-12 xl:px-20 bg-[#0a0a0a] overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12 sm:space-y-16 lg:space-y-20"
          >
            {/* Header */}
            <div className="text-center space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-4 mb-4"
              >
                <div className="h-px w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-transparent to-amber-500"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500/20 blur-xl"></div>
                  <Target className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-amber-500 relative z-10" />
                </div>
                <div className="h-px w-12 sm:w-16 lg:w-20 bg-gradient-to-l from-transparent to-amber-500"></div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent"
              >
                Our Mission
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-neutral-300 leading-relaxed max-w-4xl mx-auto font-light"
              >
                Our mission is to empower businesses through smart, reliable, and purpose-driven technology.
              </motion.p>
            </div>

            {/* Mission Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {[
                'Build solutions that are simple to use and easy to scale',
                'Help businesses save time, reduce manual effort, and improve productivity',
                'Deliver technology that adds real value, not unnecessary complexity',
                'Create long-term partnerships based on trust, transparency, and results'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#0d0d0f] to-[#0a0a0a] border border-white/5 rounded-2xl hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:via-amber-500/5 group-hover:to-amber-500/5 transition-all duration-500"></div>
                  
                  {/* Left Accent Bar */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:scale-110 group-hover:border-amber-500/50 transition-all duration-300">
                        <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" />
                      </div>
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed flex-1 group-hover:text-white transition-colors">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center pt-8 sm:pt-12 border-t border-white/10"
            >
              <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-amber-500/5 via-amber-500/10 to-amber-500/5 rounded-2xl border border-amber-500/20">
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-neutral-300 leading-relaxed italic">
                  We believe that when technology works quietly and efficiently in the background, businesses can focus on what truly matters — <span className="text-amber-400 font-semibold not-italic">growth and innovation</span>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 xl:py-40 px-4 sm:px-6 lg:px-12 xl:px-20 bg-[#0a0a0a] overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16 sm:space-y-20 lg:space-y-24"
          >
            {/* Header */}
            <div className="text-center space-y-6 sm:space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent"
              >
                What We Do
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg sm:text-xl lg:text-2xl text-neutral-300 leading-relaxed max-w-4xl mx-auto font-light"
              >
                At Gamotech, we design and develop technology solutions that solve real business problems. Our services are focused on clarity, performance, and long-term usability.
              </motion.p>
            </div>

            {/* Our Core Services */}
            <div className="space-y-8 sm:space-y-12">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
              >
                Our Core Services
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    icon: Globe,
                    title: 'Website Development',
                    description: 'We build fast, responsive, and modern websites that represent your brand clearly and convert visitors into customers.'
                  },
                  {
                    icon: ShoppingCart,
                    title: 'E-Commerce Solutions',
                    description: 'From product catalogs to secure payments and order management, we create scalable e-commerce platforms that help you sell confidently online.'
                  },
                  {
                    icon: Code,
                    title: 'Custom Software Development',
                    description: 'We develop tailor-made software solutions that streamline operations, automate workflows, and improve efficiency across your business.'
                  },
                  {
                    icon: Database,
                    title: 'CRM & Internal Systems',
                    description: 'We build customized CRM systems and internal tools that help manage customers, data, and operations in one centralized place.'
                  },
                  {
                    icon: Layers,
                    title: 'Web & Application Development',
                    description: 'User-friendly web applications designed for performance, security, and scalability across devices.'
                  },
                  {
                    icon: Wrench,
                    title: 'Maintenance & Ongoing Support',
                    description: 'Technology needs care. We provide updates, improvements, and long-term support to keep your systems running smoothly.'
                  }
                ].map((service, index) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative p-5 sm:p-6 bg-[#0d0d0f] border border-white/5 rounded-lg hover:border-amber-500/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h4 className="text-lg sm:text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="pt-12 sm:pt-16 border-t border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-2xl">
                {/* Left Section - Light Background with Question */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-4 bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-8 sm:p-12 lg:p-16 flex items-center justify-center relative"
                >
                  {/* Bracket Shape */}
                  <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-neutral-400/30"></div>
                  <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-neutral-400/30"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-2 mb-2">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        WHY
                      </h3>
                      <span className="text-amber-500 text-2xl sm:text-3xl lg:text-4xl font-bold mt-1">+</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      CHOOSE
                    </h3>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      US ?
                    </h3>
                  </div>
                </motion.div>

                {/* Right Section - Dark Background with Curved Edge */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-8 bg-[#0d0d0d] p-8 sm:p-12 lg:p-16 relative"
                >
                  {/* Curved Edge Effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#0d0d0d] -translate-x-4">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 32 100" preserveAspectRatio="none">
                      <path d="M0,0 Q16,50 0,100 L32,100 L32,0 Z" fill="#0d0d0d" />
                    </svg>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    {[
                      {
                        icon: Briefcase,
                        title: 'Business-Focused Solutions',
                        description: 'We understand your goals first and build technology that supports real-world business operations.'
                      },
                      {
                        icon: Code,
                        title: '100% Custom Development',
                        description: 'No templates. No shortcuts. Every solution is designed specifically for your requirements.'
                      },
                      {
                        icon: Zap,
                        title: 'Scalable & Future-Ready',
                        description: 'Our systems are built to grow with your business, saving you from costly rebuilds later.'
                      },
                      {
                        icon: MessageSquare,
                        title: 'Clear Communication',
                        description: 'Transparent timelines, regular updates, and honest discussions throughout the project lifecycle.'
                      },
                      {
                        icon: Shield,
                        title: 'Reliable & Secure',
                        description: 'We follow best practices to deliver stable, secure, and performance-optimized solutions.'
                      },
                      {
                        icon: Headphones,
                        title: 'Long-Term Support',
                        description: 'We stay with you after launch, providing continuous improvements and technical support as your business evolves.'
                      }
                    ].map((benefit, index) => {
                      const Icon = benefit.icon
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4 sm:gap-6"
                        >
                          {/* Circular Icon with Layered Effect */}
                          <div className="flex-shrink-0 relative">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-500/20 border-2 border-amber-500/30 flex items-center justify-center">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 space-y-2">
                            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                              {benefit.title}
                            </h4>
                            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
