import { biz } from '../data/site'
export default function GoogleMap() {
  return (<div className="mapbox"><iframe title="Peta lokasi Pondok Khitan dan Rawat Luka Setrohadi" src={biz.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>)
}
