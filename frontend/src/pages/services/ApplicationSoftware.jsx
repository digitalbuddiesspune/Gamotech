import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ApplicationSoftware = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Hero Section - Full Width */}
            <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] flex items-center justify-center overflow-hidden mt-16 sm:mt-20">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766475928/photo-1551650975-87deedd944c3_j3gdg8.jpg"
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
                        Application Software Development
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed max-w-4xl mx-auto">
                        Reliable Application Development for Businesses
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
                            <span className="text-white">Application Software Development</span>
                        </div>
                    </nav>

                    {/* Description Section */}
                    <div className="mb-16">
                        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 items-center">
                            <div className="flex justify-center md:justify-start order-2 md:order-1">
                                <img
                                    src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1766817179/Wireframing-for-Mobile-App-Development_xfdx13.png"
                                    alt="Application Software Development"
                                    className="w-full max-w-xl lg:max-w-2xl rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="space-y-4 order-1 md:order-2">
                                <p className="text-lg sm:text-xl text-amber-200/75 text-justify leading-relaxed">
                                    Modern businesses rely on applications that are stable, secure, and built to scale. At Gamotech, we develop application software with a strong focus on performance, security, and long-term reliability.
                                </p>
                                <p className="text-lg sm:text-xl text-amber-200/75 text-justify leading-relaxed">
                                    Whether you need a web-based application, a backend system, or a custom internal tool supporting daily operations, our structured development process ensures your application is future-ready and easy to manage.
                                </p>
                            </div>
                        </div>
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

