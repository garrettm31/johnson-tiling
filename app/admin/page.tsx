'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [previews, setPreviews] = useState<{ file: File; url: string }[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password.length >= 4) {
      setAuthed(true)
      setAuthError(false)
    } else {
      setAuthError(true)
    }
  }

  function addFiles(files: FileList | File[]) {
    const arr = Array.from(files).filter((f) =>
      ['image/jpeg', 'image/png', 'image/webp'].includes(f.type)
    )
    const newPreviews = arr.map((file) => ({ file, url: URL.createObjectURL(file) }))
    setPreviews((prev) => [...prev, ...newPreviews])
  }

  function removePreview(index: number) {
    setPreviews((prev) => {
      URL.revokeObjectURL(prev[index].url)
      return prev.filter((_, i) => i !== index)
    })
  }

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    if (e.dataTransfer.files) addFiles(e.dataTransfer.files)
  }, [])

  async function handleUpload() {
    if (!previews.length) return
    setUploading(true)
    setMessage(null)

    const formData = new FormData()
    formData.append('password', password)
    previews.forEach(({ file }) => formData.append('files', file))

    const res = await fetch('/api/upload', { method: 'POST', body: formData })
    const data = await res.json()

    if (res.status === 401) {
      setMessage({ type: 'error', text: 'Wrong password.' })
      setAuthed(false)
    } else if (!res.ok) {
      setMessage({ type: 'error', text: data.error || 'Upload failed.' })
    } else {
      setMessage({ type: 'success', text: `${data.saved.length} photo(s) uploaded successfully!` })
      previews.forEach(({ url }) => URL.revokeObjectURL(url))
      setPreviews([])
    }

    setUploading(false)
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Johnson Tiling" className="h-14 w-auto mx-auto mb-2" />
            <p className="text-[#6b8fa8] text-sm">Admin — Photo Upload</p>
          </div>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label className="block text-[#3c5c72] text-sm mb-1" htmlFor="pw">
                Password
              </label>
              <input
                id="pw"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full bg-[#f7fafd] border border-[#c5d8e8] rounded px-4 py-3 text-[#0c1f30] text-sm focus:border-[#1B5F8C] focus:outline-none transition-colors"
                autoFocus
              />
              {authError && (
                <p className="text-red-500 text-xs mt-1">Password too short.</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#1B5F8C] text-white font-bold rounded hover:bg-[#154a6e] transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#0c1f30]">Upload Photos</h1>
          <p className="text-[#6b8fa8] text-sm mt-1">
            Add photos to the gallery. Supported: JPG, PNG, WebP.
          </p>
        </div>

        {/* Drop zone */}
        <div
          className={`border-2 border-dashed rounded-lg p-10 text-center transition-colors cursor-pointer ${
            dragging
              ? 'border-[#1B5F8C] bg-[#f0f5fb]'
              : 'border-[#c5d8e8] hover:border-[#1B5F8C]/50 hover:bg-[#f7fafd]'
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="text-4xl mb-3">📷</div>
          <p className="text-[#0c1f30] font-medium mb-1">Drag & drop photos here</p>
          <p className="text-[#6b8fa8] text-sm">or click to browse files</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            className="hidden"
            onChange={(e) => e.target.files && addFiles(e.target.files)}
          />
        </div>

        {/* Previews */}
        {previews.length > 0 && (
          <div className="mt-6">
            <p className="text-[#3c5c72] text-sm mb-3">{previews.length} photo(s) ready to upload</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {previews.map(({ url }, i) => (
                <div key={i} className="relative aspect-square rounded overflow-hidden group border border-[#c5d8e8]">
                  <Image src={url} alt="" fill className="object-cover" unoptimized />
                  <button
                    onClick={() => removePreview(i)}
                    className="absolute top-1 right-1 w-6 h-6 bg-white/90 text-[#0c1f30] text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload button */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={handleUpload}
            disabled={uploading || !previews.length}
            className="px-8 py-3 bg-[#1B5F8C] text-white font-bold rounded hover:bg-[#154a6e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading...' : 'Upload to Gallery'}
          </button>
          {message && (
            <p className={`text-sm font-medium ${message.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
              {message.text}
            </p>
          )}
        </div>

        <div className="mt-10 pt-6 border-t border-[#c5d8e8]">
          <a href="/gallery" className="text-[#1B5F8C] text-sm hover:text-[#154a6e] transition-colors">
            ← View Gallery
          </a>
        </div>
      </div>
    </div>
  )
}
