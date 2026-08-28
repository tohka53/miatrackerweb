import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.component.html',
  // Required on Angular 19+: components are standalone by default.
  standalone: false,
})
export class PrivacidadComponent implements OnInit {
  /** Update this date every time the policy text changes. */
  readonly lastUpdated = 'August 28, 2026';
  readonly effectiveDate = 'August 28, 2026';

  readonly brand = 'M.I.A Tracker';
  readonly site = 'https://www.miatracker.com';
  readonly privacyEmail = 'mcabreraSoS@miatracker.com';
  readonly addressLines = [
    'M.I.A Tracker',
    '51 Pleasant St # 1117',
    'Malden, MA 02148',
    'United States',
  ];

  /** Side navigation. Ids must match the section ids in the template. */
  readonly sections = [
    { id: 'who-we-are', title: '1. Who we are' },
    { id: 'scope', title: '2. Scope of this policy' },
    { id: 'information', title: '3. Information we collect' },
    { id: 'how-we-use', title: '4. How we use your information' },
    { id: 'cookies', title: '5. Cookies and similar technologies' },
    { id: 'sharing', title: '6. Who we share information with' },
    { id: 'transfers', title: '7. International visitors' },
    { id: 'retention', title: '8. How long we keep information' },
    { id: 'security', title: '9. How we protect information' },
    { id: 'rights', title: '10. Your privacy rights' },
    { id: 'children', title: '11. Children’s privacy' },
    { id: 'links', title: '12. Third-party links' },
    { id: 'legal', title: '13. Governing law' },
    { id: 'changes', title: '14. Changes to this policy' },
    { id: 'contact', title: '15. Contact us' },
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Privacy Policy | M.I.A Tracker');
    this.meta.updateTag({
      name: 'description',
      content:
        'M.I.A Tracker privacy policy: what we collect on miatracker.com, how we use it, who we share it with, and how you can exercise your privacy rights.',
    });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:title', content: 'Privacy Policy | M.I.A Tracker' });
    this.meta.updateTag({ property: 'og:url', content: `${this.site}/privacidad` });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
    }
  }
}
