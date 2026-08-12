import React from 'react';

export interface ToastMessage {
  id: string;
  title: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 sm:top-24 right-3 sm:right-4 z-[100] flex flex-col gap-2.5 max-w-xs sm:max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let borderClass = 'border-amber-500/80 text-amber-200';
        let icon = 'fa-info-circle text-amber-400';

        if (toast.type === 'success') {
          borderClass = 'border-emerald-500/80 text-emerald-200';
          icon = 'fa-circle-check text-emerald-400';
        } else if (toast.type === 'warning') {
          borderClass = 'border-amber-400/80 text-amber-200';
          icon = 'fa-triangle-exclamation text-amber-400';
        } else if (toast.type === 'error') {
          borderClass = 'border-rose-500/80 text-rose-200';
          icon = 'fa-circle-xmark text-rose-400';
        }

        return (
          <div
            key={toast.id}
            className={`p-3.5 rounded-2xl bg-slate-950/95 border ${borderClass} shadow-2xl backdrop-blur-md flex items-center justify-between gap-3 pointer-events-auto transition-all animate-in fade-in slide-in-from-top-2`}
          >
            <div className="flex items-center gap-2.5">
              <i className={`fa-solid ${icon} text-base shrink-0`} />
              <p className="text-xs font-bold font-mono-code leading-tight">{toast.title}</p>
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              className="text-slate-400 hover:text-white text-xs p-1 rounded-lg"
              aria-label="Close notification"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
