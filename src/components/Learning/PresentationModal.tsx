import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

interface Slide {
  id: number;
  category: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  keyPoints: string[];
  details: {
    label: string;
    value: string;
    icon?: string;
  }[];
  speakerNotes: string;
  codeSnippet?: string;
}

const PRESENTATION_SLIDES: Slide[] = [
  {
    id: 1,
    category: '1. OPENING',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    title: 'Standardisasi & Digitalisasi Operasional Cinema XXI Café',
    subtitle: 'Modernisasi Workstation Commis, Mixologist & Supervisor Hub',
    keyPoints: [
      'TAKEAWAY UTAMA: "Mengubah proses operasional dari manual menjadi terstandar, terukur, dan terdokumentasi."',
      'Presenter: Tim Operasional & Operational Excellence Cinema XXI',
      'Tanggal Presentasi: 11 Agustus 2026',
      'Fokus Inovasi: Transformasi Sistem Kerja Paperless di Area Kitchen & Bar'
    ],
    details: [
      { label: 'Target Outlet', value: 'Cinema XXI All Outlets', icon: 'fa-film' },
      { label: 'Kategori Solusi', value: 'Digital Operational Hub', icon: 'fa-laptop' },
      { label: 'Standardisasi', value: 'VISOP v3.0 Protocol', icon: 'fa-star' }
    ],
    speakerNotes: 'Selamat pagi/siang Dewan Juri. Hari ini kami mempresentasikan solusi yang mengubah proses operasional Cinema XXI Café dari manual menjadi terstandar, terukur, dan terdokumentasi.'
  },
  {
    id: 2,
    category: '2. CURRENT SITUATION',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    title: 'Kondisi Operasional Saat Ini',
    subtitle: 'Tantangan Riil di Area Kitchen (Commis) & Bar (Mixologist)',
    keyPoints: [
      'SOP & Resep Fisik: Pencatatan resep dan panduan kebersihan masih mengandalkan kertas/binder fisik yang rawan hilang, basah, atau rusak.',
      'Tingkat Kerumitan Alat: Terdapat 23+ jenis peralatan bar mahal (seperti Blender, Dispenser, Hotband) yang membutuhkan maintenance tepat.',
      'Risiko Jam Sibuk (Peak-Hour): Kebutuhan servis cepat saat jam ramai meningkatkan risiko human error pada gramasi dan kebersihan.',
      'Penyimpanan Data: Data operasional harian belum terdigitalisasi secara terpusat untuk keperluan audit dan monitoring.',
      'WHY CHANGE?: "Ketika kecepatan kerja meningkat, ketergantungan pada ingatan dan pencatatan manual meningkatkan risiko error."'
    ],
    details: [
      { label: 'Media Lama', value: 'Kertas / Binder Fisik', icon: 'fa-note-sticky' },
      { label: 'Peralatan Bar', value: '23+ Jenis Equipment', icon: 'fa-blender' },
      { label: 'Risiko Utamanya', value: 'Deviasi Rasa & Error', icon: 'fa-triangle-exclamation' }
    ],
    speakerNotes: 'Kondisi kerja saat peak-hour sangat cepat. Ketergantungan pada ingatan dan kertas fisik berpotensi tinggi memicu deviasi rasa dan kesalahan pemeliharaan alat.'
  },
  {
    id: 3,
    category: '3. PERMASALAHAN & RISIKO',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
    title: '3 Poin Permasalahan Utama & Risiko Operasional',
    subtitle: 'Dampak Terhadap Kualitas, Biaya, dan Akuntabilitas Outlet',
    keyPoints: [
      '01 — Recipe Error: Ketidaksesuaian gramasi bahan baku saat pembuatan batch porsi besar di jam sibuk.',
      '02 — Equipment Damage: Kesalahan metode maintenance yang mempercepat kerusakan peralatan mahal (seperti mencuci jug blender mika memakai air panas).',
      '03 — Reporting Delay: Checklist dan laporan fisik membutuhkan proses approval manual yang lambat dan rawan hilang.',
      'DAMPAK UTAMA: Jika tidak diperbaiki -> Quality ↓ (Kualitas Turun) | Cost ↑ (Biaya Naik) | Accountability ↓ (Akuntabilitas Lemah)'
    ],
    details: [
      { label: 'Masalah 01', value: 'Recipe Error', icon: 'fa-triangle-exclamation' },
      { label: 'Masalah 02', value: 'Equipment Damage', icon: 'fa-circle-xmark' },
      { label: 'Masalah 03', value: 'Reporting Delay', icon: 'fa-clock' }
    ],
    speakerNotes: 'Ketiga masalah ini tidak hanya merusak konsistensi rasa tetapi juga meningkatkan biaya perbaikan alat dan memperlambat laporan ke manajerial.'
  },
  {
    id: 4,
    category: '4. TUJUAN & TARGET',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    title: 'Tujuan & Target Yang Ingin Diterapkan',
    subtitle: 'Visi, Goal, dan Value Creation Bagi Seluruh Level Operasional',
    keyPoints: [
      'VISI: Menciptakan operasional Cinema XXI Café yang terstandar, presisi, dan terukur secara berkelanjutan.',
      'GOAL: Digitalisasi SOP, Recipe Calculator, Checklist, Stock Control & Supervisor Verification dalam satu platform terpadu.',
      'VALUE — Staff: Lebih mudah dan cepat dalam menjalankan tugas tanpa menghafal gramasi rumit.',
      'VALUE — Supervisor: Lebih mudah melakukan kontrol, verifikasi, dan persetujuan laporan harian.',
      'VALUE — Management: Mendapatkan data operasional yang transparan, akurat, dan dapat diaudit kapan saja.'
    ],
    details: [
      { label: 'Visi Mutu', value: 'Terstandar & Presisi', icon: 'fa-bullseye' },
      { label: 'Target Digital', value: '100% Paperless Ops', icon: 'fa-leaf' },
      { label: 'Dukungan Platform', value: 'Cross-Device Web/Mobile', icon: 'fa-mobile-screen' }
    ],
    speakerNotes: 'Sistem ini dirancang untuk menciptakan ruang kerja yang efisien bagi staf di lapangan serta memberikan transparansi data yang jelas bagi manajemen.'
  },
  {
    id: 5,
    category: '5. PERBANDINGAN BEFORE VS AFTER',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    title: 'Perbandingan Sebelum vs Sesudah Digitalisasi',
    subtitle: 'Transformasi Visual Alur Kerja Operasional Cinema XXI Café',
    keyPoints: [
      '📄 SOP & Panduan: [BEFORE] Paper / Binder SOP ➔ [AFTER] 📱 Digital SOP Interaktif',
      '🧮 Kalkulasi Resep: [BEFORE] Manual Calculation ➔ [AFTER] ⚙️ Auto Calculation (Smart Recipe)',
      '☑️ Checklist Harian: [BEFORE] Paper Checklist Manual ➔ [AFTER] 📸 Digital Checklist + Upload Foto',
      '⏳ Approval Laporan: [BEFORE] Delayed Approval ➔ [AFTER] ⚡ Real-time Approval + Touch Signature',
      '🗣️ Maintenance Alat: [BEFORE] Verbal Warning Lisan ➔ [AFTER] ⚠️ Warning System High-Alert',
      'Pernyataan Presenter: "Inovasi kami bukan sekadar memindahkan SOP ke website, tetapi mengubah cara kerja operasional dari manual menjadi terstandar dan terdokumentasi."'
    ],
    details: [
      { label: 'Perubahan SOP', value: 'Paper -> Digital SOP', icon: 'fa-book' },
      { label: 'Kalkulasi', value: 'Manual -> Auto Scale', icon: 'fa-calculator' },
      { label: 'Approval SPV', value: 'Delayed -> Touch Signature', icon: 'fa-signature' }
    ],
    speakerNotes: 'Dapat dilihat dari perbandingan ini, inovasi kami secara mendasar mengubah alur kerja lama menjadi serba digital, presisi, dan terverifikasi.'
  },
  {
    id: 6,
    category: '6. THE PRODUCT SYSTEM',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    title: 'Cinema XXI Operational Hub (VISOP Portal v3.0)',
    subtitle: 'Arsitektur Sistem Terpadu Operasional Kitchen & Bar',
    keyPoints: [
      'Nama Sistem: Cinema XXI Operational Hub & Digital Learning Center (VISOP v3.0).',
      'Integrasi Modul 1: Learning Center (Pusat Dokumen SOP, Panduan Visual, & Presentasi).',
      'Integrasi Modul 2: Operational Workstation (Daily Checklist, Recipe Calculator, General Cleaning, Stock Harian).',
      'Integrasi Modul 3: Supervisor Verification Hub (Laporan Pending, Tanda Tangan Digital, & Audit Trail Log).',
      'Fokus Utama Sistem: Kecepatan akses di HP/Tablet, kemudahan navigasi, dan keandalan data operasional.'
    ],
    details: [
      { label: 'Pilar 1', value: 'Learning Center', icon: 'fa-graduation-cap' },
      { label: 'Pilar 2', value: 'Operational Workstation', icon: 'fa-sliders' },
      { label: 'Pilar 3', value: 'Supervisor Verification', icon: 'fa-user-shield' }
    ],
    speakerNotes: 'Inilah Cinema XXI Operational Hub, sebuah platform terpadu yang menghubungkan staf dapur, staf bar, dan supervisor dalam satu ekosistem.'
  },
  {
    id: 7,
    category: '7. INOVASI UTAMA',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    title: 'Apa yang Membuat Inovasi Ini Berbeda?',
    subtitle: '4 Pilar Utama Inovasi Cinema XXI VISOP Portal',
    keyPoints: [
      '📱 01 — DIGITAL SOP: SOP interaktif dan mudah diakses di HP/Tablet tanpa bergantung pada binder fisik.',
      '🧮 02 — SMART RECIPE: Kalkulasi gramasi otomatis terhitung presisi berdasarkan jumlah batch porsi.',
      '⚠️ 03 — EQUIPMENT WARNING: Peringatan visual khusus untuk mencegah kesalahan pemeliharaan 23+ alat mahal.',
      '👨‍💼 04 — AUDIT TRAIL: Seluruh aktivitas, foto bukti, dan persetujuan SPV tercatat transparan dengan Tanda Tangan Digital.'
    ],
    details: [
      { label: 'Pilar 01', value: 'Digital SOP Guide', icon: 'fa-mobile-screen-button' },
      { label: 'Pilar 02', value: 'Smart Recipe Auto', icon: 'fa-calculator' },
      { label: 'Pilar 03', value: 'Equipment Warning', icon: 'fa-triangle-exclamation' },
      { label: 'Pilar 04', value: 'Audit Trail Signature', icon: 'fa-signature' }
    ],
    speakerNotes: 'Empat pilar inovasi inilah yang memberikan nilai tambah terbesar bagi operasional Cinema XXI Café.'
  },
  {
    id: 8,
    category: '8. HOW IT WORKS',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    title: 'Alur Kerja Sistem (Flow & User Journey)',
    subtitle: 'Proses Kerja Sederhana dari Input hingga Approval',
    keyPoints: [
      'ALUR KERJA: SELECT ROLE ➔ CHOOSE WORKSTATION ➔ OPEN SOP / RECIPE / CHECKLIST ➔ SYSTEM VALIDATION ➔ SUBMIT ➔ SUPERVISOR APPROVAL',
      'INPUT: Filling Checklist + Input Stock + Select Recipe Batch',
      'PROCESS: Auto Calculation + Validation Rules (Sistem memblokir jika task wajib dilewati tanpa catatan deviasi)',
      'OUTPUT: Verified Report + Stock Balance Update + Real-time Audit Trail Log'
    ],
    details: [
      { label: 'Step 1: Input', value: 'Checklist & Stock Data', icon: 'fa-right-to-bracket' },
      { label: 'Step 2: Process', value: 'Auto-Scale & Validation', icon: 'fa-gears' },
      { label: 'Step 3: Output', value: 'Verified Report & Log', icon: 'fa-chart-line' }
    ],
    codeSnippet: `// Standard Workflow Logic\nconst workflow = {\n  input: "Staf mengisi checklist & upload foto bukti",\n  validation: "Sistem cek task wajib; wajib sertakan Catatan Deviasi jika ada penundaan",\n  approval: "Supervisor membubuhkan Tanda Tangan Digital di Touch Canvas"\n};`,
    speakerNotes: 'Alur penggunaan sangat intuitif dan dirancang agar dapat digunakan staf hanya dalam beberapa sentuhan layar HP.'
  },
  {
    id: 9,
    category: '9. LIVE DEMONSTRATION',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    title: 'Fitur Utama & Skenario Live Demonstration',
    subtitle: '3 Tampilan Utama Yang Perlu Diuji Coba Dewan Juri',
    keyPoints: [
      'DEMO 01 — Smart Recipe Calculator: Tunjukkan perubahan gramasi bahan baku otomatis saat memilih 1 Porsi ➔ 5 Porsi.',
      'DEMO 02 — Equipment Warning System: Tunjukkan peringatan khusus (contoh: ⚠️ Dilarang cuci Jug Blender Mika memakai air panas).',
      'DEMO 03 — Supervisor Verification: Tunjukkan alur Staff Submit ➔ Supervisor Receive ➔ Review ➔ Digital Signature ➔ Verified Badge.',
      'Kemudahan Demo: Tersedia 1-Click Profile Switcher untuk berpindah peran Commis, Mixologist, dan Supervisor secara instan.'
    ],
    details: [
      { label: 'Demo 01', value: 'Smart Recipe Auto-Scale', icon: 'fa-calculator' },
      { label: 'Demo 02', value: 'Equipment Warning Alert', icon: 'fa-triangle-exclamation' },
      { label: 'Demo 03', value: 'Touch Canvas Signature', icon: 'fa-signature' }
    ],
    speakerNotes: 'Dewan juri dapat langsung menguji coba ketiga fitur kunci ini melalui tombol peranti demo yang telah kami sediakan di dalam aplikasi.'
  },
  {
    id: 10,
    category: '10. SOLVING PROBLEM',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    title: 'Matriks Pemecahan Masalah (Problem vs Solution)',
    subtitle: 'Pemetaan Masalah Nyata Lapangan Terhadap Solusi Digital',
    keyPoints: [
      'Masalah: Gramasi tidak konsisten saat batch besar ➔ Solusi: Smart Recipe Calculator (Auto-scale porsi).',
      'Masalah: Equipment berisiko rusak karena salah cuci ➔ Solusi: Equipment Warning System (Protokol khusus per alat).',
      'Masalah: Laporan fisik terlambat dan sering hilang ➔ Solusi: Digital Checklist + Real-time Submission.',
      'Masalah: Tidak jelas siapa yang melakukan & menyetujui ➔ Solusi: Audit Trail Log + Tanda Tangan Digital SPV.'
    ],
    details: [
      { label: 'Solusi Resep', value: 'Auto Recipe Scaling', icon: 'fa-check-double' },
      { label: 'Solusi Alat', value: 'Preventive Warning Alert', icon: 'fa-shield' },
      { label: 'Solusi Laporan', value: 'Digital Touch Approval', icon: 'fa-square-check' }
    ],
    speakerNotes: 'Matriks ini menunjukkan hubungan langsung antara kendala operasional yang pernah terjadi dengan solusi konkrit di aplikasi.'
  },
  {
    id: 11,
    category: '11. IMPACT TO COMPANY & OPS',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    title: 'Target Dampak Operasional & Key Performance Indicators (KPI)',
    subtitle: 'Pengukuran Nilai Bisnis Terhadap Operasional Cinema XXI Café',
    keyPoints: [
      '⏱️ OPERATION KPI: Waktu kerja lebih efisien (Target efisiensi waktu hingga 70%* dari 45 mnt ke <10 mnt per shift).',
      '🥤 QUALITY KPI: Konsistensi resep terjaga (Target akurasi gramasi hingga 99.9%* & menekan komplain rasa).',
      '💰 COST KPI: Mengurangi waste bahan baku & menghemat biaya perbaikan equipment.',
      '📊 CONTROL KPI: Seluruh data operasional harian terdokumentasi dan dapat diaudit kapan saja.',
      '⭐ CUSTOMER KPI: Mendukung konsistensi kualitas pelayanan tinggi di seluruh jaringan outlet.',
      'Catatan Transparansi: *Angka merupakan target estimasi berdasarkan simulasi penggunaan sistem.'
    ],
    details: [
      { label: 'Target Efisiensi', value: 'Hingga 70% (Simulasi)', icon: 'fa-clock' },
      { label: 'Target Akurasi', value: 'Hingga 99.9% (Simulasi)', icon: 'fa-bullseye' },
      { label: 'Impact Cost', value: 'Lower Waste & Repair', icon: 'fa-piggy-bank' }
    ],
    speakerNotes: 'Dampak bisnis mencakup efisiensi waktu, penjagaan konsistensi rasa, pengurangan waste, dan transparansi data bagi audit.'
  },
  {
    id: 12,
    category: '12. ROADMAP IMPLEMENTASI',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    title: 'Rencana Tahapan Peluncuran (Roadmap)',
    subtitle: 'Strategi Penerapan Terstruktur Dari Konsep Hingga Deployment',
    keyPoints: [
      'Tahap 1 — Prototype: Pengujian seluruh fitur, kalkulator gramasi, dan alur kerja di lingkungan simulasi.',
      'Tahap 2 — Pilot Outlet: Uji coba lapangan pada 3-5 outlet Cinema XXI pilihan untuk evaluasi jaringan & UX.',
      'Tahap 3 — Evaluation: Mengukur efisiensi waktu, kesalahan gramasi, waste bahan, dan feedback staf.',
      'Tahap 4 — Rollout: Peluncuran bertahap ke seluruh jaringan outlet Cinema XXI Café secara nasional.',
      'Tahap 5 — Continuous Monitoring: Evaluasi berkala, pengkinian resep, dan pemeliharaan sistem secara berkelanjutan.'
    ],
    details: [
      { label: 'Tahap 1', value: 'Prototype Testing', icon: 'fa-code' },
      { label: 'Tahap 2', value: '3-5 Pilot Outlets', icon: 'fa-vial' },
      { label: 'Tahap 3', value: 'Evaluation & Refine', icon: 'fa-chart-pie' },
      { label: 'Tahap 4 & 5', value: 'National Rollout', icon: 'fa-rocket' }
    ],
    speakerNotes: 'Roadmap ini membuktikan bahwa proyek ini bukan sekadar ide, tetapi memiliki tahapan penerpan yang terencana dan matang.'
  },
  {
    id: 13,
    category: '13. SIAPA PENGGUNANYA?',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    title: 'Siapa Pengguna Sistem Ini? (Peran & Fungsi Workstation)',
    subtitle: 'Pembagian Hak Akses Berdasarkan Tanggung Jawab Operasional',
    keyPoints: [
      '👨‍🍳 COMMIS: Kitchen & Food Preparation — Mengakses panduan preparasi food (Burger, Sosis, Nachos, Fries), thawing, & kebersihan kitchen.',
      '🍹 MIXOLOGIST: Bar & Beverage — Mengakses resep presisi minuman, preparasi tea/syrup/foam, & pemeliharaan 23+ alat bar.',
      '👨‍💼 SUPERVISOR: Verification & Operational Control — Mengakses review laporan, verifikasi deviasi, tanda tangan digital, & audit stok.',
      '🏢 MANAGEMENT / ADMIN: Monitoring, Audit & SOP Management — Mengakses analisis audit trail & pembaruan dokumen SOP resmi.'
    ],
    details: [
      { label: 'Commis', value: 'Kitchen & Food Prep', icon: 'fa-utensils' },
      { label: 'Mixologist', value: 'Bar & Beverage Station', icon: 'fa-martini-glass' },
      { label: 'Supervisor', value: 'Verification & Control', icon: 'fa-user-shield' },
      { label: 'Management', value: 'Audit & Governance', icon: 'fa-building' }
    ],
    speakerNotes: 'Sistem ini membagi akses berdasarkan fungsi riil pekerjaan harian di outlet untuk menjaga fokus kerja staf.'
  },
  {
    id: 14,
    category: '14. CLOSING & Q&A',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    title: 'Pernyataan Penutup & Sesi Tanya Jawab (Q&A)',
    subtitle: 'Langkah Menuju Standardisasi Operasional Berkelanjutan',
    keyPoints: [
      '"Cinema XXI VISOP Portal bukan sekadar digitalisasi SOP, tetapi sebuah langkah untuk mengubah operasional manual menjadi standar kerja yang terukur, terdokumentasi, dan berkelanjutan."',
      'Tagline Utama: Standardized. Measurable. Accountable.',
      'Terima kasih atas perhatian Dewan Juri dan Rekan-rekan.',
      'Thank You — Sesi Tanya Jawab (Q&A) Kini Dibuka.'
    ],
    details: [
      { label: 'Prinsip 1', value: 'Standardized', icon: 'fa-circle-check' },
      { label: 'Prinsip 2', value: 'Measurable', icon: 'fa-chart-line' },
      { label: 'Prinsip 3', value: 'Accountable', icon: 'fa-signature' }
    ],
    speakerNotes: 'Mari kita buka sesi tanya jawab. Kami siap mendiskusikan aspek operasional maupun teknis dari aplikasi ini.'
  }
];

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const cleanTextForPdf = (str: string): string => {
  if (!str) return '';
  return str
    .replace(/→/g, '->')
    .replace(/➔/g, '->')
    .replace(/•/g, '-')
    .replace(/[^\x00-\x7F]/g, '') // strip emojis & non-ascii characters to avoid font corruption in jsPDF
    .replace(/\s+/g, ' ')
    .trim();
};

