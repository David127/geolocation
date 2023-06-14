import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';

const routes: Routes = [
  {
    path: 'ubicacion',
    component: UbicacionComponent
  },
  {
    path: 'notificacion',
    component: NotificacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
