import React from 'react';
import { MainTab, UserProfile } from '../types';
import { exportPresentationPDF } from '../utils/pdfGenerator';

interface HeaderProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
  userProfile: UserProfile;
  onOpenLoginModal: () => void;
  pendingSpvCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  userProfile,
  onOpenLoginModal,
  pendingSpvCount
}) => {
  return (
    <header className="sticky top-0 z-40 xxi-glass border-b border-amber-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Brand XXI Logo & Portal Title */}
          <div 
            className="flex items-center gap-2.5 sm:gap-3.5 cursor-pointer shrink-0 group"
            onClick={() => setActiveTab('operasional')}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600 rounded-xl sm:rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-300" />
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-950 border border-amber-500/50 flex items-center justify-center p-1 shadow-2xl">
                <i className="fa-solid fa-utensils text-amber-400 text-lg sm:text-xl" />
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-black text-sm sm:text-lg tracking-wider text-amber-400 font-mono-code">CINEMA XXI</span>
                <span className="bg-amber-400/10 text-amber-300 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30">VISOP v3.0</span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono-code flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden xs:inline">{userProfile.outlet} • Visual SOP Commis & Mixologist</span>
                <span className="xs:hidden">Visual SOP Commis & Mixologist</span>
              </p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION TABS */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveTab('operasional')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'operasional'
                  ? 'text-amber-300 bg-amber-500/15 border border-amber-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <i className="fa-solid fa-list-check text-amber-400" />
              <span>Menu Operasional</span>
            </button>

            <button
              onClick={() => setActiveTab('learning')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'learning'
                  ? 'text-sky-300 bg-sky-500/15 border border-sky-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <i className="fa-solid fa-book-open text-sky-400" />
              <span>Learning Center</span>
            </button>

            <button
              onClick={() => setActiveTab('supervisor')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 relative ${
                activeTab === 'supervisor'
                  ? 'text-emerald-300 bg-emerald-500/15 border border-emerald-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <i className="fa-solid fa-user-shield text-emerald-400" />
              <span>Supervisor Mode</span>
              {pendingSpvCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-rose-500 text-white font-mono-code text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {pendingSpvCount}
                </span>
              )}
            </button>
          </nav>

          {/* USER & OUTLET BADGE */}
          <div className="flex items-center gap-2">
            <button
              onClick={exportPresentationPDF}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 hover:from-amber-500/30 hover:to-amber-600/30 text-amber-300 border border-amber-500/40 font-bold text-xs rounded-xl transition-all font-mono-code flex items-center gap-1.5 shadow-lg"
              title="Unduh PDF Presentation Pitch Deck Cinema XXI VISOP v3.0"
            >
              <i className="fa-solid fa-file-pdf text-rose-400 text-sm" />
              <span className="hidden lg:inline">Proposal Pitch PDF</span>
              <span className="lg:hidden">Proposal PDF</span>
            </button>

            <button
              onClick={onOpenLoginModal}
              className={`flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 p-1.5 sm:px-3 sm:py-1.5 rounded-xl border transition-all text-left ${
                userProfile.role === 'mixologist'
                  ? 'border-sky-500/40'
                  : userProfile.role === 'supervisor'
                  ? 'border-emerald-500/40'
                  : userProfile.role === 'manager'
                  ? 'border-purple-500/40'
                  : 'border-amber-500/40'
              }`}
              title="Ganti Outlet & Edit Nama Staf"
            >
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                userProfile.role === 'mixologist'
                  ? 'bg-sky-500/20 text-sky-400'
                  : userProfile.role === 'supervisor'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : userProfile.role === 'manager'
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'bg-amber-500/20 text-amber-400'
              }`}>
                <i className={userProfile.role === 'mixologist' ? 'fa-solid fa-martini-glass-citrus' : userProfile.role === 'supervisor' ? 'fa-solid fa-user-shield' : userProfile.role === 'manager' ? 'fa-solid fa-building-user' : 'fa-solid fa-utensils'} />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-bold text-slate-200 leading-tight truncate max-w-[130px]">{userProfile.name || 'Staf XXI'}</p>
                <p className={`text-[9px] font-mono-code uppercase font-bold ${
                  userProfile.role === 'mixologist'
                    ? 'text-sky-400'
                    : userProfile.role === 'supervisor'
                    ? 'text-emerald-400'
                    : userProfile.role === 'manager'
                    ? 'text-purple-400'
                    : 'text-amber-400'
                }`}>
                  {userProfile.role === 'commis' ? 'Commis Kitchen' : userProfile.role === 'mixologist' ? 'Mixologist Bar' : userProfile.role === 'manager' ? 'Area Manager' : 'Supervisor SPV'}
                </p>
              </div>
              <i className="fa-solid fa-user-pen text-slate-400 hover:text-amber-300 text-xs ml-1 hidden sm:block" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
