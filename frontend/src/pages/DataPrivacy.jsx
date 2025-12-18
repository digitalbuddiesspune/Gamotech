import React from 'react'

const DataPrivacy = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white mb-2">Data Privacy</h1>
        <div className="h-1 w-20 bg-amber-500 mb-8"></div>

        <div className="space-y-6 text-amber-100/90 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">1. Introduction</h2>
            <p className="mb-4">
              At Gamotech IT & Web Solutions, we are committed to protecting your privacy and ensuring the security of your personal data. This Data Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">2. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Business information (company name, job title)</li>
              <li>Technical data (IP address, browser type, device information)</li>
              <li>Usage data (pages visited, time spent on site, click patterns)</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">3. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support and respond to inquiries</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Data Privacy Policy, please contact us at:
            </p>
            <p className="mb-2">
              <strong>Email:</strong> info@gamotech.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +91 9637319746
            </p>
            <p>
              <strong>Address:</strong> 618, Gera&apos;s Imperum Rise, Wipro Circle, Hinjewadi, Pune – 411057
            </p>
          </div>

          <div className="pt-4 border-t border-amber-500/30">
            <p className="text-sm text-amber-200/70">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataPrivacy

