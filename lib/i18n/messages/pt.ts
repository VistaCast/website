import type { Messages } from '../types'

const pt: Messages = {
  meta: {
    title: 'VistaCast — Monitoramento em nuvem de câmeras com IA baseado em plugins',
    description:
      'Edge computing de vídeo com IA apenas por software. Pré-visualização WebRTC em subsegundos, câmeras RTSP/ONVIF legadas, motor central + plugins hot-plug, extensibilidade full-stack TypeScript/Rust para a era do Vibe Coding.',
    ogTitle: 'VistaCast',
    ogDescription:
      'Monitoramento em nuvem de câmeras com IA baseado em plugins, WebRTC de baixa latência e extensibilidade TypeScript/Rust',
  },
  brand: { subtitle: '视界云遥' },
  nav: {
    architecture: 'Arquitetura central',
    plugins: 'Plugins setoriais',
    techstack: 'Stack tecnológico e ecossistema',
    roadmap: 'Roteiro',
    login: 'Entrar',
    github: 'GitHub',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: 'Open Source · Plugin Architecture · WebRTC Native',
    title: 'AI Visual Autopilot',
    titleGradient: 'with WebRTC Low-Latency',
    tagline: 'Transforme cada câmera em um fluxo de dados estruturados do mundo físico',
    description:
      'Plataforma edge de vídeo com IA apenas por software. Sem substituir hardware — funciona com dispositivos RTSP/ONVIF existentes. WebRTC oferece pré-visualização instantânea em nível de milissegundos. Motor central + arquitetura de plugins hot-plug com extensibilidade completa TypeScript/Rust para a era do Vibe Coding.',
    ctaPrimary: 'Agendar piloto',
    ctaSecondary: 'Documentação GitHub',
    archCanvas: 'Architecture Canvas',
    input: 'INPUT',
    coreEngine: 'CORE ENGINE',
    pluginPipeline: 'PLUGIN PIPELINE',
    inputSource: 'Input Source',
  },
  plugins: {
    retail: { name: 'Varejo', status: 'Implantado (fluxo de clientes/filas)' },
    warehouse: { name: 'Armazém', status: 'Implantado (segurança noturna)' },
    industrial: { name: 'Segurança industrial', status: 'Planejado (fumaça/quedas)' },
    legendDeployed: 'Implantado comercialmente',
    legendPlanned: 'Planejado pela comunidade',
    legendLatency: '<500ms de latência WebRTC',
  },
  strategy: {
    title: 'Foco estratégico: plugins de cenário para sobrevivência e escala',
    subtitle:
      'Como startup, sabemos que dispersar esforços leva ao fracasso. Separamos o núcleo dos cenários comerciais — primeiro dominamos cenários leves de alta frequência que geram receita; depois expandimos com plugins impulsionados pela comunidade.',
    tabRetail: 'Varejo (núcleo)',
    tabWarehouse: 'Armazém (núcleo)',
    tabIndustrial: 'Industrial e cauda longa (plugins)',
    coreCapabilities: 'Capacidades centrais',
    businessGoal: 'Objetivo de negócio',
    scenarios: [
      {
        tag: 'Solução setorial',
        scene: 'Bubble tea / QSR / redes de lojas',
        capabilities: [
          'Contagem de fluxo de clientes e comparação por período',
          'Detecção de duração de filas no caixa',
          'Alertas em tempo real nos horários de pico',
          'Geração automática de relatórios de ROI por loja',
        ],
        goal: 'Aumentar o ROI por loja dos clientes e acelerar a receita da equipe',
      },
      {
        tag: 'Empresa e governo',
        scene: 'Parques industriais / armazéns não tripulados',
        capabilities: [
          'Autenticação por lista branca de rostos desconhecidos',
          'Alertas em tempo real por anomalias noturnas',
          'Detecção de intrusão em zonas restritas',
          'Arquivo estruturado de eventos de segurança',
        ],
        goal: 'Atender necessidades essenciais de segurança com entrega de alto valor',
      },
      {
        tag: 'Extensibilidade com IA',
        scene: 'Fábricas / zonas de risco de incêndio / agricultura',
        capabilities: [
          'Detecção de entrada não autorizada',
          'Reconhecimento de quedas e escorregões',
          'Detecção de fumaça e chamas abertas',
          'Integração de modelos de terceiros pela comunidade',
        ],
        goal: 'Expansão de baixo custo via comunidade aberta e plugins de modelos de terceiros',
      },
    ],
  },
  techstack: {
    title: 'Base full-stack moderna compatível com Vibe Coding',
    subtitle:
      'Um stack unificado — sem legado. Deixe a IA ser seu melhor copiloto para personalização.',
    items: [
      {
        title: 'Gateway de streaming central',
        description:
          'Demultiplexação de alto desempenho e encaminhamento WebRTC com memória mínima — ultra baixo consumo na borda. Zero pausas GC, latência de milissegundos.',
      },
      {
        title: 'Núcleo de negócios empresarial',
        description:
          'Alinhado com as linguagens do frontend. Arquitetura modular clara com mais de 95% de compreensão em prompts de IA — gere um plugin setorial personalizado em minutos com Vibe Coding.',
      },
      {
        title: 'Base de dados confiável',
        description:
          'Modelo relacional padrão para eventos espaciais estruturados. Migração e escalonamento fáceis. Extensão de séries temporais TimescaleDB compatível.',
      },
      {
        title: 'Percepção em tempo real sem latência',
        description:
          'Deixe para trás fluxos legados de 3–5 s. Pré-visualização instantânea multiplataforma sem plugins <500ms. Criptografia ponta a ponta, resistente a sequestro por design.',
      },
    ],
    deployLabel: 'Implantação local com um clique',
    tagSetup: 'Configuração em 30 min',
    tagSovereignty: 'Dados on-premise',
    tagLicense: 'MIT License',
  },
  features: {
    title: 'Um motor orientado a eventos — não um DVR tradicional',
    subtitle: 'Seis capacidades centrais que redefinem o que as câmeras podem fazer.',
    items: [
      {
        title: 'Zero substituição de hardware',
        description:
          'Reutilize câmeras IP Hikvision, Dahua e genéricas. Compatibilidade total com dispositivos ONVIF/RTSP.',
      },
      {
        title: 'Motor de regras aberto',
        description:
          'Desenhe ROIs de formas arbitrárias e combine gatilhos de tempo, espaço e ação com flexibilidade.',
      },
      {
        title: 'Modelos de IA plugáveis',
        description:
          'Núcleo desacoplado de algoritmos. Troque em caliente YOLO, RT-DETR e mais — sem vendor lock-in.',
      },
      {
        title: 'Implantação Docker em uma linha',
        description:
          'Suba um centro completo de computação de vídeo com IA localmente em 30 minutos. Soberania de dados garantida.',
      },
      {
        title: 'Privacidade by design',
        description:
          'Desfoque facial na borda, monitoramento de funcionários desativado por padrão. Postura de privacidade pronta para GDPR.',
      },
      {
        title: 'Saídas de ecossistema abertas',
        description:
          'Webhook e MQTT integrados — integre Feishu, DingTalk ou gateways industriais em segundos.',
      },
    ],
  },
  ecosystem: {
    title: 'O elo «visão» em uma cadeia de valor de seis produtos',
    subtitle:
      'VistaCast não é um SaaS isolado — é uma peça-chave do ecossistema de inteligência espacial LuminaryWorks.',
    youAreHere: 'VOCÊ ESTÁ AQUI',
    synergyTitle: 'Sinergias técnicas',
    products: [
      { subtitle: 'Orquestração visual', role: 'Orquestrar' },
      { subtitle: 'Ingestão IoT', role: 'Ingerir' },
      { subtitle: 'Análise BI', role: 'Analisar' },
      { subtitle: 'Visão com IA', role: 'Perceber' },
      { subtitle: 'Intervenção remota', role: 'Intervir' },
      { subtitle: 'Rede de valor', role: 'Valor' },
    ],
    synergies: [
      {
        desc: 'Dados estruturados do VistaCast fluem para o DataLuminary com dashboards espaciais autogerados.',
      },
      {
        desc: 'Alertas de alto risco acionam o SyncroBrain para atuar hardware físico — automação software-mundo.',
      },
      {
        desc: 'Acordar o VistaRemote com um clique para confirmação humana e controle em tempo real que fecha o ciclo.',
      },
    ],
    baseNote:
      'Construído sobre um ecossistema unificado TypeScript / NestJS — seis produtos compartilham tipos, convenções modulares e padrões de implantação.',
  },
  comparison: {
    title: 'Irmãos com papéis claros: VistaCast vs VistaRemote',
    subtitle:
      'Ambos sob LuminaryWorks — divisão complementar de trabalho para percepção espacial e execução.',
    columnDimension: 'Dimensão',
    columnVistacast: 'VistaCast',
    columnVistaremote: 'VistaRemote',
    rows: [
      {
        dimension: 'Meio físico',
        vistacast: 'Câmeras de segurança fixas (ONVIF / RTSP)',
        vistaremote: 'Mobile / desktop / robôs (WebRTC)',
      },
      {
        dimension: 'Valor central',
        vistacast: 'Percepção com IA, dados espaciais estruturados, alertas automáticos',
        vistaremote: 'Intervenção humana remota, controle bidirecional, gravação de auditoria',
      },
      {
        dimension: 'Lógica de sinergia',
        vistacast: 'Detecta anomalias espaciais, emite sinais (fonte de automação)',
        vistaremote: 'Recebe sinais, assume controle remoto (execução e fechamento)',
      },
    ],
    synergyTitle: 'Cenário de sinergia típico:',
    synergyBody:
      'VistaCast detecta intruso noturno no armazém → alerta no Feishu → equipe de plantão acorda o VistaRemote → comunicação bidirecional por alto-falante e gravação. Juntos: percepção automatizada + intervenção humana.',
  },
  cta: {
    badge: 'Acesso antecipado · piloto M1 aberto',
    title: 'Construamos juntos o futuro da inteligência espacial',
    description:
      'Experimente a fluidez do WebRTC e um stack moderno completo. Seja você operador de rede ou desenvolvedor — junte-se a moldar o piloto M1.',
    perks: [
      'Acesso gratuito ao piloto M1',
      'WebRTC de baixa latência',
      'Acesso completo ao código-fonte',
      'Suporte dedicado',
    ],
    primary: 'Reservar piloto antecipado (grátis)',
    secondary: 'Estrela no GitHub',
    finePrint: 'Sem cartão de crédito · soberania de dados · saia quando quiser',
  },
  footer: {
    docs: 'Documentação',
    github: 'GitHub',
    ecosystem: 'Ecossistema LuminaryWorks',
    privacy: 'Privacidade e conformidade',
    copyright: 'Powered by LuminaryWorks',
    privacyNote:
      'Tecnologia para o bem — monitoramento de comportamento de funcionários desativado por padrão. Privacidade é nossa postura padrão, não um recurso.',
  },
}

export default pt
