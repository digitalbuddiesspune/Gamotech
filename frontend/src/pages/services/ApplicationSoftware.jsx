import React from 'react'
import { Link } from 'react-router-dom'

const ApplicationSoftware = () => {
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
                            <span className="text-white">Application Software Development</span>
                        </div>
                    </nav>

                    <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Application Software Development
                    </h1>
                    <p className="mt-4 text-lg text-amber-200/80 sm:text-xl">
                        Reliable Application Development for Businesses
                    </p>

                    <div className="mb-16 mt-10 max-w-3xl space-y-4">
                        <p className="text-lg leading-relaxed text-amber-200/75 sm:text-xl">
                            Modern businesses rely on applications that are stable, secure, and built to scale. At Gamotech, we develop application software with a strong focus on performance, security, and long-term reliability.
                        </p>
                        <p className="text-lg leading-relaxed text-amber-200/75 sm:text-xl">
                            Whether you need a web-based application, a backend system, or a custom internal tool supporting daily operations, our structured development process ensures your application is future-ready and easy to manage.
                        </p>
                    </div>

                    {/* Why Application Software Matters */}
                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Why Application Software Matters</h2>
                        <p className="text-lg sm:text-xl text-amber-200/85 mb-6">Well-built application software helps businesses:</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
                                <p className="text-white text-lg mb-2">Automate operations and reduce manual work</p>
                            </div>
                            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
                                <p className="text-white text-lg mb-2">Improve data accuracy and security</p>
                            </div>
                            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
                                <p className="text-white text-lg mb-2">Support growing users and workloads</p>
                            </div>
                            <div className="bg-black/50 border border-amber-500/30 rounded-xl p-6">
                                <p className="text-white text-lg mb-2">Integrate smoothly with existing systems</p>
                            </div>
                        </div>
                        <p className="text-lg text-amber-200/75 leading-relaxed mt-6 max-w-4xl">
                            We design applications that work efficiently today and continue to perform as your business evolves.
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
                                        title: 'Web Application Development',
                                        description: 'Custom web applications built for speed, usability, and scalability — tailored to your business requirements and user roles.',
                                        icon: '🌐',
                                    },
                                    {
                                        title: 'Backend Systems & APIs',
                                        description: 'Robust backend architectures and secure APIs that power applications, integrations, and third-party services.',
                                        icon: '⚙️',
                                    },
                                    {
                                        title: 'Business Automation Tools',
                                        description: 'Applications that automate repetitive processes, approvals, and workflows to increase efficiency and consistency.',
                                        icon: '🔄',
                                    },
                                    {
                                        title: 'Secure Database Architecture',
                                        description: 'Well-structured and secure database designs that ensure data integrity, performance, and easy scalability.',
                                        icon: '🗄️',
                                    },
                                    {
                                        title: 'Long-Term Maintenance & Support',
                                        description: 'Ongoing support, updates, performance tuning, and security enhancements to keep your application running smoothly.',
                                        icon: '🛠️',
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

                    {/* Our Application Development Process */}
                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 text-center">
                            Our Application Development Process
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="text-amber-500 text-2xl sm:text-3xl font-bold mb-3">
                                    01
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                                    Requirement Analysis
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Understanding business goals and technical needs
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="text-amber-500 text-2xl sm:text-3xl font-bold mb-3">
                                    02
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                                    System Architecture
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Planning scalable and secure foundations
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="text-amber-500 text-2xl sm:text-3xl font-bold mb-3">
                                    03
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                                    Development & Integration
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Clean, maintainable, and tested code
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="text-amber-500 text-2xl sm:text-3xl font-bold mb-3">
                                    04
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                                    Quality Assurance
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Performance, security, and usability testing
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="text-amber-500 text-2xl sm:text-3xl font-bold mb-3">
                                    05
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                                    Deployment
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Stable and smooth production rollout
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="text-amber-500 text-2xl sm:text-3xl font-bold mb-3">
                                    06
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                                    Maintenance & Scaling
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Continuous improvement and support
                                </p>
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

export default ApplicationSoftware

