import logoWide from '../assets/logo-wide.webp'
import logoSquare from '../assets/logo-square.webp'
import tim from '../assets/tim.webp'
import klamp from '../assets/klamp.webp'
import metode from '../assets/metode.webp'
import k0 from '../assets/keluarga-0.webp'
import k3 from '../assets/keluarga-3.webp'
import f10 from '../assets/foto-10.webp'
import f15 from '../assets/foto-15.webp'
import f16 from '../assets/foto-16.webp'
import f17 from '../assets/foto-17.webp'
import f18 from '../assets/foto-18.webp'
import f19 from '../assets/foto-19.webp'
import f20 from '../assets/foto-20.webp'
import f21 from '../assets/foto-21.webp'
import f22 from '../assets/foto-22.webp'
import eduManfaat from '../assets/edu-manfaat.webp'
import eduGemuk from '../assets/edu-anak-gemuk.webp'
import eduPipis from '../assets/edu-takut-pipis.webp'
import center from '../assets/layanan-center.webp'
import kartu from '../assets/kartu-kredensial.webp'

export const img = { logoWide, logoSquare, tim, klamp, metode, k0, k3, f10, f15, f16, f17, f18, f19, f20, f21, f22, eduManfaat, eduGemuk, eduPipis, center, kartu }

/** Saklar konfirmasi owner. Ubah ke true setelah owner menyetujui. */
export const flags = {
  showPrices: false,        // tampilkan harga paket (isi `packages` dulu)
  memberOfConfirmed: false, // tampilkan logo/status organisasi (Member Of)
  showPatientPhotos: true,  // set false untuk menyembunyikan foto keluarga/pasien
}
export const packages: { name: string; price: string; perks: string[]; validUntil: string }[] = []

export const biz = {
  name: 'Pondok Khitan dan Rawat Luka Setrohadi',
  brand: 'Pondok Khitan Setro',
  address: 'RGV6+R6M, Maudepo, Setrohadi, Kecamatan Duduksampeyan, Kabupaten Gresik, Jawa Timur 61162',
  phone: '0856-4838-8636',
  email: 'benirahmad85@gmail.com',
  maps: 'https://maps.app.goo.gl/otKqerkp9UKGtfiV9',
  mapsEmbed: 'https://www.google.com/maps?q=RGV6%2BR6M%2C+Setrohadi%2C+Duduksampeyan%2C+Gresik&output=embed',
  ig: 'https://www.instagram.com/khitan_anti_nyeri?psln=MW53OTVnZDhhcDJkMA==',
  fb: 'https://www.facebook.com/share/19v1M6cmDT/',
}
const waNum = '6285648388636'
export const msg = {
  khitan: 'Halo Pondok Khitan Setro, saya ingin bertanya mengenai layanan khitan modern dan pilihan metodenya.',
  luka: 'Halo Pondok Khitan Setro, saya ingin bertanya mengenai layanan rawat luka.',
  home: 'Halo Pondok Khitan Setro, saya ingin menanyakan layanan khitan panggilan ke rumah.',
  umum: 'Halo Pondok Khitan Setro, saya ingin mendapatkan informasi mengenai layanan yang tersedia.',
  harga: 'Halo Pondok Khitan Setro, saya ingin menanyakan harga dan paket khitan.',
}
export const wa = (m: string) => `https://wa.me/${waNum}?text=${encodeURIComponent(m)}`

export const nav = [
  { to: '/', label: 'Beranda' }, { to: '/tentang', label: 'Tentang Kami' }, { to: '/layanan', label: 'Layanan' },
  { to: '/khitan-modern', label: 'Metode Khitan' }, { to: '/rawat-luka', label: 'Rawat Luka' }, { to: '/galeri', label: 'Galeri' },
  { to: '/edukasi', label: 'Edukasi' }, { to: '/kontak', label: 'Kontak' },
]
export const navAll = [...nav.slice(0, 5), { to: '/home-visit', label: 'Home Visit' }, nav[5], nav[6], { to: '/kredensial', label: 'Kredensial' }, { to: '/ulasan', label: 'Ulasan' }, nav[7]]

