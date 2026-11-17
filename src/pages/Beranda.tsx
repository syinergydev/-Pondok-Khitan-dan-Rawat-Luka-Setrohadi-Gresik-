import { Link } from 'react-router-dom'
import { img, biz, msg, methods } from '../data/site'
import { WaBtn, Head, Cta } from '../components/UI'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonial'
import { usePageMeta } from '../utils/meta'

export default function Beranda() {
  usePageMeta('Khitan Modern dan Rawat Luka di Setrohadi, Gresik', 'Pondok Khitan dan Rawat Luka Setrohadi, Duduksampeyan, Gresik. Konsultasi khitan modern, rawat luka, dan khitan panggilan ke rumah. Rating Google Maps 5,0.')
  return (
    <>
      <header className="hero">
        <div className="blob" data-blob style={{ width: 420, height: 420, background: '#bdeac5', left: '-120px', top: 40 }} />
        <div className="blob" data-blob style={{ width: 340, height: 340, background: '#f6e4a0', right: '-80px', top: 220 }} />
        <div className="wrap" style={{ position: 'relative' }}>
          <img className="logoimg" data-hero src={img.logoWide} alt="Logo Pondok Khitan Setro" width={171} height={76} />
          <h1 className="h1" data-hero style={{ maxWidth: 940, margin: '0 auto' }}>Khitan Modern dan Perawatan Kesehatan dengan <span className="hl">Pelayanan Penuh Perhatian.</span></h1>
          <p className="lead" data-hero>Pondok Khitan Setro menghadirkan layanan khitan modern dan informasi perawatan kesehatan di Setrohadi, Gresik, dengan pendekatan yang ramah dan memperhatikan kenyamanan pasien serta keluarga.</p>
          <div className="btns" data-hero>
            <WaBtn text="Konsultasi Sekarang" m={msg.umum} />
            <Link className="btn btn-line" to="/layanan">Jelajahi Layanan</Link>
          </div>
          <div className="collage">
            <div className="frame" data-mask><img src={img.tim} alt="Tim tenaga kesehatan Pondok Khitan Setro" /></div>
            <div className="frame" data-mask><img src={img.f10} alt="Keluarga dan tim berfoto bersama setelah layanan khitan" /></div>
            <div className="frame" data-mask><img src={img.f19} alt="Tim bersama keluarga dan anak" /></div>
          </div>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <div className="trust">
            {[['5,0', 'Rating Google Maps'], ['5', 'Ulasan Google Maps'], ['Setrohadi', 'Duduksampeyan, Gresik'], ['24 Jam', 'Buka (konfirmasi dulu via WhatsApp)']].map(([a, b]) => (
              <div className="card" key={b} data-reveal style={{ padding: '24px 14px' }}><b>{a}</b><span>{b}</span></div>))}
          </div>
        </div>
      </section>

      <section className="sec softbg">
        <div className="wrap">
          <Head eye="Layanan Unggulan" title="Dua layanan utama untuk keluarga Anda" lead="Pilih layanan yang ingin Anda tanyakan. Tenaga medis kami siap menjelaskan melalui konsultasi." />
          <div className="grid g2">
            <article className="card" data-reveal style={{ padding: 0, overflow: 'hidden' }}>
              <div className="frame" data-par style={{ aspectRatio: '16/10', borderRadius: 0 }}><img src={img.klamp} alt="Alat klamp khitan modern" loading="lazy" /></div>
              <div style={{ padding: '24px 20px 30px' }}><h3 className="h3">Khitan Modern</h3><p>Pilihan metode khitan yang disesuaikan dengan kondisi dan kebutuhan pasien setelah konsultasi.</p><div className="btns"><Link className="btn btn-dark" to="/khitan-modern">Lihat Metode Khitan</Link></div></div>
            </article>
            <article className="card" data-reveal style={{ padding: 0, overflow: 'hidden' }}>
              <div className="frame" data-par style={{ aspectRatio: '16/10', borderRadius: 0 }}><img src={img.tim} alt="Tenaga kesehatan Pondok Khitan Setro" loading="lazy" style={{ objectPosition: 'center 30%' }} /></div>
              <div style={{ padding: '24px 20px 30px' }}><h3 className="h3">Rawat Luka</h3><p>Informasi dan konsultasi layanan rawat luka bersama tenaga kesehatan Pondok Khitan Setro.</p><div className="btns"><Link className="btn btn-dark" to="/rawat-luka">Konsultasi Rawat Luka</Link></div></div>
            </article>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="pinwrap">
            <div className="pinleft" data-pin-left>
              <span className="eyebrow">Pendekatan Kami</span>
              <h2 className="h2">Pelayanan yang tenang, jelas, dan ramah keluarga.</h2>
              <p className="lead">Setiap keluarga punya kebutuhan berbeda. Karena itu kami mengawali dengan konsultasi, bukan langsung tindakan.</p>
            </div>
            <div>
              {[['Konsultasi lebih dulu', 'Sampaikan kebutuhan dan kondisi pasien melalui WhatsApp. Tenaga medis membantu menjelaskan pilihan yang tersedia.', img.k3, 'Tim bersama keluarga pasien'],
                ['Metode sesuai kebutuhan', 'Pilihan metode dibahas bersama keluarga. Ketersediaan metode dan jadwal dikonfirmasi lebih dulu.', img.metode, 'Ilustrasi pilihan metode khitan'],
                ['Dampingan untuk keluarga', 'Keluarga mendapat penjelasan yang mudah dipahami, termasuk informasi umum seputar persiapan dan perawatan.', img.f18, 'Keluarga bersama tim']].map(([t, d, s, a], i) => (
                <div className="pinitem" key={t as string}>
                  <div className={`frame ${i === 1 ? 'contain' : ''}`} data-mask data-par><img src={s as string} alt={a as string} loading="lazy" /></div>
                  <h3 className="h3" style={{ marginTop: 16 }} data-reveal>{t}</h3><p className="lead" style={{ marginTop: 8 }} data-reveal>{d}</p>
                </div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <Head eye="Pilihan Metode" title="Metode khitan modern yang dapat Anda tanyakan" lead="Metode yang tercantum pada materi layanan kami. Ketersediaan dikonfirmasi saat konsultasi." />
          <div className="grid g3">
            {methods.map((m, i) => (<div className="card" key={m.n} data-reveal><div className="num">{i + 1}</div><h3 className="h3">{m.n}</h3></div>))}
          </div>
          <div className="btns" data-reveal><Link className="btn btn-gold" to="/khitan-modern">Selengkapnya tentang Metode</Link></div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head eye="Dokumentasi" title="Momen bersama keluarga pasien" lead="Dokumentasi kegiatan dan pelayanan Pondok Khitan Setro." />
          <Gallery limit={6} filters={false} />
          <div className="btns"><Link className="btn btn-dark" to="/galeri">Lihat Galeri Lengkap</Link></div>
        </div>
      </section>

      <section className="sec softbg">
        <div className="wrap">
          <Head eye="Ulasan Google Maps" title="Apa kata pengunjung" lead="Kutipan ulasan lama yang tercantum di Google Maps. Harga atau promo di dalamnya belum tentu berlaku saat ini." />
          <Testimonials />
          <div className="btns"><Link className="btn btn-dark" to="/ulasan">Lihat Halaman Ulasan</Link></div>
        </div>
      </section>

      <Cta title="Konsultasikan Kebutuhan Khitan dan Perawatan Anda." lead={biz.address} />
    </>
  )
}
