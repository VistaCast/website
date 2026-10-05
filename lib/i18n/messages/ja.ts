import type { Messages } from '../types'

const ja: Messages = {
  meta: {
    title: 'VistaCast — プラグイン型 AI カメラクラウド監視',
    description:
      'ソフトウェアのみの AI ビデオエッジコンピューティング。サブ秒 WebRTC プレビュー、既存 RTSP/ONVIF カメラ、コアエンジン + ホットプラグ可能なプラグイン、Vibe Coding 時代のフルスタック TypeScript/Rust 拡張性。',
    ogTitle: 'VistaCast',
    ogDescription:
      'プラグイン型 AI カメラクラウド監視、低遅延 WebRTC、TypeScript/Rust フレンドリーな拡張性',
  },
  brand: { subtitle: '视界云遥' },
  nav: {
    architecture: 'コアアーキテクチャ',
    plugins: '業界プラグイン',
    techstack: 'ローカルに残る',
    roadmap: '製品エコシステム',
    download: 'ダウンロード',
    login: 'ログイン',
    github: 'GitHub',
    docs: 'ドキュメント',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: 'シーンプラグイン · ライン光学 · WebRTC プレビュー',
    title: 'シーン知能 · ライン光学',
    titleGradient: 'カメラのための、ひとつの視覚プラットフォーム',
    tagline: '店舗、倉庫、ライン。ソフトウェアはひとつ。',
    description:
      '現場にあるカメラは RTSP / ONVIF で接続します。新しい設置位置には、用途に合わせた専門カメラモジュールを作れます。ライブ映像は WebRTC です。',
    ctaPrimary: 'シーンを相談する',
    ctaSecondary: '公式ドキュメント',
    archCanvas: 'カメラから、受け取る通知まで',
    input: 'つなぐ',
    coreEngine: '見わける',
    pluginPipeline: '届くこと',
    inputSource: 'あなたのカメラ',
    coreTitle: 'VistaCast',
    coreNote: '画面を見て、知るべき人に知らせる',
  },
  plugins: {
    kicker: 'Plugin',
    retail: { name: '店舗', status: '客流 · 時間帯' },
    warehouse: { name: '倉庫', status: '夜間 · 周界' },
    industrial: { name: '工場安全', status: '危険区域' },
    aoi: { name: 'ライン光学', status: 'はんだ · 欠品' },
    legendDeployed: '店舗、倉庫、ライン光学、安全は同じエンジンに載ります。',
    legendPlanned: 'シーンごとに提供',
    legendLatency: 'WebRTC でライブ映像',
  },
  strategy: {
    title: '入れたあと、現場はこうなります',
    subtitle:
      '店長は今日の客の流れが見えます。夜に倉庫へ人が入れば、当直がすぐ分かります。ラインでは欠品とはんだを見つけます。工場、家、敷地は、あなたの現場に合わせて置きます。',
    tabRetail: '店舗',
    tabWarehouse: '倉庫',
    tabIndustrial: '工場安全',
    coreCapabilities: 'できること',
    businessGoal: 'このシーンの価値',
    scenarios: [
      {
        tab: '店舗',
        tag: '店舗',
        scene: 'ティーショップ、QSR、チェーン店',
        capabilities: ['入口の客流', '時間帯の比較', '滞留とホットゾーン', '今使っている通知へ'],
        goal: '店長は録画を見返すだけでなく、客の流れの変化を見ます。',
      },
      {
        tab: '倉庫',
        tag: '倉庫',
        scene: '倉庫と夜間の見回り',
        capabilities: ['夜間の立入禁止', '通路と境界', 'シフトごとの時間', '当直チャンネルへ通知'],
        goal: '夜に人が入ったら、当直がすぐ分かります。',
      },
      {
        tab: 'ライン光学',
        tag: 'ライン',
        scene: 'PCB、組立、ラベル、塗布',
        capabilities: ['欠品、誤品、ずれ', 'はんだ：ブリッジ、ボイド、冷はんだ', 'バーコードとラベルの有無', '現場の PC で動く'],
        goal: '光学検査は、今ある工程のまま載せます。',
      },
      {
        tab: '工場安全',
        tag: '工場',
        scene: '危険区域と作業場',
        capabilities: ['危険区域への進入', '転倒と煙', '画面上の領域', '既存システムへの通知'],
        goal: '危険区域に人がいれば、その場で知らせます。',
      },
      {
        tab: '在宅見守り',
        tag: '見守り',
        scene: '在宅の安全と高齢者の見守り',
        capabilities: ['転倒の通知', '夜間の異常な動き', '家族へ順番に通知', '次の判断は人が行う'],
        goal: '家で何かあれば人に知らせ、その人が次を決めます。',
      },
      {
        tab: '敷地境界',
        tag: '境界',
        scene: '敷地境界とカメラ切断',
        capabilities: ['境界への進入', 'カメラのオフライン', '倉庫と同じ通知', '当直の流れへ'],
        goal: '境界の侵入もカメラ停止も、人が扱える出来事になります。',
      },
    ],
  },
  techstack: {
    title: 'Vibe Coding フレンドリーなモダンフルスタック基盤',
    subtitle: '統一スタック — レガシーなし。AI をカスタマイズの最高のコパイロットに。',
    items: [
      {
        title: 'コアストリーミングゲートウェイ',
        description:
          '高性能デマルチプレックスと WebRTC 転送、最小メモリ — エッジで超低消費電力。GC ポーズゼロ、ミリ秒遅延。',
      },
      {
        title: 'エンタープライズビジネスコア',
        description:
          'フロントエンド言語と整合。明確なモジュラーアーキテクチャ、AI プロンプト理解率 95% 以上 — Vibe Coding で数分でカスタム業界プラグインをスキャフォールド。',
      },
      {
        title: '信頼性の高いデータ基盤',
        description:
          '構造化空間イベントの標準リレーショナルモデル。移行とスケーリングが容易。TimescaleDB 時系列拡張対応。',
      },
      {
        title: 'ゼロ遅延リアルタイム知覚',
        description:
          '3〜5 秒のレガシーストリームを脱却。クロスプラットフォーム、プラグイン不要 <500ms 即時プレビュー。エンドツーエンド暗号化、設計上ハイジャック耐性。',
      },
    ],
    deployLabel: 'ワンクリックローカルデプロイ',
    tagSetup: '30 分セットアップ',
    tagSovereignty: 'データはオンプレミス',
    tagLicense: 'Polyform Noncommercial License',
  },
  features: {
    title: 'イベント駆動エンジン — 従来の DVR ではない',
    subtitle: 'カメラの可能性を再定義する 6 つのコア機能。',
    items: [
      {
        title: 'カメラのつなぎ方',
        description:
          '現場にあるカメラは RTSP / ONVIF。新しい設置位置には、用途に合わせた専門モジュールを作れます。',
      },
      {
        title: 'オープンルールエンジン',
        description:
          '任意の ROI 形状を描画し、時間 + 空間 + アクションのトリガーを柔軟に組み合わせ。',
      },
      {
        title: 'プラグイン可能 AI モデル',
        description:
          'コアとアルゴリズムを分離。YOLO、RT-DETR などをホットスワップ — ベンダーロックインなし。',
      },
      {
        title: 'Docker ワンライナーデプロイ',
        description:
          '30 分でローカルにフル AI ビデオコンピュートセンターを起動。データ主権を保証。',
      },
      {
        title: 'プライバシー by design',
        description:
          'エッジ顔ぼかし、従業員監視はデフォルトオフ。GDPR 対応のプライバシー姿勢。',
      },
      {
        title: 'オープンエコシステム出力',
        description:
          '組み込み Webhook & MQTT — Feishu、DingTalk、産業ゲートウェイを数秒で統合。',
      },
    ],
  },
  ecosystem: {
    title: '見る役割：カメラから、人が動ける出来事へ',
    subtitle:
      'VistaCast は孤立した SaaS ではありません — LuminaryWorks 空間知能エコシステムの重要なピースです。',
    youAreHere: '現在地',
    synergyTitle: '技術的シナジー',
    products: [
      { subtitle: 'ビジュアルオーケストレーション', role: 'オーケストレート' },
      { subtitle: 'IoT 取り込み', role: '取り込み' },
      { subtitle: 'BI 分析', role: '分析' },
      { subtitle: 'AI ビジョン', role: '知覚' },
      { subtitle: 'リモート介入', role: '介入' },
      { subtitle: 'バリューネットワーク', role: '価値' },
    ],
    synergies: [
      {
        desc: 'VistaCast の構造化データが DataLuminary へ流れ、空間ダッシュボードを自動生成。',
      },
      {
        desc: '高リスクアラートが SyncroBrain を起動し物理ハードウェアを作動 — ソフトウェアから世界への自動化。',
      },
      {
        desc: 'ワンクリック VistaRemote 起動で人的確認とリアルタイム制御、ループを閉じる。',
      },
    ],
    baseNote:
      '統一 TypeScript / NestJS エコシステム上に構築 — 6 製品が型、モジュール規約、デプロイ標準を共有。',
  },
  comparison: {
    title: '明確な役割を持つ兄弟製品：VistaCast vs VistaRemote',
    subtitle:
      'LuminaryWorks 傘下 — 空間知覚と実行の補完的な分業。',
    columnDimension: '次元',
    columnVistacast: 'VistaCast',
    columnVistaremote: 'VistaRemote',
    rows: [
      {
        dimension: '物理媒体',
        vistacast: '固定防犯カメラ（ONVIF / RTSP）',
        vistaremote: 'モバイル / デスクトップ / ロボット（WebRTC）',
      },
      {
        dimension: 'コア価値',
        vistacast: 'AI 知覚、構造化空間データ、自動アラート',
        vistaremote: 'リモート人的介入、双方向制御、監査録画',
      },
      {
        dimension: 'シナジーロジック',
        vistacast: '空間異常を検知、シグナル送出（自動化ソース）',
        vistaremote: 'シグナル受信、リモートテイクオーバー（実行とクロージャ）',
      },
    ],
    synergyTitle: '典型的なシナジーシナリオ：',
    synergyBody:
      'VistaCast が倉庫で夜間侵入者を検知 → Feishu にアラート → 当番スタッフが VistaRemote を起動 → 双方向スピーカー通信と録画。合わせて：自動知覚 + 人的介入。',
  },
  cta: {
    badge: 'シーンごとに提供',
    title: '空間知能の未来を一緒に形作る',
    description:
      '店舗、倉庫、ライン、在宅見守り。今あるカメラをつなげます。必要なシーンは同じエンジンで提供します。',
    perks: ['今あるカメラに対応', 'WebRTC でライブ映像', 'シーンは要望に合わせて提供', 'データは現場に残す'],
    primary: 'シーンを相談する',
    secondary: 'GitHub でスター',
    finePrint: 'クレジットカード不要 · データ主権 · いつでも退会可能',
  },
  footer: {
    docs: 'ドキュメント',
    github: 'GitHub',
    ecosystem: 'LuminaryWorks エコシステム',
    privacy: 'プライバシーとコンプライアンス',
    copyright: 'Powered by LuminaryWorks',
    privacyNote:
      '善のためのテクノロジー — 従業員行動監視はデフォルトオフ。プライバシーは機能ではなく、私たちのデフォルト姿勢です。',
  },
  download: {
    metaTitle: 'VistaCast をダウンロード',
    metaDescription:
      'VistaCast の店舗ワークステーション（Windows / macOS）と Android コンパニオン APK をダウンロードします。インストーラは常に最新リリースを指します。',
    ogAlt: 'VistaCast をダウンロード',
    title: 'VistaCast をダウンロード',
    latest: '最新 {{version}}：',
    lead: '店舗ワークステーション（Windows / macOS）と、任意の Android サイドロード APK。ボタンは常に最新のインストーラを指します。',
    hostedBefore: 'インストーラは公開リポジトリ',
    hostedAfter: 'で配布しています（ソースリポジトリは非公開です）。',
    unsigned:
      'インストーラはコード署名・公証されていません。Windows の SmartScreen では「実行」を選んでください。macOS ではアプリを右クリックして「開く」を選んでください。Android では提供元不明のアプリを許可する必要があります。',
    workstation: '店舗ワークステーション',
    workstationBody:
      'Electron アプリ：ローカルの Detect / Admin シェル。この端末または LAN から Admin / client-infer に到達できる必要があります。',
    winSetup: 'Windows インストーラ (NSIS)',
    winPortable: 'Windows ポータブル版',
    macDmg: 'macOS DMG',
    android: 'Android コンパニオン',
    androidBody:
      'サイドロード APK（Play ではありません）。このリリースに APK がまだ無い場合は、Expo Go を使うか、後続のビルドをお待ちください。',
    apk: 'APK をダウンロード',
    backHome: '← ホームに戻る',
    deviceDocs: 'デバイス接続ドキュメント',
  },
}

export default ja
