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
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0a0a0a]">
        {/* Tile grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 59px, #c9a227 59px, #c9a227 60px),
              repeating-linear-gradient(90deg, transparent, transparent 59px, #c9a227 59px, #c9a227 60px)
            `,
          }}
        />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#c9a227] text-sm font-semibold tracking-widest uppercase mb-4">
            Western Massachusetts
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Expert Tile
            <br />
            <span className="text-[#c9a227]">Installation</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Professional tiling for bathrooms, kitchens, floors, and more.
            Quality craftsmanship by Corey Johnson.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#c9a227] text-black font-bold rounded hover:bg-[#e8c547] transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-4 border border-[#3a3a3a] text-white rounded hover:border-[#c9a227] hover:text-[#c9a227] transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 bg-[#0e0e0e]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">What We Do</h2>
          <p className="text-gray-500 text-center mb-12">
            Specializing in quality tile work across Western Massachusetts
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#c9a227]/50 transition-colors"
              >
                <div className="w-10 h-0.5 bg-[#c9a227] mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-[#c9a227] text-sm font-semibold hover:text-[#e8c547] transition-colors"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 bg-[#c9a227]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to transform your space?
          </h2>
          <p className="text-black/70 mb-8 text-lg">Call Corey today for a free estimate.</p>
          <a
            href="tel:4135121788"
            className="inline-block px-10 py-4 bg-black text-[#c9a227] font-bold text-2xl rounded hover:bg-[#111] transition-colors"
          >
            (413) 512-1788
          </a>
        </div>
      </section>
    </>
  )
}
