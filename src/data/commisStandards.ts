export interface GramasiMenu {
  id: string;
  name: string;
  category: string;
  portions: {
    size: string;
    description: string;
  }[];
  notes: string[];
}

export interface EquipmentUtensil {
  id: number;
  name: string;
  function: string;
  category: 'Equipment Utama' | 'Mesin Popcorn' | 'Utensil Potong & Masak' | 'Kebersihan & Sanitasi';
}

export interface CookingTimeLimit {
  id: number;
  item: string;
  duration: string;
  temperature: string;
  limitPerBatch: string;
}

export interface SpoilExpiry {
  id: number;
  ingredient: string;
  spoilDuration: string;
  location: string;
  thawingNote: string;
}

export interface PopcornRecipe {
  id: string;
  title: string;
  machineType: string;
  ingredients: { name: string; amount: string }[];
}

export interface ExtraPopcornGrammage {
  productName: string;
  grammage: string;
}

export interface PrepStep {
  stepNo: number;
  popcornStep: string;
  commisStep: string;
  safetyImportantNote?: string;
}

// ==================== DATA STANDAR GRAMASI BAHAN COMMIS ====================
export const GRAMASI_BAHAN_COMMIS: GramasiMenu[] = [
  {
    id: 'g-sistagor',
    name: 'SISTAGOR',
    category: 'Snack Basket',
    portions: [
      { size: 'Small', description: 'French Fries (100 gr) + Sosis Vienna (2 pcs)' },
      { size: 'Medium', description: 'French Fries (200 gr) + Sosis Vienna (2 pcs)' },
      { size: 'Large', description: 'French Fries (200 gr) + Sosis Vienna (2 pcs)' }
    ],
    notes: [
      'Sauce tomat (10gr) & sauce chili (5gr) per tray dan extra.',
      'Penggunaan tray small digunakan pada porsi small, tray medium digunakan pada porsi medium & large.',
      'Item extra FF (100gr) menggunakan tray medium.',
      'Extra FF (100gr), MNC (3 pcs), Wonton (40gr), Sosis Vienna (1 pcs), Fish (1 pcs) berlaku kelipatan.',
      'Extra sauce tomat dan chili menggunakan snack cup 35ml.'
    ]
  },
  {
    id: 'g-ff',
    name: 'FRENCH FRIES',
    category: 'Sides & Fries',
    portions: [
      { size: 'Small', description: '175 gr' },
      { size: 'Medium', description: '275 gr' },
      { size: 'Large', description: '375 gr' }
    ],
    notes: [
      'Goreng dalam deep fryer suhu 170-175°C selama 3 menit 10 detik.',
      'Gunakan seasoning shaker XXI untuk perata rasa.'
    ]
  },
  {
    id: 'g-pangsit',
    name: 'MINI PANGSIT',
    category: 'Seafood Snacks',
    portions: [
      { size: 'Small', description: '80 gr' },
      { size: 'Medium', description: '120 gr' },
      { size: 'Large', description: '160 gr' }
    ],
    notes: [
      'Mini pangsit adalah snack olahan berbahan dasar seafood.',
      'Mini pangsit size Small & Medium menggunakan tray small.'
    ]
  },
  {
    id: 'g-mamigor',
    name: 'MAMIGOR',
    category: 'Combos',
    portions: [
      { size: 'Small', description: 'MNC (4 pcs) + Wonton (40 gr)' },
      { size: 'Medium', description: 'MNC (4 pcs) + Wonton (80 gr)' }
    ],
    notes: [
      'Mac and Cheese (MNC) adalah snack olahan berbahan dasar macaroni dan keju.',
      'Mamigor size M menggunakan tray small.'
    ]
  },
  {
    id: 'g-mixplatter',
    name: 'MIX PLATTER',
    category: 'Combos',
    portions: [
      { size: 'Small', description: 'FF (50 gr) + Wonton (40 gr) + Sosis Vienna (2 pcs)' },
      { size: 'Medium', description: 'FF (150 gr) + Wonton (40 gr) + Sosis Vienna (2 pcs)' },
      { size: 'Large', description: 'FF (100 gr) + Wonton (80 gr) + Sosis Vienna (3 pcs)' }
    ],
    notes: [
      'Disajikan hangat dengan saus tomat dan saus sambal.',
      'Tray medium untuk porsi Medium dan Large.'
    ]
  },
  {
    id: 'g-fishchips',
    name: 'FISH AND CHIPS',
    category: 'Mains',
    portions: [
      { size: 'Single', description: 'Fish Dory/Patin (1 slice) + FF (100 gr)' },
      { size: 'Double', description: 'Fish Dory/Patin (2 slice) + FF (100 gr)' }
    ],
    notes: [
      'Berbahan dasar ikan Dory / Ikan Patin impor berkualitas.',
      'Fish dipotong menjadi 2 bagian sebelum digoreng dalam deep fryer.'
    ]
  },
  {
    id: 'g-omaygor',
    name: 'OMAYGOR',
    category: 'Seafood & Poultry',
    portions: [
      { size: 'Small', description: '4 pcs + Sauce Kacang (50 gr)' }
    ],
    notes: [
      'Omaygor adalah snack olahan berbahan dasar ikan dan ayam.',
      'Penggunaan tray small. Extra sauce per cup 50gr menggunakan cup 100ml.',
      'PENTING: Omaygor TIDAK BOLEH digoreng lagi jika bagian dalamnya belum matang. Turunkan suhu deep fryer jika minyak terlalu panas.'
    ]
  },
  {
    id: 'g-cireng',
    name: 'CIRENG',
    category: 'Indonesian Snacks',
    portions: [
      { size: 'Small', description: '5 pcs + Sauce Rujak (50 gr)' }
    ],
    notes: [
      'Goreng pada suhu 170-175°C selama 4-5 menit hingga kenyal dan renyah luar.'
    ]
  },
  {
    id: 'g-nachos',
    name: 'NACHOS',
    category: 'Mexican & Chips',
    portions: [
      { size: 'Small', description: 'Tortilla Chips (25 gr) + Jalapeno (12 gr) + Sauce Keju (35 gr)' },
      { size: 'Medium', description: 'Tortilla Chips (45 gr) + Jalapeno (12 gr) + Sauce Keju (35 gr)' }
    ],
    notes: [
      'Extra cheese sauce dan jalapeno menggunakan snack cup 100ml.',
      'PENTING: Selalu cek tortilla chips agar dalam keadaan crispy/renyah (tidak mlempem) saat disajikan.',
      'Cek kelayakan sauce cheese dan tanggal expired tertera.',
      'Tortilla chip adalah olahan dari jagung yang berasal dari Mexico.'
    ]
  },
  {
    id: 'g-chickenburger',
    name: 'CHICKEN BURGER',
    category: 'Burgers',
    portions: [
      { size: 'Spicy', description: 'Bun Burger (1 pcs) + Chicken Patty (1 pcs) + Lettuce (15gr) + Tomat (2 slice) + Bombay (2 slice) + Sauce Chili (4 putaran) + Mayonaise (2 putaran)' },
      { size: 'Medium', description: 'Bun Burger (1 pcs) + Chicken Patty (1 pcs) + Lettuce (15gr) + Tomat (2 slice) + Bombay (2 slice) + Sauce Tomat (2 putaran) + Sauce Chili (2 putaran) + Mayonaise (2 putaran)' },
      { size: 'Low', description: 'Bun Burger (1 pcs) + Chicken Patty (1 pcs) + Lettuce (15gr) + Tomat (2 slice) + Bombay (2 slice) + Sauce Tomat (4 putaran) + Mayonaise (2 putaran)' }
    ],
    notes: [
      'Jika ada double patty, hanya penambahan patty lagi (gramasi sayuran tetap sama).',
      'Tataan Single Burger: Bun bawah > Lettuce > Patty > Tomat > Bombay > Bun atas.',
      'Tataan Double Burger: Bun bawah > Lettuce > Patty > Tomat > Bombay > Patty > Tomat > Bombay > Bun atas.',
      'Campuran sauce diratakan pada bun burger sebelum masuk oven convection.',
      'Packaging menggunakan kertas minyak dan AP 2 warna.',
      'Standar ketebalan irisan: Lettuce (3mm), Bombay (5mm), Tomat (5mm).'
    ]
  },
  {
    id: 'g-fishburger',
    name: 'FISH BURGER',
    category: 'Burgers',
    portions: [
      { size: 'Spicy', description: 'Bun Burger (1 pcs) + Fish Dory (1 pcs) + Lettuce (15gr) + Bombay (2 slice) + Sauce Chili (4 putaran) + Mayonaise (2 putaran)' },
      { size: 'Medium', description: 'Bun Burger (1 pcs) + Fish Dory (1 pcs) + Lettuce (15gr) + Bombay (2 slice) + Sauce Tomat (2 putaran) + Sauce Chili (2 putaran) + Mayonaise (2 putaran)' },
      { size: 'Low', description: 'Bun Burger (1 pcs) + Fish Dory (1 pcs) + Lettuce (15gr) + Bombay (2 slice) + Sauce Tomat (4 putaran) + Mayonaise (2 putaran)' }
    ],
    notes: [
      'Fish dipotong menjadi 2 bagian sebelum digoreng.',
      'Tataan Fish Burger: Bun bawah > Lettuce > Fish > Bombay > Bun atas.',
      'PERBEDAAN utama dengan Chicken Burger: Fish Burger TIDAK menggunakan tomat.'
    ]
  },
  {
    id: 'g-orihotdog',
    name: 'ORIGINAL HOTDOG',
    category: 'Hotdogs',
    portions: [
      { size: 'Spicy', description: 'Bun Hotdog (1 pcs) + Sosis Frankfrutter (1 pcs) + Kyuri (1 slice) + Sauce Chili (4 strip) + Mayonaise (2 strip)' },
      { size: 'Medium', description: 'Bun Hotdog (1 pcs) + Sosis Frankfrutter (1 pcs) + Kyuri (1 slice) + Sauce Tomat (2 strip) + Sauce Chili (2 strip) + Mayonaise (2 strip)' },
      { size: 'Low', description: 'Bun Hotdog (1 pcs) + Sosis Frankfrutter (1 pcs) + Kyuri (1 slice) + Sauce Tomat (4 strip) + Mayonaise (2 strip)' }
    ],
    notes: [
      'Potongan Kyuri (mentimun Jepang): Panjang 13 cm dan tebal 5 mm.',
      'Pemberian sauce dilakukan SESUDAH bun dipanaskan di microwave.',
      'Packing menggunakan kertas minyak dan box hotdog khusus XXI.',
      'Jika ada penambahan extra FF, gunakan lunch box & saus diberikan di extra cup.'
    ]
  },
  {
    id: 'g-jumbohotdog',
    name: 'JUMBO HOTDOG',
    category: 'Hotdogs',
    portions: [
      { size: 'Spicy', description: 'Bun Hotdog (1 pcs) + Sosis Judgwurt (1 pcs) + Kyuri (1 slice) + Sauce Chili (4 strip) + Mayonaise (2 strip)' },
      { size: 'Medium', description: 'Bun Hotdog (1 pcs) + Sosis Judgwurt (1 pcs) + Kyuri (1 slice) + Sauce Tomat (2 strip) + Sauce Chili (2 strip) + Mayonaise (2 strip)' },
      { size: 'Low', description: 'Bun Hotdog (1 pcs) + Sosis Judgwurt (1 pcs) + Kyuri (1 slice) + Sauce Tomat (4 strip) + Mayonaise (2 strip)' }
    ],
    notes: [
      'Perbedaan Jumbo dan Reguler Hotdog hanya pada sosis (Judgwurt vs Frankfrutter) & durasi microwave.',
      'Selalu cek sosis saat keluar microwave, jangan sampai rusak/pecah akibat overheat.'
    ]
  },
  {
    id: 'g-stixx',
    name: 'STIXX',
    category: 'Pretzel & Bakery',
    portions: [
      { size: 'Small', description: 'Stixx (3 pcs) + Cup 8 oz (1 pcs)' }
    ],
    notes: [
      'Stixx adalah roti pretzel berisi cream cheese dengan taburan kacang mede (cashew) & gula.',
      'Extra stixx bijian: maksimal muat 4 pcs per cup 8 oz.',
      'Waktu memasak 3-4 menit @ 220°C, lalu resting 2 menit. Pastikan tekstur luar renyah (crispy).'
    ]
  },
  {
    id: 'g-croffle',
    name: 'CROFFLE ORIGINAL & NUTTELLA',
    category: 'Croffle & Sweets',
    portions: [
      { size: 'Standard', description: '1 pcs per porsi (1 sachet)' }
    ],
    notes: [
      'Suhu masak standar 220°C selama 3 menit.',
      'Suhu oven convention per outlet bervariasi antara 250°C - 270°C.',
      'Sedia 1 box croffle isi sesuai permintaan customer.'
    ]
  },
  {
    id: 'g-xxiplatter',
    name: 'XXI PLATTER',
    category: 'Combos',
    portions: [
      { size: 'Medium Tray', description: 'FF (100 gr) + Wonton (40 gr) + MNC (2 pcs) + Sosis (2 pcs)' }
    ],
    notes: [
      'Disajikan pada Tray Medium dengan Saus Tomat & Saus Sambal.',
      'Bisa diekstra sesuai permintaan customer.'
    ]
  }
];

