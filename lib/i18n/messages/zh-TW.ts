import type { Messages } from '../types'

const zhTW: Messages = {
  meta: {
    title: 'VistaCast · 視界雲遙 — 外掛化 AI 攝影機雲監控平台',
    description:
      '攝影機上的產業視覺平台。場景外掛覆蓋門市、倉儲與看護，產線光學覆蓋缺件與焊點。相容 RTSP / ONVIF，WebRTC 即時預覽。',
    ogTitle: 'VistaCast · 視界雲遙',
    ogDescription: '外掛化 AI 攝影機雲監控平台，WebRTC 低延遲，全端 TypeScript/Rust 二開友善',
  },
  brand: { subtitle: '視界雲遙' },
  nav: {
    architecture: '能做什麼',
    plugins: '使用場景',
    techstack: '留在本地',
    roadmap: '產品生態',
    download: '下載',
    login: '登入',
    github: 'GitHub',
    docs: '官方文件',
  },
  header: { drawerTitle: 'VistaCast · 視界雲遙' },
  hero: {
    badge: '場景外掛 · 產線光學 · WebRTC 預覽',
    title: '場景智能 · 產線光學',
    titleGradient: '同一套攝影機視覺平台',
    tagline: '門市、倉儲、產線，同一套軟體。',
    description:
      '現場已有攝影機，按 RTSP / ONVIF 接入。新機位可以訂製專業攝影機模組。即時畫面走 WebRTC。',
    ctaPrimary: '預約方案溝通',
    ctaSecondary: '官方文件',
    archCanvas: '從攝影機到你收到的通知',
    input: '接入',
    coreEngine: '看懂',
    pluginPipeline: '你會收到',
    inputSource: '你的攝影機',
    coreTitle: '視界雲遙',
    coreNote: '看懂畫面，通知該知道的人',
  },
  plugins: {
    kicker: '插件',
    retail: { name: '商業零售', status: '客流 · 時段' },
    warehouse: { name: '倉儲物流', status: '夜間 · 周界' },
    industrial: { name: '工業安全', status: '危險區 · 告警' },
    aoi: { name: '產線光學', status: '焊點 · 缺件' },
    legendDeployed: '零售、倉儲、產線光學與安全看護，裝在同一套引擎上。',
    legendPlanned: '按場景交付',
    legendLatency: 'WebRTC 即時預覽',
  },
  strategy: {
    title: '裝上之後，現場會變成這樣',
    subtitle:
      '店長看見今天的客流。夜裡有人進倉庫，值班的人馬上知道。產線工位查出缺件和焊點。工廠、家裡、園區，按你的現場配上。',
    tabRetail: '商業零售',
    tabWarehouse: '倉儲物流',
    tabIndustrial: '工業安全',
    coreCapabilities: '能做什麼',
    businessGoal: '場景價值',
    scenarios: [
      {
        tab: '商業零售',
        lead: '店長不用下班再把錄影倒回去數人頭。打開就能看見今天進店多少人、哪個時段更忙、門口和店裡哪裡人更多。忙和閒分開看，變化發到你現在用的群裡，排班和備貨跟著當天的客流走。',
        tag: '門市',
        scene: '手搖飲 / 快餐 / 連鎖門市',
        capabilities: ['出入口客流', '時段對比', '熱區與停留', '結果推送到現有通知'],
        goal: '讓店長看到客流怎麼變，而不是只回看錄影。',
      },
      {
        tab: '倉儲物流',
        lead: '夜裡不用安排人一直盯著螢幕。有人走進倉庫、通道或禁區，值班的人馬上在群裡收到通知，並知道是哪一路攝影機。看管時間按班次來設，白天正常進出不打擾，夜裡該響的時候才響。',
        tag: '倉儲',
        scene: '倉庫 / 夜間值守',
        capabilities: ['夜間禁區進入', '通道與周界告警', '按班次設定時段', '告警推送到值班群'],
        goal: '夜裡有人進入，值班的人馬上知道。',
      },
      {
        tab: '產線光學',
        lead: '缺件、錯件、偏移和焊點問題，在工位上當時就能看出來，不用等整批做完再返工。連錫、虛焊、冷焊，以及條碼和標籤在不在，都在這一套軟體裡。檢測放在你現在的產線上，不必為光學再單買一套系統。',
        tag: '產線',
        scene: 'PCB / 組裝 / 標籤 / 膠路',
        capabilities: ['缺件、錯件、偏移', '焊點：連錫、虛焊、冷焊', '條碼與標籤在位', '普通工位電腦即可運行'],
        goal: '光學檢測放在現有工位上，不必另買一套系統。',
      },
      {
        tab: '工業安全',
        lead: '人走進劃好的危險區，或者畫面裡出現跌倒、煙霧，馬上提醒到該知道的人。區域可以自己圈，通知進你現有的系統。不用等班後把錄影翻一遍，才知道這一班裡發生過什麼。',
        tag: '工廠',
        scene: '危險區 / 車間',
        capabilities: ['人員進入危險區', '跌倒與煙霧告警', '畫面上劃定區域', '告警接到現有系統'],
        goal: '危險區有人，立刻提醒，而不是事後翻錄影。',
      },
      {
        tab: '居家看護',
        lead: '家裡有人跌倒，或者夜裡出現不該有的活動，按你定好的順序通知到家人。先告訴誰、過一會兒再告訴誰，由你來排。下一步讓人決定，軟體不替你呼叫急救。',
        tag: '看護',
        scene: '居家安全 / 長者看護',
        capabilities: ['跌倒提醒', '夜間異常活動', '按家人順序通知', '異常交給人處理，不替代急救'],
        goal: '家裡有異常時通知到人，由人決定下一步。',
      },
      {
        tab: '園區周界',
        lead: '有人進入園區周界，或者某一路攝影機掉線，值班的人當時就知道是哪裡。通知和倉庫用的是同一套，直接交到正在值班的人手裡，不用另養一套只看周界的系統。',
        tag: '周界',
        scene: '園區周界 / 攝影機離線',
        capabilities: ['周界進入提醒', '攝影機離線提醒', '與倉儲共用告警', '接到值班流程'],
        goal: '周界和設備掉線，都變成可以處理的事件。',
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
    tagLicense: 'Polyform Noncommercial License',
  },
  features: {
    title: '是事件驅動引擎，而非傳統錄影機',
    subtitle: '六大核心產品力，重新定義攝影機的價值邊界。',
    items: [
      {
        title: '攝影機怎麼接',
        description: '現場槍機按 RTSP / ONVIF 接入。需要新機位時，按場景訂製專業攝影機模組。',
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
    title: '看見這一環：從攝影機到可執行的事件',
    subtitle: 'VistaCast 負責把畫面變成告警和資料，再交給分析、物聯和遠端處理。這是生態裡的視覺環節。',
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
    badge: '按場景交付',
    title: '告訴我你的攝影機要看什麼',
    description:
      '門市、倉庫、產線或看護。現有攝影機可以接入；需要的場景，按同一套引擎交付。',
    perks: ['相容現有攝影機', 'WebRTC 即時預覽', '場景按需交付', '資料留在現場'],
    primary: '預約方案溝通',
    secondary: '在 GitHub 關注專案',
    finePrint: '無需信用卡 · 資料主權自持 · 隨時可離開',
  },
  footer: {
    docs: '官方文件',
    github: 'GitHub 倉庫',
    ecosystem: 'LuminaryWorks 生態',
    privacy: '隱私與合規聲明',
    copyright: 'Powered by LuminaryWorks 啟明工坊',
    privacyNote: '堅守技術向善，產品預設關閉員工行為監控類功能。隱私保護不是功能，是我們的預設立場。',
  },
  download: {
    metaTitle: '下載 VistaCast 用戶端',
    metaDescription:
      '下載 VistaCast 門市工作站（Windows / macOS）與 Android 伴侶 APK。安裝包一律指向最新 Release。',
    ogAlt: '下載 VistaCast',
    title: '下載 VistaCast',
    latest: '目前最新 {{version}}：',
    lead: '門市工作站 Windows / macOS，以及 Android 側載 APK（可選）。按鈕一律指向最新安裝包。',
    hostedBefore: '安裝包託管在公開倉庫',
    hostedAfter: '（原始碼倉保持私有）。',
    unsigned:
      '安裝包未程式碼簽章 / 未公證。Windows SmartScreen 請選「仍要執行」；macOS 對 App 按右鍵 →「打開」。Android 需允許未知來源。',
    workstation: '門市工作站',
    workstationBody: 'Electron 端：本機 Detect / Admin 殼。需本機或區域網路可連到 Admin / client-infer。',
    winSetup: 'Windows 安裝包 (NSIS)',
    winPortable: 'Windows 便攜版',
    macDmg: 'macOS DMG',
    android: 'Android 伴侶',
    androidBody: '側載 APK（非 Play）。若 Release 尚無 APK，請用 Expo Go 或等待後續建置。',
    apk: '下載 APK',
    backHome: '← 返回首頁',
    deviceDocs: '裝置接入文件',
  },
}

export default zhTW
