import { img } from '../data/site'
import { PageHero, Head, Cta } from '../components/UI'
import CredentialSection from '../components/Credential'
import { usePageMeta } from '../utils/meta'
export default function Tentang() {
  usePageMeta('Tentang Kami', 'Mengenal Pondok Khitan Setro, layanan khitan modern dan rawat luka di Setrohadi, Duduksampeyan, Gresik, beserta tenaga kesehatannya.')
  return (<>
    <PageHero eye="Tentang Kami" title="Mengenal Pondok Khitan Setro" lead="Pondok Khitan Setro merupakan layanan khitan modern dan rawat luka yang berlokasi di Setrohadi, Kecamatan Duduksampeyan, Kabupaten Gresik." />
    <section className="sec"><div className="wrap">
      <Head eye="Profil" title="Layanan kesehatan yang dekat dengan masyarakat" lead="Kami melayani khitan modern, rawat luka, dan menerima pertanyaan seputar khitan panggilan ke rumah. Setiap layanan diawali dengan konsultasi agar keluarga memahami pilihan yang ada." />
      <div className="frame" data-mask data-par style={{ maxWidth: 960, margin: '44px auto 0', aspectRatio: '16/9' }}><img src={img.k3} alt="Tim Pondok Khitan Setro bersama keluarga pasien" loading="lazy" /></div>
    </div></section>
    <section className="sec softbg"><div className="wrap">
      <Head eye="Filosofi Pelayanan" title="Nyaman bagi pasien, tenang bagi keluarga" />
      <div className="grid g3">
        {[['Ramah', 'Pendekatan yang hangat kepada anak dan orang tua.'], ['Informatif', 'Penjelasan yang mudah dipahami sebelum keluarga memutuskan.'], ['Terbuka', 'Konsultasi lebih dulu via WhatsApp, kapan pun Anda butuh bertanya.']].map(([t, d]) => (<div className="card" key={t} data-reveal><h3 className="h3">{t}</h3><p>{d}</p></div>))}
      </div>
    </div></section>
    <section className="sec"><div className="wrap">
      <Head eye="Tenaga Medis" title="Tenaga kesehatan Pondok Khitan Setro" lead="Nama dan gelar sesuai kartu informasi tenaga kesehatan." />
      <CredentialSection />
      <div className="frame" data-mask data-par style={{ maxWidth: 520, margin: '44px auto 0', aspectRatio: '3/4' }}><img src={img.tim} alt="Dokumentasi tim tenaga kesehatan" loading="lazy" /></div>
      <p className="cap">Dokumentasi tim tenaga kesehatan.</p>
    </div></section>
    <Cta title="Ada yang ingin Anda tanyakan tentang layanan kami?" />
  </>)
}
