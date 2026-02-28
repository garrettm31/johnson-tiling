import Link from 'next/link'

const services = [
  {
    title: 'Bathroom Tiling',
    desc: 'Complete bathroom tile installations including shower surrounds, tub surrounds, floor tile, and accent walls. We handle waterproofing through final grout.',
  },
  {
    title: 'Kitchen Backsplash',
    desc: 'Custom backsplash installations using any tile style — subway, mosaic, natural stone, and more. Clean, professional finishes every time.',
  },
  {
    title: 'Floor Tiling',
    desc: 'Precision floor tile for any room. We install porcelain, ceramic, natural stone, and large-format tiles with proper leveling and spacing.',
  },
  {
    title: 'Shower Installation',
    desc: 'Full shower builds from the ground up — waterproof membrane, mortar bed, tile work, and custom niches. Built to last.',
  },
  {
    title: 'Outdoor & Patio',
    desc: 'Exterior tile for patios, entryways, and pool surrounds. Frost-resistant materials rated for New England weather.',
  },
  {
    title: 'Radiant Heat Flooring',
    desc: 'In-floor radiant heating systems installed under tile — warm floors, even heat distribution, and energy-efficient comfort year-round.',
  },
  {
    title: 'Custom Tile Work',
    desc: 'Unique patterns, custom cuts, and decorative installations. If you have a creative vision, we can execute it with precision.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#1B5F8C] border-b border-[#154a6e] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#a8d0e8] text-sm font-semibold tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc }) => (
            <div
              key={title}
              className="bg-[#f7fafd] border border-[#c5d8e8] rounded-lg p-6 hover:border-[#1B5F8C] hover:shadow-md transition-all"
            >
              <div className="w-8 h-0.5 bg-[#1B5F8C] mb-4" />
              <h3 className="text-[#0c1f30] font-semibold text-lg mb-3">{title}</h3>
              <p className="text-[#6b8fa8] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#f0f5fb] border-t border-[#c5d8e8]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0c1f30] mb-4">Not sure what you need?</h2>
          <p className="text-[#3c5c72] mb-6">
            Call Corey for a free consultation — he'll assess your project and give you an honest estimate.
          </p>
          <a
            href="tel:4135121788"
            className="inline-block px-8 py-3 bg-[#1B5F8C] text-white font-bold rounded hover:bg-[#154a6e] transition-colors"
          >
            (413) 512-1788
          </a>
        </div>
      </section>
    </div>
  )
}
