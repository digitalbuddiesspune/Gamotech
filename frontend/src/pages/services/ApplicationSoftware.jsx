import React from 'react'
import { Link } from 'react-router-dom'

const ApplicationSoftware = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(245, 180, 0, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(245, 180, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(245, 180, 0, 0.08) 0%, transparent 60%)
          `,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-amber-200/70">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-amber-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Application Software Development</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-16 bg-amber-500"></div>
            <p className="text-sm uppercase tracking-wider text-amber-400 font-semibold">OUR SERVICE</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Application Software Development
          </h1>
          <p className="text-xl sm:text-2xl text-amber-200/85 leading-relaxed max-w-3xl mb-4">
            Reliable Application Development for Businesses
          </p>
          <p className="text-lg sm:text-xl text-amber-200/75 leading-relaxed max-w-4xl">
            Modern businesses rely on applications that are stable, secure, and built to scale. At Gamotech, we develop application software with a strong focus on performance, security, and long-term reliability.
          </p>
          <p className="text-lg sm:text-xl text-amber-200/75 leading-relaxed max-w-4xl mt-4">
            Whether you need a web-based application, a backend system, or a custom internal tool supporting daily operations, our structured development process ensures your application is future-ready and easy to manage.
          </p>
        </div>

        {/* Why Application Software Matters */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Why Application Software Matters</h2>
          <p className="text-lg sm:text-xl text-amber-200/85 mb-6">Well-built application software helps businesses:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <p className="text-amber-200/90 text-lg mb-2">Automate operations and reduce manual work</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <p className="text-amber-200/90 text-lg mb-2">Improve data accuracy and security</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <p className="text-amber-200/90 text-lg mb-2">Support growing users and workloads</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <p className="text-amber-200/90 text-lg mb-2">Integrate smoothly with existing systems</p>
            </div>
          </div>
          <p className="text-lg text-amber-200/75 leading-relaxed mt-6 max-w-4xl">
            We design applications that work efficiently today and continue to perform as your business evolves.
          </p>
        </div>

        {/* Our Application Development Services */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Our Application Development Services</h2>
          <div className="space-y-6">
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🌐</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Web Application Development</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Custom web applications built for speed, usability, and scalability — tailored to your business requirements and user roles.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⚙️</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Backend Systems & APIs</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Robust backend architectures and secure APIs that power applications, integrations, and third-party services.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔄</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Business Automation Tools</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Applications that automate repetitive processes, approvals, and workflows to increase efficiency and consistency.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🗄️</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Secure Database Architecture</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Well-structured and secure database designs that ensure data integrity, performance, and easy scalability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🛠️</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Long-Term Maintenance & Support</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Ongoing support, updates, performance tuning, and security enhancements to keep your application running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Application Development Process */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Our Application Development Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Requirement Analysis</h3>
              <p className="text-amber-200/85">– understanding business goals and technical needs</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">System Architecture</h3>
              <p className="text-amber-200/85">– planning scalable and secure foundations</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Development & Integration</h3>
              <p className="text-amber-200/85">– clean, maintainable, and tested code</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Quality Assurance</h3>
              <p className="text-amber-200/85">– performance, security, and usability testing</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Deployment</h3>
              <p className="text-amber-200/85">– stable and smooth production rollout</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Maintenance & Scaling</h3>
              <p className="text-amber-200/85">– continuous improvement and support</p>
            </div>
          </div>
        </div>

        {/* Why Choose Gamotech */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Why Choose Gamotech for Application Development?</h2>
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Performance-focused development</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Secure and scalable architecture</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Clean, maintainable codebase</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Business-driven feature planning</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Transparent communication and local support</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Suitable for startups and growing businesses</p>
              </div>
            </div>
            <p className="text-xl text-white font-semibold mt-8 text-center">
              We don't just build applications — we build reliable systems that support your business growth.
            </p>
          </div>
        </div>

        {/* Who Is This Service Ideal For */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Who Is This Service Ideal For?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center">
              <p className="text-amber-200/90 text-lg">Businesses needing custom web applications</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center">
              <p className="text-amber-200/90 text-lg">Companies modernizing legacy systems</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center">
              <p className="text-amber-200/90 text-lg">Teams requiring internal tools and dashboards</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center">
              <p className="text-amber-200/90 text-lg">Startups building scalable platforms</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center md:col-span-2 lg:col-span-1">
              <p className="text-amber-200/90 text-lg">Organizations focused on long-term stability</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Build Applications That Last
          </h2>
          <p className="text-lg sm:text-xl text-amber-200/85 mb-8">
            We build applications that are easy to manage today and ready for tomorrow.
          </p>
          <p className="text-lg sm:text-xl text-amber-200/85 mb-8">
            📩 Planning an application software project?
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-amber-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors text-lg"
          >
            <span>👉 Contact Gamotech to discuss your requirements and get started</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ApplicationSoftware

