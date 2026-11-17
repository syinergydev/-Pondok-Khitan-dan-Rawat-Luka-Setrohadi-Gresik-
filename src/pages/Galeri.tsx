import { PageHero, Cta } from '../components/UI'
import Gallery from '../components/Gallery'
import { usePageMeta } from '../utils/meta'
export default function Galeri() {
  usePageMeta('Galeri Dokumentasi', 'Galeri dokumentasi kegiatan dan pelayanan Pondok Khitan Setro, Setrohadi, Gresik.')
  return (<>
    <PageHero eye="Galeri" title="Dokumentasi kegiatan dan pelayanan." lead="Pilih kategori untuk melihat foto. Ketuk foto untuk memperbesar." />
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap"><Gallery /></div></section>
    <Cta title="Ingin berkonsultasi bersama kami?" />
  </>)
}
