import { useState } from 'react'
import { articles, articleCats, img } from '../data/site'
import { PageHero, Cta, Disclaimer } from '../components/UI'
import { usePageMeta } from '../utils/meta'
export default function Edukasi() {
  usePageMeta('Edukasi Khitan dan Kesehatan', 'Artikel edukasi umum seputar khitan, persiapan, perawatan setelah khitan, dan informasi rawat luka dari Pondok Khitan Setro.')
  const [cat, setCat] = useState('Semua')
  const list = cat === 'Semua' ? articles : articles.filter((a) => a.cat === cat)
  return (<>
    <PageHero eye="Edukasi" title="Informasi yang mudah dipahami untuk orang tua." lead="Artikel umum seputar khitan dan kesehatan. Isi bersifat informatif dan akan ditinjau tenaga medis sebelum dipublikasikan." />
    <section className="sec"><div className="wrap">
      <div className="filters" style={{ marginTop: 0 }}>{articleCats.map((c) => <button key={c} className={c === cat ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}</div>
      <div className="grid g3" style={{ marginTop: 32 }}>
        {list.map((a) => (
          <article className="card" key={a.t} data-reveal style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="tag" style={{ alignSelf: 'center' }}>{a.cat}</span>
            <h3 className="h3">{a.t}</h3>
            <p>{a.b}</p>
          </article>))}
      </div>
      <div className="grid g3" style={{ marginTop: 40 }}>
        {[[img.eduManfaat, 'Materi edukasi tentang khitan pada bayi'], [img.eduGemuk, 'Materi edukasi untuk anak yang perlu penanganan khusus saat sunat'], [img.eduPipis, 'Materi edukasi untuk orang tua anak yang takut setelah sunat']].map(([s, a]) => (
          <div key={a} data-reveal><div className="frame contain" style={{ aspectRatio: '3/4' }}><img src={s} alt={a} loading="lazy" /></div><p className="cap">Materi edukasi Pondok Khitan Setro (untuk ditinjau tenaga medis)</p></div>))}
      </div>
      <Disclaimer />
    </div></section>
    <Cta title="Punya pertanyaan lain? Tanyakan langsung." />
  </>)
}
