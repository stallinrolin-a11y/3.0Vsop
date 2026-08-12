import React, { useState } from 'react';
import { Role, SopChecklistItem } from '../../types';

interface DailyChecklistProps {
  currentRole: Role;
  items: SopChecklistItem[];
  onToggleItem: (id: string) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  onViewDetail: (item: SopChecklistItem) => void;
  onSubmitReport: (deviationReason?: string) => void;
}

export const DailyChecklist: React.FC<DailyChecklistProps> = ({
  currentRole,
  items,
  onToggleItem,
  onUpdateNotes,
  onViewDetail,
  onSubmitReport
}) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('All');
  const [showDeviationModal, setShowDeviationModal] = useState(false);
  const [deviationReason, setDeviationReason] = useState('');
  const [activePhotoInputId, setActivePhotoInputId] = useState<string | null>(null);

  const filteredItems = items.filter((item) => {
    if (selectedTimeSlot === 'All') return true;
    return item.timeSlot === selectedTimeSlot;
  });

  const completedCount = items.filter((i) => i.completed).length;
  const totalCount = items.length;
  const progressPercent = Math.round((completedCount / (totalCount || 1)) * 100);

  // Check mandatory & critical pending items
  const pendingMandatoryOrCritical = items.filter(
    (i) => !i.completed && (i.priority === 'critical' || i.priority === 'mandatory' || !i.priority)
  );

  const handleAttemptSubmit = () => {
    if (pendingMandatoryOrCritical.length > 0) {
      setShowDeviationModal(true);
    } else {
      onSubmitReport();
    }
  };

  const handleConfirmDeviationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deviationReason.trim()) return;
    setShowDeviationModal(false);
    onSubmitReport(deviationReason);
    setDeviationReason('');
  };

  const handleSimulatePhotoUpload = (itemId: string) => {
    const timeStr = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';
    const currentNote = items.find((i) => i.id === itemId)?.notes || '';
    onUpdateNotes(itemId, `${currentNote ? currentNote + ' | ' : ''}Bukti Foto Terlampir [${timeStr}]`);
    setActivePhotoInputId(null);
  };

  return (
    <div className="space-y-4">
      {/* Progress & Header Banner */}
      <div className="bg-slate-900/90 border border-amber-500/30 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-xl shrink-0">
            <i className={currentRole === 'mixologist' ? 'fa-solid fa-martini-glass-citrus' : 'fa-solid fa-clipboard-check'} />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white font-mono-code">
              Daily VISOP Routine: {currentRole === 'mixologist' ? 'Mixologist Bar Workstation' : 'Commis Kitchen'}
            </h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Lakukan pengecekan fisik di lokasi, sertakan bukti pelaksanaan, dan centang setiap item yang sudah diselesaikan.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-center">
          <div className="text-right font-mono-code">
            <p className="text-[10px] text-slate-400 uppercase font-bold">Progres Harian</p>
            <p className="text-sm font-bold text-amber-300">{completedCount} / {totalCount} Selesai</p>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-slate-800 border-t-amber-400 flex items-center justify-center font-mono-code text-[11px] font-bold text-amber-300">
            {progressPercent}%
          </div>
        </div>
      </div>

      {/* Time Slot Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
        {['All', 'Opening Routine', 'Operational Service', 'Closing Routine'].map((slot) => (
          <button
            key={slot}
            onClick={() => setSelectedTimeSlot(slot)}
            className={`px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-mono-code font-bold whitespace-nowrap transition-all border ${
              selectedTimeSlot === slot
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            {slot === 'All' ? 'Semua Waktu' : slot}
          </button>
        ))}
      </div>

      {/* Checklist Cards Container */}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          const isCritical = item.priority === 'critical';
          const isMandatory = item.priority === 'mandatory' || !item.priority;

          return (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border transition-all ${
                item.completed
                  ? 'bg-emerald-950/20 border-emerald-500/40'
                  : isCritical
                  ? 'bg-slate-950/90 border-red-500/30 hover:border-red-500/50'
                  : 'bg-slate-950/80 border-slate-800 hover:border-amber-500/30'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 w-full">
                  <label className="flex items-center min-h-[44px] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => onToggleItem(item.id)}
                      className="w-6 h-6 rounded text-amber-500 focus:ring-amber-500 bg-slate-900 border-slate-700 cursor-pointer accent-amber-500 shrink-0"
                    />
                  </label>

                  <div className="space-y-1.5 flex-grow">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-800 text-[10px] font-mono-code font-bold">
                        {item.code}
                      </span>

                      {/* PRIORITY BADGES */}
                      {isCritical ? (
                        <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/40 text-[10px] font-mono-code font-bold flex items-center gap-1">
                          <i className="fa-solid fa-triangle-exclamation" /> [KRITIS / MUST-DO]
                        </span>
                      ) : isMandatory ? (
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono-code font-bold flex items-center gap-1">
                          <i className="fa-solid fa-asterisk" /> [WAJIB]
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 text-[10px] font-mono-code font-medium">
                          [OPSIONAL]
                        </span>
                      )}

                      <span className="text-[10px] font-mono-code text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {item.timeSlot}
                      </span>

                      {item.completed && (
                        <span className="text-[10px] font-mono-code text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                          <i className="fa-solid fa-check mr-1" /> Selesai ({item.timestamp || 'Tercatat'})
                        </span>
                      )}
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white font-mono-code leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.shortDesc}
                    </p>

                    {/* BUKTI PELAKSANAAN & CATATAN DEVIASI/FOTO */}
                    <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-slate-900 mt-2">
                      <div className="flex items-center gap-2 flex-wrap text-[11px] text-slate-300 w-full sm:w-auto">
                        <input
                          type="text"
                          value={item.notes || ''}
                          onChange={(e) => onUpdateNotes(item.id, e.target.value)}
                          placeholder="Tambahkan catatan fisik / hasil pengukuran..."
                          className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500/50 w-full sm:w-64"
                        />
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleSimulatePhotoUpload(item.id)}
                          className="px-2.5 py-1.5 min-h-[36px] rounded-lg bg-slate-900 hover:bg-slate-800 text-sky-300 border border-slate-800 text-[11px] font-mono-code font-bold transition-all flex items-center gap-1.5 active:scale-95"
                          title="Unggah Bukti Foto Pelaksanaan"
                        >
                          <i className="fa-solid fa-camera text-sky-400" />
                          <span>Foto Bukti</span>
                        </button>

                        <button
                          onClick={() => onViewDetail(item)}
                          className="px-2.5 py-1.5 min-h-[36px] rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-800 text-[11px] font-mono-code font-bold transition-all flex items-center gap-1.5 active:scale-95"
                          title="Lihat detail petunjuk visual SOP"
                        >
                          <i className="fa-solid fa-eye text-amber-400" />
                          <span className="hidden sm:inline">Detail SOP</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit Report Bar (Mobile Bottom Ergonomics) */}
      <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-xl">
        <div className="text-xs text-slate-400">
          <p className="font-mono-code text-slate-300 font-bold">Status Validasi Laporan Harian:</p>
          <p>
            {pendingMandatoryOrCritical.length === 0
              ? 'Seluruh tugas Wajib & Kritis sudah selesai. Siap dikirim.'
              : `${pendingMandatoryOrCritical.length} tugas Wajib/Kritis belum selesai (Memerlukan Catatan Deviasi jika dikirim).`}
          </p>
        </div>

        <button
          onClick={handleAttemptSubmit}
          className="w-full sm:w-auto px-6 py-3.5 min-h-[48px] bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg font-mono-code uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95"
        >
          <i className="fa-solid fa-paper-plane text-sm" /> Kirim Laporan Ke Supervisor
        </button>
      </div>

      {/* MODAL VALIDASI LAPORAN / CATATAN DEVIASI */}
      {showDeviationModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-start justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-amber-400 font-mono-code font-bold text-sm">
                <i className="fa-solid fa-triangle-exclamation text-lg text-amber-400" />
                Validasi Laporan: Task Wajib Belum Selesai
              </div>
              <button
                onClick={() => setShowDeviationModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <i className="fa-solid fa-xmark text-lg" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Terdapat <strong className="text-amber-400">{pendingMandatoryOrCritical.length} tugas Kritis / Wajib</strong> yang belum dicentang. Sistem mewajibkan pencatatan <strong className="text-white">Alasan Penundaan / Deviasi</strong> agar dapat ditinjau oleh Supervisor.
            </p>

            <form onSubmit={handleConfirmDeviationSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-amber-300 font-mono-code block mb-1">
                  Alasan Penundaan / Catatan Deviasi (Wajib Diisi):
                </label>
                <textarea
                  required
                  rows={3}
                  value={deviationReason}
                  onChange={(e) => setDeviationReason(e.target.value)}
                  placeholder="Contoh: Defrost deep freezer dijadwalkan ulang pukul 16:00 setelah jam sibuk bioskop..."
                  className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-xl p-3 focus:outline-none focus:border-amber-500 font-mono-code"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowDeviationModal(false)}
                  className="px-4 py-2.5 min-h-[44px] rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono-code text-xs font-bold transition-all"
                >
                  Lengkapi Tugas Dulu
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 min-h-[44px] rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono-code text-xs font-black uppercase transition-all shadow-md"
                >
                  Kirim Dengan Catatan Deviasi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
