import React from 'react'
import { Link } from 'react-router-dom'

const CRMSoftware = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-black pb-16 pt-28 sm:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8" aria-label="Breadcrumb">
            <div className="flex items-center space-x-2 text-sm text-amber-200/70">
              <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services/website-design" className="hover:text-amber-400 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">CRM & Custom Software Development</span>
            </div>
          </nav>

          <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            CRM & Custom Software Development in Pune
          </h1>
          <p className="mt-4 text-lg text-amber-200/80 sm:text-xl">
            Software Built Around Your Business Process
          </p>

          <div className="mb-16 mt-10 max-w-3xl space-y-4">
            <p className="text-lg leading-relaxed text-amber-200/75 sm:text-xl">
              Most businesses don&apos;t need off-the-shelf software packed with features they&apos;ll never use. They need systems designed around how they actually work.
            </p>
            <p className="text-lg leading-relaxed text-amber-200/75 sm:text-xl">
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
              <p className="text-white text-lg mb-2">Faster adoption by your team</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <p className="text-white text-lg mb-2">Higher productivity and fewer errors</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <p className="text-white text-lg mb-2">Better long-term scalability</p>
            </div>
            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
              <p className="text-white text-lg mb-2">Complete ownership and control</p>
            </div>
          </div>
          <p className="text-lg text-amber-200/75 leading-relaxed mt-6 max-w-4xl">
            We build software that grows with your business, not against it.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 relative">
            <span className="relative z-10">What We Offer</span>
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </h2>
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8">
              Explore our comprehensive service offerings
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'CRM Systems',
                  description: 'Custom CRM platforms to manage leads, customers, follow-ups, pipelines, and communication — built exactly for how your sales and support teams operate.',
                  icon: '🧩',
                },
                {
                  title: 'Lead & Sales Management Tools',
                  description: 'Track leads from first contact to conversion with clear stages, automation, and performance insights.',
                  icon: '📈',
                },
                {
                  title: 'Admin Panels & Dashboards',
                  description: 'Centralized dashboards that give you real-time control over users, data, operations, and performance metrics.',
                  icon: '🖥️',
                },
                {
                  title: 'Workflow Automation Systems',
                  description: 'Automate repetitive tasks, approvals, notifications, and internal processes to save time and reduce manual effort.',
                  icon: '🔄',
                },
                {
                  title: 'Reporting & Analytics Tools',
                  description: 'Custom reports and analytics dashboards that show the data you actually need, not generic charts.',
                  icon: '📊',
                },
              ].map((item, idx) => (
                <div 
                  key={item.title}
                  className="transition-all duration-1000 opacity-100 translate-y-0"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    {/* Amber/Yellow Circular Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Custom Software Development Approach */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 text-center">
            Our Custom Software Development Approach
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-amber-500 text-2xl sm:text-3xl font-bold mb-3">
                01
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                Process Understanding
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Deep dive into your workflow and pain points
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-amber-500 text-2xl sm:text-3xl font-bold mb-3">
                02
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                Solution Planning
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Feature mapping based on real business needs
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-amber-500 text-2xl sm:text-3xl font-bold mb-3">
                03
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                UI/UX Design
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Simple, role-based interfaces
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-amber-500 text-2xl sm:text-3xl font-bold mb-3">
                04
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                Scalable Development
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Secure, maintainable, and future-ready
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-amber-500 text-2xl sm:text-3xl font-bold mb-3">
                05
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                Testing & Deployment
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Stable rollout with minimal disruption
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-amber-500 text-2xl sm:text-3xl font-bold mb-3">
                06
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                Ongoing Support
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Updates, enhancements, and scaling
              </p>
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
            className="inline-flex items-center gap-2 bg-amber-500 !text-white font-semibold px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors text-lg"
          >
            <span>👉 Get started</span>
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

export default CRMSoftware

