import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { WhatsAppIcon } from '../components/Icons'
import { wa, msg } from '../data/site'
import { useMotion } from '../hooks/useMotion'

export default function Layout() {
  const ref = useRef<HTMLElement>(null)
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  useMotion(ref, pathname)
  return (
    <>
      <Navbar />
      <main ref={ref}><Outlet /></main>
      <Footer />
      <a className="wafloat" href={wa(msg.umum)} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp"><WhatsAppIcon /></a>
    </>
  )
}
