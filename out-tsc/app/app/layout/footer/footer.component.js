import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
const _c0 = () => ["/privacidad"];
const _c1 = () => ["/delete-account"];
export class FooterComponent {
    static ɵfac = function FooterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FooterComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], standalone: false, decls: 49, vars: 4, consts: [["id", "contact", 1, "bg-emerald-900", "text-white"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "py-12", "grid", "md:grid-cols-2", "gap-10"], [1, "flex", "items-center", "mb-4"], [1, "inline-block", "h-9", "w-9", "rounded-xl", "bg-white/10", "flex", "items-center", "justify-center", "text-white"], [1, "fa-solid", "fa-clipboard-check"], [1, "ml-3", "text-xl", "font-extrabold"], [1, "text-emerald-100", "max-w-md"], [1, "mt-6", "flex", "items-start", "space-x-3"], [1, "fa-solid", "fa-location-dot", "text-emerald-300", "text-xl", "mt-1"], [1, "text-emerald-100"], [1, "mt-6", "text-emerald-200", "text-sm"], ["action", "https://formsubmit.co/mcabrerasos@miatracker.com", "method", "POST", 1, "bg-white", "text-slate-800", "p-6", "rounded-2xl", "border", "border-emerald-200", "shadow"], ["type", "hidden", "name", "_next", "value", "https://www.miatracker.com/"], [1, "text-lg", "font-bold", "text-emerald-800"], ["type", "hidden", "name", "_subject", "value", "New contact from M.I.A Tracker!"], ["type", "hidden", "name", "_captcha", "value", "false"], ["type", "hidden", "name", "_template", "value", "table"], [1, "mt-4", "grid", "gap-3"], ["type", "text", "name", "name", "placeholder", "Name", "required", "", 1, "w-full", "px-4", "py-3", "rounded-xl", "border", "border-slate-300", "focus:outline-none", "focus:ring-2", "focus:ring-emerald-500"], ["type", "email", "name", "email", "placeholder", "Email", "required", "", 1, "w-full", "px-4", "py-3", "rounded-xl", "border", "border-slate-300", "focus:outline-none", "focus:ring-2", "focus:ring-emerald-500"], ["rows", "4", "name", "message", "placeholder", "Message", "required", "", 1, "w-full", "px-4", "py-3", "rounded-xl", "border", "border-slate-300", "focus:outline-none", "focus:ring-2", "focus:ring-emerald-500"], ["type", "submit", 1, "px-5", "py-3", "rounded-xl", "bg-emerald-700", "text-white", "hover:bg-emerald-800", "transition-colors", "duration-200"], [1, "border-t", "border-emerald-800"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "py-4", "text-center"], [1, "text-sm", "text-emerald-200"], ["href", "https://www.techsolutionsgt.dev/", "target", "_blank", "rel", "noopener noreferrer", 1, "font-semibold", "text-white", "hover:text-lime-300", "transition-colors"], [1, "mt-2", "flex", "flex-wrap", "items-center", "justify-center", "gap-x-3", "gap-y-1", "text-sm"], [1, "text-emerald-200", "hover:text-lime-300", "transition-colors", 3, "routerLink"], ["aria-hidden", "true", 1, "text-emerald-700"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "footer", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "span", 3);
            i0.ɵɵelement(5, "i", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 5);
            i0.ɵɵtext(7, "M.I.A Tracker");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "p", 6);
            i0.ɵɵtext(9, "The all-in-one platform for Maintenance, Inventory & Assets. Visibility, traceability and control\u2014anywhere.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 7);
            i0.ɵɵelement(11, "i", 8);
            i0.ɵɵelementStart(12, "div", 9)(13, "p");
            i0.ɵɵtext(14, "MIA Tracker");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "p");
            i0.ɵɵtext(16, "51 Pleasant St # 1117");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "p");
            i0.ɵɵtext(18, "Malden, MA 02148");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "p");
            i0.ɵɵtext(20, "United States");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(21, "p", 10);
            i0.ɵɵtext(22, "\u00A9 2025 M.I.A Tracker. All rights reserved.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "form", 11);
            i0.ɵɵelement(24, "input", 12);
            i0.ɵɵelementStart(25, "h3", 13);
            i0.ɵɵtext(26, "Contact us");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(27, "input", 14)(28, "input", 15)(29, "input", 16);
            i0.ɵɵelementStart(30, "div", 17);
            i0.ɵɵelement(31, "input", 18)(32, "input", 19)(33, "textarea", 20);
            i0.ɵɵelementStart(34, "button", 21);
            i0.ɵɵtext(35, "Send");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(36, "div", 22)(37, "div", 23)(38, "p", 24);
            i0.ɵɵtext(39, " Hecho por ");
            i0.ɵɵelementStart(40, "a", 25);
            i0.ɵɵtext(41, " Tech Solutions GT ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(42, "p", 26)(43, "a", 27);
            i0.ɵɵtext(44, " Privacy Policy ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "span", 28);
            i0.ɵɵtext(46, "\u00B7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "a", 27);
            i0.ɵɵtext(48, " Delete your account ");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(43);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(2, _c0));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(3, _c1));
        } }, dependencies: [i1.RouterLink, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.NgForm], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{ selector: 'app-footer', standalone: false, template: "<footer id=\"contact\" class=\"bg-emerald-900 text-white\">\n  <div class=\"max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-10\">\n    <div>\n      <div class=\"flex items-center mb-4\">\n        <span class=\"inline-block h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center text-white\">\n          <i class=\"fa-solid fa-clipboard-check\"></i>\n        </span>\n        <span class=\"ml-3 text-xl font-extrabold\">M.I.A Tracker</span>\n      </div>\n      <p class=\"text-emerald-100 max-w-md\">The all-in-one platform for Maintenance, Inventory & Assets. Visibility, traceability and control\u2014anywhere.</p>\n\n      <!-- DIRECCI\u00D3N F\u00CDSICA -->\n      <div class=\"mt-6 flex items-start space-x-3\">\n        <i class=\"fa-solid fa-location-dot text-emerald-300 text-xl mt-1\"></i>\n        <div class=\"text-emerald-100\">\n          <p>MIA Tracker</p>\n          <p>51 Pleasant St # 1117</p>\n          <p>Malden, MA 02148</p>\n          <p>United States</p>\n        </div>\n      </div>\n\n      <p class=\"mt-6 text-emerald-200 text-sm\">\u00A9 2025 M.I.A Tracker. All rights reserved.</p>\n    </div>\n\n    <!-- FORMULARIO CON FORMSUBMIT.CO -->\n    <form action=\"https://formsubmit.co/mcabrerasos@miatracker.com\" method=\"POST\" class=\"bg-white text-slate-800 p-6 rounded-2xl border border-emerald-200 shadow\">\n      <input type=\"hidden\" name=\"_next\" value=\"https://www.miatracker.com/\">\n      <h3 class=\"text-lg font-bold text-emerald-800\">Contact us</h3>\n\n      <!-- FormSubmit Configuration -->\n      <input type=\"hidden\" name=\"_subject\" value=\"New contact from M.I.A Tracker!\">\n      <input type=\"hidden\" name=\"_captcha\" value=\"false\">\n      <input type=\"hidden\" name=\"_template\" value=\"table\">\n\n      <div class=\"mt-4 grid gap-3\">\n        <input type=\"text\" name=\"name\" placeholder=\"Name\" required class=\"w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500\">\n        <input type=\"email\" name=\"email\" placeholder=\"Email\" required class=\"w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500\">\n        <textarea rows=\"4\" name=\"message\" placeholder=\"Message\" required class=\"w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500\"></textarea>\n        <button type=\"submit\" class=\"px-5 py-3 rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 transition-colors duration-200\">Send</button>\n      </div>\n    </form>\n  </div>\n\n  <!-- BARRA INFERIOR - CR\u00C9DITO -->\n  <div class=\"border-t border-emerald-800\">\n    <div class=\"max-w-7xl mx-auto px-4 sm:px-6 py-4 text-center\">\n      <p class=\"text-sm text-emerald-200\">\n        Hecho por\n        <a\n          href=\"https://www.techsolutionsgt.dev/\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n          class=\"font-semibold text-white hover:text-lime-300 transition-colors\"\n        >\n          Tech Solutions GT\n        </a>\n      </p>\n      <p class=\"mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm\">\n        <a [routerLink]=\"['/privacidad']\" class=\"text-emerald-200 hover:text-lime-300 transition-colors\">\n          Privacy Policy\n        </a>\n        <span class=\"text-emerald-700\" aria-hidden=\"true\">&middot;</span>\n        <a [routerLink]=\"['/delete-account']\" class=\"text-emerald-200 hover:text-lime-300 transition-colors\">\n          Delete your account\n        </a>\n      </p>\n    </div>\n  </div>\n</footer>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/layout/footer/footer.component.ts", lineNumber: 9 }); })();
