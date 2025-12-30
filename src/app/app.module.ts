import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LiveChatModule } from './components/live-chat/live-chat.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,    // ← AGREGAR
    FooterComponent,    // ← AGREGAR
    HomeComponent,
    FeaturesComponent,
    MobileComponent,
    PricingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LiveChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }