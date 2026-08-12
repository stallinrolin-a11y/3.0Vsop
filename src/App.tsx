import React, { useState, useEffect } from 'react';
import {
  Role,
  MainTab,
  UserProfile,
  SopChecklistItem,
  StockItem,
  CleaningTask,
  SopDocument,
  SupervisorReport,
  AuditTrailLog
} from './types';
import {
  INITIAL_COMMIS_CHECKLIST,
  INITIAL_MIXOLOGIST_CHECKLIST,
  INITIAL_STOCK_ITEMS,
  INITIAL_CLEANING_TASKS,
  SOP_DOCUMENTS,
  INITIAL_SUPERVISOR_REPORTS,
  INITIAL_AUDIT_LOGS
} from './data/sopData';

import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { LoginModal } from './components/LoginModal';
import { ToastContainer, ToastMessage } from './components/Toast';
import { SopDetailModal } from './components/SopDetailModal';
import { SopDocumentViewerModal } from './components/SopDocumentViewerModal';
import { OperasionalMenu } from './components/Operasional/OperasionalMenu';
import { LearningCenter } from './components/Learning/LearningCenter';
import { SupervisorHub } from './components/Supervisor/SupervisorHub';
import { SecurityPinModal } from './components/SecurityPinModal';

export default function App() {
  // User Profile State
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('xxi_user_profile_v4');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return {
      name: 'Rian Sukma',
      role: 'commis',
      outlet: 'Cafe Empire'
    };
  });

  // Navigation State
  const [activeTab, setActiveTab] = useState<MainTab>('operasional');

  // Checklists State (Separated for Commis & Mixologist)
  const [commisChecklist, setCommisChecklist] = useState<SopChecklistItem[]>(() => {
    const saved = localStorage.getItem('xxi_commis_checklist_v4');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_COMMIS_CHECKLIST;
  });

  const [mixologistChecklist, setMixologistChecklist] = useState<SopChecklistItem[]>(() => {
    const saved = localStorage.getItem('xxi_mixologist_checklist_v3');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_MIXOLOGIST_CHECKLIST;
  });

  // Stock & Cleaning State
  const [stockItems, setStockItems] = useState<StockItem[]>(() => {
    const saved = localStorage.getItem('xxi_stock_items_v4');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_STOCK_ITEMS;
  });

  const [cleaningTasks, setCleaningTasks] = useState<CleaningTask[]>(() => {
    const saved = localStorage.getItem('xxi_cleaning_tasks_v3');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_CLEANING_TASKS;
  });

  // Supervisor Reports State
  const [reports, setReports] = useState<SupervisorReport[]>(() => {
    const saved = localStorage.getItem('xxi_spv_reports');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_SUPERVISOR_REPORTS;
  });

  // Audit Logs State
  const [auditLogs, setAuditLogs] = useState<AuditTrailLog[]>(() => {
    const saved = localStorage.getItem('xxi_audit_logs');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_AUDIT_LOGS;
  });

  // Modals & Toast State
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [securityTargetRole, setSecurityTargetRole] = useState<Role>('supervisor');
  const [selectedDetailItem, setSelectedDetailItem] = useState<SopChecklistItem | null>(null);
  const [selectedSopDoc, setSelectedSopDoc] = useState<SopDocument | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Secure Navigation Tab Guard Handler
  const handleTabSwitch = (targetTab: MainTab) => {
    if (targetTab === 'supervisor') {
      if (userProfile.role === 'supervisor' || userProfile.role === 'manager') {
        setActiveTab('supervisor');
      } else {
        setSecurityTargetRole('supervisor');
        setIsPinModalOpen(true);
      }
    } else {
      setActiveTab(targetTab);
    }
  };

  // Workstation Role Switch Guard Handler (Strict Security for all Workstations including Commis)
  const handleWorkstationRoleChange = (requestedRole: Role) => {
    if (userProfile.role === requestedRole) return;

    // Strict security check: Any role switch to Commis, Mixologist, Supervisor, or Manager requires PIN verification
    setSecurityTargetRole(requestedRole);
    setIsPinModalOpen(true);
  };

  // Persist State Changes
  useEffect(() => {
    localStorage.setItem('xxi_user_profile_v4', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('xxi_commis_checklist_v4', JSON.stringify(commisChecklist));
  }, [commisChecklist]);

  useEffect(() => {
    localStorage.setItem('xxi_mixologist_checklist_v3', JSON.stringify(mixologistChecklist));
  }, [mixologistChecklist]);

  useEffect(() => {
    localStorage.setItem('xxi_stock_items_v4', JSON.stringify(stockItems));
  }, [stockItems]);

  useEffect(() => {
    localStorage.setItem('xxi_cleaning_tasks_v3', JSON.stringify(cleaningTasks));
  }, [cleaningTasks]);

  useEffect(() => {
    localStorage.setItem('xxi_spv_reports', JSON.stringify(reports));
  }, [reports]);

  // Toast Helper
  const showToast = (title: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    const newToast: ToastMessage = {
      id: Date.now().toString(),
      title,
      type
    };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 3000);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Toggle Checklist Item
  const handleToggleChecklistItem = (id: string) => {
    if (userProfile.role === 'mixologist') {
      setMixologistChecklist((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      );
    } else {
      setCommisChecklist((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      );
    }
  };

  // Update Item Notes
  const handleUpdateNotes = (id: string, notes: string) => {
    if (userProfile.role === 'mixologist') {
      setMixologistChecklist((prev) =>
        prev.map((item) => (item.id === id ? { ...item, notes } : item))
      );
    } else {
      setCommisChecklist((prev) =>
        prev.map((item) => (item.id === id ? { ...item, notes } : item))
      );
    }
  };

  // Update Stock
  const handleUpdateStock = (id: string, newUsed: number, newStart?: number) => {
    setStockItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const start = newStart !== undefined ? newStart : item.startStock;
          const current = Math.max(0, start - newUsed);
          return {
            ...item,
            startStock: start,
            usedStock: newUsed,
            currentStock: current,
            lastUpdated: 'Baru Saja'
          };
        }
        return item;
      })
    );
    showToast('Data stok berhasil diperbarui', 'success');
  };

  // Execute Cleaning Task
  const handleExecuteCleaningTask = (id: string) => {
    setCleaningTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: 'Completed' } : t))
    );
    showToast('General cleaning telah selesai dilaksanakan', 'success');
  };

  // Submit Daily Report to Supervisor
  const handleSubmitDailyReport = (deviationReason?: string) => {
    const activeList = userProfile.role === 'mixologist' ? mixologistChecklist : commisChecklist;
    const completedItems = activeList.filter((i) => i.completed);
    const reportCode = `REP-${userProfile.role.toUpperCase()}-${Date.now().toString().slice(-4)}`;
    const timeStr = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';

    const summaryList = activeList.map((i) =>
      `${i.completed ? '✓' : '×'} ${i.title} ${i.priority === 'critical' ? '[KRITIS]' : i.priority === 'mandatory' ? '[WAJIB]' : ''} ${i.notes ? `(${i.notes})` : ''}`
    );

    const newReport: SupervisorReport = {
      id: `rep-${Date.now()}`,
      reportCode,
      outletName: userProfile.outlet,
      submittedBy: userProfile.name,
      jobdeskRole: userProfile.role === 'mixologist' ? 'mixologist' : 'commis',
      submittedAt: timeStr,
      status: 'Pending',
      completedCount: completedItems.length,
      totalCount: activeList.length,
      checklistSummary: summaryList,
      stockSummary: 'Stok awal dan terpakai sudah diverifikasi.',
      deviationReason
    };

    setReports((prev) => {
      const updated = [newReport, ...prev];
      localStorage.setItem('xxi_spv_reports', JSON.stringify(updated));
      return updated;
    });

    const newLog: AuditTrailLog = {
      id: `log-${Date.now()}`,
      timestamp: `${new Date().toLocaleDateString('id-ID')} ${timeStr}`,
      user: userProfile.name,
      role: userProfile.role,
      action: `Kirim Laporan ${userProfile.role === 'mixologist' ? 'Mixologist Bar' : 'Commis'}`,
      details: `Laporan ${reportCode} diserahkan (${completedItems.length}/${activeList.length} selesai)${deviationReason ? ` - Catatan Deviasi: "${deviationReason}"` : ''}`,
      statusType: deviationReason ? 'warning' : 'info'
    };

    setAuditLogs((prev) => {
      const updated = [newLog, ...prev];
      localStorage.setItem('xxi_audit_logs', JSON.stringify(updated));
      return updated;
    });

    showToast('Laporan harian berhasil dikirim ke Supervisor Hub!', 'success');
  };

  // Supervisor Verify Report
  const handleVerifyReport = (id: string, signatureDataUrl: string, notes: string) => {
    let reportCode = '';
    let submittedBy = '';
    setReports((prev) => {
      const updated = prev.map((r) => {
        if (r.id === id) {
          reportCode = r.reportCode;
          submittedBy = r.submittedBy;
          return {
            ...r,
            status: 'Approved' as const,
            spvSignature: signatureDataUrl,
            spvNotes: notes,
            verifiedAt: new Date().toLocaleTimeString('id-ID') + ' WIB'
          };
        }
        return r;
      });
      localStorage.setItem('xxi_spv_reports', JSON.stringify(updated));
      return updated;
    });

    const timeStr = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';
    const newLog: AuditTrailLog = {
      id: `log-${Date.now()}`,
      timestamp: `${new Date().toLocaleDateString('id-ID')} ${timeStr}`,
      user: userProfile.name,
      role: 'supervisor',
      action: 'ACC / Persetujuan Laporan',
      details: `Menyetujui (ACC) laporan ${reportCode} dari ${submittedBy}${notes ? ` - Catatan SPV: "${notes}"` : ''}`,
      statusType: 'approval'
    };

    setAuditLogs((prev) => {
      const updated = [newLog, ...prev];
      localStorage.setItem('xxi_audit_logs', JSON.stringify(updated));
      return updated;
    });

    showToast('Laporan disetujui & ditandatangani!', 'success');
  };

  const handleRejectReport = (id: string, notes: string) => {
    let reportCode = '';
    setReports((prev) => {
      const updated = prev.map((r) => {
        if (r.id === id) {
          reportCode = r.reportCode;
          return { ...r, status: 'Rejected' as const, spvNotes: notes };
        }
        return r;
      });
      localStorage.setItem('xxi_spv_reports', JSON.stringify(updated));
      return updated;
    });

    const timeStr = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';
    const newLog: AuditTrailLog = {
      id: `log-${Date.now()}`,
      timestamp: `${new Date().toLocaleDateString('id-ID')} ${timeStr}`,
      user: userProfile.name,
      role: 'supervisor',
      action: 'Pengembalian / Penolakan Laporan',
      details: `Mengembalikan laporan ${reportCode} ke staf - Catatan: "${notes}"`,
      statusType: 'warning'
    };

    setAuditLogs((prev) => {
      const updated = [newLog, ...prev];
      localStorage.setItem('xxi_audit_logs', JSON.stringify(updated));
      return updated;
    });

    showToast('Laporan dikembalikan ke staf untuk perbaikan', 'warning');
  };

  const pendingSpvCount = reports.filter((r) => r.status === 'Pending').length;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#080c14] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <ToastContainer toasts={toasts} onDismiss={handleDismissToast} />

      {/* HEADER */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabSwitch}
        userProfile={userProfile}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        pendingSpvCount={pendingSpvCount}
      />

      {/* MAIN CONTAINER (ALLOW NATURAL SCROLLING, NO Overflow-hidden or Restricted Max Heights) */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4">
        
        {/* LOCKED ACTIVE USER SESSION STATUS BAR */}
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-3.5 sm:p-4 shadow-xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-lg shrink-0">
                <i className="fa-solid fa-user-lock" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xs sm:text-sm font-black text-white font-mono-code uppercase tracking-wide">
                    AKSES USER XXI TERKUNCI
                  </h3>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-500/40 flex items-center gap-1 font-mono-code">
                    <i className="fa-solid fa-shield-halved text-emerald-400" /> Sesi Terkunci
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Pengguna Aktif: <strong className="text-amber-300">{userProfile.name}</strong> • Workstation: <span className="text-slate-200 font-bold uppercase">{userProfile.role === 'mixologist' ? 'Mixologist Bar' : userProfile.role === 'supervisor' ? 'Supervisor SPV' : userProfile.role === 'manager' ? 'F&B Area Manager' : 'Commis Kitchen'}</span> • Outlet: <span className="text-sky-300 font-bold">{userProfile.outlet}</span>
                </p>
              </div>
            </div>

            {/* RE-AUTHENTICATE / LOGOUT BUTTON */}
            <button
              type="button"
              onClick={() => {
                setIsLoginModalOpen(true);
                showToast('Silakan verifikasi User ID & Password untuk beralih akun XXI', 'info');
              }}
              className="px-4 py-2.5 rounded-xl text-xs font-mono-code font-bold bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 transition-all flex items-center gap-2 shrink-0 self-stretch sm:self-auto justify-center"
              title="Buka Gateway Login XXI untuk Otentikasi Ulang"
            >
              <i className="fa-solid fa-right-to-bracket text-amber-400" />
              <span>Ganti ID / Logout (Login Gateway)</span>
            </button>
          </div>
        </div>

        {activeTab === 'operasional' && (
          <OperasionalMenu
            currentRole={userProfile.role}
            onChangeRole={handleWorkstationRoleChange}
            checklistItems={userProfile.role === 'mixologist' ? mixologistChecklist : commisChecklist}
            onToggleChecklistItem={handleToggleChecklistItem}
            onUpdateNotes={handleUpdateNotes}
            onViewDetailModal={(item) => setSelectedDetailItem(item)}
            onSubmitDailyReport={handleSubmitDailyReport}
            stockItems={stockItems}
            onUpdateStock={handleUpdateStock}
            cleaningTasks={cleaningTasks}
            onExecuteCleaningTask={handleExecuteCleaningTask}
          />
        )}

        {activeTab === 'learning' && (
          <LearningCenter
            documents={SOP_DOCUMENTS}
            onOpenDocViewer={(doc) => setSelectedSopDoc(doc)}
            onDownloadDoc={(title) => showToast(`Mengunduh berkas PDF: ${title}`, 'success')}
          />
        )}

        {activeTab === 'supervisor' && (
          <SupervisorHub
            reports={reports}
            auditLogs={auditLogs}
            onVerifyReport={handleVerifyReport}
            onRejectReport={handleRejectReport}
          />
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950/80 text-slate-500 py-4 px-4 text-center text-xs font-mono-code mb-16 md:mb-0">
        <p>
          <strong className="text-amber-400">CINEMA XXI</strong> • Visual Standard Operating Procedure (VISOP) Portal v3.0
        </p>
        <p className="text-[10px] text-slate-600 mt-0.5">
          Dedicated for Commis & Mixologist • {userProfile.outlet}
        </p>
      </footer>

      {/* MOBILE BOTTOM NAVIGATION */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={handleTabSwitch}
        pendingSpvCount={pendingSpvCount}
      />

      {/* MODALS */}
      <SecurityPinModal
        isOpen={isPinModalOpen}
        onClose={() => setIsPinModalOpen(false)}
        targetRole={securityTargetRole}
        currentUserName={userProfile.name}
        onSuccess={(authProfile) => {
          if (authProfile) {
            setUserProfile({
              name: authProfile.name,
              role: authProfile.role,
              outlet: authProfile.outlet
            });
          } else {
            setUserProfile((prev) => ({ ...prev, role: securityTargetRole }));
          }
          if (securityTargetRole === 'supervisor' || securityTargetRole === 'manager') {
            setActiveTab('supervisor');
          }
          showToast('Otorisasi PIN Berhasil! Hak Akses Terverifikasi.', 'success');
        }}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        currentUser={userProfile}
        onLoginSuccess={(prof) => {
          setUserProfile(prof);
          if (prof.role === 'supervisor' || prof.role === 'manager') {
            setActiveTab('supervisor');
          } else {
            setActiveTab('operasional');
          }
          showToast(`Login berhasil! Sesi aktif: ${prof.name} (${prof.role.toUpperCase()})`, 'success');
        }}
      />

      <SopDetailModal
        item={selectedDetailItem}
        onClose={() => setSelectedDetailItem(null)}
      />

      <SopDocumentViewerModal
        doc={selectedSopDoc}
        onClose={() => setSelectedSopDoc(null)}
        onDownload={(title) => showToast(`Mengunduh berkas PDF: ${title}`, 'success')}
      />
    </div>
  );
}
