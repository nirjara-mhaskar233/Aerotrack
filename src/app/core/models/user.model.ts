
export type Role = 'admin' | 'supervisor' | 'technician';

export interface User {
  id: string;
  username: string;
  displayName: string;
  role: Role;
}