// ==================== EQUIPMENT DAN UTENSIL COMMIS (38 ITEMS) ====================
export const EQUIPMENT_UTENSILS_COMMIS: EquipmentUtensil[] = [
  { id: 1, name: 'DUMP STATION', function: 'Alat besar untuk exhaust, fryer, dan undercounter', category: 'Equipment Utama' },
  { id: 2, name: 'EXHAUST', function: 'Alat penghisap asap dapur', category: 'Equipment Utama' },
  { id: 3, name: 'DEEP FRYER', function: 'Alat menggoreng dengan minyak berkapasitas besar', category: 'Equipment Utama' },
  { id: 4, name: 'CHILLER', function: 'Penyimpanan bahan segar (2°C - 4°C)', category: 'Equipment Utama' },
  { id: 5, name: 'TERMOSTAT', function: 'Untuk mengatur & mengontrol suhu pada fryer', category: 'Equipment Utama' },
  { id: 6, name: 'UNDER COUNTER CHILLER', function: 'Penyimpanan bahan prepare siap pakai di area depan', category: 'Equipment Utama' },
  { id: 7, name: 'FREEZER', function: 'Penyimpanan bahan baku beku (-15°C s/d -18°C)', category: 'Equipment Utama' },
  { id: 8, name: 'OVEN CONVECTION', function: 'Alat memanggang burger, croffle, dan stixx', category: 'Equipment Utama' },
  { id: 9, name: 'WARMER NACHOS', function: 'Penyimpanan tortilla chips yang sudah diprepare agar tetap renyah', category: 'Equipment Utama' },
  { id: 10, name: 'WARMER CHEESE', function: 'Penyimpanan dan pemanas sauce keju untuk nachos', category: 'Equipment Utama' },
  { id: 11, name: 'WARMER POPCORN', function: 'Penyimpanan popcorn hangat yang siap jual', category: 'Equipment Utama' },
  { id: 12, name: 'MESIN BUTTER', function: 'Penyimpanan & dispenser butter oil cair', category: 'Equipment Utama' },
  { id: 13, name: 'MESIN POPCORN', function: 'Alat utama memasak popping corn XXI', category: 'Mesin Popcorn' },
  { id: 14, name: 'KETTLE POPCORN', function: 'Wadah stainless pemanasan & pemasakan popcorn', category: 'Mesin Popcorn' },
  { id: 15, name: 'SPATULA SILIKON POPCORN', function: 'Untuk membersihkan sisa jagung/bumbu pada kettle', category: 'Mesin Popcorn' },
  { id: 16, name: 'SAKLAR KETTLE HEAT', function: 'Menyalakan pemanas kettle popcorn', category: 'Mesin Popcorn' },
  { id: 17, name: 'SAKLAR AGITATOR', function: 'Memutarkan baling-baling pengaduk kettle popcorn', category: 'Mesin Popcorn' },
  { id: 18, name: 'SAKLAR EXHAUST', function: 'Menghisap uap & asap saat popping corn', category: 'Mesin Popcorn' },
  { id: 19, name: 'SAKLAR CONDITIONER', function: 'Menghangatkan bagian penampungan popcorn', category: 'Mesin Popcorn' },
  { id: 20, name: 'SAKLAR LIGHT', function: 'Menyalakan lampu penerang booth popcorn', category: 'Mesin Popcorn' },
  { id: 21, name: 'SAKLAR PUMP', function: 'Mengeluarkan minyak otomatis pada mesin popcorn', category: 'Mesin Popcorn' },
  { id: 22, name: 'BASKET FRYER', function: 'Keranjang stainless tempat bahan digoreng', category: 'Utensil Potong & Masak' },
  { id: 23, name: 'BOWL STAINLESS', function: 'Wadah untuk mencampurkan bahan-bahan & adonan', category: 'Utensil Potong & Masak' },
  { id: 24, name: 'GRIP TONG STAINLESS', function: 'Penjepit untuk mengambil bahan makanan panas', category: 'Utensil Potong & Masak' },
  { id: 25, name: 'GRIP TONG PLASTIC', function: 'Penjepit untuk mengambil bahan makanan asam', category: 'Utensil Potong & Masak' },
  { id: 26, name: 'GRIP TONG SILIKON', function: 'Penjepit untuk mengambil bahan makanan setengah panas', category: 'Utensil Potong & Masak' },
  { id: 27, name: 'BREAD KNIFE', function: 'Pisau bergerigi khusus memotong roti burger & hotdog', category: 'Utensil Potong & Masak' },
  { id: 28, name: 'CHEF KNIFE', function: 'Pisau dapur serbaguna untuk memotong sayuran & bahan', category: 'Utensil Potong & Masak' },
  { id: 29, name: 'PARING KNIFE', function: 'Pisau kecil khusus menyat/mengiris sosis', category: 'Utensil Potong & Masak' },
  { id: 30, name: 'SPATULA SILIKON', function: 'Alat mengerok sisa adonan rapat di bowl', category: 'Utensil Potong & Masak' },
  { id: 31, name: 'SPATULA LURUS', function: 'Meratakan saus mayo & chili pada bun patty', category: 'Utensil Potong & Masak' },
  { id: 32, name: 'SPATULA SETENGAH LINGKARAN', function: 'Memasukkan dan mengambil patty dari oven convection', category: 'Utensil Potong & Masak' },
  { id: 33, name: 'BALLOON WHISK', function: 'Pengocok stainless untuk mengaduk adonan basah', category: 'Utensil Potong & Masak' },
  { id: 34, name: 'THERMOMETER DIGITAL', function: 'Alat ukur suhu inti makanan & minyak', category: 'Utensil Potong & Masak' },
  { id: 35, name: 'TIMER DIGITAL', function: 'Hitung mundur durasi goreng & memanggang', category: 'Utensil Potong & Masak' },
  { id: 36, name: '3M / LAP MICROFIBER', function: 'Lap khusus pembersih equipment & utensil', category: 'Kebersihan & Sanitasi' },
  { id: 37, name: 'CKC / ABU GOSOK', function: 'Bahan pembersih kerak membandel pada kettle & fryer', category: 'Kebersihan & Sanitasi' },
  { id: 38, name: 'SOLAR / DEGREASER', function: 'Bahan pembersih kerak lemak minyak pada utensil penunjang', category: 'Kebersihan & Sanitasi' }
];

