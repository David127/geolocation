import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from 'src/app/services/push-notification.service';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss']
})
export class NotificacionComponent implements OnInit {

  messageReceived = '';

  constructor(
    private notification: PushNotificationService
  ) {
    notification.requestPermission().then(token => {
      console.log(token);
    });
  }

  ngOnInit(): void {
    this.notification.receiveMessage().subscribe(payload => {
      console.log(payload);
      this.messageReceived = payload.notification.title;
    });
  }

}