export const methods = [
  { n: 'Khitan Laser', d: 'Salah satu metode yang tercantum pada materi layanan Pondok Khitan Setro. Penjelasan prosedur dan kecocokannya disampaikan tenaga medis saat konsultasi.', pic: 'metode' },
  { n: 'Smart Klamp', d: 'Metode berbasis alat klamp yang tampil pada dokumentasi layanan. Tenaga medis menjelaskan cara kerja dan kesesuaiannya dengan kondisi pasien.', pic: 'klamp' },
  { n: 'Alis Klamp', d: 'Metode klamp lain yang tercantum pada materi layanan. Informasi lengkap disampaikan saat konsultasi bersama tenaga medis.', pic: 'klamp' },
  { n: 'Combo Sealer', d: 'Metode yang disebut pada materi layanan sebagai pilihan khitan modern. Detail dan ketersediaannya dikonfirmasi saat konsultasi.', pic: 'metode' },
  { n: 'Cetak Lem', d: 'Metode berbasis lem (perekat) yang tercantum pada materi layanan. Kecocokan metode ditentukan setelah konsultasi.', pic: 'metode' },
  { n: 'Tekno Klamp Lem', d: 'Metode yang tercantum pada materi layanan sebagai perpaduan klamp dan lem. Informasi lebih rinci tersedia melalui konsultasi.', pic: 'metode' },
]
export const reviews = [
  { q: 'Khitan Modern (khitan laser, smart klamp, alis klamp dan cetak lem) termurah bisa langsung buktikan...' },
  { q: 'Khitan Lem termurah hanya 1 juta pas... hasil estetik tanpa jahitan tanpa perban... free mainan remot kontrol... mantul' },
  { q: 'Joshw Recomended' },
]
export const disclaimer = 'Informasi pada website ini bersifat umum dan bukan pengganti pemeriksaan atau konsultasi langsung dengan tenaga kesehatan. Jadwal, metode, dan ketersediaan tindakan perlu dikonfirmasi terlebih dahulu melalui WhatsApp.'

export type GItem = { src: string; cat: string; alt: string; ratio: number }
export const gallery: GItem[] = [
  { src: f10, cat: 'Dokumentasi Khitan', alt: 'Keluarga dan tim Pondok Khitan Setro berfoto bersama bayi yang telah dikhitan', ratio: 1.78 },
  { src: tim, cat: 'Tenaga Medis', alt: 'Tim tenaga kesehatan berseragam bedah hijau', ratio: 0.75 },
  { src: f17, cat: 'Keluarga dan Pasien', alt: 'Keluarga pasien berfoto bersama tim di rumah', ratio: 1.2 },
  { src: klamp, cat: 'Metode dan Alat', alt: 'Alat klamp khitan', ratio: 1 },
  { src: f19, cat: 'Keluarga dan Pasien', alt: 'Tim bersama keluarga dan anak', ratio: 0.82 },
  { src: k0, cat: 'Kegiatan', alt: 'Dokumentasi kegiatan di Puskesdes Setrohadi', ratio: 1.37 },
  { src: f15, cat: 'Dokumentasi Khitan', alt: 'Keluarga berfoto bersama tim setelah layanan khitan', ratio: 1.4 },
  { src: f16, cat: 'Keluarga dan Pasien', alt: 'Anak dan keluarga bersama tim', ratio: 1.0 },
  { src: metode, cat: 'Metode dan Alat', alt: 'Ilustrasi pilihan metode khitan modern', ratio: 0.9 },
  { src: f20, cat: 'Keluarga dan Pasien', alt: 'Anak dan keluarga bersama tim', ratio: 1.3 },
  { src: k3, cat: 'Kegiatan', alt: 'Tim bersama keluarga pasien dan bayi', ratio: 2.06 },
  { src: f18, cat: 'Dokumentasi Khitan', alt: 'Keluarga bersama tim di rumah pasien', ratio: 1.5 },
  { src: f21, cat: 'Keluarga dan Pasien', alt: 'Keluarga memegang sertifikat bersama tim', ratio: 1.2 },
  { src: eduManfaat, cat: 'Materi Edukasi', alt: 'Materi edukasi manfaat khitan pada bayi', ratio: 0.7 },
  { src: f22, cat: 'Kegiatan', alt: 'Tim bersama anak dan keluarga', ratio: 1.1 },
  { src: eduPipis, cat: 'Materi Edukasi', alt: 'Materi edukasi untuk orang tua anak yang takut setelah sunat', ratio: 0.9 },
]
export const galleryCats = ['Semua', 'Dokumentasi Khitan', 'Keluarga dan Pasien', 'Tenaga Medis', 'Kegiatan', 'Metode dan Alat', 'Materi Edukasi']