// ==================== DURASI & LIMIT MASAK (COOKING DURATIONS) ====================
export const COOKING_TIME_LIMITS: CookingTimeLimit[] = [
  { id: 1, item: 'French Fries (FF)', duration: '3 Menit 10 Detik', temperature: '170 - 175°C', limitPerBatch: '4 Porsi' },
  { id: 2, item: 'Wonton', duration: '2 Menit 30 Detik', temperature: '170 - 175°C', limitPerBatch: '5 Porsi' },
  { id: 3, item: 'Chicken / Beef Patty', duration: '3 Menit 30 Detik', temperature: '170 - 175°C', limitPerBatch: '8 Porsi' },
  { id: 4, item: 'Mac and Cheese (MNC)', duration: '2 Menit', temperature: '170 - 175°C', limitPerBatch: '9 - 15 Pcs' },
  { id: 5, item: 'Fish Dory', duration: '1 Menit 50 Detik', temperature: '170 - 175°C', limitPerBatch: '4 Single' },
  { id: 6, item: 'Cireng', duration: '4 - 5 Menit', temperature: '170 - 175°C', limitPerBatch: 'Sesuai basket' },
  { id: 7, item: 'Omay Gor', duration: '4 - 5 Menit', temperature: '170 - 175°C', limitPerBatch: 'Turunkan suhu jika belum matang inti' },
  { id: 8, item: 'All Croffle', duration: '3 Menit', temperature: '220°C (Oven 250-270°C)', limitPerBatch: '1 Tray' },
  { id: 9, item: 'Bun Patty (Burger)', duration: '2 Menit', temperature: '220°C', limitPerBatch: 'Sesuai tray oven' },
  { id: 10, item: 'Bun Hotdog', duration: 'Baru (10 Detik) / Simpanan (20 Detik)', temperature: 'Microwave', limitPerBatch: 'Max 2 Pcs' },
  { id: 11, item: 'Sosis Vienna', duration: 'Micro (10 Detik) / Fry (25 Detik)', temperature: '170 - 175°C', limitPerBatch: '14 Pcs' },
  { id: 12, item: 'Sosis Frankfruter', duration: '20 Detik', temperature: 'Microwave', limitPerBatch: '7 Pcs' },
  { id: 13, item: 'Sosis Judgwurt', duration: '30 Detik', temperature: 'Microwave', limitPerBatch: '4 Pcs' },
  { id: 14, item: 'Stixx Pretzel', duration: '3 Menit (Resting 2 Menit)', temperature: '220°C', limitPerBatch: 'Max 4 Pcs per cup' }
];

