import React from 'react';
import { SopChecklistItem } from '../types';

interface SopDetailModalProps {
  item: SopChecklistItem | null;
  onClose: () => void;
}

export const SopDetailModal: React.FC<SopDetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="xxi-glass rounded-3xl max-w-lg w-full p-5 sm:p-6 space-y-4 border border-amber-500/40 shadow-2xl relative my-auto max-h-[90vh] overflow-y-auto touch-scroll">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono-code font-bold">
                {item.code}
              </span>
              <span className="text-[10px] font-mono-code text-slate-400 uppercase font-semibold">
                {item.timeSlot}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white font-mono-code mt-1 leading-snug">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center shrink-0 border border-slate-800"
          >
            <i className="fa-solid fa-xmark text-sm" />
          </button>
        </div>

        {/* Short Summary */}
        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
          <p><strong className="text-amber-400 font-mono-code">Ringkasan SOP:</strong> {item.shortDesc}</p>
        </div>

        {/* Detailed Steps */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-amber-400 font-mono-code uppercase tracking-wider flex items-center gap-1.5">
            <i className="fa-solid fa-list-ol" /> Urutan Langkah Kerja Standar XXI:
          </h4>
          <div className="space-y-2">
            {item.detailedSteps.map((step, idx) => (
              <div key={idx} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800/80 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-mono-code text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Note & Target Standard */}
        <div className="grid grid-cols-1 gap-2 pt-1">
          <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/30 text-rose-200 text-xs space-y-1">
            <p className="font-bold font-mono-code text-[11px] flex items-center gap-1.5 text-rose-400">
              <i className="fa-solid fa-triangle-exclamation" /> Poin Kritis Keamanan & Makanan (Critical Point):
            </p>
            <p className="text-[11px] leading-relaxed">{item.safetyNote}</p>
          </div>

          <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200 text-xs space-y-1">
            <p className="font-bold font-mono-code text-[11px] flex items-center gap-1.5 text-emerald-400">
              <i className="fa-solid fa-bullseye" /> Target Standard Kualitas (Quality KPI):
            </p>
            <p className="text-[11px] leading-relaxed">{item.targetStandard}</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-2 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-amber-500 text-slate-950 font-mono-code font-black text-xs rounded-xl shadow hover:bg-amber-400 transition-all uppercase"
          >
            <i className="fa-solid fa-check mr-1.5" /> Pahami & Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
