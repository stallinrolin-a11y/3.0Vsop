import { SopChecklistItem, StockItem, CleaningTask, SopDocument, SupervisorReport, AuditTrailLog } from '../types';

export const INITIAL_COMMIS_CHECKLIST: SopChecklistItem[] = [
  {
    id: 'c1',
    code: 'SOP-KIT-001',
    timeSlot: 'Opening Routine',
    title: 'Penggunaan Apron',
    shortDesc: 'Sanitasi tangan dan penggunaan apron kain bersih Cinema XXI.',
    detailedSteps: [
      'Cuci tangan dengan sabun antibakteri di wastafel khusus hands-free selama 20 detik.',
      'Gunakan apron kain bersih Cinema XXI dan pastikan terpasang dengan rapi.',
      'Pastikan apron selalu dalam kondisi bersih, bebas noda, dan diganti jika kotor.',
      'Lepas apron saat meninggalkan area dapur atau menuju toilet.'
    ],
    safetyNote: 'Dilarang menggunakan apron yang kotor atau basah saat memproses makanan.',
    targetStandard: '100% Bebas kontaminasi silang & sesuai standar Higiene XXI.',
    completed: false
  },
  {
    id: 'c2',
    code: 'SOP-KIT-002',
    timeSlot: 'Opening Routine',
    title: 'Pemeriksaan Suhu Chiller (-2°C s/d 4°C) & Freezer (≤ -18°C)',
    shortDesc: 'Cek termometer digital chiller/freezer dan catat suhu awal pada log book.',
    detailedSteps: [
      'Buka pintu chiller & freezer dan baca termometer calibrated digital.',
      'Pastikan suhu Chiller Dapur utama berada di antara -2°C hingga 4°C.',
      'Pastikan suhu Deep Freezer Daging & Frozen Stock berada di bawah -18°C.',
      'Bila suhu menyimpang >2°C dari batas toleransi, segera laporkan ke SPV dan unit Engineering XXI.'
    ],
    safetyNote: 'Suhu penyimpanan yang salah dapat memicu pertumbuhan bakteri Salmonella dan E. coli.',
    targetStandard: 'Suhu tercatat akurat di Thermometer Log XXI setiap pergantian shift.',
    completed: false
  },
  {
    id: 'c4',
    code: 'SOP-KIT-004',
    timeSlot: 'Operational Service',
    title: 'Thawing & Labeling Rotasi FIFO (First-In, First-Out)',
    shortDesc: 'Pencairan daging beku di chiller dan penempelan stiker Expired Date.',
    detailedSteps: [
      'Lakukan thawing daging beku di dalam Chiller (suhu 2°C - 4°C) minimal 12-24 jam sebelum dimasak.',
      'Dilarang melakukan thawing pada suhu ruangan atau merendam air diam tanpa sirkulasi.',
      'Tempelkan stiker Day-Dot FIFO (Tgl Thawing, Jam, Expired Date, Nama Commis).',
      'Posisikan stok produk dengan tanggal kadaluarsa terdekat di bagian paling depan shelf.'
    ],
    safetyNote: 'Stok daging cair tanpa stiker FIFO wajib dibuang (Waste) demi menjamin mutu makanan.',
    targetStandard: 'Stiker FIFO terpasang 100% pada semua container prep XXI.',
    completed: false
  },
  {
    id: 'c5',
    code: 'SOP-KIT-005',
    timeSlot: 'Operational Service',
    title: 'Pemasakan Burger Beef Patty & Truffle Fries (Core Temp Check)',
    shortDesc: 'Memasak beef patty XXI hingga suhu inti minimal 170°C dan mengukur kualitas minyak goreng.',
    detailedSteps: [
      'Panaskan Flat Top Griddle pada suhu 180°C - 200°C.',
      'Panggang Beef Patty XXI selama 3 menit tiap sisi hingga mencapai suhu inti minimal 170°C (Gunakan Thermo-Probe).',
      'Goreng Shoestring French Fries pada Deep Fryer (175°C) selama 3.5 menit hingga keemasan.',
      'Ukur kualitas minyak goreng dengan Oil Test Strip (Nilai TPM < 24%).'
    ],
    safetyNote: 'Pastikan thermo-probe disanitasi alcohol swab sebelum ditusuk ke dalam daging.',
    targetStandard: 'Kematangan Medium-Well/Well-Done sempurna, crispy fries tanpa sisa minyak berlebih.',
    completed: false
  },
  {
    id: 'c6',
    code: 'SOP-KIT-006',
    timeSlot: 'Closing Routine',
    title: 'Pembersihan Alat Griddle, Deep Fryer, & Waste Disposal Closing',
    shortDesc: 'Menguras minyak fryer, degreasing flat top griddle, dan buang sampah dapur.',
    detailedSteps: [
      'Matikan semua kompor, griddle, dan deep fryer.',
      'Saring minyak fryer jika masih layak atau kura bila sudah hitam (catat di Waste Log).',
      'Bersihkan sisa kerak griddle menggunakan pembersih khusus food-safe degreaser dan scraper.',
      'Kosongkan semua tempat sampah dapur, cuci bak sampah, dan pasang plastik hitam baru.'
    ],
    safetyNote: 'Gunakan sarung tangan panas tebal saat menangani area griddle yang baru dimatikan.',
    targetStandard: 'Area dapur kering, higienis, bebas sisa lemak, dan bebas hama/pest.',
    completed: false
  }
];

