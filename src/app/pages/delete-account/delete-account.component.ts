import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  // Required on Angular 19+: components are standalone by default.
  standalone: false,
})
export class DeleteAccountComponent implements OnInit {
  /** Update this date every time the text below changes. */
  readonly lastUpdated = 'August 28, 2026';

  readonly brand = 'M.I.A Tracker';
  readonly site = 'https://www.miatracker.com';

  /**
   * Google Play requires this page to name the app OR the developer exactly as
   * they appear on the store listing. Both are printed in the header.
   */
  readonly developer = 'Tech Solutions GT';

  /** Same mailbox as the privacy policy, so both pages stay consistent. */
  readonly contactEmail = 'mcabreraSoS@miatracker.com';

  /** Business days we commit to for email-based deletion requests. */
  readonly emailSlaDays = 30;

  /** Section 3 — everything that is erased. */
  readonly deletedData: { type: string; detail: string }[] = [
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
      detail:
        'Products, descriptions, barcodes and QR codes, quantities, stock alerts and per-location stock distribution.',
    },
    {
      type: 'Locations',
      detail: 'Physical locations you registered and their geographic coordinates.',
    },
    {
      type: 'Assets and maintenance',
      detail:
        'Registered assets, maintenance history, costs, assigned technicians and related notes.',
    },
    {
      type: 'Images',
      detail:
        'Every product and inventory photo you uploaded to the application storage.',
    },
    {
      type: 'Operations',
      detail:
        'Orders, transfers between locations, restock requests, stock alerts and notifications.',
    },
  ];

  /** Section 4 — the only things that survive, and for how long. */
  readonly retainedData: { what: string; why: string; period: string }[] = [
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

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Delete Your Account and Data | M.I.A Tracker');
    this.meta.updateTag({
      name: 'description',
      content:
        'How to request permanent deletion of your M.I.A Tracker account and its associated data: steps, what is deleted, what is retained and for how long.',
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
  get requestMailto(): string {
    const subject = encodeURIComponent('Account deletion request - M.I.A Tracker');
    const body = encodeURIComponent(
      'Account email: \nApp: M.I.A Tracker\nI request permanent deletion of my account and all associated data.\n'
    );
    return `mailto:${this.contactEmail}?subject=${subject}&body=${body}`;
  }
}
