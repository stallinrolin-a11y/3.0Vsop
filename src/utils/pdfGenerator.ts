export function exportPresentationPDF() {
  const printWin = window.open('', '_blank');
  if (!printWin) {
    alert('Harap izinkan pop-up browser untuk mengunduh/mencetak dokumen PDF Pitch Deck Presentasi.');
    return;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="utf-8">
      <title>CINEMA XXI VISOP v3.0 - 14-SLIDE COMPETITION PITCH DECK</title>
      <style>
        @page {
          size: A4 landscape;
          margin: 8mm 10mm 8mm 10mm;
        }
        * {
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #0f172a;
          margin: 0;
          padding: 0;
          background: #ffffff;
          line-height: 1.4;
          font-size: 10.5pt;
        }

        .slide {
          page-break-after: always;
          height: 190mm;
          max-height: 190mm;
          padding: 12px 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          margin-bottom: 10px;
          position: relative;
          background: #ffffff;
          overflow: hidden;
        }
        .slide:last-child {
          page-break-after: avoid;
        }

        /* Slide Header */
        .slide-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #0f172a;
          padding-bottom: 8px;
          margin-bottom: 12px;
        }
        .slide-num {
          background: #d97706;
          color: #ffffff;
          font-size: 9pt;
          font-weight: 900;
          padding: 3px 8px;
          border-radius: 4px;
          font-family: monospace;
        }
        .slide-title {
          font-size: 15pt;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .slide-tag {
          background: #0f172a;
          color: #fbbf24;
          font-size: 8.5pt;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 4px;
          font-family: monospace;
        }

        /* Grid Layouts */
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
        }
        .grid-4 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 10px;
        }
        .grid-5 {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
        }

        /* Card Styles */
        .card {
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 10px 12px;
        }
        .card-dark {
          background: #0f172a;
          color: #f8fafc;
          border: 1px solid #334155;
        }
        .card-amber {
          background: #fffbeb;
          border: 1px solid #fde68a;
        }
        .card-sky {
          background: #f0f9ff;
          border: 1px solid #bae6fd;
        }
        .card-emerald {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
        }
        .card-rose {
          background: #fff1f2;
          border: 1px solid #fecdd3;
        }

        .card-title {
          font-size: 10.5pt;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 6px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .card-dark .card-title {
          color: #fbbf24;
        }
        .card-body {
          font-size: 9.5pt;
          color: #334155;
        }
        .card-dark .card-body {
          color: #cbd5e1;
        }

        ul {
          margin: 4px 0 0 16px;
          padding: 0;
        }
        li {
          margin-bottom: 3px;
        }

        /* Banner & Callouts */
        .banner-highlight {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #ffffff;
          border-left: 5px solid #f59e0b;
          padding: 10px 14px;
          border-radius: 6px;
          font-size: 10pt;
          margin-top: 8px;
        }
        .banner-highlight strong {
          color: #fbbf24;
        }

        .punchline-box {
          background: #0f172a;
          color: #fbbf24;
          font-size: 13pt;
          font-weight: 900;
          text-align: center;
          padding: 12px;
          border-radius: 8px;
          letter-spacing: 0.5px;
          border: 2px solid #d97706;
          margin-top: 10px;
        }

        /* Table Design */
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 9pt;
        }
        th {
          background: #0f172a;
          color: #ffffff;
          padding: 6px 10px;
          text-align: left;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 8.5pt;
        }
        td {
          padding: 6px 10px;
          border-bottom: 1px solid #e2e8f0;
          vertical-align: middle;
        }

        /* Slide Footer */
        .slide-footer {
          border-top: 1px solid #cbd5e1;
          padding-top: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 8pt;
          color: #64748b;
          font-family: monospace;
          margin-top: auto;
        }
      </style>
    </head>
    <body>

      <!-- SLIDE 01: OPENING -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 01</span>
              <span class="slide-title">COVER & OPENING PITCH</span>
            </div>
            <div class="slide-tag">CINEMA XXI F&B VISOP v3.0</div>
          </div>

          <div style="background: linear-gradient(135deg, #090d16 0%, #1e293b 100%); color: #ffffff; border-radius: 12px; padding: 32px 24px; text-align: center; border: 2px solid #d97706; box-shadow: 0 10px 25px rgba(0,0,0,0.2); margin-top: 10px;">
            <div style="display: inline-block; background: #d97706; color: #ffffff; font-size: 9pt; font-weight: 800; padding: 4px 16px; border-radius: 20px; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px;">
              NATIONAL INNOVATION COMPETITION PRESENTATION
            </div>
            <h1 style="font-size: 24pt; font-weight: 900; color: #fbbf24; line-height: 1.2; margin: 0 0 10px 0; letter-spacing: -0.5px;">
              DIGITALISASI OPERASIONAL F&B CINEMA XXI VIA VISOP v3.0
            </h1>
            <p style="font-size: 12pt; color: #cbd5e1; max-width: 650px; margin: 0 auto 24px auto; font-weight: 500;">
              Visual Interactive Standard Operating Procedure untuk Efisiensi Kitchen Commis & Mixologist Bar
            </p>
            <div style="border-top: 1px solid #334155; padding-top: 16px; display: flex; justify-content: space-around; font-size: 10pt; color: #e2e8f0; font-family: monospace;">
              <div><strong>PRESENTER:</strong> Innovation & Operational Excellence Team</div>
              <div><strong>TANGGAL:</strong> 12 Agustus 2026</div>
              <div><strong>AUDIENS:</strong> Dewan Juri & Executive Management XXI</div>
            </div>
          </div>

          <div class="punchline-box" style="margin-top: 16px;">
            "STANDARDIZED. MEASURABLE. ACCOUNTABLE."
          </div>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 1 of 14</div>
        </div>
      </div>

      <!-- SLIDE 02: CURRENT SITUATION -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 02</span>
              <span class="slide-title">CURRENT SITUATION (KONDISI SAAT INI)</span>
            </div>
            <div class="slide-tag">CONTEXT & BACKGROUND</div>
          </div>

          <div class="grid-4" style="margin-bottom: 12px;">
            <div class="card card-rose">
              <div class="card-title">📄 PAPER</div>
              <div class="card-body">
                SOP & checklist masih berupa kertas fisik yang mudah kotor, basah, dan robek di kitchen/bar.
              </div>
            </div>

            <div class="card card-rose">
              <div class="card-title">⚠️ HUMAN ERROR</div>
              <div class="card-body">
                Kesalahan takaran gramasi & keterlambatan perawatan peralatan saat jam sibuk.
              </div>
            </div>

            <div class="card card-rose">
              <div class="card-title">🛠️ EQUIPMENT</div>
              <div class="card-body">
                23+ jenis peralatan operasional membutuhkan penanganan tepat & presisi sesuai SOP.
              </div>
            </div>

            <div class="card card-rose">
              <div class="card-title">📊 DATA</div>
              <div class="card-body">
                Laporan shift belum terpusat, menyulitkan monitoring real-time dari Management.
              </div>
            </div>
          </div>

          <div class="banner-highlight">
            <div style="font-size: 11pt; font-weight: 800; color: #fbbf24; text-transform: uppercase; margin-bottom: 2px;">
              💡 WHY CHANGE?
            </div>
            <div style="font-size: 11.5pt; font-weight: 700; color: #ffffff;">
              "Kecepatan operasional peak-hour tidak boleh mengorbankan konsistensi mutu dan kontrol."
            </div>
          </div>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 2 of 14</div>
        </div>
      </div>

      <!-- SLIDE 03: PROBLEM & RISK -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 03</span>
              <span class="slide-title">PERMASALAHAN & RISIKO OPERASIONAL</span>
            </div>
            <div class="slide-tag">CORE PAIN POINTS</div>
          </div>

          <div class="grid-3" style="margin-bottom: 12px;">
            <div class="card card-rose" style="text-align: center; padding: 16px;">
              <div style="font-size: 20pt; margin-bottom: 4px;">🧮</div>
              <div style="font-size: 12pt; font-weight: 900; color: #9f1239;">RECIPE ERROR</div>
              <div style="font-size: 16pt; font-weight: 900; color: #be123c; margin: 8px 0;">Quality ↓</div>
              <div class="card-body">Inkonsistensi cita rasa makanan & minuman akibat kesalahan takaran manual.</div>
            </div>

            <div class="card card-rose" style="text-align: center; padding: 16px;">
              <div style="font-size: 20pt; margin-bottom: 4px;">🔧</div>
              <div style="font-size: 12pt; font-weight: 900; color: #9f1239;">EQUIPMENT DAMAGE</div>
              <div style="font-size: 16pt; font-weight: 900; color: #be123c; margin: 8px 0;">Cost ↑</div>
              <div class="card-body">Biaya perbaikan membengkak akibat salah pengoperasian alat (tanpa warning).</div>
            </div>

            <div class="card card-rose" style="text-align: center; padding: 16px;">
              <div style="font-size: 20pt; margin-bottom: 4px;">⏱️</div>
              <div style="font-size: 12pt; font-weight: 900; color: #9f1239;">REPORTING DELAY</div>
              <div style="font-size: 16pt; font-weight: 900; color: #be123c; margin: 8px 0;">Control ↓</div>
              <div class="card-body">Keterlambatan rekapitulasi laporan shift menyulitkan tindak cepat Supervisor.</div>
            </div>
          </div>

          <div class="punchline-box">
            3 MASALAH OPERASIONAL ➔ 1 KEBUTUHAN UTAMA: OPERATIONAL CONTROL
          </div>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 3 of 14</div>
        </div>
      </div>

      <!-- SLIDE 04: OBJECTIVE -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 04</span>
              <span class="slide-title">TUJUAN STRATEGIS (OBJECTIVE)</span>
            </div>
            <div class="slide-tag">VISION & GOALS</div>
          </div>

          <div style="text-align:center; font-size:14pt; font-weight:900; color:#0f172a; margin-bottom:12px;">
            🎯 ONE PLATFORM FOR TOTAL OPERATIONAL CONTROL
          </div>

          <div class="grid-4">
            <div class="card card-sky" style="text-align:center; padding:16px;">
              <div style="font-size:20pt; margin-bottom:4px;">📖</div>
              <div style="font-size:12pt; font-weight:900; color:#0369a1; margin-bottom:6px;">STANDARDIZE</div>
              <div style="font-size:10pt; font-weight:700; color:#0f172a;">SOP & Recipe</div>
              <div class="card-body" style="margin-top:6px;">Standardisasi penuh seluruh resep & prosedur kerja.</div>
            </div>

            <div class="card card-sky" style="text-align:center; padding:16px;">
              <div style="font-size:20pt; margin-bottom:4px;">⚙️</div>
              <div style="font-size:12pt; font-weight:900; color:#0369a1; margin-bottom:6px;">CONTROL</div>
              <div style="font-size:10pt; font-weight:700; color:#0f172a;">Checklist & Stock</div>
              <div class="card-body" style="margin-top:6px;">Kontrol checklist harian & mutasi stok real-time.</div>
            </div>

            <div class="card card-sky" style="text-align:center; padding:16px;">
              <div style="font-size:20pt; margin-bottom:4px;">✍️</div>
              <div style="font-size:12pt; font-weight:900; color:#0369a1; margin-bottom:6px;">VERIFY</div>
              <div style="font-size:10pt; font-weight:700; color:#0f172a;">Supervisor Approval</div>
              <div class="card-body" style="margin-top:6px;">Verifikasi digital signature akurat berstempel.</div>
            </div>

            <div class="card card-sky" style="text-align:center; padding:16px;">
              <div style="font-size:20pt; margin-bottom:4px;">📈</div>
              <div style="font-size:12pt; font-weight:900; color:#0369a1; margin-bottom:6px;">ANALYZE</div>
              <div style="font-size:10pt; font-weight:700; color:#0f172a;">Operational Data</div>
              <div class="card-body" style="margin-top:6px;">Analisa data kepatuhan multi-outlet terpusat.</div>
            </div>
          </div>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 4 of 14</div>
        </div>
      </div>

      <!-- SLIDE 05: BEFORE VS AFTER -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 05</span>
              <span class="slide-title">TRANSFORMASI OPERASIONAL (BEFORE VS AFTER) ⭐</span>
            </div>
            <div class="slide-tag">PARADIGM SHIFT</div>
          </div>

          <table>
            <thead>
              <tr>
                <th style="width: 25%;">PARAMETER</th>
                <th style="width: 37.5%; background: #9f1239;">BEFORE (CARA LAMA)</th>
                <th style="width: 37.5%; background: #15803d;">AFTER (CINEMA XXI VISOP v3.0)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Panduan SOP</strong></td>
                <td>📄 Paper SOP (Buku fisik mudah kotor)</td>
                <td><strong style="color:#16a34a;">📱 Digital SOP (Visual & Interaktif)</strong></td>
              </tr>
              <tr>
                <td><strong>Perhitungan Resep</strong></td>
                <td>🧮 Manual Recipe (Hitung manual porsi)</td>
                <td><strong style="color:#16a34a;">⚙️ Auto Recipe (Smart Auto-Scale)</strong></td>
              </tr>
              <tr>
                <td><strong>Checklist Shift</strong></td>
                <td>☑️ Paper Checklist (Lembar kertas)</td>
                <td><strong style="color:#16a34a;">📸 Digital Checklist (Real-time Upload)</strong></td>
              </tr>
              <tr>
                <td><strong>Verifikasi SPV</strong></td>
                <td>⏳ Delayed Approval (Rekap manual)</td>
                <td><strong style="color:#16a34a;">⚡ Real-time Approval (Digital TTD)</strong></td>
              </tr>
              <tr>
                <td><strong>Warning Alat</strong></td>
                <td>🗣️ Verbal Warning (Lisan)</td>
                <td><strong style="color:#16a34a;">⚠️ Warning System (Visual Alert)</strong></td>
              </tr>
            </tbody>
          </table>

          <div class="punchline-box" style="margin-top: 12px; font-size: 12pt;">
            "Kami tidak hanya mendigitalisasi SOP, tetapi mendigitalisasi cara kerja."
            <br/>
            <span style="font-size: 10pt; font-weight: normal; color: #cbd5e1; italic;">(We don't just digitize the SOP. We digitize the way people work.)</span>
          </div>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 5 of 14</div>
        </div>
      </div>

      <!-- SLIDE 06: PRODUCT SYSTEM -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 06</span>
              <span class="slide-title">SISTEM PRODUK & EKOSISTEM MODUL</span>
            </div>
            <div class="slide-tag">THE PRODUCT ARCHITECTURE</div>
          </div>

          <div style="text-align: center; background: #0f172a; color: #fbbf24; padding: 10px; border-radius: 8px; font-size: 12pt; font-weight: 900; letter-spacing: 1px; margin-bottom: 12px;">
            CINEMA XXI OPERATIONAL HUB
          </div>

          <div class="grid-3">
            <div class="card card-amber" style="text-align: center; padding: 14px;">
              <div style="font-size: 18pt; margin-bottom: 4px;">🎓</div>
              <div style="font-size: 11pt; font-weight: 900; color: #92400e;">LEARNING CENTER</div>
              <div style="font-size: 9pt; color: #b45309; margin-bottom: 8px;">Training & Qualification</div>
              <ul style="text-align: left; font-size: 8.5pt;">
                <li>SOP Interactive Library</li>
                <li>Visual Standard Guide</li>
                <li>Quiz & Training Module</li>
              </ul>
            </div>

            <div class="card card-sky" style="text-align: center; padding: 14px;">
              <div style="font-size: 18pt; margin-bottom: 4px;">🍳</div>
              <div style="font-size: 11pt; font-weight: 900; color: #0369a1;">OPERATIONS WORKSTATION</div>
              <div style="font-size: 9pt; color: #0284c7; margin-bottom: 8px;">Daily Shift Execution</div>
              <ul style="text-align: left; font-size: 8.5pt;">
                <li>Smart Recipe Calculator</li>
                <li>Daily Shift Checklist</li>
                <li>Stock Opname Tracker</li>
              </ul>
            </div>

            <div class="card card-emerald" style="text-align: center; padding: 14px;">
              <div style="font-size: 18pt; margin-bottom: 4px;">🛡️</div>
              <div style="font-size: 11pt; font-weight: 900; color: #15803d;">SUPERVISOR HUB</div>
              <div style="font-size: 9pt; color: #16a34a; margin-bottom: 8px;">Approval & Governance</div>
              <ul style="text-align: left; font-size: 8.5pt;">
                <li>Approval Laporan Shift</li>
                <li>Canvas Digital Signature</li>
                <li>Audit Trail & PDF Exporter</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 6 of 14</div>
        </div>
      </div>

      <!-- SLIDE 07: INNOVATION -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 07</span>
              <span class="slide-title">4 PILAR INOVASI UTAMA ⭐</span>
            </div>
            <div class="slide-tag">CORE INNOVATIONS</div>
          </div>

          <div class="grid-2" style="margin-bottom: 10px;">
            <div class="card card-amber">
              <div class="card-title">📱 1. DIGITAL SOP</div>
              <div class="card-body">
                Visualisasi terpadu seluruh langkah operasional kitchen & bar.
                <div style="margin-top: 6px; font-weight: 800; color: #b45309;">➔ OUTCOME: Standardized Work</div>
              </div>
            </div>

            <div class="card card-sky">
              <div class="card-title">🧮 2. SMART RECIPE</div>
              <div class="card-body">
                Kalkulasi otomatis gramasi & mL cairan untuk batch 1-50 porsi.
                <div style="margin-top: 6px; font-weight: 800; color: #0284c7;">➔ OUTCOME: Consistent Taste</div>
              </div>
            </div>

            <div class="card card-rose">
              <div class="card-title">⚠️ 3. EQUIPMENT WARNING</div>
              <div class="card-body">
                Peringatan dini batas porsi blend & penggunaan alat sensitif.
                <div style="margin-top: 6px; font-weight: 800; color: #be123c;">➔ OUTCOME: Preventive Maintenance</div>
              </div>
            </div>

            <div class="card card-emerald">
              <div class="card-title">📋 4. AUDIT TRAIL</div>
              <div class="card-body">
                Perekaman data verifikasi ber-TTD digital & ekspor PDF instan.
                <div style="margin-top: 6px; font-weight: 800; color: #15803d;">➔ OUTCOME: Accountability</div>
              </div>
            </div>
          </div>

          <div class="banner-highlight">
            <strong>WHY THIS MATTERS:</strong> Mengubah fungsi dokumentasi pasif menjadi sistem interaktif yang aktif mencegah kesalahan di lapangan.
          </div>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 7 of 14</div>
        </div>
      </div>

      <!-- SLIDE 08: HOW IT WORKS -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 08</span>
              <span class="slide-title">HOW IT WORKS (ALUR KERJA SISTEM)</span>
            </div>
            <div class="slide-tag">WORKFLOW & PROCESS</div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; background: #0f172a; color: #ffffff; padding: 12px; border-radius: 8px; margin-bottom: 14px; text-align: center;">
            <div style="flex:1;">
              <div style="color:#fbbf24; font-weight:900; font-size:10pt;">1. SELECT ROLE</div>
              <div style="font-size:8pt; color:#cbd5e1;">Pilih Outlet & Akses Role</div>
            </div>
            <div style="color:#fbbf24; font-weight:900; font-size:12pt;">➔</div>
            <div style="flex:1;">
              <div style="color:#fbbf24; font-weight:900; font-size:10pt;">2. WORK</div>
              <div style="font-size:8pt; color:#cbd5e1;">Jalankan Checklist & Resep</div>
            </div>
            <div style="color:#fbbf24; font-weight:900; font-size:12pt;">➔</div>
            <div style="flex:1;">
              <div style="color:#fbbf24; font-weight:900; font-size:10pt;">3. VALIDATE</div>
              <div style="font-size:8pt; color:#cbd5e1;">Cek Auto-Calculation & Warning</div>
            </div>
            <div style="color:#fbbf24; font-weight:900; font-size:12pt;">➔</div>
            <div style="flex:1;">
              <div style="color:#fbbf24; font-weight:900; font-size:10pt;">4. SUBMIT</div>
              <div style="font-size:8pt; color:#cbd5e1;">Kirim Laporan Shift Digital</div>
            </div>
            <div style="color:#fbbf24; font-weight:900; font-size:12pt;">➔</div>
            <div style="flex:1;">
              <div style="color:#fbbf24; font-weight:900; font-size:10pt;">5. VERIFY</div>
              <div style="font-size:8pt; color:#cbd5e1;">Review SPV & TTD Canvas</div>
            </div>
          </div>

          <div class="grid-3">
            <div class="card card-sky">
              <div class="card-title">📥 INPUT</div>
              <div class="card-body">
                Checklist harian, mutasi stok, & pemilihan target porsi resep.
              </div>
            </div>

            <div class="card card-amber">
              <div class="card-title">⚙️ PROCESS</div>
              <div class="card-body">
                Kalkulasi otomatis gramasi/mL & konfirmasi peringatan SOP.
              </div>
            </div>

            <div class="card card-emerald">
              <div class="card-title">📤 OUTPUT</div>
              <div class="card-body">
                Verified Shift Report, stempel digital, & ekspor dokumen PDF.
              </div>
            </div>
          </div>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 8 of 14</div>
        </div>
      </div>

      <!-- SLIDE 09: LIVE DEMO -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 09</span>
              <span class="slide-title">SKENARIO LIVE DEMO UTAMA ⭐⭐⭐</span>
            </div>
            <div class="slide-tag">SYSTEM PROOF</div>
          </div>

          <div class="grid-3">
            <div class="card card-amber" style="padding:14px;">
              <div style="background:#d97706; color:#fff; font-size:8pt; font-weight:900; padding:2px 8px; border-radius:4px; display:inline-block; margin-bottom:6px;">
                DEMO 01
              </div>
              <div style="font-size:12pt; font-weight:900; color:#0f172a; margin-bottom:4px;">🧮 Smart Recipe</div>
              <div style="font-size:10pt; font-weight:700; color:#b45309; margin-bottom:6px;">1 Porsi ➔ 5 Porsi Auto-Scale</div>
              <div class="card-body">
                Demonstrasi perubahan multiplier porsi. Seluruh gramasi & mL cairan terhitung instan tanpa rumus manual.
              </div>
            </div>

            <div class="card card-rose" style="padding:14px;">
              <div style="background:#be123c; color:#fff; font-size:8pt; font-weight:900; padding:2px 8px; border-radius:4px; display:inline-block; margin-bottom:6px;">
                DEMO 02
              </div>
              <div style="font-size:12pt; font-weight:900; color:#0f172a; margin-bottom:4px;">⚠️ Equipment Warning</div>
              <div style="font-size:10pt; font-weight:700; color:#be123c; margin-bottom:6px;">Pencegahan Over-Capacity</div>
              <div class="card-body">
                Demonstrasi batas porsi jug blender (max 3 porsi) & shaker (10-15 detik) untuk mencegah kerusakan alat.
              </div>
            </div>

            <div class="card card-emerald" style="padding:14px;">
              <div style="background:#15803d; color:#fff; font-size:8pt; font-weight:900; padding:2px 8px; border-radius:4px; display:inline-block; margin-bottom:6px;">
                DEMO 03
              </div>
              <div style="font-size:12pt; font-weight:900; color:#0f172a; margin-bottom:4px;">✍️ Supervisor Verification</div>
              <div style="font-size:10pt; font-weight:700; color:#15803d; margin-bottom:6px;">Submit ➔ TTD ➔ Verified PDF</div>
              <div class="card-body">
                Demonstrasi pengesahan laporan oleh SPV via Tanda Tangan Canvas & pembuatan dokumen Berita Acara PDF.
              </div>
            </div>
          </div>

          <div class="banner-highlight" style="margin-top: 12px; text-align: center;">
            🎯 <strong>JURI HIGHLIGHT:</strong> Pembuktian langsung 3 fitur utama yang bekerja secara responsif dan stabil.
          </div>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 9 of 14</div>
        </div>
      </div>

      <!-- SLIDE 10: PROBLEM -> SOLUTION -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 10</span>
              <span class="slide-title">PROBLEM ➔ SOLUTION MATRIX</span>
            </div>
            <div class="slide-tag">BUSINESS VALUE CREATION</div>
          </div>

          <table>
            <thead>
              <tr>
                <th style="width: 28%;">REAL PROBLEM</th>
                <th style="width: 36%;">DIGITAL INTERVENTION</th>
                <th style="width: 36%;">BUSINESS VALUE HASIL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Recipe Error</strong><br/><span style="font-size:8pt; color:#64748b;">Salah takaran bahan baku</span></td>
                <td><strong style="color:#0284c7;">Smart Recipe Calculator</strong><br/><span style="font-size:8pt; color:#475569;">Kalkulasi porsi presisi otomatis</span></td>
                <td><strong style="color:#16a34a;">Consistent Product & Taste</strong><br/><span style="font-size:8pt; color:#15803d;">Cita rasa terjamin 100% sama</span></td>
              </tr>
              <tr>
                <td><strong>Equipment Damage</strong><br/><span style="font-size:8pt; color:#64748b;">Kerusakan alat akibat salah pakai</span></td>
                <td><strong style="color:#0284c7;">Equipment Warning System</strong><br/><span style="font-size:8pt; color:#475569;">Alert batas porsi & durasi alat</span></td>
                <td><strong style="color:#16a34a;">Lower Repair Risk & Cost</strong><br/><span style="font-size:8pt; color:#15803d;">Mencegah kerusakan dini alat</span></td>
              </tr>
              <tr>
                <td><strong>Reporting Delay</strong><br/><span style="font-size:8pt; color:#64748b;">Rekap laporan shift fisik lambat</span></td>
                <td><strong style="color:#0284c7;">Digital Shift Checklist</strong><br/><span style="font-size:8pt; color:#475569;">Pengisian & kirim laporan instant</span></td>
                <td><strong style="color:#16a34a;">Faster Operational Control</strong><br/><span style="font-size:8pt; color:#15803d;">Pengawasan cepat dari SPV</span></td>
              </tr>
              <tr>
                <td><strong>Accountability Gap</strong><br/><span style="font-size:8pt; color:#64748b;">Sulit melacak penanggung jawab</span></td>
                <td><strong style="color:#0284c7;">Audit Trail & Digital Signature</strong><br/><span style="font-size:8pt; color:#475569;">TTD Canvas & waktu terverifikasi</span></td>
                <td><strong style="color:#16a34a;">100% Traceable Operation</strong><br/><span style="font-size:8pt; color:#15803d;">Akuntabilitas data dapat diaudit</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 10 of 14</div>
        </div>
      </div>

      <!-- SLIDE 11: IMPACT & KPI -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 11</span>
              <span class="slide-title">IMPACT & TARGET KPI OPERASIONAL ⭐</span>
            </div>
            <div class="slide-tag">BUSINESS IMPACT</div>
          </div>

          <div class="grid-4" style="margin-bottom: 12px;">
            <div class="card card-emerald" style="text-align:center; padding:16px;">
              <div style="font-size:10pt; font-weight:800; color:#15803d;">TARGET 01</div>
              <div style="font-size:18pt; font-weight:900; color:#16a34a; margin:4px 0;">≤ 10 MIN</div>
              <div style="font-size:9pt; font-weight:700; color:#0f172a;">WAKTU LAPORAN</div>
              <div class="card-body" style="font-size:8pt; margin-top:4px;">Proses laporan shift selesai di bawah 10 menit.</div>
            </div>

            <div class="card card-emerald" style="text-align:center; padding:16px;">
              <div style="font-size:10pt; font-weight:800; color:#15803d;">TARGET 02</div>
              <div style="font-size:18pt; font-weight:900; color:#16a34a; margin:4px 0;">↓ ERROR</div>
              <div style="font-size:9pt; font-weight:700; color:#0f172a;">RECIPE ACCURACY</div>
              <div class="card-body" style="font-size:8pt; margin-top:4px;">Menekan kesalahan racikan & gramasi bahan.</div>
            </div>

            <div class="card card-emerald" style="text-align:center; padding:16px;">
              <div style="font-size:10pt; font-weight:800; color:#15803d;">TARGET 03</div>
              <div style="font-size:18pt; font-weight:900; color:#16a34a; margin:4px 0;">↓ WASTE</div>
              <div style="font-size:9pt; font-weight:700; color:#0f172a;">FOOD WASTE</div>
              <div class="card-body" style="font-size:8pt; margin-top:4px;">Mereduksi pembuangan stok akibat salah buat.</div>
            </div>

            <div class="card card-emerald" style="text-align:center; padding:16px;">
              <div style="font-size:10pt; font-weight:800; color:#15803d;">TARGET 04</div>
              <div style="font-size:18pt; font-weight:900; color:#16a34a; margin:4px 0;">100%</div>
              <div style="font-size:9pt; font-weight:700; color:#0f172a;">TRACEABLE DATA</div>
              <div class="card-body" style="font-size:8pt; margin-top:4px;">Seluruh data verifikasi siap diaudit.</div>
            </div>
          </div>

          <div class="banner-highlight">
            * <em>Simulasi Potensi Hasil:</em> Penghematan waktu rekapitulasi operasional hingga 70% dan tingkat akurasi kepatuhan hingga 99,9% berdasarkan skenario pengujian simulasi internal.
          </div>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 11 of 14</div>
        </div>
      </div>

      <!-- SLIDE 12: IMPLEMENTATION ROADMAP -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 12</span>
              <span class="slide-title">ROADMAP IMPLEMENTASI</span>
            </div>
            <div class="slide-tag">EXECUTION PLAN</div>
          </div>

          <div class="grid-5" style="margin-bottom: 14px;">
            <div class="card card-amber" style="text-align:center; padding:12px;">
              <div style="font-size:10pt; font-weight:900; color:#92400e;">01 PROTOTYPE</div>
              <div style="font-size:8.5pt; font-weight:700; color:#b45309; margin:4px 0;">Feature Validation</div>
              <div class="card-body" style="font-size:8pt;">Uji fungsi kalkulator resep & checklist core.</div>
            </div>

            <div class="card card-sky" style="text-align:center; padding:12px;">
              <div style="font-size:10pt; font-weight:900; color:#0369a1;">02 PILOT</div>
              <div style="font-size:8.5pt; font-weight:700; color:#0284c7; margin:4px 0;">User Acceptance</div>
              <div class="card-body" style="font-size:8pt;">Uji coba terbatas pada 3-5 outlet sampel XXI.</div>
            </div>

            <div class="card card-emerald" style="text-align:center; padding:12px;">
              <div style="font-size:10pt; font-weight:900; color:#15803d;">03 EVALUATION</div>
              <div style="font-size:8.5pt; font-weight:700; color:#16a34a; margin:4px 0;">KPI Measurement</div>
              <div class="card-body" style="font-size:8pt;">Evaluasi data efisiensi & feedback staf.</div>
            </div>

            <div class="card card-amber" style="text-align:center; padding:12px;">
              <div style="font-size:10pt; font-weight:900; color:#92400e;">04 ROLLOUT</div>
              <div style="font-size:8.5pt; font-weight:700; color:#b45309; margin:4px 0;">Operational Adoption</div>
              <div class="card-body" style="font-size:8pt;">Penerapan bertahap di seluruh jaringan XXI.</div>
            </div>

            <div class="card card-sky" style="text-align:center; padding:12px;">
              <div style="font-size:10pt; font-weight:900; color:#0369a1;">05 MONITORING</div>
              <div style="font-size:8.5pt; font-weight:700; color:#0284c7; margin:4px 0;">Continuous Improvement</div>
              <div class="card-body" style="font-size:8pt;">Pemantauan berkelanjutan & fitur update.</div>
            </div>
          </div>

          <div class="banner-highlight" style="text-align:center;">
            <strong>TAHAPAN TERSTRUKTUR:</strong> Menjamin adopsi teknologi yang mulus tanpa mengganggu aktivitas komersial bioskop harian.
          </div>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 12 of 14</div>
        </div>
      </div>

      <!-- SLIDE 13: USER & ACCESS -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 13</span>
              <span class="slide-title">PEMBAGIAN PERAN PENGGUNA (USER LEVELS)</span>
            </div>
            <div class="slide-tag">ACCESS CONTROL</div>
          </div>

          <div class="grid-3" style="margin-bottom: 12px;">
            <div class="card card-sky" style="padding:16px;">
              <div style="font-size:14pt; font-weight:900; color:#0369a1; margin-bottom:4px;">STAFF (COMMIS & MIXOLOGIST)</div>
              <div style="background:#0284c7; color:#fff; font-size:9pt; font-weight:900; padding:3px 10px; border-radius:4px; display:inline-block; margin-bottom:10px;">
                ROLE: EXECUTE
              </div>
              <ul style="font-size:9pt; color:#334155;">
                <li>Melakukan Checklist Pembukaan/Penutupan Shift.</li>
                <li>Menggunakan Smart Recipe Calculator saat order.</li>
                <li>Mengakses panduan visual SOP & Kuis Pelatihan.</li>
              </ul>
            </div>

            <div class="card card-amber" style="padding:16px;">
              <div style="font-size:14pt; font-weight:900; color:#92400e; margin-bottom:4px;">SUPERVISOR (SPV ON-DUTY)</div>
              <div style="background:#d97706; color:#fff; font-size:9pt; font-weight:900; padding:3px 10px; border-radius:4px; display:inline-block; margin-bottom:10px;">
                ROLE: VERIFY
              </div>
              <ul style="font-size:9pt; color:#334155;">
                <li>Meninjau ketercapaian checklist staf harian.</li>
                <li>Memberikan evaluasi & catatan korektif.</li>
                <li>Membubuhkan Tanda Tangan Canvas Digital & PDF Export.</li>
              </ul>
            </div>

            <div class="card card-emerald" style="padding:16px;">
              <div style="font-size:14pt; font-weight:900; color:#15803d; margin-bottom:4px;">MANAGEMENT (AREA & EXEC)</div>
              <div style="background:#15803d; color:#fff; font-size:9pt; font-weight:900; padding:3px 10px; border-radius:4px; display:inline-block; margin-bottom:10px;">
                ROLE: MONITOR & GOVERNANCE
              </div>
              <ul style="font-size:9pt; color:#334155;">
                <li>Memantau tingkat kepatuhan multi-outlet secara global.</li>
                <li>Menganalisa performa operasional & laporan audit.</li>
                <li>Mengelola standar resep & aturan kebijakan sistem.</li>
              </ul>
            </div>
          </div>

          <div class="punchline-box" style="font-size: 11pt;">
            STAFF ➔ EXECUTE &nbsp;|&nbsp; SUPERVISOR ➔ VERIFY &nbsp;|&nbsp; MANAGEMENT ➔ MONITOR
          </div>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 13 of 14</div>
        </div>
      </div>

      <!-- SLIDE 14: CLOSING -->
      <div class="slide">
        <div>
          <div class="slide-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="slide-num">SLIDE 14</span>
              <span class="slide-title">CLOSING & CONCLUSION</span>
            </div>
            <div class="slide-tag">FINAL PUNCHLINE</div>
          </div>

          <div style="background: linear-gradient(135deg, #090d16 0%, #1e293b 100%); color: #ffffff; border-radius: 12px; padding: 36px 24px; text-align: center; border: 2px solid #d97706; margin-top: 10px;">
            <div style="font-size: 26pt; font-weight: 900; color: #fbbf24; letter-spacing: 2px; margin-bottom: 16px;">
              STANDARDIZED. MEASURABLE. ACCOUNTABLE.
            </div>

            <div style="font-size: 13pt; color: #f8fafc; max-width: 750px; margin: 0 auto 24px auto; line-height: 1.5; font-weight: 500;">
              "Cinema XXI VISOP Portal bukan sekadar digitalisasi SOP, tetapi sebuah langkah strategis untuk mengubah operasional manual menjadi standar kerja yang terukur, terdokumentasi, dan berkelanjutan."
            </div>

            <div style="font-size: 18pt; font-weight: 900; color: #38bdf8; letter-spacing: 1px;">
              CINEMA XXI VISOP PORTAL v3.0
            </div>
            <div style="font-size: 11pt; color: #94a3b8; margin-top: 6px;">
              Thank You / Terima Kasih
            </div>
          </div>

          <div class="grid-3" style="margin-top: 16px; text-align: center;">
            <div class="card card-amber">
              <strong style="color:#b45309;">QUALITY ↑</strong>
              <div style="font-size:8.5pt;">Konsistensi mutu terjamin</div>
            </div>
            <div class="card card-sky">
              <strong style="color:#0284c7;">CONTROL ↑</strong>
              <div style="font-size:8.5pt;">Pengawasan real-time</div>
            </div>
            <div class="card card-emerald">
              <strong style="color:#15803d;">WASTE ↓</strong>
              <div style="font-size:8.5pt;">Mereduksi efisiensi stok</div>
            </div>
          </div>
        </div>

        <div class="slide-footer">
          <div>CINEMA XXI VISOP v3.0 • Pitch Deck Competition</div>
          <div>Page 14 of 14</div>
        </div>
      </div>

      <script>
        window.onload = function() {
          setTimeout(function() {
            window.print();
          }, 400);
        }
      </script>
    </body>
    </html>
  `;

  printWin.document.write(htmlContent);
  printWin.document.close();
}