export const INITIAL_MIXOLOGIST_CHECKLIST: SopChecklistItem[] = [
  {
    id: 'm1',
    code: 'SOP-BAR-001',
    timeSlot: 'Opening Routine',
    title: 'Persiapan Air, Teh, & Coffee Essence Bar',
    shortDesc: 'Panaskan air water tank (90°C), brewing tea base (80-90°C, 3m), dan buat coffee essence (1g : 20ml).',
    detailedSteps: [
      'Isi & panaskan air di water tank / nyalakan bun O\' matic hingga mencapai suhu 90°C.',
      'Pembuatan Air Teh (80-90°C, Waktu 3 menit): Gunakan 4 pcs tea bag untuk 1.800 ml air panas (atau 3 pcs untuk 1.500 ml). Siapkan di pitcher, brew hingga golden brown, peras tea bag dengan tutup pitcher, simpan di pitcher stainless / dispenser (suhu ruang).',
      'Pembuatan Kopi & Coffee Essence: Standard air kopi 1 gr bubuk : 20 ml air panas (90°C). Masukkan coffee powder ke mug stainless -> Tuang air panas -> Aduk (stir) sampai keluar crema -> Diamkan 3 menit, lalu aduk kembali.',
      'Lakukan setting bar, periksa ketersediaan bahan, dan periksa labeling / expired date.'
    ],
    safetyNote: 'Pastikan suhu air sesuai standar (80-90°C) agar cita rasa dan aroma teh/kopi terekstraksi sempurna.',
    targetStandard: 'Teh beraroma golden brown segar, Coffee Essence memiliki crema tebal, dan air panas siap di suhu 90°C.',
    completed: false
  },
  {
    id: 'm2',
    code: 'SOP-BAR-002',
    timeSlot: 'Opening Routine',
    title: 'Pembuatan Garnish, Potong Jelly, & Penataan Equipment',
    shortDesc: 'Persiapan biji selasih, buah longan/peach, pemotongan jelly dadu, dan penataan bar utensil di GN pan.',
    detailedSteps: [
      'Biji Selasih: Rendam air panas sambil diaduk hingga mengembang. Bilas air galon minimal 3x pembilasan. Simpan di condiments container suhu ruang (masa pakai 1 hari).',
      'Buah Longan & Peach: Pindahkan buah longan beserta air ke wadah tertutup (lock & lock). Potong buah peach jadi dua, buang bagian tengah agar tidak berlendir, simpan tanpa air.',
      'Pemotongan Jelly: Potong bentuk dadu max 8mm (brown straw). Khusus Coffee Jelly potong 1x1 cm. Simpan di chiller/undercounter chiller dengan label expired date (jangan masukkan ke kemasan asli).',
      'Penataan Equipment: Cuci Jug Blender dengan air hangat (blend 30 detik). Tempat bubuk (pop up square) harus bersih & kering. Tempatkan jigger, bar spoon, dinner spoon, shaker, shot glass, & gelas ukur rapi di GN pan dekat keran.'
    ],
    safetyNote: 'Jangan memasukkan kembali jelly yang sudah dipotong ke dalam kemasan aslinya.',
    targetStandard: 'Garnish & jelly potongan presisi higienis, equipment steril tertata rapi di GN pan siap pakai.',
    completed: false
  },
  {
    id: 'm3',
    code: 'SOP-BAR-003',
    timeSlot: 'Operational Service',
    title: 'Controlling Suhu, Masa Pakai Bahan Baku, & Frozen Storage',
    shortDesc: 'Monitoring masa simpan sirup, fresh milk, cream, jelly, serta uji kualitas es batu & ice cream.',
    detailedSteps: [
      'Simple Syrup / Pandan: Masa pakai 7 hari dari tgl kirim (suhu ruang/chiller). Botol kaca sirup pandan disimpan di chiller agar aroma awet (di luar saat meracik).',
      'Fresh Milk: Masa pakai 1 hari (setelah dituang di juice container chiller). Whipping Cream: Masa pakai 7 hari di chiller (lipat atas kemasan sisa). Toza Lemon/Pineapple di botol Lock & Lock 1.2L.',
      'Masa Simpan Jelly (Chiller): Lychee Jelly (2 hari), Coffee Jelly (1 hari), Jelly belum dipotong (5 hari).',
      'Penyimpanan Frozen: Tes ketebalan es batu dengan digit tanpa perlu menekan gigi terlalu kuat. Ice cream ditutup rapat di freezer, tidak digabung makanan beraroma tajam.',
      'Quality Control: Lakukan pengecekan rasa secara rutin sebelum pembuatan produk (cek warna, tekstur, dan rasa sirup pandan).'
    ],
    safetyNote: 'Ice cream yang sudah cair atau terkontaminasi bunga es DILARANG digunakan untuk minuman.',
    targetStandard: 'Seluruh bahan baku terlabeli expired date, tersimpan pada suhu ideal, dan lolos uji cicip rasa QC.',
    completed: false
  },
  {
    id: 'm4',
    code: 'SOP-BAR-004',
    timeSlot: 'Operational Service',
    title: 'Operasional Pembuatan Minuman Blended & Preset Mesin Blender',
    shortDesc: 'Akurasi urutan penuangan bahan blended dan pengoperasian tombol mesin Vitamix / Santos.',
    detailedSteps: [
      'Urutan Penuangan Blended: Tuang bahan liquid (cair) ke jug blender -> masukkan bahan powder (bubuk) -> terakhir masukkan es batu.',
      'Ciri Minuman Siap Saji: Pusaran air di jug membentuk gelombang seperti ombak, tekstur halus dan tidak sulit dituang.',
      'Setting Vitamix: No 1 (Iced blend 1 porsi / 20s), No 2 (Iced blend 2 porsi / 30s), No 3 (Iced blend 3-5 porsi), No 4 (Frozen product/smoothie bowl), Pulse 1 (Splash tanpa powder), Pulse 2 (Splash dengan powder).',
      'Setting Santos: No 1 (Splash dengan powder), No 2 (Splash tanpa powder), No 3 (Iced blend 1 porsi), No 4 (Splash ± 5 porsi), No 5 (Iced blend ± 5 porsi).'
    ],
    safetyNote: 'Selalu masukkan es batu terakhir setelah liquid dan powder untuk mencegah pisau blender tersumbat/aus.',
    targetStandard: 'Minuman blended memiliki tekstur lembut homogen khas XXI dan proses pencampuran presisi.',
    completed: false
  },
  {
    id: 'm5',
    code: 'SOP-BAR-005',
    timeSlot: 'Closing Routine',
    title: 'Closing Area Bar, Sanitasi Equipment, & Storage Audit',
    shortDesc: 'Pembersihan jug blender, bar utensils, penutupan wadah sirup, dan penyimpan di chiller/freezer.',
    detailedSteps: [
      'Cuci Jug Blender dengan air hangat dan sanitizer, cuci jigger, shaker, bar spoon, dan gelas ukur.',
      'Tutup rapat seluruh botol sirup, simpan sirup pandan, fresh milk, dan topping jelly di undercounter chiller.',
      'Pastikan tempat bubuk (pop up square) bersih dan kering. Tata kembali bar utensils di GN pan.',
      'Pembersihan area counter bar, cek saluran drainase, matikan mesin pemanas air / bunn o matic, dan amankan area bar.'
    ],
    safetyNote: 'Pastikan tidak ada bahan perishable dibiarkan terbuka di suhu ruang saat closing.',
    targetStandard: 'Area bar 100% bersih, rapi, higienis, seluruh stok tersimpan aman di chiller/freezer, siap opening esok hari.',
    completed: false
  }
];

