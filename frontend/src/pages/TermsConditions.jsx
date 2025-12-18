import React from 'react'

const TermsConditions = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white mb-2">Terms & Conditions</h1>
        <div className="h-1 w-20 bg-amber-500 mb-8"></div>

        <div className="space-y-6 text-amber-100/90 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the Gamotech IT & Web Solutions website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">2. Services Description</h2>
            <p className="mb-4">
              Gamotech IT & Web Solutions provides IT services, web design and development, SEO, social media marketing, content writing, logo design, app development, and performance marketing services. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">3. User Obligations</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information when using our services</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt the services or servers</li>
              <li>Not attempt to gain unauthorized access to any portion of the services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">4. Intellectual Property</h2>
            <p className="mb-4">
              All content, features, and functionality of our website and services, including but not limited to text, graphics, logos, images, and software, are the exclusive property of Gamotech IT & Web Solutions and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">5. Payment Terms</h2>
            <p className="mb-4">
              Payment terms will be specified in individual service agreements or contracts. All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing at any time, but changes will not affect ongoing projects with signed agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">6. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Gamotech IT & Web Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">7. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless Gamotech IT & Web Solutions, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of your use of our services or violation of these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">8. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms & Conditions. Upon termination, your right to use the services will cease immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">9. Governing Law</h2>
            <p className="mb-4">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Pune, India.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">10. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms & Conditions at any time. We will notify users of any material changes by posting the updated terms on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-200 mb-3">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
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

export default TermsConditions

