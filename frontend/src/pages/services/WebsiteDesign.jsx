import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const WebsiteDesign = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Hero Section - Full Width */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766475622/photo-1460925895917-afdab827c52f_llw1uq.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        
        {/* Content */}
        <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Website Design & Development Services
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed max-w-4xl mx-auto">
            Professional Website Development for Growing Businesses
          </p>
        </div>

        {/* White Wavy Shape at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-16 sm:h-20 lg:h-24"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 Q360,20 720,60 T1440,60 L1440,120 L0,120 Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 bg-black pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-amber-200/70">
              <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-amber-400 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">Website Design & Development</span>
            </div>
          </nav>

          {/* Description Section */}
          <div className="mb-20 relative">
            <div className="space-y-4 max-w-4xl">
              <p className="text-lg sm:text-xl text-amber-200/80 leading-relaxed">
                Your website is more than just an online presence — it is the digital foundation of your business. At Gamotech, we design and develop websites that are visually appealing, technically strong, and strategically built to convert visitors into genuine business enquiries.
              </p>
              <p className="text-lg sm:text-xl text-amber-200/80 leading-relaxed">
                We combine modern design, clean development, and business thinking to deliver websites that help you grow, build trust, and stand out in a competitive market.
              </p>
            </div>
          </div>

        {/* Why a High-Quality Website Matters */}
        <div className="mb-20 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 relative">
            <span className="relative z-10">Why a High-Quality Website Matters</span>
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <p className="text-amber-200/95 text-lg font-medium">First impressions are formed in seconds</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <p className="text-amber-200/95 text-lg font-medium">Customers judge credibility based on website quality</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <p className="text-amber-200/95 text-lg font-medium">Speed and mobile experience directly impact conversions</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <p className="text-amber-200/95 text-lg font-medium">SEO-friendly structure improves long-term visibility</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-amber-200/80 leading-relaxed max-w-4xl bg-black/30 border-l-4 border-amber-500 pl-6 py-4 rounded-r-lg">
            We ensure your website not only looks good but performs exceptionally well for your audience, especially optimized for Indian users and networks.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-20 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 relative">
            <span className="relative z-10">What We Offer</span>
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          <div className="space-y-6">
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 sm:p-8 hover:border-amber-500/60 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  🌐
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Business & Corporate Websites</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Professional websites tailored to your brand identity, business goals, and target audience. Perfect for startups, SMEs, and established companies.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 sm:p-8 hover:border-amber-500/60 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  🔄
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Website Redesign & Performance Optimization</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Already have a website? We modernize outdated designs, improve speed, enhance usability, and optimize performance without losing your existing content or SEO value.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 sm:p-8 hover:border-amber-500/60 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  🔍
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">SEO-Friendly Website Structure</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    From clean URLs to proper heading hierarchy and fast-loading pages, we build websites that search engines love — right from day one.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 sm:p-8 hover:border-amber-500/60 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  📱
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Mobile-Responsive UI</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Your website will work seamlessly across mobiles, tablets, and desktops, ensuring a consistent experience on all screen sizes.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 sm:p-8 hover:border-amber-500/60 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  🔐
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Secure & Scalable Development</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    We use best practices for security and scalability, ensuring your website grows smoothly as your business expands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Development Approach */}
        <div className="mb-20 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 relative">
            <span className="relative z-10">Our Development Approach</span>
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">Understanding Your Business</h3>
              <p className="text-amber-200/85">– goals, audience, competitors</p>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">Strategic UI/UX Planning</h3>
              <p className="text-amber-200/85">– clarity, navigation, and conversion flow</p>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">Clean Development</h3>
              <p className="text-amber-200/85">– fast, optimized, maintainable code</p>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">Testing Across Devices</h3>
              <p className="text-amber-200/85">– performance and responsiveness</p>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">Launch & Support</h3>
              <p className="text-amber-200/85">– smooth deployment with ongoing assistance</p>
            </div>
          </div>
        </div>

        {/* Why Choose Gamotech */}
        <div className="mb-20 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 relative">
            <span className="relative z-10">Why Choose Gamotech for Website Development?</span>
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          <div className="bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-8 sm:p-12 shadow-xl shadow-amber-500/10">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Business-focused design approach</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Clean, maintainable, and scalable code</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">SEO-ready structure from the start</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Fast loading optimized for Indian audiences</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Transparent communication & local support</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Long-term partnership mindset</p>
              </div>
            </div>
            <p className="text-xl text-white font-semibold mt-8 text-center">
              We don't just build websites — we build digital assets that support your business goals.
            </p>
          </div>
        </div>

        {/* Who Is This Service For */}
        <div className="mb-20 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 relative">
            <span className="relative z-10">Who Is This Service For?</span>
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 text-center hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <p className="text-amber-200/95 text-lg font-medium">Small & medium businesses</p>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 text-center hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <p className="text-amber-200/95 text-lg font-medium">Startups & entrepreneurs</p>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 text-center hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <p className="text-amber-200/95 text-lg font-medium">Local service providers</p>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 text-center hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <p className="text-amber-200/95 text-lg font-medium">Corporate firms</p>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 text-center md:col-span-2 lg:col-span-1 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <p className="text-amber-200/95 text-lg font-medium">Businesses looking to upgrade or redesign their website</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-r from-amber-500/20 via-amber-600/20 to-amber-500/20 border border-amber-500/40 rounded-2xl p-8 sm:p-12 text-center shadow-2xl shadow-amber-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 relative z-10">
              Let's Build Your Website the Right Way
            </h2>
            <p className="text-lg sm:text-xl text-amber-200/90 mb-2 relative z-10">
              📞 Looking for a reliable website developer in Pune?
            </p>
            <p className="text-lg sm:text-xl text-amber-200/90 mb-8 relative z-10">
              Let's discuss your requirements and create a website that truly represents your business and drives results.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 text-lg shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:scale-105 relative z-10"
            >
              <span>👉 Contact Gamotech today to get started</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default WebsiteDesign

