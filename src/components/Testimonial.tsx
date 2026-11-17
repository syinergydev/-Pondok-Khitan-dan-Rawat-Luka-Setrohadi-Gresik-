import { reviews } from '../data/site'
import { Rating } from './UI'
export default function Testimonials() {
  return (
    <div className="grid g3">
      {reviews.map((r) => (
        <figure className="card" key={r.q} data-reveal style={{ margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Rating />
          <blockquote className="quote" style={{ margin: 0 }}>“{r.q}”</blockquote>
          <figcaption className="cap">Ulasan Google Maps (ulasan lama)</figcaption>
        </figure>
      ))}
    </div>
  )
}