export const INITIAL_STOCK_ITEMS: StockItem[] = [
  // Commis Stock
  {
    id: 'st-c1',
    code: 'ING-KIT-01',
    name: 'Tray Small',
    category: 'Packaging & Tray',
    unit: 'Pcs',
    startStock: 100,
    usedStock: 25,
    currentStock: 75,
    parLevel: 20,
    fifoStatus: 'Safe',
    lastUpdated: '10:00 WIB'
  },
  {
    id: 'st-c2',
    code: 'ING-KIT-02',
    name: 'Tray Medium',
    category: 'Packaging & Tray',
    unit: 'Pcs',
    startStock: 100,
    usedStock: 30,
    currentStock: 70,
    parLevel: 20,
    fifoStatus: 'Safe',
    lastUpdated: '10:00 WIB'
  },
  {
    id: 'st-c3',
    code: 'ING-KIT-03',
    name: 'Tray Nachos',
    category: 'Packaging & Tray',
    unit: 'Pcs',
    startStock: 80,
    usedStock: 15,
    currentStock: 65,
    parLevel: 15,
    fifoStatus: 'Safe',
    lastUpdated: '10:00 WIB'
  },
  {
    id: 'st-c4',
    code: 'ING-KIT-04',
    name: 'Sosis Mini',
    category: 'Sosis & Olahan',
    unit: 'Pcs',
    startStock: 120,
    usedStock: 40,
    currentStock: 80,
    parLevel: 30,
    fifoStatus: 'Safe',
    lastUpdated: '10:15 WIB'
  },
  {
    id: 'st-c5',
    code: 'ING-KIT-05',
    name: 'Sosis Reguler',
    category: 'Sosis & Olahan',
    unit: 'Pcs',
    startStock: 80,
    usedStock: 22,
    currentStock: 58,
    parLevel: 20,
    fifoStatus: 'Safe',
    lastUpdated: '10:15 WIB'
  },
  {
    id: 'st-c6',
    code: 'ING-KIT-06',
    name: 'Sosis Jumbo',
    category: 'Sosis & Olahan',
    unit: 'Pcs',
    startStock: 50,
    usedStock: 14,
    currentStock: 36,
    parLevel: 15,
    fifoStatus: 'Safe',
    lastUpdated: '10:15 WIB'
  },
  {
    id: 'st-c7',
    code: 'ING-KIT-07',
    name: 'Fish Dory',
    category: 'Frozen Seafood',
    unit: 'Slice',
    startStock: 60,
    usedStock: 18,
    currentStock: 42,
    parLevel: 15,
    fifoStatus: 'Safe',
    lastUpdated: '10:20 WIB'
  },
  {
    id: 'st-c8',
    code: 'ING-KIT-08',
    name: 'French Fries (FF)',
    category: 'Frozen Stock',
    unit: 'Gram',
    startStock: 5000,
    usedStock: 1800,
    currentStock: 3200,
    parLevel: 1000,
    fifoStatus: 'Safe',
    lastUpdated: '10:20 WIB'
  },
  {
    id: 'st-c9',
    code: 'ING-KIT-09',
    name: 'Chicken Patty',
    category: 'Meat & Poultry',
    unit: 'Pcs',
    startStock: 50,
    usedStock: 16,
    currentStock: 34,
    parLevel: 15,
    fifoStatus: 'Safe',
    lastUpdated: '10:25 WIB'
  },
  {
    id: 'st-c10',
    code: 'ING-KIT-10',
    name: 'Bun Burger',
    category: 'Bakery',
    unit: 'Pcs',
    startStock: 50,
    usedStock: 16,
    currentStock: 34,
    parLevel: 15,
    fifoStatus: 'Safe',
    lastUpdated: '10:25 WIB'
  },
  {
    id: 'st-c11',
    code: 'ING-KIT-11',
    name: 'Bun Hotdog',
    category: 'Bakery',
    unit: 'Pcs',
    startStock: 50,
    usedStock: 12,
    currentStock: 38,
    parLevel: 15,
    fifoStatus: 'Safe',
    lastUpdated: '10:25 WIB'
  },
  {
    id: 'st-c12',
    code: 'ING-KIT-12',
    name: 'Wonton',
    category: 'Frozen Stock',
    unit: 'Gram',
    startStock: 2000,
    usedStock: 600,
    currentStock: 1400,
    parLevel: 500,
    fifoStatus: 'Safe',
    lastUpdated: '10:30 WIB'
  },
  {
    id: 'st-c13',
    code: 'ING-KIT-13',
    name: 'Mac and Cheese (MNC)',
    category: 'Frozen Stock',
    unit: 'Pcs',
    startStock: 80,
    usedStock: 24,
    currentStock: 56,
    parLevel: 20,
    fifoStatus: 'Safe',
    lastUpdated: '10:30 WIB'
  },
  {
    id: 'st-c14',
    code: 'ING-KIT-14',
    name: 'Tortilla Chips',
    category: 'Chips',
    unit: 'Gram',
    startStock: 3000,
    usedStock: 850,
    currentStock: 2150,
    parLevel: 800,
    fifoStatus: 'Safe',
    lastUpdated: '10:35 WIB'
  },
  {
    id: 'st-c15',
    code: 'ING-KIT-15',
    name: 'Sauce Cheese',
    category: 'Sauce & Condiment',
    unit: 'Gram',
    startStock: 2000,
    usedStock: 600,
    currentStock: 1400,
    parLevel: 500,
    fifoStatus: 'Safe',
    lastUpdated: '10:35 WIB'
  },
  {
    id: 'st-c16',
    code: 'ING-KIT-16',
    name: 'Jalapeno',
    category: 'Sayuran & Condiment',
    unit: 'Gram',
    startStock: 1000,
    usedStock: 240,
    currentStock: 760,
    parLevel: 300,
    fifoStatus: 'Safe',
    lastUpdated: '10:35 WIB'
  },

  // Mixologist Bar Stock (Gelas & Packaging)
  {
    id: 'st-m1',
    code: 'ING-BAR-01',
    name: '8 OZ',
    category: 'Gelas & Packaging',
    unit: 'Pcs',
    startStock: 100,
    usedStock: 20,
    currentStock: 80,
    parLevel: 20,
    fifoStatus: 'Safe',
    lastUpdated: '08:15 WIB'
  },
  {
    id: 'st-m2',
    code: 'ING-BAR-02',
    name: '12 OZ',
    category: 'Gelas & Packaging',
    unit: 'Pcs',
    startStock: 100,
    usedStock: 30,
    currentStock: 70,
    parLevel: 20,
    fifoStatus: 'Safe',
    lastUpdated: '08:15 WIB'
  },
  {
    id: 'st-m3',
    code: 'ING-BAR-03',
    name: '14 OZ',
    category: 'Gelas & Packaging',
    unit: 'Pcs',
    startStock: 100,
    usedStock: 25,
    currentStock: 75,
    parLevel: 20,
    fifoStatus: 'Safe',
    lastUpdated: '08:15 WIB'
  },
  {
    id: 'st-m4',
    code: 'ING-BAR-04',
    name: '16 OZ',
    category: 'Gelas & Packaging',
    unit: 'Pcs',
    startStock: 100,
    usedStock: 35,
    currentStock: 65,
    parLevel: 20,
    fifoStatus: 'Safe',
    lastUpdated: '08:15 WIB'
  },
  {
    id: 'st-m5',
    code: 'ING-BAR-05',
    name: '19 OZ',
    category: 'Gelas & Packaging',
    unit: 'Pcs',
    startStock: 100,
    usedStock: 20,
    currentStock: 80,
    parLevel: 20,
    fifoStatus: 'Safe',
    lastUpdated: '08:15 WIB'
  },
  {
    id: 'st-m6',
    code: 'ING-BAR-06',
    name: '22 OZ',
    category: 'Gelas & Packaging',
    unit: 'Pcs',
    startStock: 100,
    usedStock: 40,
    currentStock: 60,
    parLevel: 20,
    fifoStatus: 'Safe',
    lastUpdated: '08:15 WIB'
  },
  {
    id: 'st-m7',
    code: 'ING-BAR-07',
    name: 'PP INJET',
    category: 'Gelas & Packaging',
    unit: 'Pcs',
    startStock: 100,
    usedStock: 15,
    currentStock: 85,
    parLevel: 20,
    fifoStatus: 'Safe',
    lastUpdated: '08:15 WIB'
  }
];

