import { img, msg } from '../data/site'
import { PageHero, Head, Cta, FAQ, Steps, WaBtn } from '../components/UI'
import { usePageMeta } from '../utils/meta'
export default function RawatLuka() {
  usePageMeta('Rawat Luka', 'Informasi layanan rawat luka di Pondok Khitan Setro, Setrohadi, Gresik. Konsultasikan kondisi luka Anda melalui WhatsApp.')
  return (<>
    <PageHero eye="Rawat Luka" title="Informasi Layanan Rawat Luka di Pondok Khitan Setro." lead="Konsultasikan kondisi Anda dengan tenaga kesehatan kami untuk mengetahui apakah dan bagaimana kami dapat membantu.">
      <div className="btns"><WaBtn text="Konsultasi Rawat Luka" m={msg.luka} /></div>
    </PageHero>
    <section className="sec"><div className="wrap">
      <Head eye="Pengenalan" title="Rawat luka bersama tenaga kesehatan" lead="Layanan rawat luka tercantum pada identitas Pondok Khitan dan Rawat Luka Setrohadi. Kami tidak memberikan diagnosis melalui website; penilaian dilakukan langsung oleh tenaga kesehatan." />
      <div className="frame" data-mask data-par style={{ maxWidth: 520, margin: '44px auto 0', aspectRatio: '3/4' }}><img src={img.tim} alt="Tenaga kesehatan Pondok Khitan Setro" loading="lazy" /></div>
      <p className="cap">Dokumentasi tim tenaga kesehatan.</p>
    </div></section>
    <section className="sec softbg"><div className="wrap">
      <Head eye="Alur" title="Cara menghubungi tenaga medis" />
      <Steps items={[['Hubungi kami', 'Kirim pesan WhatsApp untuk menanyakan layanan rawat luka.'], ['Ceritakan kondisi', 'Sampaikan keluhan secara singkat agar tenaga kesehatan memahami kebutuhan Anda.'], ['Konfirmasi jadwal', 'Kami mengonfirmasi jadwal dan ketersediaan layanan.'], ['Pemeriksaan langsung', 'Tenaga kesehatan menilai kondisi dan menjelaskan langkah yang sesuai.']]} />
    </div></section>
    <section className="sec"><div className="wrap">
      <Head eye="FAQ" title="Pertanyaan umum" />
      <FAQ items={[
        ['Luka apa saja yang bisa ditangani?', 'Jenis luka yang dapat dibantu perlu dikonfirmasi langsung dengan tenaga kesehatan. Kami tidak mengklaim semua jenis luka dapat ditangani.'],
        ['Apakah bisa konsultasi lewat WhatsApp?', 'Bisa untuk pertanyaan awal. Penilaian kondisi tetap memerlukan pemeriksaan langsung.'],
        ['Kapan harus segera ke fasilitas kesehatan?', 'Jika luka memburuk atau Anda khawatir, segera periksakan ke tenaga kesehatan atau fasilitas kesehatan terdekat.'],
      ]} />
    </div></section>
    <Cta title="Konsultasikan kondisi luka Anda dengan tenaga kesehatan." m={msg.luka} />
  </>)
}
