import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { gallery, galleryCats, flags } from '../data/site'

export default function Gallery({ limit, filters = true }: { limit?: number; filters?: boolean }) {
  const [cat, setCat] = useState('Semua')
  const [open, setOpen] = useState<number | null>(null)
  const grid = useRef<HTMLDivElement>(null)
  const lb = useRef<HTMLDivElement>(null)
  const pool = gallery.filter((g) => flags.showPatientPhotos || !['Keluarga dan Pasien', 'Dokumentasi Khitan'].includes(g.cat))
  const list = (cat === 'Semua' ? pool : pool.filter((g) => g.cat === cat)).slice(0, limit)

  useEffect(() => {
    if (!grid.current) return
    gsap.fromTo(grid.current.children, { opacity: 0, y: 24, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.04, ease: 'power2.out' })
  }, [cat])
  useEffect(() => {
    if (open === null) return
    if (lb.current) gsap.fromTo(lb.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((o) => (o === null ? o : (o + 1) % list.length))
      if (e.key === 'ArrowLeft') setOpen((o) => (o === null ? o : (o - 1 + list.length) % list.length))
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', k)
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [open, list.length])

  return (
    <div>
      {filters && (
        <div className="filters" role="tablist" aria-label="Filter kategori galeri">
          {galleryCats.map((c) => (<button key={c} className={c === cat ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>))}
        </div>
      )}
      <div className="masonry" ref={grid}>
        {list.map((g, i) => (
          <button key={g.src} onClick={() => setOpen(i)} aria-label={`Perbesar: ${g.alt}`}>
            <div className="frame"><img src={g.src} alt={g.alt} loading="lazy" style={{ aspectRatio: String(g.ratio) }} /></div>
          </button>
        ))}
      </div>
      {open !== null && list[open] && (
        <div className="lb" ref={lb} role="dialog" aria-modal="true" aria-label="Pratinjau foto" onClick={() => setOpen(null)}>
          <img src={list[open].src} alt={list[open].alt} onClick={(e) => e.stopPropagation()} />
          <button className="x" aria-label="Tutup" onClick={() => setOpen(null)}>✕</button>
          <button className="p" aria-label="Foto sebelumnya" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + list.length) % list.length) }}>‹</button>
          <button className="n" aria-label="Foto berikutnya" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % list.length) }}>›</button>
        </div>
      )}
    </div>
  )
}
