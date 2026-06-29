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
    techstack: '技術スタックとエコシステム',
    roadmap: 'ロードマップ',
    login: 'ログイン',
    github: 'GitHub',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: 'Open Source · Plugin Architecture · WebRTC Native',
    title: 'AI Visual Autopilot',
    titleGradient: 'with WebRTC Low-Latency',
    tagline: 'すべてのカメラを、物理世界の構造化データストリームに',
    description:
      'ソフトウェアのみの AI ビデオエッジプラットフォーム。ハードウェア交換不要 — 既存 RTSP/ONVIF デバイスに対応。WebRTC によりミリ秒レベルの即時プレビューを実現。コアエンジン + ホットプラグ可能なプラグインアーキテクチャ、Vibe Coding 時代のフル TypeScript/Rust 拡張性。',
    ctaPrimary: 'パイロットを予約',
    ctaSecondary: 'GitHub ドキュメント',
    archCanvas: 'Architecture Canvas',
    input: 'INPUT',
    coreEngine: 'CORE ENGINE',
    pluginPipeline: 'PLUGIN PIPELINE',
    inputSource: 'Input Source',
  },
  plugins: {
    retail: { name: '小売', status: '導入済み（来店客/行列）' },
    warehouse: { name: '倉庫', status: '導入済み（夜間セキュリティ）' },
    industrial: { name: '産業安全', status: '計画中（煙/転倒）' },
    legendDeployed: '商用導入済み',
    legendPlanned: 'コミュニティ計画中',
    legendLatency: '<500ms WebRTC 遅延',
  },
  strategy: {
    title: '戦略的焦点：生存とスケールのためのシーンプラグイン',
    subtitle:
      'スタートアップとして、手を広げすぎると失敗することを知っています。コアと商用シナリオを分離 — まず高頻度で収益を生む軽量シナリオを徹底し、コミュニティ主導のプラグインで拡大します。',
    tabRetail: '小売（コア）',
    tabWarehouse: '倉庫（コア）',
    tabIndustrial: '産業・ロングテール（プラグイン）',
    coreCapabilities: 'コア機能',
    businessGoal: 'ビジネス目標',
    scenarios: [
      {
        tag: '業界ソリューション',
        scene: 'タピオカ / QSR / チェーン店',
        capabilities: [
          '来店客カウントと期間比較',
          'レジ行列の待ち時間検知',
          'ピーク時間帯のリアルタイムアラート',
          '店舗別 ROI レポート自動生成',
        ],
        goal: 'クライアントの店舗別 ROI を向上し、チームの収益を加速',
      },
      {
        tag: 'エンタープライズ・行政',
        scene: '工業団地 / 無人倉庫',
        capabilities: [
          '不明者顔ホワイトリスト認証',
          '夜間異常のリアルタイムアラート',
          '立入禁止区域への侵入検知',
          '構造化セキュリティイベントアーカイブ',
        ],
        goal: '高価値な提供で必須のセキュリティニーズを満たす',
      },
      {
        tag: 'AI 拡張性',
        scene: '工場 / 火災リスク区域 / 農業',
        capabilities: [
          '不正侵入検知',
          '転倒・滑り行動認識',
          '煙・明火感知',
          'コミュニティ第三者モデル統合',
        ],
        goal: 'オープンコミュニティと第三者モデルプラグインによる低コスト拡張',
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
    tagLicense: 'MIT License',
  },
  features: {
    title: 'イベント駆動エンジン — 従来の DVR ではない',
    subtitle: 'カメラの可能性を再定義する 6 つのコア機能。',
    items: [
      {
        title: 'ハードウェア交換ゼロ',
        description:
          'Hikvision、Dahua、汎用 IP カメラを再利用。ONVIF/RTSP デバイス 100% 互換。',
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
    title: '6 製品バリューチェーンにおける「視覚」のリンク',
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
    badge: 'Early Access · M1 パイロット受付中',
    title: '空間知能の未来を一緒に形作る',
    description:
      'WebRTC の流動性とモダンフルスタックを体験。チェーンオペレーターでも開発者でも — M1 パイロットの形成に参加してください。',
    perks: ['M1 パイロット無料アクセス', '低遅延 WebRTC', 'フルソースアクセス', '専任サポート'],
    primary: '早期パイロットを予約（無料）',
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
}

export default ja