// ==================== SPOIL & EXPIRY DURATION (SPOIL BAHAN BAKU) ====================
export const SPOIL_EXPIRY_LIST: SpoilExpiry[] = [
  { id: 1, ingredient: 'French Fries (FF)', spoilDuration: '3 Hari', location: 'Prepare Depan', thawingNote: '-' },
  { id: 2, ingredient: 'Wonton', spoilDuration: '5 Hari', location: 'Prepare Depan', thawingNote: '-' },
  { id: 3, ingredient: 'Mac & Cheese (MNC)', spoilDuration: '5 Hari', location: 'Prepare Depan', thawingNote: '-' },
  { id: 4, ingredient: 'Patty Daging/Ayam', spoilDuration: '5 Hari', location: 'Prepare Depan', thawingNote: '-' },
  { id: 5, ingredient: 'Cireng', spoilDuration: '3 Hari', location: 'Prepare Depan', thawingNote: '-' },
  { id: 6, ingredient: 'Omay Gor', spoilDuration: '5 Hari', location: 'Prepare Depan', thawingNote: '-' },
  { id: 7, ingredient: 'Fish Dory', spoilDuration: '2 Hari', location: 'Prepare Depan', thawingNote: '1 Malam Thawing Chiller' },
  { id: 8, ingredient: 'Sosis Vienna', spoilDuration: '1 Hari (Disayat) / 2 Hari (Belum Sayat)', location: 'Prepare Depan', thawingNote: '1 Hari Thawing Chiller' },
  { id: 9, ingredient: 'Sosis Frankfruter', spoilDuration: '2 Hari', location: 'Prepare Depan', thawingNote: '1 Hari Thawing Chiller' },
  { id: 10, ingredient: 'Sosis Judgwurt', spoilDuration: '2 Hari', location: 'Prepare Depan', thawingNote: '1 Hari Thawing Chiller' },
  { id: 11, ingredient: 'Croffle', spoilDuration: '1 Hari', location: 'Prepare Depan', thawingNote: '1 Malam Thawing Chiller' },
  { id: 12, ingredient: 'Stixx Pretzel', spoilDuration: '1 Hari', location: 'Prepare Depan', thawingNote: '1 Jam Suhu Ruang' },
  { id: 13, ingredient: 'Jalapeno Slices', spoilDuration: '14 Hari', location: 'Prepare Depan', thawingNote: '-' },
  { id: 14, ingredient: 'All Sayuran (Lettuce, Tomat, Bombay, Kyuri)', spoilDuration: '1 Hari (Dalam potongan)', location: 'Prepare Depan', thawingNote: 'Wajib cuci, tiriskan & wrapping ulang' },
  { id: 15, ingredient: 'Sauce Chili', spoilDuration: '1 Hari', location: 'Botol Dispenser', thawingNote: 'Thawing suhu ruang (jangan dingin saat disajikan)' },
  { id: 16, ingredient: 'Sauce Tomat', spoilDuration: '1 Hari', location: 'Botol Dispenser', thawingNote: 'Thawing suhu ruang' },
  { id: 17, ingredient: 'Sauce Spicy Mayo', spoilDuration: '5 Hari', location: 'Botol Dispenser', thawingNote: 'Simpan Chiller bila tidak dipakai' },
  { id: 18, ingredient: 'Sauce Rujak', spoilDuration: '1 Hari (Botol) / 7 Hari (Kemasan Open)', location: 'Botol / Pack', thawingNote: '-' },
  { id: 19, ingredient: 'Sauce Kacang', spoilDuration: '1 Hari (Botol) / 7 Hari (Kemasan Open)', location: 'Botol / Pack', thawingNote: '-' },
  { id: 20, ingredient: 'Mayonaise Standard', spoilDuration: '2 Hari', location: 'Botol Dispenser', thawingNote: '-' },
  { id: 21, ingredient: 'Adonan Basah Fish & Chips', spoilDuration: '1 Hari', location: 'Prepare Depan', thawingNote: 'Buat baru setiap pagi' },
  { id: 22, ingredient: 'Tepung Mix XXI', spoilDuration: '1 Bulan', location: 'Pack Tertutup', thawingNote: 'Simpan tempat kering' },
  { id: 23, ingredient: 'Tepung Fish & Chips', spoilDuration: '1 Bulan', location: 'Pack Tertutup', thawingNote: 'Simpan tempat kering' },
  { id: 24, ingredient: 'Bun Burger', spoilDuration: '3 Hari', location: 'Prepare Depan', thawingNote: 'Hindari tempat lembab' },
  { id: 25, ingredient: 'Bun Hotdog', spoilDuration: '3 Hari', location: 'Prepare Depan', thawingNote: 'Hindari tempat lembab' }
];

