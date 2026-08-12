import { jsPDF } from 'jspdf';
import fs from 'fs';

const slides = [
  {
    id: 1,
    category: '1. OPENING',
    title: 'Standardisasi & Digitalisasi Operasional Cinema XXI Café',
    subtitle: 'Transformasi Workstation Commis, Mixologist, & Supervisor Hub',
    keyPoints: [
      'Presenter: Tim Operasional & Mixology Cinema XXI',
      'Tanggal Presentasi: 9 Agustus 2026',
      'Fokus Utama: Standardisasi Resep, Digitalisasi Checklist, & Maintenance Equipment',
      'Tujuan Sesi: Memperkenalkan Sistem Operasional Terpadu Berbasis Digital'
    ],
    details: [
      { label: 'Outlet Target', value: 'Cinema XXI All Outlets' },
      { label: 'Platform Status', value: 'Web & Mobile Ready' },
      { label: 'Akses Demo User', value: '1-Click Profile Switcher' },
      { label: 'Standar Mutu', value: 'VISOP v3.0 Standard' }
    ],
    speakerNotes: 'Selamat pagi/siang rekan-rekan. Hari ini kita akan membahas transformasi digital operasional di Cinema XXI Café untuk meningkatkan efisiensi dan menjaga konsistensi rasa produk.'
  },
  {
    id: 2,
    category: '2. CURRENT SITUATION',
    title: 'Kondisi Saat Ini & Latar Belakang Perubahan',
    subtitle: 'Tantangan Operasional Bar & Kitchen di Lapangan',
    keyPoints: [
      'Kondisi Saat Ini: Pencatatan resep, checklist kebersihan, dan stok harian masih menggunakan kertas/binder fisik yang berisiko hilang atau rusak.',
      'Data & Fakta: Terdapat 23+ jenis peralatan bar mahal (seperti Blender, Dispenser, Hotband) yang berisiko rusak jika pembersihan tidak sesuai standar.',
      'Variasi Rasa: Pembuatan resep secara manual saat jam sibuk (peak-hour) sering mengalami sedikit deviasi rasa.',
      'Mengapa Perubahan Diperlukan: Membutuhkan sistem digital terpusat yang presisi, mudah diakses di handphone/tablet, dan terverifikasi realtime.'
    ],
    details: [
      { label: 'Media Lama', value: 'Kertas / Binder Fisik' },
      { label: 'Jumlah Equipment', value: '23 Jenis Peralatan Bar' },
      { label: 'Risiko Peak-Hour', value: 'Deviasi Rasa & Human Error' },
      { label: 'Kebutuhan', value: 'Digital Realtime System' }
    ],
    speakerNotes: 'Kondisi kerja saat peak-hour membutuhkan kecepatan tinggi. Tanpa panduan digital yang presisi, human error dalam pencampuran resep dan kebersihan alat sangat mungkin terjadi.'
  },
  {
    id: 3,
    category: '3. PERMASALAHAN',
    title: 'Point Permasalahan Utama & Risiko Operasional',
    subtitle: 'Analisis Dampak & Potential Losses Tanpa Sistem',
    keyPoints: [
      'Point Utama 1: Ketidaksesuaian gramasi bahan baku saat pembuatan batch porsi besar (misal: Iced Lychee Tea atau Milo Dinosaurus).',
      'Point Utama 2: Kesalahan penanganan alat, seperti cuci Jug Blender mika pakai air panas yang menyebabkan kusam & retak.',
      'Dampak Operasional: Kualitas minuman tidak stabil, biaya perbaikan alat meningkat, dan pelaporan stok harian terlambat di-ACC.',
      'Risiko Jika Tidak Diperbaiki: Terjadinya komplain pelanggan Cinema XXI, pembengkakan biaya operasional (spoilage/waste), dan penurunan kualitas rasa.'
    ],
    details: [
      { label: 'Dampak Kebersihan', value: 'Peralatan Cepat Rusak' },
      { label: 'Dampak Kualitas', value: 'Komplain Rasa Pelanggan' },
      { label: 'Dampak Finansial', value: 'Waste & Cost Overrun' },
      { label: 'Risiko Reputasi', value: 'Penurunan Standar Cinema XXI' }
    ],
    speakerNotes: 'Contoh nyata: mencuci blender dengan air panas langsung merusak bahan mika. Sistem ini memberikan peringatan tegas (Warning System) agar kesalahan tersebut tidak berulang.'
  },
  {
    id: 4,
    category: '4. TUJUAN',
    title: 'Visi, Goal, & Nilai Yang Ingin Diberikan',
    subtitle: 'Arah Pengembangan & Target Kinerja Sistem Operasional',
    keyPoints: [
      'Visi: Menjadikan Cinema XXI Café sebagai tolok ukur operasional bioskop & café kelas atas dengan standar mutu tinggi.',
      'Goal Utama: Mendigitalisasi 100% SOP, Checklist Harian (Opening/Mid/Closing), Kalkulator Resep, dan Stock Control dalam satu platform.',
      'Nilai Bagi Staf: Memudahkan Commis & Mixologist bekerja lebih cepat tanpa menghafal ratusan angka gramasi.',
      'Nilai Bagi Supervisor & Manajemen: Punya kontrol penuh terhadap akurasi stok, kebersihan bar, dan persetujuan laporan harian.'
    ],
    details: [
      { label: 'Target Digitalisasi', value: '100% Paperless' },
      { label: 'Akurasi Resep', value: '100% Presisi Gramasi' },
      { label: 'Kecepatan Laporan', value: 'Realtime Approval SPV' },
      { label: 'Kemudahan Akses', value: 'Responsive All Devices' }
    ],
    speakerNotes: 'Tujuan akhir kita adalah menciptakan ruang kerja yang efisien bagi staf di lapangan serta laporan yang akurat dan transparan bagi manajemen.'
  },
  {
    id: 5,
    category: '5. THE PRODUCT SYSTEM',
    title: 'Sistem Operasional Cinema XXI Hub',
    subtitle: 'Filosofi & Arsitektur Produk Digital',
    keyPoints: [
      'Nama Sistem: Cinema XXI Operational Hub & Digital Learning Center (VISOP v3.0).',
      'Filosofi Logo & Warna: Menggunakan sentuhan Gold Amber & Deep Slate yang melambangkan identitas Cinema XXI, ketepatan logika, dan kebersihan prima.',
      'Gambaran Singkat: Platform terpadu yang menggabungkan Pusat Edukasi SOP, Tabel Konversi Resep Interaktif, Stock Control Harian, dan Dashboard Supervisor.',
      'Karakteristik Produk: Ringan, tanpa perlu instalasi rumit, dan mendukung peralihan demo user instan (Commis, Mixologist, Supervisor).'
    ],
    details: [
      { label: 'Nuansa Warna', value: 'Gold Amber & Slate Dark' },
      { label: 'Komponen Utama', value: 'Learning, Ops, SPV Hub' },
      { label: 'Aksesilibitas', value: 'Cloud Native Application' },
      { label: 'Kecepatan Muat', value: '< 1 Detik Fast Render' }
    ],
    speakerNotes: 'Sistem ini dirancang dengan antarmuka gelap yang nyaman untuk mata staf di area bar yang minim pencahayaan redup bioskop.'
  },
  {
    id: 6,
    category: '6. WHAT MAKES IT DIFFERENT',
    title: 'Keunggulan Utama & Nilai Lebih Dibandingkan Metode Lama',
    subtitle: 'Mengapa Sistem Ini Lebih Unggul & Modern',
    keyPoints: [
      'Konversi Porsi Otomatis: Sistem menghitung rasio bahan baku otomatis dari porsi Satuan hingga Batch 5 Porsi tanpa perlu kalkulasi manual.',
      'Pemberitahuan Peringatan SOP (Warning System): Menyajikan poin kritis maintenance (seperti larangan air panas blender & dosis solar 10g/L) secara menonjol.',
      '1-Click Demo User Switcher: Bebas beralih peran antara Commis (Rian Sukma), Mixologist (Bayu), dan Supervisor (Hendra) secara instan.',
      'Pencarian & Filter Cepat: Mencari SOP atau resep minuman dalam hitungan milidetik melalui pencarian pintar.'
    ],
    details: [
      { label: 'Kalkulator Batch', value: 'Auto-Scaling Ratio' },
      { label: 'Fitur Peringatan', value: 'High-Alert Warning Box' },
      { label: 'Ganti Peran', value: 'Instant 1-Click Profile' },
      { label: 'Pencarian SOP', value: 'Instant Text Filter' }
    ],
    speakerNotes: 'Metode lama mewajibkan staf menghitung ulang rasio bahan jika membuat 5 porsi sekaligus. Sistem ini langsung menyajikan takaran presisinya.'
  },
  {
    id: 7,
    category: '7. HOW IT WORKS',
    title: 'Alur Kerja Sistem (Flow & User Journey)',
    subtitle: 'Proses Input → Pengolahan Data → Output Hasil',
    keyPoints: [
      'Alur Kerja Utama: 1. Pilih Peran → 2. Workstation (Commis/Mixologist) → 3. Jalankan Resep / Checklist → 4. Submit & Auto Validasi → 5. SPV Review & ACC.',
      'User Journey Commis & Mixologist: Membuka resep di HP/Tablet → Mengikuti langkah preparasi & gramasi → Melakukan checklist kebersihan closing.',
      'User Journey Supervisor: Menerima status outlet → Mengecek laporan stock in/out & kebersihan → Memberikan status ACC Verified.',
      'Logika Pemprosesan (Input-Process-Output): Input data stok/checklist -> Validasi batas aman -> Laporan grafik real-time & rekomendasi reorder.'
    ],
    details: [
      { label: 'Langkah 1: Input', value: 'Checklist & Stock In/Out' },
      { label: 'Langkah 2: Process', value: 'Auto-Validation & Scale' },
      { label: 'Langkah 3: Output', value: 'Verified Report & Stock' },
      { label: 'Status Verifikasi', value: 'Supervisor Digital Badge' }
    ],
    speakerNotes: 'Alur kerja dirancang sangat ringkas agar staf dapat menyelesaikan checklist harian hanya dalam waktu 3-5 menit.'
  },
  {
    id: 8,
    category: '8. DEMO & DEMONSTRASI FITUR',
    title: 'Fitur Utama & Demonstrasi Akses User Demo',
    subtitle: 'Uji Coba Tampilan Dashboard Web & Mobile',
    keyPoints: [
      'Dashboard Operasional: Menampilkan menu harian, checklist opening/mid/closing, dan stock opname.',
      'Learning Center & SOP Viewer: Menyediakan panduan lengkap resep minuman, standar commis, dan perawatan 23 alat bar.',
      'Akses User Commis (Rian Sukma): Fokus pada persiapan bahan baku makanan (daging burger, sosis, nachos, fries), thawing, dan kebersihan area kitchen.',
      'Akses User Mixologist (Bayu Mixologist): Fokus pada racikan minuman, preparasi tea base, syrup, milk foam, dan kebersihan bar station.',
      'Akses User Supervisor (Hendra SPV): Akses penuh persetujuan laporan, audit stok, dan verifikasi checklist.'
    ],
    details: [
      { label: 'Demo User 1', value: 'Rian Sukma (Commies)' },
      { label: 'Demo User 2', value: 'Bayu Mixologist (Bar)' },
      { label: 'Demo User 3', value: 'Hendra SPV (Supervisor)' },
      { label: 'Fitur Tambahan', value: 'Mode Presentasi Slide' }
    ],
    speakerNotes: 'Bisa langsung mendemonstrasikan peralihan user menggunakan tombol Akses Demo User XXI di bagian atas aplikasi.'
  },
  {
    id: 9,
    category: '9. SOLVING PROBLEM',
    title: 'Matriks Pemecahan Masalah (Problem vs Solution)',
    subtitle: 'Solusi Nyata Sistem Terhadap Kendala Lapangan',
    keyPoints: [
      'Masalah A: Keraguan gramasi saat membuat batch porsi besar → Solusi: Modul Beverage Logic dengan konversi otomatis yang siap dipakai.',
      'Masalah B: Kerusakan alat akibat salah pembersihan (cuci air panas/bongkar otomatis) → Solusi: Peringatan visual tegas di SOP Equipment Maintenance.',
      'Masalah C: Laporan kebersihan & stok sering terlambat atau tercekat → Solusi: Checklist digital dengan verifikasi 1-click dari Supervisor Hub.'
    ],
    details: [
      { label: 'Solusi Masalah A', value: 'Auto-Scaling Recipe Table' },
      { label: 'Solusi Masalah B', value: 'Equipment Warning Protocol' },
      { label: 'Solusi Masalah C', value: 'Digital Approval System' },
      { label: 'Hasil Akhir', value: 'Zero Defect Operations' }
    ],
    speakerNotes: 'Setiap fitur dalam sistem ini dibangun secara spesifik berdasarkan kendala riil yang pernah dihadapi oleh tim di outlet.'
  },
  {
    id: 10,
    category: '10. IMPACT KE PERUSAHAAN & OPS',
    title: 'Dampak Positif Bagi Perusahaan & Operasional',
    subtitle: 'Manfaat Nyata Terhadap Efisiensi & Kualitas Kerja',
    keyPoints: [
      'Efisiensi Waktu: Memangkas waktu pembuatan laporan dan pencarian SOP hingga 70%.',
      'Mengurangi Human Error: Menghilangkan risiko kesalahan takaran gramasi dan merawat usia pakai peralatan bar.',
      'Transparansi Penuh: Penggunaan bahan baku, waste, dan kondisi alat tercatat secara rapi dan dapat diaudit.',
      'Monitoring Real-Time: Supervisor & Manajemen dapat melihat status kebersihan dan stok outlet kapan saja.',
      'Data-Driven Decision: Memudahkan perencanaan pembelian bahan baku berdasarkan historis pemakaian harian.'
    ],
    details: [
      { label: 'Efisiensi Waktu', value: 'Hemat Hingga 70%' },
      { label: 'Tingkat Akurasi', value: '99.9% Presisi Gramasi' },
      { label: 'Monitoring', value: 'Realtime 24/7 Access' },
      { label: 'Penghematan Alat', value: 'Menurunkan Cost Repair' }
    ],
    speakerNotes: 'Dampak bisnis jangka panjang: biaya perawatan alat menurun drastis dan kepuasan pengunjung Cinema XXI meningkat.'
  },
  {
    id: 11,
    category: '11. UNTUK SIAPA PENGGUNA NYA',
    title: 'Tingkatan Pengguna & Peran Workstation (User Roles)',
    subtitle: 'Pembagian Hak Akses Dalam Sistem',
    keyPoints: [
      'Commies (Kitchen & Food Prep): Mengakses panduan preparasi bahan makanan (Daging Burger, Sosis, Nachos, Pastry, Thawing), checklist sanitasi kitchen, dan stok porsi food.',
      'Mixologist (Bar Workstation): Mengakses resep presisi minuman, preparasi bahan minuman (Milk Foam, Tea Base, Simple Syrup, Coffee Base), teknik shaker/blender, dan perawatan 23 alat bar station.',
      'Supervisor (SPV Verification Hub): Mengawasi operasional harian, menyetujui (ACC) checklist, melakukan audit stok harian, dan verifikasi laporan.'
    ],
    details: [
      { label: 'Role Workstation 1', value: 'Commies (Kitchen Prep)' },
      { label: 'Role Workstation 2', value: 'Mixologist (Bar Station)' },
      { label: 'Role Workstation 3', value: 'Supervisor (Verifikator)' }
    ],
    speakerNotes: 'Setiap peran memiliki tampilan yang disesuaikan dengan fokus pekerjaan harian mereka masing-masing.'
  },
  {
    id: 12,
    category: '12. CLOSING STATEMENT',
    title: 'Pernyataan Penutup & Ringkasan Utama',
    subtitle: 'Komitmen Menuju Keunggulan Operasional Cinema XXI',
    keyPoints: [
      '"Cinema XXI Operational Hub: Transformasi Digital Menuju Zero Defect, Presisi Resep, dan Efisiensi Operasional High Standard."',
      'Dengan terintegrasinya sistem ini, seluruh staf bekerja dengan standar yang sama, presisi yang sama, dan semangat pelayanan terbaik.',
      'Terima kasih atas perhatian dan komitmen seluruh tim dalam menjalankan standar operasional ini secara disiplin.'
    ],
    details: [
      { label: 'Komitmen Utama', value: 'Zero Defect Quality' },
      { label: 'Standar Layanan', value: 'Cinema XXI Excellence' },
      { label: 'Status Implementasi', value: 'Ready to Deploy' }
    ],
    speakerNotes: 'Mari kita terapkan sistem ini bersama-sama demi memberikan pengalaman terbaik bagi seluruh pengunjung Cinema XXI.'
  },
  {
    id: 13,
    category: '13. Q & A',
    title: 'Sesi Tanya Jawab & Diskusi Interaktif',
    subtitle: 'Terima Kasih Atas Perhatian & Kerjasamanya',
    keyPoints: [
      'Silakan mengajukan pertanyaan terkait penggunaan sistem, fitur SOP, atau alur verifikasi Supervisor.',
      'Sistem telah siap digunakan untuk pelatihan staf dan operasional harian.',
      'Kontak Tim Pengembang: Operasional & Digitalization Team Cinema XXI'
    ],
    details: [
      { label: 'Sesi Diskusi', value: 'Q&A Open Floor' },
      { label: 'Status Sistem', value: 'Siap Digunakan' },
      { label: 'Bantuan Tech', value: 'Support 24/7' }
    ],
    speakerNotes: 'Sesi tanya jawab dibuka untuk memperjelas hal-hal teknis atau masukan pengembangan lebih lanjut.'
  }
];

