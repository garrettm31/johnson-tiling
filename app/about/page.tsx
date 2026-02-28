import Link from 'next/link'

const stats = [
  { label: 'Service Area', value: 'Western MA, Southern VT & Southern NH' },
  { label: 'Specialties', value: 'Bathrooms & Floors' },
  { label: 'Phone', value: '(413) 512-1788' },
  { label: 'Estimates', value: 'Free' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#1B5F8C] border-b border-[#154a6e] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#a8d0e8] text-sm font-semibold tracking-widest uppercase mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Johnson Tiling</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          {/* Photo placeholder */}
          <div className="aspect-[3/4] bg-[#f0f5fb] border border-[#c5d8e8] rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#c5d8e8] rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-[#1B5F8C] text-2xl font-bold">CJ</span>
              </div>
              <p className="text-[#6b8fa8] text-xs">Photo of Corey</p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-2xl font-bold text-[#0c1f30] mb-2">Corey Johnson</h2>
            <div className="w-12 h-0.5 bg-[#1B5F8C] mb-6" />
            <div className="space-y-4 text-[#3c5c72] text-sm leading-relaxed">
              <p>
                Corey Johnson is a professional tile installer based in Western Massachusetts with years of hands-on experience in residential and commercial tiling projects.
              </p>
              <p>
                From simple bathroom refreshes to complete custom tile builds, Corey brings the same level of care and precision to every job. He takes pride in clean, lasting work that his customers can enjoy for years to come.
              </p>
              <p>
                Whether you're renovating a bathroom, upgrading your kitchen, or building something from scratch, Corey will work with you to get the result right — on time and within budget.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map(({ label, value }) => (
                <div key={label} className="bg-[#f7fafd] border border-[#c5d8e8] rounded p-3">
                  <p className="text-[#6b8fa8] text-xs uppercase tracking-wide mb-1">{label}</p>
                  <p className="text-[#0c1f30] text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-[#1B5F8C] text-white font-bold rounded hover:bg-[#154a6e] transition-colors"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
