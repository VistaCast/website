import type { Messages } from '../types'

const zhTW: Messages = {
  meta: {
    title: 'VistaCast · 視界雲遙 — 外掛化 AI 攝影機雲監控平台',
    description:
      '純軟體 AI 視訊串流邊緣運算平台。WebRTC 毫秒級秒開，相容既有 RTSP/ONVIF 攝影機，核心引擎 + 熱插拔外掛架構，全端 TypeScript/Rust 二開，面向 Vibe Coding 時代。',
    ogTitle: 'VistaCast · 視界雲遙',
    ogDescription: '外掛化 AI 攝影機雲監控平台，WebRTC 低延遲，全端 TypeScript/Rust 二開友善',
  },
  brand: { subtitle: '視界雲遙' },
  nav: {
    architecture: '核心架構',
    plugins: '產業外掛',
    techstack: '技術棧與極客生態',
    roadmap: '路線圖',
    login: '登入',
    github: 'GitHub',
  },
  header: { drawerTitle: 'VistaCast · 視界雲遙' },
  hero: {
    badge: 'Open Source · Plugin Architecture · WebRTC Native',
    title: 'AI 視覺自動巡檢（無人值守）',
    titleGradient: 'WebRTC 超低延遲監控',
    tagline: '讓每一路攝影機，成為物理世界的結構化資料流',
    description:
      '純軟體 AI 視訊串流邊緣運算平台。無需更換硬體，相容既有 RTSP/ONVIF 裝置，透過 WebRTC 協定實現低延遲、毫秒級秒開預覽。基於首創的「核心引擎 + 熱插拔外掛」架構，支援全端 TypeScript/Rust 二開，面向 Vibe Coding 時代而生。',
    ctaPrimary: '預約商業試點',
    ctaSecondary: 'Github 文件',
    archCanvas: 'Architecture Canvas',
    input: 'INPUT',
    coreEngine: 'CORE ENGINE',
    pluginPipeline: 'PLUGIN PIPELINE',
    inputSource: 'Input Source',
  },
  plugins: {
    retail: { name: '商業零售', status: '已落地 (客流/排隊)' },
    warehouse: { name: '倉儲物流', status: '已落地 (夜間防盜)' },
    industrial: { name: '工業安全', status: '社群規劃 (煙霧/跌倒)' },
    legendDeployed: '已商業落地',
    legendPlanned: '社群規劃中',
    legendLatency: '<500ms WebRTC 延遲',
  },
  strategy: {
    title: '戰略聚焦，用「場景外掛」兼顧生存與星辰大海',
    subtitle:
      '作為初創團隊，我們深知貪多必失。我們克制地將核心與商業場景解耦，前期死磕高頻、能幫客戶快速賺錢/省錢的輕場景；未來透過社群驅動，覆蓋全場景。',
    tabRetail: '商業零售 (核心)',
    tabWarehouse: '倉儲物流 (核心)',
    tabIndustrial: '工業與長尾 (外掛化)',
    coreCapabilities: '核心能力',
    businessGoal: '商業目標',
    scenarios: [
      {
        tag: '產業級方案',
        scene: '手搖飲 / 快餐 / 連鎖門市',
        capabilities: ['客流計數與時段對比', '收銀台排隊時長偵測', '高峰期即時預警推送', '單店 ROI 報表自動產生'],
        goal: '幫客戶提升單店 ROI，幫團隊快速回款',
      },
      {
        tag: '政企覆蓋',
        scene: '工業園區 / 無人倉庫',
        capabilities: ['陌生人臉白名單鑑權', '夜間異動即時告警', '禁區越界偵測', '安防事件結構化存檔'],
        goal: '滿足剛需安防需求，實現高客單價交付',
      },
      {
        tag: '強大 AI 擴展能力',
        scene: '製造車間 / 明火易燃區 / 農業養殖',
        capabilities: ['未授權闖入偵測', '跌倒 / 摔倒行為辨識', '煙霧與明火感知', '開源社群第三方模型接入'],
        goal: '透過開源社群與第三方模型外掛低成本擴展',
      },
    ],
  },
  techstack: {
    title: 'Vibe Coding 友善的全端現代技術底座',
    subtitle: '統一技術棧，拒絕臃腫歷史包袱，讓 AI 成為您的最強二開副駕駛。',
    items: [
      {
        title: '核心串流媒體閘道',
        description:
          '高效能視訊串流解復用與 WebRTC 轉發，記憶體佔用極小，邊緣端超低功耗運行。零 GC 暫停，毫秒級延遲保證。',
      },
      {
        title: '企業級業務核心',
        description:
          '與前端語言高度統一。清晰的模組化架構，AI 提示詞理解度高達 95% 以上，助您用 Vibe Coding 幾分鐘內做出自訂產業外掛。',
      },
      {
        title: '高可靠資料底座',
        description:
          '標準實體關聯模型，天然契合結構化空間事件儲存，資料遷移與擴展輕而易舉。支援 TimescaleDB 時序擴展。',
      },
      {
        title: '零延遲即時感知',
        description:
          '告別傳統 3–5 秒的高延遲視訊串流，實現跨平台無外掛 <500ms 純淨秒開體驗。端到端加密，天然防劫持。',
      },
    ],
    deployLabel: '一鍵本機部署',
    tagSetup: '30 min setup',
    tagSovereignty: '資料不出機房',
    tagLicense: 'MIT License',
  },
  features: {
    title: '是事件驅動引擎，而非傳統錄影機',
    subtitle: '六大核心產品力，重新定義攝影機的價值邊界。',
    items: [
      {
        title: '零硬體更換成本',
        description: '既有海康 / 大華 / 普通網路攝影機即插即用，相容所有 ONVIF/RTSP 裝置，利舊率 100%。',
      },
      {
        title: '開放式規則引擎',
        description: '支援在畫面中劃定任意形狀 ROI 區域，自訂「時間 + 空間 + 動作」三維觸發器，靈活組合。',
      },
      {
        title: '外掛化 AI 模型',
        description: '核心與演算法完全解耦，支援 YOLO、RT-DETR 等模型熱插拔替換，不鎖定任何軟硬體供應商。',
      },
      {
        title: 'Docker 1 行命令部署',
        description: '30 分鐘在本機自建完備的 AI 視訊串流運算中心，資料不出機房，滿足最嚴格的資料主權要求。',
      },
      {
        title: '隱私合規護航',
        description: '邊緣端支援人臉模糊處理，員工行為監控類功能預設關閉，符合 GDPR 及現代隱私合規要求。',
      },
      {
        title: '開放式生態外發',
        description: '內建標準 Webhook 與 MQTT，秒級聯動飛書通知、釘釘告警或工業控制閘道，無縫融入現有流程。',
      },
    ],
  },
  ecosystem: {
    title: '六產品價值鏈中的「視」：從孤立感知到空間自動化',
    subtitle: 'VistaCast 不是一個孤立的 SaaS，它是 LuminaryWorks 全鏈路空間智慧生態的關鍵一環。',
    youAreHere: 'YOU ARE HERE',
    synergyTitle: '技術共生聯動',
    products: [
      { subtitle: '視覺化編排', role: '編排' },
      { subtitle: 'IoT 採集', role: '採集' },
      { subtitle: 'BI 分析', role: '分析' },
      { subtitle: 'AI 視界', role: '感知' },
      { subtitle: '遠端介入', role: '介入' },
      { subtitle: '價值網路', role: '價值' },
    ],
    synergies: [
      { desc: 'VistaCast 辨識的結構化資料即時推送至 DataLuminary，自動產生空間分析大屏看板。' },
      { desc: '觸發高危告警時透過 SyncroBrain 聯動物理硬體，實現純軟體到物理世界的自動化閉環。' },
      { desc: '一鍵喚醒 VistaRemote 遠端介入，人工確認 + 即時控制接管，完成異常事件的最終閉環。' },
    ],
    baseNote: '基於統一的 TypeScript / NestJS 生態建構，六大產品共享型別定義、模組規範與部署標準。',
  },
  comparison: {
    title: '親兄弟，明算帳：VistaCast vs VistaRemote',
    subtitle: '同屬 LuminaryWorks，分工明確、協同互補，共同構成物理空間的感知與執行閉環。',
    columnDimension: '維度',
    columnVistacast: 'VistaCast 視界雲遙',
    columnVistaremote: 'VistaRemote 視界遠端',
    rows: [
      {
        dimension: '物理載體',
        vistacast: '固定安防攝影機 (ONVIF / RTSP)',
        vistaremote: '行動裝置 / PC 桌面 / 機器人 (WebRTC)',
      },
      {
        dimension: '核心價值',
        vistacast: 'AI 自動感知、物理空間結構化資料、自動告警',
        vistaremote: '遠端人工介入、雙向即時控制、錄製稽核',
      },
      {
        dimension: '協同邏輯',
        vistacast: '發現空間異常，發出訊號（自動化源頭）',
        vistaremote: '接收異常訊號，遠端控制接管（執行與閉環）',
      },
    ],
    synergyTitle: '典型協同場景：',
    synergyBody:
      'VistaCast 在夜間倉庫中偵測到陌生人入侵 → 觸發告警推送飛書 → 值班人員點擊喚醒 VistaRemote → 與現場喇叭雙向通話並錄製存檔。兩款產品合力構成「自動感知 + 人工介入」的完整閉環。',
  },
  cta: {
    badge: 'Early Access · M1 試點開放中',
    title: '共同定義空間智慧的未來',
    description:
      '體驗由 WebRTC 與現代全端技術棧帶來的流暢與高效。無論您是連鎖創業者還是開發者，歡迎加入打磨 M1 試點。',
    perks: ['免費參與 M1 試點', 'WebRTC 低延遲體驗', '完整原始碼存取權', '專屬技術支援'],
    primary: '預約早期試點 (免費)',
    secondary: '在 GitHub 關注專案',
    finePrint: '無需信用卡 · 資料主權自持 · 隨時可離開',
  },
  footer: {
    docs: '產品文件',
    github: 'GitHub 倉庫',
    ecosystem: 'LuminaryWorks 生態',
    privacy: '隱私與合規聲明',
    copyright: 'Powered by LuminaryWorks 啟明工坊',
    privacyNote: '堅守技術向善，產品預設關閉員工行為監控類功能。隱私保護不是功能，是我們的預設立場。',
  },
}

export default zhTW
