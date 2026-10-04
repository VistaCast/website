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
    roadmap: '제품 생태계',
    download: '다운로드',
    login: '로그인',
    github: 'GitHub',
    docs: '문서',
  },
  header: { drawerTitle: 'VistaCast' },
  hero: {
    badge: '장면 플러그인 · 라인 광학 · WebRTC 미리보기',
    title: '장면 지능 · 라인 광학',
    titleGradient: '카메라를 위한 하나의 비전 플랫폼',
    tagline: '매장, 창고, 라인. 소프트웨어는 하나입니다.',
    description:
      '현장에 있는 카메라는 RTSP / ONVIF로 연결합니다. 새 위치에는 전문 카메라 모듈을 장면에 맞게 맞출 수 있습니다. 실시간 화면은 WebRTC입니다.',
    ctaPrimary: '장면을 상담하기',
    ctaSecondary: '공식 문서',
    archCanvas: '카메라에서 받는 알림까지',
    input: '연결',
    coreEngine: '알아보다',
    pluginPipeline: '받게 되는 것',
    inputSource: '당신의 카메라',
    coreTitle: 'VistaCast',
    coreNote: '화면을 읽고, 알아야 할 사람에게 알립니다',
  },
  plugins: {
    kicker: 'Plugin',
    retail: { name: '리테일', status: '유동 · 시간대' },
    warehouse: { name: '창고', status: '야간 · 경계' },
    industrial: { name: '산업 안전', status: '위험 구역' },
    aoi: { name: '라인 광학', status: '납땜 · 결품' },
    legendDeployed: '리테일, 창고, 라인 광학, 안전이 같은 엔진에 있습니다.',
    legendPlanned: '장면별로 제공',
    legendLatency: 'WebRTC 실시간 미리보기',
  },
  strategy: {
    title: '켜고 나면 현장은 이렇게 됩니다',
    subtitle:
      '점장은 오늘 손님 흐름을 봅니다. 밤에 창고에 사람이 들어오면 당직이 바로 압니다. 라인에서는 결품과 납땜 문제를 찾습니다. 공장, 집, 부지는 당신 현장에 맞게 둡니다.',
    tabRetail: '리테일',
    tabWarehouse: '창고',
    tabIndustrial: '산업 안전',
    coreCapabilities: '하는 일',
    businessGoal: '이 장면의 가치',
    scenarios: [
      {
        tab: '리테일',
        tag: '매장',
        scene: '음료, QSR, 체인 매장',
        capabilities: ['입구 유동', '시간대 비교', '체류와 핫존', '이미 쓰는 알림으로'],
        goal: '점장은 녹화만 되돌리지 않고, 손님 흐름의 변화를 봅니다.',
      },
      {
        tab: '창고',
        tag: '창고',
        scene: '창고와 야간 당직',
        capabilities: ['야간 제한 구역', '통로와 경계', '교대 시간', '당직 채널로 알림'],
        goal: '밤에 사람이 들어오면 당직이 바로 압니다.',
      },
      {
        tab: '라인 광학',
        tag: '라인',
        scene: 'PCB, 조립, 라벨, 도포',
        capabilities: ['결품, 오장착, 틀어짐', '납땜: 브리지, 보이드, 냉땜', '바코드와 라벨 유무', '현장 PC에서 동작'],
        goal: '광학 검사는 이미 있는 공정 위에 올립니다.',
      },
      {
        tab: '산업 안전',
        tag: '공장',
        scene: '위험 구역과 작업장',
        capabilities: ['위험 구역 진입', '낙상과 연기', '화면 위 영역', '기존 시스템으로 알림'],
        goal: '위험 구역에 사람이 있으면 그때 알립니다.',
      },
      {
        tab: '가정 돌봄',
        tag: '돌봄',
        scene: '가정 안전과 어르신 돌봄',
        capabilities: ['낙상 알림', '야간 이상 활동', '가족에게 순서대로 알림', '다음 판단은 사람이'],
        goal: '집에서 일이 생기면 사람에게 알리고, 그 사람이 다음을 정합니다.',
      },
      {
        tab: '경계',
        tag: '경계',
        scene: '부지 경계와 카메라 오프라인',
        capabilities: ['경계 진입', '카메라 오프라인', '창고와 같은 알림', '당직 흐름으로'],
        goal: '경계를 넘은 일과 꺼진 카메라가 사람이 처리할 사건이 됩니다.',
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
    tagLicense: 'Polyform Noncommercial License',
  },
  features: {
    title: '이벤트 기반 엔진 — 전통적 DVR이 아님',
    subtitle: '카메라가 할 수 있는 일을 재정의하는 6가지 코어 기능.',
    items: [
      {
        title: '카메라 연결',
        description:
          '현장에 있는 카메라는 RTSP / ONVIF로 연결합니다. 새 위치에는 장면에 맞는 전문 모듈을 맞출 수 있습니다.',
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
    title: '보는 역할: 카메라에서 사람이 처리할 사건으로',
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
    badge: '장면별로 제공',
    title: '공간 지능의 미래를 함께 만들어 가세요',
    description:
      '매장, 창고, 라인, 가정 돌봄. 이미 있는 카메라를 연결할 수 있습니다. 필요한 장면은 같은 엔진에서 제공합니다.',
    perks: ['기존 카메라와 함께', 'WebRTC 실시간 미리보기', '장면은 필요에 따라 제공', '데이터는 현장에'],
    primary: '장면을 상담하기',
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
