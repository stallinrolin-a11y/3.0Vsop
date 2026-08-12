import React from 'react';
import { MainTab } from '../types';

interface MobileBottomNavProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
  pendingSpvCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
  pendingSpvCount
}) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/80 px-2 py-1.5 shadow-2xl flex items-center justify-around font-mono-code">
      <button
        onClick={() => {
          setActiveTab('operasional');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
          activeTab === 'operasional'
            ? 'text-amber-400 font-bold bg-amber-500/10 border border-amber-500/30'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <i className="fa-solid fa-list-check text-base" />
        <span className="text-[10px]">Operasional</span>
      </button>

      <button
        onClick={() => {
          setActiveTab('learning');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
          activeTab === 'learning'
            ? 'text-sky-400 font-bold bg-sky-500/10 border border-sky-500/30'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <i className="fa-solid fa-book-open text-base" />
        <span className="text-[10px]">Learning</span>
      </button>

      <button
        onClick={() => {
          setActiveTab('supervisor');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all relative ${
          activeTab === 'supervisor'
            ? 'text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <i className="fa-solid fa-user-shield text-base" />
        <span className="text-[10px]">Supervisor</span>
        {pendingSpvCount > 0 && (
          <span className="absolute -top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center animate-pulse">
            {pendingSpvCount}
          </span>
        )}
      </button>
    </nav>
  );
};
