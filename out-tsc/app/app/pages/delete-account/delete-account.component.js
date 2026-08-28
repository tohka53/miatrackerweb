import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
function DeleteAccountComponent_tr_134_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 48);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 49);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r1.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r1.detail);
} }
function DeleteAccountComponent_tr_153_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 48);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 50);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 51);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r2.what);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r2.why);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r2.period);
} }
export class DeleteAccountComponent {
    title;
    meta;
    /** Update this date every time the text below changes. */
    lastUpdated = 'August 28, 2026';
    brand = 'M.I.A Tracker';
    site = 'https://www.miatracker.com';
    /**
     * Google Play requires this page to name the app OR the developer exactly as
     * they appear on the store listing. Both are printed in the header.
     */
    developer = 'Tech Solutions GT';
    /** Same mailbox as the privacy policy, so both pages stay consistent. */
    contactEmail = 'mcabreraSoS@miatracker.com';
    /** Business days we commit to for email-based deletion requests. */
    emailSlaDays = 30;
    /** Section 3 — everything that is erased. */
    deletedData = [
        {
            type: 'Login credentials',
            detail: 'Email address and authentication credentials used to sign in.',
        },
        {
            type: 'Profile',
            detail: 'Full name, username, profile photo, company and assigned role.',
        },
        {
            type: 'Inventory',
            detail: 'Products, descriptions, barcodes and QR codes, quantities, stock alerts and per-location stock distribution.',
        },
        {
            type: 'Locations',
            detail: 'Physical locations you registered and their geographic coordinates.',
        },
        {
            type: 'Assets and maintenance',
            detail: 'Registered assets, maintenance history, costs, assigned technicians and related notes.',
        },
        {
            type: 'Images',
            detail: 'Every product and inventory photo you uploaded to the application storage.',
        },
        {
            type: 'Operations',
            detail: 'Orders, transfers between locations, restock requests, stock alerts and notifications.',
        },
    ];
    /** Section 4 — the only things that survive, and for how long. */
    retainedData = [
        {
            what: 'Encrypted backups',
            why: 'Normal backup rotation. They are not queried or restored except to recover from an incident.',
            period: 'Up to 30 days',
        },
        {
            what: 'Server and security logs',
            why: 'IP address and technical metadata, kept to prevent fraud, abuse and attacks.',
            period: 'Up to 12 months',
        },
        {
            what: 'Accounting or tax records',
            why: 'Proof of transactions subject to legal obligations, kept dissociated from your identity.',
            period: 'As required by applicable law',
        },
    ];
    constructor(title, meta) {
        this.title = title;
        this.meta = meta;
    }
    ngOnInit() {
        this.title.setTitle('Delete Your Account and Data | M.I.A Tracker');
        this.meta.updateTag({
            name: 'description',
            content: 'How to request permanent deletion of your M.I.A Tracker account and its associated data: steps, what is deleted, what is retained and for how long.',
        });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.meta.updateTag({
            property: 'og:title',
            content: 'Delete Your Account and Data | M.I.A Tracker',
        });
        this.meta.updateTag({ property: 'og:url', content: `${this.site}/delete-account` });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
        }
    }
    /** Prefilled mailto for the "cannot access the app" path. */
    get requestMailto() {
        const subject = encodeURIComponent('Account deletion request - M.I.A Tracker');
        const body = encodeURIComponent('Account email: \nApp: M.I.A Tracker\nI request permanent deletion of my account and all associated data.\n');
        return `mailto:${this.contactEmail}?subject=${subject}&body=${body}`;
    }
    static ɵfac = function DeleteAccountComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DeleteAccountComponent)(i0.ɵɵdirectiveInject(i1.Title), i0.ɵɵdirectiveInject(i1.Meta)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DeleteAccountComponent, selectors: [["app-delete-account"]], standalone: false, decls: 187, vars: 18, consts: [[1, "bg-white", "text-slate-700", "pt-16"], [1, "bg-emerald-900"], [1, "mx-auto", "max-w-4xl", "px-6", "py-16", "sm:py-20"], ["routerLink", "/", 1, "inline-flex", "items-center", "gap-2", "text-sm", "font-medium", "text-lime-300", "hover:text-lime-200"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "mt-6", "text-4xl", "font-bold", "tracking-tight", "text-white", "sm:text-5xl"], [1, "mt-4", "max-w-2xl", "text-lg", "leading-relaxed", "text-emerald-100"], [1, "text-white"], [1, "mt-8", "flex", "flex-wrap", "gap-x-12", "gap-y-4", "border-t", "border-lime-400/30", "pt-6", "text-sm"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-lime-300"], [1, "mt-1", "font-medium", "text-white"], [1, "mt-1", "font-medium", "text-white", "break-words"], [1, "hover:text-lime-200", 3, "href"], [1, "mx-auto", "max-w-4xl", "space-y-6", "px-6", "py-12", "text-base", "leading-7", "lg:py-16"], ["id", "in-app", 1, "scroll-mt-24", "rounded-xl", "border", "border-slate-200", "bg-white", "p-6", "sm:p-8"], [1, "text-2xl", "font-bold", "tracking-tight", "text-slate-900"], [1, "mr-3", "inline-flex", "h-7", "w-7", "items-center", "justify-center", "rounded-md", "bg-emerald-900", "align-middle", "text-sm", "font-bold", "text-lime-300"], [1, "mt-2", "text-slate-600"], [1, "mt-6", "space-y-5"], [1, "relative", "pl-11"], [1, "absolute", "left-0", "top-0", "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-full", "bg-emerald-700", "text-xs", "font-semibold", "text-white"], [1, "font-medium", "text-slate-900"], [1, "mt-6", "rounded-lg", "border", "border-red-200", "bg-red-50", "p-5"], [1, "text-sm", "leading-6", "text-slate-700"], [1, "font-semibold", "text-red-700"], ["id", "by-email", 1, "scroll-mt-24", "rounded-xl", "border", "border-slate-200", "bg-white", "p-6", "sm:p-8"], [1, "font-medium", "text-emerald-700", "underline", "underline-offset-2", "hover:text-emerald-800", 3, "href"], ["id", "deleted", 1, "scroll-mt-24", "rounded-xl", "border", "border-slate-200", "bg-white", "p-6", "sm:p-8"], [1, "mt-6", "overflow-x-auto"], [1, "w-full", "min-w-[34rem]", "border-collapse", "text-left", "text-sm"], [1, "border-b", "border-slate-300"], [1, "py-3", "pr-4", "font-semibold", "text-slate-900"], [1, "py-3", "font-semibold", "text-slate-900"], [1, "divide-y", "divide-slate-200"], [4, "ngFor", "ngForOf"], ["id", "retained", 1, "scroll-mt-24", "rounded-xl", "border", "border-slate-200", "bg-white", "p-6", "sm:p-8"], [1, "w-full", "min-w-[38rem]", "border-collapse", "text-left", "text-sm"], [1, "mt-6", "rounded-lg", "border", "border-emerald-200", "bg-emerald-50", "p-5"], [1, "font-semibold", "text-slate-900"], [1, "mt-2", "text-sm", "leading-6", "text-slate-700"], ["id", "partial", 1, "scroll-mt-24", "rounded-xl", "border", "border-slate-200", "bg-white", "p-6", "sm:p-8"], [1, "mt-4"], ["id", "questions", 1, "scroll-mt-24", "rounded-xl", "border", "border-slate-200", "bg-slate-50", "p-6", "sm:p-8"], ["routerLink", "/privacidad", 1, "font-medium", "text-emerald-700", "underline", "underline-offset-2", "hover:text-emerald-800"], [1, "mt-6", "border-t", "border-slate-200", "pt-6"], [1, "text-sm", "text-slate-500"], ["routerLink", "/", 1, "mt-4", "inline-flex", "items-center", "gap-2", "rounded-lg", "bg-emerald-700", "px-5", "py-2.5", "text-sm", "font-medium", "text-white", "hover:bg-emerald-800"], [1, "py-3", "pr-4", "align-top", "font-medium", "text-slate-900"], [1, "py-3", "align-top", "text-slate-600"], [1, "py-3", "pr-4", "align-top", "text-slate-600"], [1, "py-3", "align-top", "whitespace-nowrap", "text-slate-600"]], template: function DeleteAccountComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(4, "svg", 4);
            i0.ɵɵelement(5, "path", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(6, " Back to home ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(7, "h1", 6);
            i0.ɵɵtext(8, " Delete your account and data ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p", 7);
            i0.ɵɵtext(10, " How to permanently delete your ");
            i0.ɵɵelementStart(11, "span", 8);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " account and everything associated with it, what gets erased, and what we are required to keep. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "dl", 9)(15, "div")(16, "dt", 10);
            i0.ɵɵtext(17, "Application");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "dd", 11);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div")(21, "dt", 10);
            i0.ɵɵtext(22, "Developer");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "dd", 11);
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div")(26, "dt", 10);
            i0.ɵɵtext(27, "Last updated");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "dd", 11);
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "div")(31, "dt", 10);
            i0.ɵɵtext(32, "Contact");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "dd", 12)(34, "a", 13);
            i0.ɵɵtext(35);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(36, "div", 14)(37, "section", 15)(38, "h2", 16)(39, "span", 17);
            i0.ɵɵtext(40, "1");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(41, " Delete your account from the app ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "p", 18);
            i0.ɵɵtext(43, " This is the fastest route: deletion happens immediately, with no involvement from our team. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "ol", 19)(45, "li", 20)(46, "span", 21);
            i0.ɵɵtext(47, "1");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(48, " Open ");
            i0.ɵɵelementStart(49, "span", 22);
            i0.ɵɵtext(50);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(51, " on your device and sign in with the account you want to delete. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "li", 20)(53, "span", 21);
            i0.ɵɵtext(54, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(55, " Tap the menu icon ");
            i0.ɵɵelementStart(56, "span", 22);
            i0.ɵɵtext(57, "(\u2630)");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(58, " in the top-left corner to open the side panel. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "li", 20)(60, "span", 21);
            i0.ɵɵtext(61, "3");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(62, " Scroll to the bottom of the panel. Below ");
            i0.ɵɵelementStart(63, "em");
            i0.ɵɵtext(64, "Sign out");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(65, " you will find the red ");
            i0.ɵɵelementStart(66, "span", 22);
            i0.ɵɵtext(67, "Delete account");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(68, " button. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "li", 20)(70, "span", 21);
            i0.ɵɵtext(71, "4");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(72, " Read the confirmation notice and tap ");
            i0.ɵɵelementStart(73, "span", 22);
            i0.ɵɵtext(74, "Delete my account");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(75, ". ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "li", 20)(77, "span", 21);
            i0.ɵɵtext(78, "5");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(79, " Your account and its data are erased at that moment and you are signed out automatically. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(80, "div", 23)(81, "p", 24)(82, "span", 25);
            i0.ɵɵtext(83, "This action is permanent and cannot be undone.");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(84, " There is no grace period and no way to recover the information once deletion is confirmed. If you need to keep your inventory, export it first from the Reports section. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(85, "section", 26)(86, "h2", 16)(87, "span", 17);
            i0.ɵɵtext(88, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(89, " If you cannot access the app ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "p", 18);
            i0.ɵɵtext(91, " For example, if you lost access to your email, uninstalled the app, or cannot sign in. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "ol", 19)(93, "li", 20)(94, "span", 21);
            i0.ɵɵtext(95, "1");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(96, " Write to ");
            i0.ɵɵelementStart(97, "a", 27);
            i0.ɵɵtext(98);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(99, " from the email address you registered with. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "li", 20)(101, "span", 21);
            i0.ɵɵtext(102, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(103, " Use ");
            i0.ɵɵelementStart(104, "span", 22);
            i0.ɵɵtext(105, "\u201CAccount deletion request\u201D");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(106, " as the subject and include the email address of the account you want deleted. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "li", 20)(108, "span", 21);
            i0.ɵɵtext(109, "3");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(110, " We verify your identity to make sure the request comes from the account holder. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(111, "li", 20)(112, "span", 21);
            i0.ɵɵtext(113, "4");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(114, " We process the deletion within ");
            i0.ɵɵelementStart(115, "span", 22);
            i0.ɵɵtext(116);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(117, " at the latest and email you a confirmation when it is complete. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(118, "section", 28)(119, "h2", 16)(120, "span", 17);
            i0.ɵɵtext(121, "3");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(122, " What data is deleted ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(123, "p", 18);
            i0.ɵɵtext(124, " All of the following is permanently erased from our active systems. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(125, "div", 29)(126, "table", 30)(127, "thead")(128, "tr", 31)(129, "th", 32);
            i0.ɵɵtext(130, "Type of data");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(131, "th", 33);
            i0.ɵɵtext(132, "What it includes");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(133, "tbody", 34);
            i0.ɵɵtemplate(134, DeleteAccountComponent_tr_134_Template, 5, 2, "tr", 35);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(135, "section", 36)(136, "h2", 16)(137, "span", 17);
            i0.ɵɵtext(138, "4");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(139, " What is retained, and for how long ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(140, "p", 18);
            i0.ɵɵtext(141, " Only what is strictly necessary for technical, security or legal reasons. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(142, "div", 29)(143, "table", 37)(144, "thead")(145, "tr", 31)(146, "th", 32);
            i0.ɵɵtext(147, "What");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(148, "th", 32);
            i0.ɵɵtext(149, "Why");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(150, "th", 33);
            i0.ɵɵtext(151, "Retention period");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(152, "tbody", 34);
            i0.ɵɵtemplate(153, DeleteAccountComponent_tr_153_Template, 7, 3, "tr", 35);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(154, "div", 38)(155, "p", 39);
            i0.ɵɵtext(156, "Shared company accounts");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(157, "p", 40);
            i0.ɵɵtext(158, " If your account belongs to an organization with other users, records documenting operations carried out jointly may be retained under that organization's account, stripped of the data that identifies you personally. Your profile, your credentials and your personal data are deleted all the same. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(159, "section", 41)(160, "h2", 16)(161, "span", 17);
            i0.ɵɵtext(162, "5");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(163, " Deleting part of your data without deleting your account ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(164, "p", 42);
            i0.ɵɵtext(165, " You do not have to delete your account to remove information from it. While signed in you can delete individual inventory items, assets, locations, maintenance records and uploaded photos directly from their detail screen; each deletion removes the record and its images from our systems. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(166, "p", 42);
            i0.ɵɵtext(167, " If you want a broader deletion \u2014 for example, every photo you uploaded, or all records from a given period \u2014 while keeping your account active, email ");
            i0.ɵɵelementStart(168, "a", 27);
            i0.ɵɵtext(169);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(170);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(171, "section", 43)(172, "h2", 16);
            i0.ɵɵtext(173, "Questions before you delete?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(174, "p", 42);
            i0.ɵɵtext(175, " If you have questions about what happens to your information, write to ");
            i0.ɵɵelementStart(176, "a", 27);
            i0.ɵɵtext(177);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(178, " before confirming the deletion. You can also read our ");
            i0.ɵɵelementStart(179, "a", 44);
            i0.ɵɵtext(180, "Privacy Policy");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(181, ". ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(182, "div", 45)(183, "p", 46);
            i0.ɵɵtext(184);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(185, "a", 47);
            i0.ɵɵtext(186, " Back to home ");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(ctx.brand);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.brand);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.developer);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.lastUpdated);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("href", "mailto:" + ctx.contactEmail, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.contactEmail);
            i0.ɵɵadvance(15);
            i0.ɵɵtextInterpolate(ctx.brand);
            i0.ɵɵadvance(47);
            i0.ɵɵproperty("href", ctx.requestMailto, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.contactEmail);
            i0.ɵɵadvance(18);
            i0.ɵɵtextInterpolate1("", ctx.emailSlaDays, " days");
            i0.ɵɵadvance(18);
            i0.ɵɵproperty("ngForOf", ctx.deletedData);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("ngForOf", ctx.retainedData);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("href", "mailto:" + ctx.contactEmail, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.contactEmail);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" describing what you want removed. The same ", ctx.emailSlaDays, "-day window and the same retention periods described above apply. ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("href", "mailto:" + ctx.contactEmail, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.contactEmail);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("Last updated: ", ctx.lastUpdated, ".");
        } }, dependencies: [i2.NgForOf, i3.RouterLink], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DeleteAccountComponent, [{
        type: Component,
        args: [{ selector: 'app-delete-account', standalone: false, template: "<!--\n  Account & Data Deletion \u2014 M.I.A Tracker\n  URL required by Google Play (Data safety) and App Store 5.1.1(v).\n  Accent: emerald + lime, same as the navbar, footer and /privacidad.\n  The pt-16 on <article> clears the fixed header (h-16).\n-->\n\n<article class=\"bg-white text-slate-700 pt-16\">\n\n  <!-- ============ Header ============ -->\n  <header class=\"bg-emerald-900\">\n    <div class=\"mx-auto max-w-4xl px-6 py-16 sm:py-20\">\n      <a routerLink=\"/\"\n         class=\"inline-flex items-center gap-2 text-sm font-medium text-lime-300 hover:text-lime-200\">\n        <svg class=\"h-4 w-4\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n          <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 19l-7-7m0 0l7-7m-7 7h18\" />\n        </svg>\n        Back to home\n      </a>\n\n      <h1 class=\"mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl\">\n        Delete your account and data\n      </h1>\n      <p class=\"mt-4 max-w-2xl text-lg leading-relaxed text-emerald-100\">\n        How to permanently delete your <span class=\"text-white\">{{ brand }}</span> account and everything\n        associated with it, what gets erased, and what we are required to keep.\n      </p>\n\n      <dl class=\"mt-8 flex flex-wrap gap-x-12 gap-y-4 border-t border-lime-400/30 pt-6 text-sm\">\n        <div>\n          <dt class=\"text-xs font-semibold uppercase tracking-wider text-lime-300\">Application</dt>\n          <dd class=\"mt-1 font-medium text-white\">{{ brand }}</dd>\n        </div>\n        <div>\n          <dt class=\"text-xs font-semibold uppercase tracking-wider text-lime-300\">Developer</dt>\n          <dd class=\"mt-1 font-medium text-white\">{{ developer }}</dd>\n        </div>\n        <div>\n          <dt class=\"text-xs font-semibold uppercase tracking-wider text-lime-300\">Last updated</dt>\n          <dd class=\"mt-1 font-medium text-white\">{{ lastUpdated }}</dd>\n        </div>\n        <div>\n          <dt class=\"text-xs font-semibold uppercase tracking-wider text-lime-300\">Contact</dt>\n          <dd class=\"mt-1 font-medium text-white break-words\">\n            <a [href]=\"'mailto:' + contactEmail\" class=\"hover:text-lime-200\">{{ contactEmail }}</a>\n          </dd>\n        </div>\n      </dl>\n    </div>\n  </header>\n\n  <!-- ============ Body ============ -->\n  <div class=\"mx-auto max-w-4xl space-y-6 px-6 py-12 text-base leading-7 lg:py-16\">\n\n    <!-- 1 -->\n    <section id=\"in-app\" class=\"scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 sm:p-8\">\n      <h2 class=\"text-2xl font-bold tracking-tight text-slate-900\">\n        <span class=\"mr-3 inline-flex h-7 w-7 items-center justify-center rounded-md bg-emerald-900 align-middle text-sm font-bold text-lime-300\">1</span>\n        Delete your account from the app\n      </h2>\n      <p class=\"mt-2 text-slate-600\">\n        This is the fastest route: deletion happens immediately, with no involvement from our team.\n      </p>\n\n      <ol class=\"mt-6 space-y-5\">\n        <li class=\"relative pl-11\">\n          <span class=\"absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-white\">1</span>\n          Open <span class=\"font-medium text-slate-900\">{{ brand }}</span> on your device and sign in with\n          the account you want to delete.\n        </li>\n        <li class=\"relative pl-11\">\n          <span class=\"absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-white\">2</span>\n          Tap the menu icon <span class=\"font-medium text-slate-900\">(&#9776;)</span> in the top-left corner\n          to open the side panel.\n        </li>\n        <li class=\"relative pl-11\">\n          <span class=\"absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-white\">3</span>\n          Scroll to the bottom of the panel. Below <em>Sign out</em> you will find the red\n          <span class=\"font-medium text-slate-900\">Delete account</span> button.\n        </li>\n        <li class=\"relative pl-11\">\n          <span class=\"absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-white\">4</span>\n          Read the confirmation notice and tap\n          <span class=\"font-medium text-slate-900\">Delete my account</span>.\n        </li>\n        <li class=\"relative pl-11\">\n          <span class=\"absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-white\">5</span>\n          Your account and its data are erased at that moment and you are signed out automatically.\n        </li>\n      </ol>\n\n      <div class=\"mt-6 rounded-lg border border-red-200 bg-red-50 p-5\">\n        <p class=\"text-sm leading-6 text-slate-700\">\n          <span class=\"font-semibold text-red-700\">This action is permanent and cannot be undone.</span>\n          There is no grace period and no way to recover the information once deletion is confirmed. If you\n          need to keep your inventory, export it first from the Reports section.\n        </p>\n      </div>\n    </section>\n\n    <!-- 2 -->\n    <section id=\"by-email\" class=\"scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 sm:p-8\">\n      <h2 class=\"text-2xl font-bold tracking-tight text-slate-900\">\n        <span class=\"mr-3 inline-flex h-7 w-7 items-center justify-center rounded-md bg-emerald-900 align-middle text-sm font-bold text-lime-300\">2</span>\n        If you cannot access the app\n      </h2>\n      <p class=\"mt-2 text-slate-600\">\n        For example, if you lost access to your email, uninstalled the app, or cannot sign in.\n      </p>\n\n      <ol class=\"mt-6 space-y-5\">\n        <li class=\"relative pl-11\">\n          <span class=\"absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-white\">1</span>\n          Write to\n          <a [href]=\"requestMailto\"\n             class=\"font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800\">{{ contactEmail }}</a>\n          from the email address you registered with.\n        </li>\n        <li class=\"relative pl-11\">\n          <span class=\"absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-white\">2</span>\n          Use <span class=\"font-medium text-slate-900\">&ldquo;Account deletion request&rdquo;</span> as the\n          subject and include the email address of the account you want deleted.\n        </li>\n        <li class=\"relative pl-11\">\n          <span class=\"absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-white\">3</span>\n          We verify your identity to make sure the request comes from the account holder.\n        </li>\n        <li class=\"relative pl-11\">\n          <span class=\"absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-white\">4</span>\n          We process the deletion within <span class=\"font-medium text-slate-900\">{{ emailSlaDays }} days</span>\n          at the latest and email you a confirmation when it is complete.\n        </li>\n      </ol>\n    </section>\n\n    <!-- 3 -->\n    <section id=\"deleted\" class=\"scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 sm:p-8\">\n      <h2 class=\"text-2xl font-bold tracking-tight text-slate-900\">\n        <span class=\"mr-3 inline-flex h-7 w-7 items-center justify-center rounded-md bg-emerald-900 align-middle text-sm font-bold text-lime-300\">3</span>\n        What data is deleted\n      </h2>\n      <p class=\"mt-2 text-slate-600\">\n        All of the following is permanently erased from our active systems.\n      </p>\n\n      <div class=\"mt-6 overflow-x-auto\">\n        <table class=\"w-full min-w-[34rem] border-collapse text-left text-sm\">\n          <thead>\n            <tr class=\"border-b border-slate-300\">\n              <th class=\"py-3 pr-4 font-semibold text-slate-900\">Type of data</th>\n              <th class=\"py-3 font-semibold text-slate-900\">What it includes</th>\n            </tr>\n          </thead>\n          <tbody class=\"divide-y divide-slate-200\">\n            <tr *ngFor=\"let row of deletedData\">\n              <td class=\"py-3 pr-4 align-top font-medium text-slate-900\">{{ row.type }}</td>\n              <td class=\"py-3 align-top text-slate-600\">{{ row.detail }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </section>\n\n    <!-- 4 -->\n    <section id=\"retained\" class=\"scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 sm:p-8\">\n      <h2 class=\"text-2xl font-bold tracking-tight text-slate-900\">\n        <span class=\"mr-3 inline-flex h-7 w-7 items-center justify-center rounded-md bg-emerald-900 align-middle text-sm font-bold text-lime-300\">4</span>\n        What is retained, and for how long\n      </h2>\n      <p class=\"mt-2 text-slate-600\">\n        Only what is strictly necessary for technical, security or legal reasons.\n      </p>\n\n      <div class=\"mt-6 overflow-x-auto\">\n        <table class=\"w-full min-w-[38rem] border-collapse text-left text-sm\">\n          <thead>\n            <tr class=\"border-b border-slate-300\">\n              <th class=\"py-3 pr-4 font-semibold text-slate-900\">What</th>\n              <th class=\"py-3 pr-4 font-semibold text-slate-900\">Why</th>\n              <th class=\"py-3 font-semibold text-slate-900\">Retention period</th>\n            </tr>\n          </thead>\n          <tbody class=\"divide-y divide-slate-200\">\n            <tr *ngFor=\"let row of retainedData\">\n              <td class=\"py-3 pr-4 align-top font-medium text-slate-900\">{{ row.what }}</td>\n              <td class=\"py-3 pr-4 align-top text-slate-600\">{{ row.why }}</td>\n              <td class=\"py-3 align-top whitespace-nowrap text-slate-600\">{{ row.period }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-5\">\n        <p class=\"font-semibold text-slate-900\">Shared company accounts</p>\n        <p class=\"mt-2 text-sm leading-6 text-slate-700\">\n          If your account belongs to an organization with other users, records documenting operations\n          carried out jointly may be retained under that organization's account, stripped of the data that\n          identifies you personally. Your profile, your credentials and your personal data are deleted all\n          the same.\n        </p>\n      </div>\n    </section>\n\n    <!-- 5 -->\n    <section id=\"partial\" class=\"scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 sm:p-8\">\n      <h2 class=\"text-2xl font-bold tracking-tight text-slate-900\">\n        <span class=\"mr-3 inline-flex h-7 w-7 items-center justify-center rounded-md bg-emerald-900 align-middle text-sm font-bold text-lime-300\">5</span>\n        Deleting part of your data without deleting your account\n      </h2>\n      <p class=\"mt-4\">\n        You do not have to delete your account to remove information from it. While signed in you can delete\n        individual inventory items, assets, locations, maintenance records and uploaded photos directly from\n        their detail screen; each deletion removes the record and its images from our systems.\n      </p>\n      <p class=\"mt-4\">\n        If you want a broader deletion &mdash; for example, every photo you uploaded, or all records from a\n        given period &mdash; while keeping your account active, email\n        <a [href]=\"'mailto:' + contactEmail\"\n           class=\"font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800\">{{ contactEmail }}</a>\n        describing what you want removed. The same {{ emailSlaDays }}-day window and the same retention\n        periods described above apply.\n      </p>\n    </section>\n\n    <!-- 6 -->\n    <section id=\"questions\" class=\"scroll-mt-24 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8\">\n      <h2 class=\"text-2xl font-bold tracking-tight text-slate-900\">Questions before you delete?</h2>\n      <p class=\"mt-4\">\n        If you have questions about what happens to your information, write to\n        <a [href]=\"'mailto:' + contactEmail\"\n           class=\"font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800\">{{ contactEmail }}</a>\n        before confirming the deletion. You can also read our\n        <a routerLink=\"/privacidad\"\n           class=\"font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800\">Privacy Policy</a>.\n      </p>\n\n      <div class=\"mt-6 border-t border-slate-200 pt-6\">\n        <p class=\"text-sm text-slate-500\">Last updated: {{ lastUpdated }}.</p>\n        <a routerLink=\"/\"\n           class=\"mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-800\">\n          Back to home\n        </a>\n      </div>\n    </section>\n\n  </div>\n</article>\n" }]
    }], () => [{ type: i1.Title }, { type: i1.Meta }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DeleteAccountComponent, { className: "DeleteAccountComponent", filePath: "src/app/pages/delete-account/delete-account.component.ts", lineNumber: 10 }); })();
