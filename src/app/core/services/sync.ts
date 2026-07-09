import { Injectable, signal } from '@angular/core';
import { NotificationService } from './notification';
import { interval, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  isOnline = signal(navigator.onLine);

  constructor(  private notification: NotificationService) {

      interval(5000).pipe(tap((val)=>console.log("checking connec"))).subscribe(() => {
      this.checkConnection();
    });
    this.notification.requestPermission();

    // window.addEventListener('online', () => {
    //  this.setTrue();
    // });

    // window.addEventListener('offline', () => {
    //   this.setFalse();
    // });

   
  }

   setFalse(){
      this.isOnline.set(false);
    }

    setTrue(){
       this.notification.show(
    '🌐 Connection Restored',
    'You are back online.'
  );
      this.isOnline.set(true);
    }

    async checkConnection() {
    try {
      await fetch('/manifest.webmanifest', {
        method: 'HEAD',
        cache: 'no-store'
      });

        this.notification.show(
    '🌐 Connection Restored',
    'You are back online.'
  );
      this.isOnline.set(true);
    } catch {
      this.isOnline.set(false);
    }
  }
}