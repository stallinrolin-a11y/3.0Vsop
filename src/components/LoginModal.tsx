import React, { useState } from 'react';
import { Role, UserProfile } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile;
  onLoginSuccess: (profile: UserProfile) => void;
}

// User Database mapping for backend auto-detection
const REGISTERED_USERS: Record<string, { pin: string[]; name: string; role: Role; outlet: string }> = {
  admin: {
    pin: ['123', 'admin', 'xxi123', '1234'],
    name: 'Administrator XXI',
    role: 'manager',
    outlet: 'Cafe Empire'
  },
  'xxi-commis-8801': {
    pin: ['xxi123', '8801', '123', '1234'],
    name: 'Rian Sukma',
    role: 'commis',
    outlet: 'Cafe Empire'
  },
  'xxi-bar-9021': {
    pin: ['xxi123', '9021', '123', '1234'],
    name: 'Bayu Mixologist',
    role: 'mixologist',
    outlet: 'Cafe Empire'
  },
  'xxi-spv-1002': {
    pin: ['xxi123', '1002', '123', '1234'],
    name: 'Hendra SPV XXI',
    role: 'supervisor',
    outlet: 'Cafe Empire'
  },
  'xxi-mgt-0001': {
    pin: ['xxi123', '0001', '123', '1234'],
    name: 'Amanda Manager',
    role: 'manager',
    outlet: 'Cafe Empire'
  }
};

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLoginSuccess
}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanUser = userId.trim().toLowerCase();
    const cleanPass = password.trim().toLowerCase();

    if (!cleanUser) {
      setErrorMessage('User ID / NIK Employee wajib diisi');
      return;
    }
    if (!cleanPass) {
      setErrorMessage('Password Akses XXI wajib diisi');
      return;
    }

    // Check in registered users database
    const userAccount = REGISTERED_USERS[cleanUser];

    if (userAccount) {
      if (!userAccount.pin.includes(cleanPass)) {
        setErrorMessage('Password yang Anda masukkan salah!');
        return;
      }
      // Auto-detect role & outlet, redirect seamlessly
      onLoginSuccess({
        name: userAccount.name,
        role: userAccount.role,
        outlet: userAccount.outlet
      });
      onClose();
      return;
    }

    // Dynamic user detection for custom User IDs
    if (cleanPass.length < 3) {
      setErrorMessage('Password minimal 3 karakter');
      return;
    }

    // Auto detect role based on User ID keywords if custom ID
    let detectedRole: Role = 'commis';
    if (cleanUser.includes('spv') || cleanUser.includes('super')) {
      detectedRole = 'supervisor';
    } else if (cleanUser.includes('mgt') || cleanUser.includes('mgr') || cleanUser.includes('manager') || cleanUser.includes('admin')) {
      detectedRole = 'manager';
    } else if (cleanUser.includes('bar') || cleanUser.includes('mix')) {
      detectedRole = 'mixologist';
    }

    const detectedName = userId.trim().charAt(0).toUpperCase() + userId.trim().slice(1);

    onLoginSuccess({
      name: detectedName,
      role: detectedRole,
      outlet: 'Cafe Empire'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="xxi-glass rounded-3xl max-w-sm w-full p-6 sm:p-8 space-y-6 border border-amber-500/40 shadow-2xl relative my-auto">
        
        {/* HEADER BRANDING */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-slate-950 border-2 border-amber-500/80 p-1 shadow-2xl flex items-center justify-center mx-auto relative group">
            <div className="w-full h-full bg-gradient-to-br from-amber-500/30 via-amber-600/10 to-slate-950 rounded-xl flex items-center justify-center text-amber-400 font-black text-2xl gap-1">
              <i className="fa-solid fa-key text-amber-300 text-base" />
              <span className="font-mono-code text-amber-300 tracking-wider">XXI</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-black text-white font-mono-code tracking-wide">
              CINEMA XXI <span className="xxi-gold-text">CAFÉ</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Masuk untuk Mengakses Workstation Operasional
            </p>
          </div>
        </div>

        {/* ERROR ALERT IF ANY */}
        {errorMessage && (
          <div className="bg-rose-500/20 border border-rose-500/50 p-3 rounded-xl flex items-center gap-2 text-rose-300 text-xs font-mono-code animate-shake">
            <i className="fa-solid fa-circle-xmark text-rose-400 text-sm shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* MINIMALIST FORM INPUTS - ONLY USER ID & PASSWORD */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* USER ID INPUT */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 font-mono-code block">
              User ID / NIK Employee
            </label>
            <div className="relative">
              <i className="fa-solid fa-user text-slate-500 absolute left-3.5 top-3.5 text-xs" />
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Masukkan NIK / User ID..."
                autoFocus
                required
                className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 text-amber-300 font-mono-code text-xs font-bold rounded-xl p-3 pl-9 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* PASSWORD INPUT */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 font-mono-code block">
              Password Akses
            </label>
            <div className="relative">
              <i className="fa-solid fa-lock text-slate-500 absolute left-3.5 top-3.5 text-xs" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan Password..."
                required
                className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 text-white font-mono-code text-xs rounded-xl p-3 pl-9 pr-9 focus:outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-slate-400 hover:text-white text-xs"
              >
                <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
              </button>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl xxi-gold-gradient text-slate-950 font-black text-xs font-mono-code uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-right-to-bracket text-sm" />
              <span>MASUK PORTAL XXI</span>
            </button>
          </div>

        </form>

        {/* ELEGANT MINIMALIST HELPER FOOTNOTE */}
        <div className="pt-2 border-t border-slate-800/80 text-center space-y-1">
          <p className="text-[11px] font-mono-code text-slate-400">
            <i className="fa-solid fa-circle-info text-amber-400/80 mr-1" />
            Akses Demo Testing:
          </p>
          <div className="flex items-center justify-center gap-2 text-[10px] font-mono-code text-amber-300/90">
            <button
              type="button"
              onClick={() => { setUserId('admin'); setPassword('123'); }}
              className="px-2 py-0.5 rounded bg-slate-900 border border-amber-500/30 hover:border-amber-400 hover:bg-slate-800 transition-all"
            >
              Admin: <strong className="text-white">admin / 123</strong>
            </button>
            <button
              type="button"
              onClick={() => { setUserId('XXI-COMMIS-8801'); setPassword('xxi123'); }}
              className="px-2 py-0.5 rounded bg-slate-900 border border-amber-500/30 hover:border-amber-400 hover:bg-slate-800 transition-all"
            >
              Commis: <strong className="text-white">XXI-COMMIS-8801 / xxi123</strong>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
