import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { PushNotificationService } from './services/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  messageReceived = '';

  latitude: number = 0;
  longitude: number = 0;

  permissionDenied: boolean = false;
  showPermissionMessage: boolean = false;

  browser: string = '';

  deviceInfo: any = null;

  isMobile = false;
  isTablet = false;
  isDesktopDevice = false;

  constructor(
    private deviceService: DeviceDetectorService,
    private notification: PushNotificationService
  ) {
    notification.requestPermission().then(token => {
      console.log(token);
    });
    this.epicFunction();
  }

  ngOnInit(): void {
    this.notification.receiveMessage().subscribe(payload => {
      console.log(payload);
      this.messageReceived = payload.notification.title;
    });
  }

  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.browser = this.deviceInfo.browser;

    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
    // console.log(this.deviceInfo);
    // console.log(`Is Mobile: ${this.isMobile}`);
    // console.log(`Is Tablet: ${this.isTablet}`);
    // console.log(`Is Desktop: ${this.isDesktopDevice}`);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          // console.log("Ubicación obtenida con éxito.");
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            this.permissionDenied = true;
            this.showPermissionMessage = true;
          }
          // console.error("Error al obtener la ubicación:", error);
        }
      );
    } else {
      // console.error("Geolocalización no es compatible con este navegador.");
    }
  }
}
