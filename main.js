// =====================================================
// i18n: diccionario de traducciones ES (origen) / EN
// =====================================================
const translations = {
    es: {
        // Navegación
        'nav.home': 'Inicio',
        'nav.avocado': 'Aguacate Hass',
        'nav.nopal': 'Nopal',
        'nav.security': 'Compra Segura',
        'nav.about': 'Nosotros',
        'nav.quote': 'Cotizar',

        // Urgencia / banner superior
        'urgency': '<i class="fas fa-clock"></i> Capacidad limitada para nuevas cuentas este mes. Suministro sujeto a disponibilidad de cosecha.',

        // Footer
        'footer.tagline': 'Exportación agroindustrial de alto impacto.',
        'footer.taglineExport': 'Líderes en la exportación de productos agrícolas mexicanos de calidad premium.',
        'footer.taglineSupply': 'Líderes en el suministro de productos agrícolas mexicanos de calidad premium.',
        'footer.links': 'Enlaces',
        'footer.products': 'Productos',
        'footer.contact': 'Contacto',
        'footer.rights2026': '© 2026 Yasemi S.A. de C.V. Todos los derechos reservados.',
        'footer.rights2024': '© 2024 YASEMI S.A. de C.V. Todos los derechos reservados.',
        'footer.locationCDMX': 'CDMX, Colonia Cuauhtémoc',
        'footer.locationMX': 'CDMX, México',

        // =============== INDEX ===============
        'index.title': 'Yasemi S.A. de C.V. | Exportación Premium de Aguacate y Nopal',
        'index.metaDesc': 'Yasemi S.A. de C.V. - Líderes en exportación certificada de Aguacate Hass y Nopal desde Michoacán y Milpa Alta. Suministro garantizado con seguridad Escrow.',
        'index.hero.title': 'Solidez en Exportación Agrícola',
        'index.hero.subtitle': 'Suministro garantizado de Aguacate Hass de exportación y Nopal Premium con trazabilidad total y seguridad financiera.',
        'index.hero.escrow': 'Modelo Escrow',
        'index.mod1.title': '¿Cansado de la informalidad?',
        'index.mod1.text': 'En el mercado internacional, un proveedor informal destruye tu margen de beneficio y tu reputación. No permitas que la falta de seriedad de terceros afecte tu crecimiento.',
        'index.mod1.riskTitle': 'El riesgo es real',
        'index.mod1.riskText': 'La falta de infraestructura resulta en productos que no cumplen estándares fitosanitarios internacionales.',
        'index.mod2.title': 'No te la juegues con intermediarios',
        'index.mod2.rejTitle': 'Rechazos',
        'index.mod2.rejText': 'Certificaciones mal gestionadas son dinero perdido.',
        'index.mod2.delTitle': 'Retrasos',
        'index.mod2.delText': 'Cada hora de retraso es un día menos de anaquel.',
        'index.mod2.lossTitle': 'Pérdidas Reales',
        'index.mod2.lossText': 'Los intermediarios sin activos devoran tus ganancias reales en cada paso del proceso logístico.',
        'index.mod3.title': 'Yasemi: Solución Integral',
        'index.mod3.subtitle': 'Controlamos toda la cadena para garantizar frescura absoluta.',
        'index.mod3.tagExport': 'EXPORTACIÓN',
        'index.mod3.avocado': 'Aguacate Hass',
        'index.mod3.avocadoText': 'Calibres 32-70, empaque personalizado y trazabilidad total desde el huerto.',
        'index.mod3.tagNatural': '100% NATURAL',
        'index.mod3.nopal': 'Nopal',
        'index.mod3.nopalText': 'Producción sustentable nacional, cultivo libre de pesticidas con excelente vida post-cosecha.',
        'index.mod4.title': 'Nuestra Promesa de Valor',
        'index.mod4.p1': 'Sustentabilidad',
        'index.mod4.p2': 'Trazabilidad',
        'index.mod4.p3': 'Trato Justo',
        'index.mod5.title': 'El mercado global no espera',
        'index.mod5.text': 'Tu competencia está cerrando contratos de suministro para la próxima temporada. No te quedes fuera de los anaqueles.',
        'index.mod6.title': 'Calidad Avalada Internacionalmente',
        'index.testimonial.title': 'Confianza de Exportación',
        'index.testimonial.text': 'Nuestra infraestructura nos permite procesar y empacar con estándares de clase mundial.',
        'index.offer.title': 'Capacidad de Suministro Global',
        'index.offer.text': 'Hasta 15,000 toneladas mensuales con empaque de marca privada y logística integrada.',
        'index.offer.tons': 'Toneladas / Mes',
        'index.offer.shelf': 'Días de Anaquel',
        'index.cta.title': 'Inicie su Operación de Importación',
        'index.cta.text': 'Nuestro equipo técnico le contactará en menos de 24 horas.',
        'index.cta.btn': 'Solicitar Cotización de Exportación',

        // =============== AGUACATE ===============
        'aguacate.title': 'Aguacate Hass Premium | Yasemi S.A. de C.V.',
        'aguacate.hero.tag': 'Calidad de Exportación',
        'aguacate.hero.title': 'Aguacate Hass Premium',
        'aguacate.hero.subtitle': 'El estándar de oro de Michoacán para los mercados más exigentes del mundo.',
        'aguacate.specs.title': 'Especificaciones de Clase Mundial',
        'aguacate.specs.text': 'Nuestro proceso de selección garantiza frutos con el punto exacto de madurez, contenido graso superior al 23% y una piel libre de defectos estéticos.',
        'aguacate.specs.fat': 'Contenido Graso',
        'aguacate.specs.preservation': 'Conservación',
        'aguacate.specs.quality': 'Calidad',
        'aguacate.gauge.title': 'Guía de Calibres (Caja 4kg)',
        'aguacate.logistics.title': 'Logística de Alta Precisión',
        'aguacate.logistics.seaTitle': 'Marítimo Global',
        'aguacate.logistics.seaText': 'Contenedores Reefer de 40 pies con atmósfera controlada para preservar la vida de anaquel hasta por 40 días.',
        'aguacate.logistics.seaCap': '<strong>Capacidad:</strong> 20 - 22 Tarimas',
        'aguacate.logistics.seaPack': '<strong>Embalaje:</strong> Cajas de 4kg / 10kg / 18kg',
        'aguacate.logistics.airTitle': 'Aéreo Express',
        'aguacate.logistics.airText': 'Máxima frescura para mercados gourmet. Entregas en cualquier aeropuerto principal.',
        'aguacate.logistics.airFreq': '<strong>Frecuencia:</strong> Diaria',
        'aguacate.logistics.airCtrl': '<strong>Control:</strong> Temperatura monitoreada',
        'aguacate.logistics.landTitle': 'Terrestre Directo',
        'aguacate.logistics.landText': 'Logística puerta a puerta para USA y Canadá. Trazabilidad GPS en tiempo real y cruce fronterizo eficiente.',
        'aguacate.logistics.landTransit': '<strong>Tránsito:</strong> 3-5 días (McAllen / Laredo)',
        'aguacate.logistics.landSec': '<strong>Seguridad:</strong> Certificación C-TPAT',
        'aguacate.brand.title': 'Soluciones de Marca Propia',
        'aguacate.brand.text': 'Entendemos que su marca es su activo más valioso. Ofrecemos servicios de personalización total de empaque con diseño de alta gama para que su producto destaque en el anaquel.',
        'aguacate.brand.expert': 'Hablar con un Experto',
        'aguacate.brand.datasheet': '<i class="fas fa-file-pdf" style="margin-right: 10px;"></i>Ficha Técnica',
        'aguacate.formats.title': 'Formatos de Empaque y Presentación',
        'aguacate.formats.tag1': 'Supermercado',
        'aguacate.formats.f1Title': 'Retail Premium (Caja 4kg)',
        'aguacate.formats.f1Text': 'Diseñada para una estiba óptima y protección máxima. Frutos colocados individualmente en bandejas (alvéolos) para evitar fricciones. Calibres seleccionados del 32 al 70.',
        'aguacate.formats.tag2': 'Volumen',
        'aguacate.formats.f2Title': 'Foodservice / Industrial (10kg & 18kg)',
        'aguacate.formats.f2Text': 'Cajas de cartón corrugado de doble pared de alta resistencia estructural (40 lbs para Norteamérica). Ideal para distribuidores mayoristas, restaurantes y plantas procesadoras.',
        'aguacate.formats.tag3': 'Consumo Rápido',
        'aguacate.formats.f3Title': 'Bolsas de Malla (Mesh Bags)',
        'aguacate.formats.f3Text': 'Presentaciones retail listas para anaquel de 1kg y 2kg en bolsas de malla tejida de alta ventilación, con bandas de etiquetado personalizables de marca propia.',

        // =============== NOPAL ===============
        'nopal.title': 'Nopal Premium | Yasemi S.A. de C.V.',
        'nopal.hero.tag': 'Superfood Mexicano',
        'nopal.hero.title': 'Nopal',
        'nopal.hero.subtitle': 'Sustentabilidad, frescura y cultivo 100% natural en cada entrega nacional.',
        'nopal.card1.tag': 'Calidad Superior',
        'nopal.card1.title': 'Selección Manual',
        'nopal.card1.text': 'Cada pieza es seleccionada a mano por expertos productores de Milpa Alta, asegurando un color verde vibrante, ausencia de espinas y el tamaño ideal para el mercado nacional.',
        'nopal.card2.tag': 'Larga Vida',
        'nopal.card2.title': 'Post-Cosecha',
        'nopal.card2.text': 'Implementamos técnicas de enfriamiento rápido que permiten al nopal mantener su turgencia y propiedades nutricionales durante la distribución nacional y tránsitos prolongados.',
        'nopal.card3.tag': 'Cert. SENASICA',
        'nopal.card3.title': 'Producción Orgánica Verificada',
        'nopal.card3.text': 'Certificados ante el SENASICA (Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria). Producto libre de agroquímicos, cultivado con abonos orgánicos naturales y preparaciones sin químicos.',
        'nopal.specs.title': 'Datos Técnicos del Producto',
        'nopal.specs.sizeTitle': 'Tamaño Comercial',
        'nopal.specs.sizeText': '~100g por pieza',
        'nopal.specs.tempTitle': 'Temperatura Óptima',
        'nopal.specs.tempText': 'Clima templado de Milpa Alta',
        'nopal.specs.shelfTitle': 'Vida de Anaquel',
        'nopal.specs.shelfWithSpines': '15-20 días <span style="font-size:0.9rem; font-weight:400;">con espinas</span>',
        'nopal.specs.shelfNoSpines': '8-10 días <span style="font-size:0.9rem; font-weight:400;">sin espinas</span>',
        'nopal.specs.waterTitle': 'Contenido de Agua',
        'nopal.specs.waterText': 'Alta hidratación natural',
        'nopal.nutri.title': 'Perfil Nutricional',
        'nopal.nutri.subtitle': 'Valores por cada 100g de nopal crudo · Proporción comestible: 78%',
        'nopal.nutri.tableTitle': 'Composición Nutricional',
        'nopal.nutri.energy': 'Energía',
        'nopal.nutri.protein': 'Proteínas',
        'nopal.nutri.fat': 'Grasas',
        'nopal.nutri.carbs': 'Carbohidratos',
        'nopal.nutri.calcium': 'Calcio',
        'nopal.nutri.iron': 'Hierro',
        'nopal.nutri.vitC': 'Ácido Ascórbico (Vit. C)',
        'nopal.nutri.riboflavin': 'Riboflavina',
        'nopal.nutri.benefitsTitle': 'Propiedades y Usos',
        'nopal.nutri.b1Title': 'Hipoglucemiante Natural',
        'nopal.nutri.b1Text': 'Estudios del IMSS demuestran que el nopal ayuda a disminuir los niveles de glucosa e insulina en sangre.',
        'nopal.nutri.b2Title': 'Rico en Fibra Digestiva',
        'nopal.nutri.b2Text': 'Favorece el proceso digestivo, reduce riesgo gastrointestinal y contribuye al control del colesterol en sangre.',
        'nopal.nutri.b3Title': 'Alto en Calcio y Hierro',
        'nopal.nutri.b3Text': 'Excelente fuente de minerales. El calcio y el potasio son sus principales componentes minerales.',
        'nopal.nutri.b4Title': 'Bajo en Calorías',
        'nopal.nutri.b4Text': 'Solo 27 Kcal por 100g. Ideal para dietas de control de peso y alimentación saludable.',
        'nopal.banner.title': 'Capacidad de Suministro Todo el Año',
        'nopal.banner.text': 'Nuestra red de productores nos permite garantizar volumen constante incluso en temporadas de baja producción nacional.',
        'nopal.banner.tons': 'Toneladas Semanales',
        'nopal.banner.trace': 'Trazabilidad',
        'nopal.banner.monitor': 'Monitoreo Térmico',
        'nopal.formats.title': 'Formatos de Presentación',
        'nopal.formats.text': 'Nos adaptamos a las necesidades de su canal de venta, desde granel para procesadores hasta empaques retail listos para anaquel.',
        'nopal.formats.master': 'Caja Master (10kg / 20kg)',
        'nopal.formats.masterText': 'Ideal para mercados de abasto y distribuidores mayoristas.',
        'nopal.formats.retail': 'Empaque Clamshell / Bolsa',
        'nopal.formats.retailText': 'Presentaciones de 500g o 1kg con su propia marca o marca Yasemi.',
        'nopal.formats.foodservice': 'Nopal Picado / Procesado (Foodservice)',
        'nopal.formats.foodserviceText': 'Formatos listos para cocinar en bolsas al vacío de 2kg y 5kg, ideal para comedores y restaurantes.',
        'nopal.formats.download': 'Descargar Ficha Técnica',

        // =============== SEGURIDAD ===============
        'seg.title': 'Compra Segura | Yasemi S.A. de C.V.',
        'seg.hero.tag': 'Protocolos de Confianza',
        'seg.hero.title': 'Transparencia y Garantía en su Compra',
        'seg.intro.title': '¿Cómo garantizamos su inversión?',
        'seg.intro.text': 'En YASEMI, entendemos que la confianza es la base de cualquier relación comercial a largo plazo. Por ello, hemos implementado protocolos estrictos para cada etapa de la compra.',
        'seg.contract.title': 'Contratación Robusta',
        'seg.contract.text': 'Nuestras operaciones están respaldadas por contratos internacionales claros, bajo Incoterms 2020, asegurando que ambas partes conozcan sus responsabilidades y riesgos.',
        'seg.contract.i1': 'Asesoría legal especializada',
        'seg.contract.i2': 'Seguros de carga contra todo riesgo',
        'seg.contract.i3': 'Documentación fitosanitaria al día',
        'seg.verify.title': 'Verificación en Origen',
        'seg.verify.text': 'Usted tiene la tranquilidad de que el producto es real y cumple con lo prometido antes de que salga del contenedor.',
        'seg.verify.i1': 'Inspección por terceros (SGS / GlobalGAP)',
        'seg.verify.i2': 'Reportes fotográficos y video en tiempo real del empaque',
        'seg.verify.i3': 'Auditoría de lotes por ingenieros agrónomos',
        'seg.escrow.title': 'Esquema de Fideicomiso (Escrow) Bancario con Banorte',
        'seg.escrow.text': 'Para erradicar cualquier riesgo de fraude en el sector agrícola, trabajamos bajo un sólido modelo de <strong>Fideicomiso de Garantía (Escrow) con Banorte</strong> como banco fiduciario neutral. Los fondos son custodiados y liberados únicamente cuando se cumplen las condiciones del contrato.',
        'seg.escrow.stepsTitle': '¿Cómo funciona el fideicomiso?',
        'seg.escrow.step1Title': 'El comprador deposita los fondos',
        'seg.escrow.step1Text': 'El comprador deposita el importe total de la orden de compra al fideicomiso bancario de Banorte, quien custodia los fondos hasta que se cumplan las condiciones del contrato de compra-venta.',
        'seg.escrow.step2Title': 'Liberación progresiva de pagos',
        'seg.escrow.step2Text': 'Conforme se cumplen las obligaciones contractuales y se confirma el envío de mercancía, el fideicomiso bancario libera el pago correspondiente, garantizando el cumplimiento total de la obligación.',
        'seg.escrow.step3Title': 'Protección ante incumplimiento',
        'seg.escrow.step3Text': 'Ante cualquier incumplimiento, el fideicomiso bancario retorna los recursos íntegramente al comprador. Su inversión está completamente protegida.',
        'seg.escrow.fianzaTitle': 'Blindaje Adicional: Póliza de Fianza',
        'seg.escrow.fianzaText': 'Además del fideicomiso bancario, contamos con una <strong style="color: var(--secondary);">póliza de fianza</strong> que blinda aún más la operación. Doble capa de seguridad jurídica y financiera que ningún intermediario informal puede ofrecer.',
        'seg.escrow.benefitsTitle': 'Beneficios del Modelo',
        'seg.escrow.i1': '<i class="fas fa-check-circle"></i> Seguridad jurídica: Banorte actúa como tercero neutral e imparcial',
        'seg.escrow.i2': '<i class="fas fa-check-circle"></i> Liberación de fondos previa verificación de envío y calidad',
        'seg.escrow.i3': '<i class="fas fa-check-circle"></i> Reducción de riesgos comerciales para ambas partes',
        'seg.escrow.i4': '<i class="fas fa-check-circle"></i> Confianza mutua respaldada por una institución bancaria sólida',
        'seg.process.title': 'Nuestro Proceso de 4 Pasos',
        'seg.process.s1Title': 'Cotización y Muestreo',
        'seg.process.s1Text': 'Definimos calibres, volumen y enviamos muestras si es necesario.',
        'seg.process.s2Title': 'Fideicomiso y Contrato',
        'seg.process.s2Text': 'Formalización legal y apertura de la cuenta Escrow fiduciaria en Banorte.',
        'seg.process.s3Title': 'Producción y Empaque',
        'seg.process.s3Text': 'Corte fresco y embalaje según especificaciones del cliente.',
        'seg.process.s4Title': 'Distribución y Seguimiento',
        'seg.process.s4Text': 'Despacho de carga y liberación segura de fondos fideicomitidos.',
        'seg.process.cta': 'Solicitar Auditoría de Compra',

        // =============== NOSOTROS ===============
        'nos.title': 'Nosotros | Yasemi S.A. de C.V.',
        'nos.hero.tag': 'Nuestra Historia',
        'nos.hero.title': 'YASEMI: Exportación con Propósito',
        'nos.intro.title': 'Más que una Comercializadora',
        'nos.intro.text1': 'YASEMI S.A. de C.V. nació con la visión de profesionalizar la exportación agrícola mexicana, eliminando los vicios de la intermediación tradicional.',
        'nos.intro.text2': 'No solo vendemos productos; gestionamos activos biológicos y logísticos con precisión quirúrgica para asegurar que el esfuerzo de nuestros productores llegue íntegro a los mercados más exigentes de Asia, Europa y Norteamérica.',
        'nos.intro.capital': 'Capital Mexicano',
        'nos.intro.presence': 'Presencia en 3 continentes',
        'nos.pillars.title': 'Nuestros Pilares',
        'nos.pillars.p1Title': 'Ética Comercial',
        'nos.pillars.p1Text': 'Tratos directos con productores bajo esquemas de comercio justo que incentivan la calidad y la permanencia en el campo.',
        'nos.pillars.p2Title': 'Innovación',
        'nos.pillars.p2Text': 'Inversión constante en tecnologías de conservación y monitoreo de cadena de frío en tiempo real.',
        'nos.pillars.p3Title': 'Cumplimiento',
        'nos.pillars.p3Text': 'Rigurosa observancia de las normativas fitosanitarias y de seguridad alimentaria internacionales.',
        'nos.contact.title': 'Inicie su Operación con Nosotros',
        'nos.contact.text': 'Estamos listos para dimensionar su requerimiento de exportación. Complete el formulario y un especialista comercial se pondrá en contacto en menos de 24 horas.',
        'nos.form.name': 'Nombre Completo',
        'nos.form.namePh': 'Ej. Juan Pérez',
        'nos.form.email': 'Correo Corporativo',
        'nos.form.emailPh': 'juan@empresa.com',
        'nos.form.product': 'Producto de Interés',
        'nos.form.optBoth': 'Ambos',
        'nos.form.message': 'Mensaje / Requerimiento',
        'nos.form.messagePh': 'Cuéntenos sobre su proyecto de exportación...',
        'nos.form.submit': 'Enviar Solicitud'
    },
    en: {
        // Navegación
        'nav.home': 'Home',
        'nav.avocado': 'Hass Avocado',
        'nav.nopal': 'Nopal',
        'nav.security': 'Secure Purchase',
        'nav.about': 'About Us',
        'nav.quote': 'Request Quote',

        // Urgencia / banner superior
        'urgency': '<i class="fas fa-clock"></i> Limited capacity for new accounts this month. Supply subject to harvest availability.',

        // Footer
        'footer.tagline': 'High-impact agroindustrial export.',
        'footer.taglineExport': 'Leaders in the export of premium-quality Mexican agricultural products.',
        'footer.taglineSupply': 'Leaders in the supply of premium-quality Mexican agricultural products.',
        'footer.links': 'Links',
        'footer.products': 'Products',
        'footer.contact': 'Contact',
        'footer.rights2026': '© 2026 Yasemi S.A. de C.V. All rights reserved.',
        'footer.rights2024': '© 2024 YASEMI S.A. de C.V. All rights reserved.',
        'footer.locationCDMX': 'Mexico City, Cuauhtémoc',
        'footer.locationMX': 'Mexico City, Mexico',

        // =============== INDEX ===============
        'index.title': 'Yasemi S.A. de C.V. | Premium Avocado and Nopal Export',
        'index.metaDesc': 'Yasemi S.A. de C.V. - Leaders in certified export of Hass Avocado and Nopal from Michoacán and Milpa Alta. Guaranteed supply with Escrow security.',
        'index.hero.title': 'Strength in Agricultural Export',
        'index.hero.subtitle': 'Guaranteed supply of export Hass Avocado and Premium Nopal with full traceability and financial security.',
        'index.hero.catalog': 'View Catalog',
        'index.hero.escrow': 'Escrow Model',
        'index.mod1.title': 'Tired of informal suppliers?',
        'index.mod1.text': 'In the international market, an informal supplier destroys your profit margin and reputation. Don\'t let third-party unreliability hold back your growth.',
        'index.mod1.riskTitle': 'The risk is real',
        'index.mod1.riskText': 'Lack of infrastructure results in products that don\'t meet international phytosanitary standards.',
        'index.mod2.title': 'Don\'t gamble with middlemen',
        'index.mod2.rejTitle': 'Rejections',
        'index.mod2.rejText': 'Poorly managed certifications are wasted money.',
        'index.mod2.delTitle': 'Delays',
        'index.mod2.delText': 'Every hour of delay is one less day on the shelf.',
        'index.mod2.lossTitle': 'Real Losses',
        'index.mod2.lossText': 'Intermediaries with no assets eat up your real profits at every step of the logistics process.',
        'index.mod3.title': 'Yasemi: Integral Solution',
        'index.mod3.subtitle': 'We control the entire supply chain to guarantee absolute freshness.',
        'index.mod3.tagExport': 'EXPORT',
        'index.mod3.avocado': 'Hass Avocado',
        'index.mod3.avocadoText': 'Sizes 32-70, custom packaging and full traceability from the orchard.',
        'index.mod3.tagNatural': '100% NATURAL',
        'index.mod3.nopal': 'Nopal',
        'index.mod3.nopalText': 'National sustainable production, pesticide-free cultivation with excellent post-harvest shelf life.',
        'index.mod4.title': 'Our Value Promise',
        'index.mod4.p1': 'Sustainability',
        'index.mod4.p2': 'Traceability',
        'index.mod4.p3': 'Fair Trade',
        'index.mod5.title': 'The global market won\'t wait',
        'index.mod5.text': 'Your competition is closing supply contracts for the next season. Don\'t get left off the shelves.',
        'index.mod6.title': 'Internationally Endorsed Quality',
        'index.testimonial.title': 'Export-Grade Trust',
        'index.testimonial.text': 'Our infrastructure allows us to process and pack at world-class standards.',
        'index.offer.title': 'Global Supply Capacity',
        'index.offer.text': 'Up to 15,000 tons monthly with private label packaging and integrated logistics.',
        'index.offer.tons': 'Tons / Month',
        'index.offer.shelf': 'Days of Shelf Life',
        'index.cta.title': 'Start Your Import Operation',
        'index.cta.text': 'Our technical team will contact you in less than 24 hours.',
        'index.cta.btn': 'Request Export Quote',

        // =============== AGUACATE ===============
        'aguacate.title': 'Premium Hass Avocado | Yasemi S.A. de C.V.',
        'aguacate.hero.tag': 'Export Quality',
        'aguacate.hero.title': 'Premium Hass Avocado',
        'aguacate.hero.subtitle': 'The gold standard from Michoacán for the world\'s most demanding markets.',
        'aguacate.specs.title': 'World-Class Specifications',
        'aguacate.specs.text': 'Our selection process guarantees fruit with the exact ripeness point, fat content above 23% and skin free of aesthetic defects.',
        'aguacate.specs.fat': 'Fat Content',
        'aguacate.specs.preservation': 'Preservation',
        'aguacate.specs.quality': 'Quality',
        'aguacate.gauge.title': 'Size Guide (4kg Box)',
        'aguacate.logistics.title': 'High-Precision Logistics',
        'aguacate.logistics.seaTitle': 'Global Sea Freight',
        'aguacate.logistics.seaText': '40-foot Reefer containers with controlled atmosphere to preserve shelf life for up to 40 days.',
        'aguacate.logistics.seaCap': '<strong>Capacity:</strong> 20 - 22 Pallets',
        'aguacate.logistics.seaPack': '<strong>Packaging:</strong> 4kg / 10kg / 18kg boxes',
        'aguacate.logistics.airTitle': 'Air Express',
        'aguacate.logistics.airText': 'Maximum freshness for gourmet markets. Deliveries in less than 48 hours to any major airport.',
        'aguacate.logistics.airFreq': '<strong>Frequency:</strong> Daily',
        'aguacate.logistics.airCtrl': '<strong>Control:</strong> Monitored temperature',
        'aguacate.logistics.landTitle': 'Direct Ground',
        'aguacate.logistics.landText': 'Door-to-door logistics for USA and Canada. Real-time GPS traceability and efficient border crossing.',
        'aguacate.logistics.landTransit': '<strong>Transit:</strong> 3-5 days (McAllen / Laredo)',
        'aguacate.logistics.landSec': '<strong>Security:</strong> C-TPAT Certification',
        'aguacate.brand.title': 'Private Label Solutions',
        'aguacate.brand.text': 'We understand that your brand is your most valuable asset. We offer full packaging customization services with high-end design so your product stands out on the shelf.',
        'aguacate.brand.expert': 'Talk to an Expert',
        'aguacate.brand.datasheet': '<i class="fas fa-file-pdf" style="margin-right: 10px;"></i>Technical Datasheet',
        'aguacate.formats.title': 'Packaging and Presentation Formats',
        'aguacate.formats.tag1': 'Supermarket',
        'aguacate.formats.f1Title': 'Retail Premium (4kg Box)',
        'aguacate.formats.f1Text': 'Designed for optimal palletizing and maximum protection. Fruits placed individually in trays (alveoli) to avoid friction. Selected sizes from 32 to 70.',
        'aguacate.formats.tag2': 'Volume',
        'aguacate.formats.f2Title': 'Foodservice / Industrial (10kg & 18kg)',
        'aguacate.formats.f2Text': 'High structural strength double-walled corrugated cardboard boxes (40 lbs for North America). Ideal for wholesale distributors, restaurants, and processing plants.',
        'aguacate.formats.tag3': 'Fast Consumption',
        'aguacate.formats.f3Title': 'Mesh Bags',
        'aguacate.formats.f3Text': 'Retail shelf-ready presentations of 1kg and 2kg in high-ventilation woven mesh bags, with customizable private label bands.',

        // =============== NOPAL ===============
        'nopal.title': 'Premium Nopal | Yasemi S.A. de C.V.',
        'nopal.hero.tag': 'Mexican Superfood',
        'nopal.hero.title': 'Nopal',
        'nopal.hero.subtitle': 'Sustainability, freshness and 100% natural cultivation in every national delivery.',
        'nopal.card1.tag': 'Superior Quality',
        'nopal.card1.title': 'Hand-Picked Selection',
        'nopal.card1.text': 'Each piece is hand-selected by expert producers from Milpa Alta, ensuring a vibrant green color, absence of thorns and the ideal size for the national market.',
        'nopal.card2.tag': 'Long Shelf Life',
        'nopal.card2.title': 'Post-Harvest',
        'nopal.card2.text': 'We implement rapid cooling techniques that allow nopal to maintain its turgidity and nutritional properties during national distribution and long transits.',
        'nopal.card3.tag': 'SENASICA Cert.',
        'nopal.card3.title': 'Verified Organic Production',
        'nopal.card3.text': 'Certified by SENASICA (Mexico\'s National Agri-Food Safety, Health and Quality Service). Product free of agrochemicals, grown with natural organic fertilizers and chemical-free pest control.',
        'nopal.specs.title': 'Product Technical Data',
        'nopal.specs.sizeTitle': 'Commercial Size',
        'nopal.specs.sizeText': '~100g per piece',
        'nopal.specs.tempTitle': 'Optimal Temperature',
        'nopal.specs.tempText': 'Temperate climate of Milpa Alta',
        'nopal.specs.shelfTitle': 'Shelf Life',
        'nopal.specs.shelfWithSpines': '15-20 days <span style="font-size:0.9rem; font-weight:400;">with thorns</span>',
        'nopal.specs.shelfNoSpines': '8-10 days <span style="font-size:0.9rem; font-weight:400;">without thorns</span>',
        'nopal.specs.waterTitle': 'Water Content',
        'nopal.specs.waterText': 'High natural hydration',
        'nopal.nutri.title': 'Nutritional Profile',
        'nopal.nutri.subtitle': 'Values per 100g raw nopal · Edible proportion: 78%',
        'nopal.nutri.tableTitle': 'Nutritional Composition',
        'nopal.nutri.energy': 'Energy',
        'nopal.nutri.protein': 'Proteins',
        'nopal.nutri.fat': 'Fats',
        'nopal.nutri.carbs': 'Carbohydrates',
        'nopal.nutri.calcium': 'Calcium',
        'nopal.nutri.iron': 'Iron',
        'nopal.nutri.vitC': 'Ascorbic Acid (Vit. C)',
        'nopal.nutri.riboflavin': 'Riboflavin',
        'nopal.nutri.benefitsTitle': 'Properties and Uses',
        'nopal.nutri.b1Title': 'Natural Hypoglycemic Agent',
        'nopal.nutri.b1Text': 'IMSS studies demonstrate that nopal helps reduce blood glucose and insulin levels.',
        'nopal.nutri.b2Title': 'Rich in Digestive Fiber',
        'nopal.nutri.b2Text': 'Promotes digestive health, reduces gastrointestinal risk, and helps control blood cholesterol.',
        'nopal.nutri.b3Title': 'High in Calcium and Iron',
        'nopal.nutri.b3Text': 'Excellent mineral source. Calcium and potassium are its primary mineral components.',
        'nopal.nutri.b4Title': 'Low in Calories',
        'nopal.nutri.b4Text': 'Only 27 Kcal per 100g. Ideal for weight control diets and healthy eating.',
        'nopal.banner.title': 'Year-Round Supply Capacity',
        'nopal.banner.text': 'Our network of producers allows us to guarantee constant volume even in seasons of low national production.',
        'nopal.banner.tons': 'Weekly Tons',
        'nopal.banner.trace': 'Traceability',
        'nopal.banner.monitor': 'Thermal Monitoring',
        'nopal.formats.title': 'Presentation Formats',
        'nopal.formats.text': 'We adapt to the needs of your sales channel, from bulk for processors to retail packaging ready for the shelf.',
        'nopal.formats.master': 'Master Box (10kg / 20kg)',
        'nopal.formats.masterText': 'Ideal for wholesale markets and major distributors.',
        'nopal.formats.retail': 'Clamshell / Bag Packaging',
        'nopal.formats.retailText': '500g or 1kg presentations with your own brand or the Yasemi brand.',
        'nopal.formats.foodservice': 'Chopped / Processed Nopal (Foodservice)',
        'nopal.formats.foodserviceText': 'Ready-to-cook formats in 2kg and 5kg vacuum bags, ideal for cafeterias and restaurants.',
        'nopal.formats.download': 'Download Datasheet',

        // =============== SEGURIDAD ===============
        'seg.title': 'Secure Purchase | Yasemi S.A. de C.V.',
        'seg.hero.tag': 'Trust Protocols',
        'seg.hero.title': 'Transparency and Guarantee in Your Purchase',
        'seg.intro.title': 'How do we guarantee your investment?',
        'seg.intro.text': 'At YASEMI, we understand that trust is the foundation of any long-term business relationship. That\'s why we have implemented strict protocols for every stage of the purchase.',
        'seg.contract.title': 'Robust Contracting',
        'seg.contract.text': 'Our operations are backed by clear international contracts, under Incoterms 2020, ensuring that both parties know their responsibilities and risks.',
        'seg.contract.i1': 'Specialized legal advice',
        'seg.contract.i2': 'All-risk cargo insurance',
        'seg.contract.i3': 'Up-to-date phytosanitary documentation',
        'seg.verify.title': 'Origin Verification',
        'seg.verify.text': 'You have the peace of mind that the product is real and meets what was promised before it leaves the container.',
        'seg.verify.i1': 'Third-party inspection (SGS / GlobalGAP)',
        'seg.verify.i2': 'Real-time photo and video reports of packaging',
        'seg.verify.i3': 'Lot auditing by agronomy engineers',
        'seg.escrow.title': 'Banking Escrow Trust Scheme with Banorte',
        'seg.escrow.text': 'To eradicate any risk of fraud in the agricultural sector, we operate under a solid <strong>Escrow Guarantee Trust with Banorte</strong> as neutral fiduciary bank. Funds are safeguarded and released only when contract conditions are met.',
        'seg.escrow.stepsTitle': 'How does the escrow trust work?',
        'seg.escrow.step1Title': 'Buyer deposits the funds',
        'seg.escrow.step1Text': 'The buyer deposits the full purchase order amount into the Banorte fiduciary account, which holds the funds until the conditions of the purchase agreement are fulfilled.',
        'seg.escrow.step2Title': 'Progressive payment release',
        'seg.escrow.step2Text': 'As contractual obligations are met and shipment is confirmed, the fiduciary bank releases the corresponding payment, guaranteeing total fulfillment of the obligation.',
        'seg.escrow.step3Title': 'Protection against non-compliance',
        'seg.escrow.step3Text': 'In the event of any non-compliance, the fiduciary bank returns funds in full to the buyer. Your investment is fully protected.',
        'seg.escrow.fianzaTitle': 'Additional Shield: Surety Bond (Póliza de Fianza)',
        'seg.escrow.fianzaText': 'In addition to the fiduciary trust, we also hold a <strong style="color: var(--secondary);">surety bond</strong> that further shields the operation. A double layer of legal and financial security that no informal intermediary can offer.',
        'seg.escrow.benefitsTitle': 'Model Benefits',
        'seg.escrow.i1': '<i class="fas fa-check-circle"></i> Legal security: Banorte acts as a neutral, impartial third party',
        'seg.escrow.i2': '<i class="fas fa-check-circle"></i> Fund release pending shipment and quality verification',
        'seg.escrow.i3': '<i class="fas fa-check-circle"></i> Commercial risk reduction for both parties',
        'seg.escrow.i4': '<i class="fas fa-check-circle"></i> Mutual trust backed by a solid banking institution',
        'seg.process.title': 'Our 4-Step Process',
        'seg.process.s1Title': 'Quotation and Sampling',
        'seg.process.s1Text': 'We define sizes, volume and send samples if needed.',
        'seg.process.s2Title': 'Trust and Contract',
        'seg.process.s2Text': 'Legal formalization and opening of the Escrow fiduciary account at Banorte.',
        'seg.process.s3Title': 'Production and Packaging',
        'seg.process.s3Text': 'Fresh cutting and packing according to customer specifications.',
        'seg.process.s4Title': 'Distribution and Tracking',
        'seg.process.s4Text': 'Cargo dispatch and secure release of escrow funds.',
        'seg.process.cta': 'Request Purchase Audit',

        // =============== NOSOTROS ===============
        'nos.title': 'About Us | Yasemi S.A. de C.V.',
        'nos.hero.tag': 'Our Story',
        'nos.hero.title': 'YASEMI: Export with Purpose',
        'nos.intro.title': 'More than a Trading Company',
        'nos.intro.text1': 'YASEMI S.A. de C.V. was born with the vision of professionalizing Mexican agricultural exports, eliminating the vices of traditional intermediation.',
        'nos.intro.text2': 'We don\'t just sell products; we manage biological and logistical assets with surgical precision to ensure that the effort of our producers reaches the most demanding markets in Asia, Europe and North America intact.',
        'nos.intro.capital': 'Mexican Capital',
        'nos.intro.presence': 'Presence on 3 continents',
        'nos.pillars.title': 'Our Pillars',
        'nos.pillars.p1Title': 'Commercial Ethics',
        'nos.pillars.p1Text': 'Direct deals with producers under fair trade schemes that encourage quality and continuity in the field.',
        'nos.pillars.p2Title': 'Innovation',
        'nos.pillars.p2Text': 'Constant investment in preservation technologies and real-time cold-chain monitoring.',
        'nos.pillars.p3Title': 'Compliance',
        'nos.pillars.p3Text': 'Rigorous observance of international phytosanitary and food safety regulations.',
        'nos.contact.title': 'Start Your Operation with Us',
        'nos.contact.text': 'We are ready to scale your export requirement. Fill out the form and a commercial specialist will contact you in less than 24 hours.',
        'nos.form.name': 'Full Name',
        'nos.form.namePh': 'E.g. John Smith',
        'nos.form.email': 'Corporate Email',
        'nos.form.emailPh': 'john@company.com',
        'nos.form.product': 'Product of Interest',
        'nos.form.optBoth': 'Both',
        'nos.form.message': 'Message / Requirement',
        'nos.form.messagePh': 'Tell us about your export project...',
        'nos.form.submit': 'Submit Request'
    }
};

