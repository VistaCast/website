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
    techstack: 'Permanece local',
    roadmap: 'Ecossistema',
    download: 'Baixar',
    login: 'Entrar',
    github: 'GitHub',
    docs: 'Docs',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: 'Plugins de cena · Óptica de linha · Prévia WebRTC',
    title: 'Inteligência de cena · Óptica de linha',
    titleGradient: 'Uma plataforma de visão para as suas câmeras',
    tagline: 'Lojas, armazéns e linhas. Um só software.',
    description:
      'Câmeras que já estão no local entram por RTSP / ONVIF. Posições novas podem usar um módulo de câmera profissional sob medida. A imagem ao vivo vai por WebRTC.',
    ctaPrimary: 'Falar de uma cena',
    ctaSecondary: 'Documentação',
    archCanvas: 'Da câmera ao aviso',
    input: 'Conexão',
    coreEngine: 'Entender',
    pluginPipeline: 'O que você recebe',
    inputSource: 'Suas câmeras',
    coreTitle: 'VistaCast',
    coreNote: 'Entende a imagem e avisa quem precisa saber',
  },
  plugins: {
    kicker: 'Plugin',
    retail: { name: 'Varejo', status: 'Fluxo · horário' },
    warehouse: { name: 'Armazém', status: 'Noite · perímetro' },
    industrial: { name: 'Segurança industrial', status: 'Zona de risco' },
    aoi: { name: 'Óptica de linha', status: 'Solda · falta' },
    legendDeployed: 'Varejo, armazém, óptica de linha e segurança no mesmo motor.',
    legendPlanned: 'Entregue por cena',
    legendLatency: 'Prévia ao vivo via WebRTC',
  },
  strategy: {
    title: 'Assim fica o local quando já está ligado',
    subtitle:
      'O gerente vê o movimento de hoje. Se alguém entra no armazém à noite, quem está de plantão fica sabendo. O posto da linha encontra faltas e problemas de solda. Fábrica, casa e perímetro se ajustam ao seu local.',
    tabRetail: 'Varejo',
    tabWarehouse: 'Armazém',
    tabIndustrial: 'Segurança industrial',
    coreCapabilities: 'O que faz',
    businessGoal: 'Para que serve',
    scenarios: [
      {
        tab: 'Varejo',
        tag: 'Loja',
        scene: 'Chá, fast food e redes',
        capabilities: ['Fluxo na entrada', 'Comparação por horário', 'Zonas quentes e permanência', 'Avisos nas ferramentas que você já usa'],
        goal: 'O gerente vê como o movimento muda, em vez de só rever o vídeo.',
      },
      {
        tab: 'Armazém',
        tag: 'Armazém',
        scene: 'Armazéns e vigília noturna',
        capabilities: ['Zonas restritas à noite', 'Corredores e perímetro', 'Horários por turno', 'Avisos no canal de plantão'],
        goal: 'Se alguém entra à noite, quem está de plantão sabe na hora.',
      },
      {
        tab: 'Óptica de linha',
        tag: 'Linha',
        scene: 'PCB, montagem, etiquetas e cordões',
        capabilities: ['Peça faltando, errada ou deslocada', 'Solda: ponte, vazio e junta fria', 'Código e etiqueta presentes', 'Roda no PC da estação'],
        goal: 'A inspeção óptica fica na estação que você já tem.',
      },
      {
        tab: 'Segurança industrial',
        tag: 'Fábrica',
        scene: 'Zonas de risco e oficinas',
        capabilities: ['Pessoa na zona de risco', 'Queda e fumaça', 'Regiões no quadro', 'Avisos nos sistemas atuais'],
        goal: 'Alguém na zona de risco gera um aviso agora, não numa gravação depois.',
      },
      {
        tab: 'Cuidado em casa',
        tag: 'Cuidado',
        scene: 'Segurança em casa e cuidado de idosos',
        capabilities: ['Aviso de queda', 'Atividade noturna incomum', 'Aviso à família em ordem', 'Uma pessoa decide o próximo passo'],
        goal: 'Se algo acontece em casa, uma pessoa é avisada e decide.',
      },
      {
        tab: 'Perímetro',
        tag: 'Perímetro',
        scene: 'Perímetro do site e câmera offline',
        capabilities: ['Entrada no perímetro', 'Câmera offline', 'Os mesmos avisos do armazém', 'No fluxo de plantão'],
        goal: 'Um perímetro cruzado e uma câmera caída viram eventos que alguém pode tratar.',
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
    tagLicense: 'Polyform Noncommercial License',
  },
  features: {
    title: 'Um motor orientado a eventos — não um DVR tradicional',
    subtitle: 'Seis capacidades centrais que redefinem o que as câmeras podem fazer.',
    items: [
      {
        title: 'Como as câmeras entram',
        description:
          'As que já estão no local entram por RTSP / ONVIF. Posições novas podem usar um módulo profissional sob medida.',
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
    title: 'O elo da visão: da câmera a um evento que alguém pode atender',
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
    badge: 'Entregue por cena',
    title: 'Construamos juntos o futuro da inteligência espacial',
    description:
      'Uma loja, um armazém, uma linha ou o cuidado em casa. As câmeras que você já tem podem entrar. A cena é entregue no mesmo motor.',
    perks: [
      'Funciona com as câmeras atuais',
      'Prévia ao vivo via WebRTC',
      'Cenas sob demanda',
      'Os dados ficam no local',
    ],
    primary: 'Falar de uma cena',
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
  download: {
    metaTitle: 'Baixar o VistaCast',
    metaDescription:
      'Baixe a estação de loja VistaCast (Windows / macOS) e o APK complementar para Android. Os instaladores apontam sempre para a versão mais recente.',
    ogAlt: 'Baixar o VistaCast',
    title: 'Baixar o VistaCast',
    latest: 'Mais recente {{version}}:',
    lead: 'Estação de loja para Windows e macOS, e um APK Android de sideload (opcional). Os botões apontam sempre para o instalador mais recente.',
    hostedBefore: 'Os instaladores ficam no repositório público',
    hostedAfter: ' (o repositório de código permanece privado).',
    unsigned:
      'Os instaladores não têm assinatura de código nem notarização. No SmartScreen do Windows, escolha "Executar assim mesmo". No macOS, clique com o botão direito no app e escolha Abrir. No Android é preciso permitir fontes desconhecidas.',
    workstation: 'Estação de loja',
    workstationBody:
      'App Electron: shell local de Detect / Admin. Admin e client-infer precisam estar acessíveis neste computador ou na LAN.',
    winSetup: 'Instalador do Windows (NSIS)',
    winPortable: 'Windows portátil',
    macDmg: 'DMG do macOS',
    android: 'Companheiro Android',
    androidBody:
      'APK por sideload (não está na Play). Se esta versão ainda não tiver APK, use o Expo Go ou aguarde uma build posterior.',
    apk: 'Baixar APK',
    backHome: '← Voltar ao início',
    deviceDocs: 'Documentação de dispositivos',
  },
}

export default pt
