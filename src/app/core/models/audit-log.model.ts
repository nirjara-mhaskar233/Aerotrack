
export type Status = 'PENDING' | 'RESOLVED';

export interface AuditLog {
  auditID: string;
  aircraftID: string;
  findings: string;
  status?: Status;
  date: string;            // Audit Created (ISO date)
  resolvedDate?: string;   // Resolved On (ISO date)
}