function generatePDF() {
  // A4 Landscape: 297mm x 210mm
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 297;
  const pageHeight = 210;

  slides.forEach((slide, index) => {
    if (index > 0) {
      doc.addPage('a4', 'landscape');
    }

    // Background - Dark Elegant Slate
    doc.setFillColor(15, 23, 42); // slate-900
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Decorative Header Accent Line (Gold)
    doc.setFillColor(245, 158, 11); // amber-500
    doc.rect(0, 0, pageWidth, 4, 'F');

    // Header Category Badge
    doc.setFillColor(30, 41, 59); // slate-800
    doc.roundedRect(15, 12, 80, 8, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(251, 191, 36); // amber-400
    doc.text(slide.category, 18, 17.5);

    // Slide Counter
    doc.setTextColor(148, 163, 184); // slate-400
    doc.setFontSize(9);
    doc.text(`SLIDE ${slide.id} / ${slides.length}`, pageWidth - 45, 17.5);

    // Main Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    const titleLines = doc.splitTextToSize(slide.title, pageWidth - 30);
    doc.text(titleLines, 15, 28);

    // Subtitle
    const titleHeight = titleLines.length * 7;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(217, 119, 6); // amber-600 / gold
    doc.text(slide.subtitle, 15, 28 + titleHeight);

    let startY = 28 + titleHeight + 8;

    // Left Container: Key Points Box
    const leftWidth = 175;
    doc.setFillColor(30, 41, 59); // slate-800
    doc.setDrawColor(51, 65, 85); // slate-700
    doc.roundedRect(15, startY, leftWidth, 120, 3, 3, 'FD');

    // Key Points Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(251, 191, 36);
    doc.text('POIN UTAMA & DESKRIPSI', 22, startY + 10);

    let kpY = startY + 20;
    slide.keyPoints.forEach((point) => {
      doc.setFillColor(245, 158, 11);
      doc.circle(23, kpY - 1.5, 1.2, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(226, 232, 240); // slate-200
      const wrappedPoint = doc.splitTextToSize(point, leftWidth - 18);
      doc.text(wrappedPoint, 28, kpY);
      kpY += wrappedPoint.length * 5 + 3;
    });

    // Right Container: Details Cards Matrix
    const rightX = 198;
    const rightWidth = 84;
    let cardY = startY;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(251, 191, 36);
    doc.text('METRIKS & STATUS', rightX, cardY - 2);

    slide.details.forEach((det) => {
      doc.setFillColor(30, 41, 59);
      doc.setDrawColor(245, 158, 11);
      doc.roundedRect(rightX, cardY, rightWidth, 26, 3, 3, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(det.label.toUpperCase(), rightX + 6, cardY + 9);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      const wrappedVal = doc.splitTextToSize(det.value, rightWidth - 10);
      doc.text(wrappedVal, rightX + 6, cardY + 17);

      cardY += 29;
    });

    // Footer - Speaker Notes / Presenter Note
    doc.setFillColor(15, 23, 42);
    doc.setDrawColor(51, 65, 85);
    doc.roundedRect(15, 178, pageWidth - 30, 22, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(245, 158, 11);
    doc.text('CATATAN PRESENTER / SPEAKER NOTES:', 20, 184);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(148, 163, 184);
    const wrappedNotes = doc.splitTextToSize(slide.speakerNotes, pageWidth - 42);
    doc.text(wrappedNotes, 20, 190);

    // Bottom Branding Footer
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('CINEMA XXI CAFE • Visual Standard Operating Procedure (VISOP v3.0)', 15, 205);
    doc.text('DOKUMEN RESMI PRESENTASI SLIDE DECK', pageWidth - 80, 205);
  });

  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync('PRESENTASI_SLIDE_DECK_CINEMA_XXI.pdf', pdfBuffer);
  console.log('SUCCESS: Generated PRESENTASI_SLIDE_DECK_CINEMA_XXI.pdf (' + (pdfBuffer.length / 1024).toFixed(2) + ' KB)');
}

generatePDF();