// ==================== RESEP POPCORN & SAUCE ====================
export const POPCORN_RECIPES: PopcornRecipe[] = [
  {
    id: 'pop-glaze-creators',
    title: 'Resep Popcorn Glaze Sweet (Manis)',
    machineType: 'Mesin Creators & Gold Medal 32 oz',
    ingredients: [
      { name: 'Jagung Popcorn', amount: '480 gram' },
      { name: 'Bubuk Glaze', amount: '300 gram' },
      { name: 'Gula Pasir (Gulaku)', amount: '110 gram' },
      { name: 'Organic Brown Sugar', amount: '40 gram' },
      { name: 'Mintel / Minyak Popcorn', amount: '200 ml' }
    ]
  },
  {
    id: 'pop-glaze-diplomat',
    title: 'Resep Popcorn Glaze Sweet (Porsi Setengah)',
    machineType: 'Mesin Popcorn 32 oz Diplomat',
    ingredients: [
      { name: 'Jagung Popcorn', amount: '240 gram' },
      { name: 'Bubuk Glaze', amount: '150 gram' },
      { name: 'Gula Pasir', amount: '55 gram' },
      { name: 'Organic Brown Sugar', amount: '20 gram' },
      { name: 'Mintel / Minyak Popcorn', amount: '100 ml' }
    ]
  },
  {
    id: 'pop-salty-goldmedal',
    title: 'Resep Popcorn Asin (Salty)',
    machineType: 'Mesin Gold Medal 32 oz',
    ingredients: [
      { name: 'Jagung Popcorn', amount: '930 gram' },
      { name: 'Garam Flavacol', amount: '30 gram' },
      { name: 'Mintel / Minyak Popcorn', amount: '300 ml' }
    ]
  },
  {
    id: 'pop-salty-creators',
    title: 'Resep Popcorn Asin (Salty)',
    machineType: 'Mesin Creators 32 oz',
    ingredients: [
      { name: 'Jagung Popcorn', amount: '852 gram' },
      { name: 'Garam Flavacol', amount: '25 gram' },
      { name: 'Mintel / Minyak Popcorn', amount: '300 ml' }
    ]
  }
];

