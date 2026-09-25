import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

const DETAILS = [
  {
    title: 'Address',
    icon: MapPin,
    content: (
      <p>618, Gera&apos;s Imperum Rise, Wipro Circle, Hinjewadi, Pune – 411057</p>
    ),
  },
  {
    title: 'Phone',
    icon: Phone,
    content: (
      <div className="space-y-1">
        <a href="tel:+919637319746" className="block !text-amber-50/80 hover:!text-amber-300">
          +91 9637319746
        </a>
        <a href="tel:+919766670916" className="block !text-amber-50/80 hover:!text-amber-300">
          +91 9766670916
        </a>
      </div>
    ),
  },
  {
    title: 'Email',
    icon: Mail,
    content: (
      <div className="space-y-1">
        <a href="mailto:info@gamotech.co" className="block !text-amber-50/80 hover:!text-amber-300">
          info@gamotech.co
        </a>
        <a href="mailto:hr@gamotech.co" className="block !text-amber-50/80 hover:!text-amber-300">
          hr@gamotech.co
        </a>
      </div>
    ),
  },
]

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent('Contact from Gamotech website')
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
    )
    window.location.href = `mailto:info@gamotech.co?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">Contact</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Let&apos;s talk about your next build.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-amber-50/75 sm:text-lg">
          Share what you are building and where you need help. We work on websites, e-commerce, CRM systems, and custom software.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {DETAILS.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400">
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
                </div>
                
               
                <div className="mt-2 text-sm leading-relaxed text-amber-50/75">{item.content}</div>
              </article>
            )
          })}
        </div>

        <div id="contact-form" className="mt-10 grid items-stretch gap-4 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-white">Send a message</h2>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-amber-100">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-amber-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-amber-300"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-amber-100">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-amber-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-amber-300"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm font-medium text-amber-100">
                  How can we help?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell us about the website, product, or system you want to build."
                  className="mt-1.5 w-full resize-y rounded-xl border border-white/15 bg-black px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-amber-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-amber-300"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
              >
                Send message
              </button>
            </div>
          </form>

          <div className="min-h-[420px] overflow-hidden rounded-3xl border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=618+Gera's+Imperum+Rise+Wipro+Circle+Hinjewadi+Pune+411057&output=embed"
              title="Gamotech office in Hinjewadi, Pune"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
