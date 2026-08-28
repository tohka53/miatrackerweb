import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { DeleteAccountComponent } from './pages/delete-account/delete-account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacidad', component: PrivacidadComponent },
  { path: 'privacy', redirectTo: 'privacidad', pathMatch: 'full' },

  // URL declarada en Google Play (Data safety) y App Store 5.1.1(v)
  { path: 'delete-account', component: DeleteAccountComponent },
  { path: 'account-deletion', redirectTo: 'delete-account', pathMatch: 'full' },
  { path: 'eliminar-cuenta', redirectTo: 'delete-account', pathMatch: 'full' },

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
