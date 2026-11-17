import { Link } from 'react-router-dom'
import { biz, img, navAll } from '../data/site'
import { SocialLinks, WaBtn } from './UI'
import { msg } from '../data/site'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <img src={img.logoWide} alt="Logo Pondok Khitan Setro" width={220} height={98} style={{ margin: '0 auto 22px', borderRadius: 14, height: 92, width: 'auto' }} />
        <h2 className="h2" style={{ fontSize: 'clamp(1.5rem,4vw,2.4rem)' }}>Khitan modern dan rawat luka, dengan pelayanan penuh perhatian.</h2>
        <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: 560, margin: '14px auto 24px' }}>{biz.address}. Buka 24 jam — jadwal dan ketersediaan tindakan dikonfirmasi via WhatsApp.</p>
        <WaBtn text="Hubungi WhatsApp 0856-4838-8636" m={msg.umum} />
        <div className="fl">{navAll.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}</div>
        <SocialLinks mail />
        <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,.5)', maxWidth: 620, margin: '28px auto 0' }}>Informasi pada website ini bersifat umum dan bukan pengganti pemeriksaan atau konsultasi langsung dengan tenaga kesehatan.</p>
        <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,.5)', marginTop: 8 }}>© {new Date().getFullYear()} Pondok Khitan dan Rawat Luka Setrohadi</p>
      </div>
    </footer>
  )
}
