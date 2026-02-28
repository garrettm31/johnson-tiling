import { readdirSync, existsSync } from 'fs'
import path from 'path'
import Image from 'next/image'

const GALLERY_DIR = path.join(process.cwd(), 'public', 'gallery')
const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp']

function getGalleryImages(): string[] {
  if (!existsSync(GALLERY_DIR)) return []
  return readdirSync(GALLERY_DIR).filter((f) =>
    IMAGE_EXTS.includes(path.extname(f).toLowerCase())
  )
}

const placeholders = [
  'Bathroom Floor', 'Shower Surround', 'Kitchen Backsplash',
  'Outdoor Patio', 'Master Bath', 'Custom Pattern',
]

export default function GalleryPage() {
  const images = getGalleryImages()
  const hasImages = images.length > 0

  return (
    <div className="min-h-screen">
      <section className="bg-[#1B5F8C] border-b border-[#154a6e] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#a8d0e8] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Gallery</h1>
          <p className="text-[#b8d8ec] mt-3 max-w-xl">
            A sample of completed projects across Western Massachusetts, Southern Vermont & Southern New Hampshire.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {hasImages ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {images.map((filename) => (
                  <div
                    key={filename}
                    className="relative aspect-square rounded-lg overflow-hidden border border-[#c5d8e8] hover:border-[#1B5F8C] hover:shadow-md transition-all"
                  >
                    <Image
                      src={`/gallery/${filename}`}
                      alt="Johnson Tiling project"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[#6b8fa8] text-xs text-center mt-6">
                Contact Corey to discuss your project — (413) 512-1788
              </p>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {placeholders.map((label) => (
                  <div
                    key={label}
                    className="relative aspect-square bg-[#f0f5fb] rounded-lg overflow-hidden group border border-[#c5d8e8] hover:border-[#1B5F8C] transition-colors"
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `
                          repeating-linear-gradient(0deg, transparent, transparent 29px, #c5d8e8 29px, #c5d8e8 30px),
                          repeating-linear-gradient(90deg, transparent, transparent 29px, #c5d8e8 29px, #c5d8e8 30px)
                        `,
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <p className="text-[#9ab8ca] text-xs uppercase tracking-widest mb-1">Photo</p>
                      <p className="text-[#3c5c72] text-sm font-medium">{label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-[#f0f5fb] border border-[#c5d8e8] rounded-lg text-center">
                <p className="text-[#3c5c72] text-sm font-medium mb-1">Photos coming soon</p>
                <p className="text-[#6b8fa8] text-sm">
                  Contact Corey to see more examples of his work.
                </p>
                <a
                  href="tel:4135121788"
                  className="inline-block mt-4 text-[#1B5F8C] text-sm font-semibold hover:text-[#154a6e] transition-colors"
                >
                  (413) 512-1788
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
