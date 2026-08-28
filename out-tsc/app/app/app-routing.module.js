import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { DeleteAccountComponent } from './pages/delete-account/delete-account.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: '', component: HomeComponent },
    { path: 'privacidad', component: PrivacidadComponent },
    { path: 'privacy', redirectTo: 'privacidad', pathMatch: 'full' },
    // URL declarada en Google Play (Data safety) y App Store 5.1.1(v)
    { path: 'delete-account', component: DeleteAccountComponent },
    { path: 'account-deletion', redirectTo: 'delete-account', pathMatch: 'full' },
    { path: 'eliminar-cuenta', redirectTo: 'delete-account', pathMatch: 'full' },
    { path: '**', redirectTo: '' },
];
export class AppRoutingModule {
    static ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppRoutingModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppRoutingModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forRoot(routes, {
                scrollPositionRestoration: 'top',
                anchorScrolling: 'enabled',
            }), RouterModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [
                    RouterModule.forRoot(routes, {
                        scrollPositionRestoration: 'top',
                        anchorScrolling: 'enabled',
                    }),
                ],
                exports: [RouterModule],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
