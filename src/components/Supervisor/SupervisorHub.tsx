import React, { useState, useRef, useEffect } from 'react';
import { SupervisorReport, AuditTrailLog } from '../../types';

interface SupervisorHubProps {
  reports: SupervisorReport[];
  auditLogs?: AuditTrailLog[];
  onVerifyReport: (id: string, signatureDataUrl: string, notes: string) => void;
  onRejectReport: (id: string, notes: string) => void;
}

export const SupervisorHub: React.FC<SupervisorHubProps> = ({
  reports,
  auditLogs = [],
  onVerifyReport,
  onRejectReport
}) => {
  const [activeTab, setActiveTab] = useState<'reports' | 'audit'>('reports');
  const [selectedReport, setSelectedReport] = useState<SupervisorReport | null>(null);
  const [spvNotes, setSpvNotes] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Pending' | 'Approved' | 'Rejected'>('all');
  const [auditFilter, setAuditFilter] = useState<'all' | 'info' | 'warning' | 'approval'>('all');
  
  // Canvas refs for Digital Signature
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  const filteredReports = reports.filter((r) => {
    if (statusFilter === 'all') return true;
    return r.status === statusFilter;
  });

  const filteredAuditLogs = auditLogs.filter((log) => {
    if (auditFilter === 'all') return true;
    return log.statusType === auditFilter;
  });

  const pendingCount = reports.filter((r) => r.status === 'Pending').length;

  const exportReportPDF = (report: SupervisorReport) => {
    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('Harap izinkan pop-up browser untuk mengunduh dokumen PDF.');
      return;
    }

    const checklistHtml = report.checklistSummary.map((itemStr, idx) => `
      <tr>
        <td style="text-align:center; color:#64748b; font-weight:bold;">${idx + 1}</td>
        <td style="font-weight:bold; color:#0f172a;">${itemStr}</td>
        <td style="text-align:center; font-weight:bold; color:#16a34a;">✓ LENGKAP</td>
      </tr>
    `).join('');

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="utf-8">
        <title>BERITA ACARA VERIFIKASI SHIFT - ${report.outletName} (${report.submittedAt})</title>
        <style>
          @page { size: A4 portrait; margin: 12mm; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #0f172a; margin:0; padding:20px; background:#fff; }
          .header { border-bottom: 3px double #0f172a; padding-bottom: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; }
          .logo { font-size: 20px; font-weight: 900; letter-spacing: 1px; color: #0f172a; font-family: monospace; }
          .subtitle { font-size: 11px; color: #64748b; font-weight: bold; text-transform: uppercase; margin-top: 2px; }
          .badge { background: #16a34a; color: #ffffff; font-size: 10px; font-weight: bold; padding: 4px 10px; border-radius: 4px; }
          .meta-box { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-bottom: 16px; font-size: 11px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 11px; }
          th { background: #0f172a; color: #ffffff; text-align: left; padding: 8px 10px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; }
          td { padding: 8px 10px; border-bottom: 1px solid #e2e8f0; }
          .sig-box { margin-top: 20px; border: 1px solid #e2e8f0; background: #f8fafc; border-radius: 8px; padding: 14px; display: flex; justify-content: space-between; align-items: center; }
          .sig-img { height: 50px; border: 1px solid #cbd5e1; border-radius: 4px; background: #fff; padding: 4px; }
          .footer { border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 20px; display: flex; justify-content: space-between; align-items: center; font-size: 10px; color: #94a3b8; font-family: monospace; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="logo">CINEMA XXI - BERITA ACARA SHIFT</div>
            <div class="subtitle">DOKUMEN VERIFIKASI OPERASIONAL WORKSTATION (${report.reportCode})</div>
          </div>
          <div class="badge">STATUS: VERIFIED (APPROVED)</div>
        </div>

        <div class="meta-box">
          <div>
            <div><strong>OUTLET:</strong> ${report.outletName}</div>
            <div style="margin-top:4px;"><strong>WORKSTATION / ROLE:</strong> ${report.jobdeskRole.toUpperCase()}</div>
            <div style="margin-top:4px;"><strong>PENGIRIM (STAF):</strong> ${report.submittedBy}</div>
          </div>
          <div>
            <div><strong>TANGGAL PENYERAHAN:</strong> ${report.submittedAt}</div>
            <div style="margin-top:4px;"><strong>STATUS KEPATUHAN:</strong> ${report.completedCount} / ${report.totalCount} Selesai</div>
            <div style="margin-top:4px;"><strong>WAKTU VERIFIKASI SPV:</strong> ${report.verifiedAt || 'Selesai'}</div>
          </div>
        </div>

        <div style="font-size:12px; font-weight:bold; margin-bottom:8px;">RINCIAN KEPATUHAN DAILY CHECKLIST:</div>
        <table>
          <thead>
            <tr>
              <th style="width:30px; text-align:center;">NO</th>
              <th>RINGKASAN TUGAS / ITEM CHECKLIST</th>
              <th style="text-align:center; width:120px;">STATUS</th>
            </tr>
          </thead>
          <tbody>
            ${checklistHtml}
          </tbody>
        </table>

        ${report.stockSummary ? `<div style="font-size:11px; background:#fef3c7; border:1px solid #fde68a; padding:10px; border-radius:6px; color:#92400e; margin-bottom:16px;"><strong>CATATAN STOK:</strong> ${report.stockSummary}</div>` : ''}

        <div class="sig-box">
          <div>
            <div style="font-size:11px; font-weight:bold; color:#0f172a;">LEMBAR PENGESAHAN SUPERVISOR ON-DUTY</div>
            <div style="font-size:10px; color:#64748b; margin-top:2px;">EVALUASI: ${report.spvNotes || 'Telah diverifikasi sesuai standar operasional XXI.'}</div>
          </div>
          ${report.spvSignature ? `<img src="${report.spvSignature}" class="sig-img" alt="Spv Signature"/>` : '<div style="font-size:10px; color:#94a3b8; font-style:italic;">Disetujui Digital</div>'}
        </div>

        <div class="footer">
          <div>Dokumen Resmi Audit Internal Cinema XXI • Waktu Cetak: ${new Date().toLocaleString('id-ID')}</div>
          <div>STAMP: AUDITED & APPROVED</div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          }
        </script>
      </body>
      </html>
    `;

    printWin.document.write(htmlContent);
    printWin.document.close();
  };

  // Initialize Canvas whenever signature modal opens
  useEffect(() => {
    if (selectedReport && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * 2;
        canvas.height = rect.height * 2;
        ctx.scale(2, 2);

        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
      setHasSignature(false);
      setSpvNotes('');
    }
  }, [selectedReport]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setHasSignature(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setHasSignature(false);
  };

  const handleConfirmVerification = () => {
    if (!selectedReport) return;
    let sigDataUrl = '';
    if (canvasRef.current) {
      sigDataUrl = canvasRef.current.toDataURL('image/png');
    }
    onVerifyReport(selectedReport.id, sigDataUrl, spvNotes || 'Disetujui oleh Supervisor XXI.');
    setSelectedReport(null);
  };

  const handleConfirmRejection = () => {
    if (!selectedReport) return;
    onRejectReport(selectedReport.id, spvNotes || 'Laporan dikembalikan untuk perbaikan.');
    setSelectedReport(null);
  };

  return (
    <div className="space-y-5 pb-28 md:pb-12">
      {/* Header Banner */}
      <div className="xxi-glass rounded-2xl p-5 border border-emerald-500/30 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full font-mono-code">
              Supervisor Hub Mode
            </span>
            <span className="text-xs text-slate-400 font-mono-code">• Verifikasi Laporan & Audit Trail XXI</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white font-mono-code mt-1">
            Dashboard Verifikasi & Audit System XXI
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Pemeriksaan laporan daily checklist, tanda tangan digital verifikasi, serta jejak riwayat audit perubahan.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-center">
          <div className="text-right font-mono-code">
            <p className="text-[10px] text-slate-400 uppercase font-bold">Laporan Pending</p>
            <p className="text-sm font-bold text-amber-400">{pendingCount} Perlu ACC</p>
          </div>
        </div>
      </div>

      {/* VIEW TABS SWITCHER (Laporan vs Audit Trail) */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('reports')}
          className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all flex items-center gap-2 border ${
            activeTab === 'reports'
              ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
          }`}
        >
          <i className="fa-solid fa-list-check" />
          <span>Daftar Laporan Harian ({reports.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('audit')}
          className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all flex items-center gap-2 border ${
            activeTab === 'audit'
              ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
          }`}
        >
          <i className="fa-solid fa-clock-rotate-left" />
          <span>Riwayat & Log Audit Trail ({auditLogs.length})</span>
        </button>
      </div>

      {/* TAB 1: REPORTS VIEW */}
      {activeTab === 'reports' && (
        <div className="space-y-4">
          {/* Filter Status Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
            {(['all', 'Pending', 'Approved', 'Rejected'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-code font-bold whitespace-nowrap transition-all border ${
                  statusFilter === st
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {st === 'all' ? 'Semua Status' : st === 'Pending' ? ' ⏳ Pending SPV' : st === 'Approved' ? '✓ Approved' : '× Rejected'}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredReports.length === 0 ? (
              <div className="p-8 text-center bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <i className="fa-solid fa-folder-open text-slate-600 text-3xl" />
                <p className="text-xs font-bold text-slate-400 font-mono-code">
                  Tidak ada laporan dalam status "{statusFilter}".
                </p>
              </div>
            ) : (
              filteredReports.map((report) => {
                const isPending = report.status === 'Pending';
                const isApproved = report.status === 'Approved';

                return (
                  <div
                    key={report.id}
                    className="xxi-glass-card rounded-2xl p-4 sm:p-5 border border-slate-800 space-y-3 shadow-xl hover:border-emerald-500/40 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono-code text-amber-400 font-bold text-xs bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                            {report.reportCode}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono-code">
                            {report.submittedAt}
                          </span>
                        </div>
                        <p className="font-bold text-white text-sm font-mono-code mt-1">
                          {report.outletName}
                        </p>
                        <p className="text-xs text-slate-400">
                          Diserahkan Oleh: <strong className="text-slate-200">{report.submittedBy}</strong> ({report.jobdeskRole === 'commis' ? 'Commis' : 'Mixologist Bar'})
                        </p>
                      </div>

                      <span
                        className={`self-start sm:self-center px-3 py-1 rounded-xl text-xs font-mono-code font-bold border ${
                          isPending
                            ? 'bg-amber-500/15 text-amber-300 border-amber-500/40 animate-pulse'
                            : isApproved
                            ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40'
                            : 'bg-rose-500/15 text-rose-300 border-rose-500/40'
                        }`}
                      >
                        {report.status === 'Pending' ? '⏳ Perlu Verifikasi SPV' : report.status === 'Approved' ? '✓ Verified & Signed' : '× Dikembalikan'}
                      </span>
                    </div>

                    {/* Deviation Reason Badge if present */}
                    {report.deviationReason && (
                      <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200 space-y-0.5">
                        <p className="font-bold font-mono-code flex items-center gap-1.5 text-amber-300">
                          <i className="fa-solid fa-triangle-exclamation" /> Catatan Deviasi Staf:
                        </p>
                        <p className="text-slate-300 italic font-mono-code text-[11px]">"{report.deviationReason}"</p>
                      </div>
                    )}

                    {/* Checklist Summary Items */}
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1 text-xs text-slate-300 font-sans">
                      <p className="font-bold text-emerald-400 font-mono-code text-[11px] mb-1">
                        <i className="fa-solid fa-clipboard-check mr-1" />
                        Item Daily Checklist ({report.completedCount}/{report.totalCount} Selesai):
                      </p>
                      {report.checklistSummary.map((sumItem, idx) => (
                        <p key={idx} className="text-xs text-slate-300 leading-snug">
                          {sumItem}
                        </p>
                      ))}
                      {report.stockSummary && (
                        <p className="text-[11px] text-amber-300 pt-1 font-mono-code">
                          <strong>Catatan Stok:</strong> {report.stockSummary}
                        </p>
                      )}
                    </div>

                    {/* Signature Preview if approved */}
                    {isApproved && report.spvSignature && (
                      <div className="p-3 bg-emerald-950/20 rounded-xl border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
                        <div>
                          <p className="font-bold font-mono-code text-[11px]">Tanda Tangan Digital Supervisor:</p>
                          <p className="text-[10px] text-slate-400">{report.spvNotes || 'Telah disetujui.'}</p>
                        </div>
                        <img src={report.spvSignature} alt="SPV Signature" className="h-10 border border-emerald-500/40 rounded bg-slate-950 p-1" />
                      </div>
                    )}

                    {/* PDF Export for Approved Reports */}
                    {isApproved && (
                      <button
                        onClick={() => exportReportPDF(report)}
                        className="w-full py-2.5 bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 font-bold text-xs rounded-xl transition-all font-mono-code flex items-center justify-center gap-2"
                      >
                        <i className="fa-solid fa-file-pdf text-rose-400 text-sm" />
                        <span>Unduh Berita Acara Shift (PDF)</span>
                      </button>
                    )}

                    {/* Action Button */}
                    {isPending && (
                      <button
                        onClick={() => setSelectedReport(report)}
                        className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all font-mono-code uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95"
                      >
                        <i className="fa-solid fa-signature text-sm" /> Verifikasi & Tanda Tangan SPV
                      </button>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* TAB 2: AUDIT TRAIL VIEW */}
      {activeTab === 'audit' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-code text-slate-400 font-bold">Filter Kategori Log:</span>
              {(['all', 'info', 'warning', 'approval'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setAuditFilter(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono-code font-bold transition-all border ${
                    auditFilter === cat
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {cat === 'all' ? 'Semua' : cat === 'info' ? 'Aktivitas Staf' : cat === 'warning' ? 'Deviasi/Revisi' : 'Persetujuan SPV'}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
              <h3 className="font-mono-code text-xs font-bold text-amber-400 flex items-center gap-2">
                <i className="fa-solid fa-shield-halved" /> Logging Aktivitas & Jejak Audit Sistem Operasional
              </h3>
              <span className="text-[10px] text-slate-500 font-mono-code">Akses Real-time</span>
            </div>

            <div className="divide-y divide-slate-800/60 max-h-[500px] overflow-y-auto custom-scrollbar">
              {filteredAuditLogs.length === 0 ? (
                <div className="p-8 text-center text-slate-500 font-mono-code text-xs">
                  Belum ada log aktivitas tercatat untuk kategori ini.
                </div>
              ) : (
                filteredAuditLogs.map((log) => (
                  <div key={log.id} className="p-4 hover:bg-slate-900/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-mono-code text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                          {log.timestamp}
                        </span>
                        <span className="text-xs font-bold text-white font-mono-code">
                          {log.user} ({log.role.toUpperCase()})
                        </span>
                        <span className={`text-[10px] font-mono-code font-bold px-2 py-0.5 rounded border ${
                          log.statusType === 'approval'
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                            : log.statusType === 'warning'
                            ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                            : 'bg-sky-500/10 text-sky-300 border-sky-500/30'
                        }`}>
                          {log.action}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed pl-1 font-sans">
                        {log.details}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* DIGITAL SIGNATURE MODAL OVERLAY */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="xxi-glass rounded-3xl max-w-md w-full p-5 sm:p-6 space-y-4 border border-emerald-500/40 shadow-2xl relative my-auto">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-emerald-400 font-mono-code flex items-center gap-1.5">
                <i className="fa-solid fa-signature text-sm" /> Tanda Tangan Digital Verifikasi SPV
              </span>
              <button onClick={() => setSelectedReport(null)} className="text-slate-400 hover:text-white">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <div className="space-y-1 text-xs text-slate-300">
              <p>Laporan: <strong className="text-amber-400 font-mono-code">{selectedReport.reportCode}</strong></p>
              <p>Staf: <strong>{selectedReport.submittedBy}</strong> ({selectedReport.jobdeskRole.toUpperCase()})</p>
              <p className="text-[11px] text-slate-400">Bubuhkan tanda tangan di bawah menggunakan jari / stylus / mouse untuk menyetujui:</p>
            </div>

            {/* Canvas Area */}
            <div className="w-full h-44 rounded-2xl bg-slate-950 border border-slate-800 touch-none relative overflow-hidden">
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="w-full h-full cursor-crosshair touch-none"
              />
              {!hasSignature && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-slate-600 text-xs font-mono-code">
                  [ Goreskan Tanda Tangan Di Sini ]
                </div>
              )}
            </div>

            {/* Notes Input */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono-code text-slate-300 block">Catatan / Evaluasi SPV (Opsional):</label>
              <input
                type="text"
                value={spvNotes}
                onChange={(e) => setSpvNotes(e.target.value)}
                placeholder="Misal: Dapur sangat bersih, pertahankan."
                className="w-full bg-slate-950 border border-slate-800 text-xs text-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Buttons */}
            <div className="pt-2 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={clearCanvas}
                className="px-3 py-2 bg-slate-800 text-slate-300 text-xs rounded-xl font-mono-code"
              >
                Hapus
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleConfirmRejection}
                  className="px-3 py-2 bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs rounded-xl font-mono-code font-bold"
                >
                  Tolak
                </button>
                <button
                  type="button"
                  onClick={handleConfirmVerification}
                  disabled={!hasSignature}
                  className={`px-4 py-2 font-mono-code font-bold text-xs rounded-xl shadow transition-all ${
                    hasSignature
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Simpan & Setujui
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
