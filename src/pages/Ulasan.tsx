import { PageHero, Head, Rating, MapBtn, Cta } from '../components/UI'
import Testimonials from '../components/Testimonial'
import { usePageMeta } from '../utils/meta'
export default function Ulasan() {
  usePageMeta('Ulasan Google Maps', 'Rating Google Maps 5,0 dari 5 ulasan untuk Pondok Khitan dan Rawat Luka Setrohadi.')
  return (<>
    <PageHero eye="Ulasan" title="Ulasan dari Google Maps." lead="Rating 5,0 dari 5 ulasan di Google Maps." />
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap">
      <div className="card narrow" data-reveal><Rating /><div className="h2">5,0</div><p>5 ulasan Google Maps</p><div style={{ marginTop: 16 }}><MapBtn cls="btn-dark" /></div></div>
      <Head title="Kutipan ulasan" lead="Ulasan di bawah adalah ulasan lama. Harga dan promo yang disebut di dalamnya belum tentu berlaku saat ini; tanyakan harga terbaru melalui WhatsApp." />
      <Testimonials />
    </div></section>
    <Cta title="Ingin tahu lebih banyak sebelum memutuskan?" />
  </>)
}
