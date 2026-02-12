
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DiagnosticMessage {
  role: 'user' | 'model';
  text: string;
}

export interface RepairStatus {
  id: string;
  vehicle: string;
  status: 'Received' | 'Diagnosing' | 'Repairing' | 'Ready';
  progress: number;
  lastUpdate: string;
}
