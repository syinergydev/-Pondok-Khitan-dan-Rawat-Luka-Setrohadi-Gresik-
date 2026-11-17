import { PageHero, Cta } from '../components/UI'
import CredentialSection from '../components/Credential'
import { usePageMeta } from '../utils/meta'
export default function Kredensial() {
  usePageMeta('Kredensial Tenaga Kesehatan', 'Informasi tenaga kesehatan Pondok Khitan Setro: Perawat Rahmad Beni F., S.Kep., Ns. dan Bidan Umul Latifah, Amd. Keb.')
  return (<>
    <PageHero eye="Kredensial" title="Tenaga kesehatan dan kredensial profesional." lead="Informasi tenaga kesehatan sesuai kartu informasi yang kami miliki." />
    <section className="sec" style={{ paddingTop: 0 }}><div className="wrap"><CredentialSection /></div></section>
    <Cta title="Ingin mengenal lebih jauh tim kami?" />
  </>)
}