function getStoredLang() {
    return localStorage.getItem('yasemi-lang') || 'es';
}

function applyTranslations(lang) {
    const dict = translations[lang] || translations.es;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            if (el.tagName === 'TITLE') {
                document.title = dict[key];
            } else if (el.tagName === 'META') {
                el.setAttribute('content', dict[key]);
            } else {
                el.innerHTML = dict[key];
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    document.documentElement.lang = lang;

    const toggleLabel = document.querySelector('.lang-toggle .lang-toggle-text');
    if (toggleLabel) {
        toggleLabel.textContent = lang === 'es' ? 'EN' : 'ES';
    }
}

function initLangToggle() {
    applyTranslations(getStoredLang());

    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const current = getStoredLang();
            const next = current === 'es' ? 'en' : 'es';
            localStorage.setItem('yasemi-lang', next);
            applyTranslations(next);
        });
    });
}

// Aplicar idioma lo antes posible para evitar parpadeo
applyTranslations(getStoredLang());

document.addEventListener('DOMContentLoaded', () => {
    // Re-aplicar por si el DOM no estaba completo al inicio
    initLangToggle();

    // 1. Preloader Logic
    const preloader = document.getElementById('preloader');
    const counter = document.querySelector('#preloader .counter');
    let count = 0;

    if (preloader && counter) {
        const interval = setInterval(() => {
            count += Math.floor(Math.random() * 10) + 1;
            if (count >= 100) {
                count = 100;
                clearInterval(interval);
                setTimeout(() => {
                    preloader.classList.add('loaded');
                }, 500);
            }
            counter.innerText = count + '%';
        }, 50);
    }

    // 2. Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Scroll Progress Logic (Top Bar)
    const scrollLineFill = document.querySelector('.scroll-line-fill');

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;

        if (scrollLineFill) {
            scrollLineFill.style.width = scrolled + '%';
        }

        // --- NUEVO SISTEMA HORIZONTAL ROBUSTO ---
        const horizontalWrapper = document.getElementById('horizontal-wrapper');
        const horizontalTrack = document.getElementById('horizontal-track');

        if (window.innerWidth >= 1024 && horizontalWrapper && horizontalTrack) {
            // 1. Calcular el ancho total a mover
            const trackWidth = horizontalTrack.scrollWidth;
            // 2. Ajustar la altura del wrapper para que el scroll sea más lento
            // Multiplicamos por 1.5 para que el recorrido vertical sea más largo y suave
            horizontalWrapper.style.height = `${trackWidth * 1.5}px`;

            // 3. Variables para cálculo
            const wrapperOffsetTop = horizontalWrapper.offsetTop;
            const viewportHeight = window.innerHeight;
            const maxScrollDistance = (trackWidth * 1.5) - viewportHeight;
            const maxMoveX = trackWidth - window.innerWidth;

            // 4. Calcular el progreso
            let scrollDistance = window.scrollY - wrapperOffsetTop;
            let scrollProgress = scrollDistance / maxScrollDistance;

            // Limitar entre 0 y 1
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));

            // 5. Mover exacto
            const moveX = scrollProgress * maxMoveX;
            horizontalTrack.style.transform = `translateX(-${moveX}px)`;

        }
    });

    // 5. Navbar Scroll Effect
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // SISTEMA DE MENÚ HAMBURGUESA
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
                menuToggle.style.color = '#2C3A27'; // Asegurar color oscuro al abrir
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
                // Restaurar color original basado en si la nav es transparente o no
                if (!nav.classList.contains('scrolled') && document.querySelector('.hero-internal')) {
                    menuToggle.style.color = 'white';
                }
            }
        });

        // Cerrar menú al hacer click en un link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (menuToggle.querySelector('i')) {
                    menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
                }
            });
        });
    }
});