export const articles = [
  { cat: 'Edukasi Khitan', t: 'Hal yang perlu diketahui orang tua sebelum anak menjalani khitan', b: 'Khitan adalah tindakan medis kecil yang tetap memerlukan persiapan. Orang tua dapat menyiapkan pertanyaan, menyampaikan riwayat kesehatan dan alergi anak, serta bertanya tentang metode yang tersedia. Konsultasi lebih dulu membantu keluarga memahami proses dan menentukan jadwal yang sesuai.' },
  { cat: 'Edukasi Khitan', t: 'Informasi umum metode khitan modern', b: 'Metode khitan modern memiliki beragam pendekatan, misalnya berbasis klamp, laser, atau lem. Setiap metode memiliki ketentuan berbeda. Pilihan yang tepat ditentukan tenaga medis berdasarkan kondisi pasien, bukan semata harga atau popularitas.' },
  { cat: 'Edukasi Khitan', t: 'Mengenal Smart Klamp', b: 'Smart Klamp adalah salah satu nama metode berbasis klamp yang tercantum pada materi layanan Pondok Khitan Setro. Tanyakan langsung kepada tenaga medis tentang cara kerja, kecocokan, dan hal yang perlu diperhatikan sebelum memilihnya.' },
  { cat: 'Edukasi Khitan', t: 'Mengenal metode lem', b: 'Metode lem (perekat) termasuk pilihan yang disebut pada materi layanan, seperti Cetak Lem dan Tekno Klamp Lem. Seperti metode lain, kesesuaiannya perlu dinilai tenaga medis saat konsultasi.' },
  { cat: 'Persiapan Khitan', t: 'Persiapan anak sebelum khitan', b: 'Beri penjelasan sederhana kepada anak agar lebih tenang. Pastikan anak dalam kondisi sehat, sampaikan keluhan atau obat yang sedang dikonsumsi, lalu ikuti arahan tenaga medis mengenai hal yang perlu disiapkan pada hari tindakan.' },
  { cat: 'Perawatan Setelah Khitan', t: 'Informasi perawatan setelah khitan', b: 'Perawatan setelah tindakan berbeda-beda sesuai metode dan kondisi pasien. Ikuti petunjuk yang diberikan tenaga medis, dan hubungi klinik jika ada keluhan atau hal yang membuat Anda khawatir.' },
  { cat: 'Edukasi Kesehatan', t: 'Informasi umum tentang khitan bayi', b: 'Khitan pada bayi dilakukan atas pertimbangan keluarga dan penilaian tenaga medis. Orang tua dapat berkonsultasi mengenai usia, kondisi bayi, dan metode yang sesuai sebelum menentukan jadwal.' },
  { cat: 'Edukasi Kesehatan', t: 'Anak dengan kondisi tubuh tertentu: apa yang perlu diperhatikan', b: 'Anak dengan kondisi tubuh tertentu, misalnya bertubuh gemuk, sebaiknya dikonsultasikan lebih dulu agar tenaga medis dapat menilai kebutuhan khusus dan memilih pendekatan yang sesuai.', pic: 'eduGemuk' },
  { cat: 'Informasi Rawat Luka', t: 'Kapan sebaiknya berkonsultasi soal luka', b: 'Jika luka tidak membaik, terasa semakin nyeri, atau disertai tanda yang membuat Anda cemas, konsultasikan dengan tenaga kesehatan. Informasi ini bersifat umum dan bukan diagnosis.' },
]
export const articleCats = ['Semua', 'Edukasi Khitan', 'Persiapan Khitan', 'Perawatan Setelah Khitan', 'Edukasi Kesehatan', 'Informasi Rawat Luka']