export const INITIAL_CLEANING_TASKS: CleaningTask[] = [
  // Commis Cleaning
  {
    id: 'cl-c1',
    title: 'Deep Cleaning & Degreasing Commercial Exhaust Hood',
    category: 'Weekly Deep Clean',
    equipment: 'Exhaust Hood & Baffle Filters Dapur',
    chemicalUsed: 'Heavy Duty Kitchen Degreaser XXI',
    schedule: 'Setiap Hari Senin (Closing)',
    status: 'Pending',
    assignedTo: 'Commies'
  },
  {
    id: 'cl-c2',
    title: 'Pembersihan & Sanitasi Grease Trap (Bak Perangkap Lemak)',
    category: 'Weekly Deep Clean',
    equipment: 'Grease Trap, Serokan, Sikat, Ember & Plastik Sampah',
    chemicalUsed: 'Sabun Pencuci Piring Cair & Air Hangat',
    schedule: 'Setiap Hari Rabu (Shift Closing)',
    status: 'Pending',
    assignedTo: 'Commies',
    preparation: [
      'Sarung tangan karet dan masker APD.',
      'Alat pengikis atau serokan kain/jaring.',
      'Ember kosong dan kantong plastik sampah tebal.',
      'Sikat pembersih dan spons.',
      'Sabun pencuci piring cair dan air hangat (bukan air mendidih).'
    ],
    procedureSteps: [
      'Dinginkan Air: Tunggu hingga air di dalam bak mendingin agar lapisan lemak di permukaan mengeras dan lebih mudah diangkat.',
      'Buka Tutup Bak: Lepaskan penutup grease trap secara perlahan agar kotoran tidak tumpah.',
      'Saring Lemak Atas: Gunakan serokan untuk mengambil lapisan lemak padat yang mengapung di permukaan. Masukkan limbah tersebut langsung ke kantong plastik.',
      'Angkat Keranjang Saringan: Keluarkan keranjang penyaring sisa makanan, lalu buang isinya ke tempat sampah.',
      'Kuras Sisa Air: Kurangi volume air di dalam bak menggunakan gayung agar Anda bisa menjangkau endapan di bagian dasar.',
      'Sikat Kompartemen: Gosok dinding, sekat, dan dasar bak menggunakan sikat, sabun, dan air hangat untuk merontokkan sisa lemak menempel.',
      'Bilas dan Pasang Kembali: Bilas bak dengan air bersih, pastikan aliran air lancar, lalu rakit kembali seluruh komponen dan tutup rapat baknya.'
    ]
  },

  // Mixologist Cleaning
  {
    id: 'cl-m1',
    title: 'Sanitasi Storage Bin Ice Machine & Air Filter',
    category: 'Weekly Clean',
    equipment: 'Ice Maker Machine XXI Lounge',
    chemicalUsed: 'Food Grade Ice Machine Cleaner',
    schedule: 'Setiap Hari Selasa',
    status: 'Completed',
    assignedTo: 'Mixologist / Barista'
  },
  {
    id: 'cl-m3',
    title: 'Pembersihan Drain Tray & Under Bar Drainage Pipe',
    category: 'Weekly Clean',
    equipment: 'Saluran Pembuangan Bar & Drip Tray',
    chemicalUsed: 'Hot Water Drain Cleaner & Enzyme',
    schedule: 'Setiap Hari Jumat',
    status: 'Pending',
    assignedTo: 'Mixologist / Barista'
  }
];

