export type NotificationStatus = 'success' | 'error' | 'sent';

export interface Notification {
  id?: string;
  title?: string;
  content?: string;
  status?: NotificationStatus;
  date?: Date;
}

export interface NotificationStats{
  opened: number;
  failed: number;
  sent: number;
}