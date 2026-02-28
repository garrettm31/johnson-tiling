const contactDetails = [
  { label: 'Phone', value: '(413) 512-1788', href: 'tel:4135121788' },
  { label: 'Contact', value: 'Corey Johnson', href: null },
  { label: 'Service Area', value: 'Western MA, Southern VT & Southern NH', href: null },
  { label: 'Response Time', value: 'Usually same day', href: null },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#1B5F8C] border-b border-[#154a6e] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#a8d0e8] text-sm font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-xl font-bold text-[#0c1f30] mb-6">Get a Free Estimate</h2>

            <a
              href="tel:4135121788"
              className="flex items-center gap-3 p-5 bg-[#f0f5fb] border border-[#1B5F8C]/30 rounded-lg mb-6 hover:border-[#1B5F8C] transition-colors group"
            >
              <div>
                <p className="text-[#6b8fa8] text-xs uppercase tracking-wide mb-0.5">Call Corey</p>
                <p className="text-[#1B5F8C] text-2xl font-bold group-hover:text-[#154a6e] transition-colors">
                  (413) 512-1788
                </p>
              </div>
            </a>

            <div className="space-y-4">
              {contactDetails.slice(1).map(({ label, value, href }) => (
                <div key={label} className="border-b border-[#c5d8e8] pb-4">
                  <p className="text-[#6b8fa8] text-xs uppercase tracking-wide mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-[#0c1f30] font-medium text-sm hover:text-[#1B5F8C] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#0c1f30] font-medium text-sm">{value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          {/* TODO: Replace action with a real form handler (e.g. Formspree, Resend, or Vercel serverless) */}
          <div>
            <h2 className="text-xl font-bold text-[#0c1f30] mb-6">Send a Message</h2>
            <form
              action="mailto:johnsontiling99@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="block text-[#3c5c72] text-sm mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Smith"
                  className="w-full bg-[#f7fafd] border border-[#c5d8e8] rounded px-4 py-3 text-[#0c1f30] text-sm focus:border-[#1B5F8C] focus:outline-none transition-colors placeholder-[#9ab8ca]"
                />
              </div>

              <div>
                <label className="block text-[#3c5c72] text-sm mb-1" htmlFor="phone">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(413) 000-0000"
                  className="w-full bg-[#f7fafd] border border-[#c5d8e8] rounded px-4 py-3 text-[#0c1f30] text-sm focus:border-[#1B5F8C] focus:outline-none transition-colors placeholder-[#9ab8ca]"
                />
              </div>

              <div>
                <label className="block text-[#3c5c72] text-sm mb-1" htmlFor="message">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Describe your project — what rooms, what type of tile, timeline, etc."
                  className="w-full bg-[#f7fafd] border border-[#c5d8e8] rounded px-4 py-3 text-[#0c1f30] text-sm focus:border-[#1B5F8C] focus:outline-none transition-colors resize-none placeholder-[#9ab8ca]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#1B5F8C] text-white font-bold rounded hover:bg-[#154a6e] transition-colors"
              >
                Send Message
              </button>

              <p className="text-[#6b8fa8] text-xs text-center">
                Prefer to call? Reach Corey at (413) 512-1788
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
