import { img, msg } from '../data/site'
import { PageHero, Head, Cta, Steps, WaBtn } from '../components/UI'
import { usePageMeta } from '../utils/meta'
export default function HomeVisit() {
  usePageMeta('Khitan Panggilan ke Rumah', 'Tanyakan layanan khitan panggilan ke rumah dari Pondok Khitan Setro, Setrohadi, Gresik. Ketersediaan lokasi dan jadwal dikonfirmasi lebih dulu.')
  return (<>
    <PageHero eye="Home Visit" title="Layanan Khitan Panggilan ke Rumah." lead="Materi layanan kami menyebut khitan panggilan ke rumah. Tanyakan ketersediaan lokasi, jadwal, dan metode lebih dulu.">
      <div className="btns"><WaBtn text="Tanyakan Home Visit" m={msg.home} /></div>
    </PageHero>
    <section className="sec"><div className="wrap">
      <Head eye="Alur" title="Lima langkah menanyakan layanan" />
      <Steps items={[['Hubungi kami', 'Kirim pesan ke WhatsApp Pondok Khitan Setro.'], ['Sampaikan kebutuhan', 'Informasikan kebutuhan dan lokasi Anda.'], ['Konfirmasi', 'Tim mengonfirmasi layanan dan ketersediaan.'], ['Sepakati jadwal', 'Jadwal ditentukan bersama keluarga.'], ['Pelayanan', 'Dilakukan sesuai kesepakatan dan arahan tenaga medis.']]} />
      <p className="note">Kami tidak menjanjikan semua wilayah dapat dilayani. Ketersediaan bergantung pada lokasi dan jadwal.</p>
    </div></section>
    <section className="sec softbg"><div className="wrap">
      <div className="grid g2" style={{ marginTop: 0, alignItems: 'center' }}>
        <div className="frame" data-mask data-par style={{ aspectRatio: '4/3' }}><img src={img.f17} alt="Tim bersama keluarga pasien di rumah" loading="lazy" /></div>
        <div className="frame contain" data-mask style={{ aspectRatio: '4/3' }}><img src={img.center} alt="Materi layanan khitan center modern dengan informasi layanan panggilan ke rumah" loading="lazy" /></div>
      </div>
      <p className="cap">Dokumentasi pelayanan dan materi informasi layanan.</p>
    </div></section>
    <Cta title="Tanyakan layanan khitan panggilan ke rumah." m={msg.home} />
  </>)
}