export const PresentationModal: React.FC<PresentationModalProps> = ({ isOpen, onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExportingPdf, setIsExportingPdf] = useState(false);

  const handleDownloadPdf = () => {
    try {
      setIsExportingPdf(true);
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = 297;
      const pageHeight = 210;

      PRESENTATION_SLIDES.forEach((slide, index) => {
        if (index > 0) {
          doc.addPage('a4', 'landscape');
        }

        // Background
        doc.setFillColor(15, 23, 42);
        doc.rect(0, 0, pageWidth, pageHeight, 'F');

        // Header Accent Bar
        doc.setFillColor(245, 158, 11);
        doc.rect(0, 0, pageWidth, 4, 'F');

        // Badge
        doc.setFillColor(30, 41, 59);
        doc.roundedRect(15, 12, 95, 8, 2, 2, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(251, 191, 36);
        doc.text(cleanTextForPdf(slide.category), 18, 17.5);

        // Counter
        doc.setTextColor(148, 163, 184);
        doc.setFontSize(9);
        doc.text(`SLIDE ${slide.id} / ${PRESENTATION_SLIDES.length}`, pageWidth - 45, 17.5);

        // Title
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(15);
        doc.setTextColor(255, 255, 255);
        const cleanTitle = cleanTextForPdf(slide.title);
        const titleLines = doc.splitTextToSize(cleanTitle, pageWidth - 30);
        doc.text(titleLines, 15, 28);

        // Subtitle
        const titleHeight = titleLines.length * 6;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(217, 119, 6);
        doc.text(cleanTextForPdf(slide.subtitle), 15, 28 + titleHeight);

        const startY = 28 + titleHeight + 8;

        // Key Points Box
        const leftWidth = 175;
        doc.setFillColor(30, 41, 59);
        doc.setDrawColor(51, 65, 85);
        doc.roundedRect(15, startY, leftWidth, 120, 3, 3, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(251, 191, 36);
        doc.text('POIN UTAMA & DESKRIPSI', 22, startY + 10);

        let kpY = startY + 18;
        slide.keyPoints.forEach((point) => {
          const cleanPt = cleanTextForPdf(point);
          if (!cleanPt) return;

          doc.setFillColor(245, 158, 11);
          doc.circle(23, kpY - 1.5, 1.2, 'F');

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.5);
          doc.setTextColor(226, 232, 240);
          const wrappedPoint = doc.splitTextToSize(cleanPt, leftWidth - 18);
          doc.text(wrappedPoint, 28, kpY);
          kpY += wrappedPoint.length * 4.5 + 2.5;
        });

        // Details Column
        const rightX = 198;
        const rightWidth = 84;
        let cardY = startY;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(251, 191, 36);
        doc.text('METRIKS & STATUS', rightX, cardY - 2);

        slide.details.forEach((det) => {
          doc.setFillColor(30, 41, 59);
          doc.setDrawColor(245, 158, 11);
          doc.roundedRect(rightX, cardY, rightWidth, 26, 3, 3, 'FD');

          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(148, 163, 184);
          doc.text(cleanTextForPdf(det.label).toUpperCase(), rightX + 6, cardY + 9);

          doc.setFont('helvetica', 'bold');
          doc.setFontSize(9);
          doc.setTextColor(255, 255, 255);
          const wrappedVal = doc.splitTextToSize(cleanTextForPdf(det.value), rightWidth - 10);
          doc.text(wrappedVal, rightX + 6, cardY + 17);

          cardY += 29;
        });

        // Speaker Notes
        doc.setFillColor(15, 23, 42);
        doc.setDrawColor(51, 65, 85);
        doc.roundedRect(15, 178, pageWidth - 30, 22, 2, 2, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(245, 158, 11);
        doc.text('CATATAN PRESENTER / BRIEFING JURI:', 20, 184);

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8.5);
        doc.setTextColor(148, 163, 184);
        const wrappedNotes = doc.splitTextToSize(cleanTextForPdf(slide.speakerNotes), pageWidth - 42);
        doc.text(wrappedNotes, 20, 190);

        // Footer
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);
        doc.text('CINEMA XXI CAFE • Visual Standard Operating Procedure (VISOP v3.0)', 15, 205);
        doc.text('DOKUMEN RESMI PRESENTASI SLIDE DECK', pageWidth - 80, 205);
      });

      doc.save('PRESENTASI_SLIDE_DECK_CINEMA_XXI.pdf');
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsExportingPdf(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.min(prev + 1, PRESENTATION_SLIDES.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFullscreen, onClose]);

  if (!isOpen) return null;

  const currentSlide = PRESENTATION_SLIDES[currentSlideIndex];

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/95 backdrop-blur-md transition-all ${isFullscreen ? 'p-0' : ''}`}>
      <div className={`bg-slate-900 border border-amber-500/40 rounded-2xl w-full flex flex-col shadow-2xl overflow-hidden ${isFullscreen ? 'h-screen rounded-none border-none' : 'max-w-5xl h-[90vh]'}`}>
        
        {/* PRESENTATION TOP HEADER */}
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-sm">
              <i className="fa-solid fa-file-powerpoint" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-black text-white font-mono-code flex items-center gap-2">
                <span>PRESENTASI SLIDE DECK CINEMA XXI CAFÉ</span>
                <span className="bg-amber-500/20 text-amber-300 text-[10px] px-2 py-0.5 rounded border border-amber-500/30 font-normal">
                  Slide {currentSlideIndex + 1} / {PRESENTATION_SLIDES.length}
                </span>
              </h2>
              <p className="text-[10px] text-slate-400">Gunakan Tombol Panah Kiri/Kanan Keyboard untuk Navigasi</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleDownloadPdf}
              disabled={isExportingPdf}
              className="px-2.5 py-1.5 rounded-lg text-xs font-mono-code font-bold bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 transition-all flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
              title="Unduh Berkas PDF Presentasi Slide Deck"
            >
              <i className={`fa-solid ${isExportingPdf ? 'fa-spinner fa-spin' : 'fa-file-pdf'}`} />
              <span className="hidden sm:inline">{isExportingPdf ? 'Memproses...' : 'Unduh PDF'}</span>
            </button>

            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all border flex items-center gap-1.5 ${
                showNotes ? 'bg-sky-500/20 text-sky-300 border-sky-500/40' : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
              title="Toggle Catatan Presenter"
            >
              <i className="fa-solid fa-note-sticky" />
              <span className="hidden sm:inline">Briefing SPV</span>
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs transition-all"
              title={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh'}
            >
              <i className={`fa-solid ${isFullscreen ? 'fa-compress' : 'fa-expand'}`} />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/40 text-xs transition-all ml-1"
              title="Tutup Presentasi"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        </div>

        {/* MAIN SLIDE STAGE */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
          
          {/* SLIDE HEADER BADGE & TITLE */}
          <div className="space-y-2 border-b border-slate-800/80 pb-4">
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase font-mono-code border ${currentSlide.badgeColor}`}>
                {currentSlide.category}
              </span>
              <span className="text-xs text-slate-500 font-mono-code font-bold">
                PRODUKSI CINEMA XXI CAFÉ
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-mono-code tracking-wide">
              {currentSlide.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* KEY POINTS & DETAILS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* LEFT 2 COLS: KEY POINTS */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-bold text-amber-400 uppercase font-mono-code tracking-wider flex items-center gap-2">
                <i className="fa-solid fa-list-check" />
                <span>Poin Utama Pembahasan:</span>
              </h3>
              <div className="space-y-2.5">
                {currentSlide.keyPoints.map((point, idx) => (
                  <div key={idx} className="bg-slate-950/80 border border-slate-800/80 p-3.5 rounded-xl flex items-start gap-3 shadow-md hover:border-amber-500/30 transition-all">
                    <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 font-mono-code font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* CODE SNIPPET IF ANY */}
              {currentSlide.codeSnippet && (
                <div className="mt-4 bg-slate-950 border border-slate-800 rounded-xl p-3 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono-code text-slate-400 border-b border-slate-800 pb-1">
                    <span><i className="fa-solid fa-code mr-1 text-sky-400" /> JSON Logic Snippet Reference:</span>
                    <span>Ready-to-Code</span>
                  </div>
                  <pre className="text-[11px] font-mono-code text-sky-300 overflow-x-auto whitespace-pre p-2 bg-slate-900/50 rounded-lg">
                    {currentSlide.codeSnippet}
                  </pre>
                </div>
              )}
            </div>

            {/* RIGHT 1 COL: PARAMETERS & METRICS */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-sky-400 uppercase font-mono-code tracking-wider flex items-center gap-2">
                <i className="fa-solid fa-gauge-high" />
                <span>Parameter & Metrik:</span>
              </h3>
              <div className="space-y-2.5">
                {currentSlide.details.map((detail, idx) => (
                  <div key={idx} className="bg-slate-950/90 border border-slate-800 p-3 rounded-xl flex items-center justify-between gap-2 shadow-sm">
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      {detail.icon && (
                        <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center text-xs shrink-0">
                          <i className={`fa-solid ${detail.icon}`} />
                        </div>
                      )}
                      <span className="text-[11px] text-slate-400 font-medium truncate">{detail.label}</span>
                    </div>
                    <span className="text-xs font-black text-amber-300 font-mono-code shrink-0 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* SPEAKER NOTES BOX IF TOGGLED */}
              {showNotes && (
                <div className="mt-4 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3.5 space-y-1.5 text-amber-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold font-mono-code text-amber-300">
                    <i className="fa-solid fa-lightbulb" />
                    <span>Catatan Presenter / Briefing:</span>
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{currentSlide.speakerNotes}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PRESENTATION BOTTOM NAVIGATION BAR */}
        <div className="bg-slate-950 px-4 py-3 border-t border-slate-800 flex items-center justify-between gap-3 shrink-0">
          
          {/* SLIDE THUMBNAIL INDICATORS */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-md">
            {PRESENTATION_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`w-7 h-7 rounded-lg font-mono-code text-xs font-bold transition-all shrink-0 ${
                  idx === currentSlideIndex
                    ? 'bg-amber-500 text-slate-950 font-black shadow-lg scale-105 ring-2 ring-amber-400/50'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
                title={`Slide ${idx + 1}: ${slide.title}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {/* PREV / NEXT CONTROLS */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))}
              disabled={currentSlideIndex === 0}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all border flex items-center gap-1.5 ${
                currentSlideIndex === 0
                  ? 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
                  : 'bg-slate-800 text-slate-200 hover:bg-slate-700 border-slate-700'
              }`}
            >
              <i className="fa-solid fa-chevron-left" />
              <span className="hidden sm:inline">Sebelumnya</span>
            </button>

            <button
              onClick={() => setCurrentSlideIndex((prev) => Math.min(prev + 1, PRESENTATION_SLIDES.length - 1))}
              disabled={currentSlideIndex === PRESENTATION_SLIDES.length - 1}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono-code font-bold transition-all border flex items-center gap-1.5 ${
                currentSlideIndex === PRESENTATION_SLIDES.length - 1
                  ? 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
                  : 'bg-amber-500 text-slate-950 hover:bg-amber-400 border-amber-400 font-black shadow-lg'
              }`}
            >
              <span className="hidden sm:inline">Selanjutnya</span>
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
