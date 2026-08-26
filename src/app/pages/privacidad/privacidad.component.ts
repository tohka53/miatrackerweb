import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.component.html',
  // Necesario en Angular 19+: los componentes son standalone por defecto.
  // En Angular 17/18 es inofensivo dejarlo.
  standalone: false,
})
export class PrivacidadComponent implements OnInit {
  /** Cambiá esta fecha cada vez que edites el texto de la política. */
  readonly ultimaActualizacion = '26 de agosto de 2026';
  readonly vigenciaDesde = '26 de agosto de 2026';

  readonly marca = 'M.I.A Tracker';
  readonly sitio = 'https://www.miatracker.com';
  readonly correoPrivacidad = 'mcabreraSoS@miatracker.com';

  /** Índice lateral. Los ids deben coincidir con los del HTML. */
  readonly secciones = [
    { id: 'responsable', titulo: '1. Quiénes somos' },
    { id: 'alcance', titulo: '2. Alcance de esta política' },
    { id: 'datos', titulo: '3. Qué datos recopilamos' },
    { id: 'finalidades', titulo: '4. Para qué usamos los datos' },
    { id: 'cookies', titulo: '5. Cookies y tecnologías similares' },
    { id: 'terceros', titulo: '6. Con quién compartimos los datos' },
    { id: 'transferencias', titulo: '7. Transferencias internacionales' },
    { id: 'conservacion', titulo: '8. Cuánto tiempo conservamos los datos' },
    { id: 'seguridad', titulo: '9. Seguridad de la información' },
    { id: 'derechos', titulo: '10. Tus derechos y cómo ejercerlos' },
    { id: 'menores', titulo: '11. Menores de edad' },
    { id: 'enlaces', titulo: '12. Enlaces a sitios de terceros' },
    { id: 'marco-legal', titulo: '13. Marco legal aplicable' },
    { id: 'cambios', titulo: '14. Cambios a esta política' },
    { id: 'contacto', titulo: '15. Contacto' },
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Política de Privacidad | M.I.A Tracker');
    this.meta.updateTag({
      name: 'description',
      content:
        'Política de privacidad de M.I.A Tracker: qué datos recopilamos en miatracker.com, para qué los usamos, con quién los compartimos y cómo podés ejercer tus derechos.',
    });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:title', content: 'Política de Privacidad | M.I.A Tracker' });
    this.meta.updateTag({ property: 'og:url', content: `${this.sitio}/privacidad` });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // La ruta se abre desde el footer: asegurate de empezar arriba de la página.
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
    }
  }
}
