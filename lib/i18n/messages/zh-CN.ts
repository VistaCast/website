import type { Messages } from '../types'

const zhCN: Messages = {
  meta: {
    title: 'VistaCast · 视界云遥 — 插件化 AI 摄像头云监控平台',
    description:
      '纯软件 AI 视频流边缘计算平台。WebRTC 毫秒级秒开，兼容存量 RTSP/ONVIF 摄像头，核心引擎 + 热插拔插件架构，全栈 TypeScript/Rust 二开，面向 Vibe Coding 时代。',
    ogTitle: 'VistaCast · 视界云遥',
    ogDescription: '插件化 AI 摄像头云监控平台，WebRTC 低延迟，全栈 TypeScript/Rust 二开友好',
  },
  brand: { subtitle: '视界云遥' },
  nav: {
    architecture: '核心架构',
    plugins: '行业插件',
    techstack: '技术栈与极客生态',
    roadmap: '路线图',
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
      '纯软件 AI 视频流边缘计算平台。无需更换硬件，兼容存量 RTSP/ONVIF 设备，通过 WebRTC 协议实现低延迟、毫秒级秒开预览。基于首创的「核心引擎 + 热插拔插件」架构，支持全栈 TypeScript/Rust 二开，面向 Vibe Coding 时代而生。',
    ctaPrimary: '预约商业试点',
    ctaSecondary: 'Github文档',
    archCanvas: 'Architecture Canvas',
    input: 'INPUT',
    coreEngine: 'CORE ENGINE',
    pluginPipeline: 'PLUGIN PIPELINE',
    inputSource: 'Input Source',
  },
  plugins: {
    retail: { name: '商业零售', status: '已落地 (客流/排队)' },
    warehouse: { name: '仓储物流', status: '已落地 (夜间防盗)' },
    industrial: { name: '工业安全', status: '社区规划 (烟雾/跌倒)' },
    legendDeployed: '已商业落地',
    legendPlanned: '社区规划中',
    legendLatency: '<500ms WebRTC 延迟',
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
        capabilities: ['客流计数与时段对比', '收银台排队时长检测', '高峰期实时预警推送', '单店 ROI 报表自动生成'],
        goal: '帮客户提升单店 ROI，帮团队快速回款',
      },
      {
        tag: '政企覆盖',
        scene: '工业园区 / 无人仓库',
        capabilities: ['陌生人脸白名单鉴权', '夜间异动实时告警', '禁区越界检测', '安防事件结构化存档'],
        goal: '满足刚需安防需求，实现高客单价交付',
      },
      {
        tag: '强大AI扩展能力',
        scene: '制造车间 / 明火易燃区 / 农业养殖',
        capabilities: ['未授权闯入检测', '跌倒 / 摔倒行为识别', '烟雾与明火感知', '开源社区第三方模型接入'],
        goal: '通过开源社区与第三方模型插件低成本扩展',
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
          '高性能视频流解复用与 WebRTC 转发，内存占用极小，边缘端超低功耗运行。零 GC 暂停，毫秒级延迟保证。',
      },
      {
        title: '企业级业务内核',
        description:
          '与前端语言高度统一。清晰的模块化架构，AI 提示词理解度高达 95% 以上，助您用 Vibe Coding 几分钟内糊出一个自定义行业插件。',
      },
      {
        title: '高可靠数据底座',
        description:
          '标准实体关系模型，天然契合结构化空间事件存储，数据迁移与扩展轻而易举。支持 TimescaleDB 时序扩展。',
      },
      {
        title: '零延迟实时感知',
        description:
          '告别传统 3–5 秒的高延迟视频流，实现跨平台无插件 <500ms 纯净秒开体验。端到端加密，天然防劫持。',
      },
    ],
    deployLabel: '一键本地部署',
    tagSetup: '30 min setup',
    tagSovereignty: '数据不出机房',
    tagLicense: 'MIT License',
  },
  features: {
    title: '是事件驱动引擎，而非传统录像机',
    subtitle: '六大核心产品力，重新定义摄像头的价值边界。',
    items: [
      {
        title: '零硬件更换成本',
        description: '存量海康 / 大华 / 普通网络摄像头即插即用，兼容所有 ONVIF/RTSP 设备，利旧率 100%。',
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
