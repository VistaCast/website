import type { Messages } from '../types'

const zhCN: Messages = {
  meta: {
    title: 'VistaCast · 视界云遥 — 插件化 AI 摄像头云监控平台',
    description:
      '纯软件 AI 视频流边缘平台。预览走 WebRTC，兼容存量 RTSP/ONVIF。延迟不是已承诺的毫秒 SLA。',
    ogTitle: 'VistaCast · 视界云遥',
    ogDescription: '插件化 AI 摄像头云监控平台，WebRTC 低延迟，全栈 TypeScript/Rust 二开友好',
  },
  brand: { subtitle: '视界云遥' },
  nav: {
    architecture: '核心架构',
    plugins: '行业插件',
    techstack: '技术栈与极客生态',
    roadmap: '路线图',
    download: '下载',
    login: '登录',
    github: 'GitHub',
  },
  header: { drawerTitle: 'VistaCast · 视界云遥' },
  hero: {
    badge: 'Open Source · Plugin Architecture · WebRTC Native',
    title: 'AI 视觉自动巡检（无人值守）',
    titleGradient: 'WebRTC 超低延时监控',
    tagline: '让每一路摄像头，成为物理世界的结构化数据流',
    description:
      '纯软件 AI 视频流边缘平台。兼容存量 RTSP/ONVIF。预览走 WebRTC，失败可回 JPEG。不是已承诺的毫秒 SLA。',
    ctaPrimary: '预约商业试点',
    ctaSecondary: 'Github文档',
    archCanvas: 'Architecture Canvas',
    input: 'INPUT',
    coreEngine: 'CORE ENGINE',
    pluginPipeline: 'PLUGIN PIPELINE',
    inputSource: 'Input Source',
  },
  plugins: {
    retail: { name: '商业零售', status: '试点可演示（客流阈值）' },
    warehouse: { name: '仓储物流', status: '试点可演示（夜间入侵）' },
    industrial: { name: '工业安全', status: '试点可演示（跌倒/烟雾桩，不是 F1）' },
    legendDeployed: '试点可演示（未售）',
    legendPlanned: '实验室壳（不是 F1）',
    legendLatency: '仅信令；媒体不是已售 SLA',
  },
  strategy: {
    title: '战略聚焦，用「场景插件」兼顾生存与星辰大海',
    subtitle:
      '作为初创团队，我们深知贪多必失。我们克制地将内核与商业场景解耦，前期死磕高频、能帮客户快速赚钱/省钱的轻场景；未来通过社区驱动，覆盖全场景。',
    tabRetail: '商业零售 (核心)',
    tabWarehouse: '仓储物流 (核心)',
    tabIndustrial: '工业与长尾 (插件化)',
    coreCapabilities: '核心能力',
    businessGoal: '商业目标',
    scenarios: [
      {
        tag: '行业级方案',
        scene: '奶茶 / 快餐 / 连锁门店',
        capabilities: ['客流阈值与时段对比（实验室）', '不是收银台排队检测', '不是单店 ROI 报表', '不是已售零售 SKU'],
        goal: '演示门店客流试点。不是计数模型，不是已售。',
      },
      {
        tag: '试点可演示',
        scene: '仓储夜间 / 园区周界',
        capabilities: ['夜间入侵日程 22:00–06:00（实验室）', '不是人脸白名单', '不是已售安防', '不是 24/7 SLA'],
        goal: '仓储夜间包是实验室壳。不是 F1。',
      },
      {
        tag: '试点可演示',
        scene: '工厂危险区',
        capabilities: ['跌倒与烟雾类型复用（桩）', '不是明火检测', '不是 F1', '不是已售 EHS'],
        goal: '工厂危险区是实验室壳。不是新模型。',
      },
      {
        tab: '居家（试点）',
        tag: '试点',
        scene: '居家安全 / 看护',
        capabilities: ['复用跌倒与夜间入侵', '不是自动急救电话', '不是儿童检测器', '不是 24/7 看护 SLA'],
        goal: '居家与看护包是实验室模板，没有生产权重。',
      },
      {
        tab: '周界（试点）',
        tag: '试点',
        scene: '园区周界 / 摄像头离线',
        capabilities: ['周界复用入侵', '离线复用 device.offline', '不是 24/7 在线 SLA', '不是已售安防 SKU'],
        goal: '周界与离线看护是获客壳，不是 F1。',
      },
    ],
  },
  techstack: {
    title: 'Vibe Coding 友好的全栈现代技术底座',
    subtitle: '统一技术栈，拒绝臃肿历史包袱，让 AI 成为您的最强二开副驾驶。',
    items: [
      {
        title: '核心流媒体网关',
        description:
          '高性能视频流解复用与 WebRTC 转发。延迟取决于网络与摄像头，不是已承诺的毫秒 SLA。',
      },
      {
        title: '企业级业务内核',
        description:
          '与前端语言高度统一。模块边界清楚，方便用 AI 改插件。不保证提示词理解率。',
      },
      {
        title: '高可靠数据底座',
        description:
          '标准实体关系模型，天然契合结构化空间事件存储，数据迁移与扩展轻而易举。支持 TimescaleDB 时序扩展。',
      },
      {
        title: '零延迟实时感知',
        description:
          '预览走 P2P-first WebRTC，失败可回 JPEG。不是已承诺的 500ms SLA，也不是云端转发。',
      },
    ],
    deployLabel: '一键本地部署',
    tagSetup: '30 min setup',
    tagSovereignty: '数据不出机房',
    tagLicense: 'Polyform Noncommercial License',
  },
  features: {
    title: '是事件驱动引擎，而非传统录像机',
    subtitle: '六大核心产品力，重新定义摄像头的价值边界。',
    items: [
      {
        title: '零硬件更换成本',
        description: '兼容存量 ONVIF/RTSP 摄像头。不是每一台都能接入，不是 100% 利旧。',
      },
      {
        title: '开放式规则引擎',
        description: '支持在画面中划定任意形状 ROI 区域，自定义「时间 + 空间 + 动作」三维触发器，灵活组合。',
      },
      {
        title: '插件化 AI 模型',
        description: '内核与算法完全解耦，支持 YOLO、RT-DETR 等模型热插拔替换，不锁定任何软硬件供应商。',
      },
      {
        title: 'Docker 1 行命令部署',
        description: '30 分钟在本地自建完备的 AI 视频流计算中心，数据不出机房，满足最严格的数据主权要求。',
      },
      {
        title: '隐私合规护航',
        description: '边缘端支持人脸模糊处理，员工行为监控类功能默认关闭，符合 GDPR 及现代隐私合规要求。',
      },
      {
        title: '开放式生态外发',
        description: '内置标准 Webhook 与 MQTT，秒级联动飞书通知、钉钉告警或工业控制网关，无缝融入现有流程。',
      },
    ],
  },
  ecosystem: {
    title: '六产品价值链中的「视」：从孤立感知到空间自动化',
    subtitle: 'VistaCast 不是一个孤立的 SaaS，它是 LuminaryWorks 全链路空间智能生态的关键一环。',
    youAreHere: 'YOU ARE HERE',
    synergyTitle: '技术共生联动',
    products: [
      { subtitle: '可视化编排', role: '编排' },
      { subtitle: 'IoT 采集', role: '采集' },
      { subtitle: 'BI 分析', role: '分析' },
      { subtitle: 'AI 视界', role: '感知' },
      { subtitle: '远程介入', role: '介入' },
      { subtitle: '价值网络', role: '价值' },
    ],
    synergies: [
      {
        desc: 'VistaCast 识别的结构化数据实时推送至 DataLuminary，自动生成空间分析大屏看板。',
      },
      {
        desc: '触发高危告警时通过 SyncroBrain 联动物理硬件，实现纯软件到物理世界的自动化闭环。',
      },
      {
        desc: '一键唤醒 VistaRemote 远程介入，人工确认 + 实时控制接管，完成异常事件的最终闭环。',
      },
    ],
    baseNote: '基于统一的 TypeScript / NestJS 生态构建，六大产品共享类型定义、模块规范与部署标准。',
  },
  comparison: {
    title: '亲兄弟，明算账：VistaCast vs VistaRemote',
    subtitle: '同属 LuminaryWorks，分工明确、协同互补，共同构成物理空间的感知与执行闭环。',
    columnDimension: '维度',
    columnVistacast: 'VistaCast 视界云遥',
    columnVistaremote: 'VistaRemote 视界远程',
    rows: [
      {
        dimension: '物理载体',
        vistacast: '固定安防摄像头 (ONVIF / RTSP)',
        vistaremote: '移动设备 / PC 桌面 / 机器人 (WebRTC)',
      },
      {
        dimension: '核心价值',
        vistacast: 'AI 自动感知、物理空间结构化数据、自动告警',
        vistaremote: '远程人工介入、双向实时控制、录制审计',
      },
      {
        dimension: '协同逻辑',
        vistacast: '发现空间异常，发出信号（自动化源头）',
        vistaremote: '接收异常信号，远程控制接管（执行与闭环）',
      },
    ],
    synergyTitle: '典型协同场景：',
    synergyBody:
      'VistaCast 在夜间仓库中检测到陌生人入侵 → 触发告警推送飞书 → 值班人员点击唤醒 VistaRemote → 与现场喇叭双向通话并录制存档。两款产品合力构成「自动感知 + 人工介入」的完整闭环。',
  },
  cta: {
    badge: 'Early Access · M1 试点开放中',
    title: '共同定义空间智能的未来',
    description:
      '体验由 WebRTC 与现代全栈技术栈带来的流畅与高效。无论您是连锁创业者还是开发者，欢迎加入打磨 M1 试点。',
    perks: ['免费参与 M1 试点', 'WebRTC 低延迟体验', '完整源码访问权', '专属技术支持'],
    primary: '预约早期试点 (免费)',
    secondary: '在 GitHub 关注项目',
    finePrint: '无需信用卡 · 数据主权自持 · 随时可离开',
  },
  footer: {
    docs: '产品文档',
    github: 'GitHub 仓库',
    ecosystem: 'LuminaryWorks 生态',
    privacy: '隐私与合规声明',
    copyright: 'Powered by LuminaryWorks 启明工坊',
    privacyNote: '坚守技术向善，产品默认关闭员工行为监控类功能。隐私保护不是功能，是我们的默认立场。',
  },
}

export default zhCN
