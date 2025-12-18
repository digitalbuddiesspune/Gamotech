import React from 'react'

const PrivacyPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <div className="h-1 w-20 bg-amber-500 mb-8"></div>

        <div className="space-y-6 text-amber-100/90 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">Overview</h2>
            <p className="mb-4">
              Gamotech IT & Web Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and share information about you when you use our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">Information Collection</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact forms and inquiry submissions</li>
              <li>Newsletter subscriptions</li>
              <li>Service requests and project consultations</li>
              <li>Account registration information</li>
            </ul>
            <p className="mt-4">
              We also automatically collect certain information when you visit our website, such as your IP address, browser type, operating system, referring URLs, and pages viewed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">Use of Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Personalize and improve your experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With service providers who assist us in operating our website and conducting our business</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">Children&apos;s Privacy</h2>
            <p className="mb-4">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">Contact Information</h2>
            <p className="mb-4">
              For questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy

