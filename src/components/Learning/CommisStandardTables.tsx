import React, { useState } from 'react';
import { SmartRecipeCalculator } from './SmartRecipeCalculator';
import {
  GRAMASI_BAHAN_COMMIS,
  EQUIPMENT_UTENSILS_COMMIS,
  COOKING_TIME_LIMITS,
  SPOIL_EXPIRY_LIST,
  POPCORN_RECIPES,
  EXTRA_POPCORN_GRAMMAGES,
  SAUCE_BATTER_RECIPES,
  STEP_PREPARE_LIST
} from '../../data/commisStandards';

export const CommisStandardTables: React.FC = () => {
  const [activeSection, setActiveSubTab] = useState<
    'calculator' | 'gramasi' | 'equipment' | 'prepare' | 'cooking' | 'spoil' | 'popcorn'
  >('calculator');

  const [searchQuery, setSearchQuery] = useState('');
  const [equipCategory, setEquipCategory] = useState<string>('All');

  // Filter Equipment
  const filteredEquipment = EQUIPMENT_UTENSILS_COMMIS.filter((item) => {
    const matchesCat = equipCategory === 'All' || item.category === equipCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.function.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Filter Gramasi
  const filteredGramasi = GRAMASI_BAHAN_COMMIS.filter((g) => {
    return (
      g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.notes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  // Filter Spoil
  const filteredSpoil = SPOIL_EXPIRY_LIST.filter((s) => {
    return (
      s.ingredient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.spoilDuration.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      {/* Sub-Tab Navigation for Commis Standards */}
      <div className="bg-slate-900/90 p-2 rounded-2xl border border-slate-800 flex items-center gap-1.5 overflow-x-auto custom-scrollbar">
        <button
          onClick={() => { setActiveSubTab('calculator'); setSearchQuery(''); }}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeSection === 'calculator'
              ? 'bg-amber-500 text-slate-950 shadow-lg font-black'
              : 'text-amber-400 hover:text-white bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30'
          }`}
        >
          <i className="fa-solid fa-calculator text-xs" />
          <span>🧮 Smart Recipe Calculator (Auto-Scale)</span>
        </button>

        <button
          onClick={() => { setActiveSubTab('gramasi'); setSearchQuery(''); }}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeSection === 'gramasi'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <i className="fa-solid fa-scale-balanced" />
          <span>1. Gramasi Bahan</span>
        </button>

        <button
          onClick={() => { setActiveSubTab('equipment'); setSearchQuery(''); }}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeSection === 'equipment'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <i className="fa-solid fa-kitchen-set" />
          <span>2. Equipment & Utensil (38 Alat)</span>
        </button>

        <button
          onClick={() => { setActiveSubTab('prepare'); setSearchQuery(''); }}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeSection === 'prepare'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <i className="fa-solid fa-list-check" />
          <span>3. Step Prepare (10 Langkah)</span>
        </button>

        <button
          onClick={() => { setActiveSubTab('cooking'); setSearchQuery(''); }}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeSection === 'cooking'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <i className="fa-solid fa-stopwatch" />
          <span>4. Durasi & Limit Masak</span>
        </button>

        <button
          onClick={() => { setActiveSubTab('spoil'); setSearchQuery(''); }}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeSection === 'spoil'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <i className="fa-solid fa-calendar-xmark" />
          <span>5. Spoil & Expiry Bahan</span>
        </button>

        <button
          onClick={() => { setActiveSubTab('popcorn'); setSearchQuery(''); }}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono-code font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeSection === 'popcorn'
              ? 'bg-amber-500 text-slate-950 shadow-lg'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <i className="fa-solid fa-bowl-food" />
          <span>6. Resep Popcorn & Saus</span>
        </button>
      </div>

      {/* SECTION 0: SMART RECIPE CALCULATOR */}
      {activeSection === 'calculator' && <SmartRecipeCalculator />}

      {/* Search Bar inside Standards */}
      {activeSection !== 'calculator' && (
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-slate-500 text-xs" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari dalam tabel standar XXI (misal: Sistagor, Sosis Vienna, Chiller, Glaze, Dory)..."
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:border-amber-500/50"
          />
        </div>
      )}

      {/* SECTION 1: GRAMASI BAHAN COMMIS */}
      {activeSection === 'gramasi' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white font-mono-code flex items-center gap-2">
              <i className="fa-solid fa-scale-balanced text-amber-400" />
              Tabel Standar Gramasi Bahan Commis XXI
            </h3>
            <span className="text-xs text-slate-400 font-mono-code">
              {filteredGramasi.length} Menu Terdaftar
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGramasi.map((menu) => (
              <div
                key={menu.id}
                className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 space-y-3 transition-all"
              >
                <div className="flex items-start justify-between border-b border-slate-900 pb-2.5">
                  <div>
                    <span className="text-[10px] font-mono-code font-bold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded">
                      {menu.category}
                    </span>
                    <h4 className="text-base font-black text-white font-mono-code mt-1">
                      {menu.name}
                    </h4>
                  </div>
                </div>

                {/* Portions */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono-code font-bold text-slate-400 uppercase">
                    Takaran / Portions:
                  </span>
                  <div className="grid grid-cols-1 gap-1">
                    {menu.portions.map((p, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900/80 px-3 py-1.5 rounded-lg text-xs font-mono-code flex items-center justify-between border border-slate-800/80"
                      >
                        <span className="font-bold text-amber-300 w-20 shrink-0">
                          {p.size}
                        </span>
                        <span className="text-slate-200 text-right">{p.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                {menu.notes.length > 0 && (
                  <div className="space-y-1 pt-1 border-t border-slate-900">
                    <span className="text-[10px] font-mono-code font-bold text-slate-500 uppercase">
                      Keterangan & Catatan Penyajian:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {menu.notes.map((note, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-amber-400 mt-0.5">•</span>
                          <span className="leading-snug">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: EQUIPMENT & UTENSILS COMMIS */}
      {activeSection === 'equipment' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-base font-bold text-white font-mono-code flex items-center gap-2">
              <i className="fa-solid fa-kitchen-set text-amber-400" />
              Equipment & Utensil Commis XXI (38 Alat)
            </h3>

            {/* Category Filter */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {['All', 'Equipment Utama', 'Mesin Popcorn', 'Utensil Potong & Masak', 'Kebersihan & Sanitasi'].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setEquipCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono-code font-bold transition-all ${
                      equipCategory === cat
                        ? 'bg-amber-500 text-slate-950'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="overflow-x-auto custom-scrollbar border border-slate-800 rounded-2xl bg-slate-950">
            <table className="w-full text-left text-xs font-mono-code">
              <thead className="bg-slate-900/90 text-slate-300 border-b border-slate-800 uppercase text-[10px] font-bold">
                <tr>
                  <th className="py-3 px-3 w-12 text-center">No</th>
                  <th className="py-3 px-4 w-52">Nama Alat</th>
                  <th className="py-3 px-3 w-40">Kategori</th>
                  <th className="py-3 px-4">Kegunaan / Standar Penggunaan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {filteredEquipment.map((eq) => (
                  <tr key={eq.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-2.5 px-3 text-center text-slate-500 font-bold">
                      {eq.id}
                    </td>
                    <td className="py-2.5 px-4 font-bold text-amber-300">
                      {eq.name}
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="text-[10px] bg-slate-900 text-slate-400 border border-slate-800 px-2 py-0.5 rounded">
                        {eq.category}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-slate-300 leading-relaxed">
                      {eq.function}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SECTION 3: STEP PREPARE OPERASIONAL */}
      {activeSection === 'prepare' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white font-mono-code flex items-center gap-2">
              <i className="fa-solid fa-list-check text-amber-400" />
              Langkah Prepare Opening & Operational XXI (10 Step Matrix)
            </h3>
          </div>

          <div className="space-y-3">
            {STEP_PREPARE_LIST.map((step) => (
              <div
                key={step.stepNo}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2.5 hover:border-amber-500/30 transition-all"
              >
                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold font-mono-code flex items-center justify-center text-xs">
                      #{step.stepNo}
                    </span>
                    <h4 className="font-bold text-white font-mono-code text-xs uppercase">
                      Langkah Prepare Ke-{step.stepNo}
                    </h4>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono-code">Standard Operating Procedure XXI</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Popcorn Column */}
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-bold text-amber-400 font-mono-code uppercase flex items-center gap-1">
                      <i className="fa-solid fa-bowl-food" /> Prepare Popcorn:
                    </span>
                    <p className="text-xs text-slate-200 font-mono-code leading-relaxed">
                      {step.popcornStep}
                    </p>
                  </div>

                  {/* Commis Column */}
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-bold text-sky-400 font-mono-code uppercase flex items-center gap-1">
                      <i className="fa-solid fa-utensils" /> Prepare Commis:
                    </span>
                    <p className="text-xs text-slate-200 font-mono-code leading-relaxed">
                      {step.commisStep}
                    </p>
                  </div>
                </div>

                {step.safetyImportantNote && (
                  <div className="bg-rose-500/10 border border-rose-500/30 p-2.5 rounded-xl flex items-start gap-2 text-rose-300 text-xs font-mono-code">
                    <i className="fa-solid fa-triangle-exclamation text-rose-400 mt-0.5 shrink-0" />
                    <span><strong>PENTING:</strong> {step.safetyImportantNote}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 4: DURASI & LIMIT MASAK */}
      {activeSection === 'cooking' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white font-mono-code flex items-center gap-2">
              <i className="fa-solid fa-stopwatch text-amber-400" />
              Durasi Masak, Suhu, & Limit Porsi Per Batch
            </h3>
          </div>

          <div className="overflow-x-auto custom-scrollbar border border-slate-800 rounded-2xl bg-slate-950">
            <table className="w-full text-left text-xs font-mono-code">
              <thead className="bg-slate-900/90 text-slate-300 border-b border-slate-800 uppercase text-[10px] font-bold">
                <tr>
                  <th className="py-3 px-3 w-12 text-center">No</th>
                  <th className="py-3 px-4 font-bold">Bahan / Menu</th>
                  <th className="py-3 px-4 text-center">Durasi Pemasakan</th>
                  <th className="py-3 px-4 text-center">Suhu Ideal</th>
                  <th className="py-3 px-4 text-center">Limit Masak Per Batch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {COOKING_TIME_LIMITS.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-3 px-3 text-center text-slate-500 font-bold">
                      {item.id}
                    </td>
                    <td className="py-3 px-4 font-bold text-amber-300">
                      {item.item}
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-emerald-400">
                      {item.duration}
                    </td>
                    <td className="py-3 px-4 text-center text-sky-300 font-bold">
                      {item.temperature}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-300">
                      <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">
                        {item.limitPerBatch}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SECTION 5: SPOIL & EXPIRY BAHAN BAKU */}
      {activeSection === 'spoil' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white font-mono-code flex items-center gap-2">
              <i className="fa-solid fa-calendar-xmark text-amber-400" />
              Durasi Spoil & Thawing Bahan Baku
            </h3>
            <span className="text-xs text-slate-400 font-mono-code">
              {filteredSpoil.length} Bahan
            </span>
          </div>

          <div className="overflow-x-auto custom-scrollbar border border-slate-800 rounded-2xl bg-slate-950">
            <table className="w-full text-left text-xs font-mono-code">
              <thead className="bg-slate-900/90 text-slate-300 border-b border-slate-800 uppercase text-[10px] font-bold">
                <tr>
                  <th className="py-3 px-3 w-12 text-center">No</th>
                  <th className="py-3 px-4 font-bold">Bahan-Bahan</th>
                  <th className="py-3 px-4 text-center">Durasi Spoil / Expiry</th>
                  <th className="py-3 px-4 text-center">Keterangan / Lokasi</th>
                  <th className="py-3 px-4 text-center">Metode Thawing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {filteredSpoil.map((sp) => (
                  <tr key={sp.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-3 px-3 text-center text-slate-500 font-bold">
                      {sp.id}
                    </td>
                    <td className="py-3 px-4 font-bold text-amber-300">
                      {sp.ingredient}
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-rose-400">
                      {sp.spoilDuration}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-300">
                      <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800 text-[11px]">
                        {sp.location}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center text-slate-400 italic">
                      {sp.thawingNote || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SECTION 6: RESEP POPCORN & SAUS / ADONAN */}
      {activeSection === 'popcorn' && (
        <div className="space-y-6">
          {/* Popcorn Recipes Grid */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white font-mono-code flex items-center gap-2">
              <i className="fa-solid fa-bowl-food text-amber-400" />
              Resep Pembuatan Popcorn XXI (32 oz Machines)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {POPCORN_RECIPES.map((rec) => (
                <div
                  key={rec.id}
                  className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 space-y-3 transition-all"
                >
                  <div className="border-b border-slate-900 pb-2">
                    <span className="text-[10px] font-mono-code font-bold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded">
                      {rec.machineType}
                    </span>
                    <h4 className="text-sm font-bold text-white font-mono-code mt-1">
                      {rec.title}
                    </h4>
                  </div>

                  <div className="space-y-1.5">
                    {rec.ingredients.map((ing, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-xs font-mono-code bg-slate-900/70 px-3 py-1.5 rounded-lg border border-slate-800/80"
                      >
                        <span className="text-slate-300">{ing.name}</span>
                        <span className="font-bold text-amber-300">{ing.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sauces & Wet Batter Recipes */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white font-mono-code flex items-center gap-2">
              <i className="fa-solid fa-flask text-amber-400" />
              Resep Spicy Mayo & Adonan Basah Fish & Chips
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SAUCE_BATTER_RECIPES.map((sb, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3"
                >
                  <h4 className="text-sm font-bold text-white font-mono-code border-b border-slate-900 pb-2">
                    {sb.name}
                  </h4>

                  <div className="space-y-1.5">
                    {sb.ingredients.map((ing, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs font-mono-code bg-slate-900/70 px-3 py-1.5 rounded-lg border border-slate-800/80"
                      >
                        <span className="text-slate-300">{ing.ingredient}</span>
                        <span className="font-bold text-amber-300">{ing.amount}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] text-slate-400 font-mono-code italic pt-1 border-t border-slate-900">
                    * Catatan Simpan: {sb.spoilNote}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Extra Popcorn Grammage Table */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white font-mono-code flex items-center gap-2">
              <i className="fa-solid fa-list-ol text-amber-400" />
              Gramasi Extra Popcorn per Ukuran Saji
            </h3>

            <div className="overflow-x-auto custom-scrollbar border border-slate-800 rounded-2xl bg-slate-950">
              <table className="w-full text-left text-xs font-mono-code">
                <thead className="bg-slate-900/90 text-slate-300 border-b border-slate-800 uppercase text-[10px] font-bold">
                  <tr>
                    <th className="py-3 px-4 font-bold">Nama Produk Popcorn</th>
                    <th className="py-3 px-4 text-right font-bold">Gramatur (GR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-200">
                  {EXTRA_POPCORN_GRAMMAGES.map((ep, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                      <td className="py-2.5 px-4 font-bold text-slate-200">
                        {ep.productName}
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-amber-300">
                        {ep.grammage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
