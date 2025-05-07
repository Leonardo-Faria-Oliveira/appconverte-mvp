import { Injectable } from '@angular/core';
import { Notification } from '../../models/notification';
import { INotificationService } from './notification.interface';
import { HttpClient } from '../httpClient/httpClient';
import { HttpResponse } from '../httpClient/httpResponse';

@Injectable({
  providedIn: 'root'
})
export class NotificationService implements INotificationService {

  constructor(private client: HttpClient) {}

  deleteNotification: (notificationId: string) => Promise<void>= async() => {};

  sendNotification: (notification: Notification) => Promise<void>= async(notification) => {

    const response = await this.client.post('/messages/send', JSON.stringify(notification)) as HttpResponse;
    

  };

  async getNotifications(): Promise<Notification[]> {

    return new Promise((resolve) => {
      const notifications: Notification[] = [
        {
          id: '1',
          title: 'Promoção de fim de ano chegando',
          content: 'Aproveite nossas ofertas especiais para o final do ano!',
          status: 'sent',
          date: new Date('2023-12-01')
        },
        {
          id: '2',
          title: 'Novo recurso disponível!',
          content: 'Confira nosso novo recurso incrível que acabamos de lançar.',
          status: 'success',
          date: new Date('2023-11-15')
        },
        {
          id: '3',
          title: 'Manutenção programada',
          content: 'Haverá uma manutenção programada no dia 20 de novembro.',
          status: 'error',
          date: new Date('2023-11-10')
        }
      ];
      resolve(notifications);
    });

  }

}
