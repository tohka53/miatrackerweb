import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  quickReplies?: QuickReply[];
}

interface QuickReply {
  text: string;
  value: string;
}

interface FAQ {
  keywords: string[];
  keywordsEs: string[];
  responseEn: string;
  responseEs: string;
  quickReplies?: { en: QuickReply[]; es: QuickReply[] };
}

@Component({
  selector: 'app-live-chat',
  standalone: false,
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  @ViewChild('messageInput') private messageInput!: ElementRef;

  isOpen = false;
  isMinimized = false;
  userMessage = '';
  messages: Message[] = [];
  isTyping = false;
  currentLanguage: 'en' | 'es' = 'en';
  unreadCount = 0;
  private messageIdCounter = 0;

  greetings = {
    en: {
      welcome: "👋 Hi there! I'm MIA, your virtual assistant. How can I help you today?",
      options: "Here are some things I can help you with:",
      notFound: "I couldn't find an exact answer to your question. Would you like to contact our support team?",
      contactRedirect: "I'll redirect you to our contact form. Our team is available 24/7 in English and Spanish! 🌐",
      thankYou: "Thank you! Is there anything else I can help you with?",
      goodbye: "Goodbye! Have a great day! 🚀"
    },
    es: {
      welcome: "👋 ¡Hola! Soy MIA, tu asistente virtual. ¿En qué puedo ayudarte hoy?",
      options: "Aquí hay algunas cosas con las que puedo ayudarte:",
      notFound: "No pude encontrar una respuesta exacta. ¿Te gustaría contactar a nuestro equipo de soporte?",
      contactRedirect: "Te redirigiré a nuestro formulario de contacto. ¡Equipo disponible 24/7 en inglés y español! 🌐",
      thankYou: "¡Gracias! ¿Hay algo más en lo que pueda ayudarte?",
      goodbye: "¡Adiós! ¡Que tengas un excelente día! 🚀"
    }
  };

  private faqDatabase: FAQ[] = [
    {
      keywords: ['price', 'pricing', 'cost', 'how much', 'plan', 'plans', 'payment', 'monthly'],
      keywordsEs: ['precio', 'precios', 'costo', 'cuánto', 'cuanto', 'plan', 'planes', 'pago', 'mensual'],
      responseEn: '💰 <strong>M.I.A Tracker Pricing:</strong><br><br>🏠 <strong>Property 3 Techs</strong> - $179.99/mo<br>• 3 users, mobile app, 1,000 items<br><br>🏢 <strong>Property 6 Techs</strong> - $229.99/mo<br>• 4-6 users, analytics, 2,000 items<br><br>🏗️ <strong>Enterprise</strong> - Custom pricing<br>• Unlimited everything<br><br>💡 <strong>20% more affordable</strong> than competitors!',
      responseEs: '💰 <strong>Precios de M.I.A Tracker:</strong><br><br>🏠 <strong>Property 3 Techs</strong> - $179.99/mes<br>• 3 usuarios, app móvil, 1,000 artículos<br><br>🏢 <strong>Property 6 Techs</strong> - $229.99/mes<br>• 4-6 usuarios, analíticas, 2,000 artículos<br><br>🏗️ <strong>Enterprise</strong> - Precio personalizado<br>• Todo ilimitado<br><br>💡 <strong>20% más económico</strong> que la competencia!',
      quickReplies: {
        en: [{ text: '📞 Contact Sales', value: 'contact' }, { text: '🎯 Request Demo', value: 'demo' }],
        es: [{ text: '📞 Contactar Ventas', value: 'contact' }, { text: '🎯 Solicitar Demo', value: 'demo' }]
      }
    },
    {
      keywords: ['platform', 'ios', 'android', 'web', 'mobile', 'app', 'download'],
      keywordsEs: ['plataforma', 'ios', 'android', 'web', 'móvil', 'app', 'descargar'],
      responseEn: '📱 <strong>Multi-Platform!</strong><br><br>✅ <strong>iOS</strong> - Coming Soon<br>✅ <strong>Android</strong> - Coming Soon<br>✅ <strong>Web</strong> - Any browser<br><br>🔄 <strong>Offline Mode</strong> with auto-sync!',
      responseEs: '📱 <strong>¡Multiplataforma!</strong><br><br>✅ <strong>iOS</strong> - Próximamente<br>✅ <strong>Android</strong> - Próximamente<br>✅ <strong>Web</strong> - Cualquier navegador<br><br>🔄 <strong>Modo Offline</strong> con sincronización!',
      quickReplies: {
        en: [{ text: '📲 See Features', value: 'features' }, { text: '💰 View Pricing', value: 'pricing' }],
        es: [{ text: '📲 Ver Funciones', value: 'features' }, { text: '💰 Ver Precios', value: 'pricing' }]
      }
    },
    {
      keywords: ['barcode', 'qr', 'scan', 'scanner', 'code'],
      keywordsEs: ['código de barras', 'qr', 'escanear', 'escáner', 'código'],
      responseEn: '📊 <strong>Advanced Scanning</strong><br><br>⚡ Ultra-Fast Scanner!<br><br>📱 <strong>Formats:</strong> QR, Code 128, EAN, UPC<br><br>🎯 Recognition under 100ms<br>📲 No extra hardware needed!',
      responseEs: '📊 <strong>Escaneo Avanzado</strong><br><br>⚡ ¡Escáner Ultra-Rápido!<br><br>📱 <strong>Formatos:</strong> QR, Code 128, EAN, UPC<br><br>🎯 Reconocimiento en menos de 100ms<br>📲 ¡Sin hardware adicional!',
      quickReplies: {
        en: [{ text: '📱 Mobile App', value: 'platform' }, { text: '🎯 Request Demo', value: 'demo' }],
        es: [{ text: '📱 App Móvil', value: 'platform' }, { text: '🎯 Solicitar Demo', value: 'demo' }]
      }
    },
    {
      keywords: ['support', 'help', 'contact', '24/7', 'phone', 'email'],
      keywordsEs: ['soporte', 'ayuda', 'contacto', '24/7', 'teléfono', 'email'],
      responseEn: '🛟 <strong>24/7 Bilingual Support</strong><br><br>🌐 English & Spanish!<br><br>📞 <strong>Channels:</strong><br>• Live Chat<br>• Email Support<br>• Phone (Priority plans)',
      responseEs: '🛟 <strong>Soporte 24/7 Bilingüe</strong><br><br>🌐 ¡Inglés y Español!<br><br>📞 <strong>Canales:</strong><br>• Chat en Vivo<br>• Email<br>• Teléfono (planes Priority)',
      quickReplies: {
        en: [{ text: '📧 Contact Us', value: 'contact' }, { text: '💰 Pricing', value: 'pricing' }],
        es: [{ text: '📧 Contáctanos', value: 'contact' }, { text: '💰 Precios', value: 'pricing' }]
      }
    },
    {
      keywords: ['feature', 'features', 'inventory', 'tracking', 'asset', 'maintenance'],
      keywordsEs: ['característica', 'funciones', 'inventario', 'seguimiento', 'activo', 'mantenimiento'],
      responseEn: '🚀 <strong>Key Features</strong><br><br>📊 Real-time inventory visibility<br>📱 iOS & Android apps<br>🔍 Full traceability<br>📈 Analytics & reports',
      responseEs: '🚀 <strong>Características</strong><br><br>📊 Visibilidad en tiempo real<br>📱 Apps iOS & Android<br>🔍 Trazabilidad completa<br>📈 Analíticas y reportes',
      quickReplies: {
        en: [{ text: '📊 Scanner', value: 'barcode' }, { text: '💰 Pricing', value: 'pricing' }],
        es: [{ text: '📊 Escáner', value: 'barcode' }, { text: '💰 Precios', value: 'pricing' }]
      }
    },
    {
      keywords: ['demo', 'trial', 'try', 'test'],
      keywordsEs: ['demo', 'prueba', 'probar'],
      responseEn: '🎯 <strong>Free Demo!</strong><br><br>✅ Live walkthrough<br>✅ Q&A with experts<br>✅ No commitment<br><br>⏱️ 30-45 minutes',
      responseEs: '🎯 <strong>¡Demo Gratis!</strong><br><br>✅ Recorrido en vivo<br>✅ Preguntas y respuestas<br>✅ Sin compromiso<br><br>⏱️ 30-45 minutos',
      quickReplies: {
        en: [{ text: '📅 Schedule Demo', value: 'contact' }, { text: '📋 Features', value: 'features' }],
        es: [{ text: '📅 Agendar Demo', value: 'contact' }, { text: '📋 Funciones', value: 'features' }]
      }
    }
  ];

  private topicMappings: { [key: string]: string } = {
    'pricing': 'price',
    'platform': 'platform',
    'barcode': 'barcode',
    'support': 'support',
    'features': 'feature',
    'demo': 'demo',
    'contact': 'contact'
  };

  ngOnInit(): void {
    const browserLang = navigator.language.toLowerCase();
    this.currentLanguage = browserLang.startsWith('es') ? 'es' : 'en';
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  toggleChat(): void {
    if (this.isMinimized) {
      this.isMinimized = false;
      return;
    }
    this.isOpen = !this.isOpen;
    this.unreadCount = 0;
    if (this.isOpen && this.messages.length === 0) {
      this.sendWelcomeMessage();
    }
  }

  minimizeChat(): void {
    this.isMinimized = true;
    this.isOpen = false;
  }

  closeChat(): void {
    this.isOpen = false;
    this.isMinimized = false;
  }

  private sendWelcomeMessage(): void {
    this.addBotMessage(this.greetings[this.currentLanguage].welcome);
    setTimeout(() => {
      const quickReplies = this.currentLanguage === 'en'
        ? [
            { text: '💰 Pricing', value: 'pricing' },
            { text: '📱 Platforms', value: 'platform' },
            { text: '📊 Scanner', value: 'barcode' },
            { text: '📋 Features', value: 'features' }
          ]
        : [
            { text: '💰 Precios', value: 'pricing' },
            { text: '📱 Plataformas', value: 'platform' },
            { text: '📊 Escáner', value: 'barcode' },
            { text: '📋 Funciones', value: 'features' }
          ];
      this.addBotMessage(this.greetings[this.currentLanguage].options, quickReplies);
    }, 800);
  }

  sendMessage(): void {
    const message = this.userMessage.trim();
    if (!message) return;
    this.detectLanguage(message);
    this.addUserMessage(message);
    this.userMessage = '';
    this.isTyping = true;
    setTimeout(() => {
      this.isTyping = false;
      this.processUserMessage(message);
    }, 800 + Math.random() * 700);
  }

  handleQuickReply(reply: QuickReply): void {
    this.addUserMessage(reply.text);
    this.isTyping = true;
    setTimeout(() => {
      this.isTyping = false;
      if (reply.value === 'contact') {
        this.redirectToContact();
        return;
      }
      const searchTerm = this.topicMappings[reply.value] || reply.value;
      const faq = this.findFAQ(searchTerm);
      if (faq) {
        const response = this.currentLanguage === 'es' ? faq.responseEs : faq.responseEn;
        const quickReplies = faq.quickReplies
          ? (this.currentLanguage === 'es' ? faq.quickReplies.es : faq.quickReplies.en)
          : undefined;
        this.addBotMessage(response, quickReplies);
      } else {
        this.handleNotFound();
      }
    }, 600);
  }

  private detectLanguage(text: string): void {
    const spanishWords = ['hola', 'qué', 'cómo', 'cuánto', 'precio', 'ayuda', 'gracias'];
    const textLower = text.toLowerCase();
    const hasSpanish = spanishWords.some(word => textLower.includes(word));
    if (hasSpanish || /[áéíóúüñ¿¡]/.test(text)) {
      this.currentLanguage = 'es';
    }
  }

  private processUserMessage(message: string): void {
    const lowerMessage = message.toLowerCase();
    if (['hi', 'hello', 'hola'].some(g => lowerMessage.includes(g))) {
      const greeting = this.currentLanguage === 'es' ? '¡Hola! 👋 ¿En qué puedo ayudarte?' : 'Hello! 👋 How can I help you?';
      this.addBotMessage(greeting);
      return;
    }
    if (['bye', 'adios', 'adiós'].some(g => lowerMessage.includes(g))) {
      this.addBotMessage(this.greetings[this.currentLanguage].goodbye);
      return;
    }
    if (['thank', 'gracias'].some(t => lowerMessage.includes(t))) {
      this.addBotMessage(this.greetings[this.currentLanguage].thankYou);
      return;
    }
    const faq = this.findFAQ(lowerMessage);
    if (faq) {
      const response = this.currentLanguage === 'es' ? faq.responseEs : faq.responseEn;
      const quickReplies = faq.quickReplies
        ? (this.currentLanguage === 'es' ? faq.quickReplies.es : faq.quickReplies.en)
        : undefined;
      this.addBotMessage(response, quickReplies);
    } else {
      this.handleNotFound();
    }
  }

  private findFAQ(query: string): FAQ | null {
    const queryLower = query.toLowerCase();
    for (const faq of this.faqDatabase) {
      const keywords = [...faq.keywords, ...faq.keywordsEs];
      for (const keyword of keywords) {
        if (queryLower.includes(keyword.toLowerCase())) {
          return faq;
        }
      }
    }
    return null;
  }

  private handleNotFound(): void {
    const quickReplies = this.currentLanguage === 'en'
      ? [{ text: '📧 Contact Support', value: 'contact' }, { text: '📋 Features', value: 'features' }]
      : [{ text: '📧 Contactar Soporte', value: 'contact' }, { text: '📋 Funciones', value: 'features' }];
    this.addBotMessage(this.greetings[this.currentLanguage].notFound, quickReplies);
  }

  private redirectToContact(): void {
    this.addBotMessage(this.greetings[this.currentLanguage].contactRedirect);
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        this.minimizeChat();
      }
    }, 1500);
  }

  private addUserMessage(text: string): void {
    this.messages.push({ id: ++this.messageIdCounter, text, sender: 'user', timestamp: new Date() });
  }

  private addBotMessage(text: string, quickReplies?: QuickReply[]): void {
    this.messages.push({ id: ++this.messageIdCounter, text, sender: 'bot', timestamp: new Date(), quickReplies });
    if (!this.isOpen || this.isMinimized) this.unreadCount++;
  }

  private scrollToBottom(): void {
    if (this.messagesContainer) {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  getTimeString(date: Date): string {
    return date.toLocaleTimeString(this.currentLanguage === 'es' ? 'es-ES' : 'en-US', { hour: '2-digit', minute: '2-digit' });
  }
}