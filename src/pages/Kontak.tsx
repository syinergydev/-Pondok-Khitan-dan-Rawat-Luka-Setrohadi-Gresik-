import { biz, msg, wa } from '../data/site'
import { PageHero, WaBtn, SocialLinks, Disclaimer } from '../components/UI'
import { MailIcon, PinIcon } from '../components/Icons'
import GoogleMap from '../components/GoogleMap'
import { usePageMeta } from '../utils/meta'
export default function Kontak() {
  usePageMeta('Kontak dan Lokasi', 'Hubungi Pondok Khitan dan Rawat Luka Setrohadi di WhatsApp 0856-4838-8636. Alamat: Setrohadi, Duduksampeyan, Gresik.')
  return (<>
    <PageHero eye="Kontak" title="Hubungi Pondok Khitan Setro." lead="Kirim pesan WhatsApp untuk konsultasi. Informasi jam buka 24 jam; jadwal dan ketersediaan tindakan perlu dikonfirmasi terlebih dahulu." />
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap">
      <div className="grid g3" style={{ marginTop: 0 }}>
        <div className="card" data-reveal><PinIcon width={28} height={28} style={{ margin: '0 auto 10px', color: 'var(--g)' }} /><h3 className="h3">Alamat</h3><p>{biz.address}</p></div>
        <div className="card" data-reveal><h3 className="h3">WhatsApp</h3><p><a href={wa(msg.umum)} target="_blank" rel="noopener noreferrer">{biz.phone}</a></p><p>Buka 24 jam (konfirmasi dulu)</p></div>
        <div className="card" data-reveal><MailIcon width={28} height={28} style={{ margin: '0 auto 10px', color: 'var(--g)' }} /><h3 className="h3">Email</h3><p><a href={`mailto:${biz.email}`} style={{ overflowWrap: 'anywhere' }}>{biz.email}</a></p></div>
      </div>
      <div style={{ marginTop: 32 }} data-reveal><GoogleMap /></div>
      <div className="btns">
        <WaBtn text="Hubungi WhatsApp" m={msg.umum} />
        <a className="btn btn-dark" href={biz.maps} target="_blank" rel="noopener noreferrer">Buka Google Maps</a>
        <a className="btn btn-line" href={`mailto:${biz.email}`}>Kirim Email</a>
      </div>
      <div style={{ marginTop: 28 }}><SocialLinks /></div>
      <p className="note">Poster lama mencantumkan Puskesdes Desa Setrohadi sebagai alamat praktik. Alamat resmi di website mengikuti Google Maps.</p>
      <Disclaimer />
    </div></section>
  </>)
}
