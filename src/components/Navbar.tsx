import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { nav, navAll, img, wa, msg } from '../data/site'
import { SocialLinks } from './UI'
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from './Icons'
import { biz } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const ov = useRef<HTMLDivElement>(null)
  const bg = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const el = ov.current, b = bg.current
    if (!el || !b) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lines = b.querySelectorAll('i')
    if (open) {
      document.body.style.overflow = 'hidden'
      el.classList.add('open')
      if (reduce) return
      gsap.fromTo(el, { clipPath: 'circle(0% at 92% 4%)' }, { clipPath: 'circle(150% at 92% 4%)', duration: 0.7, ease: 'power3.inOut' })
      gsap.fromTo(el.querySelectorAll('[data-m]'), { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, delay: 0.25, ease: 'power3.out' })
      gsap.to(lines[0], { y: 4, rotate: 45, duration: 0.3 }); gsap.to(lines[1], { y: -4, rotate: -45, duration: 0.3 })
    } else {
      document.body.style.overflow = ''
      if (reduce || !el.classList.contains('open')) { el.classList.remove('open'); return }
      gsap.to(el, { clipPath: 'circle(0% at 92% 4%)', duration: 0.5, ease: 'power3.inOut', onComplete: () => el.classList.remove('open') })
      gsap.to(lines, { y: 0, rotate: 0, duration: 0.3 })
    }
  }, [open])
  return (
    <>
      <nav className="nav" aria-label="Navigasi utama">
        <div className="pill">
          <Link to="/" aria-label="Pondok Khitan Setro — Beranda"><img className="logo" src={img.logoWide} alt="Logo Pondok Khitan Setro" width={90} height={40} /></Link>
          <div className="links">
            {nav.map((n) => (<NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'on' : '')}>{n.label}</NavLink>))}
          </div>
          <div className="right">
            <a className="soc ig hidesm" href={biz.ig} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a className="soc fb hidesm" href={biz.fb} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
            <a className="btn btn-g navcta" href={wa(msg.umum)} target="_blank" rel="noopener noreferrer">Konsultasi</a>
            <button ref={bg} className="burger" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}><i /><i /></button>
          </div>
        </div>
      </nav>
      <div className="overlay" ref={ov} aria-hidden={!open}>
        {navAll.map((n) => (<NavLink key={n.to} data-m className={({ isActive }) => `m${isActive ? ' on' : ''}`} to={n.to} end={n.to === '/'}>{n.label}</NavLink>))}
        <div data-m style={{ margin: '28px 0 18px' }}><a className="btn btn-g" href={wa(msg.umum)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon width={20} height={20} />Konsultasi via WhatsApp</a></div>
        <div data-m><SocialLinks mail /></div>
      </div>
    </>
  )
}
