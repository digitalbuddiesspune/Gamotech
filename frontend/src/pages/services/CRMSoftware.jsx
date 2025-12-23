import React from 'react'
import { Link } from 'react-router-dom'

const CRMSoftware = () => {
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
            <span className="text-white">CRM & Custom Software Development</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-16 bg-amber-500"></div>
            <p className="text-sm uppercase tracking-wider text-amber-400 font-semibold">OUR SERVICE</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            CRM & Custom Software Development in Pune
          </h1>
          <p className="text-xl sm:text-2xl text-amber-200/85 leading-relaxed max-w-3xl mb-4">
            Software Built Around Your Business Process
          </p>
          <p className="text-lg sm:text-xl text-amber-200/75 leading-relaxed max-w-4xl">
            Most businesses don't need off-the-shelf software packed with features they'll never use. They need systems designed around how they actually work.
          </p>
          <p className="text-lg sm:text-xl text-amber-200/75 leading-relaxed max-w-4xl mt-4">
            At Gamotech, we design and develop custom CRM and internal software solutions that streamline operations, improve visibility, and help teams work more efficiently. Every solution is tailored to your workflow, team structure, and business goals.
          </p>
        </div>

        {/* Why Custom Software Makes a Difference */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Why Custom Software Makes a Difference</h2>
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8 mb-6">
            <p className="text-lg sm:text-xl text-amber-200/85 leading-relaxed mb-4">
              Generic software often forces businesses to change their processes.
            </p>
            <p className="text-lg sm:text-xl text-white font-semibold leading-relaxed">
              Custom software does the opposite — it fits your process perfectly.
            </p>
          </div>
          <p className="text-lg sm:text-xl text-amber-200/85 mb-6">With custom-built systems, you get:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <p className="text-amber-200/90 text-lg mb-2">Faster adoption by your team</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <p className="text-amber-200/90 text-lg mb-2">Higher productivity and fewer errors</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <p className="text-amber-200/90 text-lg mb-2">Better long-term scalability</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <p className="text-amber-200/90 text-lg mb-2">Complete ownership and control</p>
            </div>
          </div>
          <p className="text-lg text-amber-200/75 leading-relaxed mt-6 max-w-4xl">
            We build software that grows with your business, not against it.
          </p>
        </div>

        {/* Custom Software Solutions We Build */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Custom Software Solutions We Build</h2>
          <div className="space-y-6">
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🧩</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">CRM Systems</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Custom CRM platforms to manage leads, customers, follow-ups, pipelines, and communication — built exactly for how your sales and support teams operate.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📈</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Lead & Sales Management Tools</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Track leads from first contact to conversion with clear stages, automation, and performance insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🖥️</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Admin Panels & Dashboards</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Centralized dashboards that give you real-time control over users, data, operations, and performance metrics.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔄</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Workflow Automation Systems</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Automate repetitive tasks, approvals, notifications, and internal processes to save time and reduce manual effort.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📊</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Reporting & Analytics Tools</h3>
                  <p className="text-amber-200/85 leading-relaxed">
                    Custom reports and analytics dashboards that show the data you actually need, not generic charts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Custom Software Development Approach */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Our Custom Software Development Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Process Understanding</h3>
              <p className="text-amber-200/85">– deep dive into your workflow and pain points</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Solution Planning</h3>
              <p className="text-amber-200/85">– feature mapping based on real business needs</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">UI/UX Design</h3>
              <p className="text-amber-200/85">– simple, role-based interfaces</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Scalable Development</h3>
              <p className="text-amber-200/85">– secure, maintainable, and future-ready</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Testing & Deployment</h3>
              <p className="text-amber-200/85">– stable rollout with minimal disruption</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Ongoing Support</h3>
              <p className="text-amber-200/85">– updates, enhancements, and scaling</p>
            </div>
          </div>
        </div>

        {/* Why Choose Custom Software */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Why Choose Custom Software?</h2>
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">No unnecessary features or complexity</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Full control over your data and systems</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Designed specifically for your workflow</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Scales easily as your team and operations grow</p>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Integrates with existing tools and platforms</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Gamotech */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Why Choose Gamotech for Custom Software Development?</h2>
          <div className="bg-black/50 border border-amber-500/30 rounded-xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Business-first development mindset</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Clean, scalable, and secure architecture</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Transparent communication throughout the project</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Experience with startups and growing businesses</p>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <span className="text-amber-500 text-xl">✔</span>
                <p className="text-amber-200/90 text-lg">Reliable local support in Pune</p>
              </div>
            </div>
            <p className="text-xl text-white font-semibold mt-8 text-center">
              We don't just build software — we solve operational problems with technology.
            </p>
          </div>
        </div>

        {/* Who Is This Service Ideal For */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Who Is This Service Ideal For?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center">
              <p className="text-amber-200/90 text-lg">Growing businesses with unique workflows</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center">
              <p className="text-amber-200/90 text-lg">Sales-driven organizations</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center">
              <p className="text-amber-200/90 text-lg">Service-based companies</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center">
              <p className="text-amber-200/90 text-lg">Startups building internal tools</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6 text-center md:col-span-2 lg:col-span-1">
              <p className="text-amber-200/90 text-lg">Businesses replacing inefficient manual processes</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Let's Build Software That Works the Way You Do
          </h2>
          <p className="text-lg sm:text-xl text-amber-200/85 mb-2">
            📍 Custom CRM & software development services in Pune, India
          </p>
          <p className="text-lg sm:text-xl text-amber-200/85 mb-8">
            📩 Planning a custom CRM or internal software solution?
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-amber-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors text-lg"
          >
            <span>👉 Contact Gamotech today to discuss your requirements and get started</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CRMSoftware

