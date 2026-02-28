import Link from 'next/link'

const services = [
  {
    title: 'Bathroom Tiling',
    desc: 'Showers, tub surrounds, floors, and walls — complete bathroom transformations.',
  },
  {
    title: 'Kitchen Backsplash',
    desc: 'Custom backsplash installations in any style, from subway tile to natural stone.',
  },
  {
    title: 'Floor Tiling',
    desc: 'Precision floor tile for any room — porcelain, ceramic, or large-format stone.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#1B5F8C]">
        {/* Tile grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 59px, #ffffff 59px, #ffffff 60px),
              repeating-linear-gradient(90deg, transparent, transparent 59px, #ffffff 59px, #ffffff 60px)
            `,
          }}
        />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#a8d0e8] text-sm font-semibold tracking-widest uppercase mb-4">
            Western MA · Southern VT · Southern NH
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Expert Tile
            <br />
            <span className="text-[#8ec8e8]">Installation</span>
          </h1>
          <p className="text-[#b8d8ec] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Professional tiling for bathrooms, kitchens, floors, and more.
            Quality craftsmanship by Corey Johnson.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-[#1B5F8C] font-bold rounded hover:bg-[#f0f5fb] transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-4 border border-white/40 text-white rounded hover:border-white hover:bg-white/10 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0c1f30] mb-2 text-center">What We Do</h2>
          <p className="text-[#6b8fa8] text-center mb-12">
            Serving Western Massachusetts, Southern Vermont & Southern New Hampshire
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-[#f7fafd] border border-[#c5d8e8] rounded-lg p-6 hover:border-[#1B5F8C] hover:shadow-md transition-all"
              >
                <div className="w-10 h-0.5 bg-[#1B5F8C] mb-4" />
                <h3 className="text-[#0c1f30] font-semibold text-lg mb-2">{title}</h3>
                <p className="text-[#6b8fa8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-[#1B5F8C] text-sm font-semibold hover:text-[#154a6e] transition-colors"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 bg-[#f0f5fb]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c1f30] mb-4">
            Ready to transform your space?
          </h2>
          <p className="text-[#3c5c72] mb-8 text-lg">Call Corey today for a free estimate.</p>
          <a
            href="tel:4135121788"
            className="inline-block px-10 py-4 bg-[#1B5F8C] text-white font-bold text-2xl rounded hover:bg-[#154a6e] transition-colors"
          >
            (413) 512-1788
          </a>
        </div>
      </section>
    </>
  )
}
