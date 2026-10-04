import type { Messages } from '../types'

const zhCN: Messages = {
  meta: {
    title: 'VistaCast · 视界云遥 — 插件化 AI 摄像头云监控平台',
    description:
      '门店、仓储、产线，同一套视觉软件。已有摄像头按 RTSP / ONVIF 接入，新机位可定制专业摄像头模组。',
    ogTitle: 'VistaCast · 视界云遥',
    ogDescription: '门店、仓储、产线，同一套视觉软件。已有摄像头可接入，新机位可定制专业模组。',
  },
  brand: { subtitle: '视界云遥' },
  nav: {
    architecture: '能做什么',
    plugins: '使用场景',
    techstack: '装在现场',
    roadmap: '产品生态',
    download: '下载',
    login: '登录',
    github: 'GitHub',
    docs: '官方文档',
  },
  header: { drawerTitle: 'VistaCast · 视界云遥' },
  hero: {
    badge: '门店 · 仓储 · 产线',
    title: '场景智能 · 产线光学',
    titleGradient: '同一套摄像头视觉平台',
    tagline: '门店、仓储、产线，同一套软件。',
    description:
      '现场已有摄像头，按 RTSP / ONVIF 接入。新机位可以定制专业摄像头模组。实时画面走 WebRTC。',
    ctaPrimary: '预约方案沟通',
    ctaSecondary: '官方文档',
    archCanvas: '从摄像头到你收到的通知',
    input: '接入',
    coreEngine: '看懂',
    pluginPipeline: '你会收到',
    inputSource: '你的摄像头',
    coreTitle: '视界云遥',
    coreNote: '看懂画面，通知该知道的人',
  },
  plugins: {
    kicker: '插件',
    retail: { name: '商业零售', status: '客流 · 时段' },
    warehouse: { name: '仓储物流', status: '夜间 · 周界' },
    industrial: { name: '工业安全', status: '危险区 · 告警' },
    aoi: { name: '产线光学', status: '焊点 · 缺件' },
    legendDeployed: '门店、仓库、产线和工厂，都在这一套软件里。',
    legendPlanned: '按场景交付',
    legendLatency: 'WebRTC 实时预览',
  },
  strategy: {
    title: '装上之后，现场会变成这样',
    subtitle:
      '店长看见今天的客流。夜里有人进仓库，值班的人马上知道。产线工位查出缺件和焊点。工厂、家里、园区，按你的现场配上。',
    tabRetail: '商业零售',
    tabWarehouse: '仓储物流',
    tabIndustrial: '工业安全',
    coreCapabilities: '你会得到',
    businessGoal: '对你意味着',
    scenarios: [
      {
        tab: '商业零售',
        lead: '店长不用下班再把录像倒回去数人头。打开就能看见今天进店多少人、哪个时段更忙、门口和店里哪里人更多。忙和闲分开看，变化发到你现在用的群里，排班和备货跟着当天的客流走。',
        tag: '门店',
        scene: '奶茶 / 快餐 / 连锁门店',
        capabilities: ['出入口客流', '时段对比', '热区与停留', '通知发到你现在用的群'],
        goal: '让店长看到客流怎么变，而不是只回看录像。',
      },
      {
        tab: '仓储物流',
        lead: '夜里不用安排人一直盯着屏幕。有人走进仓库、通道或禁区，值班的人马上在群里收到通知，并知道是哪一路摄像头。看管时间按班次来设，白天正常进出不打扰，夜里该响的时候才响。',
        tag: '仓储',
        scene: '仓库 / 夜间值守',
        capabilities: ['夜间禁区进入', '通道与周界告警', '按班次设置时段', '告警推送到值班群'],
        goal: '夜里有人进入，值班的人马上知道。',
      },
      {
        tab: '产线光学',
        lead: '缺件、错件、偏移和焊点问题，在工位上当时就能看出来，不用等整批做完再返工。连锡、虚焊、冷焊，以及条码和标签在不在，都在这一套软件里。检测放在你现在的产线上，不必为光学再单买一套系统。',
        tag: '产线',
        scene: 'PCB / 组装 / 标签 / 胶路',
        capabilities: ['缺件、错件、偏移', '焊点：连锡、虚焊、冷焊', '条码与标签在位', '普通工位电脑即可运行'],
        goal: '光学检测放在现有工位上，不必另买一套系统。',
      },
      {
        tab: '工业安全',
        lead: '人走进划好的危险区，或者画面里出现跌倒、烟雾，马上提醒到该知道的人。区域可以自己圈，通知进你现有的系统。不用等班后把录像翻一遍，才知道这一班里发生过什么。',
        tag: '工厂',
        scene: '危险区 / 车间',
        capabilities: ['人员进入危险区', '跌倒与烟雾告警', '画面上划定区域', '告警接到现有系统'],
        goal: '危险区有人，立刻提醒，而不是事后翻录像。',
      },
      {
        tab: '居家看护',
        lead: '家里有人跌倒，或者夜里出现不该有的活动，按你定好的顺序通知到家人。先告诉谁、过一会儿再告诉谁，由你来排。下一步让人决定，软件不替你呼叫急救。',
        tag: '看护',
        scene: '居家安全 / 老人看护',
        capabilities: ['跌倒提醒', '夜间异常活动', '按家人顺序通知', '异常交给人处理，不替代急救'],
        goal: '家里有异常时通知到人，由人决定下一步。',
      },
      {
        tab: '园区周界',
        lead: '有人进入园区周界，或者某一路摄像头掉线，值班的人当时就知道是哪里。通知和仓库用的是同一套，直接交到正在值班的人手里，不用另养一套只看周界的系统。',
        tag: '周界',
        scene: '园区周界 / 摄像头离线',
        capabilities: ['周界进入提醒', '摄像头离线提醒', '和仓库用同一套通知', '交到值班的人手里'],
        goal: '周界有人进来，或者摄像头掉线，值班的人当时就知道。',
      },
    ],
  },
  techstack: {
    title: '装在你自己的机房',
    subtitle: '画面和记录留在现场。通知进飞书、钉钉，或你已经在用的系统。',
    items: [
      {
        title: '实时画面留在现场',
        description: '预览走你自己的网络，不必先把视频送到公有云。',
      },
      {
        title: '结果记在你这边',
        description: '客流、闯入和产线结果，存在你自己的系统里。',
      },
      {
        title: '接到你已经在用的工具',
        description: '飞书、钉钉、值班群，或你现有的接口，按现在的流程通知。',
      },
      {
        title: '规则在现场就能改',
        description: '区域、时间和通知给谁，在现场调整，不用等下一版。',
      },
    ],
    deployLabel: '在自己的机房装好',
    tagSetup: '大约半小时',
    tagSovereignty: '数据不出门',
    tagLicense: 'Polyform Noncommercial License',
  },
  features: {
    title: '它不是一台只负责录像的机器',
    subtitle: '该看见的事，当时就通知到人。',
    items: [
      {
        title: '摄像头怎么接',
        description: '现场枪机按 RTSP / ONVIF 接入。需要新机位时，按场景定制专业摄像头模组。',
      },
      {
        title: '圈出要看的地方',
        description: '在画面上画出区域，定好时间和要盯的动作。',
      },
      {
        title: '按现场换识别',
        description: '客流、值守、焊点按你的现场来，不绑死一家算法。',
      },
      {
        title: '装在自己的机房',
        description: '大约半小时能在现场跑起来，数据不出门。',
      },
      {
        title: '隐私默认收着',
        description: '人脸可以在现场打模糊。盯员工行为的功能默认关闭。',
      },
      {
        title: '通知进你的工作群',
        description: '告警可以进飞书、钉钉，或你现有的系统。',
      },
    ],
  },
  ecosystem: {
    title: '看见之后，还可以交给谁',
    subtitle: '要出报表、要带动设备、要人远程看一眼，交给旁边的产品。VistaCast 负责把画面变成通知和数据。',
    youAreHere: '你在这里',
    synergyTitle: '接着可以做什么',
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
        desc: '客流和告警可以做成你要看的报表。',
      },
      {
        desc: '危险告警可以带动现场的设备。',
      },
      {
        desc: '需要人确认时，可以远程连上看一眼、说一句话。',
      },
    ],
    baseNote: '这些可以接在一起用，不必各买一套对不上的系统。',
  },
  comparison: {
    title: '一个负责看见，一个负责上去处理',
    subtitle: 'VistaCast 看摄像头里的现场。VistaRemote 让人远程上去处理。',
    columnDimension: '维度',
    columnVistacast: 'VistaCast 视界云遥',
    columnVistaremote: 'VistaRemote 视界远程',
    rows: [
      {
        dimension: '看哪里',
        vistacast: '固定摄像头里的现场',
        vistaremote: '手机、电脑或机器人跟前',
      },
      {
        dimension: '做什么',
        vistacast: '看见客流、闯入和产线问题，并通知人',
        vistaremote: '人远程上去看、说、处理，并留下记录',
      },
      {
        dimension: '怎么配合',
        vistacast: '发现事情，通知值班的人',
        vistaremote: '值班的人远程上去处理',
      },
    ],
    synergyTitle: '夜里仓库的一种做法：',
    synergyBody:
      '仓库夜里有人进来，VistaCast 通知到飞书。值班的人用 VistaRemote 连上现场，对喇叭说一句话，并留下记录。',
  },
  cta: {
    badge: '先说说你的现场',
    title: '你的摄像头要看什么',
    description: '门店、仓库、产线，或家里。已有摄像头可以接上。新机位可以做专业模组。',
    perks: ['接上现有摄像头', '当时就能看到画面', '按你的现场来配', '数据留在你这边'],
    primary: '预约方案沟通',
    secondary: '在 GitHub 关注项目',
    finePrint: '先沟通方案 · 数据留在现场 · 不要求换掉现有摄像头',
  },
  footer: {
    docs: '官方文档',
    github: 'GitHub 仓库',
    ecosystem: 'LuminaryWorks 生态',
    privacy: '隐私与合规声明',
    copyright: 'Powered by LuminaryWorks 启明工坊',
    privacyNote: '坚守技术向善，产品默认关闭员工行为监控类功能。隐私保护不是功能，是我们的默认立场。',
  },
}

export default zhCN
