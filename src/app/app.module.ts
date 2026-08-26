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

// Live chat (usado en app.component.html con <app-live-chat>)
import { LiveChatModule } from './components/live-chat/live-chat.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LiveChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
