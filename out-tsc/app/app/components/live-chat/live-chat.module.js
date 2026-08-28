import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LiveChatComponent } from './live-chat.component';
import * as i0 from "@angular/core";
export class LiveChatModule {
    static ɵfac = function LiveChatModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LiveChatModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LiveChatModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FormsModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LiveChatModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LiveChatModule, { declarations: [LiveChatComponent], imports: [CommonModule,
        FormsModule], exports: [LiveChatComponent] }); })();
