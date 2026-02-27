const galleryItems = [
  { id: 1, label: 'Bathroom Floor' },
  { id: 2, label: 'Shower Surround' },
  { id: 3, label: 'Kitchen Backsplash' },
  { id: 4, label: 'Outdoor Patio' },
  { id: 5, label: 'Master Bath' },
  { id: 6, label: 'Custom Pattern' },
  { id: 7, label: 'Floor Tile' },
  { id: 8, label: 'Accent Wall' },
  { id: 9, label: 'Pool Surround' },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#0e0e0e] border-b border-[#2a2a2a] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c9a227] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Gallery</h1>
          <p className="text-gray-500 mt-3 max-w-xl">
            A sample of completed projects across Western Massachusetts.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryItems.map(({ id, label }) => (
              <div
                key={id}
                className="relative aspect-square bg-[#1c1c1c] rounded-lg overflow-hidden group border border-[#2a2a2a] hover:border-[#c9a227]/50 transition-colors"
              >
                {/* Tile pattern placeholder */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent, transparent 29px, #3a3a3a 29px, #3a3a3a 30px),
                      repeating-linear-gradient(90deg, transparent, transparent 29px, #3a3a3a 29px, #3a3a3a 30px)
                    `,
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">Photo</p>
                  <p className="text-gray-500 text-sm font-medium">{label}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0a0a0a]/90 py-2 px-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-[#c9a227] text-xs font-semibold">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-[#161616] border border-[#2a2a2a] rounded-lg text-center">
            <p className="text-gray-400 text-sm font-medium mb-1">Photos coming soon</p>
            <p className="text-gray-600 text-sm">
              Contact Corey to see more examples of his work.
            </p>
            <a
              href="tel:4135121788"
              className="inline-block mt-4 text-[#c9a227] text-sm font-semibold hover:text-[#e8c547] transition-colors"
            >
              (413) 512-1788
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
