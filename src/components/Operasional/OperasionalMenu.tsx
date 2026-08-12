import React, { useState } from 'react';
import { Role, OperasionalSubMenu, SopChecklistItem, StockItem, CleaningTask } from '../../types';
import { DailyChecklist } from './DailyChecklist';
import { StockHarian } from './StockHarian';
import { GeneralCleaning } from './GeneralCleaning';
import { CommisStandardTables } from '../Learning/CommisStandardTables';

interface OperasionalMenuProps {
  currentRole: Role;
  onChangeRole: (role: Role) => void;
  checklistItems: SopChecklistItem[];
  onToggleChecklistItem: (id: string) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  onViewDetailModal: (item: SopChecklistItem) => void;
  onSubmitDailyReport: () => void;
  stockItems: StockItem[];
  onUpdateStock: (id: string, newUsed: number, newStart?: number) => void;
  cleaningTasks: CleaningTask[];
  onExecuteCleaningTask: (id: string) => void;
}

export const OperasionalMenu: React.FC<OperasionalMenuProps> = ({
  currentRole,
  onChangeRole,
  checklistItems,
  onToggleChecklistItem,
  onUpdateNotes,
  onViewDetailModal,
  onSubmitDailyReport,
  stockItems,
  onUpdateStock,
  cleaningTasks,
  onExecuteCleaningTask
}) => {
  const [activeSubMenu, setActiveSubMenu] = useState<OperasionalSubMenu>('daily');

  return (
    <div className="space-y-5">
      {/* Operasional Header Bar & Role Workstation Branding */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl border shadow-xl transition-all ${
        currentRole === 'mixologist'
          ? 'bg-gradient-to-r from-sky-950/80 via-slate-900 to-slate-950 border-sky-500/40'
          : currentRole === 'supervisor' || currentRole === 'manager'
          ? 'bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border-emerald-500/40'
          : 'bg-gradient-to-r from-amber-950/80 via-slate-900 to-slate-950 border-amber-500/40'
      }`}>
        <div>
          <div className="flex items-center gap-2">
            <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full font-mono-code border ${
              currentRole === 'mixologist'
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                : currentRole === 'supervisor' || currentRole === 'manager'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
            }`}>
              {currentRole === 'mixologist'
                ? 'BAR WORKSTATION • MIXOLOGIST'
                : currentRole === 'supervisor' || currentRole === 'manager'
                ? 'SUPERVISION & CONTROL'
                : 'KITCHEN WORKSTATION • COMMIS'}
            </span>
            <span className="text-xs text-slate-400 font-mono-code">• Operasional XXI</span>
          </div>
          
          <h1 className="text-xl sm:text-2xl font-black text-white font-mono-code mt-1.5 flex items-center gap-2">
            <i className={`fa-solid ${
              currentRole === 'mixologist'
                ? 'fa-martini-glass-citrus text-sky-400'
                : currentRole === 'supervisor' || currentRole === 'manager'
                ? 'fa-user-shield text-emerald-400'
                : 'fa-utensils text-amber-400'
            }`} />
            <span>
              {currentRole === 'mixologist'
                ? 'Workstation Mixologist & Bar Master'
                : currentRole === 'supervisor' || currentRole === 'manager'
                ? 'Control Workstation Operasional'
                : 'Workstation Commis Kitchen XXI'}
            </span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            {currentRole === 'mixologist'
              ? 'Standar Presisi Minuman Bar, Kalibrasi Espresso, Stok Sirup, & Kebersihan Station Bar'
              : currentRole === 'supervisor' || currentRole === 'manager'
              ? 'Pantau & Evaluasi Pelaksanaan Checklist, Stok Harian, dan Sanitasi Shift Staf'
              : 'Standar Olah Makanan, Porsi Gramasi, Cek Temp Chiller, & Pembersihan Dapur'}
          </p>
        </div>

        {/* Protected Jobdesk Role Switcher */}
        <div className="flex items-center gap-1 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800 self-start md:self-center shrink-0">
          <button
            onClick={() => onChangeRole('commis')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold transition-all flex items-center gap-1.5 ${
              currentRole === 'commis'
                ? 'bg-amber-500 text-slate-950 shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
            title={currentRole !== 'commis' ? 'Ganti ke Workstation Commis Kitchen (Membutuhkan PIN)' : 'Workstation Aktif: Commis Kitchen'}
          >
            <i className="fa-solid fa-utensils" />
            <span>Commis</span>
            {currentRole !== 'commis' && (
              <i className="fa-solid fa-lock text-[10px] text-amber-400/80 ml-0.5" />
            )}
          </button>

          <button
            onClick={() => onChangeRole('mixologist')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold transition-all flex items-center gap-1.5 ${
              currentRole === 'mixologist'
                ? 'bg-sky-500 text-slate-950 shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
            title={currentRole !== 'mixologist' ? 'Ganti ke Workstation Mixologist Bar (Membutuhkan PIN)' : 'Workstation Aktif: Mixologist Bar'}
          >
            <i className="fa-solid fa-martini-glass-citrus" />
            <span>Mixologist Bar</span>
            {currentRole !== 'mixologist' && (
              <i className="fa-solid fa-lock text-[10px] text-sky-400/80 ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* SUB-MENU TABS OPERASIONAL (Requirement #4: Sub Menu Harus Jelas) */}
      <div className="flex items-center gap-2 border-b border-slate-800/90 pb-3 overflow-x-auto custom-scrollbar">
        <button
          onClick={() => setActiveSubMenu('daily')}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono-code font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
            activeSubMenu === 'daily'
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow'
              : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
          }`}
        >
          <i className="fa-solid fa-square-check text-amber-400" />
          <span>1. Daily SOP Routine Checklist</span>
        </button>

        <button
          onClick={() => setActiveSubMenu('stock')}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono-code font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
            activeSubMenu === 'stock'
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow'
              : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
          }`}
        >
          <i className="fa-solid fa-boxes-stacked text-amber-400" />
          <span>2. Stock Harian & Inventory</span>
        </button>

        <button
          onClick={() => setActiveSubMenu('cleaning')}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono-code font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
            activeSubMenu === 'cleaning'
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow'
              : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
          }`}
        >
          <i className="fa-solid fa-broom text-amber-400" />
          <span>3. General Cleaning Protocol</span>
        </button>

        {currentRole === 'commis' && (
          <button
            onClick={() => setActiveSubMenu('standards')}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono-code font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
              activeSubMenu === 'standards'
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
            }`}
          >
            <i className="fa-solid fa-scale-balanced text-amber-400" />
            <span>4. Quick Ref Gramasi & Standar XXI</span>
          </button>
        )}
      </div>

      {/* SUB-CONTENT RENDER */}
      {activeSubMenu === 'daily' && (
        <DailyChecklist
          currentRole={currentRole}
          items={checklistItems}
          onToggleItem={onToggleChecklistItem}
          onUpdateNotes={onUpdateNotes}
          onViewDetail={onViewDetailModal}
          onSubmitReport={onSubmitDailyReport}
        />
      )}

      {activeSubMenu === 'stock' && (
        <StockHarian
          currentRole={currentRole}
          stockItems={stockItems}
          onUpdateStock={onUpdateStock}
        />
      )}

      {activeSubMenu === 'cleaning' && (
        <GeneralCleaning
          currentRole={currentRole}
          cleaningTasks={cleaningTasks}
          onExecuteTask={onExecuteCleaningTask}
        />
      )}

      {activeSubMenu === 'standards' && currentRole === 'commis' && (
        <CommisStandardTables />
      )}
    </div>
  );
};
