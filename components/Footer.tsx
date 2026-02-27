import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#2a2a2a] py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-bold mb-2">
            <span className="text-[#c9a227]">Johnson&apos;s</span>
            <span className="text-white"> Tiling</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Professional tile installation in Western Massachusetts. Quality work, honest pricing.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {['Services', 'Gallery', 'About', 'Contact'].map((page) => (
              <li key={page}>
                <Link
                  href={`/${page.toLowerCase()}`}
                  className="text-gray-500 text-sm hover:text-[#c9a227] transition-colors"
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
            className="text-gray-500 text-sm hover:text-[#c9a227] transition-colors block mt-1"
          >
            (413) 512-1788
          </a>
          <p className="text-gray-500 text-sm mt-1">Western Massachusetts</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-[#2a2a2a]">
        <p className="text-gray-600 text-xs text-center">
          © {new Date().getFullYear()} Johnson's Tiling. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
