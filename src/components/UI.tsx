import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { biz, wa, flags, packages, msg, methods, img } from '../data/site'
import { WhatsAppIcon, InstagramIcon, FacebookIcon, MailIcon, StarIcon } from './Icons'

export const SocialLinks = ({ mail = false, wa: showWa = false }: { mail?: boolean; wa?: boolean }) => (
  <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
    <a className="soc ig" href={biz.ig} target="_blank" rel="noopener noreferrer" aria-label="Instagram Pondok Khitan Setro"><InstagramIcon /></a>
    <a className="soc fb" href={biz.fb} target="_blank" rel="noopener noreferrer" aria-label="Facebook Pondok Khitan Setro"><FacebookIcon /></a>
    {showWa && <a className="soc wa" href={wa(msg.umum)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Pondok Khitan Setro"><WhatsAppIcon /></a>}
    {mail && <a className="soc ml" href={`mailto:${biz.email}`} aria-label="Kirim email"><MailIcon /></a>}
  </div>
)

export const WaBtn = ({ text, m, cls = 'btn-g' }: { text: string; m: string; cls?: string }) => (
  <a className={`btn ${cls}`} href={wa(m)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon width={20} height={20} />{text}</a>
)
export const MapBtn = ({ cls = 'btn-line' }: { cls?: string }) => (
  <a className={`btn ${cls}`} href={biz.maps} target="_blank" rel="noopener noreferrer">Lihat Lokasi</a>
)

export const Head = ({ eye, title, lead, h = 2 }: { eye?: string; title: ReactNode; lead?: ReactNode; h?: 1 | 2 }) => (
  <div className="narrow">
    {eye && <span className="eyebrow" data-reveal>{eye}</span>}
    {h === 1 ? <h1 className="h1" data-hero>{title}</h1> : <h2 className="h2" data-reveal>{title}</h2>}
    {lead && <p className="lead" data-reveal>{lead}</p>}
  </div>
)

export const PageHero = ({ eye, title, lead, children }: { eye: string; title: ReactNode; lead: ReactNode; children?: ReactNode }) => (
  <header className="hero sub">
    <div className="blob" data-blob style={{ width: 360, height: 360, background: '#bdeac5', left: '-80px', top: 60 }} />
    <div className="blob" data-blob style={{ width: 300, height: 300, background: '#f6e4a0', right: '-60px', top: 160 }} />
    <div className="wrap" style={{ position: 'relative' }}>
      <span className="eyebrow" data-hero>{eye}</span>
      <h1 className="h1" data-hero style={{ maxWidth: 900, margin: '0 auto' }}>{title}</h1>
      <p className="lead" data-hero>{lead}</p>
      {children && <div data-hero>{children}</div>}
    </div>
  </header>
)

export const Disclaimer = () => (
  <p className="note">Informasi pada website ini bersifat umum dan bukan pengganti pemeriksaan atau konsultasi langsung dengan tenaga kesehatan. Jadwal, metode, dan ketersediaan tindakan perlu dikonfirmasi terlebih dahulu melalui WhatsApp.</p>
)

export const Cta = ({ title, lead, m = msg.umum, dark = true }: { title: ReactNode; lead?: ReactNode; m?: string; dark?: boolean }) => (
  <section className={`sec ${dark ? 'deep' : 'softbg'}`}>
    <div className="wrap">
      <Head eye="Konsultasi" title={title} lead={lead} />
      <div className="btns" data-reveal>
        <WaBtn text="Hubungi WhatsApp" m={m} cls="btn-gold" />
        <MapBtn />
      </div>
      <div style={{ marginTop: 26 }} data-reveal><SocialLinks mail /></div>
      <Disclaimer />
    </div>
  </section>
)

export const FAQ = ({ items }: { items: [string, string][] }) => (
  <div className="faq narrow" style={{ marginTop: 40 }}>
    {items.map(([q, a]) => (<details key={q} data-reveal><summary>{q}</summary><p>{a}</p></details>))}
  </div>
)

export const Steps = ({ items }: { items: [string, string][] }) => (
  <div className={`grid ${items.length === 4 ? 'g4' : 'g3'}`}>
    {items.map(([t, d], i) => (
      <div className="card" key={t} data-reveal><div className="num">{i + 1}</div><h3 className="h3">{t}</h3><p>{d}</p></div>
    ))}
  </div>
)

export const MethodCard = ({ i }: { i: number }) => {
  const m = methods[i]
  const src = m.pic === 'klamp' ? img.klamp : img.metode
  return (
    <div className="card" data-reveal style={{ padding: 0, overflow: 'hidden' }}>
      <div className="frame contain" style={{ aspectRatio: '16/10', borderRadius: 0 }}><img src={src} alt={`Ilustrasi pendukung ${m.n}`} loading="lazy" /></div>
      <div style={{ padding: '22px 20px 26px' }}>
        <span className="tag">Metode {i + 1}</span>
        <h3 className="h3">{m.n}</h3>
        <p>{m.d}</p>
        <div style={{ marginTop: 18 }}><WaBtn text={`Tanya ${m.n}`} m={`Halo Pondok Khitan Setro, saya ingin bertanya mengenai metode ${m.n}.`} cls="btn-dark" /></div>
      </div>
    </div>
  )
}

export const Price = () => flags.showPrices && packages.length ? (
  <div className="grid g3">{packages.map((p) => (
    <div className="card" key={p.name}><h3 className="h3">{p.name}</h3><p><b>{p.price}</b></p><p>{p.perks.join(' • ')}</p><p>Berlaku hingga {p.validUntil}</p></div>))}</div>
) : (
  <div className="card narrow" data-reveal>
    <h3 className="h3">Harga dan Paket Khitan</h3>
    <p>Harga dan paket dapat berbeda sesuai metode dan kondisi pasien, sehingga disampaikan langsung saat konsultasi agar informasinya selalu terbaru.</p>
    <div style={{ marginTop: 18 }}><WaBtn text="Tanyakan Harga dan Paket Khitan" m={msg.harga} /></div>
  </div>
)

export const Rating = () => (
  <div className="bar" aria-label="Rating 5,0 dari 5">{[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} />)}</div>
)
