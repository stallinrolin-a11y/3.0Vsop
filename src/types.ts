export type Role = 'commis' | 'mixologist' | 'supervisor' | 'manager';
export type MainTab = 'operasional' | 'learning' | 'supervisor';
export type OperasionalSubMenu = 'daily' | 'stock' | 'cleaning' | 'standards';
export type PriorityLevel = 'critical' | 'mandatory' | 'optional';

export interface SopChecklistItem {
  id: string;
  code: string;
  timeSlot: 'Opening Routine' | 'Operational Service' | 'Closing Routine';
  title: string;
  shortDesc: string;
  detailedSteps: string[];
  safetyNote: string;
  targetStandard: string;
  completed: boolean;
  timestamp?: string;
  notes?: string;
  priority?: PriorityLevel;
  photoProof?: string; // Data URL or photo tag
  completedBy?: string;
}

export interface StockItem {
  id: string;
  code: string;
  name: string;
  category: string;
  unit: string;
  startStock: number;
  usedStock: number;
  currentStock: number;
  parLevel: number;
  fifoStatus: 'Safe' | 'Warning' | 'Expired Risk';
  lastUpdated: string;
  priority?: PriorityLevel;
  notes?: string;
}

export interface CleaningTask {
  id: string;
  title: string;
  category: 'Daily Closing Clean' | 'Weekly Deep Clean' | 'Weekly Clean';
  equipment: string;
  chemicalUsed: string;
  schedule: string;
  status: 'Pending' | 'Completed' | 'Verified';
  assignedTo: string;
  preparation?: string[];
  procedureSteps?: string[];
  priority?: PriorityLevel;
  timestamp?: string;
  photoProof?: string;
  notes?: string;
}

export interface SopDocument {
  id: string;
  code: string;
  title: string;
  role: 'commis' | 'mixologist' | 'both';
  fileSize: string;
  revDate: string;
  category: string;
  description: string;
  fullContent: {
    summary: string;
    requirements: string[];
    steps: { stepNum: number; title: string; desc: string; criticalPoint: string }[];
    temperatureControl?: string;
    sanitationRules?: string[];
  };
}

export interface AuditTrailLog {
  id: string;
  timestamp: string;
  user: string;
  role: Role;
  action: string;
  details: string;
  statusType: 'info' | 'success' | 'warning' | 'approval';
}

export interface SupervisorReport {
  id: string;
  reportCode: string;
  outletName: string;
  submittedBy: string;
  jobdeskRole: 'commis' | 'mixologist';
  submittedAt: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  completedCount: number;
  totalCount: number;
  checklistSummary: string[];
  stockSummary: string;
  deviationReason?: string; // Reason if submitted with pending mandatory/critical items
  spvSignature?: string;
  spvNotes?: string;
  verifiedAt?: string;
}

export interface UserProfile {
  name: string;
  role: Role;
  outlet: string;
}