export const EXTRA_POPCORN_GRAMMAGES: ExtraPopcornGrammage[] = [
  { productName: 'Popcorn Cornell Small', grammage: '15.6 gr' },
  { productName: 'Popcorn Cornell Medium', grammage: '19 gr' },
  { productName: 'Popcorn Cornell Large', grammage: '64 gr' },
  { productName: 'Popcorn Caramel Small', grammage: '78 gr' },
  { productName: 'Popcorn Caramel Medium', grammage: '96 gr' },
  { productName: 'Popcorn Milo Small', grammage: '95 gr' },
  { productName: 'Popcorn Milo Medium', grammage: '105 gr' },
  { productName: 'Popcorn Toffee Nut Small', grammage: '80 gr' },
  { productName: 'Popcorn Toffee Nut Medium', grammage: '98 gr' },
  { productName: 'Extra Popcorn Caramel / Popmil Small', grammage: '15 gr' },
  { productName: 'Extra Popcorn Caramel / Popmil Medium', grammage: '30 gr' }
];

export const SAUCE_BATTER_RECIPES = [
  {
    name: 'Resep Spicy Mayo XXI',
    ingredients: [
      { ingredient: 'Mayonaise Standard', amount: '50 gram' },
      { ingredient: 'Sauce Chili XXI', amount: '200 gram' }
    ],
    spoilNote: 'Tahan 5 hari dalam botol dispenser tertutup di chiller.'
  },
  {
    name: 'Resep Adonan Basah Fish & Chips',
    ingredients: [
      { ingredient: 'Tonic Water / Soda Water', amount: '250 ml' },
      { ingredient: 'Tepung Fish and Chips XXI', amount: '180 gram' }
    ],
    spoilNote: 'Wajib dibuat baru setiap pagi (Masa simpan 1 hari).'
  }
];

