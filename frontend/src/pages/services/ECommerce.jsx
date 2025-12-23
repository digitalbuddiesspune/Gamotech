import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ECommerce = () => {
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
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop"
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
            E-Commerce Website Development in Pune
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed max-w-4xl mx-auto">
            Sell Online with Confidence
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
              <span className="text-white">E-Commerce Website Development</span>
            </div>
          </nav>

          {/* Description Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center md:justify-start order-2 md:order-1">
                <img
                  src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766490360/E-Commerce_img_o84twa.gif"
                  alt="E-Commerce Website Development"
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <p className="text-lg sm:text-xl text-amber-200/75 leading-relaxed">
                  Launching an online store is more than uploading products — it's about creating a smooth, secure, and conversion-focused shopping experience. At Gamotech, we design and develop e-commerce websites that are easy to manage, reliable under traffic, and ready to scale as your business grows.
                </p>
                <p className="text-lg sm:text-xl text-amber-200/75 leading-relaxed">
                  From product discovery to checkout, every element is carefully planned to reduce friction, build trust, and increase sales.
                </p>
              </div>
            </div>
          </div>

        {/* Why Your E-Commerce Website Matters */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 relative">
            <span className="relative z-10">Why Your E-Commerce Website Matters</span>
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <p className="text-amber-200/95 text-lg font-medium">Customers expect fast and simple shopping experiences</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <p className="text-amber-200/95 text-lg font-medium">Poor checkout flow leads to cart abandonment</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <p className="text-amber-200/95 text-lg font-medium">Mobile users make up a large share of online buyers in India</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-black/60 to-black/40 border border-amber-500/40 rounded-xl p-6 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <p className="text-amber-200/95 text-lg font-medium">Security and payment reliability directly impact trust</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-amber-200/75 leading-relaxed mt-6 max-w-4xl">
            We build e-commerce platforms that balance design, performance, and functionality, ensuring your store works smoothly for both customers and admins.
          </p>
        </div>

        {/* Our E-Commerce Solutions Include */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 relative">
            <span className="relative z-10">Our E-Commerce Solutions Include</span>
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          <div className="space-y-6">
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🛒</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Custom E-Commerce Website Development</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Fully customized online stores tailored to your business model, product range, and target audience — not generic templates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">💳</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Payment Gateway Integration (India-Ready)</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Secure integration with trusted Indian payment gateways supporting UPI, cards, net banking, and wallets for hassle-free transactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📦</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Product & Inventory Management</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Easily manage products, categories, pricing, stock levels, and variants through a simple and efficient admin panel.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📊</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Order Tracking & Admin Dashboard</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Track orders, manage customers, view sales data, and control operations from a centralized dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📱</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Mobile-Optimized Shopping Experience</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Your store will be optimized for smartphones and tablets, delivering fast load times and smooth navigation on all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our E-Commerce Development Approach */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 relative">
            <span className="relative z-10">Our E-Commerce Development Approach</span>
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Business Understanding</h3>
              <p className="text-amber-200/85">– products, audience, and growth goals</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">UX Planning</h3>
              <p className="text-amber-200/85">– user-friendly browsing and checkout flow</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Secure Development</h3>
              <p className="text-amber-200/85">– scalable backend and safe transactions</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Performance Optimization</h3>
              <p className="text-amber-200/85">– fast loading even on mobile networks</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Testing & Launch</h3>
              <p className="text-amber-200/85">– real-world testing before going live</p>
            </div>
          </div>
        </div>

        {/* Why Choose Gamotech */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 relative">
            <span className="relative z-10">Why Choose Gamotech for E-Commerce Development?</span>
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Practical and business-driven solutions</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Secure, scalable, and maintainable architecture</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Conversion-focused UI/UX design</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">India-specific payment and performance optimization</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Clear communication and local support</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Suitable for startups, SMEs, and growing brands</p>
              </div>
            </div>
            <p className="text-xl text-white font-semibold mt-8 text-center">
              We work with businesses across Pune and all over India to build e-commerce platforms that are stable, practical, and growth-ready.
            </p>
          </div>
        </div>

        {/* Who Is This Service Ideal For */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 relative">
            <span className="relative z-10">Who Is This Service Ideal For?</span>
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center">
              <p className="text-amber-200/90 text-lg">Retail businesses moving online</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center">
              <p className="text-amber-200/90 text-lg">Startups launching new products</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center">
              <p className="text-amber-200/90 text-lg">Brands expanding digital sales</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center">
              <p className="text-amber-200/90 text-lg">Businesses upgrading outdated e-commerce websites</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center md:col-span-2 lg:col-span-1">
              <p className="text-amber-200/90 text-lg">Local sellers targeting a wider Indian market</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Launch or Upgrade Your Online Store?
          </h2>
          <p className="text-lg sm:text-xl text-amber-200/85 mb-2">
            📩 Planning to launch or upgrade your e-commerce store?
          </p>
          <p className="text-lg sm:text-xl text-amber-200/85 mb-8">
            Let's build an e-commerce website that supports your growth and delivers a seamless shopping experience.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-amber-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors text-lg"
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
  )
}

export default ECommerce

