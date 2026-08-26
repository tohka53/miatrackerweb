import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacidad', component: PrivacidadComponent },
  { path: 'privacy', redirectTo: 'privacidad', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