export const SOP_DOCUMENTS: SopDocument[] = [
  {
    id: 'doc-commis-1',
    code: 'FILE-SOP-KIT-01',
    title: 'SOP Standar Pemotongan & Prep Daging Beef Patty XXI.pdf',
    role: 'commis',
    fileSize: '2.4 MB',
    revDate: '2026-06-15',
    category: 'Dapur & Food Prep',
    description: 'Panduan lengkap pemotongan, penimbangan porsi 150g, penataan layering waxy paper, serta teknik freezing cepat untuk mempertahankan kelembaban rasa daging.',
    fullContent: {
      summary: 'Dokumen ini mengatur standar kualitas mutu daging sapi cincang olahan Cinema XXI untuk burger dan steak strip.',
      requirements: [
        'Suhu ruang prep maksimal 18°C.',
        'Wajib memakai sarung tangan nitrile baru.',
        'Papan potong Merah & pisau boning stainless terkalibrasi tajam.'
      ],
      steps: [
        { stepNum: 1, title: 'Inspeksi Bahan Baku', desc: 'Periksa suhu daging saat tiba dari central kitchen (harus ≤ 4°C), warna merah cerah tanpa kememaran.', criticalPoint: 'Tolak bila ada bau asam atau cairan berlendir.' },
        { stepNum: 2, title: 'Penimbangan Presisi 150g', desc: 'Gunakan timbangan digital yang diset ke nol. Ambil porsi 150 gram (+/- 2 gram toleransi).', criticalPoint: 'Akurasi gramatur menjaga COGS XXI.' },
        { stepNum: 3, title: 'Pencetakan Patty Press', desc: 'Bentuk patty bulat dengan ring mold diameter 11 cm dan tebal 1.5 cm.', criticalPoint: 'Jangan menekan terlalu padat agar tekstur juicy tetap terjaga.' },
        { stepNum: 4, title: 'Layering & Stiker FIFO', desc: 'Lapisi setiap patty dengan kertas lilin food grade, masukkan container kedap udara, tempel stiker jam & tgl kadaluarsa (24 jam chiller).', criticalPoint: 'Produk tanpa stiker tanggal dilarang digunakan.' }
      ],
      temperatureControl: 'Chiller Storage: -2°C s/d 4°C | Griddle Target Core Temp: 170°C',
      sanitationRules: [
        'Semua permukaan stainless dibersihkan dengan sanitizer 200 ppm quat.',
        'Setiap 2 jam sekali pisau dan timbangan direndam air panas sanitasi.'
      ]
    }
  },
  {
    id: 'doc-commis-2',
    code: 'FILE-SOP-KIT-02',
    title: 'SOP Keamanan Pangan, Suhu & Manajemen FIFO XXI.pdf',
    role: 'commis',
    fileSize: '3.1 MB',
    revDate: '2026-07-01',
    category: 'Food Safety & Hygiene',
    description: 'Petunjuk teknis pengawasan Danger Zone (5°C - 60°C), pemisahan rak penyimpanan, pencegahan cross-contamination, serta tindakan koreksi bila timbul masalah.',
    fullContent: {
      summary: 'Standar baku keamanan makanan XXI untuk mencegah keracunan dan menjaga sertifikasi Halal & Hygiene Cinema XXI.',
      requirements: [
        'Sistem pencatatan log book suhu 3x sehari (08:00, 14:00, 20:00).',
        'Penyimpanan daging mentah wajib di rak PALING BAWAH chiller.',
        'Makanan matang / siap makan wajib di rak PALING ATAS.'
      ],
      steps: [
        { stepNum: 1, title: 'Verifikasi Tanggal Kedatangan', desc: 'Cek label supplier, pastikan tanggal kadaluarsa minimal masih 70% dari total masa simpan.', criticalPoint: 'Tolak stok dengan kemasan penyok/bocor.' },
        { stepNum: 2, title: 'Penerapan Metode FIFO', desc: 'Stok lama dipindahkan ke baris depan (Use First), stok baru diletakkan di baris belakang.', criticalPoint: 'Rotasi wajib dilakukan setiap stocking ulang.' },
        { stepNum: 3, title: 'Monitoring Danger Zone', desc: 'Pastikan makanan tidak pernah didiamkan di suhu ruangan (5°C - 60°C) lebih dari 2 jam.', criticalPoint: 'Jika lewat 2 jam tanpa pengontrol suhu, makanan wajib dibuang.' }
      ],
      temperatureControl: 'Freezer: ≤ -18°C | Chiller: 0°C s/d 4°C | Hot Holding Showcase: ≥ 60°C',
      sanitationRules: [
        'Penggunaan alkohol spray 70% food grade setelah menyentuh permukaan luar kemasan.',
        'Pemeriksaan sampel swab periodik oleh Tim QC XXI.'
      ]
    }
  },
  {
    id: 'doc-commis-3',
    code: 'FILE-SOP-KIT-03',
    title: 'SOP Pembersihan & Sanitasi Grease Trap XXI.pdf',
    role: 'commis',
    fileSize: '1.8 MB',
    revDate: '2026-07-31',
    category: 'Pembersihan & Sanitasi Dapur',
    description: 'Panduan teknis ringkas pembersihan bak perangkap lemak (grease trap) dapur XXI, mencakup persiapan APD/alat serta 7 langkah pembersihan kompartemen.',
    fullContent: {
      summary: 'Prosedur baku pembersihan grease trap untuk mencegah penyumbatan saluran pembuangan dan menjaga sanitasi dapur XXI.',
      requirements: [
        'Sarung tangan karet dan masker APD.',
        'Alat pengikis / serokan kain/jaring.',
        'Ember kosong dan kantong plastik sampah tebal.',
        'Sikat pembersih, spons, sabun cair & air hangat (bukan air mendidih).'
      ],
      steps: [
        { stepNum: 1, title: 'Dinginkan Air', desc: 'Tunggu hingga air di dalam bak mendingin agar lapisan lemak di permukaan mengeras dan lebih mudah diangkat.', criticalPoint: 'Jangan membuka bak saat air masih sangat panas.' },
        { stepNum: 2, title: 'Buka Tutup Bak', desc: 'Lepaskan penutup grease trap secara perlahan agar kotoran dan bau tidak tumpah ke area sekitar.', criticalPoint: 'Gunakan masker untuk proteksi pernapasan.' },
        { stepNum: 3, title: 'Saring Lemak Atas', desc: 'Gunakan serokan untuk mengambil lapisan lemak padat yang mengapung di permukaan. Masukkan limbah langsung ke kantong plastik tebal.', criticalPoint: 'Ikat kantong plastik sampah dengan rapat.' },
        { stepNum: 4, title: 'Angkat Keranjang Saringan', desc: 'Keluarkan keranjang penyaring sisa makanan, lalu buang isinya ke tempat sampah.', criticalPoint: 'Pastikan tidak ada padatan melolos ke saluran.' },
        { stepNum: 5, title: 'Kuras Sisa Air', desc: 'Kurangi volume air di dalam bak menggunakan gayung agar Anda bisa menjangkau endapan di bagian dasar.', criticalPoint: 'Tampung air kotor dalam ember.' },
        { stepNum: 6, title: 'Sikat Kompartemen', desc: 'Gosok dinding, sekat, dan dasar bak menggunakan sikat, sabun, dan air hangat untuk merontokkan sisa lemak menempel.', criticalPoint: 'Gunakan air hangat (bukan mendidih) agar gasket/pipa tidak rusak.' },
        { stepNum: 7, title: 'Bilas dan Pasang Kembali', desc: 'Bilas bak dengan air bersih, pastikan aliran air lancar, lalu rakit kembali seluruh komponen dan tutup rapat baknya.', criticalPoint: 'Pastikan penutup terpasang rapat dan kedap.' }
      ],
      temperatureControl: 'Air Pembilas: Air Hangat (40°C - 50°C)',
      sanitationRules: [
        'Semua peralatan pembersih harus dicuci bersih dan disanitasi setelah digunakan.',
        'Limbah lemak wajib dibuang ke tempat sampah khusus/terikat rapat.'
      ]
    }
  },
  {
    id: 'doc-mixologist-1',
    code: 'FILE-SOP-BAR-01',
    title: 'SOP Mixologist & Barista - Pembuatan Minuman & Persiapan Bar.pdf',
    role: 'mixologist',
    fileSize: '3.5 MB',
    revDate: '2026-08-01',
    category: 'Bar & Gourmet Drinks',
    description: 'Buku Standar Operasional Prosedur resmi Mixologist & Barista XXI mencakup Flow Chart Kerja, Opening & Persiapan (Air, Teh, Kopi, Garnish, Jelly, Equipment), Controlling & Masa Simpan Bahan Baku, serta Operasional Blended & Preset Mesin Blender (Vitamix & Santos).',
    fullContent: {
      summary: 'Dokumen panduan resmi operasional Mixologist & Barista XXI untuk menjamin konsistensi rasa, kecepatan penyajian, dan hygiene standar tinggi.',
      requirements: [
        'Suhu air water tank / bunn o matic wajib 90°C.',
        'Potongan jelly max 8mm (brown straw) / khusus Coffee Jelly 1x1 cm.',
        'Label expired date & batas masa simpan bahan baku wajib terpasang.',
        'Urutan blended: Liquid (cair) -> Powder (bubuk) -> Es batu.'
      ],
      steps: [
        { stepNum: 1, title: 'Opening: Persiapan Air, Teh, & Kopi', desc: 'Isi air water tank (90°C). Brew teh (80-90°C, 3 menit) 4 tea bag/1.800ml. Buat coffee essence ratio 1g bubuk : 20ml air panas (stir hingga crema keluar, diamkan 3m).', criticalPoint: 'Peras teh dengan tutup pitcher. Simpan di pitcher stainless suhu ruang.' },
        { stepNum: 2, title: 'Opening: Pembuatan Garnish & Jelly', desc: 'Rendam selasih di air panas & bilas air galon min 3x. Potong peach/longan. Potong jelly dadu ≤8mm (coffee jelly 1x1cm), beri label expired date.', criticalPoint: 'Jangan masukkan kembali jelly yang sudah dipotong ke kemasan asli.' },
        { stepNum: 3, title: 'Opening: Penataan Equipment Bar', desc: 'Cuci Jug Blender dengan air hangat (blend 30s). Tempatkan jigger, bar spoon, dinner spoon, shaker, shot glass, & gelas ukur rapi di GN pan dekat keran.', criticalPoint: 'Tempat bubuk (pop up square) harus bersih & kering.' },
        { stepNum: 4, title: 'Controlling: Masa Simpan & Frozen Storage', desc: 'Simple syrup (7 hari), Fresh milk (1 hari), Whipping cream (7 hari), Jelly dipotong (1-2 hari), Jelly utuh (5 hari). Ice cream ditutup rapat di freezer, jauh dari makanan beraroma tajam.', criticalPoint: 'Tes ketebalan es batu dengan gigit ringan. Ice cream cair DILARANG digunakan.' },
        { stepNum: 5, title: 'Operasional Pembuatan Minuman Blended', desc: 'Penuangan: Liquid -> Powder -> Es Batu. Gunakan preset Vitamix (1: 20s, 2: 30s, 3: 3-5 porsi, 4: smoothie bowl) atau Santos (1: splash powder, 2: splash no powder, 3: iced blend 1 porsi, 4-5: 5 porsi).', criticalPoint: 'Ciri siap saji: pusaran air membentuk gelombang ombak halus.' }
      ],
      temperatureControl: 'Water Tank: 90°C | Tea Brewing: 80°C-90°C | Chiller: 2°C s/d 4°C | Freezer: ≤ -18°C',
      sanitationRules: [
        'Bilas biji selasih minimal 3x pembilasan air galon.',
        'Cuci jug blender dengan air hangat sebelum dan sesudah racikan.',
        'Beri stiker tanggal & jam racik pada setiap container simpanan di chiller.'
      ]
    }
  },
  {
    id: 'doc-mixologist-2',
    code: 'FILE-SOP-BAR-02',
    title: 'SOP Kalibrasi Espresso & Perawatan Grinder XXI.pdf',
    role: 'mixologist',
    fileSize: '1.9 MB',
    revDate: '2026-06-30',
    category: 'Coffee & Espresso',
    description: 'Petunjuk teknis pengukuran waktu ekstraksi espresso 25-30 detik, pembersihan burr grinder harian, dan sanitasi steam wand susu.',
    fullContent: {
      summary: 'Standard Operating Procedure untuk menyajikan varian kopi espresso, cappuccino, dan latte dengan standar aroma dan rasa tinggi.',
      requirements: [
        'Dosis biji kopi XXI: 18.0 gram (+/- 0.2g).',
        'Suhu ekstraksi air mesin: 92°C - 94°C.',
        'Tekanan pompa: 9 Bar.'
      ],
      steps: [
        { stepNum: 1, title: 'Grind Adjustment', desc: 'Sesuaikan tingkat kehalusan burr grinder sesuai kelembaban udara harian.', criticalPoint: 'Lakukan tes shot pertama setiap pagi jam 08:00.' },
        { stepNum: 2, title: 'Distribution & Tamping', desc: 'Ratakan bubuk kopi dengan WDT tool, lalu tamp dengan tekanan sejajar 15 kg.', criticalPoint: 'Tamping miring memicu channelling air.' },
        { stepNum: 3, title: 'Ekstraksi Shot Espresso', desc: 'Mulai ekstraksi. Target 36 ml liquid espresso terekstraksi dalam 27 detik.', criticalPoint: 'Shot yang keluar terlalu cepat (>15 detik) harus dibuang.' }
      ],
      temperatureControl: 'Suhu Susu Steaming Latte: 60°C - 65°C (Jangan melampaui 70°C)',
      sanitationRules: [
        'Purge steam wand sebelum dan sesudah menggulung susu.',
        'Lap steam wand langsung dengan kain basah hangat khusus susu.'
      ]
    }
  },
  {
    id: 'doc-mixologist-3',
    code: 'FILE-SOP-BAR-03',
    title: 'Ringkasan SOP Penyimpanan Bahan Minuman Cinema XXI Café (Edisi 2019).pdf',
    role: 'mixologist',
    fileSize: '1.8 MB',
    revDate: '2026-08-01',
    category: 'Penyimpanan & Masa Simpan',
    description: 'Panduan matriks baku penyimpanan bahan minuman Cinema XXI Café mencakup masa simpan, tempat penyimpanan (Dispenser, Lock n Lock, Pop Up Square, Condiment, Chiller, Freezer), dan catatan penting SOP untuk 6 kategori bahan.',
    fullContent: {
      summary: 'Ringkasan resmi standar operasional penyimpanan bahan minuman Cinema XXI Café (Edisi 2019) untuk menjaga kualitas rasa, higienitas, serta mencegah kerusakan bahan baku.',
      requirements: [
        'Setiap bahan baku wajib dilabeli tanggal & jam prepare / kadaluarsa.',
        'Simple Pandan & Simple Syrup di Chiller tidak boleh dipindah ke Lock n Lock untuk persediaan.',
        'Maksimal pembuatan minuman racikan batch dalam 1 jug blender: 5 porsi (Kopi Susu Pandan, Java Tea, Mochaccino, Lychee Tea, Milo Dinosaurs) & 3 porsi (Iced Thai Tea).',
        'Ice Cream disimpan di freezer dengan labeling tgl prepare (exp 7 hari) & dilarang digabung makanan beraroma tajam.'
      ],
      steps: [
        {
          stepNum: 1,
          title: 'Penyimpanan Minuman Racikan (Batch)',
          desc: '• Kopi Susu Pandan, Java Tea, Mochaccino, Lychee Tea, Milo Dinosaurs: Masa simpan 1 Hari di Dispenser / Lock n Lock (Max 5 porsi / jug blender).\n• Iced Thai Tea: Masa simpan 1 Hari di Dispenser / Lock n Lock (Max 3 porsi / jug blender).\n• Organic Coconut Syrup: Masa simpan 1 Hari di Sauce bottle bertutup (Campur organic coconut sugar + hot water, aduk, saring, campur simple syrup, dinginkan di chiller).',
          criticalPoint: 'Patuhi batas maksimal porsi per jug blender agar konsistensi rasa dan tekstur terjaga.'
        },
        {
          stepNum: 2,
          title: 'Penyimpanan Sirup & Cairan Esensial',
          desc: '• Simple Pandan & Simple Syrup: Masa simpan 7 Hari di Chiller. DILARANG dipindah ke Lock n Lock untuk persediaan.\n• Whipped Cream (Milac/Roselle): Masa simpan 7 Hari di Chiller. 500ml dipindah ke cream charger (Exp 7 hari). Kemasan terbuka wajib di-wrapping (Exp 7 hari).',
          criticalPoint: 'Simple syrup tetap dalam botol asli/chiller, kemasan whipped cream terbuka wajib di-wrapping rapat.'
        },
        {
          stepNum: 3,
          title: 'Penyimpanan Jelly, Buah, & Topping Cepat Saji',
          desc: '• Lychee Jelly: Masa simpan 5 Hari di Chiller (Lock n Lock / Condiment). Exp 2 hari setelah dipotong.\n• Coffee Jelly: Masa simpan 5 Hari di Chiller (Lock n Lock / Condiment). Exp 1 hari di condiment container.\n• Longan: Masa simpan 5 Hari di Lock n Lock (sebelum disiapkan). Exp 1 hari setelah prepare.\n• Selasih (Basil Seeds): Simpan di Lock n Lock / Condiment (Chiller). Exp 1 hari setelah di-prepare.\n• Popcorn Caramel: Simpan di Lock n Lock (Suhu Ruang). Exp 1 hari setelah di-prepare.',
          criticalPoint: 'Selalu periksa label kadaluarsa harian pada condiment container di bawah counter bar.'
        },
        {
          stepNum: 4,
          title: 'Penyimpanan Dairy & Ice Cream',
          desc: '• Yogurt: Simpan di Chiller (Exp 3 hari setelah di-prepare).\n• Strawberry & Vanilla Ice Cream: Simpan di Freezer (Labeling tanggal prepare, Exp 7 hari setelah di-prepare).',
          criticalPoint: 'Wajib cantumkan tanggal prepare pada wadah Ice Cream di freezer.'
        },
        {
          stepNum: 5,
          title: 'Penyimpanan Bahan Kering (Powder & Cookies)',
          desc: '• Hot Chocolate & Mocha Powder: Simpan di Pop up square (Exp 14 hari setelah di-prepare).\n• Dark Chocolate Cookies: Simpan di Lock n Lock suhu ruang (Exp 7 hari setelah dipindahkan).\n• Good Time & Silverqueen: Simpan di Pop up square bersih & kering.\n• Teh Lipton: Simpan di Jug stainless suhu ruang (Exp 1 hari setelah di-prepare).',
          criticalPoint: 'Pop up square tempat bubuk dan cookies harus selalu bersih, kering, dan tertutup rapat.'
        },
        {
          stepNum: 6,
          title: 'Penyimpanan Bahan Segar (Sayur & Daun)',
          desc: '• Caisim Organic: Simpan di Plastic clip 7x10cm / Lock n Lock (5 hari setelah prepare, selalu cek fisik).\n• Daun Mint: Simpan di Bormiolli jar di Chiller (Selalu cek kondisi fisik).\n• Jeruk Nipis (Lime): Simpan di Chiller (Exp 1 hari jika di-prepare di condiment container).',
          criticalPoint: 'Selalu lakukan inspeksi fisik kesegaran daun mint, caisim, dan lime sebelum digunakan.'
        }
      ],
      temperatureControl: 'Chiller: 2°C s/d 4°C | Freezer: ≤ -18°C | Suhu Ruang: Tempat Kering & Bebas Lembap',
      sanitationRules: [
        'Wadah Lock n Lock, Pop Up Square, dan Condiment Container wajib dicuci dan dikeringkan sempurna sebelum diisi ulang.',
        'Semua botol, container, dan jug wajib diberi stiker tanggal & jam prepare.'
      ]
    }
  },
  {
    id: 'doc-mixologist-4',
    code: 'FILE-SOP-BAR-04',
    title: 'Struktur Logika & Resep Minuman (Siap Konversi Kode).pdf',
    role: 'mixologist',
    fileSize: '2.1 MB',
    revDate: '2026-08-01',
    category: 'Resep & Logika Formulasi',
    description: 'Dokumentasi struktur logika, parameter lingkungan (ENV_CONFIG), dan formulasi resep minuman (Es Kopi Susu Pandan, Iced Lychee Tea, Milo Dinosaurus, Orange Jasmine Tea 22oz PP Injet, Milk Foam Prep, serta Hot Beverages) yang siap dikonversi ke kode.',
    fullContent: {
      summary: 'Dokumen panduan teknis & struktur objek (JSON-like) parameter lingkungan bar, batas kadaluarsa, serta formula presisi resep minuman Cinema XXI siap konversi kode.',
      requirements: [
        'Suhu Hotband: 88°C - 89°C | Undercounter Chiller: 4°C - 6°C | AC Gudang: 23°C.',
        'Masa simpan Creamer, Powder Jasmine, dan Powder Milk Foam maksimal 14 hari.',
        'Mengikuti takaran presisi gramasi (gr) & mililiter (ml) sesuai spesifikasi resep.'
      ],
      steps: [
        {
          stepNum: 1,
          title: 'Parameter Lingkungan & Standar Penyimpanan (Global Config)',
          desc: '• suhu_hotband: "88°C - 89°C"\n• suhu_under_counter: "4°C - 6°C"\n• suhu_ac_gudang: "23°C"\n• expiry: default_tea_prepare ("mengikuti kemasan"), creamer_max ("14 Hari"), powder_jasmine_max ("14 Hari"), powder_milk_foam_max ("14 Hari")',
          criticalPoint: 'Gunakan parameter lingkungan ini sebagai variabel konstan (constant settings) dalam logika sistem.'
        },
        {
          stepNum: 2,
          title: 'Resep: Es Kopi Susu Pandan (Ukuran L) [Blend]',
          desc: 'Max portion per batch: 3 porsi.\nKomposisi Ingredients:\n• Fresh Milk: 105 ml\n• Coffee Essence: 120 ml\n• Monin Pandan: 30 ml\n• Coconut Sugar: 25 ml\n• Monin Coconut: 5 ml\n• Creamer: 36 gr\n• Ice Cube Cup: 0.75 (3/4 cup)',
          criticalPoint: 'Maksimal racikan sekali blend adalah 3 porsi.'
        },
        {
          stepNum: 3,
          title: 'Resep: Iced Lychee Tea [Shake]',
          desc: 'Max portion per batch: 5 porsi.\n• Per Porsi: Teh Lipton 260 ml (dihitung dari batch 1300ml / 5), Simple Syrup 20 ml, Monin Lychee 60 ml, Buah Longan 3 pcs (30gr), Buah Longan Utuh 1 pcs, Ekstra Jelly 44 gr.\n• Batch 5 Porsi: Teh Lipton 1300 ml, Simple Syrup 100 ml, Monin Lychee 300 ml.',
          criticalPoint: 'Shake hingga terbentuk aerasi buih halus dan dingin sempurna.'
        },
        {
          stepNum: 4,
          title: 'Resep: Milo Dinosaurus [Single L & Batch 5 Porsi]',
          desc: '• Single (Uk L): Air Mineral 210 ml, Fresh Milk 30 ml, Hershey 28 gr, Simple Syrup 10 ml, KKW Powder 38 gr, Creamer 22 gr, Ice Cube Cup 0.75, Garnish Good Time 1 pcs, Topping Milo 3in1 10 gr.\n• Batch 5 Porsi (Mix Blend - Smoothies, No Ice, Blend 30s): Air 625 ml, Susu 125 ml, Simple Syrup 50 ml, Hershey 100 gr (20g*5), KKW Sachet 140 gr (28g*5), Max Creamer Sachet 80 gr (16g*5), Garnis Milo 1 pcs.',
          criticalPoint: 'Batch 5 porsi menggunakan metode Mix Blend tanpa es batu selama 30 detik.'
        },
        {
          stepNum: 5,
          title: 'Resep: Orange Jasmine Tea (22 oz PP/Injet) [Blend Splash]',
          desc: 'Total liquid target: 270 ml.\nKomposisi Ingredients:\n• Air: 120 ml (4 oz)\n• Jasmine Green Tea: 50 ml\n• Simple Syrup: 15 ml\n• Powder Jasmine: 35 gr\n• Oren Sunkis Daging: 40 gr\n• Oren Sunkis Slice: 1 pcs (Garnish)\n• Selasih: 22 gr\n• Es Batu: Full / secukupnya',
          criticalPoint: 'Blend splash dengan kecepatan tepat agar bulir jeruk dan selasih tetap utuh menarik.'
        },
        {
          stepNum: 6,
          title: 'Preparasi Komponen & Menu Sederhana/Panas',
          desc: '• Milk Foam Prep: Millac Gold 400 ml, Fresh Milk 100 ml, Gas Charger 1 pcs, Powder Milk Foam 10 gr => Yield Total 500 ml (10 porsi @18gr/porsi).\n• Hot Lychee Tea (Hot): Teh Lipton (1 pcs) + Monin Lychee.\n• Hojicha Latte (Hot/Ice): Base Hojicha (30 gr).',
          criticalPoint: 'Milk Foam menggunakan charger gas steril dan dikocok hingga kepadatan 18g/porsi.'
        }
      ],
      temperatureControl: 'Hotband: 88°C - 89°C | Undercounter: 4°C - 6°C | AC Gudang: 23°C',
      sanitationRules: [
        'Pastikan seluruh komponen shaker & blender higienis.',
        'Penyimpanan bubuk jasmine, creamer, dan milk foam powder maksimal 14 hari.'
      ]
    }
  },
  {
    id: 'doc-mixologist-5',
    code: 'FILE-SOP-BAR-05',
    title: 'SOP Equipment Maintenance - Bar Station Cleanliness & Equipment Maintenance.pdf',
    role: 'mixologist',
    fileSize: '2.4 MB',
    revDate: '2026-08-01',
    category: 'Equipment Maintenance',
    description: 'Panduan standar operasional kebersihan & perawatan peralatan bar (Blender, Water Tank, Stainless Pitcher, Shaker, Dispenser, Hot Water Dispenser Matic, Jigger, Pisau, Cutting Board, Ice Scoop, Botol, Pop Up Square, Shooter Glass, Container, Lap 3M, Timbangan Digital, Condiments, dan Sauce Bottle).',
    fullContent: {
      summary: 'Dokumentasi resmi prosedur pembersihan, pencucian, sanitasi, dan perawatan berkala seluruh peralatan kerja Bar Station Cinema XXI Café untuk menjaga keawetan alat dan higienitas minuman.',
      requirements: [
        'DILARANG keras mencuci Jug Blender & Tutup Blender menggunakan air panas karena dapat menyebabkan mika buram/retak.',
        'Pengangkatan Jug Blender HANYA boleh dilakukan saat mesin sudah dalam kondisi berhenti total agar drive socket tidak aus.',
        'Hot Water Dispenser Matic DILARANG dibongkar sendiri (hanya boleh dilakukan oleh teknisi resmi).',
        'Pencucian peralatan berbahan stainless (Pitcher, Shaker, Jigger, Shooter Glass) menggunakan perendaman air hangat + solar (10gr/L).'
      ],
      steps: [
        {
          stepNum: 1,
          title: 'Perawatan Blender & Komponennya',
          desc: '• Jug Blender: Cuci pakai sunlight saat closing, bilas & keringkan dengan lap 3M. Operational: Bilas air bersih & keringkan lap 3M setiap selesai pakai. (WARNING: DILARANG pakai air panas).\n• Tutup & Bagian Bawah: Sikat dengan sunlight menggunakan sikat gigi. DILARANG direndam air panas.\n• Mesin & Drive Socket: Angkat jug HANYA saat mesin berhenti. Karet disikat air sabun.',
          criticalPoint: 'DILARANG menggunakan air panas pada jug blender dan HANYA angkat jug saat mesin benar-benar berhenti.'
        },
        {
          stepNum: 2,
          title: 'Perawatan Water Tank, Dispenser, & Hot Water Dispenser (Matic)',
          desc: '• Water Tank: Bagian dalam dicuci air bersih lalu lap 3M. Bagian luar lap 3M.\n• Dispenser Bowl: Lepas dari mesin, cuci dengan sponge halus + sunlight (atau cairan Amway), bilas & lap 3M.\n• Dispenser Machine (Condensor Fan): Vacuum debu, lalu lap 3M setengah basah.\n• Hot Water Dispenser (Matic): Dilarang bongkar sendiri (hanya teknisi). Pengajuan perawatan: 1x sebulan (air normal), 2 minggu 1x (air berkapur).',
          criticalPoint: 'Condensor fan dikena vacuum debu & perawatan Hot Water Dispenser disesuaikan kondisi air.'
        },
        {
          stepNum: 3,
          title: 'Perawatan Equipment Stainless (Pitcher, Shaker, & Jigger)',
          desc: '• Stainless Pitcher (1.8L & 1.5L): Rendam air hangat + solar (10gr/L) 10-15 menit. Bilas air bersih + sunlight, keringkan lap 3M.\n• Shaker (500ml & 650ml): Rendam air hangat + solar (10gr/L) 15 menit. Bilas air bersih + sunlight, keringkan lap 3M.\n• Jigger (Lama 1/0.5oz & Baru 1/1.5oz): Rendam air hangat + solar (10gr/L) 15 menit. Bilas bersih, cuci sunlight, keringkan lap 3M.',
          criticalPoint: 'Gunakan perendaman solar (10gr/L) selama 10-15 menit untuk menghilangkan bau dan kerak susu/sirup.'
        },
        {
          stepNum: 4,
          title: 'Perawatan Botol, Pop Up Square, Container, & Shooter Glass',
          desc: '• Lock & Lock Bottle (1.2L): Saat produk habis, bilas air hangat, sikat botol + sunlight. Tutup disikat gigi, bilas bersih.\n• Pop Up Square: Tutup dibersihkan lap 3M. Bagian dalam cuci sunlight, bilas, lap kering.\n• Shooter Glass: Closing cuci sunlight. Mingguan: rendam air panas + solar.\n• Juice/Milk Container: Closing pourer direndam air panas, lubang bersihkan toothpick, cuci sunlight. Leher & badan cuci sunlight.\n• Sauce Bottle with Lid: Saat produk habis, bilas air hangat, cuci sunlight, bilas bersih.\n• Condiments Container: Closing cuci sunlight, bilas, lap kering.',
          criticalPoint: 'Bersihkan lubang pourer container susu/jus menggunakan toothpick secara berkala.'
        },
        {
          stepNum: 5,
          title: 'Perawatan Alat Potong, Ice Scoop, Lap 3M, & Timbangan Digital',
          desc: '• Kitchen Knife: Setiap closing cuci sunlight, bilas air bersih.\n• Cutting Board: Setiap pakai cuci & bilas. Closing: cuci sunlight + scotch-brite, bilas bersih.\n• Scoop Ice: Setiap closing cuci sunlight. Sela-sela sikat gigi, bilas bersih.\n• 3M Cloth (Lap): Closing cuci sabun, bilas, lalu jemur hingga kering.\n• Digital Scale: Setiap selesai pakai lap bersih semua bagian.',
          criticalPoint: 'Sela-sela Scoop Ice disikat gigi dan Lap 3M dijemur setiap selesai closing.'
        }
      ],
      temperatureControl: 'Air Hangat Perendaman Equipment: ±40°C - 50°C | DILARANG AIR PANAS UNTUK MIKA BLENDER',
      sanitationRules: [
        'Semua lap 3M wajib dicuci sabun dan dijemur kering setiap closing.',
        'Sikat gigi khusus sanitasi wajib digunakan untuk sela-sela ice scoop, tutup botol, dan karet blender.'
      ]
    }
  }
];

export const INITIAL_SUPERVISOR_REPORTS: SupervisorReport[] = [
  {
    id: 'rep-001',
    reportCode: 'REP-COMMIS-20260731-01',
    outletName: 'Cafe Empire',
    submittedBy: 'Rian Sukma',
    jobdeskRole: 'commis',
    submittedAt: '31 Jul 2026, 08:45 WIB',
    status: 'Pending',
    completedCount: 6,
    totalCount: 6,
    checklistSummary: [
      '✓ Penggunaan Apron LENGKAP',
      '✓ Suhu Chiller: 2.1°C, Freezer: -19.5°C',
      '✓ Sanitasi Cutting Board Merah & Hijau',
      '✓ Thawing Beef Patty + Stiker FIFO',
      '✓ Core Temp Burger Patty 170°C (Tested)',
      '✓ Exhaust Hood & Griddle Dikelap Clean'
    ],
    stockSummary: 'Beef Patty sisa 22 Pcs (Perlu Reorder), Lettuce sisa 1.8 Kg.',
  },
  {
    id: 'rep-002',
    reportCode: 'REP-MIX-20260731-02',
    outletName: 'Cafe Empire',
    submittedBy: 'Bayu Mixologist',
    jobdeskRole: 'mixologist',
    submittedAt: '31 Jul 2026, 09:15 WIB',
    status: 'Pending',
    completedCount: 5,
    totalCount: 5,
    checklistSummary: [
      '✓ Glassware Chilled & Ice Bin Steril',
      '✓ Kalibrasi Espresso: 18g Dose, 36g Yield, 27s',
      '✓ Fresh Lemon Squeezed 3L + Date Label',
      '✓ XXI Tropical Velvet Recipe Test OK',
      '✓ Backflush Espresso Machine OK'
    ],
    stockSummary: 'Fresh Lemon Juice sisa 0.8L (Batas Expiry Safe).',
  }
];

