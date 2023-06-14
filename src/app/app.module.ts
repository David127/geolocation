import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PushNotificationService } from './services/push-notification.service';
import { NavComponent } from './components/nav/nav.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UbicacionComponent,
    NotificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PushNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
