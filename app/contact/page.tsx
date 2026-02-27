const contactDetails = [
  { label: 'Phone', value: '(413) 512-1788', href: 'tel:4135121788' },
  { label: 'Contact', value: 'Corey Johnson', href: null },
  { label: 'Service Area', value: 'Western Massachusetts', href: null },
  { label: 'Response Time', value: 'Usually same day', href: null },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#0e0e0e] border-b border-[#2a2a2a] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c9a227] text-sm font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Get a Free Estimate</h2>

            <a
              href="tel:4135121788"
              className="flex items-center gap-3 p-5 bg-[#161616] border border-[#c9a227]/40 rounded-lg mb-6 hover:border-[#c9a227] transition-colors group"
            >
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">Call Corey</p>
                <p className="text-[#c9a227] text-2xl font-bold group-hover:text-[#e8c547] transition-colors">
                  (413) 512-1788
                </p>
              </div>
            </a>

            <div className="space-y-4">
              {contactDetails.slice(1).map(({ label, value, href }) => (
                <div key={label} className="border-b border-[#2a2a2a] pb-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-white font-medium text-sm hover:text-[#c9a227] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm">{value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          {/* TODO: Replace action with a real form handler (e.g. Formspree, Resend, or Vercel serverless) */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
            <form
              action="mailto:johnsontiling99@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="block text-gray-400 text-sm mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Smith"
                  className="w-full bg-[#161616] border border-[#2a2a2a] rounded px-4 py-3 text-white text-sm focus:border-[#c9a227] focus:outline-none transition-colors placeholder-gray-600"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1" htmlFor="phone">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(413) 000-0000"
                  className="w-full bg-[#161616] border border-[#2a2a2a] rounded px-4 py-3 text-white text-sm focus:border-[#c9a227] focus:outline-none transition-colors placeholder-gray-600"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1" htmlFor="message">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Describe your project — what rooms, what type of tile, timeline, etc."
                  className="w-full bg-[#161616] border border-[#2a2a2a] rounded px-4 py-3 text-white text-sm focus:border-[#c9a227] focus:outline-none transition-colors resize-none placeholder-gray-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#c9a227] text-black font-bold rounded hover:bg-[#e8c547] transition-colors"
              >
                Send Message
              </button>

              <p className="text-gray-600 text-xs text-center">
                Prefer to call? Reach Corey at (413) 512-1788
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
