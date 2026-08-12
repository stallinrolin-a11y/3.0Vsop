import React, { useState } from 'react';
import { SopDocument } from '../../types';
import { CommisStandardTables } from './CommisStandardTables';
import { PresentationModal } from './PresentationModal';

interface LearningCenterProps {
  documents: SopDocument[];
  onOpenDocViewer: (doc: SopDocument) => void;
  onDownloadDoc: (docTitle: string) => void;
}

export const LearningCenter: React.FC<LearningCenterProps> = ({
  documents,
  onOpenDocViewer,
  onDownloadDoc
}) => {
  const [learningTab, setLearningTab] = useState<'tables' | 'documents'>('tables');
  const [roleFilter, setRoleFilter] = useState<'all' | 'commis' | 'mixologist'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);

  const filteredDocs = documents.filter((doc) => {
    const matchesRole = roleFilter === 'all' || doc.role === roleFilter || doc.role === 'both';
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const commisDocs = filteredDocs.filter((d) => d.role === 'commis' || d.role === 'both');
  const mixologistDocs = filteredDocs.filter((d) => d.role === 'mixologist' || d.role === 'both');

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900/90 border border-sky-500/30 p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full font-mono-code">
              Menu Utama 2
            </span>
            <span className="text-xs text-slate-400 font-mono-code">• Pusat Pembelajaran Digital XXI</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white font-mono-code mt-1 flex items-center gap-2">
            <i className="fa-solid fa-book-open text-sky-400" />
            Learning Center & Buku Standar XXI
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Gramasi bahan, equipment & utensil, durasi & limit masak, spoil expiry, resep popcorn, serta file PDF SOP resmi.
          </p>
        </div>

        {/* Learning View Mode Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-sky-500/30 shrink-0">
          <button
            onClick={() => setIsPresentationOpen(true)}
            className="px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold transition-all flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg hover:brightness-110 font-black animate-pulse"
          >
            <i className="fa-solid fa-file-powerpoint" />
            <span>Mode Presentasi (Slide Deck)</span>
          </button>

          <button
            onClick={() => setLearningTab('tables')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold transition-all flex items-center gap-1.5 ${
              learningTab === 'tables'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-table-list" />
            <span>Standar & Gramasi XXI</span>
          </button>

          <button
            onClick={() => setLearningTab('documents')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold transition-all flex items-center gap-1.5 ${
              learningTab === 'documents'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-file-pdf" />
            <span>Dokumen SOP (PDF)</span>
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: GRAMASI & STANDAR TABEL XXI */}
      {learningTab === 'tables' && <CommisStandardTables />}

      {/* VIEW MODE 2: DOKUMEN SOP PDF */}
      {learningTab === 'documents' && (
        <div className="space-y-4">
          {/* Sub Role Filters & Search for Documents */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setRoleFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all ${
                  roleFilter === 'all'
                    ? 'bg-sky-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Semua Dokumen
              </button>
              <button
                onClick={() => setRoleFilter('commis')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all ${
                  roleFilter === 'commis'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                SOP Commis
              </button>
              <button
                onClick={() => setRoleFilter('mixologist')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all ${
                  roleFilter === 'mixologist'
                    ? 'bg-sky-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                SOP Mixologist Bar
              </button>
            </div>

            <div className="relative flex-grow max-w-md">
              <i className="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-500 text-xs" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari file SOP PDF..."
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl pl-8 pr-3 py-2 focus:outline-none focus:border-sky-500/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* SECTION 1: FILE SOP COMMIES */}
            {(roleFilter === 'all' || roleFilter === 'commis') && (
              <div className="xxi-glass rounded-2xl p-5 border border-amber-500/30 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-lg">
                      <i className="fa-solid fa-utensils" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white font-mono-code text-base">
                        File SOP Commis
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        Standar Dapur, Food Prep, Thawing & Food Safety XXI
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 font-mono-code text-[11px] font-bold border border-amber-500/30">
                    {commisDocs.length} Berkas
                  </span>
                </div>

                <div className="space-y-3">
                  {commisDocs.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-4 bg-slate-950/90 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5">
                          <i className="fa-solid fa-file-pdf text-rose-400 text-xl shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] font-mono-code text-amber-400 font-bold bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 mr-1.5">
                              {doc.code}
                            </span>
                            <h4 className="text-xs font-bold text-slate-100 font-mono-code leading-snug mt-1">
                              {doc.title}
                            </h4>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed pl-7">
                        {doc.description}
                      </p>

                      <div className="pt-1 pl-7 flex items-center justify-between text-[11px] font-mono-code">
                        <span className="text-slate-500">{doc.fileSize} • Rev: {doc.revDate}</span>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onOpenDocViewer(doc)}
                            className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-700 rounded-lg font-bold transition-all flex items-center gap-1"
                          >
                            <i className="fa-solid fa-eye text-amber-400" /> Buka SOP
                          </button>
                          <button
                            onClick={() => onDownloadDoc(doc.title)}
                            className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 rounded-lg transition-all"
                            title="Unduh Berkas PDF"
                          >
                            <i className="fa-solid fa-download" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION 2: FILE SOP MIXOLOGIST BAR */}
            {(roleFilter === 'all' || roleFilter === 'mixologist') && (
              <div className="xxi-glass rounded-2xl p-5 border border-sky-500/30 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold text-lg">
                      <i className="fa-solid fa-martini-glass-citrus" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white font-mono-code text-base">
                        File SOP Mixologist Bar
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        Buku Resep Mocktail, Espresso & Bar Hygiene XXI
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-300 font-mono-code text-[11px] font-bold border border-sky-500/30">
                    {mixologistDocs.length} Berkas
                  </span>
                </div>

                <div className="space-y-3">
                  {mixologistDocs.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-4 bg-slate-950/90 rounded-2xl border border-slate-800 hover:border-sky-500/40 transition-all space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5">
                          <i className="fa-solid fa-file-pdf text-rose-400 text-xl shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] font-mono-code text-sky-400 font-bold bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20 mr-1.5">
                              {doc.code}
                            </span>
                            <h4 className="text-xs font-bold text-slate-100 font-mono-code leading-snug mt-1">
                              {doc.title}
                            </h4>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed pl-7">
                        {doc.description}
                      </p>

                      <div className="pt-1 pl-7 flex items-center justify-between text-[11px] font-mono-code">
                        <span className="text-slate-500">{doc.fileSize} • Rev: {doc.revDate}</span>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onOpenDocViewer(doc)}
                            className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-sky-300 border border-slate-700 rounded-lg font-bold transition-all flex items-center gap-1"
                          >
                            <i className="fa-solid fa-eye text-sky-400" /> Buka SOP
                          </button>
                          <button
                            onClick={() => onDownloadDoc(doc.title)}
                            className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-sky-400 border border-slate-800 rounded-lg transition-all"
                            title="Unduh Berkas PDF"
                          >
                            <i className="fa-solid fa-download" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* PRESENTATION SLIDE DECK MODAL */}
      <PresentationModal
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
      />
    </div>
  );
};
