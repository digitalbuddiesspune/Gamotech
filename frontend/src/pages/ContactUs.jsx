import React from 'react'

const ContactUs = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <div className="space-y-2">
        <p className="text-sm font-semibold text-amber-400">Contact</p>
        <h1 className="text-3xl font-bold text-amber-100">Let&apos;s talk about your next build.</h1>
        <p className="text-lg text-amber-200/80">
          This form is a demo—wire it to your backend or CRM when you go live.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-amber-100/85">
          <p>
            Share what you are building and where you need help. We can scope prototypes, review
            gameplay loops, or plan live operations together.
          </p>
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-amber-200">Contact details</p>
            <p>Email: hello@gamotech.demo</p>
            <p>Discord: gamotech-demo</p>
            <p>Office hours: Mon–Fri, 9am–6pm (GMT)</p>
          </div>
        </div>

        <form
          className="bg-[#0d0d0f] border border-amber-500/30 rounded-xl shadow-lg shadow-amber-500/10 p-6 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-1">
            <label className="text-sm font-medium text-amber-100">Name</label>
            <input
              type="text"
              placeholder="Alex Player"
              className="w-full rounded-md border border-amber-500/40 bg-black/40 px-3 py-2 text-amber-50 placeholder:text-amber-200/50 focus:border-amber-400 focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-amber-100">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-amber-500/40 bg-black/40 px-3 py-2 text-amber-50 placeholder:text-amber-200/50 focus:border-amber-400 focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-amber-100">How can we help?</label>
            <textarea
              rows="4"
              placeholder="I need help with multiplayer architecture..."
              className="w-full rounded-md border border-amber-500/40 bg-black/40 px-3 py-2 text-amber-50 placeholder:text-amber-200/50 focus:border-amber-400 focus:outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-md bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/25"
          >
            Send (demo)
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs
