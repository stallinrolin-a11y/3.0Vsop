import React, { useState } from 'react';
import { Role, StockItem } from '../../types';

export interface StockHarianProps {
  currentRole: Role;
  stockItems: StockItem[];
  onUpdateStock: (id: string, newUsed: number, newStart?: number) => void;
}

export const StockHarian: React.FC<StockHarianProps> = ({
  currentRole,
  stockItems,
  onUpdateStock
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [editingItem, setEditingItem] = useState<StockItem | null>(null);
  const [startValue, setStartValue] = useState<number>(0);
  const [usedValue, setUsedValue] = useState<number>(0);

  const roleFiltered = stockItems.filter((item) =>
    currentRole === 'mixologist' ? item.code.includes('BAR') : item.code.includes('KIT')
  );

  const finalFiltered = roleFiltered.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenEdit = (item: StockItem) => {
    setEditingItem(item);
    setStartValue(item.startStock);
    setUsedValue(item.usedStock);
  };

  const handleSaveEdit = () => {
    if (editingItem) {
      onUpdateStock(editingItem.id, Number(usedValue), Number(startValue));
      setEditingItem(null);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-white font-mono-code flex items-center gap-2">
            <i className="fa-solid fa-boxes-stacked text-amber-400" />
            Stock Opname Harian ({currentRole === 'mixologist' ? 'Mixologist Bar' : 'Kitchen & Prep'})
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Pencatatan stok awal manual, jumlah terpakai, dan sisa stok bahan XXI.
          </p>
        </div>

        <div className="px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono-code font-bold flex items-center gap-2">
          <i className="fa-solid fa-cube text-amber-400" />
          <span>Total {roleFiltered.length} Bahan Terdata</span>
        </div>
      </div>

      {/* Search Input */}
      <div className="flex items-center gap-2">
        <div className="relative w-full">
          <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-slate-500 text-xs" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama bahan, tray, sosis, fish dory, dll..."
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:border-amber-500/50"
          />
        </div>
      </div>

      {/* Stock Table */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto touch-scroll">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/90 text-slate-400 font-mono-code uppercase text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-3.5">Nama Bahan / Item</th>
                <th className="p-3.5">Stok Awal (Input Manual)</th>
                <th className="p-3.5">Terpakai</th>
                <th className="p-3.5">Sisa Stok</th>
                <th className="p-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-200">
              {finalFiltered.map((item) => {
                return (
                  <tr key={item.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-3.5">
                      <div className="font-bold text-white text-sm">{item.name}</div>
                      <div className="text-[10px] text-slate-500 font-mono-code">
                        {item.code} • {item.category}
                      </div>
                    </td>
                    <td className="p-3.5 font-mono-code font-bold text-sky-400">
                      {item.startStock} {item.unit}
                    </td>
                    <td className="p-3.5 font-mono-code text-rose-400 font-bold">
                      {item.usedStock} {item.unit}
                    </td>
                    <td className="p-3.5 font-mono-code font-bold text-emerald-400 text-sm">
                      {item.currentStock} {item.unit}
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => handleOpenEdit(item)}
                        className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-700 rounded-xl text-xs font-mono-code font-bold transition-all shadow"
                      >
                        <i className="fa-solid fa-pen mr-1" /> Input / Update
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Quick Edit Stock */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3">
          <div className="xxi-glass rounded-3xl max-w-sm w-full p-5 space-y-4 border border-amber-500/40 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h4 className="text-xs font-bold text-amber-400 font-mono-code">Input Stok Awal & Terpakai</h4>
              <button onClick={() => setEditingItem(null)} className="text-slate-400 hover:text-white">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <div className="space-y-1">
              <p className="text-base font-bold text-white">{editingItem.name}</p>
              <p className="text-xs text-slate-400 font-mono-code">{editingItem.code} • Satuan: <span className="text-amber-300">{editingItem.unit}</span></p>
            </div>

            <div className="space-y-3 pt-1">
              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-mono-code block font-bold">1. Stok Awal (Isi Manual):</label>
                <input
                  type="number"
                  min="0"
                  value={startValue}
                  onChange={(e) => setStartValue(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 text-sky-400 font-mono-code text-sm font-bold rounded-xl p-2.5 focus:outline-none focus:border-sky-500"
                  placeholder="Masukkan stok awal..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-mono-code block font-bold">2. Terpakai Hari Ini:</label>
                <input
                  type="number"
                  min="0"
                  value={usedValue}
                  onChange={(e) => setUsedValue(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 text-rose-400 font-mono-code text-sm font-bold rounded-xl p-2.5 focus:outline-none focus:border-amber-500"
                  placeholder="Masukkan jumlah terpakai..."
                />
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl text-[11px] font-mono-code flex items-center justify-between">
                <span className="text-slate-400">Kalkulasi Sisa Stok:</span>
                <span className="text-emerald-400 font-black text-sm">
                  {Math.max(0, startValue - usedValue)} {editingItem.unit}
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setEditingItem(null)}
                className="px-3.5 py-2 bg-slate-800 text-slate-300 text-xs rounded-xl font-mono-code"
              >
                Batal
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono-code font-bold text-xs rounded-xl shadow transition-all"
              >
                Simpan Stok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
