import type { Messages } from '../types'

const ko: Messages = {
  meta: {
    title: 'VistaCast — 플러그인 기반 AI 카메라 클라우드 모니터링',
    description:
      '소프트웨어 전용 AI 비디오 엣지 컴퓨팅. 서브초 WebRTC 미리보기, 레거시 RTSP/ONVIF 카메라, 코어 엔진 + 핫플러그 가능 플러그인, Vibe Coding 시대를 위한 풀스택 TypeScript/Rust 확장성.',
    ogTitle: 'VistaCast',
    ogDescription:
      '플러그인 기반 AI 카메라 클라우드 모니터링, 저지연 WebRTC, TypeScript/Rust 친화적 확장성',
  },
  brand: { subtitle: '视界云遥' },
  nav: {
    architecture: '코어 아키텍처',
    plugins: '산업 플러그인',
    techstack: '기술 스택 및 생태계',
    roadmap: '로드맵',
    login: '로그인',
    github: 'GitHub',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: 'Open Source · Plugin Architecture · WebRTC Native',
    title: 'AI Visual Autopilot',
    titleGradient: 'with WebRTC Low-Latency',
    tagline: '모든 카메라를 물리 세계의 구조화된 데이터 스트림으로',
    description:
      '소프트웨어 전용 AI 비디오 엣지 플랫폼. 하드웨어 교체 불필요 — 기존 RTSP/ONVIF 장치와 호환. WebRTC로 밀리초 수준 즉시 미리보기. 코어 엔진 + 핫플러그 가능 플러그인 아키텍처, Vibe Coding 시대를 위한 완전한 TypeScript/Rust 확장성.',
    ctaPrimary: '파일럿 예약',
    ctaSecondary: 'GitHub 문서',
    archCanvas: 'Architecture Canvas',
    input: 'INPUT',
    coreEngine: 'CORE ENGINE',
    pluginPipeline: 'PLUGIN PIPELINE',
    inputSource: 'Input Source',
  },
  plugins: {
    retail: { name: '리테일', status: '배포됨 (유동/대기열)' },
    warehouse: { name: '창고', status: '배포됨 (야간 보안)' },
    industrial: { name: '산업 안전', status: '계획 중 (연기/낙상)' },
    legendDeployed: '상용 배포',
    legendPlanned: '커뮤니티 계획',
    legendLatency: '<500ms WebRTC 지연',
  },
  strategy: {
    title: '전략적 집중: 생존과 확장을 위한 시나리오 플러그인',
    subtitle:
      '스타트업으로서 너무 많이 펼치면 실패한다는 것을 압니다. 코어와 상업 시나리오를 분리 — 먼저 고빈도, 수익을 창출하는 경량 시나리오에 집중하고, 커뮤니티 주도 플러그인으로 확장합니다.',
    tabRetail: '리테일 (코어)',
    tabWarehouse: '창고 (코어)',
    tabIndustrial: '산업 및 롱테일 (플러그인)',
    coreCapabilities: '코어 기능',
    businessGoal: '비즈니스 목표',
    scenarios: [
      {
        tag: '산업 솔루션',
        scene: '버블티 / QSR / 체인 매장',
        capabilities: [
          '유동 카운팅 및 기간 비교',
          '계산대 대기열 시간 감지',
          '피크 시간 실시간 알림',
          '매장별 ROI 보고서 자동 생성',
        ],
        goal: '고객 매장별 ROI 향상 및 팀 수익 가속',
      },
      {
        tag: '엔터프라이즈 및 공공',
        scene: '산업단지 / 무인 창고',
        capabilities: [
          '미확인 얼굴 화이트리스트 인증',
          '야간 이상 실시간 알림',
          '제한 구역 침입 감지',
          '구조화 보안 이벤트 아카이브',
        ],
        goal: '고가치 제공으로 필수 보안 요구 충족',
      },
      {
        tag: 'AI 확장성',
        scene: '공장 / 화재 위험 구역 / 농업',
        capabilities: [
          '무단 출입 감지',
          '낙상 / 미끄러짐 행동 인식',
          '연기 및 개방 화염 감지',
          '커뮤니티 서드파티 모델 통합',
        ],
        goal: '오픈 커뮤니티 및 서드파티 모델 플러그인을 통한 저비용 확장',
      },
    ],
  },
  techstack: {
    title: 'Vibe Coding 친화적 모던 풀스택 기반',
    subtitle: '통합 스택 — 레거시 없음. AI를 맞춤화의 최고의 코파일럿으로.',
    items: [
      {
        title: '코어 스트리밍 게이트웨이',
        description:
          '고성능 디멀티플렉싱 및 WebRTC 포워딩, 최소 메모리 — 엣지에서 초저전력. GC 일시정지 제로, 밀리초 지연.',
      },
      {
        title: '엔터프라이즈 비즈니스 코어',
        description:
          '프론트엔드 언어와 정렬. 명확한 모듈형 아키텍처, AI 프롬프트 이해도 95% 이상 — Vibe Coding으로 몇 분 만에 맞춤 산업 플러그인 스캐폴딩.',
      },
      {
        title: '신뢰할 수 있는 데이터 기반',
        description:
          '구조화 공간 이벤트를 위한 표준 관계형 모델. 쉬운 마이그레이션 및 스케일링. TimescaleDB 시계열 확장 지원.',
      },
      {
        title: '제로 지연 실시간 인지',
        description:
          '3–5초 레거시 스트림을 벗어나세요. 크로스 플랫폼, 플러그인 없는 <500ms 즉시 미리보기. 종단 간 암호화, 설계상 탈취 방지.',
      },
    ],
    deployLabel: '원클릭 로컬 배포',
    tagSetup: '30분 설정',
    tagSovereignty: '데이터 온프레미스 유지',
    tagLicense: 'MIT License',
  },
  features: {
    title: '이벤트 기반 엔진 — 전통적 DVR이 아님',
    subtitle: '카메라가 할 수 있는 일을 재정의하는 6가지 코어 기능.',
    items: [
      {
        title: '하드웨어 교체 제로',
        description:
          'Hikvision, Dahua 및 범용 IP 카메라 재사용. ONVIF/RTSP 장치 100% 호환.',
      },
      {
        title: '오픈 룰 엔진',
        description:
          '임의 ROI 형태를 그리고 시간 + 공간 + 액션 트리거를 유연하게 조합.',
      },
      {
        title: '플러그인 가능 AI 모델',
        description:
          '코어와 알고리즘 분리. YOLO, RT-DETR 등 핫스왑 — 벤더 락인 없음.',
      },
      {
        title: 'Docker 원라이너 배포',
        description:
          '30분 만에 로컬에서 완전한 AI 비디오 컴퓨트 센터 구동. 데이터 주권 보장.',
      },
      {
        title: 'Privacy by design',
        description:
          '엣지 얼굴 블러, 직원 모니터링 기본 비활성화. GDPR 준비 프라이버시 자세.',
      },
      {
        title: '오픈 생태계 출력',
        description:
          '내장 Webhook & MQTT — Feishu, DingTalk 또는 산업 게이트웨이를 몇 초 만에 통합.',
      },
    ],
  },
  ecosystem: {
    title: '6개 제품 가치 사슬의 "비전" 연결고리',
    subtitle:
      'VistaCast는 고립된 SaaS가 아닙니다 — LuminaryWorks 공간 지능 생태계의 핵심 조각입니다.',
    youAreHere: '현재 위치',
    synergyTitle: '기술적 시너지',
    products: [
      { subtitle: '비주얼 오케스트레이션', role: '오케스트레이트' },
      { subtitle: 'IoT 수집', role: '수집' },
      { subtitle: 'BI 분석', role: '분석' },
      { subtitle: 'AI 비전', role: '인지' },
      { subtitle: '원격 개입', role: '개입' },
      { subtitle: '가치 네트워크', role: '가치' },
    ],
    synergies: [
      {
        desc: 'VistaCast의 구조화 데이터가 DataLuminary로 흘러 공간 대시보드를 자동 생성.',
      },
      {
        desc: '고위험 알림이 SyncroBrain을 트리거하여 물리 하드웨어 작동 — 소프트웨어에서 세계로의 자동화.',
      },
      {
        desc: '원클릭 VistaRemote 깨우기로 인간 확인 및 실시간 제어, 루프 완성.',
      },
    ],
    baseNote:
      '통합 TypeScript / NestJS 생태계 기반 — 6개 제품이 타입, 모듈 규약, 배포 표준을 공유.',
  },
  comparison: {
    title: '명확한 역할의 형제 제품: VistaCast vs VistaRemote',
    subtitle:
      'LuminaryWorks 산하 — 공간 인지와 실행의 보완적 분업.',
    columnDimension: '차원',
    columnVistacast: 'VistaCast',
    columnVistaremote: 'VistaRemote',
    rows: [
      {
        dimension: '물리 매체',
        vistacast: '고정 보안 카메라 (ONVIF / RTSP)',
        vistaremote: '모바일 / 데스크톱 / 로봇 (WebRTC)',
      },
      {
        dimension: '코어 가치',
        vistacast: 'AI 인지, 구조화 공간 데이터, 자동 알림',
        vistaremote: '원격 인간 개입, 양방향 제어, 감사 녹화',
      },
      {
        dimension: '시너지 로직',
        vistacast: '공간 이상 감지, 신호 발신 (자동화 소스)',
        vistaremote: '신호 수신, 원격 테이크오버 (실행 및 종료)',
      },
    ],
    synergyTitle: '전형적인 시너지 시나리오:',
    synergyBody:
      'VistaCast가 창고에서 야간 침입자 감지 → Feishu 알림 → 당직 직원이 VistaRemote 깨움 → 양방향 스피커 통신 및 녹화. 함께: 자동 인지 + 인간 개입.',
  },
  cta: {
    badge: 'Early Access · M1 파일럿 오픈',
    title: '공간 지능의 미래를 함께 만들어 가세요',
    description:
      'WebRTC의 유동성과 모던 풀스택을 경험하세요. 체인 운영자든 개발자든 — M1 파일럿 형성에 함께하세요.',
    perks: ['M1 파일럿 무료 액세스', '저지연 WebRTC', '전체 소스 액세스', '전담 지원'],
    primary: '얼리 파일럿 예약 (무료)',
    secondary: 'GitHub에서 스타',
    finePrint: '신용카드 불필요 · 데이터 주권 · 언제든 탈퇴 가능',
  },
  footer: {
    docs: '문서',
    github: 'GitHub',
    ecosystem: 'LuminaryWorks 생태계',
    privacy: '프라이버시 및 규정 준수',
    copyright: 'Powered by LuminaryWorks',
    privacyNote:
      '선을 위한 기술 — 직원 행동 모니터링 기본 비활성화. 프라이버시는 기능이 아닌 우리의 기본 자세입니다.',
  },
}

export default ko
