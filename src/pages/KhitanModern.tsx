import { img, msg, methods } from '../data/site'
import { PageHero, Head, Cta, FAQ, Steps, MethodCard, Price, WaBtn } from '../components/UI'
import { usePageMeta } from '../utils/meta'
export default function KhitanModern() {
  usePageMeta('Khitan Modern', 'Pilihan metode khitan modern di Pondok Khitan Setro, Setrohadi, Gresik: Khitan Laser, Smart Klamp, Alis Klamp, Combo Sealer, Cetak Lem, Tekno Klamp Lem.')
  return (<>
    <PageHero eye="Khitan Modern" title="Pilihan Khitan Modern dengan Pendekatan yang Memperhatikan Kenyamanan Pasien." lead="Metode ditentukan bersama tenaga medis setelah konsultasi, sesuai kondisi dan kebutuhan pasien.">
      <div className="btns"><WaBtn text="Tanya Metode Khitan" m={msg.khitan} /></div>
    </PageHero>
    <section className="sec"><div className="wrap">
      <Head eye="Pengenalan" title="Khitan dimulai dari konsultasi" lead="Setiap anak berbeda. Konsultasi membantu keluarga memahami pilihan yang tersedia, sebelum menentukan metode dan jadwal." />
      <div className="grid g2" style={{ maxWidth: 900, margin: '44px auto 0' }}>
        <div><div className="frame" data-mask data-par style={{ aspectRatio: '1' }}><img src={img.klamp} alt="Alat klamp yang digunakan pada sebagian metode khitan" loading="lazy" /></div><p className="cap">Alat klamp, salah satu perangkat pada metode berbasis klamp.</p></div>
        <div><div className="frame contain" data-mask style={{ aspectRatio: '1' }}><img src={img.metode} alt="Ilustrasi pilihan metode khitan modern" loading="lazy" /></div><p className="cap">Ilustrasi pilihan metode dari materi layanan.</p></div>
      </div>
    </div></section>
    <section className="sec softbg"><div className="wrap">
      <Head eye="Pilihan Metode" title="Enam metode yang tercantum pada materi layanan" lead="Ketersediaan tiap metode dikonfirmasi saat konsultasi. Kami tidak membandingkan keamanan antar-metode; tenaga medis yang menilai kecocokannya." />
      <div className="grid g3">{methods.map((_, i) => <MethodCard i={i} key={i} />)}</div>
    </div></section>
    <section className="sec"><div className="wrap">
      <Head eye="Proses Konsultasi" title="Empat langkah menuju jadwal" />
      <Steps items={[['Hubungi kami', 'Kirim pesan WhatsApp dan sampaikan usia serta kebutuhan pasien.'], ['Konsultasi', 'Tenaga medis menjelaskan pilihan metode yang tersedia.'], ['Tentukan jadwal', 'Jadwal dan lokasi disepakati bersama keluarga.'], ['Pelayanan', 'Tindakan dilakukan sesuai kesepakatan dan arahan tenaga medis.']]} />
    </div></section>
    <section className="sec softbg"><div className="wrap">
      <div className="grid g2" style={{ marginTop: 0, alignItems: 'start' }}>
        <div className="card" data-reveal><h3 className="h3">Persiapan sebelum khitan</h3><p>Siapkan pertanyaan Anda, sampaikan riwayat kesehatan, alergi, dan obat yang sedang dikonsumsi anak, lalu ikuti arahan tenaga medis untuk hari tindakan.</p></div>
        <div className="card" data-reveal><h3 className="h3">Perawatan setelah khitan</h3><p>Perawatan berbeda sesuai metode dan kondisi pasien. Ikuti petunjuk tenaga medis, dan hubungi kami bila ada keluhan atau hal yang membuat Anda khawatir.</p></div>
      </div>
    </div></section>
    <section className="sec"><div className="wrap">
      <Head eye="Harga dan Paket" title="Informasi harga disampaikan saat konsultasi" />
      <div style={{ marginTop: 40 }}><Price /></div>
    </div></section>
    <section className="sec softbg"><div className="wrap">
      <Head eye="FAQ" title="Pertanyaan yang sering diajukan" />
      <FAQ items={[
        ['Metode mana yang paling cocok?', 'Itu ditentukan tenaga medis setelah konsultasi, berdasarkan kondisi dan kebutuhan pasien.'],
        ['Apakah bisa khitan panggilan ke rumah?', 'Materi layanan kami menyebut layanan panggilan ke rumah. Ketersediaan lokasi dan jadwal perlu dikonfirmasi lebih dulu.'],
        ['Berapa biayanya?', 'Biaya dan paket disampaikan saat konsultasi melalui WhatsApp agar informasinya selalu terbaru.'],
        ['Apakah ada risiko?', 'Setiap tindakan medis memiliki risiko. Tenaga medis akan menjelaskannya saat konsultasi.'],
      ]} />
    </div></section>
    <Cta title="Konsultasikan pilihan metode khitan untuk anak Anda." m={msg.khitan} />
  </>)
}
