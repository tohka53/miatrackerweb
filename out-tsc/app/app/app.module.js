import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Layout
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
// Páginas
import { HomeComponent } from './pages/home/home.component';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { DeleteAccountComponent } from './pages/delete-account/delete-account.component';
// Live chat (usado en app.component.html con <app-live-chat>)
import { LiveChatModule } from './components/live-chat/live-chat.module';
import * as i0 from "@angular/core";
export class AppModule {
    static ɵfac = function AppModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [BrowserModule,
            AppRoutingModule,
            FormsModule,
            LiveChatModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    NavbarComponent,
                    FooterComponent,
                    HomeComponent,
                    PrivacidadComponent,
                    DeleteAccountComponent
                ],
                imports: [
                    BrowserModule,
                    AppRoutingModule,
                    FormsModule,
                    LiveChatModule
                ],
                providers: [],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        PrivacidadComponent,
        DeleteAccountComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        LiveChatModule] }); })();
