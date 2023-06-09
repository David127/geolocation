import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'geolocation';

  latitude: number = 0;
  longitude: number = 0;

  permissionDenied: boolean = false;
  showPermissionMessage: boolean = false;

  browser: string = '';

  deviceInfo: any = null;

  isMobile = false;
  isTablet = false;
  isDesktopDevice = false;

  constructor(private deviceService: DeviceDetectorService) {
    this.epicFunction();
  }

  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.browser = this.deviceInfo.browser;

    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(`Is Mobile: ${this.isMobile}`);
    console.log(`Is Tablet: ${this.isTablet}`);
    console.log(`Is Desktop: ${this.isDesktopDevice}`);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log("Ubicación obtenida con éxito.");
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            this.permissionDenied = true;
            this.showPermissionMessage = true;
          }
          console.error("Error al obtener la ubicación:", error);
        }
      );
    } else {
      console.error("Geolocalización no es compatible con este navegador.");
    }
  }
}
