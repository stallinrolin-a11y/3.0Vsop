import React, { useState } from 'react';
import { Role, CleaningTask } from '../../types';

interface GeneralCleaningProps {
  currentRole: Role;
  cleaningTasks: CleaningTask[];
  onExecuteTask: (id: string) => void;
}

export const GeneralCleaning: React.FC<GeneralCleaningProps> = ({
  currentRole,
  cleaningTasks,
  onExecuteTask
}) => {
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);

  const filteredTasks = cleaningTasks.filter((task) =>
    currentRole === 'mixologist'
      ? task.assignedTo.toLowerCase().includes('mixologist')
      : (task.assignedTo.toLowerCase().includes('commis') || task.assignedTo.toLowerCase().includes('commies'))
  );

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-white font-mono-code flex items-center gap-2">
            <i className="fa-solid fa-broom text-amber-400" />
            General Cleaning Protocol ({currentRole === 'mixologist' ? 'Bar Area' : 'Kitchen Area'})
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Jadwal pembersihan berkala, sanitasi peralatan berat, dan bahan kimia standar sanitasi XXI.
          </p>
        </div>
      </div>

      {/* Task Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredTasks.map((task) => {
          const isCompleted = task.status === 'Completed' || task.status === 'Verified';
          const isExpanded = expandedTaskId === task.id;

          return (
            <div
              key={task.id}
              className={`p-4 rounded-2xl border transition-all space-y-3 ${
                isCompleted
                  ? 'bg-emerald-950/20 border-emerald-500/30'
                  : 'bg-slate-950 border-slate-800 hover:border-amber-500/30'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-0.5">
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-800 text-[10px] font-mono-code font-bold">
                    {task.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-mono-code pt-1">
                    {task.title}
                  </h4>
                </div>

                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono-code font-bold border shrink-0 ${
                    isCompleted
                      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                      : 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                  }`}
                >
                  {task.status}
                </span>
              </div>

              <div className="space-y-1 text-xs text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                <p className="flex items-center gap-1.5 text-[11px]">
                  <i className="fa-solid fa-screwdriver-wrench text-slate-400 w-4" />
                  <span><strong>Peralatan:</strong> {task.equipment}</span>
                </p>
                <p className="flex items-center gap-1.5 text-[11px]">
                  <i className="fa-solid fa-flask text-sky-400 w-4" />
                  <span><strong>Bahan Kimia Sanitasi:</strong> {task.chemicalUsed}</span>
                </p>
                <p className="flex items-center gap-1.5 text-[11px] text-amber-300">
                  <i className="fa-solid fa-calendar-days text-amber-400 w-4" />
                  <span><strong>Jadwal:</strong> {task.schedule}</span>
                </p>
              </div>

              {/* Detailed Procedure / Preparation Accordion if available */}
              {(task.preparation || task.procedureSteps) && (
                <div className="border-t border-slate-800/80 pt-2">
                  <button
                    onClick={() => setExpandedTaskId(isExpanded ? null : task.id)}
                    className="flex items-center justify-between w-full text-left text-[11px] font-mono-code font-bold text-amber-400 hover:text-amber-300 py-1"
                  >
                    <span className="flex items-center gap-1.5">
                      <i className="fa-solid fa-[#fa-list-check] fa-list-check" />
                      {isExpanded ? 'Sembunyikan Petunjuk Langkah Pembersihan' : 'Lihat Petunjuk & Langkah Pembersihan'}
                    </span>
                    <i className={`fa-solid fa-chevron-${isExpanded ? 'up' : 'down'} text-xs`} />
                  </button>

                  {isExpanded && (
                    <div className="mt-2 space-y-3 p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-xs">
                      {task.preparation && (
                        <div className="space-y-1.5">
                          <p className="font-bold text-amber-300 text-[11px] font-mono-code flex items-center gap-1.5">
                            <i className="fa-solid fa-box-open text-amber-400" />
                            Persiapan Alat & Bahan:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px] pl-1">
                            {task.preparation.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {task.procedureSteps && (
                        <div className="space-y-1.5 pt-1 border-t border-slate-800/80">
                          <p className="font-bold text-amber-300 text-[11px] font-mono-code flex items-center gap-1.5">
                            <i className="fa-solid fa-list-ol text-amber-400" />
                            Langkah-Langkah Pembersihan:
                          </p>
                          <ol className="space-y-1.5 text-slate-300 text-[11px]">
                            {task.procedureSteps.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                                <span className="bg-amber-500/20 text-amber-300 font-bold font-mono-code text-[10px] px-1.5 py-0.5 rounded shrink-0">
                                  {idx + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-end pt-1">
                <button
                  onClick={() => onExecuteTask(task.id)}
                  disabled={isCompleted}
                  className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold transition-all shadow ${
                    isCompleted
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 active:scale-95'
                  }`}
                >
                  <i className={`fa-solid ${isCompleted ? 'fa-check-double' : 'fa-pump-soap'} mr-1.5`} />
                  {isCompleted ? 'Sudah Dikerjakan' : 'Selesaikan Cleaning'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