// ==================== STEP PREPARE OPERASIONAL ====================
export const STEP_PREPARE_LIST: PrepStep[] = [
  {
    stepNo: 1,
    popcornStep: 'Nyalakan MCB Listrik utama saat Opening.',
    commisStep: 'Pasang colokan pada kontak listrik & nyalakan lampu Dump Station.',
    safetyImportantNote: 'Minyak beku: Panaskan 30 mnt | ½ Beku: 15 mnt | Sedikit Beku: 5 mnt (Agar minyak stabil).'
  },
  {
    stepNo: 2,
    popcornStep: 'Pasang colokan listrik mesin popcorn.',
    commisStep: 'DEEP FRYER: Buka tutup, putar termostat ke standby 150°C, pasang basket fryer pada dudukan.',
    safetyImportantNote: 'Suhu standby fryer 150°C memastikan pemanasan bertahap aman.'
  },
  {
    stepNo: 3,
    popcornStep: 'Panaskan minyak popcorn dengan memutar tuas pemanas minyak.',
    commisStep: 'OVEN CONVECTION: Colok kabel, set suhu standby 220°C & putar tuas timer.',
    safetyImportantNote: 'Loyang oven wajib dilapisi baking paper agar tidak meninggalkan kerak.'
  },
  {
    stepNo: 4,
    popcornStep: 'Nyalakan tombol saklar Popcorn: Kettle Heat, Agitator, Exhaust, Conditioner, Lights, & Pump.',
    commisStep: 'MICROWAVE: Colok kabel, set piring pemanas bun hotdog & sosis.',
    safetyImportantNote: 'Sosis microwave jangan overheat agar sosis tidak pecah.'
  },
  {
    stepNo: 5,
    popcornStep: 'Pencet tombol HIJAU atas mesin untuk pompa minyak, sesudah minyak & bahan masuk, matikan PUMP.',
    commisStep: 'WARMER CHEESE: Colok kabel, buka wrapping selang keju bag, set selang pada pemutar sauce.',
    safetyImportantNote: 'Perbedaan Popcorn: ASIN tunggu suhu 100°C; MANIS bisa langsung tanpa min suhu.'
  },
  {
    stepNo: 6,
    popcornStep: 'Masukan urutan bahan: MANIS (Jagung > Minyak > Bumbu Glaze) | ASIN (Jagung > Bumbu Flavacol > Minyak). Tutup kettle rapat.',
    commisStep: 'WARMER NACHOS: Colok kabel, nyalakan tuas pemanas & lampu. Set prepare nachos per porsi.',
    safetyImportantNote: 'SOP Urutan masukan bahan wajib dipatuhi presisi.'
  },
  {
    stepNo: 7,
    popcornStep: 'Tunggu hingga suhu 180°C & meletup-letup. Matikan Kettle Heat & Agitator, tuang popcorn ke penampungan.',
    commisStep: 'Tata semua tray di meja stainless beserta botol saus, bowl, & piring saji.',
    safetyImportantNote: 'SEMUA SAUS TIDAK BOLEH DINGIN (Thawing suhu ruang terlebih dahulu).'
  },
  {
    stepNo: 8,
    popcornStep: 'Bersihkan sisa popcorn di kettle pakai spatula silikon. Lap dengan lap basah pakai Heat Resistant Gloves.',
    commisStep: 'Cek kondisi kabel, kebersihan lingkungan, expired date bahan baku, & stok jualan harian.',
    safetyImportantNote: 'PENTING: Pelanggaran bahan expired date dikenakan SANKSI TEGAS!'
  },
  {
    stepNo: 9,
    popcornStep: 'Matikan Exhaust, ayak popcorn agar jagung yang tidak meletup terpisah ke loyang bawah.',
    commisStep: 'Cek suhu Undercounter Chiller (2°C - 4°C) & Freezer (-15°C s/d -18°C). Laporkan jika ada deviasi.',
    safetyImportantNote: 'Gunakan prinsip FIFO (First In First Out) secara disiplin.'
  },
  {
    stepNo: 10,
    popcornStep: 'Tombol Standby saat operational: CONDITIONER dan LIGHTS saja.',
    commisStep: 'Saat Closing: Saring minyak fryer dari serpihan tepung. Lap meja & mesin pakai 3M + air sabun. Wrap selang keju. Matikan MCB.',
    safetyImportantNote: 'Wajib double check colokan, freezer, & chiller saat closing demi keamanan.'
  }
];
