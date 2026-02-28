import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0c1f30] border-t border-[#1a3a52] py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Johnson Tiling" className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="text-[#6b8fa8] text-sm leading-relaxed">
            Professional tile installation in Western Massachusetts, Southern Vermont, and Southern New Hampshire. Quality work, honest pricing.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {['Services', 'Gallery', 'About', 'Contact'].map((page) => (
              <li key={page}>
                <Link
                  href={`/${page.toLowerCase()}`}
                  className="text-[#6b8fa8] text-sm hover:text-[#7db8d8] transition-colors"
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-white font-medium text-sm">Corey Johnson</p>
          <a
            href="tel:4135121788"
            className="text-[#6b8fa8] text-sm hover:text-[#7db8d8] transition-colors block mt-1"
          >
            (413) 512-1788
          </a>
          <p className="text-[#6b8fa8] text-sm mt-1">Western MA · Southern VT · Southern NH</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-[#1a3a52]">
        <p className="text-[#3c5c72] text-xs text-center">
          © {new Date().getFullYear()} Johnson Tiling. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
