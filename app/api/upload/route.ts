import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'johnson2024'
const GALLERY_DIR = path.join(process.cwd(), 'public', 'gallery')

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const password = formData.get('password') as string

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const files = formData.getAll('files') as File[]
  if (!files.length) {
    return NextResponse.json({ error: 'No files provided' }, { status: 400 })
  }

  if (!existsSync(GALLERY_DIR)) {
    await mkdir(GALLERY_DIR, { recursive: true })
  }

  const saved: string[] = []
  for (const file of files) {
    const ext = path.extname(file.name).toLowerCase()
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue

    const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`
    const bytes = await file.arrayBuffer()
    await writeFile(path.join(GALLERY_DIR, safeName), Buffer.from(bytes))
    saved.push(safeName)
  }

  return NextResponse.json({ saved })
}

export async function DELETE(request: NextRequest) {
  const { password, filename } = await request.json()

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!filename || filename.includes('/') || filename.includes('..')) {
    return NextResponse.json({ error: 'Invalid filename' }, { status: 400 })
  }

  const { unlink } = await import('fs/promises')
  await unlink(path.join(GALLERY_DIR, filename))
  return NextResponse.json({ ok: true })
}
