import { Link } from 'react-router-dom'
import { img, msg } from '../data/site'
import { PageHero, Cta, WaBtn } from '../components/UI'
import { usePageMeta } from '../utils/meta'
export default function Layanan() {
  usePageMeta('Layanan Kami', 'Layanan Pondok Khitan Setro: khitan modern, rawat luka, dan khitan panggilan ke rumah di Setrohadi, Gresik.')
  const S = [
    { t: 'Khitan Modern', d: 'Layanan khitan modern dengan pilihan metode yang dapat disesuaikan berdasarkan kondisi dan kebutuhan pasien setelah konsultasi dengan tenaga medis.', i: img.klamp, a: 'Alat klamp khitan', to: '/khitan-modern', b: 'Lihat Metode Khitan' },
    { t: 'Rawat Luka', d: 'Layanan rawat luka yang tercantum pada identitas layanan kami. Konsultasikan kondisi Anda dengan tenaga kesehatan untuk mengetahui apa yang dapat dibantu.', i: img.tim, a: 'Tenaga kesehatan Pondok Khitan Setro', to: '/rawat-luka', b: 'Konsultasi Rawat Luka' },
    { t: 'Khitan Panggilan ke Rumah', d: 'Materi layanan kami menyebut khitan panggilan ke rumah. Lokasi, jadwal, dan metode perlu dikonfirmasi terlebih dahulu.', i: img.center, a: 'Materi layanan khitan center modern', to: '/home-visit', b: 'Tanyakan Home Visit' },
  ]
  return (<>
    <PageHero eye="Layanan Kami" title="Layanan untuk kebutuhan khitan dan perawatan" lead="Tiga layanan yang dapat Anda tanyakan. Seluruh ketersediaan dikonfirmasi lebih dulu melalui WhatsApp." />
    <section className="sec"><div className="wrap"><div className="grid g3" style={{ marginTop: 0 }}>
      {S.map((s) => (<article className="card" key={s.t} data-reveal style={{ padding: 0, overflow: 'hidden' }}>
        <div className={`frame ${s.i === img.center ? 'contain' : ''}`} style={{ aspectRatio: '4/3', borderRadius: 0 }}><img src={s.i} alt={s.a} loading="lazy" /></div>
        <div style={{ padding: '24px 20px 30px' }}><h3 className="h3">{s.t}</h3><p>{s.d}</p><div className="btns"><Link className="btn btn-dark" to={s.to}>{s.b}</Link></div></div></article>))}
    </div>
    <div className="card narrow" data-reveal style={{ marginTop: 40 }}><h3 className="h3">Layanan lain pada kartu informasi</h3>
      <p>Kartu informasi tenaga kesehatan kami mencantumkan: persalinan 24 jam, khitan modern bius semprot, rawat luka modern, injeksi vitamin, serta pemeriksaan gula darah, asam urat, dan kolesterol. Tanyakan ketersediaannya terlebih dulu.</p>
      <div style={{ marginTop: 16 }}><WaBtn text="Tanyakan Layanan Lain" m={msg.umum} /></div></div>
    </div></section>
    <Cta title="Belum yakin layanan mana yang Anda butuhkan?" lead="Ceritakan kebutuhan Anda, kami bantu arahkan." />
  </>)
}
