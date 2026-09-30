import type { Messages } from '../types'

const es: Messages = {
  meta: {
    title: 'VistaCast — Monitorización en la nube de cámaras con IA basada en plugins',
    description:
      'Edge computing de vídeo con IA solo con software. Vista previa WebRTC en menos de un segundo, cámaras RTSP/ONVIF heredadas, motor central + plugins en caliente, extensibilidad full-stack TypeScript/Rust para la era del Vibe Coding.',
    ogTitle: 'VistaCast',
    ogDescription:
      'Monitorización en la nube de cámaras con IA basada en plugins, WebRTC de baja latencia y extensibilidad TypeScript/Rust',
  },
  brand: { subtitle: '视界云遥' },
  nav: {
    architecture: 'Arquitectura central',
    plugins: 'Plugins sectoriales',
    techstack: 'Stack tecnológico y ecosistema',
    roadmap: 'Hoja de ruta',
    download: 'Descargar',
    login: 'Iniciar sesión',
    github: 'GitHub',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: 'Open Source · Plugin Architecture · WebRTC Native',
    title: 'AI Visual Autopilot',
    titleGradient: 'with WebRTC Low-Latency',
    tagline: 'Convierte cada cámara en un flujo de datos estructurados del mundo físico',
    description:
      'Plataforma edge de vídeo con IA solo con software. Sin sustituir hardware: compatible con dispositivos RTSP/ONVIF existentes. WebRTC ofrece vista previa instantánea a nivel de milisegundos. Motor central + arquitectura de plugins en caliente con extensibilidad completa TypeScript/Rust para la era del Vibe Coding.',
    ctaPrimary: 'Reservar piloto',
    ctaSecondary: 'Documentación GitHub',
    archCanvas: 'Architecture Canvas',
    input: 'INPUT',
    coreEngine: 'CORE ENGINE',
    pluginPipeline: 'PLUGIN PIPELINE',
    inputSource: 'Input Source',
  },
  plugins: {
    retail: { name: 'Retail', status: 'Demo piloto (umbral de afluencia)' },
    warehouse: { name: 'Almacén', status: 'Demo piloto (intrusión nocturna)' },
    industrial: { name: 'Seguridad industrial', status: 'Demo piloto (caída/humo, no F1)' },
    legendDeployed: 'Demo piloto (no vendido)',
    legendPlanned: 'Planificado por la comunidad',
    legendLatency: '<500ms de latencia WebRTC',
  },
  strategy: {
    title: 'Enfoque estratégico: plugins de escenario para sobrevivir y escalar',
    subtitle:
      'Como startup, sabemos que dispersarse fracasa. Separamos el núcleo de los escenarios comerciales: primero dominamos escenarios ligeros de alta frecuencia que generan ingresos; luego ampliamos con plugins impulsados por la comunidad.',
    tabRetail: 'Retail (núcleo)',
    tabWarehouse: 'Almacén (núcleo)',
    tabIndustrial: 'Industrial y cola larga (plugins)',
    coreCapabilities: 'Capacidades centrales',
    businessGoal: 'Objetivo de negocio',
    scenarios: [
      {
        tag: 'Solución sectorial',
        scene: 'Bubble tea / QSR / cadenas de tiendas',
        capabilities: [
          'Umbral de afluencia en horario comercial (lab)',
          'No es detección de colas en caja',
          'No es un informe de ROI por tienda',
          'No es un SKU vendido',
        ],
        goal: 'Demostrar un piloto de tienda. No es un modelo de conteo ni F1.',
      },
      {
        tag: 'Empresa y sector público',
        scene: 'Parques industriales / almacenes no tripulados',
        capabilities: [
          'Intrusión nocturna 22:00–06:00 (lab)',
          'No es lista blanca de rostros',
          'No es una garantía de seguridad vendida',
          'No es un SLA 24/7',
        ],
        goal: 'El paquete de almacén es un cascarón de laboratorio. No es F1.',
      },
      {
        tag: 'Extensibilidad con IA',
        scene: 'Zona de riesgo en fábrica',
        capabilities: [
          'Reutiliza fall y smoke (stub)',
          'No es detección de llama abierta',
          'No es una puntuación F1',
          'No es un SKU EHS vendido',
        ],
        goal: 'El peligro de fábrica es un cascarón de laboratorio. No es un modelo nuevo.',
      },
      {
        tab: 'Hogar (piloto)',
        tag: 'Piloto',
        scene: 'Seguridad en casa / cuidado',
        capabilities: [
          'Reutiliza caída e intrusión nocturna',
          'No es una llamada de emergencia automática',
          'No es un detector de niños',
          'No es un SLA de cuidado 24/7',
        ],
        goal: 'Los paquetes de hogar y cuidado son plantillas de laboratorio. Sin pesos de producción.',
      },
    ],
  },
  techstack: {
    title: 'Base full-stack moderna compatible con Vibe Coding',
    subtitle:
      'Un stack unificado, sin legado. Deja que la IA sea tu mejor copiloto para la personalización.',
    items: [
      {
        title: 'Pasarela de streaming central',
        description:
          'Demultiplexado de alto rendimiento y reenvío WebRTC con memoria mínima: ultra bajo consumo en el edge. Cero pausas GC, latencia de milisegundos.',
      },
      {
        title: 'Núcleo de negocio empresarial',
        description:
          'Alineado con los lenguajes del frontend. Arquitectura modular clara con más del 95% de comprensión en prompts de IA: genera un plugin sectorial personalizado en minutos con Vibe Coding.',
      },
      {
        title: 'Base de datos fiable',
        description:
          'Modelo relacional estándar para eventos espaciales estructurados. Migración y escalado sencillos. Extensión de series temporales TimescaleDB compatible.',
      },
      {
        title: 'Percepción en tiempo real sin latencia',
        description:
          'Deja atrás los flujos heredados de 3–5 s. Vista previa instantánea multiplataforma sin plugins <500ms. Cifrado de extremo a extremo, resistente al secuestro por diseño.',
      },
    ],
    deployLabel: 'Despliegue local en un clic',
    tagSetup: 'Configuración en 30 min',
    tagSovereignty: 'Datos on-premise',
    tagLicense: 'Polyform Noncommercial License',
  },
  features: {
    title: 'Un motor orientado a eventos — no un DVR tradicional',
    subtitle: 'Seis capacidades centrales que redefinen lo que pueden hacer las cámaras.',
    items: [
      {
        title: 'Cero sustitución de hardware',
        description:
          'Reutiliza cámaras IP Hikvision, Dahua y genéricas. Compatibilidad total con dispositivos ONVIF/RTSP.',
      },
      {
        title: 'Motor de reglas abierto',
        description:
          'Dibuja ROI de formas arbitrarias y combina disparadores de tiempo, espacio y acción con flexibilidad.',
      },
      {
        title: 'Modelos de IA enchufables',
        description:
          'Núcleo desacoplado de algoritmos. Intercambia en caliente YOLO, RT-DETR y más, sin vendor lock-in.',
      },
      {
        title: 'Despliegue Docker en una línea',
        description:
          'Levanta un centro completo de cómputo de vídeo con IA en local en 30 minutos. Soberanía de datos garantizada.',
      },
      {
        title: 'Privacidad por diseño',
        description:
          'Desenfoque facial en el edge, monitorización de empleados desactivada por defecto. Postura de privacidad lista para GDPR.',
      },
      {
        title: 'Salidas de ecosistema abiertas',
        description:
          'Webhook y MQTT integrados: integra Feishu, DingTalk o pasarelas industriales en segundos.',
      },
    ],
  },
  ecosystem: {
    title: 'El eslabón «visión» en una cadena de valor de seis productos',
    subtitle:
      'VistaCast no es un SaaS aislado: es una pieza clave del ecosistema de inteligencia espacial LuminaryWorks.',
    youAreHere: 'ESTÁS AQUÍ',
    synergyTitle: 'Sinergias técnicas',
    products: [
      { subtitle: 'Orquestación visual', role: 'Orquestar' },
      { subtitle: 'Ingesta IoT', role: 'Ingerir' },
      { subtitle: 'Analítica BI', role: 'Analizar' },
      { subtitle: 'Visión con IA', role: 'Percibir' },
      { subtitle: 'Intervención remota', role: 'Intervenir' },
      { subtitle: 'Red de valor', role: 'Valor' },
    ],
    synergies: [
      {
        desc: 'Datos estructurados de VistaCast fluyen a DataLuminary para paneles espaciales autogenerados.',
      },
      {
        desc: 'Alertas de alto riesgo activan SyncroBrain para accionar hardware físico: automatización software-mundo.',
      },
      {
        desc: 'Despertar VistaRemote en un clic para confirmación humana y control en tiempo real que cierra el bucle.',
      },
    ],
    baseNote:
      'Construido sobre un ecosistema unificado TypeScript / NestJS: seis productos comparten tipos, convenciones modulares y estándares de despliegue.',
  },
  comparison: {
    title: 'Hermanos con roles claros: VistaCast vs VistaRemote',
    subtitle:
      'Ambos bajo LuminaryWorks: división complementaria del trabajo para percepción espacial y ejecución.',
    columnDimension: 'Dimensión',
    columnVistacast: 'VistaCast',
    columnVistaremote: 'VistaRemote',
    rows: [
      {
        dimension: 'Medio físico',
        vistacast: 'Cámaras de seguridad fijas (ONVIF / RTSP)',
        vistaremote: 'Móvil / escritorio / robots (WebRTC)',
      },
      {
        dimension: 'Valor central',
        vistacast: 'Percepción con IA, datos espaciales estructurados, alertas automáticas',
        vistaremote: 'Intervención humana remota, control bidireccional, grabación de auditoría',
      },
      {
        dimension: 'Lógica de sinergia',
        vistacast: 'Detecta anomalías espaciales, emite señales (fuente de automatización)',
        vistaremote: 'Recibe señales, toma el control remoto (ejecución y cierre)',
      },
    ],
    synergyTitle: 'Escenario de sinergia típico:',
    synergyBody:
      'VistaCast detecta intruso nocturno en almacén → alerta a Feishu → personal de guardia activa VistaRemote → comunicación bidireccional por altavoz y grabación. Juntos: percepción automatizada + intervención humana.',
  },
  cta: {
    badge: 'Acceso anticipado · piloto M1 abierto',
    title: 'Construyamos juntos el futuro de la inteligencia espacial',
    description:
      'Experimenta la fluidez de WebRTC y un stack moderno completo. Tanto si eres operador de cadena como desarrollador, únete a dar forma al piloto M1.',
    perks: [
      'Acceso gratuito al piloto M1',
      'WebRTC de baja latencia',
      'Acceso completo al código fuente',
      'Soporte dedicado',
    ],
    primary: 'Reservar piloto anticipado (gratis)',
    secondary: 'Destacar en GitHub',
    finePrint: 'Sin tarjeta de crédito · soberanía de datos · sal cuando quieras',
  },
  footer: {
    docs: 'Documentación',
    github: 'GitHub',
    ecosystem: 'Ecosistema LuminaryWorks',
    privacy: 'Privacidad y cumplimiento',
    copyright: 'Powered by LuminaryWorks',
    privacyNote:
      'Tecnología para el bien: monitorización del comportamiento de empleados desactivada por defecto. La privacidad es nuestra postura por defecto, no una función.',
  },
}

export default es
