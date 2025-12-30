import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LiveChatComponent } from './live-chat.component';

@NgModule({
  declarations: [
    LiveChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LiveChatComponent
  ]
})
export class LiveChatModule { }