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
    techstack: 'Se queda en local',
    roadmap: 'Ecosistema',
    download: 'Descargar',
    login: 'Iniciar sesión',
    github: 'GitHub',
    docs: 'Docs',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: 'Plugins de escena · Óptica de línea · Vista WebRTC',
    title: 'Inteligencia de escena · Óptica de línea',
    titleGradient: 'Una plataforma de visión para tus cámaras',
    tagline: 'Tiendas, almacenes y líneas. Un solo software.',
    description:
      'Las cámaras que ya están en el sitio entran por RTSP / ONVIF. Los puestos nuevos pueden llevar un módulo de cámara profesional a medida. La imagen en vivo va por WebRTC.',
    ctaPrimary: 'Hablar de un escenario',
    ctaSecondary: 'Documentación',
    archCanvas: 'De la cámara al aviso',
    input: 'Conexión',
    coreEngine: 'Entender',
    pluginPipeline: 'Lo que recibes',
    inputSource: 'Tus cámaras',
    coreTitle: 'VistaCast',
    coreNote: 'Entiende la imagen y avisa a quien debe saberlo',
  },
  plugins: {
    kicker: 'Plugin',
    retail: { name: 'Retail', status: 'Afluencia · horario' },
    warehouse: { name: 'Almacén', status: 'Noche · perímetro' },
    industrial: { name: 'Seguridad industrial', status: 'Zona de riesgo' },
    aoi: { name: 'Óptica de línea', status: 'Soldadura · faltantes' },
    legendDeployed: 'Retail, almacén, óptica de línea y seguridad van en el mismo motor.',
    legendPlanned: 'Se entrega por escenario',
    legendLatency: 'Vista en vivo por WebRTC',
  },
  strategy: {
    title: 'Así queda el sitio cuando ya está puesto',
    subtitle:
      'El encargado ve el flujo de hoy. Si alguien entra al almacén de noche, quien está de guardia lo sabe. El puesto de línea encuentra faltantes y problemas de soldadura. Fábrica, casa y perímetro se arman para tu sitio.',
    tabRetail: 'Retail',
    tabWarehouse: 'Almacén',
    tabIndustrial: 'Seguridad industrial',
    coreCapabilities: 'Qué hace',
    businessGoal: 'Para qué sirve',
    scenarios: [
      {
        tab: 'Retail',
        tag: 'Tienda',
        scene: 'Té, comida rápida y cadenas',
        capabilities: ['Afluencia en la entrada', 'Comparación por horario', 'Zonas calientes y permanencia', 'Avisos en las herramientas que ya usas'],
        goal: 'El encargado ve cómo cambia el tráfico, no solo el vídeo grabado.',
      },
      {
        tab: 'Almacén',
        tag: 'Almacén',
        scene: 'Almacenes y vigilancia nocturna',
        capabilities: ['Zonas restringidas de noche', 'Pasillos y perímetro', 'Horarios por turno', 'Avisos al canal de guardia'],
        goal: 'Si alguien entra de noche, quien está de guardia lo sabe al momento.',
      },
      {
        tab: 'Óptica de línea',
        tag: 'Línea',
        scene: 'PCB, ensamble, etiquetas y cordones',
        capabilities: ['Faltante, pieza incorrecta y desplazamiento', 'Soldadura: puente, vacío y junta fría', 'Código y etiqueta presentes', 'Corre en el PC del puesto'],
        goal: 'La inspección óptica se queda en el puesto que ya tienes.',
      },
      {
        tab: 'Seguridad industrial',
        tag: 'Fábrica',
        scene: 'Zonas de riesgo y talleres',
        capabilities: ['Persona en zona de riesgo', 'Caída y humo', 'Regiones sobre la imagen', 'Avisos a los sistemas actuales'],
        goal: 'Alguien en la zona de riesgo avisa ahora, no en una grabación después.',
      },
      {
        tab: 'Cuidado en casa',
        tag: 'Cuidado',
        scene: 'Seguridad en casa y cuidado de mayores',
        capabilities: ['Aviso de caída', 'Actividad nocturna inusual', 'Aviso a la familia en orden', 'Una persona decide el siguiente paso'],
        goal: 'Si pasa algo en casa, se avisa a una persona y esa persona decide.',
      },
      {
        tab: 'Perímetro',
        tag: 'Perímetro',
        scene: 'Perímetro del sitio y cámara sin conexión',
        capabilities: ['Entrada al perímetro', 'Cámara sin conexión', 'Los mismos avisos que el almacén', 'En el flujo de guardia'],
        goal: 'Un perímetro cruzado y una cámara caída son eventos que alguien puede atender.',
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
        title: 'Cómo se conectan las cámaras',
        description:
          'Las que ya están entran por RTSP / ONVIF. Los puestos nuevos pueden llevar un módulo profesional a medida.',
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
    title: 'El eslabón de visión: de la cámara a un evento que se puede atender',
    subtitle:
      'VistaCast convierte la imagen en avisos y datos, y los pasa a analítica, IoT y respuesta remota. Es el papel de visión en el ecosistema.',
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
    badge: 'Se entrega por escenario',
    title: 'Dinos qué tienen que ver tus cámaras',
    description:
      'Una tienda, un almacén, una línea o el cuidado en casa. Las cámaras que ya tienes se pueden conectar. El escenario se entrega en el mismo motor.',
    perks: [
      'Funciona con las cámaras actuales',
      'Vista en vivo por WebRTC',
      'Escenarios a pedido',
      'Los datos se quedan en el sitio',
    ],
    primary: 'Hablar de un escenario',
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
  download: {
    metaTitle: 'Descargar VistaCast',
    metaDescription:
      'Descarga la estación de tienda VistaCast (Windows / macOS) y el APK complementario de Android. Los instaladores apuntan siempre a la última versión.',
    ogAlt: 'Descargar VistaCast',
    title: 'Descargar VistaCast',
    latest: 'Última {{version}}:',
    lead: 'Estación de tienda para Windows y macOS, y un APK de Android para instalación lateral (opcional). Los botones apuntan siempre al instalador más reciente.',
    hostedBefore: 'Los instaladores están en el repositorio público',
    hostedAfter: ' (el repositorio de código sigue siendo privado).',
    unsigned:
      'Los instaladores no están firmados ni notarizados. En Windows SmartScreen, elige "Ejecutar de todas formas". En macOS, haz clic derecho en la app y elige Abrir. En Android hay que permitir orígenes desconocidos.',
    workstation: 'Estación de tienda',
    workstationBody:
      'App Electron: shell local de Detect / Admin. Admin y client-infer deben ser accesibles en este equipo o en la LAN.',
    winSetup: 'Instalador de Windows (NSIS)',
    winPortable: 'Windows portable',
    macDmg: 'DMG de macOS',
    android: 'Compañero Android',
    androidBody:
      'APK de instalación lateral (no está en Play). Si esta versión aún no tiene APK, usa Expo Go o espera una compilación posterior.',
    apk: 'Descargar APK',
    backHome: '← Volver al inicio',
    deviceDocs: 'Documentación de dispositivos',
  },
}

export default es
