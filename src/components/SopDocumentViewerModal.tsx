import React from 'react';
import { SopDocument } from '../types';

interface SopDocumentViewerModalProps {
  doc: SopDocument | null;
  onClose: () => void;
  onDownload: (docTitle: string) => void;
}

export const SopDocumentViewerModal: React.FC<SopDocumentViewerModalProps> = ({
  doc,
  onClose,
  onDownload
}) => {
  if (!doc) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="xxi-glass rounded-3xl max-w-2xl w-full p-5 sm:p-7 space-y-5 border border-sky-500/40 shadow-2xl relative my-auto max-h-[90vh] overflow-y-auto touch-scroll">
        
        {/* Document Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-3">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center font-bold text-xl shrink-0">
              <i className="fa-solid fa-file-pdf" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[10px] font-mono-code font-bold">
                  {doc.code}
                </span>
                <span className="text-[10px] text-slate-400 font-mono-code">
                  Revisi: {doc.revDate} • {doc.fileSize}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white font-mono-code mt-1">
                {doc.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center shrink-0 border border-slate-800"
          >
            <i className="fa-solid fa-xmark text-sm" />
          </button>
        </div>

        {/* Summary */}
        <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
          <p className="font-bold text-amber-400 font-mono-code"><i className="fa-solid fa-circle-info mr-1" /> Ringkasan Dokumen SOP:</p>
          <p className="leading-relaxed">{doc.fullContent.summary}</p>
        </div>

        {/* Requirements */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-sky-400 font-mono-code uppercase tracking-wider flex items-center gap-1.5">
            <i className="fa-solid fa-clipboard-check" /> Persyaratan Pra-Eksekusi:
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-200">
            {doc.fullContent.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-950 p-2 rounded-lg border border-slate-800/80">
                <i className="fa-solid fa-circle-dot text-sky-400 text-[10px] mt-1 shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Steps with Critical Points */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-sky-400 font-mono-code uppercase tracking-wider flex items-center gap-1.5">
            <i className="fa-solid fa-route" /> Tahapan & Prosedur Baku XXI:
          </h4>
          <div className="space-y-2.5">
            {doc.fullContent.steps.map((st) => (
              <div key={st.stepNum} className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-300 font-mono-code">Langkah {st.stepNum}: {st.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">{st.desc}</p>
                <p className="text-[11px] text-rose-300 font-mono-code bg-rose-950/30 p-1.5 rounded border border-rose-500/20 mt-1">
                  <strong className="text-rose-400">Poin Kritis:</strong> {st.criticalPoint}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Temperature & Sanitation if present */}
        {doc.fullContent.temperatureControl && (
          <div className="p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl text-xs text-amber-200 space-y-1">
            <p className="font-bold font-mono-code text-amber-400"><i className="fa-solid fa-temperature-half mr-1" /> Kontrol Suhu Standar:</p>
            <p>{doc.fullContent.temperatureControl}</p>
          </div>
        )}

        {/* Document Action Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={() => onDownload(doc.title)}
            className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-sky-300 border border-sky-500/30 font-mono-code text-xs font-bold rounded-xl flex items-center gap-2 transition-all"
          >
            <i className="fa-solid fa-file-arrow-down" /> Unduh Berkas PDF
          </button>
          
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-sky-500 text-slate-950 font-mono-code font-black text-xs rounded-xl shadow hover:bg-sky-400 transition-all uppercase"
          >
            Tutup Berkas
          </button>
        </div>

      </div>
    </div>
  );
};
