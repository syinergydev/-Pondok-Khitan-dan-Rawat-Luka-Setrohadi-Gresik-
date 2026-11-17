import { img, flags } from '../data/site'
export const medics = [
  { ini: 'RB', n: 'Rahmad Beni F., S.Kep., Ns.', r: 'Perawat' },
  { ini: 'UL', n: 'Umul Latifah, Amd. Keb.', r: 'Bidan' },
]
export default function CredentialSection() {
  return (
    <>
      <div className="grid g2" style={{ maxWidth: 760, margin: '48px auto 0' }}>
        {medics.map((m) => (
          <div className="card" key={m.n} data-reveal><div className="mono">{m.ini}</div><span className="tag">{m.r}</span><h3 className="h3">{m.n}</h3><p>Tenaga kesehatan Pondok Khitan Setro.</p></div>
        ))}
      </div>
      <div className="frame" data-reveal data-mask style={{ maxWidth: 900, margin: '36px auto 0', aspectRatio: '1050/600' }}>
        <img src={img.kartu} alt="Kartu informasi tenaga kesehatan dan layanan Pondok Khitan Setro" loading="lazy" />
      </div>
      <p className="cap">Kartu informasi tenaga kesehatan dan layanan.</p>
      {flags.memberOfConfirmed && <div className="note">Member Of — organisasi terkonfirmasi.</div>}
    </>
  )
}
