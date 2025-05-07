import { Notification } from '../../models/notification';


export interface INotificationService {
  
    getNotifications: () => Promise<Notification[]>;
    deleteNotification: (notificationId: string) => Promise<void>;
    sendNotification: (notification: Notification) => Promise<void>;

}