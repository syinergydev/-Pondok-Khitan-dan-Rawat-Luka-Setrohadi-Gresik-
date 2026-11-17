import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { RefObject } from 'react'
gsap.registerPlugin(ScrollTrigger, useGSAP)

export function useMotion(scope: RefObject<HTMLElement>, dep: unknown) {
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const q = gsap.utils.toArray as (s: string) => HTMLElement[]
      // hero
      const hero = q('[data-hero]')
      if (hero.length) gsap.from(hero, { y: 46, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.13, delay: 0.1 })
      q('[data-blob]').forEach((b, i) => gsap.to(b, { x: i % 2 ? -50 : 50, y: i % 2 ? 40 : -40, duration: 7 + i * 2, repeat: -1, yoyo: true, ease: 'sine.inOut' }))
      // reveal teks / kartu
      const rv = q('[data-reveal]')
      if (rv.length) {
        gsap.set(rv, { opacity: 0, y: 38 })
        ScrollTrigger.batch(rv, { start: 'top 94%', once: true, onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out', overwrite: true }) })
      }
      // mask reveal gambar
      q('[data-mask]').forEach((el) => gsap.fromTo(el, { clipPath: 'inset(14% 14% 14% 14% round 28px)', scale: 0.94 }, { clipPath: 'inset(0% 0% 0% 0% round 24px)', scale: 1, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } }))
      // parallax ringan
      q('[data-par] img').forEach((im) => gsap.fromTo(im, { yPercent: -5 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: im.parentElement, scrub: true } }))
      // pinned editorial (desktop saja)
      const pin = q('[data-pin-left]')[0]
      if (pin) {
        const m2 = gsap.matchMedia()
        m2.add('(min-width: 1024px)', () => {
          ScrollTrigger.create({ trigger: pin.parentElement, start: 'top 120px', end: 'bottom bottom', pin, pinSpacing: false })
        })
        return () => m2.revert()
      }
    })
    const r = () => ScrollTrigger.refresh()
    window.addEventListener('load', r)
    const t = setTimeout(r, 700)
    return () => { window.removeEventListener('load', r); clearTimeout(t); mm.revert() }
  }, { scope, dependencies: [dep], revertOnUpdate: true })
}
