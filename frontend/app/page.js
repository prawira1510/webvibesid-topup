'use client';

import { useState, useRef, useEffect } from 'react';

// ==========================================
// KOMPONEN IKON VEKTOR SVG (CLEAN & MODERN)
// ==========================================
function IconGamepad({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12h.01M18 12h.01M9 10v4m-2-2h4m-5 8h12a3 3 0 003-3V7a3 3 0 00-3-3H6a3 3 0 00-3 3v10a3 3 0 003 3z" />
    </svg>
  );
}

function IconTicket({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  );
}

function IconSmartphone({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function IconZap({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function IconReceipt({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4m-6 8h8a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v14l3-2 2 2 2-2 3 2z" />
    </svg>
  );
}

function IconShieldCheck({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function IconClock({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconCheck({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconAlertCircle({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconInfo({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconCopy({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function IconSearch({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function IconClose({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconYoutube({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function IconTiktok({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function IconSparkles({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
    </svg>
  );
}

function IconHeadphones({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M3 18a3 3 0 003 3h1a2 2 0 002-2v-3a2 2 0 00-2-2H4a1 1 0 00-1 1zm18 0a3 3 0 01-3 3h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3a1 1 0 011 1z" />
    </svg>
  );
}

function IconRadio({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.828a5 5 0 010-7.072m7.072 0a5 5 0 010 7.072M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
  );
}

function IconNewspaper({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  );
}

function IconExternalLink({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}


// ==========================================
// KOMPONEN UTAMA
// ==========================================
export default function WebVibesIDDigitalStore() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [selectedVoucherDenom, setSelectedVoucherDenom] = useState(null);
  const [voucherEmail, setVoucherEmail] = useState('');
  
  // State Toast Notification (Menggantikan alert bawaan)
  const [toast, setToast] = useState({ show: false, message: '', type: 'info' });
  const toastTimerRef = useRef(null);

  const showToast = (message, type = 'info') => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast({ show: true, message, type });
    toastTimerRef.current = setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3800);
  };

  // State Pencarian & Filter Game
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGameTab, setActiveGameTab] = useState('Semua');

  // State Verifikasi Akun Game
  const [gameId, setGameId] = useState('');
  const [serverId, setServerId] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedAccount, setVerifiedAccount] = useState(null);

  // State Tab Khusus MLBB & Magic Chess Go Go
  const [gameSubTab, setGameSubTab] = useState('Diamonds');

  // State Pulsa & Data
  const [phoneNumber, setPhoneNumber] = useState('');
  const [detectedOperator, setDetectedOperator] = useState(null);
  const [pulsaTab, setPulsaTab] = useState('Pulsa');

  // State PPOB
  const [plnId, setPlnId] = useState('');
  const [plnCustomerData, setPlnCustomerData] = useState(null);
  const [indihomeId, setIndihomeId] = useState('');
  const [indihomeData, setIndihomeData] = useState(null);

  // Form State Detail Transaksi & Alur Pembayaran
  const [selectedDenom, setSelectedDenom] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState('QRIS');
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  // State Alur Pembayaran & Sukses
  const [checkoutStep, setCheckoutStep] = useState('form');
  const [activeInvoice, setActiveInvoice] = useState(null);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [generatedTokenCode, setGeneratedTokenCode] = useState('');
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  // State Modal Pembaca Berita Penuh
  const [selectedArticle, setSelectedArticle] = useState(null);

  // STATE KEAMANAN ADMIN (PIN RAHASIA)
  const [adminPinInput, setAdminPinInput] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const ADMIN_SECRET_PIN = '1510';

  // State Pengaturan Harga Admin untuk WDP & Twilight Pass
  const [adminPrices, setAdminPrices] = useState({
    mlbb_wdp: 28000,
    mlbb_tp: 150000,
    mcgogo_wdp: 28000,
  });
  const [editWdpMlbb, setEditWdpMlbb] = useState('28000');
  const [editTpMlbb, setEditTpMlbb] = useState('150000');

  // LOGIKA TRIPLE CLICK RAHASIA PADA LOGO
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef(null);
  const [invoiceSequence, setInvoiceSequence] = useState(0);

  const handleLogoClick = () => {
    clickCountRef.current += 1;
    if (clickCountRef.current === 1) {
      clickTimerRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 600);
    } else if (clickCountRef.current === 3) {
      clearTimeout(clickTimerRef.current);
      clickCountRef.current = 0;
      setCurrentView('admin-promo');
      showToast('Mode Pengaturan Admin Diaktifkan', 'info');
    }
  };

  // DATABASE PROMO & VOUCHER
  const [promoList, setPromoList] = useState([
    { id: 1, title: 'Diskon Spesial Top-Up Game', code: 'HEMAT10', discountValue: 5000, targetCategory: 'Top-Up Game', desc: 'Potongan langsung Rp5.000 untuk transaksi game populer.', tag: 'Game', bg: 'from-blue-600/30 to-indigo-900/50' },
    { id: 2, title: 'Cashback Pulsa & Data Hemat', code: 'PULSAHEMAT', discountValue: 3000, targetCategory: 'Pulsa & Paket Data', desc: 'Potongan langsung untuk pengisian pulsa dan paket internet.', tag: 'Pulsa', bg: 'from-purple-600/30 to-indigo-900/50' },
    { id: 3, title: 'Diskon Token PLN & PPOB', code: 'PLNGACOR', discountValue: 5000, targetCategory: 'Token PLN', desc: 'Hemat bayar token listrik dan tagihan bulanan.', tag: 'PLN', bg: 'from-emerald-600/30 to-teal-900/50' },
  ]);

  const [newPromoTitle, setNewPromoTitle] = useState('');
  const [newPromoCode, setNewPromoCode] = useState('');
  const [newPromoDisc, setNewPromoDisc] = useState('');
  const [newPromoCategory, setNewPromoCategory] = useState('Top-Up Game');
  const [newPromoDesc, setNewPromoDesc] = useState('');

  // DATABASE BERITA TERKINI MASYARAKAT INDONESIA (KOMPAS, CNN INDONESIA, DETIK, ANTARA)
  const newsArticles = [
    {
      id: 'kompas-subsidi-warga',
      source: 'Kompas.com',
      sourceChannel: 'Kompas Tren & Sosial',
      sourceBadge: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
      sourceUrl: 'https://www.kompas.com',
      title: 'Pemerintah Perluas Stimulus Listrik dan Subsidi Paket Internet Murah bagi Warga dan Pelajar',
      category: 'Sosial & Edukasi',
      date: '21 September 2026',
      readTime: '3 Menit Baca',
      author: 'Tim Liputan Khusus Kompas.com',
      summary: 'Kementerian ESDM dan Kominfo berkolaborasi menyalurkan program subsidi tarif listrik rumah tangga serta kuota internet hemat untuk mendukung kegiatan belajar dan UMKM.',
      content: [
        'JAKARTA, KOMPAS.com — Pemerintah melalui kementerian terkait mengumumkan perluasan program bantuan keringanan tarif listrik untuk golongan rumah tangga 450 VA dan 900 VA bersubsidi, serta alokasi paket internet hemat bagi pelajar dan pelaku usaha mikro di berbagai daerah pelosok.',
        'Menurut pantauan jurnalis Kompas.com di sejumlah wilayah, program ini disambut antusias oleh masyarakat karena mampu menekan pengeluaran rutin bulanan hingga 30 persen di tengah penyesuaian harga kebutuhan pokok.',
        'Warga yang berhak menerima subsidi dapat melakukan pengecekan nomor meter dan klaim stimulus secara langsung melalui saluran resmi atau melalui platform mitra aggregator digital yang telah terintegrasi dengan data DTKS Kemensos.',
        'Pelanggan WebVibes ID juga dapat dengan mudah melakukan pengisian token listrik dan pembelian paket data bersubsidi kapan saja dengan sistem verifikasi identitas meteran yang transparan dan bebas potongan tersembunyi.'
      ]
    },
    {
      id: 'cnn-transaksi-qris-warga',
      source: 'CNN Indonesia',
      sourceChannel: 'CNN Sosial & Ekonomi Warga',
      sourceBadge: 'bg-red-500/20 text-red-300 border-red-500/30',
      sourceUrl: 'https://www.cnnindonesia.com',
      title: 'Kisah Pedagang dan Warga Pasar Tradisional yang Kini Terbiasa Transaksi Serba Digital',
      category: 'Masyarakat & Ekonomi',
      date: '20 September 2026',
      readTime: '4 Menit Baca',
      author: 'Biro Liputan Humaniora CNN Indonesia',
      summary: 'Adopsi pembayaran digital berbasis barcode QRIS dan e-wallet kian melekat dalam kehidupan sehari-hari masyarakat perkotaan hingga pelosok pedesaan.',
      content: [
        'Jakarta, CNN Indonesia — Pemandangan stiker barcode QRIS kini tak hanya dijumpai di mal mewah, melainkan telah menjadi pemandangan lumrah di warung kelontong, kios sayur pasar tradisional, hingga loket pembayaran tagihan lingkungan tingkat RT/RW.',
        'Survei independen perbankan nasional mencatat bahwa lebih dari 65 persen transaksi harian masyarakat Indonesia kini beralih ke non-tunai. Fleksibilitas pembayaran menggunakan DANA, GoPay, OVO, dan transfer mobile banking dinilai jauh lebih praktis dan aman dari risiko uang palsu maupun kehilangan kembalian.',
        'Masyarakat juga semakin terbiasa membeli pulsa darurat, kuota belajar anak, dan pembayaran token listrik secara mandiri dari smartphone tanpa harus keluar rumah di malam hari.',
        'Platform digital seperti WebVibes ID terus memperluas jaringan pembayaran QRIS real-time yang dapat diakses oleh seluruh nasabah bank dan pengguna e-wallet di tanah air dengan konfirmasi instan dalam hitungan detik.'
      ]
    },
    {
      id: 'detik-waspada-penipuan-bansos',
      source: 'Detik.com',
      sourceChannel: 'detikNews Warga',
      sourceBadge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      sourceUrl: 'https://news.detik.com',
      title: 'Waspada Modus Tautan Palsu Bantuan Sosial & Kuota Gratis, Aparat Imbau Warga Berhati-Hati',
      category: 'Keamanan Warga',
      date: '19 September 2026',
      readTime: '3 Menit Baca',
      author: 'Redaksi Investigasi detikNews',
      summary: 'Aparat penegak hukum dan Dinas Sosial mengingatkan warga agar tidak mudah tergiur pesan SMS berantai yang mengklaim hadiah pulsa atau bantuan pemerintah palsu.',
      content: [
        'Jakarta, detikNews — Modus penipuan online kembali marak menyasar kalangan masyarakat umum. Pelaku kerap menyebarkan pesan singkat (SMS) atau pesan berantai WhatsApp yang menjanjikan bantuan saldo bansos, token gratis dari PLN, atau kuota internet cuma-cuma dengan mencantumkan tautan berbahaya.',
        'Warga yang terkecoh dan mengklik tautan tersebut sering kali diminta memasukkan data KTP, kode OTP perbankan, atau nomor kartu ATM yang berujung pada pengurasan saldo tabungan pribadi.',
        '"Pemerintah dan BUMN resmi tidak pernah meminta kode OTP atau mentransfer dana dengan syarat biaya tebusan di muka. Kami meminta warga untuk selalu memverifikasi setiap informasi ke kantor desa atau kelurahan setempat," ujar pejabat berwenang kepada detikNews.',
        'Untuk kebutuhan transaksi digital seperti token listrik dan pulsa, warga disarankan menggunakan layanan yang terbukti aman, kredibel, dan tidak pernah meminta data pribadi rahasia seperti yang diterapkan oleh WebVibes ID.'
      ]
    },
    {
      id: 'antara-pln-musim-hujan',
      source: 'Antara News',
      sourceChannel: 'Antara Layanan Masyarakat',
      sourceBadge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      sourceUrl: 'https://www.antaranews.com',
      title: 'PLN Siagakan Ribuan Personel Jaga Pasokan Listrik Warga Menjelang Musim Penghujan',
      category: 'Pelayanan Publik',
      date: '18 September 2026',
      readTime: '2 Menit Baca',
      author: 'Koresponden LKBN Antara',
      summary: 'Pengecekan jaringan kabel transmisi dan kesiapan gardu distribusi listrik dilakukan serentak demi menjamin kenyamanan aktivitas rumah tangga warga.',
      content: [
        'Jakarta, LKBN ANTARA — PT PLN (Persero) menyiagakan ribuan petugas pelayanan teknik (Yantek) di seluruh unit induk wilayah guna mengantisipasi gangguan jaringan listrik akibat cuaca ekstrem dan intensitas hujan lebat yang mulai meningkat.',
        'Selain pemangkasan dahan pohon di dekat jalur kabel udara, PLN juga memperkuat sistem otomatisasi proteksi gardu agar jika terjadi gangguan lokal, pemulihan aliran listrik ke rumah warga dapat dilakukan secara cepat dan terisolasi.',
        'Masyarakat diimbau untuk segera melaporkan potensi bahaya listrik seperti kabel terkelupas atau tiang miring, serta memastikan meteran prabayar di rumah masing-masing terisi pulsa token yang cukup agar tidak kehabisan daya saat cuaca buruk.',
        'WebVibes ID siap melayani pengisian token listrik PLN prabayar kapan pun selama 24 jam nonstop dengan sistem terbit otomatis yang andal di segala kondisi cuaca.'
      ]
    }
  ];

  // DAFTAR SIARAN LANGSUNG PARA GAMERS & STREAMER POPULER
  const gamerStreamsList = [
    {
      id: 'stream-windah',
      streamer: 'Windah Basudara',
      platform: 'YouTube Gaming',
      game: 'Genshin Impact & Stumble Guys',
      title: 'Live Charity & Mabar Bar-Bar Bareng Bocil Kematian!',
      viewers: '52.4rb Penonton',
      status: 'live',
      tag: 'LIVE SEKARANG',
      avatar: '/logo Genshin Impact.jpg',
      badgePlatform: 'YouTube',
      url: 'https://www.youtube.com',
      gradient: 'from-red-600/30 via-slate-900/50 to-[#0A1F3D]',
    },
    {
      id: 'stream-jess',
      streamer: 'Jess No Limit',
      platform: 'YouTube Gaming',
      game: 'Mobile Legends: Bang Bang',
      title: 'Push Rank Mythical Immortal Solo S35 + Borong Skin',
      viewers: '41.8rb Penonton',
      status: 'live',
      tag: 'LIVE SEKARANG',
      avatar: '/logo MLBB.jpg',
      badgePlatform: 'YouTube',
      url: 'https://www.youtube.com',
      gradient: 'from-blue-600/30 via-slate-900/50 to-[#0A1F3D]',
    },
    {
      id: 'stream-lemon',
      streamer: 'RRQ Lemon',
      platform: 'YouTube Gaming',
      game: 'Mobile Legends: Bang Bang',
      title: 'Mage Rahasia Patch Baru: Pembuktian Build One Shot Kill',
      viewers: '28.1rb Penonton',
      status: 'live',
      tag: 'LIVE SEKARANG',
      avatar: '/logo MLBB.jpg',
      badgePlatform: 'YouTube',
      url: 'https://www.youtube.com',
      gradient: 'from-amber-600/30 via-slate-900/50 to-[#0A1F3D]',
    },
    {
      id: 'stream-deankt',
      streamer: 'DeanKT (Mas Dean)',
      platform: 'TikTok Live',
      game: 'Valorant & Delta Force PC',
      title: 'Nongkrong Santai Sambil Bantai Lobi Valorant Radian',
      viewers: '33.2rb Penonton',
      status: 'live',
      tag: 'LIVE SEKARANG',
      avatar: '/logo valorant.jpg',
      badgePlatform: 'TikTok',
      url: 'https://www.tiktok.com',
      gradient: 'from-pink-600/30 via-purple-900/40 to-[#0A1F3D]',
    },
    {
      id: 'stream-emperor',
      streamer: 'Jonathan Liandi (Emperor)',
      platform: 'YouTube Gaming',
      game: 'Mobile Legends: Bang Bang',
      title: 'Mabar Ranked Gusion & Review Patch Bareng Pro Player',
      viewers: '24.9rb Penonton',
      status: 'live',
      tag: 'LIVE SEKARANG',
      avatar: '/logo MLBB.jpg',
      badgePlatform: 'YouTube',
      url: 'https://www.youtube.com',
      gradient: 'from-blue-600/30 via-slate-900/50 to-[#0A1F3D]',
    },
    {
      id: 'stream-ryzen',
      streamer: 'BTR Ryzen',
      platform: 'YouTube Gaming',
      game: 'PUBG Mobile',
      title: 'Scrim Turnamen Malam & Bantai Map Erangel Squad',
      viewers: '18.7rb Penonton',
      status: 'live',
      tag: 'LIVE SEKARANG',
      avatar: '/logo pubgm.jpg',
      badgePlatform: 'YouTube',
      url: 'https://www.youtube.com',
      gradient: 'from-orange-600/30 via-slate-900/50 to-[#0A1F3D]',
    },
    {
      id: 'stream-frontal',
      streamer: 'Frontal Gaming',
      platform: 'TikTok Live',
      game: 'Free Fire MAX',
      title: 'By One Shotgun Rusher Fast Hand + Giveaway Diamond',
      viewers: '29.3rb Penonton',
      status: 'live',
      tag: 'LIVE SEKARANG',
      avatar: '/logo garena FF.jpg',
      badgePlatform: 'TikTok',
      url: 'https://www.tiktok.com',
      gradient: 'from-cyan-600/30 via-slate-900/50 to-[#0A1F3D]',
    },
    {
      id: 'stream-miawaug',
      streamer: 'MiawAug',
      platform: 'YouTube Gaming',
      game: 'Roblox & Petualangan',
      title: 'Mabar Roblox Mini Games & Ngakak Bareng Temen-Temen',
      viewers: '35.6rb Penonton',
      status: 'live',
      tag: 'LIVE SEKARANG',
      avatar: '/logo roblox.jpg',
      badgePlatform: 'YouTube',
      url: 'https://www.youtube.com',
      gradient: 'from-emerald-600/30 via-slate-900/50 to-[#0A1F3D]',
    },
  ];

  const liveStreamsList = gamerStreamsList;


  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPinInput === ADMIN_SECRET_PIN) {
      setIsAdminAuthenticated(true);
      setAdminPinInput('');
      showToast('Login Admin Berhasil! Selamat datang di panel pengaturan.', 'success');
    } else {
      showToast('PIN Admin salah! Akses ditolak.', 'error');
    }
  };

  const handleUpdateAdminPrice = (e) => {
    e.preventDefault();
    setAdminPrices({
      ...adminPrices,
      mlbb_wdp: Number(editWdpMlbb) || 28000,
      mlbb_tp: Number(editTpMlbb) || 150000,
    });
    showToast('Harga WDP & Twilight Pass berhasil diperbarui!', 'success');
  };

  const handleCreateCustomPromo = (e) => {
    e.preventDefault();
    if (!newPromoTitle || !newPromoCode || !newPromoDisc || !newPromoDesc) {
      showToast('Lengkapi seluruh formulir pembuatan promo voucher!', 'error');
      return;
    }

    const newPromo = {
      id: Date.now(),
      title: newPromoTitle,
      code: newPromoCode.toUpperCase(),
      discountValue: Number(newPromoDisc),
      targetCategory: newPromoCategory,
      desc: newPromoDesc,
      tag: newPromoCategory.split(' ')[0],
      bg: 'from-blue-600/30 to-slate-900/50'
    };

    setPromoList([newPromo, ...promoList]);
    showToast(`Voucher "${newPromoCode.toUpperCase()}" berhasil diterbitkan!`, 'success');
    
    setNewPromoTitle('');
    setNewPromoCode('');
    setNewPromoDisc('');
    setNewPromoDesc('');
    setCurrentView('promo');
  };

  const handleCheckPlnId = () => {
    if (!plnId || plnId.length < 5) {
      showToast('Masukkan Nomor Meter / ID Pelanggan PLN yang valid!', 'error');
      return;
    }
    setPlnCustomerData({ name: 'Ahmad Fauzi (Tarif R1/900VA)', meterNo: plnId, segment: 'Prabayar' });
    showToast('ID Pelanggan PLN terverifikasi: Ahmad Fauzi (R1/900VA)', 'success');
  };

  const handleCheckIndihome = () => {
    if (!indihomeId || indihomeId.length < 6) {
      showToast('Masukkan Nomor Pelanggan IndiHome yang valid!', 'error');
      return;
    }
    setIndihomeData({ name: 'Budi Santoso', period: 'September 2026', billAmount: 315000, adminFee: 2500 });
    showToast('Tagihan IndiHome ditemukan: Budi Santoso (Rp317.500)', 'success');
  };

  const handlePhoneChange = (val) => {
    setPhoneNumber(val);
    const cleaned = val.replace(/\D/g, '');
    if (cleaned.length >= 4) {
      const prefix = cleaned.substring(0, 4);
      if (['0811', '0812', '0813', '0821', '0822', '0852', '0853', '0823'].some(p => prefix.startsWith(p.substring(0, 3)))) {
        setDetectedOperator({ name: 'Telkomsel', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' });
      } else if (['0814', '0815', '0816', '0855', '0856', '0857', '0858'].some(p => prefix.startsWith(p.substring(0, 3)))) {
        setDetectedOperator({ name: 'Indosat', color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20' });
      } else if (['0817', '0818', '0819', '0859', '0877', '0878'].some(p => prefix.startsWith(p.substring(0, 3)))) {
        setDetectedOperator({ name: 'XL', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' });
      } else if (['0831', '0832', '0833', '0838'].some(p => prefix.startsWith(p.substring(0, 3)))) {
        setDetectedOperator({ name: 'AXIS', color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20' });
      } else if (['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'].some(p => prefix.startsWith(p.substring(0, 3)))) {
        setDetectedOperator({ name: 'Smartfren', color: 'text-rose-400', bg: 'bg-rose-400/10 border-rose-400/20' });
      } else if (['0895', '0896', '0897', '0898', '0899'].some(p => prefix.startsWith(p.substring(0, 3)))) {
        setDetectedOperator({ name: 'Tri', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' });
      } else {
        setDetectedOperator({ name: 'by.U', color: 'text-teal-400', bg: 'bg-teal-400/10 border-teal-400/20' });
      }
    } else {
      setDetectedOperator(null);
    }
  };

  const allGamesList = [
    { id: 'ml', name: 'Mobile Legends: Bang Bang', publisher: 'Moonton', image: '/logo MLBB.jpg', priceFrom: 'Rp1.500', category: 'Mobile', popular: true, requiresServer: true },
    { id: 'mcgogo', name: 'Magic Chess: Go Go', publisher: 'Moonton', image: '/logo MCGOGO.jpg', priceFrom: 'Rp1.500', category: 'Mobile', popular: true, requiresServer: true },
    { id: 'ff', name: 'Free Fire', publisher: 'Garena', image: '/logo garena FF.jpg', priceFrom: 'Rp800', category: 'Mobile', popular: true, requiresServer: false },
    { id: 'ffmax', name: 'Free Fire MAX', publisher: 'Garena', image: '/logo ffmax.jpg', priceFrom: 'Rp800', category: 'Mobile', popular: true, requiresServer: false },
    { id: 'pubg', name: 'PUBG Mobile', publisher: 'Tencent Games', image: '/logo pubgm.jpg', priceFrom: 'Rp14.000', category: 'Mobile', popular: true, requiresServer: false },
    { id: 'genshin', name: 'Genshin Impact', publisher: 'HoYoverse', image: '/logo Genshin Impact.jpg', priceFrom: 'Rp15.000', category: 'RPG', popular: true, requiresServer: false },
    { id: 'valorant', name: 'VALORANT', publisher: 'Riot Games', image: '/logo valorant.jpg', priceFrom: 'Rp49.000', category: 'PC', popular: true, requiresServer: false },
    { id: 'hok', name: 'Honor of Kings', publisher: 'Level Infinite', image: '/logo hok.jpg', priceFrom: 'Rp3.000', category: 'Mobile', popular: true, requiresServer: false },
    { id: 'codm', name: 'Call of Duty Mobile', publisher: 'Activision', image: '/logo codm.jpg', priceFrom: 'Rp4.000', category: 'FPS', popular: true, requiresServer: false },
    { id: 'roblox', name: 'Roblox', publisher: 'Roblox Corp', image: '/logo roblox.jpg', priceFrom: 'Rp17.000', category: 'Casual', requiresServer: false },
    { id: 'supersus', name: 'Super Sus', publisher: 'PIProductions', image: '/logo super sus.jpg', priceFrom: 'Rp12.000', category: 'Casual', requiresServer: false },
    { id: 'sausageman', name: 'Sausage Man', publisher: 'XD Entertainment', image: '/logo sausageman.jpg', priceFrom: 'Rp11.000', category: 'Casual', requiresServer: false },
    { id: 'bloodstrike', name: 'Blood Strike', publisher: 'NetEase Games', image: '/logo blood strike.jpg', priceFrom: 'Rp12.000', category: 'FPS', requiresServer: false },
    { id: 'farlight', name: 'Farlight 84', publisher: 'Farlight Games', image: '/logo farlight 84.jpg', priceFrom: 'Rp800', category: 'FPS', requiresServer: false },
    { id: 'arenabreakout', name: 'Arena Breakout', publisher: 'Level Infinite', image: '/logo Arena Breakout.jpg', priceFrom: 'Rp14.000', category: 'FPS', requiresServer: false },
    { id: 'stumbleguys', name: 'Stumble Guys', publisher: 'Scopely', image: '/logo stumble guys.jpg', priceFrom: 'Rp12.000', category: 'Casual', requiresServer: false },
    { id: 'deltaforce', name: 'Delta Force', publisher: 'Level Infinite', image: '/logo delta force.jpg', priceFrom: 'Rp5.000', category: 'FPS', requiresServer: false },
    { id: 'pb', name: 'Point Blank', publisher: 'Zepetto', image: '/logo point blank.jpg', priceFrom: 'Rp10.000', category: 'FPS', popular: true, requiresServer: false },
  ];

  const popularGames = ['ml', 'ff', 'valorant', 'hok'].map(id => allGamesList.find(g => g.id === id)).filter(Boolean);

  const gameDenomDatabase = {
    ml: {
      Diamonds: [
        { id: 'ml_d1', name: '5 Diamonds', price: 1500 }, { id: 'ml_d2', name: '12 Diamonds', price: 3000 },
        { id: 'ml_d3', name: '19 Diamonds', price: 4500 }, { id: 'ml_d4', name: '28 Diamonds', price: 7000 },
        { id: 'ml_d5', name: '44 Diamonds', price: 10500 }, { id: 'ml_d6', name: '59 Diamonds', price: 14000 },
        { id: 'ml_d7', name: '85 Diamonds', price: 20000 }, { id: 'ml_d8', name: '170 Diamonds', price: 40000 },
        { id: 'ml_d9', name: '240 Diamonds', price: 56000 }, { id: 'ml_d10', name: '296 Diamonds', price: 69000 },
        { id: 'ml_d11', name: '355 Diamonds', price: 82000 }, { id: 'ml_d12', name: '425 Diamonds', price: 98000 },
        { id: 'ml_d13', name: '568 Diamonds', price: 130000 }, { id: 'ml_d14', name: '750 Diamonds', price: 170000 },
        { id: 'ml_d15', name: '875 Diamonds', price: 198000 }, { id: 'ml_d16', name: '1.135 Diamonds', price: 255000 },
        { id: 'ml_d17', name: '1.680 Diamonds', price: 375000 }, { id: 'ml_d18', name: '2.010 Diamonds', price: 445000 },
        { id: 'ml_d19', name: '2.180 Diamonds', price: 480000 },
      ],
      'Weekly Diamond Pass': [
        { id: 'ml_wdp', name: 'Weekly Diamond Pass', price: adminPrices.mlbb_wdp, desc: 'Total 220 Diamonds + Hadiah Harian selama 7 Hari.' }
      ],
      'Twilight Pass': [
        { id: 'ml_tp', name: 'Twilight Pass', price: adminPrices.mlbb_tp, desc: 'Bonus Skin Eksklusif & Ribuan Diamond.' }
      ]
    },
    mcgogo: {
      Diamonds: [
        { id: 'mc_1', name: '5 Diamonds', price: 1500 }, { id: 'mc_2', name: '11 Diamonds', price: 3000 },
        { id: 'mc_3', name: '12 Diamonds', price: 3500 }, { id: 'mc_4', name: '19 Diamonds', price: 5000 },
        { id: 'mc_5', name: '28 Diamonds', price: 7000 }, { id: 'mc_6', name: '44 Diamonds', price: 10500 },
        { id: 'mc_7', name: '59 Diamonds', price: 14000 }, { id: 'mc_8', name: '85 Diamonds', price: 20000 },
        { id: 'mc_9', name: '112 Diamonds', price: 27000 }, { id: 'mc_10', name: '170 Diamonds', price: 39000 },
        { id: 'mc_11', name: '223 Diamonds', price: 50000 }, { id: 'mc_12', name: '240 Diamonds', price: 54000 },
        { id: 'mc_13', name: '408 Diamonds', price: 91000 }, { id: 'mc_14', name: '568 Diamonds', price: 125000 },
        { id: 'mc_15', name: '1.163 Diamonds', price: 250000 }, { id: 'mc_16', name: '2.010 Diamonds', price: 430000 },
        { id: 'mc_17', name: '4.830 Diamonds', price: 1000000 },
      ],
      'Weekly Diamond Pass': [
        { id: 'mc_wdp', name: 'Weekly Diamond Pass', price: adminPrices.mcgogo_wdp, desc: 'Bonus Weekly Pass Magic Chess Go Go.' }
      ]
    },
    ff: [
      { id: 'ff_1', name: '5 Diamonds', price: 800 }, { id: 'ff_2', name: '10 Diamonds', price: 1500 },
      { id: 'ff_3', name: '12 Diamonds', price: 2000 }, { id: 'ff_4', name: '50 Diamonds', price: 6000 },
      { id: 'ff_5', name: '70 Diamonds', price: 8000 }, { id: 'ff_6', name: '100 Diamonds', price: 11500 },
      { id: 'ff_7', name: '140 Diamonds', price: 16000 }, { id: 'ff_8', name: '210 Diamonds', price: 23000 },
      { id: 'ff_9', name: '280 Diamonds', price: 31000 }, { id: 'ff_10', name: '355 Diamonds', price: 39000 },
      { id: 'ff_11', name: '420 Diamonds', price: 46000 }, { id: 'ff_12', name: '500 Diamonds', price: 54000 },
      { id: 'ff_13', name: '720 Diamonds', price: 78000 }, { id: 'ff_14', name: '1.000 Diamonds', price: 108000 },
      { id: 'ff_15', name: '1.450 Diamonds', price: 155000 }, { id: 'ff_16', name: '2.180 Diamonds', price: 230000 },
      { id: 'ff_17', name: '3.640 Diamonds', price: 380000 },
    ],
    ffmax: [
      { id: 'ffm_1', name: '5 Diamonds', price: 800 }, { id: 'ffm_2', name: '10 Diamonds', price: 1500 },
      { id: 'ffm_3', name: '12 Diamonds', price: 2000 }, { id: 'ffm_4', name: '50 Diamonds', price: 6000 },
      { id: 'ffm_5', name: '70 Diamonds', price: 8000 }, { id: 'ffm_6', name: '100 Diamonds', price: 11500 },
      { id: 'ffm_7', name: '140 Diamonds', price: 16000 }, { id: 'ffm_8', name: '210 Diamonds', price: 23000 },
      { id: 'ffm_9', name: '280 Diamonds', price: 31000 }, { id: 'ffm_10', name: '355 Diamonds', price: 39000 },
      { id: 'ffm_11', name: '420 Diamonds', price: 46000 }, { id: 'ffm_12', name: '500 Diamonds', price: 54000 },
      { id: 'ffm_13', name: '720 Diamonds', price: 78000 }, { id: 'ffm_14', name: '1.000 Diamonds', price: 108000 },
      { id: 'ffm_15', name: '1.450 Diamonds', price: 155000 }, { id: 'ffm_16', name: '2.180 Diamonds', price: 230000 },
      { id: 'ffm_17', name: '3.640 Diamonds', price: 380000 },
    ],
    pubg: [
      { id: 'p_1', name: '60 UC', price: 14000 }, { id: 'p_2', name: '120 UC', price: 27000 },
      { id: 'p_3', name: '180 UC', price: 39000 }, { id: 'p_4', name: '240 UC', price: 51000 },
      { id: 'p_5', name: '325 UC', price: 68000 }, { id: 'p_6', name: '385 UC', price: 80000 },
      { id: 'p_7', name: '445 UC', price: 92000 }, { id: 'p_8', name: '505 UC', price: 105000 },
      { id: 'p_9', name: '565 UC', price: 117000 }, { id: 'p_10', name: '660 UC', price: 136000 },
      { id: 'p_11', name: '720 UC', price: 148000 }, { id: 'p_12', name: '840 UC', price: 172000 },
      { id: 'p_13', name: '900 UC', price: 185000 }, { id: 'p_14', name: '985 UC', price: 202000 },
      { id: 'p_15', name: '1.105 UC', price: 225000 }, { id: 'p_16', name: '1.320 UC', price: 268000 },
      { id: 'p_17', name: '1.800 UC', price: 360000 }, { id: 'p_18', name: '3.850 UC', price: 700000 },
      { id: 'p_19', name: '8.100 UC', price: 1450000 },
    ],
    genshin: [
      { id: 'g_1', name: '60 Genesis Crystals', price: 15000 },
      { id: 'g_2', name: '300 + 30 Genesis Crystals', price: 72000 },
      { id: 'g_3', name: '980 + 110 Genesis Crystals', price: 225000 },
      { id: 'g_4', name: '1.980 + 260 Genesis Crystals', price: 435000 },
      { id: 'g_5', name: '3.280 + 600 Genesis Crystals', price: 720000 },
      { id: 'g_6', name: '6.480 + 1.600 Genesis Crystals', price: 1430000 },
    ],
    valorant: [
      { id: 'v_1', name: '475 VP', price: 49000 }, { id: 'v_2', name: '1.000 VP', price: 99000 },
      { id: 'v_3', name: '1.475 VP', price: 145000 }, { id: 'v_4', name: '2.050 VP', price: 195000 },
      { id: 'v_5', name: '2.525 VP', price: 240000 }, { id: 'v_6', name: '3.050 VP', price: 290000 },
      { id: 'v_7', name: '3.650 VP', price: 335000 }, { id: 'v_8', name: '4.125 VP', price: 385000 },
      { id: 'v_9', name: '4.650 VP', price: 430000 }, { id: 'v_10', name: '5.350 VP', price: 490000 },
      { id: 'v_11', name: '7.400 VP', price: 680000 }, { id: 'v_12', name: '9.000 VP', price: 820000 },
      { id: 'v_13', name: '11.000 VP', price: 950000 }, { id: 'v_14', name: '16.350 VP', price: 1430000 },
      { id: 'v_15', name: '22.000 VP', price: 1900000 },
    ],
    hok: [
      { id: 'hok_1', name: '16 Tokens', price: 3000 }, { id: 'hok_2', name: '80 Tokens', price: 15000 },
      { id: 'hok_3', name: '240 Tokens', price: 45000 }, { id: 'hok_4', name: '400 Tokens', price: 73000 },
      { id: 'hok_5', name: '560 Tokens', price: 100000 }, { id: 'hok_6', name: '800 Tokens', price: 142000 },
      { id: 'hok_7', name: '930 Tokens', price: 165000 }, { id: 'hok_8', name: '1.200 Tokens', price: 210000 },
      { id: 'hok_9', name: '1.353 Tokens', price: 235000 }, { id: 'hok_10', name: '2.400 Tokens', price: 415000 },
      { id: 'hok_11', name: '2.724 Tokens', price: 470000 }, { id: 'hok_12', name: '4.000 Tokens', price: 690000 },
      { id: 'hok_13', name: '4.580 Tokens', price: 790000 }, { id: 'hok_14', name: '8.000 Tokens', price: 1380000 },
    ],
    codm: [
      { id: 'c_1', name: '31 CP', price: 4000 }, { id: 'c_2', name: '63 CP', price: 8000 },
      { id: 'c_3', name: '128 CP', price: 16000 }, { id: 'c_4', name: '321 CP', price: 39000 },
      { id: 'c_5', name: '645 CP', price: 77000 }, { id: 'c_6', name: '800 CP', price: 92000 },
      { id: 'c_7', name: '1.373 CP', price: 155000 }, { id: 'c_8', name: '2.060 CP', price: 235000 },
      { id: 'c_9', name: '2.750 CP', price: 295000 }, { id: 'c_10', name: '3.564 CP', price: 390000 },
      { id: 'c_11', name: '5.619 CP', price: 570000 }, { id: 'c_12', name: '7.656 CP', price: 780000 },
      { id: 'c_13', name: '15.312 CP', price: 1650000 },
    ],
    roblox: [
      { id: 'r_1', name: '50 Robux', price: 17000 }, { id: 'r_2', name: '100 Robux', price: 30000 },
      { id: 'r_3', name: '200 Robux', price: 48000 }, { id: 'r_4', name: '800 Robux', price: 145000 },
      { id: 'r_5', name: '1.000 Robux', price: 180000 }, { id: 'r_6', name: '2.000 Robux', price: 355000 },
      { id: 'r_7', name: '4.500 Robux', price: 780000 }, { id: 'r_8', name: '5.250 Robux', price: 880000 },
      { id: 'r_9', name: '10.000 Robux', price: 1600000 }, { id: 'r_10', name: '11.000 Robux', price: 1750000 },
      { id: 'r_11', name: '24.000 Robux', price: 3400000 },
    ],
    supersus: [
      { id: 'ss_1', name: '100 Golden Star', price: 12000 }, { id: 'ss_2', name: '310 Golden Star', price: 35000 },
      { id: 'ss_3', name: '520 Golden Star', price: 58000 }, { id: 'ss_4', name: '1.060 Golden Star', price: 115000 },
      { id: 'ss_5', name: '2.180 Golden Star', price: 235000 }, { id: 'ss_6', name: '5.600 Golden Star', price: 600000 },
    ],
    sausageman: [
      { id: 'sm_1', name: '61 Candy', price: 11000 }, { id: 'sm_2', name: '186 Candy', price: 33000 },
      { id: 'sm_3', name: '318 Candy', price: 55000 }, { id: 'sm_4', name: '686 Candy', price: 110000 },
      { id: 'sm_5', name: '1.378 Candy', price: 220000 }, { id: 'sm_6', name: '2.118 Candy', price: 325000 },
      { id: 'sm_7', name: '3.548 Candy', price: 550000 }, { id: 'sm_8', name: '7.108 Candy', price: 1100000 },
    ],
    bloodstrike: [
      { id: 'bs_1', name: '100 + 5 Gold', price: 12000 }, { id: 'bs_2', name: '300 + 20 Gold', price: 36000 },
      { id: 'bs_3', name: '500 + 40 Gold', price: 60000 }, { id: 'bs_4', name: '600 + 45 Gold', price: 72000 },
      { id: 'bs_5', name: '800 + 60 Gold', price: 95000 }, { id: 'bs_6', name: '1.000 + 100 Gold', price: 120000 },
      { id: 'bs_7', name: '1.200 + 110 Gold', price: 145000 }, { id: 'bs_8', name: '1.500 + 140 Gold', price: 180000 },
      { id: 'bs_9', name: '2.000 + 260 Gold', price: 240000 }, { id: 'bs_10', name: '2.500 + 300 Gold', price: 300000 },
      { id: 'bs_11', name: '3.000 + 360 Gold', price: 360000 }, { id: 'bs_12', name: '4.000 + 520 Gold', price: 480000 },
      { id: 'bs_13', name: '5.000 + 800 Gold', price: 600000 }, { id: 'bs_14', name: '10.000 + 1.600 Gold', price: 1200000 },
    ],
    farlight: [
      { id: 'fr_1', name: '5 Diamonds', price: 800 }, { id: 'fr_2', name: '10 Diamonds', price: 1500 },
      { id: 'fr_3', name: '20 Diamonds', price: 3000 }, { id: 'fr_4', name: '30 Diamonds', price: 4500 },
      { id: 'fr_5', name: '40 Diamonds', price: 6000 }, { id: 'fr_6', name: '50 Diamonds', price: 7500 },
      { id: 'fr_7', name: '60 Diamonds', price: 9000 }, { id: 'fr_8', name: '80 Diamonds', price: 12000 },
      { id: 'fr_9', name: '100 Diamonds', price: 15000 }, { id: 'fr_10', name: '165 Diamonds', price: 24000 },
      { id: 'fr_11', name: '220 Diamonds', price: 31000 }, { id: 'fr_12', name: '330 Diamonds', price: 45000 },
      { id: 'fr_13', name: '880 Diamonds', price: 115000 }, { id: 'fr_14', name: '2.240 Diamonds', price: 290000 },
      { id: 'fr_15', name: '4.700 Diamonds', price: 580000 },
    ],
    arenabreakout: [
      { id: 'ab_1', name: '60 + 6 Bonds', price: 14000 }, { id: 'ab_2', name: '310 + 25 Bonds', price: 68000 },
      { id: 'ab_3', name: '630 + 45 Bonds', price: 135000 }, { id: 'ab_4', name: '1.580 + 110 Bonds', price: 335000 },
      { id: 'ab_5', name: '3.200 + 200 Bonds', price: 670000 }, { id: 'ab_6', name: '6.500 + 320 Bonds', price: 1300000 },
    ],
    stumbleguys: [
      { id: 'sg_1', name: '250 Gems', price: 12000 }, { id: 'sg_2', name: '800 Gems', price: 30000 },
      { id: 'sg_3', name: '1.600 Gems + 75 Tokens', price: 55000 }, { id: 'sg_4', name: '5.000 Gems + 275 Tokens', price: 125000 },
      { id: 'sg_5', name: '120 Tokens', price: 35000 }, { id: 'sg_6', name: '1.300 Tokens', price: 300000 },
    ],
    deltaforce: [
      { id: 'df_1', name: '18 + 1 Delta Coin', price: 5000 }, { id: 'df_2', name: '30 + 2 Delta Coin', price: 7000 },
      { id: 'df_3', name: '60 + 3 Delta Coin', price: 14000 }, { id: 'df_4', name: '300 + 36 Delta Coin', price: 68000 },
      { id: 'df_5', name: '420 + 62 Delta Coin', price: 93000 }, { id: 'df_6', name: '680 + 105 Delta Coin', price: 130000 },
      { id: 'df_7', name: '1.280 + 264 Delta Coin', price: 260000 }, { id: 'df_8', name: '1.680 + 385 Delta Coin', price: 325000 },
      { id: 'df_9', name: '3.280 + 834 Delta Coin', price: 650000 }, { id: 'df_10', name: '6.480 + 1.944 Delta Coin', price: 1300000 },
      { id: 'df_11', name: '12.960 + 3.888 Delta Coin', price: 2600000 }, { id: 'df_12', name: '19.440 + 5.832 Delta Coin', price: 3900000 },
    ],
    pb: [
      { id: 'pb_1', name: '1.200 PB Cash', price: 10000 },
      { id: 'pb_2', name: '2.400 PB Cash', price: 20000 },
      { id: 'pb_3', name: '6.000 PB Cash', price: 50000 },
      { id: 'pb_4', name: '12.000 PB Cash', price: 98000 },
      { id: 'pb_5', name: '24.000 PB Cash', price: 195000 },
      { id: 'pb_6', name: '36.000 PB Cash', price: 290000 },
      { id: 'pb_7', name: '60.000 PB Cash', price: 480000 },
      { id: 'pb_8', name: '120.000 PB Cash', price: 950000 },
    ]
  };

  const handleVerifyAccount = () => {
    if (!gameId) {
      showToast('Masukkan Game ID / UID terlebih dahulu!', 'error');
      return;
    }
    if (selectedProduct.requiresServer && !serverId) {
      showToast('Game ini memerlukan Server ID!', 'error');
      return;
    }

    setIsVerifying(true);
    setVerifiedAccount(null);

    setTimeout(() => {
      setIsVerifying(false);
      if (gameId.length >= 3) {
        setVerifiedAccount({
          username: 'Prawira Gamer (WebVibes ID)',
          status: 'Valid'
        });
        showToast('Akun berhasil diverifikasi: Prawira Gamer', 'success');
      } else {
        setVerifiedAccount({
          username: null,
          status: 'Invalid'
        });
        showToast('Akun tidak ditemukan. Periksa ID & Server Anda.', 'error');
      }
    }, 1100);
  };

  const vouchersList = [
    {
      id: 'steam', name: 'Steam Wallet', image: '/logo steam.jpg', category: 'Gaming PC',
      publisher: 'Valve Corporation',
      description: 'Steam Wallet Code resmi untuk beli game, DLC, dan item di Steam Store.',
      denoms: [
        { id: 'sw1', name: 'Steam Wallet Rp12.000', price: 13000 },
        { id: 'sw2', name: 'Steam Wallet Rp20.000', price: 22000 },
        { id: 'sw3', name: 'Steam Wallet Rp45.000', price: 47000 },
        { id: 'sw4', name: 'Steam Wallet Rp60.000', price: 63000 },
        { id: 'sw5', name: 'Steam Wallet Rp120.000', price: 125000 },
        { id: 'sw6', name: 'Steam Wallet Rp250.000', price: 258000 },
      ]
    },
    {
      id: 'gplay', name: 'Google Play Store', image: '/logo play store.jpg', category: 'Apps & Games',
      publisher: 'Google LLC',
      description: 'Google Play Gift Card untuk beli aplikasi, game, musik, dan konten premium.',
      denoms: [
        { id: 'gp1', name: 'Google Play Rp10.000', price: 11500 },
        { id: 'gp2', name: 'Google Play Rp20.000', price: 22000 },
        { id: 'gp3', name: 'Google Play Rp50.000', price: 53000 },
        { id: 'gp4', name: 'Google Play Rp100.000', price: 105000 },
        { id: 'gp5', name: 'Google Play Rp150.000', price: 157000 },
        { id: 'gp6', name: 'Google Play Rp300.000', price: 312000 },
      ]
    },
    {
      id: 'psn', name: 'PlayStation Store', image: '/logo PlayStation App.jpg', category: 'Gaming Console',
      publisher: 'Sony Interactive',
      description: 'PlayStation Network Card untuk beli game PS4/PS5, langganan PS Plus, dan konten digital.',
      denoms: [
        { id: 'ps1', name: 'PSN Rp50.000', price: 55000 },
        { id: 'ps2', name: 'PSN Rp100.000', price: 107000 },
        { id: 'ps3', name: 'PSN Rp150.000', price: 158000 },
        { id: 'ps4', name: 'PSN Rp250.000', price: 262000 },
        { id: 'ps5', name: 'PSN Rp500.000', price: 520000 },
        { id: 'ps6', name: 'PSN Rp1.000.000', price: 1038000 },
      ]
    },
    {
      id: 'roblox_vc', name: 'Roblox Gift Card', image: '/logo roblox.jpg', category: 'Gaming',
      publisher: 'Roblox Corp',
      description: 'Roblox Gift Card untuk beli Robux dan item eksklusif di Roblox Avatar Shop.',
      denoms: [
        { id: 'rb1', name: 'Roblox Rp50.000 (400 Robux)', price: 53000 },
        { id: 'rb2', name: 'Roblox Rp100.000 (800 Robux)', price: 105000 },
        { id: 'rb3', name: 'Roblox Rp150.000 (1.200 Robux)', price: 157000 },
        { id: 'rb4', name: 'Roblox Rp300.000 (2.400 Robux)', price: 312000 },
        { id: 'rb5', name: 'Roblox Rp600.000 (4.800 Robux)', price: 622000 },
      ]
    },
  ];

  const handleApplyPromo = (categoryName) => {
    const found = promoList.find(p => p.code.toUpperCase() === promoCode.trim().toUpperCase() && (p.targetCategory === categoryName || p.targetCategory === 'Semua Layanan'));
    if (found) {
      setAppliedPromo(found);
      showToast(`Voucher "${found.code}" berhasil! Diskon Rp${found.discountValue.toLocaleString('id-ID')} diterapkan.`, 'success');
    } else {
      showToast(`Kode voucher tidak valid untuk layanan ${categoryName}.`, 'error');
      setAppliedPromo(null);
    }
  };

  const getDiscountAmount = () => {
    if (!appliedPromo) return 0;
    return appliedPromo.discountValue;
  };

  const handleProceedToCheckout = (productInfo, denomInfo, targetInfo, categoryName) => {
    const nextInvoiceSequence = invoiceSequence + 1;
    setInvoiceSequence(nextInvoiceSequence);
    setAppliedPromo(null);
    setPromoCode('');
    const invoice = {
      invoiceNo: `WV-${String(nextInvoiceSequence).padStart(6, '0')}`,
      productName: productInfo,
      denomName: denomInfo.name,
      price: denomInfo.price,
      target: targetInfo,
      username: verifiedAccount ? verifiedAccount.username : '-',
      category: categoryName,
      adminFee: 1000,
      time: new Date().toLocaleString('id-ID'),
    };
    setActiveInvoice(invoice);
    setCheckoutStep('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProcessPayment = () => {
    setLoadingPayment(true);
    const netAmount = (activeInvoice.price + 1000 - getDiscountAmount() > 0) ? (activeInvoice.price + 1000 - getDiscountAmount()) : 1000;

    if (selectedPayment === 'DANA') {
      setTimeout(() => {
        setLoadingPayment(false);
        window.location.href = `https://link.dana.id/pay?amount=${netAmount}&note=TopUp-${activeInvoice.invoiceNo}`;
      }, 1000);
    } else if (selectedPayment === 'GoPay') {
      setTimeout(() => {
        setLoadingPayment(false);
        window.location.href = `https://gopay.co.id/transfer?amount=${netAmount}`;
      }, 1000);
    } else if (selectedPayment === 'OVO') {
      setTimeout(() => {
        setLoadingPayment(false);
        window.location.href = `https://www.ovo.id/transfer?amount=${netAmount}`;
      }, 1000);
    } else {
      setTimeout(() => {
        setLoadingPayment(false);
        if (activeInvoice && activeInvoice.productName.includes('Token PLN')) {
          const randomToken = Math.floor(1000 + Math.random() * 9000) + ' ' + 
                              Math.floor(1000 + Math.random() * 9000) + ' ' + 
                              Math.floor(1000 + Math.random() * 9000) + ' ' + 
                              Math.floor(1000 + Math.random() * 9000);
          setGeneratedTokenCode(randomToken);
        }
        savePurchaseToHistory(activeInvoice, selectedPayment);
        setCheckoutStep('success');
        showToast('Transaksi Berhasil Dikonfirmasi!', 'success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1800);
    }
  };

  const savePurchaseToHistory = (invoice, paymentMethod) => {
    setPurchaseHistory((currentHistory) => [
      {
        ...invoice,
        paymentMethod,
        status: 'Berhasil',
        completedAt: new Date().toLocaleString('id-ID'),
      },
      ...currentHistory,
    ]);
  };

  return (
    <div className="min-h-screen bg-[#051124] text-slate-100 font-sans selection:bg-[#1769E0] selection:text-white flex flex-col justify-between pb-24 lg:pb-0">
      
      {/* TOAST NOTIFICATION MODERN */}
      {toast.show && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] max-w-md w-[calc(100%-2rem)] transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className={`px-4 py-3.5 rounded-2xl border backdrop-blur-xl shadow-2xl flex items-center justify-between gap-3 text-xs sm:text-sm font-medium ${
            toast.type === 'success' ? 'bg-[#07241c]/95 border-emerald-500/40 text-emerald-200' :
            toast.type === 'error' ? 'bg-[#290d12]/95 border-rose-500/40 text-rose-200' :
            'bg-[#0a1f3d]/95 border-blue-500/40 text-blue-200'
          }`}>
            <div className="flex items-center gap-2.5">
              {toast.type === 'success' && <IconCheck className="w-5 h-5 text-emerald-400 shrink-0" />}
              {toast.type === 'error' && <IconAlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
              {toast.type === 'info' && <IconInfo className="w-5 h-5 text-blue-400 shrink-0" />}
              <span>{toast.message}</span>
            </div>
            <button onClick={() => setToast(prev => ({ ...prev, show: false }))} className="text-slate-400 hover:text-white p-1">
              <IconClose className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div>
        {/* NAVBAR RESMI & PROFESIONAL */}
        <nav className="sticky top-0 z-50 bg-[#07162e]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 py-3.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* BRAND LOGO DENGAN TRIPLE CLICK UNTUK ADMIN */}
            <div onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer select-none group">
              <div className="relative">
                <img src="/logo webvibesid.jpeg" alt="WebVibes ID" className="w-10 h-10 rounded-xl object-cover border border-blue-500/30 group-hover:border-blue-400 transition shadow-lg shadow-blue-900/30" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-[#07162e]"></span>
              </div>
              <div>
                <span className="text-lg font-black tracking-wider block leading-none text-white">WEB<span className="text-[#1769E0]">VIBES</span>.ID</span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider">PLATFORM DIGITAL INDONESIA</span>
              </div>
            </div>
            
            {/* DESKTOP NAV LINKS DENGAN IKON VEKTOR */}
            <div className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-300">
              <button onClick={() => { setCurrentView('home'); setSelectedProduct(null); setCheckoutStep('form'); }} className={`flex items-center gap-1.5 transition hover:text-white ${currentView === 'home' ? 'text-[#5da1ff] font-bold' : ''}`}>
                Beranda
              </button>
              <button onClick={() => { setCurrentView('games'); setSelectedProduct(null); setCheckoutStep('form'); }} className={`flex items-center gap-1.5 transition hover:text-white ${currentView === 'games' ? 'text-[#5da1ff] font-bold' : ''}`}>
                Top Up Game
              </button>
              <button onClick={() => { setCurrentView('voucher'); setSelectedVoucher(null); setSelectedVoucherDenom(null); setCheckoutStep('form'); }} className={`flex items-center gap-1.5 transition hover:text-white ${currentView === 'voucher' ? 'text-[#5da1ff] font-bold' : ''}`}>
                Voucher
              </button>
              <button onClick={() => { setCurrentView('pulsa'); setCheckoutStep('form'); }} className={`flex items-center gap-1.5 transition hover:text-white ${currentView === 'pulsa' ? 'text-[#5da1ff] font-bold' : ''}`}>
                Pulsa & Data
              </button>
              <button onClick={() => { setCurrentView('ppob'); setCheckoutStep('form'); }} className={`flex items-center gap-1.5 transition hover:text-white ${currentView === 'ppob' ? 'text-[#5da1ff] font-bold' : ''}`}>
                PPOB Listrik
              </button>
              <button onClick={() => { setCurrentView('promo'); setCheckoutStep('form'); }} className={`flex items-center gap-1.5 transition hover:text-white ${currentView === 'promo' ? 'text-[#5da1ff] font-bold' : ''}`}>
                Promo
              </button>
              <button onClick={() => { setCurrentView('history'); setCheckoutStep('form'); }} className={`flex items-center gap-1.5 transition hover:text-white ${currentView === 'history' ? 'text-[#5da1ff] font-bold' : ''}`}>
                Riwayat
              </button>
              <button onClick={() => showToast('Layanan Bantuan 24 Jam via CS WhatsApp: +62 812-3456-7890', 'info')} className="px-3.5 py-1.5 rounded-lg border border-blue-500/30 text-blue-400 hover:bg-blue-600/10 hover:border-blue-400 transition flex items-center gap-1.5">
                <IconHeadphones className="w-3.5 h-3.5" />
                Bantuan CS
              </button>
            </div>

          </div>
        </nav>

        {/* RUNNING ANNOUNCEMENT TICKER (ANIMASI BANNER BERJALAN) */}
        <div className="bg-[#081b38] border-b border-blue-900/30 py-2 px-4 overflow-hidden select-none">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <span className="shrink-0 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-blue-500/20 text-[#5da1ff] px-2.5 py-0.5 rounded-full border border-blue-500/30">
              <IconSparkles className="w-3.5 h-3.5" />
              Info Terkini
            </span>
            <div className="overflow-hidden relative w-full">
              <div className="animate-ticker text-xs text-slate-300 font-medium whitespace-nowrap gap-12 flex">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Gunakan voucher diskon <strong className="text-amber-300">HEMAT10</strong> untuk potongan langsung Rp5.000 semua game!
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                  Siaran Langsung YouTube & TikTok WebVibes ID sedang tayang: Ikuti Mabar & Giveaway Diamond!
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  Pengiriman Token PLN & Diamond Game otomatis masuk dalam 1-5 detik nonstop 24 jam.
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                  Pendaftaran Turnamen Komunitas Season 3 resmi dibuka, cek di menu Berita Terkini.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CHECKOUT & PEMBAYARAN */}
        {checkoutStep === 'checkout' && activeInvoice ? (
          <div className="max-w-xl mx-auto px-4 sm:px-6 py-10 animate-in fade-in">
            <div className="bg-[#091d3d] border border-blue-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="text-center space-y-2 border-b border-slate-800 pb-4">
                <span className="bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs px-3 py-1 rounded-full font-semibold inline-block">
                  MENUNGGU PEMBAYARAN
                </span>
                <h2 className="text-2xl font-black text-white">Konfirmasi & Pembayaran</h2>
                <p className="text-xs text-slate-400">Nomor Invoice: <span className="font-mono text-blue-400">{activeInvoice.invoiceNo}</span></p>
              </div>

              <div className="bg-[#051226] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between"><span className="text-slate-400">Layanan / Game</span><span className="text-white font-bold">{activeInvoice.productName}</span></div>
                {activeInvoice.username && activeInvoice.username !== '-' && (
                  <div className="flex justify-between"><span className="text-slate-400">Username Akun</span><span className="font-bold text-emerald-400">{activeInvoice.username}</span></div>
                )}
                <div className="flex justify-between"><span className="text-slate-400">ID Tujuan / UID</span><span className="font-mono text-slate-200">{activeInvoice.target}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Nominal Produk</span><span className="font-semibold text-white">{activeInvoice.denomName}</span></div>
                <div className="flex justify-between border-t border-slate-800/80 pt-2"><span className="text-slate-400">Harga Produk</span><span className="font-semibold text-white">Rp {activeInvoice.price.toLocaleString('id-ID')}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Biaya Layanan Admin</span><span className="text-white">Rp 1.000</span></div>
                
                {appliedPromo && (
                  <div className="flex justify-between text-emerald-400 font-semibold bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                    <span>Diskon Voucher ({appliedPromo.code})</span>
                    <span>- Rp {getDiscountAmount().toLocaleString('id-ID')}</span>
                  </div>
                )}

                <div className="flex justify-between border-t border-slate-800 pt-3 text-sm sm:text-base font-bold">
                  <span className="text-white">Total Pembayaran</span>
                  <span className="text-[#5da1ff] text-base sm:text-lg">
                    Rp {(activeInvoice.price + 1000 - getDiscountAmount() > 0 ? activeInvoice.price + 1000 - getDiscountAmount() : 1000).toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Pilih Metode Pembayaran</label>
                {['QRIS', 'DANA', 'GoPay', 'OVO', 'ShopeePay'].map((m) => (
                  <div 
                    key={m} onClick={() => setSelectedPayment(m)}
                    className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition flex items-center justify-between text-xs sm:text-sm ${
                      selectedPayment === m ? 'border-blue-500 bg-blue-600/20 font-bold text-white shadow-md' : 'border-slate-800 bg-[#051226] text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      {m === 'QRIS' ? 'QRIS Real-Time (Semua Bank & E-Wallet)' : `E-Wallet ${m} Instan`}
                    </span>
                    <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedPayment === m ? 'border-blue-500 bg-blue-600' : 'border-slate-600'}`}>
                      {selectedPayment === m && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                    </span>
                  </div>
                ))}
              </div>

              {selectedPayment === 'QRIS' && (
                <div className="bg-white p-5 rounded-2xl text-center space-y-3 animate-in fade-in">
                  <img src="/qris-webvibes.jpeg" alt="Kode QRIS WebVibes ID" className="mx-auto w-full max-w-[300px] rounded-xl shadow-md border" />
                  <p className="text-xs text-slate-700 font-semibold">Pindai QRIS menggunakan BCA, Mandiri, BRI, DANA, GoPay, OVO, atau ShopeePay.</p>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Gunakan Kode Voucher</label>
                <div className="flex gap-2">
                  <input 
                    type="text" placeholder={`Cth: HEMAT10`} value={promoCode} onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-[#051226] border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 uppercase"
                  />
                  <button onClick={() => handleApplyPromo(activeInvoice.category)} className="px-5 py-3 bg-blue-600 hover:bg-blue-500 font-bold text-xs rounded-xl transition text-white">Terapkan</button>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button 
                  onClick={handleProcessPayment} disabled={loadingPayment}
                  className="w-full py-4 bg-[#1769E0] hover:bg-blue-600 font-extrabold rounded-2xl shadow-xl transition text-sm sm:text-base text-center block text-white"
                >
                  {loadingPayment ? 'Menghubungkan ke Gateway...' : `Bayar Sekarang via ${selectedPayment}`}
                </button>
                <button onClick={() => setCheckoutStep('form')} className="w-full text-xs text-slate-400 hover:text-white py-2 flex items-center justify-center gap-1">
                  <IconArrowLeft className="w-3.5 h-3.5" />
                  Kembali ke Formulir
                </button>
              </div>
            </div>
          </div>
        ) : checkoutStep === 'success' && activeInvoice ? (
          /* STATUS TRANSAKSI BERHASIL */
          <div className="max-w-lg mx-auto px-4 sm:px-6 py-12 animate-in zoom-in">
            <div id="receipt-print" className="bg-[#091d3d] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 space-y-6 text-center shadow-2xl">
              <div className="receipt-brand text-xs font-black tracking-[0.24em] text-[#5da1ff]">WEBVIBES.ID DIGITAL STORE</div>
              <div className="w-14 h-14 bg-emerald-500/15 text-emerald-400 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500/60 shadow-lg">
                <IconCheck className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-white">TRANSAKSI BERHASIL</h2>
                <p className="text-xs text-slate-300">Pesanan telah berhasil diproses otomatis oleh sistem WebVibes ID.</p>
              </div>

              {activeInvoice.productName.includes('Token PLN') && (
                <div className="bg-[#051226] border border-emerald-500/50 rounded-2xl p-5 space-y-3">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">KODE TOKEN LISTRIK (20 DIGIT STROOM)</span>
                  <div className="text-lg sm:text-2xl font-mono font-black text-white tracking-widest bg-[#091d3d] p-3 rounded-xl border border-slate-800 select-all">
                    {generatedTokenCode}
                  </div>
                  <button 
                    onClick={() => { navigator.clipboard.writeText(generatedTokenCode); showToast('Kode token berhasil disalin ke clipboard!', 'success'); }}
                    className="no-print w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow"
                  >
                    <IconCopy className="w-4 h-4" />
                    Salin Kode Token
                  </button>
                </div>
              )}

              <div className="bg-[#051226] border border-slate-800 rounded-2xl p-4 space-y-2.5 text-xs text-left">
                <div className="flex justify-between"><span className="text-slate-400">Nomor Transaksi</span><span className="font-mono text-blue-400 font-bold">{activeInvoice.invoiceNo}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Produk Layanan</span><span className="text-white font-bold">{activeInvoice.productName}</span></div>
                {activeInvoice.username && activeInvoice.username !== '-' && (
                  <div className="flex justify-between"><span className="text-slate-400">Username Akun</span><span className="text-emerald-400 font-bold">{activeInvoice.username}</span></div>
                )}
                <div className="flex justify-between"><span className="text-slate-400">Tujuan / Meter / ID</span><span className="font-mono text-slate-200">{activeInvoice.target}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Nominal</span><span className="font-semibold text-white">{activeInvoice.denomName}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Waktu Pembayaran</span><span className="text-white">{activeInvoice.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Status</span><span className="text-emerald-400 font-bold">Lunas / Sukses</span></div>
                <div className="flex justify-between border-t border-slate-800 pt-2 font-bold text-sm"><span className="text-slate-400">Total Biaya</span><span className="text-emerald-400">Rp {(activeInvoice.price + 1000 - getDiscountAmount()).toLocaleString('id-ID')}</span></div>
              </div>

              <div className="no-print receipt-actions flex gap-3">
                <button onClick={() => { navigator.clipboard.writeText(activeInvoice.invoiceNo); showToast('Nomor invoice berhasil disalin!', 'success'); }} className="flex-1 py-3 bg-[#051226] border border-slate-800 hover:border-blue-500 font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5">
                  <IconCopy className="w-4 h-4" />
                  Salin Invoice
                </button>
                <button onClick={() => window.print()} className="flex-1 py-3 bg-[#1769E0] hover:bg-blue-600 font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5 text-white shadow">
                  <IconReceipt className="w-4 h-4" />
                  Cetak Struk / PDF
                </button>
              </div>
              <button type="button" onClick={() => { setCurrentView('history'); setCheckoutStep('form'); }} className="no-print w-full py-2 text-xs font-bold text-[#5da1ff] hover:text-white transition">
                Buka Riwayat Transaksi →
              </button>
            </div>
          </div>
        ) : currentView === 'history' ? (
          /* RIWAYAT TRANSAKSI */
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8 animate-in fade-in">
            <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Riwayat Transaksi</h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Daftar pesanan digital yang selesai diproses pada perangkat ini.</p>
              </div>
              <button type="button" onClick={() => { setCurrentView('home'); setCheckoutStep('form'); }} className="text-xs sm:text-sm font-bold text-[#5da1ff] hover:text-white transition">
                ← Kembali ke Beranda
              </button>
            </div>

            {purchaseHistory.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-800 bg-[#091d3d]/50 px-6 py-16 text-center">
                <IconReceipt className="w-12 h-12 mx-auto text-slate-600 mb-3" />
                <h2 className="font-bold text-white text-base">Belum Ada Transaksi</h2>
                <p className="mt-1 text-xs text-slate-400 max-w-sm mx-auto">Setelah Anda melakukan pembayaran sukses, rincian faktur akan otomatis tercatat di halaman ini.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {purchaseHistory.map((purchase) => (
                  <article key={purchase.invoiceNo} className="rounded-2xl border border-slate-800 bg-[#091d3d] p-5 shadow-lg">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="font-bold text-white text-sm sm:text-base">{purchase.productName}</h2>
                        <p className="mt-1 text-xs text-slate-400 font-mono">{purchase.invoiceNo} • {purchase.completedAt}</p>
                      </div>
                      <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400">{purchase.status}</span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-800/80 pt-4 text-xs sm:grid-cols-4">
                      <div><p className="text-slate-500">Nominal</p><p className="mt-0.5 font-semibold text-white">{purchase.denomName}</p></div>
                      <div><p className="text-slate-500">Metode</p><p className="mt-0.5 font-semibold text-white">{purchase.paymentMethod}</p></div>
                      <div><p className="text-slate-500">Tujuan</p><p className="mt-0.5 font-semibold text-white truncate">{purchase.target}</p></div>
                      <div><p className="text-slate-500">Total</p><p className="mt-0.5 font-bold text-[#5da1ff]">Rp {(purchase.price + purchase.adminFee).toLocaleString('id-ID')}</p></div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        ) : currentView === 'promo' ? (
          /* DAFTAR VOUCHER PROMO */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8 animate-in fade-in">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h1 className="text-3xl font-extrabold text-white">Voucher & Kupon Promo</h1>
              <p className="text-slate-400 text-xs sm:text-sm">Gunakan kode promo saat checkout untuk mendapatkan potongan harga spesial di setiap layanan.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promoList.map((p) => (
                <div key={p.id} className={`bg-gradient-to-br ${p.bg} border border-slate-800 hover:border-blue-500/40 rounded-3xl p-6 space-y-5 shadow-xl flex flex-col justify-between transition`}>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[11px] px-3 py-1 rounded-full font-bold">{p.tag}</span>
                      <span className="text-[11px] bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full font-bold">Kategori: {p.targetCategory}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    <p className="text-slate-300 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-medium">KODE VOUCHER</span>
                      <span className="font-mono font-bold text-lg text-amber-300 tracking-wider">{p.code}</span>
                    </div>
                    <button 
                      onClick={() => { navigator.clipboard.writeText(p.code); showToast(`Kode "${p.code}" berhasil disalin!`, 'success'); }} 
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5 shadow"
                    >
                      <IconCopy className="w-3.5 h-3.5" />
                      Salin
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : currentView === 'admin-promo' ? (
          /* PANEL PENGATURAN ADMIN */
          <div className="max-w-xl mx-auto px-4 sm:px-6 py-16 animate-in fade-in">
            {!isAdminAuthenticated ? (
              <div className="bg-[#091d3d] border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl text-center">
                <div className="w-14 h-14 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto border border-blue-500/30">
                  <IconShieldCheck className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-white">Panel Keamanan Pengaturan</h2>
                  <p className="text-xs text-slate-400">Masukkan PIN Keamanan untuk membuka konfigurasi harga dan voucher.</p>
                </div>
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <input 
                    type="password" placeholder="Masukkan 4 Digit PIN" value={adminPinInput} onChange={(e) => setAdminPinInput(e.target.value)}
                    className="w-full bg-[#051226] border border-slate-800 rounded-xl px-4 py-3 text-center text-white tracking-widest text-lg focus:outline-none focus:border-blue-500"
                  />
                  <button type="submit" className="w-full py-3.5 bg-[#1769E0] hover:bg-blue-600 font-bold rounded-xl text-xs transition shadow text-white">
                    Verifikasi & Masuk
                  </button>
                </form>
                <button onClick={() => setCurrentView('home')} className="text-xs text-slate-400 hover:text-white block mx-auto pt-2">← Kembali ke Beranda</button>
              </div>
            ) : (
              <div className="bg-[#091d3d] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <div>
                    <h1 className="text-lg sm:text-xl font-black text-white">Pengaturan Toko WebVibes ID</h1>
                    <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 mt-0.5">
                      <IconCheck className="w-3.5 h-3.5" /> Terotentikasi sebagai Admin
                    </p>
                  </div>
                  <button onClick={() => setIsAdminAuthenticated(false)} className="text-xs text-rose-400 hover:underline">Keluar</button>
                </div>


                <form onSubmit={handleCreateCustomPromo} className="space-y-4 text-xs bg-[#051226] p-5 rounded-2xl border border-slate-800">
                  <h3 className="font-bold text-sm text-white border-b border-slate-800 pb-2">Terbitkan Voucher Baru</h3>
                  <div>
                    <label className="text-slate-300 block mb-1">Nama Promo</label>
                    <input type="text" placeholder="Contoh: Diskon Spesial Lebaran" value={newPromoTitle} onChange={(e) => setNewPromoTitle(e.target.value)} className="w-full bg-[#091d3d] border border-slate-700 rounded-xl px-3 py-2 text-white" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-300 block mb-1">Kode Voucher</label>
                      <input type="text" placeholder="Cth: LEBARAN5K" value={newPromoCode} onChange={(e) => setNewPromoCode(e.target.value)} className="w-full bg-[#091d3d] border border-slate-700 rounded-xl px-3 py-2 text-white uppercase" />
                    </div>
                    <div>
                      <label className="text-slate-300 block mb-1">Potongan Nilai (Rp)</label>
                      <input type="number" placeholder="Cth: 5000" value={newPromoDisc} onChange={(e) => setNewPromoDisc(e.target.value)} className="w-full bg-[#091d3d] border border-slate-700 rounded-xl px-3 py-2 text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="text-slate-300 block mb-1">Kategori Target</label>
                    <select value={newPromoCategory} onChange={(e) => setNewPromoCategory(e.target.value)} className="w-full bg-[#091d3d] border border-slate-700 rounded-xl px-3 py-2 text-white">
                      <option value="Top-Up Game">Top-Up Game</option>
                      <option value="Pulsa & Paket Data">Pulsa & Paket Data</option>
                      <option value="Token PLN">Token PLN & PPOB</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-300 block mb-1">Deskripsi Ringkas</label>
                    <textarea rows="2" value={newPromoDesc} onChange={(e) => setNewPromoDesc(e.target.value)} className="w-full bg-[#091d3d] border border-slate-700 rounded-xl px-3 py-2 text-white"></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 font-bold rounded-xl text-white transition">Publikasikan Voucher</button>
                </form>
              </div>
            )}
          </div>
        ) : currentView === 'games' ? (
          /* DAFTAR TOP UP GAME */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8 animate-in fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Katalog Top-Up Game</h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Tersedia {allGamesList.length} game populer dengan pengiriman instan otomatis.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Semua', 'Mobile', 'PC', 'RPG', 'FPS', 'Casual'].map((tab) => (
                  <button 
                    key={tab} onClick={() => setActiveGameTab(tab)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeGameTab === tab ? 'bg-blue-600 text-white shadow' : 'bg-[#091d3d] border border-slate-800 text-slate-300 hover:border-slate-700'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {allGamesList
                .filter(g => activeGameTab === 'Semua' || g.category === activeGameTab)
                .map((game) => (
                  <div 
                    key={game.id} onClick={() => { 
                      setSelectedProduct(game); 
                      setGameId(''); 
                      setServerId(''); 
                      setVerifiedAccount(null);
                      setSelectedDenom(null);
                      setGameSubTab('Diamonds');
                      setCurrentView('detail'); 
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-[#091d3d] border border-slate-800 hover:border-blue-500/60 rounded-2xl p-4 sm:p-5 cursor-pointer transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
                  >
                    <div className="flex items-start justify-between">
                      <img src={game.image} alt={game.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover border border-slate-700 group-hover:scale-105 transition" />
                      <span className="bg-blue-500/15 text-[#5da1ff] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-blue-500/20">{game.category}</span>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-[#5da1ff] transition line-clamp-1">{game.name}</h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">{game.publisher}</p>
                      <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-800/80">
                        <span className="text-[11px] text-emerald-400 font-semibold">Mulai {game.priceFrom}</span>
                        <span className="px-2.5 py-1 bg-blue-600/20 group-hover:bg-blue-600 text-[#5da1ff] group-hover:text-white text-[10px] font-bold rounded-lg transition">TOP UP</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : currentView === 'detail' && selectedProduct ? (
          /* DETAIL TRANSAKSI GAME */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-in fade-in">
            <button onClick={() => { setCurrentView('games'); setSelectedProduct(null); }} className="mb-6 text-xs sm:text-sm text-[#5da1ff] hover:underline font-semibold flex items-center gap-1.5">
              <IconArrowLeft className="w-4 h-4" />
              Kembali ke Pilihan Game
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="lg:col-span-2 space-y-6">
                
                {/* INFO GAME */}
                <div className="bg-[#091d3d] border border-slate-800 rounded-2xl p-5 sm:p-6 flex items-center gap-4 shadow-lg">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-16 h-16 rounded-2xl object-cover border border-slate-700" />
                  <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-white">{selectedProduct.name}</h1>
                    <p className="text-xs text-slate-400 mt-1">Publisher: {selectedProduct.publisher} • Proses Otomatis 1-5 Detik</p>
                  </div>
                </div>

                {/* TAB KHUSUS MLBB & MAGIC CHESS GO GO */}
                {(selectedProduct.id === 'ml' || selectedProduct.id === 'mcgogo') && (
                  <div className="flex gap-2 sm:gap-3 bg-[#091d3d] p-1.5 rounded-2xl border border-slate-800">
                    {selectedProduct.id === 'ml' ? (
                      ['Diamonds', 'Weekly Diamond Pass', 'Twilight Pass'].map((tab) => (
                        <button 
                          key={tab} onClick={() => { setGameSubTab(tab); setSelectedDenom(null); }}
                          className={`flex-1 py-2.5 sm:py-3 rounded-xl text-xs font-bold transition ${gameSubTab === tab ? 'bg-blue-600 text-white shadow' : 'bg-transparent text-slate-400 hover:text-white'}`}
                        >
                          {tab}
                        </button>
                      ))
                    ) : (
                      ['Diamonds', 'Weekly Diamond Pass'].map((tab) => (
                        <button 
                          key={tab} onClick={() => { setGameSubTab(tab); setSelectedDenom(null); }}
                          className={`flex-1 py-2.5 sm:py-3 rounded-xl text-xs font-bold transition ${gameSubTab === tab ? 'bg-blue-600 text-white shadow' : 'bg-transparent text-slate-400 hover:text-white'}`}
                        >
                          {tab}
                        </button>
                      ))
                    )}
                  </div>
                )}

                {/* LANGKAH 1: DATA AKUN */}
                <div className="bg-[#091d3d] border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-lg">
                  <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white">1</span>
                    Masukkan Data Akun
                  </h2>
                  <div className={`grid grid-cols-1 ${selectedProduct.requiresServer ? 'sm:grid-cols-2' : 'sm:grid-cols-1'} gap-4`}>
                    <div>
                      <label className="text-xs text-slate-300 mb-1.5 block font-medium">
                        {selectedProduct.id === 'valorant' ? 'Riot ID / Name#Tag' : selectedProduct.id === 'roblox' ? 'Username / User ID' : selectedProduct.id === 'pb' ? 'ID Akun Zepetto Point Blank' : 'Game ID / User ID'}
                      </label>
                      <input 
                        type="text" placeholder={selectedProduct.id === 'valorant' ? 'Cth: Player#1234' : selectedProduct.id === 'pb' ? 'Cth: troopers_id123' : 'Cth: 12345678'} value={gameId} onChange={(e) => setGameId(e.target.value)} 
                        className="w-full bg-[#051226] border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 font-mono" 
                      />
                    </div>
                    {selectedProduct.requiresServer && (
                      <div>
                        <label className="text-xs text-slate-300 mb-1.5 block font-medium">Server ID (Zone ID)</label>
                        <input 
                          type="text" placeholder="Cth: 1234" value={serverId} onChange={(e) => setServerId(e.target.value)} 
                          className="w-full bg-[#051226] border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 font-mono" 
                        />
                      </div>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <button 
                      onClick={handleVerifyAccount} disabled={isVerifying}
                      className="px-5 py-2.5 bg-[#08224d] hover:bg-blue-600 border border-blue-500/30 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5 shadow"
                    >
                      <IconCheck className="w-4 h-4" />
                      {isVerifying ? 'Memverifikasi Akun...' : 'Cek Username Akun'}
                    </button>

                    {verifiedAccount && (
                      <div className="text-xs">
                        {verifiedAccount.username ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-1">
                            <IconCheck className="w-4 h-4" /> Akun Ditemukan: {verifiedAccount.username}
                          </span>
                        ) : (
                          <span className="text-rose-400 font-bold flex items-center gap-1">
                            <IconAlertCircle className="w-4 h-4" /> Akun tidak ditemukan
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* LANGKAH 2: PILIH NOMINAL */}
                <div className="bg-[#091d3d] border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-lg">
                  <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white">2</span>
                    Pilih Nominal Produk
                  </h2>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedProduct.id === 'ml' ? (
                      gameDenomDatabase.ml[gameSubTab].map((item) => (
                        <div 
                          key={item.id} onClick={() => setSelectedDenom(item)}
                          className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition flex flex-col justify-between ${
                            selectedDenom?.id === item.id ? 'border-blue-500 bg-blue-600/20 shadow-md ring-1 ring-blue-500' : 'border-slate-800 bg-[#051226] hover:border-slate-700'
                          }`}
                        >
                          <div>
                            <span className="font-semibold text-xs sm:text-sm text-slate-100 block">{item.name}</span>
                            {item.desc && <span className="text-[10px] text-slate-400 block mt-1">{item.desc}</span>}
                          </div>
                          <span className="text-[#5da1ff] font-bold mt-3 text-xs sm:text-sm">Rp {item.price.toLocaleString('id-ID')}</span>
                        </div>
                      ))
                    ) : selectedProduct.id === 'mcgogo' ? (
                      gameDenomDatabase.mcgogo[gameSubTab].map((item) => (
                        <div 
                          key={item.id} onClick={() => setSelectedDenom(item)}
                          className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition flex flex-col justify-between ${
                            selectedDenom?.id === item.id ? 'border-blue-500 bg-blue-600/20 shadow-md ring-1 ring-blue-500' : 'border-slate-800 bg-[#051226] hover:border-slate-700'
                          }`}
                        >
                          <div>
                            <span className="font-semibold text-xs sm:text-sm text-slate-100 block">{item.name}</span>
                            {item.desc && <span className="text-[10px] text-slate-400 block mt-1">{item.desc}</span>}
                          </div>
                          <span className="text-[#5da1ff] font-bold mt-3 text-xs sm:text-sm">Rp {item.price.toLocaleString('id-ID')}</span>
                        </div>
                      ))
                    ) : (
                      (gameDenomDatabase[selectedProduct.id] || gameDenomDatabase.ff).map((item) => (
                        <div 
                          key={item.id} onClick={() => setSelectedDenom(item)}
                          className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition flex flex-col justify-between ${
                            selectedDenom?.id === item.id ? 'border-blue-500 bg-blue-600/20 shadow-md ring-1 ring-blue-500' : 'border-slate-800 bg-[#051226] hover:border-slate-700'
                          }`}
                        >
                          <span className="font-semibold text-xs sm:text-sm text-slate-100">{item.name}</span>
                          <span className="text-[#5da1ff] font-bold mt-3 text-xs sm:text-sm">Rp {item.price.toLocaleString('id-ID')}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>

              {/* RINGKASAN PESANAN DI KANAN */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-[#091d3d] border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-6 shadow-xl">
                  <h3 className="text-base sm:text-lg font-bold text-white border-b border-slate-800 pb-3">Ringkasan Pesanan</h3>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                    <div className="flex justify-between"><span className="text-slate-400">Game</span><span className="font-semibold text-white">{selectedProduct.name}</span></div>
                    {verifiedAccount && verifiedAccount.username && (
                      <div className="flex justify-between"><span className="text-slate-400">Username</span><span className="font-bold text-emerald-400">{verifiedAccount.username}</span></div>
                    )}
                    <div className="flex justify-between"><span className="text-slate-400">ID Tujuan</span><span className="font-mono text-white">{gameId ? `${gameId} ${serverId ? '(' + serverId + ')' : ''}` : '-'}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Nominal</span><span className="font-semibold text-white">{selectedDenom ? selectedDenom.name : '-'}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Harga</span><span>Rp {selectedDenom ? selectedDenom.price.toLocaleString('id-ID') : '0'}</span></div>
                  </div>
                  <div className="border-t border-slate-800 pt-4 flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base text-white">Subtotal</span>
                    <span className="font-black text-lg sm:text-xl text-[#5da1ff]">Rp {selectedDenom ? selectedDenom.price.toLocaleString('id-ID') : '0'}</span>
                  </div>
                  <button 
                    onClick={() => {
                      if (!gameId || !selectedDenom) {
                        showToast('Harap lengkapi Game ID dan pilih nominal terlebih dahulu!', 'error');
                        return;
                      }
                      if (!verifiedAccount || !verifiedAccount.username) {
                        showToast('Silakan klik "Cek Username" untuk memverifikasi akun Anda sebelum checkout!', 'info');
                        return;
                      }
                      handleProceedToCheckout(selectedProduct.name, selectedDenom, `${gameId} ${serverId ? '(' + serverId + ')' : ''}`, 'Top-Up Game');
                    }}
                    className="w-full py-4 bg-[#1769E0] hover:bg-blue-600 font-extrabold rounded-xl shadow-lg transition text-sm sm:text-base text-center block text-white"
                  >
                    Lanjut ke Pembayaran
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : currentView === 'voucher' && !selectedVoucher ? (
          /* KATALOG VOUCHER DIGITAL */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8 animate-in fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Voucher Digital</h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Voucher resmi Steam Wallet, Google Play, PlayStation Store, dan Roblox Gift Card.</p>
              </div>
              <span className="text-xs text-slate-400 font-medium">{vouchersList.length} Voucher Tersedia</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {vouchersList.map((v) => (
                <div
                  key={v.id}
                  onClick={() => { setSelectedVoucher(v); setSelectedVoucherDenom(null); setVoucherEmail(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-[#091d3d] border border-slate-800 hover:border-blue-500/60 rounded-2xl p-4 sm:p-5 cursor-pointer transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
                >
                  <div className="flex items-start justify-between">
                    <img src={v.image} alt={v.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover border border-slate-700 group-hover:scale-105 transition" />
                    <span className="bg-purple-500/15 text-purple-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-purple-500/20">Voucher</span>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-[#5da1ff] transition line-clamp-1">{v.name}</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">{v.publisher}</p>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-800/80">
                      <span className="text-[11px] text-emerald-400 font-semibold">Mulai Rp{v.denoms[0].price.toLocaleString('id-ID')}</span>
                      <span className="px-2.5 py-1 bg-blue-600/20 group-hover:bg-blue-600 text-[#5da1ff] group-hover:text-white text-[10px] font-bold rounded-lg transition">BELI</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        ) : currentView === 'voucher' && selectedVoucher ? (
          /* DETAIL VOUCHER - MIRIP GAME DETAIL */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-in fade-in">
            <button onClick={() => { setSelectedVoucher(null); setSelectedVoucherDenom(null); }} className="mb-6 text-xs sm:text-sm text-[#5da1ff] hover:underline font-semibold flex items-center gap-1.5">
              <IconArrowLeft className="w-4 h-4" />
              Kembali ke Pilihan Voucher
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="lg:col-span-2 space-y-6">

                {/* INFO VOUCHER */}
                <div className="bg-[#091d3d] border border-slate-800 rounded-2xl p-5 sm:p-6 flex items-center gap-4 shadow-lg">
                  <img src={selectedVoucher.image} alt={selectedVoucher.name} className="w-16 h-16 rounded-2xl object-cover border border-slate-700" />
                  <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-white">{selectedVoucher.name}</h1>
                    <p className="text-xs text-slate-400 mt-1">{selectedVoucher.publisher} • Kode terkirim otomatis 1–5 menit</p>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{selectedVoucher.description}</p>
                  </div>
                </div>

                {/* LANGKAH 1: MASUKKAN EMAIL */}
                <div className="bg-[#091d3d] border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-lg">
                  <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white">1</span>
                    Masukkan Email Penerima
                  </h2>
                  <div>
                    <label className="text-xs text-slate-300 mb-1.5 block font-medium">Alamat Email Aktif</label>
                    <input
                      type="email"
                      placeholder="Cth: nama@gmail.com"
                      value={voucherEmail}
                      onChange={(e) => setVoucherEmail(e.target.value)}
                      className="w-full bg-[#051226] border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
                    />
                    <p className="text-[11px] text-slate-500 mt-1.5">Kode voucher akan dikirim ke email ini dalam 1–5 menit setelah pembayaran berhasil.</p>
                  </div>
                </div>

                {/* LANGKAH 2: PILIH NOMINAL */}
                <div className="bg-[#091d3d] border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-lg">
                  <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white">2</span>
                    Pilih Nominal Voucher
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedVoucher.denoms.map((d) => (
                      <div
                        key={d.id}
                        onClick={() => setSelectedVoucherDenom(d)}
                        className={`p-4 rounded-xl border cursor-pointer transition flex justify-between items-center ${
                          selectedVoucherDenom?.id === d.id
                            ? 'border-blue-500 bg-blue-600/20 shadow-md shadow-blue-900/30'
                            : 'border-slate-800 bg-[#051226] hover:border-slate-600'
                        }`}
                      >
                        <div>
                          <span className="text-xs sm:text-sm font-bold text-white block">{d.name}</span>
                          <span className="text-[11px] text-emerald-400 font-semibold">Rp {d.price.toLocaleString('id-ID')}</span>
                        </div>
                        <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${selectedVoucherDenom?.id === d.id ? 'border-blue-500 bg-blue-500' : 'border-slate-600'}`}>
                          {selectedVoucherDenom?.id === d.id && <span className="w-2 h-2 bg-white rounded-full" />}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* PANEL KANAN - RINGKASAN PESANAN */}
              <div className="lg:col-span-1">
                <div className="bg-[#091d3d] border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5 shadow-lg sticky top-24">
                  <h2 className="text-sm font-bold text-white border-b border-slate-800 pb-3">Ringkasan Pesanan</h2>

                  {selectedVoucherDenom ? (
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between"><span className="text-slate-400">Voucher</span><span className="text-white font-semibold">{selectedVoucher.name}</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">Nominal</span><span className="text-white">{selectedVoucherDenom.name}</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">Harga</span><span className="text-white">Rp {selectedVoucherDenom.price.toLocaleString('id-ID')}</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">Admin</span><span className="text-white">Rp 1.000</span></div>
                      <div className="flex justify-between border-t border-slate-800 pt-2 text-sm font-bold">
                        <span className="text-white">Total</span>
                        <span className="text-[#5da1ff]">Rp {(selectedVoucherDenom.price + 1000).toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 text-center py-4">Pilih nominal untuk melihat ringkasan</p>
                  )}

                  <button
                    onClick={() => {
                      if (!voucherEmail || !voucherEmail.includes('@')) {
                        showToast('Masukkan alamat email yang valid!', 'error');
                        return;
                      }
                      if (!selectedVoucherDenom) {
                        showToast('Pilih nominal voucher terlebih dahulu!', 'error');
                        return;
                      }
                      handleProceedToCheckout(selectedVoucher.name, selectedVoucherDenom, voucherEmail, 'Voucher Digital');
                    }}
                    className="w-full py-4 bg-[#1769E0] hover:bg-blue-600 font-extrabold rounded-2xl shadow-xl transition text-sm text-white"
                  >
                    Beli Sekarang →
                  </button>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400"><IconShieldCheck className="w-3.5 h-3.5 text-emerald-400" /><span>Voucher 100% Resmi & Bergaransi</span></div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400"><IconClock className="w-3.5 h-3.5 text-blue-400" /><span>Pengiriman 1–5 menit via email</span></div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400"><IconCheck className="w-3.5 h-3.5 text-purple-400" /><span>Tidak perlu login akun platform</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        ) : currentView === 'pulsa' ? (
          /* PULSA & PAKET DATA */
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8 animate-in fade-in">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Pulsa & Paket Data Seluler</h1>
              <p className="text-slate-400 text-xs sm:text-sm">Isi ulang kuota dan pulsa dengan deteksi operator otomatis seluruh Indonesia.</p>
            </div>

            <div className="bg-[#091d3d] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-slate-300 font-bold uppercase tracking-wider">Nomor Handphone</label>
                  {detectedOperator && (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${detectedOperator.bg} ${detectedOperator.color}`}>
                      Operator: {detectedOperator.name}
                    </span>
                  )}
                </div>
                <input 
                  type="text" placeholder="Contoh: 081234567890" value={phoneNumber} onChange={(e) => handlePhoneChange(e.target.value)}
                  className="w-full bg-[#051226] border border-slate-800 rounded-2xl px-5 py-4 text-sm sm:text-base text-white focus:outline-none focus:border-blue-500 tracking-wider font-mono"
                />
              </div>

              <div className="flex gap-3 border-b border-slate-800 pb-4 pt-2">
                {['Pulsa', 'Paket Data'].map(tab => (
                  <button 
                    key={tab} onClick={() => setPulsaTab(tab)}
                    className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition ${pulsaTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'bg-[#051226] border border-slate-800 text-slate-400 hover:text-white'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {pulsaTab === 'Pulsa' ? (
                  [
                    { name: 'Rp5.000', price: 6000 }, { name: 'Rp10.000', price: 11000 }, { name: 'Rp20.000', price: 21000 },
                    { name: 'Rp50.000', price: 51000 }, { name: 'Rp100.000', price: 101000 }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => {
                        if (!phoneNumber || phoneNumber.length < 10) return showToast('Masukkan nomor HP yang valid terlebih dahulu!', 'error');
                        handleProceedToCheckout(`Pulsa ${detectedOperator?.name || 'Seluler'} ${item.name}`, { name: item.name, price: item.price }, phoneNumber, 'Pulsa & Paket Data');
                      }}
                      className="bg-[#051226] border border-slate-800 hover:border-blue-500/60 p-4 rounded-2xl cursor-pointer transition flex flex-col justify-between group shadow"
                    >
                      <span className="font-bold text-sm sm:text-base text-white group-hover:text-[#5da1ff] transition">{item.name}</span>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-[#5da1ff] font-bold">Rp {item.price.toLocaleString('id-ID')}</span>
                        <span className="text-[10px] bg-blue-600/20 text-blue-300 px-2 py-0.5 rounded-lg">Pilih</span>
                      </div>
                    </div>
                  ))
                ) : (
                  [
                    { name: '1 GB', active: '3 Hari', price: 8000 }, { name: '3 GB', active: '7 Hari', price: 18000 },
                    { name: '5 GB', active: '30 Hari', price: 25000 }, { name: '10 GB', active: '30 Hari', price: 42000 }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => {
                        if (!phoneNumber || phoneNumber.length < 10) return showToast('Masukkan nomor HP yang valid terlebih dahulu!', 'error');
                        handleProceedToCheckout(`Paket Data ${detectedOperator?.name || 'Telkomsel'} ${item.name}`, { name: `${item.name} (${item.active})`, price: item.price }, phoneNumber, 'Pulsa & Paket Data');
                      }}
                      className="bg-[#051226] border border-slate-800 hover:border-blue-500/60 p-4 rounded-2xl cursor-pointer transition flex flex-col justify-between group shadow"
                    >
                      <div>
                        <span className="font-bold text-sm sm:text-base text-white group-hover:text-[#5da1ff] transition">{item.name}</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">Masa Aktif: {item.active}</span>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-[#5da1ff] font-bold">Rp {item.price.toLocaleString('id-ID')}</span>
                        <span className="text-[10px] bg-blue-600/20 text-blue-300 px-2 py-0.5 rounded-lg">Pilih</span>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          </div>
        ) : currentView === 'ppob' ? (
          /* PPOB TOKEN PLN & INDIHOME */
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8 animate-in fade-in">
            <div className="space-y-2 text-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Layanan PPOB & Pembayaran Tagihan</h1>
              <p className="text-slate-400 text-xs sm:text-sm">Beli token listrik PLN prabayar dan lunasi tagihan IndiHome dengan verifikasi langsung.</p>
            </div>

            <div className="bg-[#091d3d] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
              {/* TOKEN PLN */}
              <div className="space-y-4 border-b border-slate-800 pb-8">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <IconZap className="w-5 h-5 text-amber-400" />
                  Token Listrik PLN Prabayar
                </h3>
                <div>
                  <label className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-2 block">Nomor Meter / ID Pelanggan PLN</label>
                  <div className="flex gap-2 sm:gap-3">
                    <input 
                      type="text" placeholder="Masukkan ID Pelanggan / Nomor Meter" value={plnId} onChange={(e) => setPlnId(e.target.value)}
                      className="flex-1 bg-[#051226] border border-slate-800 rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
                    />
                    <button onClick={handleCheckPlnId} className="px-5 sm:px-6 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-500 font-bold rounded-2xl text-xs transition text-white">
                      Cek ID
                    </button>
                  </div>
                </div>

                {plnCustomerData && (
                  <div className="bg-[#051226] border border-emerald-500/40 rounded-2xl p-4 text-xs flex items-center gap-2">
                    <IconCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Pelanggan Terverifikasi: {plnCustomerData.name}</span>
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
                  {[
                    { name: 'Rp20.000', price: 22000 }, { name: 'Rp50.000', price: 52000 }, { name: 'Rp100.000', price: 102000 },
                    { name: 'Rp200.000', price: 202000 }, { name: 'Rp500.000', price: 502000 }, { name: 'Rp1.000.000', price: 1002000 }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => {
                        if (!plnCustomerData) return showToast('Silakan masukkan dan klik "Cek ID" PLN terlebih dahulu!', 'error');
                        handleProceedToCheckout(`Token PLN ${item.name}`, item, plnId, 'Token PLN');
                      }}
                      className="bg-[#051226] border border-slate-800 hover:border-blue-500/60 p-4 rounded-2xl cursor-pointer transition flex flex-col justify-between group shadow"
                    >
                      <span className="font-bold text-sm sm:text-base text-white group-hover:text-[#5da1ff] transition">{item.name}</span>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-[#5da1ff] font-bold">Rp {item.price.toLocaleString('id-ID')}</span>
                        <span className="text-[10px] bg-blue-600/20 text-blue-300 px-2 py-0.5 rounded-lg">PILIH</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* INDIHOME */}
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <IconReceipt className="w-5 h-5 text-blue-400" />
                  Tagihan IndiHome / Telkom
                </h3>
                <div>
                  <label className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-2 block">Nomor Pelanggan IndiHome</label>
                  <div className="flex gap-2 sm:gap-3">
                    <input 
                      type="text" placeholder="Masukkan nomor pelanggan IndiHome" value={indihomeId} onChange={(e) => setIndihomeId(e.target.value)}
                      className="flex-1 bg-[#051226] border border-slate-800 rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
                    />
                    <button onClick={handleCheckIndihome} className="px-5 sm:px-6 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-500 font-bold rounded-2xl text-xs transition text-white">
                      Cek Tagihan
                    </button>
                  </div>
                </div>

                {indihomeData && (
                  <div className="bg-[#051226] border border-slate-800 rounded-2xl p-5 space-y-2.5 text-xs">
                    <div className="flex justify-between"><span className="text-slate-400">Nama Pelanggan</span><span className="font-bold text-white">{indihomeData.name}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Periode Tagihan</span><span className="text-white">{indihomeData.period}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Nilai Tagihan</span><span className="text-white">Rp {indihomeData.billAmount.toLocaleString('id-ID')}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Biaya Admin</span><span className="text-white">Rp {indihomeData.adminFee.toLocaleString('id-ID')}</span></div>
                    <div className="flex justify-between border-t border-slate-800 pt-2 font-bold text-sm"><span className="text-slate-400">Total Tagihan</span><span className="text-emerald-400">Rp {(indihomeData.billAmount + indihomeData.adminFee).toLocaleString('id-ID')}</span></div>
                    <button 
                      onClick={() => handleProceedToCheckout('Tagihan IndiHome', { name: indihomeData.period, price: indihomeData.billAmount + indihomeData.adminFee }, indihomeId, 'PPOB IndiHome')}
                      className="w-full mt-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition shadow"
                    >
                      Bayar Sekarang
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* BERANDA UTAMA (HOME) LENGKAP & DE-AI-FY */
          <div className="space-y-16 sm:space-y-20 animate-in fade-in">
            
            {/* HERO BANNER SECTION */}
            <section className="relative overflow-hidden py-14 lg:py-20 px-4 sm:px-6 border-b border-slate-800/80 bg-gradient-to-b from-[#081a38] via-[#06152d] to-[#051124]">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                  
                  {/* BADGE TRUST INDONESIA */}
                  <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#5da1ff]">
                    <IconShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>Platform Top-Up & PPOB Resmi Bergaransi</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                    Solusi Top-Up Game & Tagihan Digital Terpercaya
                  </h1>
                  
                  <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Nikmati kemudahan transaksi instan 24 jam untuk diamond game favorit, voucher digital, token listrik PLN, dan pulsa dengan sistem otomatis tanpa antre.
                  </p>

                  {/* KOTAK PENCARIAN CEPAT */}
                  <div className="flex bg-[#071730] border border-slate-700/80 rounded-2xl p-1.5 max-w-lg mx-auto lg:mx-0 shadow-xl focus-within:border-blue-500 transition">
                    <div className="pl-3.5 flex items-center text-slate-400">
                      <IconSearch className="w-4 h-4" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Cari Mobile Legends, Free Fire, Token PLN, Pulsa..." 
                      value={searchQuery} 
                      onChange={(e) => setSearchQuery(e.target.value)} 
                      className="flex-1 bg-transparent px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none placeholder:text-slate-500" 
                    />
                    <button onClick={() => setCurrentView('games')} className="px-5 py-2.5 bg-[#1769E0] hover:bg-blue-600 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow">
                      Jelajahi
                    </button>
                  </div>

                  {/* CHIP KATEGORI CEPAT DENGAN IKON VEKTOR */}
                  <div className="flex flex-wrap gap-2 pt-1 justify-center lg:justify-start text-xs font-semibold">
                    <button onClick={() => setCurrentView('games')} className="px-3.5 py-2 bg-[#091d3d] border border-slate-800 hover:border-blue-500 rounded-xl transition flex items-center gap-1.5 text-slate-200">
                      <IconGamepad className="w-4 h-4 text-blue-400" />
                      Game
                    </button>
                    <button onClick={() => setCurrentView('voucher')} className="px-3.5 py-2 bg-[#091d3d] border border-slate-800 hover:border-blue-500 rounded-xl transition flex items-center gap-1.5 text-slate-200">
                      <IconTicket className="w-4 h-4 text-purple-400" />
                      Voucher
                    </button>
                    <button onClick={() => setCurrentView('pulsa')} className="px-3.5 py-2 bg-[#091d3d] border border-slate-800 hover:border-blue-500 rounded-xl transition flex items-center gap-1.5 text-slate-200">
                      <IconSmartphone className="w-4 h-4 text-emerald-400" />
                      Pulsa
                    </button>
                    <button onClick={() => setCurrentView('ppob')} className="px-3.5 py-2 bg-[#091d3d] border border-slate-800 hover:border-blue-500 rounded-xl transition flex items-center gap-1.5 text-slate-200">
                      <IconZap className="w-4 h-4 text-amber-400" />
                      PPOB Listrik
                    </button>
                  </div>
                </div>

                {/* HERO BANNER SLIDER - FOTO BERJALAN KE SAMPING */}
                <div className="lg:col-span-5 flex justify-center items-center">
                  <div className="w-full overflow-hidden rounded-3xl shadow-2xl">
                    <div className="animate-banner-scroll flex gap-3">
                      {[
                        { src: '/banner Top Up.png', alt: 'Banner Top Up Game', onClick: () => setCurrentView('games') },
                        { src: '/banner Gaming Channel.png', alt: 'Banner Gaming Channel', onClick: () => setCurrentView('games') },
                        { src: '/banner Konter Pulsa Banner.png', alt: 'Banner Konter Pulsa', onClick: () => setCurrentView('pulsa') },
                        { src: '/banner Top Up.png', alt: 'Banner Top Up Game', onClick: () => setCurrentView('games') },
                        { src: '/banner Gaming Channel.png', alt: 'Banner Gaming Channel', onClick: () => setCurrentView('games') },
                        { src: '/banner Konter Pulsa Banner.png', alt: 'Banner Konter Pulsa', onClick: () => setCurrentView('pulsa') },
                      ].map((b, i) => (
                        <button
                          key={i}
                          onClick={b.onClick}
                          className="shrink-0 rounded-2xl overflow-hidden focus:outline-none hover:opacity-90 transition-opacity"
                          style={{ width: '100%', minWidth: '320px', maxWidth: '480px' }}
                        >
                          <img src={b.src} alt={b.alt} className="w-full h-full object-cover block rounded-2xl" draggable={false} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4 KATEGORI UTAMA */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                
                <div onClick={() => setCurrentView('games')} className="bg-[#091d3d] border border-slate-800 hover:border-blue-500/60 rounded-3xl p-6 space-y-4 shadow-xl transition cursor-pointer group flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-[#5da1ff] group-hover:scale-110 transition">
                      <IconGamepad className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">Top Up Game</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">Isi diamond Mobile Legends, Free Fire, Genshin, PUBG, dan 15+ game lainnya.</p>
                  </div>
                  <span className="w-full py-2.5 bg-blue-600/15 group-hover:bg-blue-600 text-[#5da1ff] group-hover:text-white font-bold text-xs rounded-xl transition text-center block">
                    Buka Katalog Game →
                  </span>
                </div>

                <div onClick={() => setCurrentView('voucher')} className="bg-[#091d3d] border border-slate-800 hover:border-blue-500/60 rounded-3xl p-6 space-y-4 shadow-xl transition cursor-pointer group flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition">
                      <IconTicket className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">Voucher Digital</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">Voucher Steam Wallet, Google Play, PlayStation, dan Gift Card Roblox.</p>
                  </div>
                  <span className="w-full py-2.5 bg-blue-600/15 group-hover:bg-blue-600 text-[#5da1ff] group-hover:text-white font-bold text-xs rounded-xl transition text-center block">
                    Beli Voucher →
                  </span>
                </div>

                <div onClick={() => setCurrentView('pulsa')} className="bg-[#091d3d] border border-slate-800 hover:border-blue-500/60 rounded-3xl p-6 space-y-4 shadow-xl transition cursor-pointer group flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition">
                      <IconSmartphone className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">Pulsa & Data</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">Pengisian pulsa reguler dan kuota internet semua operator Indonesia otomatis.</p>
                  </div>
                  <span className="w-full py-2.5 bg-blue-600/15 group-hover:bg-blue-600 text-[#5da1ff] group-hover:text-white font-bold text-xs rounded-xl transition text-center block">
                    Isi Kuota & Pulsa →
                  </span>
                </div>

                <div onClick={() => setCurrentView('ppob')} className="bg-[#091d3d] border border-slate-800 hover:border-blue-500/60 rounded-3xl p-6 space-y-4 shadow-xl transition cursor-pointer group flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition">
                      <IconZap className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">PPOB & Listrik</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">Token listrik PLN prabayar dan pembayaran tagihan internet IndiHome cepat.</p>
                  </div>
                  <span className="w-full py-2.5 bg-blue-600/15 group-hover:bg-blue-600 text-[#5da1ff] group-hover:text-white font-bold text-xs rounded-xl transition text-center block">
                    Bayar Tagihan →
                  </span>
                </div>

              </div>
            </section>

            {/* SECTION 4 GAME POPULER (ANIMASI BERJALAN KE SAMPING) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 overflow-hidden">
              <div className="border-b border-slate-800 pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white">Game Populer Utama</h2>
                    <span className="bg-blue-500/20 text-[#5da1ff] border border-blue-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      MLBB • FF • VALORANT • HOK
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Pilihan game terfavorit dengan transaksi kilat. Animasi berjalan otomatis ke samping (arahkan kursor untuk jeda).</p>
                </div>
                <button onClick={() => setCurrentView('games')} className="text-xs text-[#5da1ff] font-bold hover:underline shrink-0">
                  Lihat Semua Game →
                </button>
              </div>

              {/* TRACK MARQUEE ANIMASI BERJALAN KE SAMPING */}
              <div className="relative w-full overflow-hidden py-2">
                <div className="animate-games-scroll flex gap-5">
                  {[...popularGames, ...popularGames, ...popularGames, ...popularGames].map((game, idx) => (
                    <div 
                      key={`${game.id}-${idx}`} onClick={() => { 
                        setSelectedProduct(game); 
                        setGameId(''); 
                        setServerId(''); 
                        setVerifiedAccount(null);
                        setSelectedDenom(null);
                        setGameSubTab('Diamonds');
                        setCurrentView('detail'); 
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-[260px] sm:w-[280px] shrink-0 bg-[#091d3d] border border-slate-800 hover:border-blue-500/60 rounded-3xl p-5 cursor-pointer transition-transform hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
                    >
                      <div className="flex items-start justify-between">
                        <img src={game.image} alt={game.name} className="w-14 h-14 rounded-2xl object-cover border border-slate-700 group-hover:scale-105 transition shadow" />
                        <span className="bg-blue-500/15 text-[#5da1ff] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-blue-500/20">Populer</span>
                      </div>
                      <div className="mt-4">
                        <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-[#5da1ff] transition line-clamp-1">{game.name}</h3>
                        <p className="text-[11px] text-slate-400 mt-0.5">{game.publisher}</p>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-800/80">
                          <span className="text-[11px] text-emerald-400 font-semibold">Mulai {game.priceFrom}</span>
                          <span className="px-3 py-1 bg-blue-600/20 group-hover:bg-blue-600 text-[#5da1ff] group-hover:text-white text-[10px] font-bold rounded-lg transition">TOP UP</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION HUB SIARAN LANGSUNG PARA GAMERS (ANIMASI BERJALAN KE SAMPING) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 overflow-hidden">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white">Live Para Gamers & Streamer Populer</h2>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Tonton aksi seru mabar para gamer top Indonesia di YouTube Gaming & TikTok Live. Animasi berjalan otomatis ke samping (arahkan kursor untuk jeda).</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-red-500/10 text-red-400 border border-red-500/30 text-[11px] px-3 py-1 rounded-full font-bold flex items-center gap-1.5">
                    <IconYoutube className="w-3.5 h-3.5" />
                    YouTube Gaming
                  </span>
                  <span className="bg-slate-800 text-pink-300 border border-pink-500/30 text-[11px] px-3 py-1 rounded-full font-bold flex items-center gap-1.5">
                    <IconTiktok className="w-3.5 h-3.5" />
                    TikTok Live
                  </span>
                </div>
              </div>

              {/* TRACK MARQUEE ANIMASI BERJALAN KE SAMPING */}
              <div className="relative w-full overflow-hidden py-3">
                <div className="animate-gamers-scroll flex gap-5">
                  {[...gamerStreamsList, ...gamerStreamsList].map((stream, idx) => (
                    <div 
                      key={`${stream.id}-${idx}`}
                      className={`w-[290px] sm:w-[320px] shrink-0 bg-gradient-to-br ${stream.gradient} border border-slate-800 hover:border-blue-500/60 rounded-3xl p-5 space-y-4 shadow-xl flex flex-col justify-between transition-transform hover:-translate-y-1`}
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2.5">
                            <img src={stream.avatar} alt={stream.streamer} className="w-9 h-9 rounded-full object-cover border border-slate-700 shadow" />
                            <div>
                              <span className="text-xs font-bold text-white block leading-tight">{stream.streamer}</span>
                              <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                                {stream.badgePlatform === 'YouTube' ? <IconYoutube className="w-3 h-3 text-red-500" /> : <IconTiktok className="w-3 h-3 text-pink-400" />}
                                {stream.platform}
                              </span>
                            </div>
                          </div>
                          <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] px-2.5 py-0.5 rounded-full font-bold animate-pulse flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-live-pulse"></span>
                            LIVE
                          </span>
                        </div>

                        <div className="space-y-1 pt-1">
                          <span className="text-[11px] font-semibold text-blue-400 block">{stream.game}</span>
                          <h3 className="font-bold text-sm text-white line-clamp-2 leading-snug">{stream.title}</h3>
                        </div>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-slate-800/80">
                        <div className="flex justify-between items-center text-[11px] text-slate-400">
                          <span>Status: <strong className="text-emerald-400">Sedang Siaran</strong></span>
                          <span className="text-slate-300 font-medium">{stream.viewers}</span>
                        </div>
                        
                        <a 
                          href={stream.url} target="_blank" rel="noreferrer"
                          className={`w-full py-2.5 rounded-xl font-bold text-xs text-center transition flex items-center justify-center gap-1.5 shadow ${
                            stream.badgePlatform === 'YouTube' ? 'bg-red-600 hover:bg-red-500 text-white' : 'bg-slate-900 border border-pink-500/40 hover:bg-pink-600 text-white'
                          }`}
                        >
                          {stream.badgePlatform === 'YouTube' ? <IconYoutube className="w-3.5 h-3.5" /> : <IconTiktok className="w-3.5 h-3.5" />}
                          Tonton Siaran Live
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION KABAR & BERITA TERKINI (CNN INDONESIA, KOMPAS, DETIK, ANTARA) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
                    <IconNewspaper className="w-6 h-6 text-blue-400" />
                    Kabar & Berita Terkini
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Liputan resmi dari media terkemuka: CNN Indonesia, Kompas Tekno, detikInet, dan Antara News.</p>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-bold">
                  <span className="bg-sky-500/15 text-sky-300 border border-sky-500/30 px-2.5 py-1 rounded-lg">Kompas Tekno</span>
                  <span className="bg-red-500/15 text-red-300 border border-red-500/30 px-2.5 py-1 rounded-lg">CNN Indonesia</span>
                  <span className="bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-lg">detikInet</span>
                  <span className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-lg">Antara News</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {newsArticles.map((article) => (
                  <div key={article.id} className="bg-[#091d3d] border border-slate-800 hover:border-blue-500/40 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl flex flex-col justify-between transition group">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${article.sourceBadge}`}>
                          {article.source}
                        </span>
                        <span className="text-[11px] text-slate-500">{article.readTime}</span>
                      </div>
                      
                      <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-[#5da1ff] transition leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">{article.date}</span>
                      <button 
                        onClick={() => setSelectedArticle(article)}
                        className="text-xs font-bold text-[#5da1ff] hover:text-white transition flex items-center gap-1"
                      >
                        Baca Selengkapnya →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION JAMINAN LAYANAN & KEUNGGULAN TOKO */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">Standar Layanan WebVibes ID</h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Komitmen kami untuk memberikan pengalaman transaksi digital terbaik di Indonesia.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-[#091d3d] border border-slate-800 p-6 rounded-3xl space-y-3 shadow">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <IconZap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-white">Pengiriman Instan</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">Pesanan terhubung langsung ke API server publisher, terkirim otomatis dalam 1-5 detik.</p>
                </div>
                <div className="bg-[#091d3d] border border-slate-800 p-6 rounded-3xl space-y-3 shadow">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600/15 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <IconShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-white">100% Legal & Aman</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">Produk resmi dan legal tanpa risiko diamond minus maupun pemblokiran akun.</p>
                </div>
                <div className="bg-[#091d3d] border border-slate-800 p-6 rounded-3xl space-y-3 shadow">
                  <div className="w-12 h-12 rounded-2xl bg-amber-600/15 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <IconSparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-white">Harga Kompetitif</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">Harga bersahabat untuk pemain kasual dan reseller, lengkap dengan kupon diskon berkala.</p>
                </div>
                <div className="bg-[#091d3d] border border-slate-800 p-6 rounded-3xl space-y-3 shadow">
                  <div className="w-12 h-12 rounded-2xl bg-purple-600/15 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                    <IconHeadphones className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-white">Customer Care 24 Jam</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">Tim dukungan pelanggan siap sedia membantu kendala transaksi kapan pun via WhatsApp.</p>
                </div>
              </div>
            </section>

          </div>
        )}
      </div>

      {/* MODAL PEMBACA ARTIKEL PENUH (LENGKAP DENGAN SUMBER RESMI) */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[120] bg-[#051124]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
          <div className="bg-[#091d3d] border border-blue-500/30 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95">
            
            {/* MODAL HEADER */}
            <div className="p-5 sm:p-6 border-b border-slate-800 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${selectedArticle.sourceBadge}`}>
                    Sumber: {selectedArticle.source} ({selectedArticle.sourceChannel})
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {selectedArticle.date} • {selectedArticle.readTime}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {selectedArticle.title}
                </h2>
                <p className="text-xs text-slate-400 mt-1">Jurnalis / Peliput: {selectedArticle.author}</p>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition shrink-0"
              >
                <IconClose className="w-4 h-4" />
              </button>
            </div>

            {/* MODAL CONTENT - SCROLLABLE & BISA DIBACA SEMUA */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed custom-scrollbar">
              <div className="bg-[#051226] p-4 rounded-2xl border border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block">Ringkasan Laporan:</span>
                <p className="font-semibold text-slate-200">
                  {selectedArticle.summary}
                </p>
              </div>
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* MODAL FOOTER */}
            <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#07162e] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    showToast('Tautan artikel berhasil disalin!', 'success');
                  }}
                  className="text-xs font-semibold text-[#5da1ff] hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-blue-500/10 transition"
                >
                  <IconCopy className="w-3.5 h-3.5" />
                  Salin Tautan
                </button>
                <a
                  href={selectedArticle.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-slate-800 transition"
                >
                  <IconExternalLink className="w-3.5 h-3.5" />
                  Kunjungi {selectedArticle.source}
                </a>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition shadow"
              >
                Tutup Artikel
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER PROFESIONAL DENGAN DAFTAR METODE PEMBAYARAN RESMI */}
      <footer className="bg-[#07162e] border-t border-slate-800/80 pt-16 pb-12 px-4 sm:px-6 mt-20 text-slate-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-xs sm:text-sm">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo webvibesid.jpeg" alt="WebVibes ID" className="w-10 h-10 rounded-xl object-cover border border-blue-500/30" />
              <div>
                <span className="text-base font-black text-white tracking-wider block leading-none">WEB<span className="text-[#1769E0]">VIBES</span>.ID</span>
                <span className="text-[10px] text-slate-400 font-medium">VIBES LIMIT NO ASYIK</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Platform layanan digital dan top-up game terlengkap di Indonesia. Transaksi otomatis 24 jam nonstop dengan keamanan data terjamin.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Katalog Layanan</h4>
            <p onClick={() => { setCurrentView('games'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer transition">Top Up Game</p>
            <p onClick={() => { setCurrentView('voucher'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer transition">Voucher Digital</p>
            <p onClick={() => { setCurrentView('pulsa'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer transition">Pulsa & Paket Data</p>
            <p onClick={() => { setCurrentView('ppob'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer transition">Token Listrik PLN</p>
            <p onClick={() => { setCurrentView('promo'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer transition">Promo & Voucher Diskon</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Pusat Bantuan</h4>
            <p onClick={() => showToast('Hubungi CS WhatsApp di +62 812-3456-7890 untuk FAQ & Bantuan.', 'info')} className="hover:text-white cursor-pointer transition">Pertanyaan Umum (FAQ)</p>
            <p onClick={() => showToast('Pilih game, masukkan ID, pilih denom, bayar via QRIS/E-Wallet.', 'info')} className="hover:text-white cursor-pointer transition">Panduan Transaksi</p>
            <p onClick={() => showToast('WhatsApp Layanan: +62 812-3456-7890 (Aktif 24 Jam)', 'info')} className="hover:text-white cursor-pointer transition">Kontak Layanan CS</p>
            <p onClick={() => showToast('Privasi dan keamanan akun Anda terjamin 100%.', 'info')} className="hover:text-white cursor-pointer transition">Kebijakan Privasi</p>
            <p onClick={() => showToast('Semua transaksi bersifat final dan bergaransi pengiriman.', 'info')} className="hover:text-white cursor-pointer transition">Syarat & Ketentuan</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Hubungi Kami</h4>
            <p className="text-slate-300">Email: support@webvibes.id</p>
            <p className="text-slate-300">WhatsApp: +62 812-3456-7890</p>
            <p className="text-slate-300">Jam Operasional: 24 Jam Nonstop</p>
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-emerald-400 block">Sistem Otomatisasi Server Aktif</span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800/80 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 WebVibes ID. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-4">
            <span>QRIS</span> • <span>DANA</span> • <span>GoPay</span> • <span>OVO</span> • <span>ShopeePay</span>
          </div>
        </div>
      </footer>

      {/* NAVIGASI DOCK MOBILE KHUSUS SMARTPHONE DENGAN IKON VEKTOR */}
      <nav aria-label="Navigasi mobile" className="fixed bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-[400px] -translate-x-1/2 rounded-[10px] border border-[#1D4F91] bg-[#07152D]/95 px-2 py-2 shadow-[0_15px_25px_rgba(0,0,0,0.35)] backdrop-blur-md lg:hidden">
        <div className="mx-auto grid min-h-[54px] grid-cols-6 gap-1">
          <button
            type="button"
            onClick={() => { setCurrentView('home'); setSelectedProduct(null); setCheckoutStep('form'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-current={currentView === 'home' ? 'page' : undefined}
            className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-bold transition ${currentView === 'home' ? 'bg-[#1769E0]/20 text-[#5da1ff]' : 'text-slate-400 hover:bg-[#1769E0]/10 hover:text-white'}`}
          >
            <span aria-hidden="true" className="text-lg leading-none">
              <IconSparkles className="w-5 h-5 mx-auto" />
            </span>
            Beranda
          </button>

          <button
            type="button"
            onClick={() => { setCurrentView('games'); setSelectedProduct(null); setCheckoutStep('form'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-current={currentView === 'games' || currentView === 'detail' ? 'page' : undefined}
            className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-bold transition ${currentView === 'games' || currentView === 'detail' ? 'bg-[#1769E0]/20 text-[#5da1ff]' : 'text-slate-400 hover:bg-[#1769E0]/10 hover:text-white'}`}
          >
            <span aria-hidden="true" className="text-lg leading-none">
              <IconGamepad className="w-5 h-5 mx-auto" />
            </span>
            Game
          </button>

          <button
            type="button"
            onClick={() => { setCurrentView('voucher'); setSelectedProduct(null); setCheckoutStep('form'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-current={currentView === 'voucher' ? 'page' : undefined}
            className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-bold transition ${currentView === 'voucher' ? 'bg-[#1769E0]/20 text-[#5da1ff]' : 'text-slate-400 hover:bg-[#1769E0]/10 hover:text-white'}`}
          >
            <span aria-hidden="true" className="text-lg leading-none">
              <IconTicket className="w-5 h-5 mx-auto" />
            </span>
            Voucher
          </button>

          <button
            type="button"
            onClick={() => { setCurrentView('pulsa'); setSelectedProduct(null); setCheckoutStep('form'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-current={currentView === 'pulsa' ? 'page' : undefined}
            className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-bold transition ${currentView === 'pulsa' ? 'bg-[#1769E0]/20 text-[#5da1ff]' : 'text-slate-400 hover:bg-[#1769E0]/10 hover:text-white'}`}
          >
            <span aria-hidden="true" className="text-lg leading-none">
              <IconSmartphone className="w-5 h-5 mx-auto" />
            </span>
            Pulsa
          </button>

          <button
            type="button"
            onClick={() => { setCurrentView('ppob'); setSelectedProduct(null); setCheckoutStep('form'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-current={currentView === 'ppob' ? 'page' : undefined}
            className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-bold transition ${currentView === 'ppob' ? 'bg-[#1769E0]/20 text-[#5da1ff]' : 'text-slate-400 hover:bg-[#1769E0]/10 hover:text-white'}`}
          >
            <span aria-hidden="true" className="text-lg leading-none">
              <IconZap className="w-5 h-5 mx-auto" />
            </span>
            PPOB
          </button>

          <button
            type="button"
            onClick={() => { setCurrentView('history'); setSelectedProduct(null); setCheckoutStep('form'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-current={currentView === 'history' ? 'page' : undefined}
            className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-bold transition ${currentView === 'history' ? 'bg-[#1769E0]/20 text-[#5da1ff]' : 'text-slate-400 hover:bg-[#1769E0]/10 hover:text-white'}`}
          >
            <span aria-hidden="true" className="text-lg leading-none">
              <IconReceipt className="w-5 h-5 mx-auto" />
            </span>
            Riwayat
          </button>
        </div>
      </nav>

    </div>
  );
}
