import { Component, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = ["messagesContainer"];
const _c1 = ["messageInput"];
function LiveChatComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 34);
    i0.ɵɵelement(1, "path", 35);
    i0.ɵɵelementEnd();
} }
function LiveChatComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 34);
    i0.ɵɵelement(1, "line", 21)(2, "line", 22);
    i0.ɵɵelementEnd();
} }
function LiveChatComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.unreadCount > 9 ? "9+" : ctx_r1.unreadCount);
} }
function LiveChatComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38);
    i0.ɵɵtext(2, "\uD83D\uDE80");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4", 39);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 40);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.currentLanguage === "es" ? "\u00A1Bienvenido!" : "Welcome!");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.currentLanguage === "es" ? "Tu asistente de inventario" : "Your inventory assistant");
} }
function LiveChatComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "span");
    i0.ɵɵtext(2, "M");
    i0.ɵɵelementEnd()();
} }
function LiveChatComponent_div_30_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function LiveChatComponent_div_30_div_6_button_1_Template_button_click_0_listener() { const reply_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.handleQuickReply(reply_r4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const reply_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", reply_r4.text, " ");
} }
function LiveChatComponent_div_30_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵtemplate(1, LiveChatComponent_div_30_div_6_button_1_Template, 2, 1, "button", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", message_r5.quickReplies);
} }
function LiveChatComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtemplate(1, LiveChatComponent_div_30_div_1_Template, 3, 0, "div", 42);
    i0.ɵɵelementStart(2, "div", 43);
    i0.ɵɵelement(3, "div", 44);
    i0.ɵɵelementStart(4, "span", 45);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, LiveChatComponent_div_30_div_6_Template, 2, 1, "div", 46);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("user", message_r5.sender === "user")("bot", message_r5.sender === "bot");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r5.sender === "bot");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", message_r5.text, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.getTimeString(message_r5.timestamp));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r5.quickReplies && message_r5.quickReplies.length > 0);
} }
function LiveChatComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51)(1, "div", 47)(2, "span");
    i0.ɵɵtext(3, "M");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 43)(5, "div", 52);
    i0.ɵɵelement(6, "span")(7, "span")(8, "span");
    i0.ɵɵelementEnd()()();
} }
export class LiveChatComponent {
    messagesContainer;
    messageInput;
    isOpen = false;
    isMinimized = false;
    userMessage = '';
    messages = [];
    isTyping = false;
    currentLanguage = 'en';
    unreadCount = 0;
    messageIdCounter = 0;
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
    faqDatabase = [
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
    topicMappings = {
        'pricing': 'price',
        'platform': 'platform',
        'barcode': 'barcode',
        'support': 'support',
        'features': 'feature',
        'demo': 'demo',
        'contact': 'contact'
    };
    ngOnInit() {
        const browserLang = navigator.language.toLowerCase();
        this.currentLanguage = browserLang.startsWith('es') ? 'es' : 'en';
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    toggleChat() {
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
    minimizeChat() {
        this.isMinimized = true;
        this.isOpen = false;
    }
    closeChat() {
        this.isOpen = false;
        this.isMinimized = false;
    }
    sendWelcomeMessage() {
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
    sendMessage() {
        const message = this.userMessage.trim();
        if (!message)
            return;
        this.detectLanguage(message);
        this.addUserMessage(message);
        this.userMessage = '';
        this.isTyping = true;
        setTimeout(() => {
            this.isTyping = false;
            this.processUserMessage(message);
        }, 800 + Math.random() * 700);
    }
    handleQuickReply(reply) {
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
            }
            else {
                this.handleNotFound();
            }
        }, 600);
    }
    detectLanguage(text) {
        const spanishWords = ['hola', 'qué', 'cómo', 'cuánto', 'precio', 'ayuda', 'gracias'];
        const textLower = text.toLowerCase();
        const hasSpanish = spanishWords.some(word => textLower.includes(word));
        if (hasSpanish || /[áéíóúüñ¿¡]/.test(text)) {
            this.currentLanguage = 'es';
        }
    }
    processUserMessage(message) {
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
        }
        else {
            this.handleNotFound();
        }
    }
    findFAQ(query) {
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
    handleNotFound() {
        const quickReplies = this.currentLanguage === 'en'
            ? [{ text: '📧 Contact Support', value: 'contact' }, { text: '📋 Features', value: 'features' }]
            : [{ text: '📧 Contactar Soporte', value: 'contact' }, { text: '📋 Funciones', value: 'features' }];
        this.addBotMessage(this.greetings[this.currentLanguage].notFound, quickReplies);
    }
    redirectToContact() {
        this.addBotMessage(this.greetings[this.currentLanguage].contactRedirect);
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                this.minimizeChat();
            }
        }, 1500);
    }
    addUserMessage(text) {
        this.messages.push({ id: ++this.messageIdCounter, text, sender: 'user', timestamp: new Date() });
    }
    addBotMessage(text, quickReplies) {
        this.messages.push({ id: ++this.messageIdCounter, text, sender: 'bot', timestamp: new Date(), quickReplies });
        if (!this.isOpen || this.isMinimized)
            this.unreadCount++;
    }
    scrollToBottom() {
        if (this.messagesContainer) {
            this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
        }
    }
    onKeyPress(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            this.sendMessage();
        }
    }
    getTimeString(date) {
        return date.toLocaleTimeString(this.currentLanguage === 'es' ? 'es-ES' : 'en-US', { hour: '2-digit', minute: '2-digit' });
    }
    static ɵfac = function LiveChatComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LiveChatComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LiveChatComponent, selectors: [["app-live-chat"]], viewQuery: function LiveChatComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.messagesContainer = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.messageInput = _t.first);
        } }, standalone: false, decls: 42, vars: 16, consts: [["messagesContainer", ""], ["messageInput", ""], [1, "chat-toggle-btn", 3, "click"], [1, "toggle-icon-container"], ["class", "toggle-icon", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "unread-badge", 4, "ngIf"], [1, "pulse-ring"], [1, "chat-window"], [1, "chat-header"], [1, "header-left"], [1, "avatar"], [1, "avatar-text"], [1, "status-dot"], [1, "header-info"], [1, "header-title"], [1, "header-subtitle"], [1, "online-indicator"], [1, "header-actions"], [1, "header-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "messages-container"], ["class", "welcome-banner", 4, "ngIf"], ["class", "message-wrapper", 3, "user", "bot", 4, "ngFor", "ngForOf"], ["class", "message-wrapper bot", 4, "ngIf"], [1, "input-area"], [1, "input-container"], ["type", "text", 1, "message-input", 3, "ngModelChange", "keypress", "ngModel", "placeholder"], [1, "send-btn", 3, "click", "disabled"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"], [1, "powered-by"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "toggle-icon"], ["d", "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"], [1, "unread-badge"], [1, "welcome-banner"], [1, "welcome-icon"], [1, "welcome-title"], [1, "welcome-text"], [1, "message-wrapper"], ["class", "message-avatar", 4, "ngIf"], [1, "message-content"], [1, "message-bubble", 3, "innerHTML"], [1, "message-time"], ["class", "quick-replies", 4, "ngIf"], [1, "message-avatar"], [1, "quick-replies"], ["class", "quick-reply-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "quick-reply-btn", 3, "click"], [1, "message-wrapper", "bot"], [1, "typing-indicator"]], template: function LiveChatComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 2);
            i0.ɵɵlistener("click", function LiveChatComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.toggleChat()); });
            i0.ɵɵelementStart(1, "div", 3);
            i0.ɵɵtemplate(2, LiveChatComponent__svg_svg_2_Template, 2, 0, "svg", 4)(3, LiveChatComponent__svg_svg_3_Template, 3, 0, "svg", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, LiveChatComponent_span_4_Template, 2, 1, "span", 5);
            i0.ɵɵelement(5, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "span", 11);
            i0.ɵɵtext(11, "M");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "span", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 13)(14, "h3", 14);
            i0.ɵɵtext(15, "MIA Assistant");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p", 15);
            i0.ɵɵelement(17, "span", 16);
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "div", 17)(20, "button", 18);
            i0.ɵɵlistener("click", function LiveChatComponent_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.minimizeChat()); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(21, "svg", 19);
            i0.ɵɵelement(22, "line", 20);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(23, "button", 18);
            i0.ɵɵlistener("click", function LiveChatComponent_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.closeChat()); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(24, "svg", 19);
            i0.ɵɵelement(25, "line", 21)(26, "line", 22);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(27, "div", 23, 0);
            i0.ɵɵtemplate(29, LiveChatComponent_div_29_Template, 7, 2, "div", 24)(30, LiveChatComponent_div_30_Template, 7, 8, "div", 25)(31, LiveChatComponent_div_31_Template, 9, 0, "div", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 27)(33, "div", 28)(34, "input", 29, 1);
            i0.ɵɵtwoWayListener("ngModelChange", function LiveChatComponent_Template_input_ngModelChange_34_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.userMessage, $event) || (ctx.userMessage = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("keypress", function LiveChatComponent_Template_input_keypress_34_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onKeyPress($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "button", 30);
            i0.ɵɵlistener("click", function LiveChatComponent_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.sendMessage()); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(37, "svg", 19);
            i0.ɵɵelement(38, "line", 31)(39, "polygon", 32);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(40, "p", 33);
            i0.ɵɵtext(41);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵattribute("aria-label", ctx.isOpen ? "Close chat" : "Open chat");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.isOpen);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isOpen);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.unreadCount > 0 && !ctx.isOpen);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("open", ctx.isOpen)("minimized", ctx.isMinimized);
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate1(" ", ctx.currentLanguage === "es" ? "En l\u00EDnea" : "Online", " ");
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngIf", ctx.messages.length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.messages);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isTyping);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.userMessage);
            i0.ɵɵproperty("placeholder", ctx.currentLanguage === "es" ? "Escribe tu mensaje..." : "Type your message...");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !ctx.userMessage.trim());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.currentLanguage === "es" ? "Soporte 24/7" : "24/7 Support", " \uD83C\uDF10");
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["\n\n.chat-toggle-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #047857 0%, #84cc16 100%);\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 8px 32px rgba(4, 120, 87, 0.4);\n  z-index: 9998;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.chat-toggle-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.toggle-icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.toggle-icon[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  color: white;\n}\n\n.unread-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.25rem;\n  right: -0.25rem;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.375rem;\n  background: #ef4444;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 700;\n  border-radius: 9999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.pulse-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 3px solid #047857;\n  animation: _ngcontent-%COMP%_pulse-ring 2s ease-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse-ring {\n  0% { transform: scale(1); opacity: 0.8; }\n  100% { transform: scale(1.8); opacity: 0; }\n}\n\n\n\n.chat-window[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 6.5rem;\n  right: 1.5rem;\n  width: 380px;\n  max-width: calc(100vw - 2rem);\n  height: 550px;\n  max-height: calc(100vh - 8rem);\n  background: #ffffff;\n  border-radius: 1.25rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 9999;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(20px) scale(0.95);\n  transition: all 0.3s ease;\n  border: 1px solid #e2e8f0;\n}\n\n.chat-window.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0) scale(1);\n}\n\n.chat-window.minimized[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.chat-window.minimized[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%], \n.chat-window.minimized[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n.chat-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #047857 0%, #065f46 100%);\n  padding: 1rem 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 2.75rem;\n  height: 2.75rem;\n  border-radius: 50%;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.avatar-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #047857;\n}\n\n.status-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 0.75rem;\n  height: 0.75rem;\n  background: #22c55e;\n  border: 2px solid white;\n  border-radius: 50%;\n}\n\n.header-info[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n}\n\n.header-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin: 0;\n  opacity: 0.9;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n\n.online-indicator[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  background: #22c55e;\n  border-radius: 50%;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n\n.header-btn[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border: none;\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n\n.header-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.header-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n\n\n\n.messages-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem;\n  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);\n}\n\n.welcome-banner[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n}\n\n.welcome-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.5rem;\n}\n\n.welcome-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0;\n}\n\n.message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  margin-bottom: 1rem;\n  animation: _ngcontent-%COMP%_message-in 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_message-in {\n  from { opacity: 0; transform: translateY(10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.message-wrapper.user[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n.message-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: #047857;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.message-content[_ngcontent-%COMP%] {\n  max-width: 80%;\n  display: flex;\n  flex-direction: column;\n}\n\n.message-wrapper.user[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n\n.message-bubble[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  border-radius: 1rem;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n\n.message-wrapper.bot[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background: white;\n  color: #1e293b;\n  border: 1px solid #e2e8f0;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.message-wrapper.user[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #047857 0%, #065f46 100%);\n  color: white;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.message-time[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: #64748b;\n  margin-top: 0.25rem;\n  padding: 0 0.25rem;\n}\n\n.quick-replies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.75rem;\n}\n\n.quick-reply-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.875rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #047857;\n  background: white;\n  border: 1.5px solid #047857;\n  border-radius: 9999px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.quick-reply-btn[_ngcontent-%COMP%]:hover {\n  background: #047857;\n  color: white;\n}\n\n\n\n.typing-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 1rem 1.25rem;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 1rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  background: #64748b;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_typing-dot 1.4s infinite both;\n}\n\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) { animation-delay: 0.2s; }\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) { animation-delay: 0.4s; }\n\n@keyframes _ngcontent-%COMP%_typing-dot {\n  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }\n  30% { transform: translateY(-0.375rem); opacity: 1; }\n}\n\n\n\n.input-area[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: white;\n  border-top: 1px solid #e2e8f0;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 0.5rem 0.5rem 1rem;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 9999px;\n  transition: border-color 0.2s;\n}\n\n.input-container[_ngcontent-%COMP%]:focus-within {\n  border-color: #047857;\n}\n\n.message-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 0.9375rem;\n  color: #1e293b;\n  outline: none;\n}\n\n.message-input[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n}\n\n.send-btn[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border: none;\n  background: linear-gradient(135deg, #047857 0%, #84cc16 100%);\n  color: white;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n\n.send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.1);\n}\n\n.send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.send-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.powered-by[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: #64748b;\n  text-align: center;\n  margin: 0.75rem 0 0;\n}\n\n\n\n@media (max-width: 480px) {\n  .chat-toggle-btn[_ngcontent-%COMP%] {\n    bottom: 1rem;\n    right: 1rem;\n    width: 3.5rem;\n    height: 3.5rem;\n  }\n\n  .chat-window[_ngcontent-%COMP%] {\n    bottom: 0;\n    right: 0;\n    left: 0;\n    width: 100%;\n    max-width: 100%;\n    height: 100%;\n    max-height: 100%;\n    border-radius: 0;\n  }\n}\n\n\n\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e2e8f0;\n  border-radius: 3px;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LiveChatComponent, [{
        type: Component,
        args: [{ selector: 'app-live-chat', standalone: false, template: "<!-- Chat Toggle Button -->\n<button\n  (click)=\"toggleChat()\"\n  class=\"chat-toggle-btn\"\n  [attr.aria-label]=\"isOpen ? 'Close chat' : 'Open chat'\">\n  <div class=\"toggle-icon-container\">\n    <svg *ngIf=\"!isOpen\" class=\"toggle-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"/>\n    </svg>\n    <svg *ngIf=\"isOpen\" class=\"toggle-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/>\n      <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/>\n    </svg>\n  </div>\n  <span *ngIf=\"unreadCount > 0 && !isOpen\" class=\"unread-badge\">{{ unreadCount > 9 ? '9+' : unreadCount }}</span>\n  <span class=\"pulse-ring\"></span>\n</button>\n\n<!-- Chat Window -->\n<div class=\"chat-window\" [class.open]=\"isOpen\" [class.minimized]=\"isMinimized\">\n  <!-- Header -->\n  <div class=\"chat-header\">\n    <div class=\"header-left\">\n      <div class=\"avatar\">\n        <span class=\"avatar-text\">M</span>\n        <span class=\"status-dot\"></span>\n      </div>\n      <div class=\"header-info\">\n        <h3 class=\"header-title\">MIA Assistant</h3>\n        <p class=\"header-subtitle\">\n          <span class=\"online-indicator\"></span>\n          {{ currentLanguage === 'es' ? 'En l\u00EDnea' : 'Online' }}\n        </p>\n      </div>\n    </div>\n    <div class=\"header-actions\">\n      <button class=\"header-btn\" (click)=\"minimizeChat()\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n          <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/>\n        </svg>\n      </button>\n      <button class=\"header-btn\" (click)=\"closeChat()\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n          <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/>\n          <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n\n  <!-- Messages -->\n  <div class=\"messages-container\" #messagesContainer>\n    <div *ngIf=\"messages.length === 0\" class=\"welcome-banner\">\n      <div class=\"welcome-icon\">\uD83D\uDE80</div>\n      <h4 class=\"welcome-title\">{{ currentLanguage === 'es' ? '\u00A1Bienvenido!' : 'Welcome!' }}</h4>\n      <p class=\"welcome-text\">{{ currentLanguage === 'es' ? 'Tu asistente de inventario' : 'Your inventory assistant' }}</p>\n    </div>\n\n    <div *ngFor=\"let message of messages\" class=\"message-wrapper\" [class.user]=\"message.sender === 'user'\" [class.bot]=\"message.sender === 'bot'\">\n      <div *ngIf=\"message.sender === 'bot'\" class=\"message-avatar\">\n        <span>M</span>\n      </div>\n      <div class=\"message-content\">\n        <div class=\"message-bubble\" [innerHTML]=\"message.text\"></div>\n        <span class=\"message-time\">{{ getTimeString(message.timestamp) }}</span>\n        <div *ngIf=\"message.quickReplies && message.quickReplies.length > 0\" class=\"quick-replies\">\n          <button *ngFor=\"let reply of message.quickReplies\" class=\"quick-reply-btn\" (click)=\"handleQuickReply(reply)\">\n            {{ reply.text }}\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"isTyping\" class=\"message-wrapper bot\">\n      <div class=\"message-avatar\"><span>M</span></div>\n      <div class=\"message-content\">\n        <div class=\"typing-indicator\">\n          <span></span><span></span><span></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Input -->\n  <div class=\"input-area\">\n    <div class=\"input-container\">\n      <input\n        #messageInput\n        type=\"text\"\n        [(ngModel)]=\"userMessage\"\n        (keypress)=\"onKeyPress($event)\"\n        [placeholder]=\"currentLanguage === 'es' ? 'Escribe tu mensaje...' : 'Type your message...'\"\n        class=\"message-input\"\n      />\n      <button class=\"send-btn\" (click)=\"sendMessage()\" [disabled]=\"!userMessage.trim()\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n          <line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"/>\n          <polygon points=\"22 2 15 22 11 13 2 9 22 2\"/>\n        </svg>\n      </button>\n    </div>\n    <p class=\"powered-by\">{{ currentLanguage === 'es' ? 'Soporte 24/7' : '24/7 Support' }} \uD83C\uDF10</p>\n  </div>\n</div>", styles: ["/* Toggle Button */\n.chat-toggle-btn {\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #047857 0%, #84cc16 100%);\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 8px 32px rgba(4, 120, 87, 0.4);\n  z-index: 9998;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.chat-toggle-btn:hover {\n  transform: scale(1.1);\n}\n\n.toggle-icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.toggle-icon {\n  width: 1.75rem;\n  height: 1.75rem;\n  color: white;\n}\n\n.unread-badge {\n  position: absolute;\n  top: -0.25rem;\n  right: -0.25rem;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.375rem;\n  background: #ef4444;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 700;\n  border-radius: 9999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.pulse-ring {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 3px solid #047857;\n  animation: pulse-ring 2s ease-out infinite;\n}\n\n@keyframes pulse-ring {\n  0% { transform: scale(1); opacity: 0.8; }\n  100% { transform: scale(1.8); opacity: 0; }\n}\n\n/* Chat Window */\n.chat-window {\n  position: fixed;\n  bottom: 6.5rem;\n  right: 1.5rem;\n  width: 380px;\n  max-width: calc(100vw - 2rem);\n  height: 550px;\n  max-height: calc(100vh - 8rem);\n  background: #ffffff;\n  border-radius: 1.25rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 9999;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(20px) scale(0.95);\n  transition: all 0.3s ease;\n  border: 1px solid #e2e8f0;\n}\n\n.chat-window.open {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0) scale(1);\n}\n\n.chat-window.minimized {\n  height: auto;\n}\n\n.chat-window.minimized .messages-container,\n.chat-window.minimized .input-area {\n  display: none;\n}\n\n/* Header */\n.chat-header {\n  background: linear-gradient(135deg, #047857 0%, #065f46 100%);\n  padding: 1rem 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n.avatar {\n  position: relative;\n  width: 2.75rem;\n  height: 2.75rem;\n  border-radius: 50%;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.avatar-text {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #047857;\n}\n\n.status-dot {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 0.75rem;\n  height: 0.75rem;\n  background: #22c55e;\n  border: 2px solid white;\n  border-radius: 50%;\n}\n\n.header-info {\n  color: white;\n}\n\n.header-title {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n}\n\n.header-subtitle {\n  font-size: 0.75rem;\n  margin: 0;\n  opacity: 0.9;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n\n.online-indicator {\n  width: 0.5rem;\n  height: 0.5rem;\n  background: #22c55e;\n  border-radius: 50%;\n}\n\n.header-actions {\n  display: flex;\n  gap: 0.25rem;\n}\n\n.header-btn {\n  width: 2rem;\n  height: 2rem;\n  border: none;\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n\n.header-btn:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.header-btn svg {\n  width: 1rem;\n  height: 1rem;\n}\n\n/* Messages */\n.messages-container {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem;\n  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);\n}\n\n.welcome-banner {\n  text-align: center;\n  padding: 2rem 1rem;\n}\n\n.welcome-icon {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n\n.welcome-title {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.5rem;\n}\n\n.welcome-text {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0;\n}\n\n.message-wrapper {\n  display: flex;\n  gap: 0.625rem;\n  margin-bottom: 1rem;\n  animation: message-in 0.3s ease-out;\n}\n\n@keyframes message-in {\n  from { opacity: 0; transform: translateY(10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.message-wrapper.user {\n  flex-direction: row-reverse;\n}\n\n.message-avatar {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: #047857;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.message-content {\n  max-width: 80%;\n  display: flex;\n  flex-direction: column;\n}\n\n.message-wrapper.user .message-content {\n  align-items: flex-end;\n}\n\n.message-bubble {\n  padding: 0.875rem 1rem;\n  border-radius: 1rem;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n\n.message-wrapper.bot .message-bubble {\n  background: white;\n  color: #1e293b;\n  border: 1px solid #e2e8f0;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.message-wrapper.user .message-bubble {\n  background: linear-gradient(135deg, #047857 0%, #065f46 100%);\n  color: white;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.message-time {\n  font-size: 0.6875rem;\n  color: #64748b;\n  margin-top: 0.25rem;\n  padding: 0 0.25rem;\n}\n\n.quick-replies {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.75rem;\n}\n\n.quick-reply-btn {\n  padding: 0.5rem 0.875rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #047857;\n  background: white;\n  border: 1.5px solid #047857;\n  border-radius: 9999px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.quick-reply-btn:hover {\n  background: #047857;\n  color: white;\n}\n\n/* Typing */\n.typing-indicator {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 1rem 1.25rem;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 1rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.typing-indicator span {\n  width: 0.5rem;\n  height: 0.5rem;\n  background: #64748b;\n  border-radius: 50%;\n  animation: typing-dot 1.4s infinite both;\n}\n\n.typing-indicator span:nth-child(2) { animation-delay: 0.2s; }\n.typing-indicator span:nth-child(3) { animation-delay: 0.4s; }\n\n@keyframes typing-dot {\n  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }\n  30% { transform: translateY(-0.375rem); opacity: 1; }\n}\n\n/* Input */\n.input-area {\n  padding: 1rem;\n  background: white;\n  border-top: 1px solid #e2e8f0;\n}\n\n.input-container {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 0.5rem 0.5rem 1rem;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 9999px;\n  transition: border-color 0.2s;\n}\n\n.input-container:focus-within {\n  border-color: #047857;\n}\n\n.message-input {\n  flex: 1;\n  border: none;\n  background: transparent;\n  font-size: 0.9375rem;\n  color: #1e293b;\n  outline: none;\n}\n\n.message-input::placeholder {\n  color: #64748b;\n}\n\n.send-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  border: none;\n  background: linear-gradient(135deg, #047857 0%, #84cc16 100%);\n  color: white;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n\n.send-btn:hover:not(:disabled) {\n  transform: scale(1.1);\n}\n\n.send-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.send-btn svg {\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.powered-by {\n  font-size: 0.6875rem;\n  color: #64748b;\n  text-align: center;\n  margin: 0.75rem 0 0;\n}\n\n/* Mobile */\n@media (max-width: 480px) {\n  .chat-toggle-btn {\n    bottom: 1rem;\n    right: 1rem;\n    width: 3.5rem;\n    height: 3.5rem;\n  }\n\n  .chat-window {\n    bottom: 0;\n    right: 0;\n    left: 0;\n    width: 100%;\n    max-width: 100%;\n    height: 100%;\n    max-height: 100%;\n    border-radius: 0;\n  }\n}\n\n/* Scrollbar */\n.messages-container::-webkit-scrollbar {\n  width: 6px;\n}\n\n.messages-container::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.messages-container::-webkit-scrollbar-thumb {\n  background: #e2e8f0;\n  border-radius: 3px;\n}"] }]
    }], null, { messagesContainer: [{
            type: ViewChild,
            args: ['messagesContainer']
        }], messageInput: [{
            type: ViewChild,
            args: ['messageInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LiveChatComponent, { className: "LiveChatComponent", filePath: "src/app/components/live-chat/live-chat.component.ts", lineNumber: 30 }); })();
