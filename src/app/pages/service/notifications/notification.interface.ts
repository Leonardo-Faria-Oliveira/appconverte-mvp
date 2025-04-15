import { Inject } from '@angular/core';
import { Notification } from '../../models/notification';


export interface INotificationService {
  
    getNotifications: () => Promise<Notification[]>;
    markAsRead: (notificationId: string) => Promise<void>;
    deleteNotification: (notificationId: string) => Promise<void>;
    sendNotification: (notification: Notification) => Promise<void>;

}