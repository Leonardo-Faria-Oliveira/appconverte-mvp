export type NotificationStatus = 'success' | 'error' | 'sent';

export interface Notification {
  id?: string;
  title?: string;
  content?: string;
  status?: NotificationStatus;
  date?: Date;
}