import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessagePayload } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  messagingFirebase: firebase.messaging.Messaging;

  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyAYL7v-PJ_5N5Sn12Ghr8Zfu7Zre7pHtiI",
      authDomain: "pecano-notification.firebaseapp.com",
      projectId: "pecano-notification",
      storageBucket: "pecano-notification.appspot.com",
      messagingSenderId: "446734505028",
      appId: "1:446734505028:web:b7347c54f112fc36fc5811"
    });
    this.messagingFirebase = firebase.messaging();
  }

  requestPermission = () => {
    return new Promise(async (resolve, reject) => {
      const permsis = await Notification.requestPermission();
      if (permsis === 'granted') {
        const tokenFirebase = await this.messagingFirebase.getToken();
        resolve(tokenFirebase);
      } else {
        reject(new Error("No se otorgaron los permisos"));
      }
    })
  }

  // Estar atento al recepcionar las notificaciones push
  private messagingObservable = new Observable<MessagePayload>(observe => {
    this.messagingFirebase.onMessage((payload: any) => {
      observe.next(payload);
    })
  });

  receiveMessage() {
    return this.messagingObservable;
  }
}
