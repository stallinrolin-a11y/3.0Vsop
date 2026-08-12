import React, { useState } from 'react';
import { Role } from '../types';

interface SecurityPinModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetRole: Role;
  currentUserName?: string;
  onSuccess: (authenticatedUser?: { name: string; role: Role; outlet: string }) => void;
}

export const SecurityPinModal: React.FC<SecurityPinModalProps> = ({
  isOpen,
  onClose,
  targetRole,
  currentUserName,
  onSuccess
}) => {
  const [pin, setPin] = useState('');
  const [customName, setCustomName] = useState(currentUserName || '');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPin, setShowPin] = useState(false);

  if (!isOpen) return null;

  const roleTitle =
    targetRole === 'supervisor'
      ? 'SUPERVISOR SPV XXI'
      : targetRole === 'manager'
      ? 'F&B AREA MANAGER'
      : targetRole === 'mixologist'
      ? 'MIXOLOGIST BAR MASTER'
      : 'COMMIS KITCHEN';

  const defaultDemoPin =
    targetRole === 'supervisor'
      ? '1002'
      : targetRole === 'manager'
      ? '0001'
      : targetRole === 'mixologist'
      ? '9021'
      : '8801';

  const resolvedName = customName.trim() || currentUserName?.trim() || `Staf ${roleTitle}`;

  const performVerify = (inputPin: string) => {
    setErrorMessage('');
    const cleanPin = inputPin.trim().toLowerCase();

    // Admin Master Override PINs
    if (cleanPin === '123' || cleanPin === 'admin') {
      onSuccess({
        name: resolvedName,
        role: targetRole,
        outlet: 'Cafe Empire'
      });
      setPin('');
      onClose();
      return;
    }

    if (targetRole === 'supervisor' || targetRole === 'manager') {
      if (cleanPin === '1002' || cleanPin === '0001' || cleanPin === 'xxi123' || cleanPin === '1234') {
        onSuccess({
          name: resolvedName,
          role: targetRole,
          outlet: 'Cafe Empire'
        });
        setPin('');
        onClose();
        return;
      }
    } else if (targetRole === 'mixologist') {
      if (cleanPin === '9021' || cleanPin === 'xxi123' || cleanPin === '1234') {
        onSuccess({
          name: resolvedName,
          role: 'mixologist',
          outlet: 'Cafe Empire'
        });
        setPin('');
        onClose();
        return;
      }
    } else if (targetRole === 'commis') {
      if (cleanPin === '8801' || cleanPin === 'xxi123' || cleanPin === '1234') {
        onSuccess({
          name: resolvedName,
          role: 'commis',
          outlet: 'Cafe Empire'
        });
        setPin('');
        onClose();
        return;
      }
    }

    setErrorMessage(`PIN / Password Otorisasi ${roleTitle} Salah! Akses Ditolak.`);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    performVerify(pin);
  };

  const handleNumpadClick = (num: string) => {
    setErrorMessage('');
    if (pin.length < 10) {
      setPin((prev) => prev + num);
    }
  };

  const handleNumpadDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  const handleQuickFillDemo = () => {
    setPin(defaultDemoPin);
    performVerify(defaultDemoPin);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="xxi-glass rounded-3xl max-w-md w-full p-5 sm:p-7 space-y-5 border border-rose-500/50 shadow-2xl relative my-auto animate-in fade-in zoom-in duration-200">
        
        {/* HEADER ICON */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-slate-950 border-2 border-rose-500 p-1 shadow-2xl flex items-center justify-center mx-auto relative group">
            <div className="w-full h-full bg-gradient-to-br from-rose-500/30 via-rose-600/10 to-slate-950 rounded-xl flex items-center justify-center text-rose-400 text-xl">
              <i className="fa-solid fa-user-lock animate-bounce" />
            </div>
          </div>

          <div>
            <span className="bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-mono-code font-bold px-2.5 py-0.5 rounded-full uppercase">
              Akses Terproteksi XXI
            </span>
            <h2 className="text-base sm:text-lg font-black text-white font-mono-code mt-1">
              OTORISASI {roleTitle}
            </h2>
            <p className="text-[11px] text-slate-400">
              Perpindahan ke Workstation {roleTitle} membutuhkan PIN verifikasi resmi.
            </p>
          </div>
        </div>

        {/* ERROR MESSAGE IF ANY */}
        {errorMessage && (
          <div className="bg-rose-500/20 border border-rose-500/60 p-2.5 rounded-xl flex items-center gap-2 text-rose-200 text-xs font-mono-code animate-shake">
            <i className="fa-solid fa-circle-xmark text-rose-400 text-sm shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* STRICT SECURITY NOTICE */}
        <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-3 text-center">
          <p className="text-[11px] font-mono-code text-rose-300 flex items-center justify-center gap-1.5">
            <i className="fa-solid fa-shield-halved text-rose-400 text-xs" />
            <span>Verifikasi Wajib: Masukkan PIN Otorisasi <strong className="text-white font-bold">{roleTitle}</strong> untuk melanjutkan</span>
          </p>
        </div>

        {/* PIN FORM WITH DISPLAY */}
        <form onSubmit={handleVerify} className="space-y-3.5">
          {/* CUSTOM NAME FIELD */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-300 font-mono-code flex items-center justify-between">
              <span>Nama Lengkap Anda (Bebas Diisi):</span>
              <span className="text-[10px] text-amber-400 font-normal">Opsional</span>
            </label>
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder={`Masukkan nama Anda (misal: ${targetRole === 'commis' ? 'Ahmad Sukma' : targetRole === 'mixologist' ? 'Rian Mixologist' : 'Hendra SPV'})...`}
              className="w-full bg-slate-950 border border-slate-700 text-white font-mono-code text-xs rounded-xl p-2.5 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-amber-400 font-mono-code block text-center">
              Password / PIN Otorisasi ({targetRole.toUpperCase()}):
            </label>
            <div className="relative max-w-xs mx-auto">
              <input
                type={showPin ? 'text' : 'password'}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Ketuk angka di bawah..."
                required
                className="w-full bg-slate-950 border-2 border-rose-500/70 text-amber-300 font-mono-code text-center text-xl font-black tracking-widest rounded-xl p-2.5 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/30"
              />
              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="absolute right-3 top-3.5 text-slate-400 hover:text-white text-xs"
                title="Tampilkan/Sembunyikan PIN"
              >
                <i className={`fa-solid ${showPin ? 'fa-eye-slash' : 'fa-eye'}`} />
              </button>
            </div>
          </div>

          {/* USER-FRIENDLY INTERACTIVE TOUCH NUMPAD */}
          <div className="max-w-xs mx-auto space-y-2">
            <div className="grid grid-cols-3 gap-2">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleNumpadClick(num)}
                  className="py-3 bg-slate-900 hover:bg-slate-800 active:bg-amber-500/30 text-white font-mono-code font-bold text-lg rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all shadow"
                >
                  {num}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPin('')}
                className="py-3 bg-slate-900/60 hover:bg-rose-500/20 text-rose-400 font-mono-code font-bold text-xs rounded-xl border border-slate-800 transition-all uppercase"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => handleNumpadClick('0')}
                className="py-3 bg-slate-900 hover:bg-slate-800 active:bg-amber-500/30 text-white font-mono-code font-bold text-lg rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all shadow"
              >
                0
              </button>
              <button
                type="button"
                onClick={handleNumpadDelete}
                className="py-3 bg-slate-900/60 hover:bg-amber-500/20 text-amber-400 font-mono-code font-bold text-sm rounded-xl border border-slate-800 transition-all"
              >
                <i className="fa-solid fa-backspace" />
              </button>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs font-mono-code transition-all"
            >
              Batal
            </button>
            <button
              type="submit"
              className="w-1/2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs font-mono-code uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5"
            >
              <i className="fa-solid fa-shield-halved" />
              <span>MASUK</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
