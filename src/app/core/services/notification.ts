import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  async requestPermission() {
    console.log("req perm")


    if (!('Notification' in window)) {
      console.log("no window notif")
      return;
    }

    if (Notification.permission === 'default') {
      await Notification.requestPermission();
    }

  }

  show(title: string, body: string) {

  if (Notification.permission !== 'granted') {
    return;
  }

  new Notification(title, {
    body,
    icon: 'icons/icon-192x192.png',
    badge: 'icons/icon-72x72.png'
  });

}

}