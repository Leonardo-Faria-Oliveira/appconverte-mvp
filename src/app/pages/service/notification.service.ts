import { Injectable } from '@angular/core';



export type NotificationStatus = 'success' | 'error' | 'sent';

export interface Notification {
  id?: string;
  title?: string;
  content?: string;
  status?: NotificationStatus;
  date?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

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
