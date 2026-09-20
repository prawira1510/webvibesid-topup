'use client';

import { useState, useRef } from 'react';

export default function WebVibesIDDigitalStore() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
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
    }
  };

  // DATABASE PROMO & VOUCHER
  const [promoList, setPromoList] = useState([
    { id: 1, title: 'Diskon Spesial Top-Up Game', code: 'HEMAT10', discountValue: 5000, targetCategory: 'Top-Up Game', desc: 'Potongan langsung Rp5.000 untuk transaksi game populer.', tag: 'Game', bg: 'from-blue-600 to-indigo-900' },
    { id: 2, title: 'Cashback Pulsa & Data Hemat', code: 'PULSAHEMAT', discountValue: 3000, targetCategory: 'Pulsa & Paket Data', desc: 'Potongan langsung untuk pengisian pulsa dan paket internet.', tag: 'Pulsa', bg: 'from-purple-600 to-indigo-900' },
    { id: 3, title: 'Diskon Token PLN & PPOB', code: 'PLNGACOR', discountValue: 5000, targetCategory: 'Token PLN', desc: 'Hemat bayar token listrik dan tagihan bulanan.', tag: 'PLN', bg: 'from-emerald-600 to-teal-900' },
  ]);

  const [newPromoTitle, setNewPromoTitle] = useState('');
  const [newPromoCode, setNewPromoCode] = useState('');
  const [newPromoDisc, setNewPromoDisc] = useState('');
  const [newPromoCategory, setNewPromoCategory] = useState('Top-Up Game');
  const [newPromoDesc, setNewPromoDesc] = useState('');

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPinInput === ADMIN_SECRET_PIN) {
      setIsAdminAuthenticated(true);
      setAdminPinInput('');
    } else {
      alert('PIN Admin salah! Akses ditolak.');
    }
  };

  const handleUpdateAdminPrice = (e) => {
    e.preventDefault();
    setAdminPrices({
      ...adminPrices,
      mlbb_wdp: Number(editWdpMlbb) || 28000,
      mlbb_tp: Number(editTpMlbb) || 150000,
    });
    alert('Harga produk WDP & Twilight Pass berhasil diperbarui di database backend!');
  };

  const handleCreateCustomPromo = (e) => {
    e.preventDefault();
    if (!newPromoTitle || !newPromoCode || !newPromoDisc || !newPromoDesc) {
      alert('Mohon lengkapi semua data form pembuatan promo!');
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
      bg: 'from-blue-700 to-slate-900'
    };

    setPromoList([newPromo, ...promoList]);
    alert(`Berhasil membuat voucher "${newPromoCode.toUpperCase()}" untuk kategori ${newPromoCategory}!`);
    
    setNewPromoTitle('');
    setNewPromoCode('');
    setNewPromoDisc('');
    setNewPromoDesc('');
    setCurrentView('promo');
  };

  const handleCheckPlnId = () => {
    if (!plnId || plnId.length < 5) {
      alert('Masukkan Nomor Meter / ID Pelanggan PLN yang valid.');
      return;
    }
    setPlnCustomerData({ name: 'Ahmad Fauzi (Tarif R1/900VA)', meterNo: plnId, segment: 'Prabayar' });
    alert('ID Pelanggan PLN berhasil diverifikasi!');
  };

  const handleCheckIndihome = () => {
    if (!indihomeId || indihomeId.length < 6) {
      alert('Masukkan Nomor Pelanggan IndiHome yang valid.');
      return;
    }
    setIndihomeData({ name: 'Budi Santoso', period: 'September 2026', billAmount: 315000, adminFee: 2500 });
    alert('Tagihan IndiHome berhasil ditemukan!');
  };

  const handlePhoneChange = (val) => {
    setPhoneNumber(val);
    const cleaned = val.replace(/\D/g, '');
    if (cleaned.length >= 4) {
      const prefix = cleaned.substring(0, 4);
      if (['0811', '0812', '0813', '0821', '0822', '0852', '0853', '0823'].some(p => prefix.startsWith(p.substring(0, 3)))) {
        setDetectedOperator({ name: 'Telkomsel', color: 'text-red-500', bg: 'bg-red-500/10' });
      } else if (['0814', '0815', '0816', '0855', '0856', '0857', '0858'].some(p => prefix.startsWith(p.substring(0, 3)))) {
        setDetectedOperator({ name: 'Indosat', color: 'text-yellow-400', bg: 'bg-yellow-400/10' });
      } else if (['0817', '0818', '0819', '0859', '0877', '0878'].some(p => prefix.startsWith(p.substring(0, 3)))) {
        setDetectedOperator({ name: 'XL', color: 'text-blue-400', bg: 'bg-blue-400/10' });
      } else if (['0831', '0832', '0833', '0838'].some(p => prefix.startsWith(p.substring(0, 3)))) {
        setDetectedOperator({ name: 'AXIS', color: 'text-purple-400', bg: 'bg-purple-400/10' });
      } else if (['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'].some(p => prefix.startsWith(p.substring(0, 3)))) {
        setDetectedOperator({ name: 'Smartfren', color: 'text-red-400', bg: 'bg-red-400/10' });
      } else if (['0895', '0896', '0897', '0898', '0899'].some(p => prefix.startsWith(p.substring(0, 3)))) {
        setDetectedOperator({ name: 'Tri', color: 'text-amber-500', bg: 'bg-amber-500/10' });
      } else {
        setDetectedOperator({ name: 'by.U', color: 'text-teal-400', bg: 'bg-teal-400/10' });
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
  ];

  const popularGames = allGamesList.filter(g => g.popular);

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
        { id: 'ml_wdp', name: 'Weekly Diamond Pass', price: adminPrices.mlbb_wdp, desc: 'Total 220 Diamonds + Reward Harian selama 7 Hari.' }
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
    ]
  };

  const handleVerifyAccount = () => {
    if (!gameId) {
      alert('Masukkan Game ID / UID terlebih dahulu!');
      return;
    }
    if (selectedProduct.requiresServer && !serverId) {
      alert('Game ini memerlukan Server ID!');
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
      } else {
        setVerifiedAccount({
          username: null,
          status: 'Invalid'
        });
      }
    }, 1200);
  };

  const vouchersList = [
    { id: 'steam', name: 'Steam Wallet', image: '/logo steam.jpg', category: 'Gaming', denoms: ['Rp12.000', 'Rp20.000', 'Rp45.000', 'Rp60.000', 'Rp120.000'], price: 12000 },
    { id: 'gplay', name: 'Google Play Store', image: '/logo play store.jpg', category: 'Apps', denoms: ['Rp10.000', 'Rp20.000', 'Rp50.000', 'Rp100.000', 'Rp150.000'], price: 10000 },
    { id: 'psn', name: 'PlayStation Store', image: '/logo PlayStation App.jpg', category: 'Gaming', denoms: ['Rp50.000', 'Rp100.000', 'Rp150.000', 'Rp250.000', 'Rp500.000'], price: 50000 },
    { id: 'roblox_vc', name: 'Roblox Gift Card', image: '/logo roblox.jpg', category: 'Gaming', denoms: ['Rp50.000', 'Rp100.000', 'Rp150.000', 'Rp300.000'], price: 50000 },
  ];

  const handleApplyPromo = (categoryName) => {
    const found = promoList.find(p => p.code.toUpperCase() === promoCode.trim().toUpperCase() && (p.targetCategory === categoryName || p.targetCategory === 'Semua Layanan'));
    if (found) {
      setAppliedPromo(found);
      alert(`Voucher "${found.code}" berhasil digunakan! Potongan Rp ${found.discountValue.toLocaleString('id-ID')} diterapkan.`);
    } else {
      alert(`Kode voucher tidak valid atau tidak berlaku untuk layanan ${categoryName}.`);
      setAppliedPromo(null);
    }
  };

  const getDiscountAmount = () => {
    if (!appliedPromo) return 0;
    return appliedPromo.discountValue;
  };

  const handleProceedToCheckout = (productInfo, denomInfo, targetInfo, categoryName) => {
    setAppliedPromo(null);
    setPromoCode('');
    const invoice = {
      invoiceNo: 'WV-' + Math.floor(100000 + Math.random() * 900000),
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
        setCheckoutStep('success');
      }, 1800);
    }
  };

  return (
    <div className="min-h-screen bg-[#06152D] text-white font-sans selection:bg-[#1769E0] selection:text-white flex flex-col justify-between">
      
      <div>
        {/* NAVBAR STICKY DENGAN LOGO WEB VIBES ID */}
        <nav className="sticky top-0 z-50 bg-[#0A1F3D]/95 backdrop-blur-md border-b border-[#1D4F91] px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer select-none">
              <img src="/logo webvibesid.jpeg" alt="WebVibes ID" className="w-10 h-10 rounded-xl object-cover border border-[#1D4F91] shadow-md shadow-blue-900/50" />
              <div>
                <span className="text-lg font-black tracking-wide block leading-none">WEB<span className="text-[#1769E0]">VIBES</span>.ID</span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider">VIBES LIMIT NO ASYIK</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
              <button onClick={() => { setCurrentView('home'); setSelectedProduct(null); setCheckoutStep('form'); }} className={`hover:text-white transition ${currentView === 'home' ? 'text-[#1769E0] font-bold' : ''}`}>Beranda</button>
              <button onClick={() => { setCurrentView('games'); setSelectedProduct(null); setCheckoutStep('form'); }} className={`hover:text-white transition ${currentView === 'games' ? 'text-[#1769E0] font-bold' : ''}`}>Top Up Game</button>
              <button onClick={() => { setCurrentView('voucher'); setCheckoutStep('form'); }} className={`hover:text-white transition ${currentView === 'voucher' ? 'text-[#1769E0] font-bold' : ''}`}>Voucher</button>
              <button onClick={() => { setCurrentView('pulsa'); setCheckoutStep('form'); }} className={`hover:text-white transition ${currentView === 'pulsa' ? 'text-[#1769E0] font-bold' : ''}`}>Pulsa & Data</button>
              <button onClick={() => { setCurrentView('ppob'); setCheckoutStep('form'); }} className={`hover:text-white transition ${currentView === 'ppob' ? 'text-[#1769E0] font-bold' : ''}`}>PPOB</button>
              <button onClick={() => { setCurrentView('promo'); setCheckoutStep('form'); }} className={`hover:text-white transition ${currentView === 'promo' ? 'text-[#1769E0] font-bold' : ''}`}>Promo</button>
              <button onClick={() => alert('Fitur Bantuan / FAQ WebVibes ID: Hubungi CS via WhatsApp atau email support@webvibes.id')} className="hover:text-white transition">Bantuan</button>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => { setCurrentView('games'); setCheckoutStep('form'); }} className="px-5 py-2 text-sm font-bold bg-[#1769E0] hover:bg-blue-600 rounded-xl shadow-lg transition">Mulai Transaksi</button>
            </div>
          </div>
        </nav>

        {/* CHECKOUT & PEMBAYARAN */}
        {checkoutStep === 'checkout' && activeInvoice ? (
          <div className="max-w-xl mx-auto px-6 py-12 animate-in fade-in">
            <div className="bg-[#0A1F3D] border border-blue-600 rounded-3xl p-8 space-y-6 shadow-2xl">
              <div className="text-center space-y-2 border-b border-[#1D4F91] pb-4">
                <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs px-3 py-1 rounded-full font-semibold">MENUNGGU PEMBAYARAN</span>
                <h2 className="text-2xl font-black text-white">Konfirmasi & Pembayaran</h2>
                <p className="text-xs text-slate-400">Invoice: <span className="font-mono text-blue-400">{activeInvoice.invoiceNo}</span></p>
              </div>

              <div className="bg-[#06152D] border border-[#1D4F91] rounded-2xl p-4 space-y-2.5 text-xs">
                <div className="flex justify-between"><span className="text-slate-400">Layanan / Game</span><span className="text-[#1769E0] font-bold">{activeInvoice.productName}</span></div>
                {activeInvoice.username && activeInvoice.username !== '-' && (
                  <div className="flex justify-between"><span className="text-slate-400">Username Akun</span><span className="font-bold text-emerald-400">{activeInvoice.username}</span></div>
                )}
                <div className="flex justify-between"><span className="text-slate-400">ID Tujuan / UID</span><span className="font-mono text-slate-200">{activeInvoice.target}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Nominal Produk</span><span className="font-semibold text-white">{activeInvoice.denomName}</span></div>
                <div className="flex justify-between border-t border-[#1D4F91] pt-2"><span className="text-slate-400">Harga</span><span className="font-semibold text-white">Rp {activeInvoice.price.toLocaleString('id-ID')}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Biaya Admin</span><span className="text-white">Rp 1.000</span></div>
                
                {appliedPromo && (
                  <div className="flex justify-between text-emerald-400 font-semibold bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                    <span>Potongan Voucher ({appliedPromo.code})</span>
                    <span>- Rp {getDiscountAmount().toLocaleString('id-ID')}</span>
                  </div>
                )}

                <div className="flex justify-between border-t border-[#1D4F91] pt-3 text-sm font-bold">
                  <span className="text-white">Total Pembayaran</span>
                  <span className="text-[#1769E0] text-base">
                    Rp {(activeInvoice.price + 1000 - getDiscountAmount() > 0 ? activeInvoice.price + 1000 - getDiscountAmount() : 1000).toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Pilih Metode Pembayaran</label>
                {['QRIS', 'DANA', 'GoPay', 'OVO', 'ShopeePay'].map((m) => (
                  <div 
                    key={m} onClick={() => setSelectedPayment(m)}
                    className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between text-sm ${selectedPayment === m ? 'border-[#1769E0] bg-[#1769E0]/20 font-bold text-white' : 'border-[#1D4F91] bg-[#06152D] text-slate-300'}`}
                  >
                    <span>{m === 'QRIS' ? '📷 QRIS (Scan & Otomatis Selesai)' : `⚡ E-Wallet ${m} (Direct Pay)`}</span>
                    <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedPayment === m ? 'border-[#1769E0] bg-[#1769E0]' : 'border-slate-500'}`}>
                      {selectedPayment === m && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                    </span>
                  </div>
                ))}
              </div>

              {selectedPayment === 'QRIS' && (
                <div className="bg-white p-6 rounded-2xl text-center space-y-3 animate-in fade-in">
                  <div className="w-40 h-40 bg-slate-900 mx-auto rounded-xl flex items-center justify-center text-white font-mono text-xs border-4 border-dashed border-[#1769E0] p-2">
                    [ QRIS DYNAMIC CODE ]
                  </div>
                  <p className="text-xs text-slate-700 font-bold">Scan QRIS menggunakan BCA, OVO, DANA, GoPay, atau Mobile Banking.</p>
                </div>
              )}

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Gunakan Kode Voucher</label>
                <div className="flex gap-2">
                  <input 
                    type="text" placeholder={`Coba kode untuk ${activeInvoice.category}`} value={promoCode} onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-[#06152D] border border-[#1D4F91] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#1769E0]"
                  />
                  <button onClick={() => handleApplyPromo(activeInvoice.category)} className="px-5 py-3 bg-[#1D4F91] hover:bg-blue-700 font-bold text-xs rounded-xl transition">Gunakan</button>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button 
                  onClick={handleProcessPayment} disabled={loadingPayment}
                  className="w-full py-4 bg-[#1769E0] hover:bg-blue-600 font-extrabold rounded-2xl shadow-lg transition text-base text-center block"
                >
                  {loadingPayment ? 'Menghubungkan & Memproses...' : `Bayar Sekarang via ${selectedPayment}`}
                </button>
                <button onClick={() => setCheckoutStep('form')} className="w-full text-xs text-slate-400 hover:text-white py-2">← Kembali</button>
              </div>
            </div>
          </div>
        ) : checkoutStep === 'success' && activeInvoice ? (
          /* STATUS TRANSAKSI BERHASIL */
          <div className="max-w-lg mx-auto px-6 py-16 animate-in zoom-in">
            <div className="bg-[#0A1F3D] border border-emerald-500/50 rounded-3xl p-8 space-y-6 text-center shadow-2xl">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto border-2 border-emerald-500 animate-bounce shadow-lg">
                ✓
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-white">PEMBELIAN BERHASIL</h2>
                <p className="text-xs text-slate-300">Transaksi berhasil dikonfirmasi dan diproses otomatis oleh sistem WebVibes ID.</p>
              </div>

              {activeInvoice.productName.includes('Token PLN') && (
                <div className="bg-[#06152D] border border-emerald-500/80 rounded-2xl p-5 space-y-3">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">KODE TOKEN PLN (STROOM)</span>
                  <div className="text-xl sm:text-2xl font-mono font-black text-white tracking-widest bg-[#0A1F3D] p-3 rounded-xl border border-[#1D4F91]">
                    {generatedTokenCode}
                  </div>
                  <button 
                    onClick={() => { navigator.clipboard.writeText(generatedTokenCode); alert('Kode token berhasil disalin!'); }}
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition shadow"
                  >
                    Salin Token
                  </button>
                </div>
              )}

              <div className="bg-[#06152D] border border-[#1D4F91] rounded-2xl p-4 space-y-2 text-xs text-left">
                <div className="flex justify-between"><span className="text-slate-400">Nomor Transaksi</span><span className="font-mono text-blue-400 font-bold">{activeInvoice.invoiceNo}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Game / Layanan</span><span className="text-white font-bold">{activeInvoice.productName}</span></div>
                {activeInvoice.username && activeInvoice.username !== '-' && (
                  <div className="flex justify-between"><span className="text-slate-400">Username</span><span className="text-emerald-400 font-bold">{activeInvoice.username}</span></div>
                )}
                <div className="flex justify-between"><span className="text-slate-400">ID Tujuan</span><span className="font-mono text-slate-200">{activeInvoice.target}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Produk</span><span className="font-semibold text-white">{activeInvoice.denomName}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Tanggal & Jam</span><span className="text-white">{activeInvoice.time}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Status</span><span className="text-emerald-400 font-bold">Sukses</span></div>
                <div className="flex justify-between border-t border-[#1D4F91] pt-2 font-bold text-sm"><span className="text-slate-400">Total</span><span className="text-emerald-400">Rp {(activeInvoice.price + 1000 - getDiscountAmount()).toLocaleString('id-ID')}</span></div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => { navigator.clipboard.writeText(activeInvoice.invoiceNo); alert('Nomor transaksi berhasil disalin!'); }} className="flex-1 py-3 bg-[#06152D] border border-[#1D4F91] hover:border-[#1769E0] font-bold rounded-xl text-xs transition shadow">
                  Salin No. Transaksi
                </button>
                <button onClick={() => window.print()} className="flex-1 py-3 bg-[#1769E0] hover:bg-blue-600 font-bold rounded-xl text-xs transition shadow">
                  Print / Struk PDF
                </button>
              </div>
            </div>
          </div>
        ) : currentView === 'promo' ? (
          /* HALAMAN PROMO PUBLIK */
          <div className="max-w-7xl mx-auto px-6 py-12 space-y-10 animate-in fade-in">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h1 className="text-3xl font-extrabold">Promo WebVibes ID</h1>
              <p className="text-slate-400 text-sm">Gunakan voucher promo dan dapatkan harga lebih hemat.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {promoList.map((p) => (
                <div key={p.id} className={`bg-gradient-to-br ${p.bg} border border-[#1D4F91] rounded-3xl p-8 space-y-4 shadow-xl flex flex-col justify-between`}>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="bg-white/20 text-white border border-white/30 text-xs px-3 py-1 rounded-full font-bold">{p.tag}</span>
                      <span className="text-[11px] bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full font-bold">Berlaku: {p.targetCategory}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                    <p className="text-slate-200 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-300 block uppercase">Kode Voucher</span>
                      <span className="font-mono font-bold text-lg text-amber-300 tracking-wider">{p.code}</span>
                    </div>
                    <button onClick={() => { navigator.clipboard.writeText(p.code); alert(`Kode promo "${p.code}" berhasil disalin!`); }} className="px-5 py-2.5 bg-white text-[#06152D] font-bold rounded-xl text-xs hover:bg-slate-100 transition shadow">
                      Salin Kode
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : currentView === 'admin-promo' ? (
          /* PANEL ADMIN BACKEND */
          <div className="max-w-xl mx-auto px-6 py-16 animate-in fade-in">
            {!isAdminAuthenticated ? (
              <div className="bg-[#0A1F3D] border border-[#1D4F91] rounded-3xl p-8 space-y-6 shadow-2xl text-center">
                <div className="w-14 h-14 bg-[#1769E0]/20 text-[#1769E0] rounded-2xl flex items-center justify-center text-2xl mx-auto font-bold">🔒</div>
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-white">Panel Admin WebVibes ID</h2>
                  <p className="text-xs text-slate-400">Masukkan PIN Admin (1510) untuk mengatur harga produk dan voucher.</p>
                </div>
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <input 
                    type="password" placeholder="Masukkan PIN Rahasia" value={adminPinInput} onChange={(e) => setAdminPinInput(e.target.value)}
                    className="w-full bg-[#06152D] border border-[#1D4F91] rounded-xl px-4 py-3 text-center text-white tracking-widest text-lg focus:outline-none focus:border-[#1769E0]"
                  />
                  <button type="submit" className="w-full py-3.5 bg-[#1769E0] hover:bg-blue-600 font-bold rounded-xl text-xs transition shadow">
                    Masuk Panel Admin
                  </button>
                </form>
                <button onClick={() => setCurrentView('home')} className="text-xs text-slate-400 hover:text-white block mx-auto pt-2">← Kembali ke Beranda</button>
              </div>
            ) : (
              <div className="bg-[#0A1F3D] border border-[#1D4F91] rounded-3xl p-8 space-y-8 shadow-2xl">
                <div className="flex justify-between items-center border-b border-[#1D4F91] pb-4">
                  <div>
                    <h1 className="text-xl font-black">Backend Admin WebVibes ID</h1>
                    <p className="text-xs text-emerald-400 font-semibold">✓ Terverifikasi • Atur Harga WDP, Twilight Pass & Promo</p>
                  </div>
                  <button onClick={() => setIsAdminAuthenticated(false)} className="text-xs text-red-400 hover:underline">Keluar</button>
                </div>

                <form onSubmit={handleUpdateAdminPrice} className="space-y-4 text-xs bg-[#06152D] p-5 rounded-2xl border border-[#1D4F91]">
                  <h3 className="font-bold text-sm text-white border-b border-[#1D4F91] pb-2">Atur Harga Jual Produk</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-300 block mb-1">Harga WDP MLBB (Rp)</label>
                      <input type="number" value={editWdpMlbb} onChange={(e) => setEditWdpMlbb(e.target.value)} className="w-full bg-[#0A1F3D] border border-[#1D4F91] rounded-xl px-3 py-2 text-white" />
                    </div>
                    <div>
                      <label className="text-slate-300 block mb-1">Harga Twilight Pass (Rp)</label>
                      <input type="number" value={editTpMlbb} onChange={(e) => setEditTpMlbb(e.target.value)} className="w-full bg-[#0A1F3D] border border-[#1D4F91] rounded-xl px-3 py-2 text-white" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 font-bold rounded-xl text-white transition">Simpan Perubahan Harga</button>
                </form>

                <form onSubmit={handleCreateCustomPromo} className="space-y-4 text-xs bg-[#06152D] p-5 rounded-2xl border border-[#1D4F91]">
                  <h3 className="font-bold text-sm text-white border-b border-[#1D4F91] pb-2">Buat Voucher Promo Baru</h3>
                  <div>
                    <label className="text-slate-300 block mb-1">Nama Promo</label>
                    <input type="text" placeholder="Contoh: Diskon Lebaran" value={newPromoTitle} onChange={(e) => setNewPromoTitle(e.target.value)} className="w-full bg-[#0A1F3D] border border-[#1D4F91] rounded-xl px-3 py-2 text-white" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-300 block mb-1">Kode Voucher</label>
                      <input type="text" placeholder="Cth: LEBARAN5K" value={newPromoCode} onChange={(e) => setNewPromoCode(e.target.value)} className="w-full bg-[#0A1F3D] border border-[#1D4F91] rounded-xl px-3 py-2 text-white uppercase" />
                    </div>
                    <div>
                      <label className="text-slate-300 block mb-1">Potongan (Rp)</label>
                      <input type="number" placeholder="Cth: 5000" value={newPromoDisc} onChange={(e) => setNewPromoDisc(e.target.value)} className="w-full bg-[#0A1F3D] border border-[#1D4F91] rounded-xl px-3 py-2 text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="text-slate-300 block mb-1">Kategori Layanan</label>
                    <select value={newPromoCategory} onChange={(e) => setNewPromoCategory(e.target.value)} className="w-full bg-[#0A1F3D] border border-[#1D4F91] rounded-xl px-3 py-2 text-white">
                      <option value="Top-Up Game">Top-Up Game</option>
                      <option value="Pulsa & Paket Data">Pulsa & Paket Data</option>
                      <option value="Token PLN">Token PLN & PPOB</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-300 block mb-1">Deskripsi</label>
                    <textarea rows="2" value={newPromoDesc} onChange={(e) => setNewPromoDesc(e.target.value)} className="w-full bg-[#0A1F3D] border border-[#1D4F91] rounded-xl px-3 py-2 text-white"></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 bg-[#1769E0] hover:bg-blue-600 font-bold rounded-xl text-white transition">Publish Voucher</button>
                </form>
              </div>
            )}
          </div>
        ) : currentView === 'games' ? (
          /* HALAMAN TOP UP GAME */
          <div className="max-w-7xl mx-auto px-6 py-12 space-y-8 animate-in fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#1D4F91] pb-6">
              <div>
                <h1 className="text-3xl font-extrabold">Top Up Game</h1>
                <p className="text-sm text-slate-400 mt-1">Pilih game favoritmu dari {allGamesList.length} daftar game resmi WebVibes ID.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Semua', 'Mobile', 'PC', 'RPG', 'FPS', 'Casual'].map((tab) => (
                  <button 
                    key={tab} onClick={() => setActiveGameTab(tab)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeGameTab === tab ? 'bg-[#1769E0] text-white shadow' : 'bg-[#0A1F3D] border border-[#1D4F91] text-slate-300'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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
                    }}
                    className="bg-[#0A1F3D] border border-[#1D4F91] hover:border-[#1769E0] rounded-2xl p-5 cursor-pointer transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
                  >
                    <div className="flex items-start justify-between">
                      <img src={game.image} alt={game.name} className="w-14 h-14 rounded-2xl object-cover border border-[#1D4F91] group-hover:scale-110 transition shadow-inner" />
                      <span className="bg-[#1769E0]/25 text-[#1769E0] text-[10px] font-bold px-2 py-0.5 rounded-full">{game.category}</span>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-bold text-base text-white group-hover:text-[#1769E0]">{game.name}</h3>
                      <p className="text-xs text-slate-400">{game.publisher}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-xs text-emerald-400 font-semibold">Mulai {game.priceFrom}</span>
                        <button className="px-3 py-1 bg-[#1769E0] hover:bg-blue-600 text-white text-[11px] font-bold rounded-lg transition">TOP UP</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : currentView === 'detail' && selectedProduct ? (
          /* HALAMAN DETAIL TRANSAKSI GAME */
          <div className="max-w-7xl mx-auto px-6 py-10 animate-in fade-in">
            <button onClick={() => { setCurrentView('games'); setSelectedProduct(null); }} className="mb-6 text-sm text-[#1769E0] hover:underline font-semibold flex items-center gap-1">← Kembali ke Daftar Game</button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-[#0A1F3D] border border-[#1D4F91] rounded-2xl p-6 flex items-center gap-4 shadow-lg">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-16 h-16 rounded-xl object-cover border border-[#1D4F91] shadow-inner" />
                  <div>
                    <h1 className="text-2xl font-bold">{selectedProduct.name}</h1>
                    <p className="text-sm text-slate-400">Publisher: {selectedProduct.publisher} • Proses Instan Otomatis</p>
                  </div>
                </div>

                {/* TAB KHUSUS MLBB & MAGIC CHESS GO GO */}
                {(selectedProduct.id === 'ml' || selectedProduct.id === 'mcgogo') && (
                  <div className="flex gap-3 bg-[#0A1F3D] p-2 rounded-2xl border border-[#1D4F91]">
                    {selectedProduct.id === 'ml' ? (
                      ['Diamonds', 'Weekly Diamond Pass', 'Twilight Pass'].map((tab) => (
                        <button 
                          key={tab} onClick={() => { setGameSubTab(tab); setSelectedDenom(null); }}
                          className={`flex-1 py-3 rounded-xl text-xs font-bold transition ${gameSubTab === tab ? 'bg-[#1769E0] text-white shadow' : 'bg-[#06152D] text-slate-400 hover:text-white'}`}
                        >
                          {tab}
                        </button>
                      ))
                    ) : (
                      ['Diamonds', 'Weekly Diamond Pass'].map((tab) => (
                        <button 
                          key={tab} onClick={() => { setGameSubTab(tab); setSelectedDenom(null); }}
                          className={`flex-1 py-3 rounded-xl text-xs font-bold transition ${gameSubTab === tab ? 'bg-[#1769E0] text-white shadow' : 'bg-[#06152D] text-slate-400 hover:text-white'}`}
                        >
                          {tab}
                        </button>
                      ))
                    )}
                  </div>
                )}

                <div className="bg-[#0A1F3D] border border-[#1D4F91] rounded-2xl p-6 space-y-4 shadow-lg">
                  <h2 className="text-base font-bold flex items-center gap-2"><span className="w-6 h-6 bg-[#1769E0] rounded-full flex items-center justify-center text-xs text-white">1</span> Masukkan Data Akun</h2>
                  <div className={`grid grid-cols-1 ${selectedProduct.requiresServer ? 'sm:grid-cols-2' : 'sm:grid-cols-1'} gap-4`}>
                    <div>
                      <label className="text-xs text-slate-300 mb-1 block font-medium">
                        {selectedProduct.id === 'valorant' ? 'Riot ID / Name#Tag' : selectedProduct.id === 'roblox' ? 'Username / User ID' : 'Game ID / UID'}
                      </label>
                      <input 
                        type="text" placeholder={selectedProduct.id === 'valorant' ? 'Contoh: Player#1234' : 'Contoh: 12345678'} value={gameId} onChange={(e) => setGameId(e.target.value)} 
                        className="w-full bg-[#06152D] border border-[#1D4F91] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1769E0]" 
                      />
                    </div>
                    {selectedProduct.requiresServer && (
                      <div>
                        <label className="text-xs text-slate-300 mb-1 block font-medium">Server ID</label>
                        <input 
                          type="text" placeholder="Contoh: (1234)" value={serverId} onChange={(e) => setServerId(e.target.value)} 
                          className="w-full bg-[#06152D] border border-[#1D4F91] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1769E0]" 
                        />
                      </div>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <button 
                      onClick={handleVerifyAccount} disabled={isVerifying}
                      className="px-6 py-3 bg-[#1D4F91] hover:bg-blue-700 font-bold text-xs rounded-xl transition shadow text-white"
                    >
                      {isVerifying ? 'Memeriksa akun...' : 'Cek Username'}
                    </button>

                    {verifiedAccount && (
                      <div className="text-xs">
                        {verifiedAccount.username ? (
                          <span className="text-emerald-400 font-bold">✓ Akun Ditemukan: {verifiedAccount.username}</span>
                        ) : (
                          <span className="text-red-400 font-bold">✕ Akun tidak ditemukan</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-[#0A1F3D] border border-[#1D4F91] rounded-2xl p-6 space-y-4 shadow-lg">
                  <h2 className="text-base font-bold flex items-center gap-2"><span className="w-6 h-6 bg-[#1769E0] rounded-full flex items-center justify-center text-xs text-white">2</span> Pilih Nominal Produk</h2>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedProduct.id === 'ml' ? (
                      gameDenomDatabase.ml[gameSubTab].map((item) => (
                        <div 
                          key={item.id} onClick={() => setSelectedDenom(item)}
                          className={`p-4 rounded-xl border cursor-pointer transition flex flex-col justify-between ${selectedDenom?.id === item.id ? 'border-[#1769E0] bg-[#1769E0]/20 ring-1 ring-[#1769E0]' : 'border-[#1D4F91] bg-[#06152D] hover:border-slate-500'}`}
                        >
                          <div>
                            <span className="font-semibold text-sm text-slate-100 block">{item.name}</span>
                            {item.desc && <span className="text-[10px] text-slate-400 block mt-1">{item.desc}</span>}
                          </div>
                          <span className="text-[#1769E0] font-bold mt-3 text-sm">Rp {item.price.toLocaleString('id-ID')}</span>
                        </div>
                      ))
                    ) : selectedProduct.id === 'mcgogo' ? (
                      gameDenomDatabase.mcgogo[gameSubTab].map((item) => (
                        <div 
                          key={item.id} onClick={() => setSelectedDenom(item)}
                          className={`p-4 rounded-xl border cursor-pointer transition flex flex-col justify-between ${selectedDenom?.id === item.id ? 'border-[#1769E0] bg-[#1769E0]/20 ring-1 ring-[#1769E0]' : 'border-[#1D4F91] bg-[#06152D] hover:border-slate-500'}`}
                        >
                          <div>
                            <span className="font-semibold text-sm text-slate-100 block">{item.name}</span>
                            {item.desc && <span className="text-[10px] text-slate-400 block mt-1">{item.desc}</span>}
                          </div>
                          <span className="text-[#1769E0] font-bold mt-3 text-sm">Rp {item.price.toLocaleString('id-ID')}</span>
                        </div>
                      ))
                    ) : (
                      (gameDenomDatabase[selectedProduct.id] || gameDenomDatabase.ff).map((item) => (
                        <div 
                          key={item.id} onClick={() => setSelectedDenom(item)}
                          className={`p-4 rounded-xl border cursor-pointer transition flex flex-col justify-between ${selectedDenom?.id === item.id ? 'border-[#1769E0] bg-[#1769E0]/20 ring-1 ring-[#1769E0]' : 'border-[#1D4F91] bg-[#06152D] hover:border-slate-500'}`}
                        >
                          <span className="font-semibold text-sm text-slate-100">{item.name}</span>
                          <span className="text-[#1769E0] font-bold mt-3 text-sm">Rp {item.price.toLocaleString('id-ID')}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-[#0A1F3D] border border-[#1D4F91] rounded-2xl p-6 space-y-6 shadow-xl">
                  <h3 className="text-lg font-bold border-b border-[#1D4F91] pb-3">Ringkasan Pesanan</h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <div className="flex justify-between"><span className="text-slate-400">Game</span><span className="font-semibold text-white">{selectedProduct.name}</span></div>
                    {verifiedAccount && verifiedAccount.username && (
                      <div className="flex justify-between"><span className="text-slate-400">Username</span><span className="font-bold text-emerald-400">{verifiedAccount.username}</span></div>
                    )}
                    <div className="flex justify-between"><span className="text-slate-400">ID Tujuan</span><span className="font-mono text-white">{gameId ? `${gameId} ${serverId ? '(' + serverId + ')' : ''}` : '-'}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Produk</span><span className="font-semibold text-white">{selectedDenom ? selectedDenom.name : '-'}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Harga</span><span>Rp {selectedDenom ? selectedDenom.price.toLocaleString('id-ID') : '0'}</span></div>
                  </div>
                  <div className="border-t border-[#1D4F91] pt-4 flex justify-between items-center">
                    <span className="font-bold text-base">Total</span>
                    <span className="font-black text-xl text-[#1769E0]">Rp {selectedDenom ? selectedDenom.price.toLocaleString('id-ID') : '0'}</span>
                  </div>
                  <button 
                    onClick={() => {
                      if (!gameId || !selectedDenom) {
                        alert('Lengkapi ID Game dan pilih nominal terlebih dahulu!');
                        return;
                      }
                      if (!verifiedAccount || !verifiedAccount.username) {
                        alert('Silakan klik "Cek Username" dan pastikan akun berhasil diverifikasi sebelum melanjutkan!');
                        return;
                      }
                      handleProceedToCheckout(selectedProduct.name, selectedDenom, `${gameId} ${serverId ? '(' + serverId + ')' : ''}`, 'Top-Up Game');
                    }}
                    className="w-full py-4 bg-[#1769E0] hover:bg-blue-600 font-extrabold rounded-xl shadow-lg transition text-base text-center block text-white"
                  >
                    Lanjut ke Pembayaran
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : currentView === 'voucher' ? (
          /* HALAMAN VOUCHER DIGITAL */
          <div className="max-w-7xl mx-auto px-6 py-12 space-y-8 animate-in fade-in">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold">Voucher Digital</h1>
              <p className="text-slate-400 text-sm">Voucher digital untuk game, aplikasi, entertainment, dan kebutuhan lainnya.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {vouchersList.map((v) => (
                <div key={v.id} className="bg-[#0A1F3D] border border-[#1D4F91] rounded-2xl p-6 space-y-4 shadow-lg flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <img src={v.image} alt={v.name} className="w-14 h-14 rounded-2xl object-cover border border-[#1D4F91] shadow-inner" />
                    <div>
                      <h3 className="font-bold text-base text-white">{v.name}</h3>
                      <span className="text-xs text-[#1769E0] font-semibold">{v.category}</span>
                    </div>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-[#1D4F91]/50">
                    <p className="text-xs text-slate-400">Pilihan Nominal:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {v.denoms.map((d, i) => (
                        <span key={i} className="text-xs bg-[#06152D] border border-[#1D4F91] px-2.5 py-1 rounded-lg text-slate-200">{d}</span>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => handleProceedToCheckout(v.name, { name: 'Voucher Reguler', price: v.price }, 'Email Pembeli', 'Voucher Digital')} className="w-full py-3 bg-[#1769E0] hover:bg-blue-600 font-bold text-xs rounded-xl transition shadow">
                    Beli Voucher
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : currentView === 'pulsa' ? (
          /* HALAMAN PULSA & PAKET DATA */
          <div className="max-w-5xl mx-auto px-6 py-12 space-y-8 animate-in fade-in">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <h1 className="text-3xl font-extrabold">Pulsa & Paket Data</h1>
              <p className="text-slate-400 text-sm">Isi pulsa dan paket internet dari berbagai operator Indonesia.</p>
            </div>

            <div className="bg-[#0A1F3D] border border-[#1D4F91] rounded-3xl p-8 space-y-6 shadow-2xl">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-slate-300 font-bold uppercase tracking-wider">Masukkan Nomor HP</label>
                  {detectedOperator && (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${detectedOperator.bg} ${detectedOperator.color} border border-current`}>
                      ✨ Operator Terdeteksi: {detectedOperator.name}
                    </span>
                  )}
                </div>
                <input 
                  type="text" placeholder="08xxxxxxxxxx" value={phoneNumber} onChange={(e) => handlePhoneChange(e.target.value)}
                  className="w-full bg-[#06152D] border border-[#1D4F91] rounded-2xl px-5 py-4 text-base text-white focus:outline-none focus:border-[#1769E0] tracking-widest font-mono"
                />
              </div>

              <div className="flex gap-3 border-b border-[#1D4F91] pb-4 pt-2">
                {['Pulsa', 'Paket Data'].map(tab => (
                  <button 
                    key={tab} onClick={() => setPulsaTab(tab)}
                    className={`px-8 py-3 rounded-2xl font-bold text-sm transition ${pulsaTab === tab ? 'bg-[#1769E0] text-white shadow-lg' : 'bg-[#06152D] border border-[#1D4F91] text-slate-400'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {pulsaTab === 'Pulsa' ? (
                  [
                    { name: 'Rp5.000', price: 6000 }, { name: 'Rp10.000', price: 11000 }, { name: 'Rp20.000', price: 21000 },
                    { name: 'Rp50.000', price: 51000 }, { name: 'Rp100.000', price: 101000 }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => {
                        if (!phoneNumber || phoneNumber.length < 10) return alert('Masukkan nomor HP yang valid terlebih dahulu!');
                        handleProceedToCheckout(`Pulsa ${detectedOperator?.name || 'Seluler'} ${item.name}`, { name: item.name, price: item.price }, phoneNumber, 'Pulsa & Paket Data');
                      }}
                      className="bg-[#06152D] border border-[#1D4F91] hover:border-[#1769E0] p-4 rounded-2xl cursor-pointer transition flex flex-col justify-between group shadow"
                    >
                      <span className="font-black text-base text-white group-hover:text-[#1769E0]">{item.name}</span>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-[#1769E0] font-bold">Rp {item.price.toLocaleString('id-ID')}</span>
                        <span className="text-[10px] bg-[#1769E0]/20 text-blue-300 px-2 py-0.5 rounded-lg">Pilih</span>
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
                        if (!phoneNumber || phoneNumber.length < 10) return alert('Masukkan nomor HP yang valid terlebih dahulu!');
                        handleProceedToCheckout(`Paket Data ${detectedOperator?.name || 'Telkomsel'} ${item.name}`, { name: `${item.name} (${item.active})`, price: item.price }, phoneNumber, 'Pulsa & Paket Data');
                      }}
                      className="bg-[#06152D] border border-[#1D4F91] hover:border-[#1769E0] p-4 rounded-2xl cursor-pointer transition flex flex-col justify-between group shadow"
                    >
                      <div>
                        <span className="font-black text-lg text-white group-hover:text-[#1769E0]">{item.name}</span>
                        <span className="text-[11px] text-slate-400 block mt-0.5">Masa Aktif: {item.active}</span>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-[#1769E0] font-bold">Rp {item.price.toLocaleString('id-ID')}</span>
                        <span className="text-[10px] bg-[#1769E0]/20 text-blue-300 px-2 py-0.5 rounded-lg">Pilih</span>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          </div>
        ) : currentView === 'ppob' ? (
          /* HALAMAN PPOB & PEMBAYARAN */
          <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 animate-in fade-in">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-extrabold">PPOB & Pembayaran</h1>
              <p className="text-slate-400 text-sm">Bayar berbagai kebutuhan digital dalam satu platform dengan mudah dan aman.</p>
            </div>

            <div className="bg-[#0A1F3D] border border-[#1D4F91] rounded-3xl p-8 space-y-8 shadow-2xl">
              {/* TOKEN PLN */}
              <div className="space-y-4 border-b border-[#1D4F91] pb-8">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">⚡ Token PLN Prabayar</h3>
                <div>
                  <label className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-2 block">Nomor Meter / ID Pelanggan</label>
                  <div className="flex gap-3">
                    <input 
                      type="text" placeholder="Masukkan nomor meter atau ID pelanggan" value={plnId} onChange={(e) => setPlnId(e.target.value)}
                      className="flex-1 bg-[#06152D] border border-[#1D4F91] rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#1769E0] font-mono"
                    />
                    <button onClick={handleCheckPlnId} className="px-6 py-4 bg-[#1769E0] hover:bg-blue-600 font-bold rounded-2xl text-xs transition text-white">
                      Cek ID
                    </button>
                  </div>
                </div>

                {plnCustomerData && (
                  <div className="bg-[#06152D] border border-blue-500/50 rounded-2xl p-4 text-xs">
                    <span className="text-emerald-400 font-bold">✓ Pelanggan: {plnCustomerData.name}</span>
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  {[
                    { name: 'Rp20.000', price: 22000 }, { name: 'Rp50.000', price: 52000 }, { name: 'Rp100.000', price: 102000 },
                    { name: 'Rp200.000', price: 202000 }, { name: 'Rp500.000', price: 502000 }, { name: 'Rp1.000.000', price: 1002000 }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => {
                        if (!plnCustomerData) return alert('Silakan masukkan dan klik "Cek ID" PLN terlebih dahulu!');
                        handleProceedToCheckout(`Token PLN ${item.name}`, item, plnId, 'Token PLN');
                      }}
                      className="bg-[#06152D] border border-[#1D4F91] hover:border-[#1769E0] p-4 rounded-2xl cursor-pointer transition flex flex-col justify-between group shadow"
                    >
                      <span className="font-black text-base text-white group-hover:text-[#1769E0]">{item.name}</span>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-[#1769E0] font-bold">Rp {item.price.toLocaleString('id-ID')}</span>
                        <span className="text-[10px] bg-[#1769E0]/20 text-blue-300 px-2 py-0.5 rounded-lg">PILIH</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* INDIHOME */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">🏠 Tagihan IndiHome / Telkom</h3>
                <div>
                  <label className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-2 block">Nomor Pelanggan IndiHome</label>
                  <div className="flex gap-3">
                    <input 
                      type="text" placeholder="Masukkan nomor pelanggan IndiHome" value={indihomeId} onChange={(e) => setIndihomeId(e.target.value)}
                      className="flex-1 bg-[#06152D] border border-[#1D4F91] rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#1769E0] font-mono"
                    />
                    <button onClick={handleCheckIndihome} className="px-6 py-4 bg-[#1769E0] hover:bg-blue-600 font-bold rounded-2xl text-xs transition text-white">
                      Cek Tagihan
                    </button>
                  </div>
                </div>

                {indihomeData && (
                  <div className="bg-[#06152D] border border-emerald-500/50 rounded-2xl p-5 space-y-2 text-xs">
                    <div className="flex justify-between"><span className="text-slate-400">Nama Pelanggan</span><span className="font-bold text-white">{indihomeData.name}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Periode Tagihan</span><span className="text-white">{indihomeData.period}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Tagihan</span><span className="text-white">Rp {indihomeData.billAmount.toLocaleString('id-ID')}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Biaya Admin</span><span className="text-white">Rp {indihomeData.adminFee.toLocaleString('id-ID')}</span></div>
                    <div className="flex justify-between border-t border-[#1D4F91] pt-2 font-bold text-sm"><span className="text-slate-400">Total Pembayaran</span><span className="text-emerald-400">Rp {(indihomeData.billAmount + indihomeData.adminFee).toLocaleString('id-ID')}</span></div>
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
          /* BERANDA UTAMA (HOME) LENGKAP */
          <div className="space-y-20 animate-in fade-in">
            
            {/* HERO SECTION */}
            <section className="relative overflow-hidden py-16 lg:py-24 px-6 border-b border-[#1D4F91]/50 bg-gradient-to-b from-[#0A1F3D] to-[#06152D]">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-[#1769E0]/10 border border-[#1769E0]/30 px-4 py-2 rounded-full text-xs font-semibold text-[#1769E0] flex-wrap justify-center">
                    <span>⚡ Proses Cepat</span> • <span>🔒 Aman & Terpercaya</span> • <span>💰 Harga Bersahabat</span> • <span>📱 Layanan Digital Lengkap</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">Top-Up Game, Voucher, Pulsa & PPOB Terlengkap</h1>
                  <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal">Semua kebutuhan digitalmu dalam satu tempat. Cepat, aman, dan harga bersahabat bersama WebVibes ID.</p>

                  <div className="flex bg-[#06152D] border border-[#1D4F91] rounded-2xl p-2 max-w-lg mx-auto lg:mx-0 shadow-lg">
                    <input type="text" placeholder="Cari game, voucher, pulsa, paket data, atau layanan..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1 bg-transparent px-4 py-3 text-sm text-white focus:outline-none placeholder:text-slate-500" />
                    <button onClick={() => setCurrentView('games')} className="px-6 py-3 bg-[#1769E0] hover:bg-blue-600 font-bold rounded-xl text-sm transition">Cari</button>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
                    <button onClick={() => setCurrentView('games')} className="px-4 py-2 bg-[#0A1F3D] border border-[#1D4F91] hover:border-[#1769E0] rounded-xl text-xs font-bold transition">🎮 Top Up Game</button>
                    <button onClick={() => setCurrentView('voucher')} className="px-4 py-2 bg-[#0A1F3D] border border-[#1D4F91] hover:border-[#1769E0] rounded-xl text-xs font-bold transition">🎟️ Voucher</button>
                    <button onClick={() => setCurrentView('pulsa')} className="px-4 py-2 bg-[#0A1F3D] border border-[#1D4F91] hover:border-[#1769E0] rounded-xl text-xs font-bold transition">📱 Pulsa & Data</button>
                    <button onClick={() => setCurrentView('ppob')} className="px-4 py-2 bg-[#0A1F3D] border border-[#1D4F91] hover:border-[#1769E0] rounded-xl text-xs font-bold transition">⚡ PPOB</button>
                  </div>
                </div>

                {/* POSTER / PROMO BANNER */}
                <div className="flex justify-center">
                  <div className="w-full max-w-md bg-gradient-to-br from-blue-700 via-indigo-900 to-[#0A1F3D] border border-blue-400/40 p-8 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 text-9xl opacity-10 font-black">⚡</div>
                    <span className="bg-amber-400 text-slate-900 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Promo Spesial WebVibes ID</span>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-black text-white">Diskon Top-Up & PPOB Terbesar</h2>
                      <p className="text-xs text-slate-200 leading-relaxed">Gunakan kode voucher promo dan dapatkan harga lebih hemat untuk setiap transaksi digitalmu.</p>
                    </div>
                    <button onClick={() => setCurrentView('promo')} className="w-full py-3 bg-white text-[#06152D] font-extrabold rounded-xl text-xs hover:bg-slate-100 transition shadow">
                      Lihat Semua Promo →
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4 KATEGORI UTAMA DENGAN LOGO LENGKAP */}
            <section className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div onClick={() => setCurrentView('games')} className="bg-[#0A1F3D] border border-[#1D4F91] hover:border-[#1769E0] rounded-3xl p-6 space-y-4 shadow-xl transition cursor-pointer group flex flex-col justify-between">
                  <div className="space-y-3">
                    <img src="/logo top up game.jpg" alt="Top Up Game" className="w-14 h-14 rounded-2xl object-cover border border-[#1D4F91] group-hover:scale-110 transition shadow-inner" />
                    <h3 className="text-lg font-extrabold">Top Up Game</h3>
                    <p className="text-xs text-slate-400">Top up game favoritmu dengan cepat.</p>
                  </div>
                  <button className="w-full py-2.5 bg-[#1769E0]/10 group-hover:bg-[#1769E0] text-[#1769E0] group-hover:text-white font-bold text-xs rounded-xl transition">Top Up Game</button>
                </div>

                <div onClick={() => setCurrentView('voucher')} className="bg-[#0A1F3D] border border-[#1D4F91] hover:border-[#1769E0] rounded-3xl p-6 space-y-4 shadow-xl transition cursor-pointer group flex flex-col justify-between">
                  <div className="space-y-3">
                    <img src="/logo voucher.jpg" alt="Voucher" className="w-14 h-14 rounded-2xl object-cover border border-[#1D4F91] group-hover:scale-110 transition shadow-inner" />
                    <h3 className="text-lg font-extrabold">Voucher</h3>
                    <p className="text-xs text-slate-400">Voucher digital untuk berbagai kebutuhan.</p>
                  </div>
                  <button className="w-full py-2.5 bg-[#1769E0]/10 group-hover:bg-[#1769E0] text-[#1769E0] group-hover:text-white font-bold text-xs rounded-xl transition">Lihat Voucher</button>
                </div>

                <div onClick={() => setCurrentView('pulsa')} className="bg-[#0A1F3D] border border-[#1D4F91] hover:border-[#1769E0] rounded-3xl p-6 space-y-4 shadow-xl transition cursor-pointer group flex flex-col justify-between">
                  <div className="space-y-3">
                    <img src="/logo pulsa&data.png" alt="Pulsa & Data" className="w-14 h-14 rounded-2xl object-cover border border-[#1D4F91] group-hover:scale-110 transition shadow-inner" />
                    <h3 className="text-lg font-extrabold">Pulsa & Data</h3>
                    <p className="text-xs text-slate-400">Isi pulsa dan paket data semua operator.</p>
                  </div>
                  <button className="w-full py-2.5 bg-[#1769E0]/10 group-hover:bg-[#1769E0] text-[#1769E0] group-hover:text-white font-bold text-xs rounded-xl transition">Lihat Pulsa & Data</button>
                </div>

                <div onClick={() => setCurrentView('ppob')} className="bg-[#0A1F3D] border border-[#1D4F91] hover:border-[#1769E0] rounded-3xl p-6 space-y-4 shadow-xl transition cursor-pointer group flex flex-col justify-between">
                  <div className="space-y-3">
                    <img src="/logo PPOB.png" alt="PPOB" className="w-14 h-14 rounded-2xl object-cover border border-[#1D4F91] group-hover:scale-110 transition shadow-inner" />
                    <h3 className="text-lg font-extrabold">PPOB</h3>
                    <p className="text-xs text-slate-400">Bayar kebutuhan digital dengan mudah.</p>
                  </div>
                  <button className="w-full py-2.5 bg-[#1769E0]/10 group-hover:bg-[#1769E0] text-[#1769E0] group-hover:text-white font-bold text-xs rounded-xl transition">Lihat PPOB</button>
                </div>

              </div>
            </section>

            {/* LIVE STREAMING YOUTUBE & TIKTOK */}
            <section className="max-w-7xl mx-auto px-6 space-y-6">
              <div className="flex justify-between items-center border-b border-[#1D4F91] pb-4">
                <div>
                  <h2 className="text-2xl font-extrabold flex items-center gap-2">🔴 Live Streaming WebVibes ID</h2>
                  <p className="text-sm text-slate-400">Tonton siaran langsung dan event giveaway eksklusif kami di YouTube & TikTok.</p>
                </div>
                <span className="bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-full text-xs font-bold animate-pulse">LIVE NOW</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0A1F3D] border border-[#1D4F91] rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-red-400">📺 YouTube Live</span>
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300">1.5rb Penonton</span>
                  </div>
                  <div className="w-full h-44 bg-[#06152D] rounded-2xl border border-[#1D4F91] flex flex-col items-center justify-center p-4 text-center space-y-2">
                    <div className="text-3xl">▶️</div>
                    <p className="text-xs font-bold text-white">Live Diskon Token PLN & Top-Up Game Mingguan</p>
                  </div>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-xs text-center transition block shadow">
                    Tonton di YouTube
                  </a>
                </div>

                <div className="bg-[#0A1F3D] border border-[#1D4F91] rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-pink-400">🎵 TikTok Live</span>
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300">3.8rb Penonton</span>
                  </div>
                  <div className="w-full h-44 bg-[#06152D] rounded-2xl border border-[#1D4F91] flex flex-col items-center justify-center p-4 text-center space-y-2">
                    <div className="text-3xl">🎬</div>
                    <p className="text-xs font-bold text-white">Live Flash Sale Voucher & Pulsa Serba Murah</p>
                  </div>
                  <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-full py-3 bg-slate-900 border border-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl text-xs text-center transition block shadow">
                    Tonton di TikTok Live
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION GAME POPULER */}
            <section className="max-w-7xl mx-auto px-6 space-y-8">
              <div className="border-b border-[#1D4F91] pb-4 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">Game Populer</h2>
                  <p className="text-sm text-slate-400 mt-1">Top up game favorit dengan proses cepat.</p>
                </div>
                <button onClick={() => setCurrentView('games')} className="text-xs text-[#1769E0] font-bold hover:underline">Lihat Semua Game →</button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularGames.map((game) => (
                  <div 
                    key={game.id} onClick={() => { 
                      setSelectedProduct(game); 
                      setGameId(''); 
                      setServerId(''); 
                      setVerifiedAccount(null);
                      setSelectedDenom(null);
                      setGameSubTab('Diamonds');
                      setCurrentView('detail'); 
                    }}
                    className="bg-[#0A1F3D] border border-[#1D4F91] hover:border-[#1769E0] rounded-2xl p-5 cursor-pointer transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
                  >
                    <div className="flex items-start justify-between">
                      <img src={game.image} alt={game.name} className="w-14 h-14 rounded-2xl object-cover border border-[#1D4F91] group-hover:scale-110 transition shadow-inner" />
                      <span className="bg-[#1769E0]/25 text-[#1769E0] text-[10px] font-bold px-2 py-0.5 rounded-full">Populer</span>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-bold text-base text-white group-hover:text-[#1769E0]">{game.name}</h3>
                      <p className="text-xs text-slate-400">{game.publisher}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-xs text-emerald-400 font-semibold">Mulai {game.priceFrom}</span>
                        <button className="px-3 py-1 bg-[#1769E0] hover:bg-blue-600 text-white text-[11px] font-bold rounded-lg transition">TOP UP</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION KEUNGGULAN WEB VIBES ID */}
            <section className="max-w-7xl mx-auto px-6 space-y-8">
              <div className="border-b border-[#1D4F91] pb-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold">Kenapa Pilih WebVibes ID?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#0A1F3D] border border-[#1D4F91] p-6 rounded-3xl space-y-3 shadow">
                  <div className="text-3xl">⚡</div>
                  <h3 className="font-bold text-base text-white">Proses Cepat</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">Transaksi diproses secara instan dan otomatis dalam hitungan detik.</p>
                </div>
                <div className="bg-[#0A1F3D] border border-[#1D4F91] p-6 rounded-3xl space-y-3 shadow">
                  <div className="text-3xl">🔒</div>
                  <h3 className="font-bold text-base text-white">Aman</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">Keamanan data dan privasi transaksi pelanggan terjamin sepenuhnya.</p>
                </div>
                <div className="bg-[#0A1F3D] border border-[#1D4F91] p-6 rounded-3xl space-y-3 shadow">
                  <div className="text-3xl">💰</div>
                  <h3 className="font-bold text-base text-white">Harga Bersahabat</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">Harga kompetitif yang dirancang khusus untuk kebutuhan digitalmu.</p>
                </div>
                <div className="bg-[#0A1F3D] border border-[#1D4F91] p-6 rounded-3xl space-y-3 shadow">
                  <div className="text-3xl">📱</div>
                  <h3 className="font-bold text-base text-white">Layanan Lengkap</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">Game, voucher, pulsa, paket data, dan PPOB dalam satu platform.</p>
                </div>
              </div>
            </section>

            {/* SECTION CARA TRANSAKSI */}
            <section className="max-w-7xl mx-auto px-6 space-y-8">
              <div className="border-b border-[#1D4F91] pb-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold">Cara Transaksi</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {['1. Pilih Produk', '2. Masukkan Data', '3. Pilih Nominal', '4. Pilih Pembayaran', '5. Transaksi Berhasil'].map((step, idx) => (
                  <div key={idx} className="bg-[#0A1F3D] border border-[#1D4F91] p-5 rounded-2xl text-center space-y-2 shadow">
                    <div className="w-8 h-8 bg-[#1769E0] text-white rounded-full flex items-center justify-center font-bold text-xs mx-auto">{idx + 1}</div>
                    <h4 className="font-bold text-sm text-white">{step.split('. ')[1]}</h4>
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}
      </div>

      {/* FOOTER PROFESIONAL */}
      <footer className="bg-[#0A1F3D] border-t border-[#1D4F91] pt-16 pb-12 px-6 mt-20 text-slate-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-xs sm:text-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo webvibesid.jpeg" alt="WebVibes ID" className="w-10 h-10 rounded-xl object-cover border border-[#1D4F91]" />
              <div>
                <span className="text-base font-black text-white tracking-wide block leading-none">WEB<span className="text-[#1769E0]">VIBES</span>.ID</span>
                <span className="text-[10px] text-slate-400 font-medium">VIBES LIMIT NO ASYIK</span>
              </div>
            </div>
            <p className="text-slate-400">Platform layanan digital untuk kebutuhan sehari-hari. Cepat, aman, dan terpercaya.</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Produk</h4>
            <p onClick={() => setCurrentView('games')} className="hover:text-white cursor-pointer">Top Up Game</p>
            <p onClick={() => setCurrentView('voucher')} className="hover:text-white cursor-pointer">Voucher</p>
            <p onClick={() => setCurrentView('pulsa')} className="hover:text-white cursor-pointer">Pulsa & Data</p>
            <p onClick={() => setCurrentView('ppob')} className="hover:text-white cursor-pointer">PPOB</p>
            <p onClick={() => setCurrentView('promo')} className="hover:text-white cursor-pointer">Promo</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Bantuan</h4>
            <p onClick={() => alert('FAQ WebVibes ID')} className="hover:text-white cursor-pointer">FAQ</p>
            <p onClick={() => alert('Cara Transaksi')} className="hover:text-white cursor-pointer">Cara Transaksi</p>
            <p onClick={() => alert('Hubungi Kami')} className="hover:text-white cursor-pointer">Hubungi Kami</p>
            <p onClick={() => alert('Syarat & Ketentuan')} className="hover:text-white cursor-pointer">Syarat & Ketentuan</p>
            <p onClick={() => alert('Kebijakan Privasi')} className="hover:text-white cursor-pointer">Kebijakan Privasi</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Kontak & Sosial</h4>
            <p className="text-slate-300">Email: support@webvibes.id</p>
            <p className="text-slate-300">WhatsApp: +62 812-3456-7890</p>
            <p className="text-slate-300">Jam Layanan: 24 Jam Nonstop</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-[#1D4F91]/50 mt-12 pt-6 text-center text-slate-500 text-xs">
          <p>© 2026 WebVibes ID. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}