export const INITIAL_AUDIT_LOGS: AuditTrailLog[] = [
  {
    id: 'log-01',
    timestamp: '31 Jul 2026, 09:15 WIB',
    user: 'Bayu Mixologist',
    role: 'mixologist',
    action: 'Kirim Laporan Operasional Bar',
    details: 'Mengirimkan laporan #REP-MIX-20260731-02 (5/5 Tugas Selesai)',
    statusType: 'info'
  },
  {
    id: 'log-02',
    timestamp: '31 Jul 2026, 08:45 WIB',
    user: 'Rian Sukma',
    role: 'commis',
    action: 'Kirim Laporan Operasional Dapur',
    details: 'Mengirimkan laporan #REP-COMMIS-20260731-01 (6/6 Tugas Selesai)',
    statusType: 'info'
  },
  {
    id: 'log-03',
    timestamp: '31 Jul 2026, 08:20 WIB',
    user: 'Rian Sukma',
    role: 'commis',
    action: 'Update Suhu Chiller & Freezer',
    details: 'Suhu Chiller: 2.1°C, Deep Freezer: -19.5°C [KRITIS - Terekam]',
    statusType: 'success'
  },
  {
    id: 'log-04',
    timestamp: '31 Jul 2026, 08:05 WIB',
    user: 'Hendra SPV',
    role: 'supervisor',
    action: 'Buka Shift Operasional',
    details: 'Memverifikasi kesiapan awal outlet Cinema XXI Café Empire',
    statusType: 'approval'
  }
];

