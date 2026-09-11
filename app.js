/**
 * 소방기술사 합격 스케줄러 (FireMaster Coach)
 * 디자인 시스템: Stitch "Precision Study Narrative" (Toss-Style Minimal)
 * 메인 애플리케이션 스크립트 (app.js)
 */

// ============================================================================
// 1. 자극 및 동기부여 코칭 데이터베이스
// ============================================================================

const COACH_QUOTES = {
  fact: [
    "기술사 합격률 1~3%. 오늘 미룬 20페이지는 내일의 불합격 통지서입니다. 지금 당장 책을 펴세요.",
    "소방기술사 2차 면접관 앞에서 어버버할 겁니까? 지금 외우지 않으면 1년 또 학원비 헌납합니다.",
    "남들은 지금 카페, 독서실에서 100점짜리 서브노트 외우고 있습니다. 핸드폰 내려놓으세요.",
    "이해도 안 되면서 눈으로만 넘기면 3일 뒤 백지입니다. 손으로 키워드를 직접 쓰세요!",
    "‘주말에 몰아서 해야지’라는 거짓말, 스스로 몇 년째 속고 있습니까? 오늘 분량은 오늘 끝냅니다.",
    "피곤하다는 핑계는 불합격자들의 공통된 변명입니다. 기술사는 피곤을 뚫고 합격한 자들의 자격입니다.",
    "화재안전성능기준(NFPC) 조항 하나 덜 외운 게 시험장에서 3점 깎여 59점 탈락을 만듭니다.",
    "오늘 1시간 스마트폰 쇼츠 볼 시간에 화재플룸 계산식 3번 유도할 수 있습니다.",
    "기출문제를 눈으로 풀지 마세요. 1교시 10분, 2~4교시 25분 스톱워치 켜고 쓰세요.",
    "‘다음에 또 나오겠어?’ 하고 제낀 그 문제가 이번 시험 1교시 1번 문제로 나옵니다.",
    "기술사는 머리가 좋은 사람이 붙는 게 아닙니다. 엉덩이가 무겁고 끝까지 버틴 사람이 붙습니다.",
    "오늘 외운 감광계수 공식, 내일 안 보면 80% 사라집니다. 복습 큐 체크했습니까?",
    "핑계는 끝이 없습니다. 야근이든 회식이든 하루 10페이지만큼은 목숨 걸고 보세요.",
    "자신을 속이지 마세요. 책상에 앉아 딴생각한 3시간은 공부한 게 아닙니다.",
    "소방기술사 명함을 들고 현장에 서 있을 당신의 모습을 상상하세요. 지금 책장을 넘기세요!"
  ],
  mentor: [
    "소방기술사는 단순 암기가 아닌 '구조화된 인출 능력'의 싸움입니다. 목차와 도해 중심으로 머릿속에 집을 지으세요.",
    "1회독 완독의 목적은 100% 이해가 아니라 전체 지도를 그리는 것입니다. 모르는 부분에 멈추지 말고 60일 완주하세요.",
    "에빙하우스 주기에 맞춰 훑어보기만 해도 망각률이 80%에서 20%로 급감합니다. 누적 복습을 절대 건너뛰지 마세요.",
    "소방유체역학, 전기, 위험물, 연소이론의 기본 원리를 꽉 잡아야 응용 서술형(2~4교시)에서 고득점이 나옵니다.",
    "답안지 1페이지에 다이어그램 1개, 핵심 공식 1개, 법적 기준 1개를 배치하는 훈련을 지금부터 하세요.",
    "서브노트는 처음부터 완벽할 수 없습니다. 1회독 때는 키워드만 잡고 회독을 거듭하며 살을 붙이세요.",
    "소방펌프 상사법칙, 유량-양정 곡선, NPSH 유도는 시험장에 눈감고도 그릴 수 있어야 합니다.",
    "화재안전기술기준(NFTC)과 성능기준(NFPC)의 개정 배경과 기술적 타당성을 이해하면 암기가 쉬워집니다.",
    "단답형(1교시)은 정의 3줄 + 원리 도해 + 법적 기준 + 결론 순으로 1페이지 칼같이 끝내는 연습이 생명입니다.",
    "계산 문제는 계산기 누르는 순서와 단위 환산(MPa, kPa, m, kg/s)에서 실수가 갈립니다.",
    "실내화재 Flashover와 Backdraft의 비교표는 기술사 답안의 백미입니다. 차이점을 명확히 대비하세요.",
    "시험 1주일 전에는 새로운 내용을 보지 말고, 에빙하우스 복습 큐의 누적 서브노트만 3회독 하세요.",
    "제연설비 부속실 가압과 틈새면적 계산은 기계분야의 꽃입니다. 수치를 직접 계산해보는 습관을 들이세요.",
    "수험 기간 슬럼프는 성장의 신호입니다. 뇌가 방대한 지식을 정렬하고 있는 과정이니 페이스를 유지하세요.",
    "매일 20페이지의 꾸준함이 60일 뒤 1,400페이지의 기적을 만듭니다."
  ],
  warm: [
    "퇴근 후 녹초가 된 몸으로 책상에 앉은 당신은 이미 대한민국 상위 1%의 열정입니다.",
    "매일 20페이지의 작은 벽돌을 쌓다 보면 어느새 거대한 기술사 합격의 성이 완성됩니다.",
    "오늘 진도가 좀 덜 나갔더라도 자책하지 마세요. 포기하지 않고 1페이지라도 본 것이 승리입니다.",
    "망각은 뇌의 지극히 정상적인 작용입니다. 자책 대신 에빙하우스 복습 큐를 한번 더 열어보세요.",
    "당신의 노력이 소방기술사 합격증이라는 결실로 돌아올 날이 머지않았습니다. 힘내세요!",
    "가족과 미래를 위해 밤낮으로 펜을 쥐고 계신 당신의 뒷모습은 그 자체로 존경스럽습니다.",
    "오늘 하루도 고생 많으셨습니다. 따뜻한 차 한 잔 마시고 딱 30분만 더 집중해 볼까요?",
    "지치고 불안할 땐 심호흡을 깊게 하세요. 당신은 지금 올바른 궤도로 착실히 전진하고 있습니다.",
    "작은 걸음이라도 멈추지 않는다면 결국 합격의 결승선에 도착합니다.",
    "기술사 공부는 마라톤입니다. 페이스를 잃지 않고 매일 규칙적으로 달리는 당신이 진정한 챔피언입니다.",
    "책장을 넘길 때마다 합격의 가능성은 1%씩 더 높아지고 있습니다.",
    "오늘 당신이 흘린 땀방울은 미래 최고의 소방기술사로서 당신을 빛나게 할 것입니다.",
    "남들과 비교하지 마세요. 어제의 나보다 오늘 1페이지 더 읽은 내가 가장 훌륭합니다.",
    "피곤할 땐 가볍게 스트레칭하고 다시 책을 펴세요. 당신의 꿈을 응원합니다!",
    "소방기술사는 결국 완주하는 자의 것입니다. 당신은 반드시 합격합니다."
  ]
};

let manualQuoteOffset = 0;

// 날짜(YYYY-MM-DD) 기반 시드로 매일 다른 인덱스를 결정하는 알고리즘
function getDailyQuoteIndex(dateStr, length, offset = 0) {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash * 31 + dateStr.charCodeAt(i)) % 10007;
  }
  return (hash + offset) % length;
}

const STORAGE_KEYS = {
  SETTINGS: "firemaster_settings_stitch_v1",
  LOGS: "firemaster_logs_stitch_v1",
  REVIEWS: "firemaster_reviews_stitch_v1"
};

// ============================================================================
// 2. 마스터 소방기술사 28개 챕터 전체 메타데이터 (노트북LM 동기화)
// ============================================================================
const MASTER_CHAPTERS = [
  // VOLUME 1 (제1권 : 총 1,048p)
  { vol: 1, ch: 1, name: "CH 01. 소방화학", startPage: 2, endPage: 67, pages: 66, part: "PART 01. 화재역학", keywords: "이상기체상태방정식, 르샤틀리에, UFL/LFL/MOC/연소도표, 양론식, 발열량" },
  { vol: 1, ch: 2, name: "CH 02. 연소공학", startPage: 68, endPage: 155, pages: 88, part: "PART 01. 화재역학", keywords: "연소3요소, MIE, 확산화염, HRR, 화재플룸(Fire Plume), Alpert식, Pool Fire, 훈소" },
  { vol: 1, ch: 3, name: "CH 03. 열전달 및 방화공학", startPage: 156, endPage: 189, pages: 34, part: "PART 01. 화재역학", keywords: "전도·대류·복사, 형태계수, 무차원수(Nu, Pr), 엔탈피/엔트로피, LOI, MOC" },
  { vol: 1, ch: 4, name: "CH 04. 방폭공학", startPage: 190, endPage: 271, pages: 82, part: "PART 01. 화재역학", keywords: "VCE, BLEVE, Fireball, 반응폭주, 폭발재해 6종, Purging 퍼지 4종, 방폭구조, 화염방지기" },
  { vol: 1, ch: 5, name: "CH 05. 유체역학", startPage: 272, endPage: 355, pages: 84, part: "PART 02. 소방기계기초", keywords: "Reynolds 수, 베르누이 방정식, 마찰손실(Darcy, Hazen-Williams), 무디선도, K-factor" },
  { vol: 1, ch: 6, name: "CH 06. 배관재료", startPage: 356, endPage: 409, pages: 54, part: "PART 02. 소방기계기초", keywords: "Schedule No, 지중매설배관, 주요 밸브류(OS&Y), 부식/방식(Pourbaix), 동파방지, CPVC" },
  { vol: 1, ch: 7, name: "CH 07. 배관설계", startPage: 410, endPage: 463, pages: 54, part: "PART 02. 소방기계기초", keywords: "트리/루프/그리드, 규약배관, NFPA 13 수리계산 절차, 층분할 가압송수, Hardy-Cross" },
  { vol: 1, ch: 8, name: "CH 08. 소방펌프", startPage: 464, endPage: 553, pages: 90, part: "PART 02. 소방기계기초", keywords: "펌프 3대 성능곡선, 상사법칙, 비속도, 압력세팅, NPSH/공동현상, 수격작용, 서징" },
  { vol: 1, ch: 9, name: "CH 09. 수계일반", startPage: 554, endPage: 649, pages: 96, part: "PART 03. 수계소화설비", keywords: "소화기구, 옥내외소화전, 연결송수관, 수막/드렌처, 방수총, 소방시설 내진설계기준" },
  { vol: 1, ch: 10, name: "CH 10. 스프링클러설비", startPage: 650, endPage: 771, pages: 122, part: "PART 03. 수계소화설비", keywords: "유수검지장치 4종, 헤드종류(CMSA, ESFR), RTI, Skipping, Cold-Soldering" },
  { vol: 1, ch: 11, name: "CH 11. 물분무 및 미분무", startPage: 772, endPage: 819, pages: 48, part: "PART 03. 수계소화설비", keywords: "변압기 물분무, Water Mist 메커니즘, NFPA 750 기준, Clogging 클로깅 방지" },
  { vol: 1, ch: 12, name: "CH 12. 포 소화설비", startPage: 820, endPage: 883, pages: 64, part: "PART 03. 수계소화설비", keywords: "AFFF, 프로포셔너 5종 혼합장치, CAFS 압축공기포, 위험물 고정포방출구(Type I~IV)" },
  { vol: 1, ch: 13, name: "CH 13. 가스계 소화설비", startPage: 884, endPage: 1023, pages: 140, part: "PART 04. 가스계소화설비", keywords: "CO2, 할론, Clean Agent 약제 특성 및 상태도, 약제량 산출식, 설계농도유지, 도어팬" },
  { vol: 1, ch: 14, name: "CH 14. 분말 및 고체에어로졸", startPage: 1024, endPage: 1048, pages: 25, part: "PART 04. 가스계소화설비", keywords: "분말 1~4종 열분해식, 제3종 방진작용, 고체에어로졸 자동소화장치, 금속화재" },

  // VOLUME 2 (제2권 : 총 1,140p)
  { vol: 2, ch: 15, name: "CH 15. 연기의 특성", startPage: 2, endPage: 31, pages: 30, part: "PART 05. 연기 및 제연설비", keywords: "연기 수율(Yield), 하버 법칙, FED, 감광계수/가시거리, 연돌효과, 피스톤효과, 단층화" },
  { vol: 2, ch: 16, name: "CH 16. 제연설비", startPage: 32, endPage: 137, pages: 106, part: "PART 05. 연기 및 제연설비", keywords: "거실제연, 급기가압제연, Hinkley 공식, 플러그홀링, TAB, 커미셔닝, Hot Smoke Test" },
  { vol: 2, ch: 17, name: "CH 17. 화재경보설비", startPage: 138, endPage: 289, pages: 152, part: "PART 06. 소방전기설비", keywords: "P형/R형 수신기, 다중통신, 경로생존능력(Pathway Survivability), 감지기 4종, 비화재보" },
  { vol: 2, ch: 18, name: "CH 18. 소방전기설비", startPage: 290, endPage: 349, pages: 60, part: "PART 06. 소방전기설비", keywords: "가스누설경보, 비상방송 단락보호 기능, 자동화재속보, 유도등, 무선통신보조설비" },
  { vol: 2, ch: 19, name: "CH 19. 비상전원·전기화재", startPage: 350, endPage: 469, pages: 120, part: "PART 06. 소방전기설비", keywords: "3상 Y-Δ, 비상발전기(PG/RG법), 축전지, 전기화재(단락, 트래킹, 흑연화, 은 이동, 아크)" },
  { vol: 2, ch: 20, name: "CH 20. 위험물", startPage: 470, endPage: 575, pages: 106, part: "PART 07. 위험물", keywords: "1~6류 위험물 품명/지정수량/위험등급, 위험물제조소등 기준, 방유제, 수소/LPG 특례" },
  { vol: 2, ch: 21, name: "CH 21. 실내화재의 성상", startPage: 576, endPage: 635, pages: 60, part: "PART 08. 건축방재", keywords: "HRR, 실내화재 t^2 화재, 플래시오버, 백드래프트, 화재하중, 상층연소확대(Leapfrog)" },
  { vol: 2, ch: 22, name: "CH 22. 건축방화", startPage: 636, endPage: 747, pages: 112, part: "PART 08. 건축방재", keywords: "방화구획 완화조건, 방화벽/문/셔터/댐퍼, 내화채움구조(FIRESTOP), 마감재료 난연시험" },
  { vol: 2, ch: 23, name: "CH 23. 건축피난", startPage: 748, endPage: 819, pages: 72, part: "PART 08. 건축방재", keywords: "피난계획, Fail Safe, 성능위주 피난설계(ASET vs RSET), 피난안전구역, 직통계단, 피난승강기" },
  { vol: 2, ch: 24, name: "CH 24. 방재대책", startPage: 820, endPage: 935, pages: 116, part: "PART 08. 건축방재", keywords: "초고층/필로티/지하공간/도로터널 방재, 물류창고 랙크식 화재, ESS 열폭주 방재" },
  { vol: 2, ch: 25, name: "CH 25. 성능위주설계", startPage: 936, endPage: 957, pages: 22, part: "PART 09. PBD 및 소방실무", keywords: "성능위주설계(PBD) 절차, NFPA 101 설계화재 시나리오, CFAST/FDS 화재모델링" },
  { vol: 2, ch: 26, name: "CH 26. 위험성평가·조사", startPage: 958, endPage: 1015, pages: 58, part: "PART 09. PBD 및 소방실무", keywords: "HAZOP, FTA, ETA, Risk Matrix, PSM 공정안전보고서, 화재원인 판정 및 감식패턴" },
  { vol: 2, ch: 27, name: "CH 27. 소방법령", startPage: 1016, endPage: 1113, pages: 98, part: "PART 09. PBD 및 소방실무", keywords: "소방기본법, 화재예방법, 소방시설법, 소방공사업법 핵심 및 최신 제·개정 사항" },
  { vol: 2, ch: 28, name: "CH 28. 소방실무 및 기타", startPage: 1114, endPage: 1140, pages: 27, part: "PART 09. PBD 및 소방실무", keywords: "공사감리/설계 업무절차, 설계도서 해석 우선순위, PFD/P&ID, VE 가치공학 절차" }
];

const BOOK_PRESETS = {
  vol1: {
    title: "NEW 마스터 소방기술사 제1권 (화재역학·기계)",
    totalPages: 1048,
    targetDays: 60
  },
  vol2: {
    title: "NEW 마스터 소방기술사 제2권 (제연·전기·방재)",
    totalPages: 1140,
    targetDays: 60
  },
  full: {
    title: "NEW 마스터 소방기술사 (1·2권 전권 완독)",
    totalPages: 2188,
    targetDays: 60
  }
};

// ============================================================================
// 3. 헬퍼 함수 (날짜, 포맷)
// ============================================================================

function formatDate(d) {
  const date = new Date(d);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(d, days) {
  const date = new Date(d);
  date.setDate(date.getDate() + days);
  return date;
}

function daysDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  return Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
}

function getDefaultSettings() {
  const today = new Date();
  const startDate = formatDate(today);
  const examDate = formatDate(addDays(today, 60));

  return {
    bookTitle: BOOK_PRESETS.full.title,
    totalPages: BOOK_PRESETS.full.totalPages,
    targetDays: BOOK_PRESETS.full.targetDays,
    startDate: startDate,
    examDate: examDate,
    coachMode: "fact",
    theme: "light",
    viewMode: "desktop"
  };
}

function getInitialSampleLogs(startDate) {
  const todayStr = formatDate(new Date());
  const d1 = formatDate(addDays(new Date(), -1));
  const d2 = formatDate(addDays(new Date(), -2));
  const d3 = formatDate(addDays(new Date(), -3));

  return [
    {
      id: "log_today_pump_541_550",
      date: todayStr,
      startPage: 541,
      endPage: 550,
      pageCount: 10,
      comprehension: "mid",
      memo: "[CH 08. 소방펌프] NPSHa vs NPSHr 유효흡입양정 판정식, 캐비테이션(공동현상) 발생원인·방지대책, 수격작용(Joukowsky) 완화장치, 서징(Surging) 맥동조건, 성능시험배관 세팅",
      createdAt: new Date().toISOString()
    },
    {
      id: "log_pump_yesterday",
      date: d1,
      startPage: 521,
      endPage: 540,
      pageCount: 20,
      comprehension: "high",
      memo: "[CH 08. 소방펌프] 펌프 3대 성능곡선(H-Q, P-Q, η-Q), 상사법칙(유량·양정·동력비), 비속도(Ns), 압력챔버 기밀세팅(기동·정지압력)",
      createdAt: new Date(d1).toISOString()
    },
    {
      id: "log_pipe_prev",
      date: d2,
      startPage: 495,
      endPage: 520,
      pageCount: 26,
      comprehension: "mid",
      memo: "[CH 07~08. 배관·펌프기초] NFPA 13 수리계산 절차, 가압송수장치 층분할, 펌프 흡입측 편심레듀샤 및 OS&Y 개폐표시형 밸브",
      createdAt: new Date(d2).toISOString()
    },
    {
      id: "log_pump_early",
      date: d3,
      startPage: 475,
      endPage: 494,
      pageCount: 20,
      comprehension: "high",
      memo: "[CH 08. 소방펌프] 원심펌프 작동원리, 터빈펌프 vs 볼류트펌프 안내깃(Guide Vane) 유무 차이, 체절운전 원리",
      createdAt: new Date(d3).toISOString()
    },
    {
      id: "log_hist_base",
      date: "2026-06-01",
      startPage: 1,
      endPage: 474,
      pageCount: 474,
      comprehension: "high",
      memo: "[1회독 완료 누적분] 수개월 전부터 축적된 1회독 마스터 베이스 진도 (화재역학·유체역학·배관공학)",
      createdAt: "2026-06-01T00:00:00.000Z",
      isHistoryBase: true
    }
  ];
}

function generateReviewItemsForLog(log) {
  // 과거 누적 완독분(494p 대형 덩어리)은 이미 지난 학습이므로 복습 큐 생성 안 함
  if (log.isHistoryBase || log.pageCount > 60) return [];

  // 사용자 맞춤 요청: 약 10페이지 단위(10p Chunking)로 복습 분량을 자동 분할
  const chunkSize = 10;
  const chunks = [];
  let curStart = log.startPage;
  let chunkIdx = 1;

  while (curStart <= log.endPage) {
    const curEnd = Math.min(log.endPage, curStart + chunkSize - 1);
    chunks.push({
      startPage: curStart,
      endPage: curEnd,
      pageCount: curEnd - curStart + 1,
      chunkIdx
    });
    curStart = curEnd + 1;
    chunkIdx++;
  }

  const stages = [
    { stage: 1, days: 1, desc: "1차(+1d): 단기기억 고정" },
    { stage: 2, days: 3, desc: "2차(+3d): 핵심키워드 인출" },
    { stage: 3, days: 7, desc: "3차(+7d): 1주일 누적종합" },
    { stage: 4, days: 14, desc: "4차(+14d): 기출문제 연계" },
    { stage: 5, days: 30, desc: "5차(+30d): 완벽 영구정착" }
  ];

  let items = [];
  chunks.forEach(chk => {
    stages.forEach(s => {
      items.push({
        id: `rev_${log.id}_c${chk.chunkIdx}_s${s.stage}`,
        logId: log.id,
        stage: s.stage,
        stageName: s.desc,
        targetDate: formatDate(addDays(log.date, s.days)),
        startPage: chk.startPage,
        endPage: chk.endPage,
        pageCount: chk.pageCount,
        memo: log.memo,
        isDone: false,
        doneAt: null
      });
    });
  });

  return items;
}

// 1페이지부터 550페이지까지 60일 동안 매일 10페이지씩 순환 복습하는 큐 생성기
function generateFrontCycleReviews(startDate, maxEndPage = 550) {
  const reviews = [];
  const chunkSize = 10;
  let curDay = 0;

  for (let p = 1; p <= maxEndPage; p += chunkSize) {
    const startP = p;
    const endP = Math.min(maxEndPage, p + chunkSize - 1);
    const targetDate = formatDate(addDays(startDate, curDay));
    const ch = MASTER_CHAPTERS.find(c => startP >= c.startPage && startP <= c.endPage) || MASTER_CHAPTERS[0];

    reviews.push({
      id: `cycle_rev_p${startP}_${endP}`,
      logId: "cycle_front_base",
      stage: 1,
      stageName: "순환복습",
      targetDate: targetDate,
      startPage: startP,
      endPage: endP,
      pageCount: endP - startP + 1,
      memo: `[${ch.name}] 1~550p 전반부 10p 누적 순환 복습 - ${ch.keywords}`,
      isDone: false,
      doneAt: null,
      isCycleReview: true
    });
    curDay++;
  }
  return reviews;
}

// ============================================================================
// 4. 애플리케이션 상태 관리 (AppState)
// ============================================================================

const AppState = {
  settings: null,
  logs: [],
  reviews: [],

  init() {
    const savedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    this.settings = savedSettings ? JSON.parse(savedSettings) : getDefaultSettings();
    
    // 요청 사항 보장: 기본 배경은 무조건 밝은 계열(light)
    if (!this.settings.theme) {
      this.settings.theme = "light";
      this.saveSettings();
    }
    if (!this.settings.viewMode) {
      this.settings.viewMode = window.innerWidth <= 768 ? "mobile" : "desktop";
      this.saveSettings();
    }

    const savedLogs = localStorage.getItem(STORAGE_KEYS.LOGS);
    if (savedLogs) {
      try {
        this.logs = JSON.parse(savedLogs);
      } catch (e) {
        this.logs = [];
      }
    }

    // 400p 초과 데이터가 최근 날짜(09-08 등)에 있거나 이전 대형 로그가 있으면 2회독 베이스 구조로 자동 정규화
    const hasGiantRecentLog = this.logs.some(l => l.pageCount > 60 && l.date >= formatDate(addDays(new Date(), -7)));
    const hasPumpToday = this.logs.some(l => l.startPage === 541 && l.endPage === 550);
    if (hasGiantRecentLog || !hasPumpToday || this.logs.length <= 3) {
      this.logs = getInitialSampleLogs(this.settings.startDate);
      this.saveLogs();

      // 복습 큐도 10~20p 현실적 분량으로 완전 재생성 (신규 진도 에빙하우스 + 1~550p 순환 복습)
      let cleanReviews = [];
      this.logs.forEach(log => {
        cleanReviews = cleanReviews.concat(generateReviewItemsForLog(log));
      });
      const cycleReviews = generateFrontCycleReviews(this.settings.startDate, 550);
      this.reviews = [...cycleReviews, ...cleanReviews];
      this.saveReviews();
      return;
    }

    const savedReviews = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    if (savedReviews) {
      try {
        this.reviews = JSON.parse(savedReviews);
      } catch (e) {
        this.reviews = [];
      }
    }

    // 1~550p 순환 복습 큐 누락 시 자동 보충
    const hasCycleReviews = this.reviews.some(r => r.isCycleReview);
    if (!hasCycleReviews) {
      const cycleReviews = generateFrontCycleReviews(this.settings.startDate, 550);
      this.reviews = [...cycleReviews, ...this.reviews.filter(r => r.pageCount <= 60)];
      this.saveReviews();
    } else {
      this.reviews = this.reviews.filter(r => r.pageCount <= 60);
      this.saveReviews();
    }
  },

  saveSettings() {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(this.settings));
  },

  saveLogs() {
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(this.logs));
  },

  saveReviews() {
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(this.reviews));
  },

  addLog(newLog) {
    this.logs.unshift(newLog);
    this.saveLogs();

    const newReviews = generateReviewItemsForLog(newLog);
    this.reviews = [...newReviews, ...this.reviews];
    this.saveReviews();
  },

  deleteLog(logId) {
    this.logs = this.logs.filter(l => l.id !== logId);
    this.reviews = this.reviews.filter(r => r.logId !== logId);
    this.saveLogs();
    this.saveReviews();
  },

  toggleReviewDone(reviewId) {
    const item = this.reviews.find(r => r.id === reviewId);
    if (item) {
      item.isDone = !item.isDone;
      item.doneAt = item.isDone ? new Date().toISOString() : null;
      this.saveReviews();
      return item.isDone;
    }
    return false;
  }
};

// ============================================================================
// 5. 60일 동적 페이싱 & 지표 계산
// ============================================================================

function calculatePacingMetrics() {
  const todayStr = formatDate(new Date());
  const { totalPages, targetDays, startDate, examDate } = AppState.settings;

  let maxEndPage = 0;
  let totalReadPages = 0;
  AppState.logs.forEach(log => {
    if (log.endPage > maxEndPage) maxEndPage = log.endPage;
    totalReadPages += log.pageCount;
  });

  const currentProgressPct = Math.min(100, ((maxEndPage / totalPages) * 100)).toFixed(1);
  const daysPassed = Math.max(1, daysDiff(startDate, todayStr) + 1);
  const remainingDays = Math.max(1, targetDays - daysPassed + 1);
  const ddayToExam = daysDiff(todayStr, examDate);
  const remainingPages = Math.max(0, totalPages - maxEndPage);

  const dailyTargetPages = remainingPages > 0 ? Math.ceil(remainingPages / remainingDays) : 0;
  const targetRangeStart = maxEndPage + 1;
  const targetRangeEnd = Math.min(totalPages, maxEndPage + dailyTargetPages);

  const idealPagesPerDay = totalPages / targetDays;
  const idealCurrentPage = Math.min(totalPages, Math.round(idealPagesPerDay * daysPassed));
  const pageDelta = maxEndPage - idealCurrentPage;

  const todayReviews = AppState.reviews.filter(r => r.targetDate <= todayStr && !r.isDone);
  const todayReviewTotalPages = todayReviews.reduce((sum, r) => sum + r.pageCount, 0);

  // 스트릭 계산
  let streak = 0;
  const sortedDates = [...new Set(AppState.logs.map(l => l.date))].sort().reverse();
  let checkDate = new Date();
  for (let dStr of sortedDates) {
    const target = formatDate(checkDate);
    const prevTarget = formatDate(addDays(checkDate, -1));
    if (dStr === target) {
      streak++;
      checkDate = addDays(checkDate, -1);
    } else if (dStr === prevTarget && streak === 0) {
      streak++;
      checkDate = addDays(checkDate, -2);
    } else {
      break;
    }
  }

  // 현재 진행 중인 챕터 탐색
  const activeChapter = MASTER_CHAPTERS.find(ch => maxEndPage >= ch.startPage && maxEndPage <= ch.endPage) || MASTER_CHAPTERS[0];

  let userLevel = "Lv.1 소방 입문자";
  if (maxEndPage > 1500) userLevel = "Lv.5 소방기술사 최종합격권";
  else if (maxEndPage > 1000) userLevel = "Lv.4 기출 서브노트 완성";
  else if (maxEndPage > 500) userLevel = "Lv.3 수계·가스계 핵심 마스터";
  else if (maxEndPage > 150) userLevel = "Lv.2 화재안전기준 탐험가";

  return {
    todayStr,
    maxEndPage,
    totalReadPages,
    currentProgressPct,
    daysPassed,
    remainingDays,
    ddayToExam,
    remainingPages,
    dailyTargetPages,
    targetRangeStart,
    targetRangeEnd,
    idealCurrentPage,
    pageDelta,
    todayReviews,
    todayReviewTotalPages,
    streak,
    activeChapter,
    userLevel
  };
}

// ============================================================================
// 6. UI 렌더링 & 바인딩 (Stitch UI 완벽 동기화)
// ============================================================================

let weeklyChartInstance = null;
let cumulativeChartInstance = null;
let comprehensionChartInstance = null;

function renderAll() {
  const metrics = calculatePacingMetrics();

  // 1. 헤더 자극 명언 & D-Day
  renderCoachQuote();
  
  // 2. PC 사이드바 정보
  const ddayCountElem = document.getElementById("ddayCount");
  if (ddayCountElem) {
    ddayCountElem.innerText = metrics.ddayToExam >= 0 ? `D-${metrics.ddayToExam}` : `D+${Math.abs(metrics.ddayToExam)}`;
  }
  const pcExamTitleElem = document.getElementById("pcExamTitle");
  if (pcExamTitleElem) pcExamTitleElem.innerText = AppState.settings.bookTitle;
  
  const targetPeriodElem = document.getElementById("targetPeriodInfo");
  if (targetPeriodElem) {
    targetPeriodElem.innerHTML = `${AppState.settings.targetDays}일 목표 중 <strong>${metrics.daysPassed}일차</strong> 진행 중`;
  }
  const streakDaysElem = document.getElementById("streakDays");
  if (streakDaysElem) streakDaysElem.innerText = `${Math.max(1, metrics.streak)}일차 🔥`;

  const sidebarReviewBadge = document.getElementById("sidebarReviewBadge");
  if (sidebarReviewBadge) sidebarReviewBadge.innerText = `${metrics.todayReviews.length}건`;

  // 3. PC 대시보드 Hero Summary
  const heroBookBadge = document.getElementById("heroBookBadge");
  if (heroBookBadge) heroBookBadge.innerText = `${AppState.settings.bookTitle} (총 ${AppState.settings.totalPages}p)`;

  const heroSplitText = document.getElementById("heroSplitText");
  if (heroSplitText) heroSplitText.innerText = `${AppState.settings.targetDays}일 스플릿 ${metrics.daysPassed}일차`;

  const heroDaysRemaining = document.getElementById("heroDaysRemaining");
  if (heroDaysRemaining) heroDaysRemaining.innerText = `${metrics.remainingDays}일 남았어요`;

  const heroSubDesc = document.getElementById("heroSubDesc");
  if (heroSubDesc) {
    const nextPct = Math.min(100, (((metrics.maxEndPage + metrics.dailyTargetPages) / AppState.settings.totalPages) * 100)).toFixed(1);
    heroSubDesc.innerHTML = `오늘 권장 진도 <strong class="text-on-surface font-bold">${metrics.dailyTargetPages}페이지</strong>를 끝내면 전체 누적 진도 <strong>${nextPct}%</strong>를 돌파합니다.`;
  }

  // 4대 통계 하이라이트 그리드
  document.getElementById("todayTargetPage").innerText = metrics.dailyTargetPages;
  document.getElementById("todayTargetRange").innerText = metrics.remainingPages > 0 
    ? `예상: p.${metrics.targetRangeStart} ~ p.${metrics.targetRangeEnd}`
    : "🎉 60일 전권 완독 달성!";

  document.getElementById("todayReviewTotal").innerText = metrics.todayReviews.length;
  document.getElementById("todayReviewPages").innerText = `망각 위험 구간 총 ${metrics.todayReviewTotalPages}p`;

  document.getElementById("totalProgressPercent").innerText = metrics.currentProgressPct;
  document.getElementById("totalPagesRatio").innerText = `${metrics.maxEndPage} / ${AppState.settings.totalPages} 페이지`;

  document.getElementById("remainingDaysCount").innerText = metrics.remainingDays;
  const paceStatusDesc = document.getElementById("paceStatusDesc");
  if (paceStatusDesc) {
    if (metrics.pageDelta >= 0) {
      paceStatusDesc.innerText = `앞선 궤적 (+${metrics.pageDelta}p)`;
      paceStatusDesc.className = "text-primary text-xs font-bold";
    } else {
      paceStatusDesc.innerText = `지연 페이스 (${metrics.pageDelta}p)`;
      paceStatusDesc.className = "text-secondary text-xs font-bold";
    }
  }

  // 60일 페이싱 궤적 카드
  const pacingTrajectoryBadge = document.getElementById("pacingTrajectoryBadge");
  if (pacingTrajectoryBadge) pacingTrajectoryBadge.innerText = `Day ${metrics.daysPassed} / ${AppState.settings.targetDays}`;

  const mainProgressBar = document.getElementById("mainProgressBar");
  if (mainProgressBar) mainProgressBar.style.width = `${metrics.currentProgressPct}%`;

  const idealPct = Math.min(100, (metrics.idealCurrentPage / AppState.settings.totalPages) * 100);
  const idealMarker = document.getElementById("idealMarker");
  if (idealMarker) idealMarker.style.left = `${idealPct}%`;

  document.getElementById("startDateText").innerText = `시작일: ${AppState.settings.startDate}`;
  document.getElementById("targetDateText").innerText = `완료일: ${formatDate(addDays(AppState.settings.startDate, AppState.settings.targetDays))}`;

  const paceAlertText = document.getElementById("paceAlertText");
  if (paceAlertText) {
    if (metrics.pageDelta >= 0) {
      paceAlertText.innerText = `현재 계획보다 약 ${(metrics.pageDelta / (AppState.settings.totalPages / AppState.settings.targetDays)).toFixed(1)}일 앞서 순항 중입니다!`;
      paceAlertText.className = "font-bold text-primary";
    } else {
      paceAlertText.innerText = `주의: 계획보다 ${Math.abs(metrics.pageDelta)}페이지 지연되었습니다. 주말 누적복습으로 보충하세요!`;
      paceAlertText.className = "font-bold text-secondary";
    }
  }

  // 오늘의 망각방지 복습 큐 리스트
  renderDashboardReviewList(metrics.todayReviews);
  document.getElementById("reviewCountBadge").innerText = metrics.todayReviews.length;

  // 전체 복습 테이블 & 일지 히스토리 테이블
  renderFullReviewTable();
  renderLogHistoryTable();

  // 통계 탭 수치 갱신
  renderAnalyticsSummary(metrics);

  // 3단계 맞춤 학습 루틴 렌더링 (공부 전 10p ➔ 본 공부 ➔ 공부 후 10p)
  renderThreeStepRoutine(metrics);

  // 차트 렌더링
  renderWeeklyChart(metrics);
  renderCumulativeChart(metrics);
  renderComprehensionChart();

  // 모바일 심플 뷰 갱신
  renderMobileSimpleView(metrics);
}

// ----------------------------------------------------------------------------
// 오늘의 3단계 맞춤 합격 루틴 렌더링 (공부 전 10p -> 본 공부 -> 공부 후 10p)
// ----------------------------------------------------------------------------
function renderThreeStepRoutine(metrics) {
  const todayStr = formatDate(new Date());

  // STEP 1: 공부 전 10분 웜업 복습 (약 10p) - 1~550p 순환 복습 우선 배정
  const warmupReview = AppState.reviews.find(r => r.targetDate <= todayStr && !r.isDone && r.isCycleReview)
                    || AppState.reviews.find(r => r.targetDate <= todayStr && !r.isDone);
  const step1PageRange = document.getElementById("step1PageRange");
  const step1Memo = document.getElementById("step1Memo");
  const btnStep1 = document.getElementById("btnStep1Done");
  const step1BtnText = document.getElementById("step1BtnText");
  const step1Indicator = document.getElementById("step1Indicator");

  if (warmupReview) {
    if (step1PageRange) step1PageRange.innerText = `p.${warmupReview.startPage} ~ p.${warmupReview.endPage} (${warmupReview.pageCount}p)`;
    if (step1Memo) step1Memo.innerText = warmupReview.memo;
    if (step1BtnText) step1BtnText.innerText = "공부 전 10분 복습 완료";
    if (btnStep1) {
      btnStep1.onclick = () => window.handleReviewCheck(warmupReview.id);
      btnStep1.className = "w-full py-2 px-3 rounded-xl bg-secondary-fixed hover:bg-secondary text-secondary hover:text-on-secondary text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 border border-border-clean shadow-xs cursor-pointer";
    }
    if (step1Indicator) step1Indicator.className = "absolute top-0 left-0 right-0 h-1 bg-secondary animate-pulse";
  } else {
    if (step1PageRange) step1PageRange.innerText = "오늘 웜업 복습 완료! 🎉";
    if (step1Memo) step1Memo.innerText = "오늘 공부 전 10분 백지 인출을 완료했습니다. 가벼운 마음으로 본 진도를 나가세요!";
    if (step1BtnText) step1BtnText.innerText = "웜업 완료됨";
    if (btnStep1) {
      btnStep1.onclick = null;
      btnStep1.className = "w-full py-2 px-3 rounded-xl bg-surface-container text-outline text-xs font-bold flex items-center justify-center gap-1.5 cursor-default";
    }
    if (step1Indicator) step1Indicator.className = "absolute top-0 left-0 right-0 h-1 bg-emerald-500";
  }

  // STEP 2: 본 진도 전진
  const step2PageRange = document.getElementById("step2PageRange");
  const step2Memo = document.getElementById("step2Memo");
  const todayLog = AppState.logs.find(l => l.date === todayStr);

  if (todayLog) {
    if (step2PageRange) step2PageRange.innerText = `p.${todayLog.startPage} ~ p.${todayLog.endPage} (${todayLog.pageCount}p) 진행 중 🔥`;
    if (step2Memo) step2Memo.innerText = todayLog.memo;
  } else {
    const nextStart = metrics.maxEndPage + 1;
    const nextEnd = Math.min(AppState.settings.totalPages, nextStart + 9);
    if (step2PageRange) step2PageRange.innerText = `p.${nextStart} ~ p.${nextEnd} (10p 권장)`;
    if (step2Memo) step2Memo.innerText = "오늘 나갈 신규 10페이지 진도를 펼치세요!";
  }

  // STEP 3: 공부 후 10분 정착 복습
  const step3PageRange = document.getElementById("step3PageRange");
  const step3Memo = document.getElementById("step3Memo");
  const btnStep3 = document.getElementById("btnStep3Done");
  const step3BtnText = document.getElementById("step3BtnText");
  const step3Indicator = document.getElementById("step3Indicator");

  const targetStudyLog = todayLog || AppState.logs[0];
  const postStudyKey = `post_study_done_${todayStr}`;
  const isPostStudyDone = localStorage.getItem(postStudyKey) === "true";

  if (targetStudyLog) {
    if (step3PageRange) step3PageRange.innerText = `p.${targetStudyLog.startPage} ~ p.${targetStudyLog.endPage} (${targetStudyLog.pageCount}p)`;
    if (step3Memo) step3Memo.innerText = isPostStudyDone 
      ? "오늘 공부한 10p 핵심 개념과 공식을 백지에 쓰며 10분 정착 복습을 마쳤습니다! 👏" 
      : "방금 공부한 책을 덮고, 핵심 공식 3가지와 주요 기준을 백지에 10분간 쓰며 오늘 공부를 마무리하세요.";
  }

  if (isPostStudyDone) {
    if (step3BtnText) step3BtnText.innerText = "공부 후 정착 완료! 🏆";
    if (btnStep3) {
      btnStep3.className = "w-full py-2 px-3 rounded-xl bg-surface-container text-emerald-600 text-xs font-bold flex items-center justify-center gap-1.5 cursor-default";
      btnStep3.onclick = null;
    }
    if (step3Indicator) step3Indicator.className = "absolute top-0 left-0 right-0 h-1 bg-emerald-500";
  } else {
    if (step3BtnText) step3BtnText.innerText = "공부 후 10분 복습 완료 체크";
    if (btnStep3) {
      btnStep3.className = "w-full py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 border border-emerald-200 shadow-xs cursor-pointer";
      btnStep3.onclick = () => {
        localStorage.setItem(postStudyKey, "true");
        if (typeof confetti === "function") {
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        }
        renderThreeStepRoutine(metrics);
      };
    }
    if (step3Indicator) step3Indicator.className = "absolute top-0 left-0 right-0 h-1 bg-emerald-500";
  }
}

// ----------------------------------------------------------------------------
// 모바일 심플 뷰 (Mobile Focus Mode) 렌더링
// ----------------------------------------------------------------------------
function renderMobileSimpleView(metrics) {
  const mContainer = document.getElementById("mobileSimpleContainer");
  if (!mContainer) return;

  document.getElementById("mDdayBadge").innerText = metrics.ddayToExam >= 0 ? `D-${metrics.ddayToExam}` : `D+${Math.abs(metrics.ddayToExam)}`;
  document.getElementById("mExamTitle").innerText = AppState.settings.bookTitle;
  document.getElementById("mPeriodInfo").innerText = `${AppState.settings.targetDays}일 완독 중 ${metrics.daysPassed}일차 진행 중`;
  document.getElementById("mStreakDays").innerText = `${Math.max(1, metrics.streak)}일차`;

  document.getElementById("mPaceStatusBadge").innerText = metrics.pageDelta >= 0 ? "목표 달성 순항 중 🚀" : "주말 보충 필요 ⚠️";
  document.getElementById("mDaysLeftText").innerText = `${metrics.remainingDays}일`;

  const nextPct = Math.min(100, (((metrics.maxEndPage + metrics.dailyTargetPages) / AppState.settings.totalPages) * 100)).toFixed(1);
  document.getElementById("mHeadlineSub").innerHTML = `오늘 권장 <strong>${metrics.dailyTargetPages}p</strong> 완료 시 누적 <strong class="text-primary">${nextPct}%</strong> 돌파!`;

  document.getElementById("mTodayTargetNum").innerText = metrics.dailyTargetPages;
  document.getElementById("mTodayRangeText").innerText = metrics.remainingPages > 0
    ? `p.${metrics.targetRangeStart} ~ p.${metrics.targetRangeEnd}`
    : "완독 달성!";

  if (metrics.activeChapter) {
    document.getElementById("mCurrentChapterTag").innerHTML = `${metrics.activeChapter.name.slice(0, 10)}... <span class="material-symbols-outlined text-[14px]">chevron_right</span>`;
    document.getElementById("mTodaySubnoteHint").innerText = `[${metrics.activeChapter.part}] ${metrics.activeChapter.keywords}`;
  }

  document.getElementById("mProgressPct").innerText = `${metrics.currentProgressPct}%`;
  document.getElementById("mProgressBarFill").style.width = `${metrics.currentProgressPct}%`;
  document.getElementById("mReadPagesText").innerText = `${metrics.maxEndPage}p 완료`;
  document.getElementById("mTotalPagesText").innerText = `전체 ${AppState.settings.totalPages}p`;

  document.getElementById("mReviewCountBadge").innerText = `${metrics.todayReviews.length}건`;

  const mRevList = document.getElementById("mReviewList");
  if (!metrics.todayReviews || metrics.todayReviews.length === 0) {
    mRevList.innerHTML = `
      <div class="text-center py-5 text-outline text-xs">
        <span class="material-symbols-outlined text-green-500 text-2xl block mb-1">check_circle</span>
        오늘 예정된 에빙하우스 복습 큐를 모두 마쳤습니다! 👏
      </div>
    `;
  } else {
    mRevList.innerHTML = metrics.todayReviews.map(r => `
      <div class="bg-surface-container-low border border-border-clean/60 rounded-xl p-3 flex items-center justify-between gap-3">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5 mb-1">
            <span class="review-stage-badge stage-${r.stage}">+${r.stage === 1 ? '1일' : r.stage === 2 ? '3일' : r.stage === 3 ? '7일' : r.stage === 4 ? '14일' : '30일'}</span>
            <span class="text-xs font-bold text-on-surface">p.${r.startPage} ~ p.${r.endPage} (${r.pageCount}p)</span>
          </div>
          <p class="text-[11px] text-outline truncate">${r.memo || "핵심 키워드 복습"}</p>
        </div>
        <button type="button" class="h-8 px-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary text-xs font-bold shrink-0 flex items-center gap-1 active:scale-95 transition-all shadow-xs" onclick="handleReviewCheck('${r.id}')">
          <span class="material-symbols-outlined text-[14px]">check</span> 완료
        </button>
      </div>
    `).join("");
  }
}

// ----------------------------------------------------------------------------
// 자극 명언 렌더링 (매일 다른 문구)
// ----------------------------------------------------------------------------
function renderCoachQuote(isNext = false) {
  if (isNext) manualQuoteOffset++;

  const todayStr = formatDate(new Date());
  const mode = AppState.settings.coachMode || "fact";
  const quotes = COACH_QUOTES[mode] || COACH_QUOTES.fact;
  
  const dailyIndex = getDailyQuoteIndex(todayStr, quotes.length, manualQuoteOffset);
  const selectedQuote = quotes[dailyIndex];

  const quoteElem = document.getElementById("coachQuote");
  const badgeText = document.getElementById("coachBadgeText");
  const badgeElem = document.getElementById("coachBadge");
  const selectElem = document.getElementById("coachModeSelect");
  
  if (quoteElem) quoteElem.innerText = `"${selectedQuote}"`;
  if (selectElem) selectElem.value = mode;

  const shortDate = todayStr.slice(5).replace("-", ".");

  if (badgeElem && badgeText) {
    if (mode === "fact") {
      badgeText.innerText = `오늘의 팩트폭행 (${shortDate})`;
      badgeElem.className = "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold shrink-0 bg-secondary-fixed text-secondary shadow-xs";
    } else if (mode === "mentor") {
      badgeText.innerText = `오늘의 멘토 조언 (${shortDate})`;
      badgeElem.className = "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold shrink-0 bg-primary-fixed text-primary shadow-xs";
    } else {
      badgeText.innerText = `오늘의 따뜻한 격려 (${shortDate})`;
      badgeElem.className = "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold shrink-0 bg-emerald-100 text-emerald-700 shadow-xs";
    }
  }
}

// ----------------------------------------------------------------------------
// 대시보드 복습 큐 렌더링
// ----------------------------------------------------------------------------
function renderDashboardReviewList(todayReviews) {
  const container = document.getElementById("dashboardReviewList");
  if (!container) return;

  if (!todayReviews || todayReviews.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-outline text-xs">
        <span class="material-symbols-outlined text-green-500 text-3xl block mb-2">check_circle</span>
        <strong class="font-bold text-sm text-on-surface block mb-1">오늘의 복습 큐를 모두 마쳤습니다!</strong>
        <p>망각을 이겨내셨습니다. 오늘의 권장 진도를 향해 나아가세요.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = todayReviews.map(r => `
    <div class="bg-surface-container-low border border-border-clean rounded-2xl p-4 flex items-center justify-between gap-3 hover:bg-surface-container transition-all">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span class="review-stage-badge stage-${r.stage}">+${r.stage === 1 ? '1일' : r.stage === 2 ? '3일' : r.stage === 3 ? '7일' : r.stage === 4 ? '14일' : '30일'}</span>
          <strong class="text-xs font-bold text-on-surface">p.${r.startPage} ~ p.${r.endPage} (${r.pageCount}p)</strong>
        </div>
        <p class="text-xs text-outline truncate">${r.memo || "핵심 키워드 복습"}</p>
      </div>
      <button type="button" class="h-9 px-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs font-bold shrink-0 flex items-center gap-1 active:scale-95 transition-all shadow-xs" onclick="handleReviewCheck('${r.id}')">
        <span class="material-symbols-outlined text-[16px]">check</span> 복습 완료
      </button>
    </div>
  `).join("");
}

// ----------------------------------------------------------------------------
// 전체 복습 테이블 렌더링
// ----------------------------------------------------------------------------
let currentReviewFilter = "today";

function renderFullReviewTable() {
  const tbody = document.getElementById("fullReviewTableBody");
  if (!tbody) return;

  const todayStr = formatDate(new Date());

  let filtered = [...AppState.reviews];
  if (currentReviewFilter === "today") {
    filtered = filtered.filter(r => r.targetDate === todayStr && !r.isDone);
  } else if (currentReviewFilter === "overdue") {
    filtered = filtered.filter(r => r.targetDate < todayStr && !r.isDone);
  } else if (currentReviewFilter === "completed") {
    filtered = filtered.filter(r => r.isDone);
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-outline text-xs">해당하는 복습 일정이 없습니다.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(r => {
    const isOverdue = r.targetDate < todayStr && !r.isDone;
    return `
      <tr class="hover:bg-surface-container-low transition-colors ${r.isDone ? 'opacity-50' : ''}">
        <td class="py-3 px-3"><span class="review-stage-badge stage-${r.stage}">+${r.stage === 1 ? '1d' : r.stage === 2 ? '3d' : r.stage === 3 ? '7d' : r.stage === 4 ? '14d' : '30d'}</span></td>
        <td class="py-3 px-3 font-semibold ${isOverdue ? 'text-secondary font-bold' : 'text-on-surface'}">${r.targetDate} ${isOverdue ? '(지연)' : ''}</td>
        <td class="py-3 px-3 font-bold text-on-surface">p.${r.startPage} ~ p.${r.endPage}</td>
        <td class="py-3 px-3 text-primary font-bold">${r.pageCount}p</td>
        <td class="py-3 px-3 text-outline truncate max-w-xs">${r.memo}</td>
        <td class="py-3 px-3 text-right">
          <button type="button" class="px-3 py-1 rounded-lg text-xs font-bold transition-all ${r.isDone ? 'bg-surface-container text-outline' : 'bg-primary text-on-primary hover:bg-primary-container shadow-xs'}" onclick="handleReviewCheck('${r.id}')">
            ${r.isDone ? '완료됨' : '복습 완료'}
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

// ----------------------------------------------------------------------------
// 학습 일지 히스토리 테이블 렌더링
// ----------------------------------------------------------------------------
function renderLogHistoryTable() {
  const tbody = document.getElementById("logHistoryTableBody");
  if (!tbody) return;

  if (AppState.logs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-8 text-outline text-xs">아직 등록된 학습 기록이 없습니다. 상단에서 오늘 진도를 기록하세요!</td></tr>`;
    return;
  }

  tbody.innerHTML = AppState.logs.map(log => {
    if (log.isHistoryBase) {
      return `
        <tr class="bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
          <td class="py-3 px-3"><span class="px-2.5 py-1 rounded-full bg-primary-fixed text-primary text-[10px] font-bold">1회독 이월</span></td>
          <td class="py-3 px-3 font-bold text-on-surface">p.${log.startPage} ~ p.${log.endPage}</td>
          <td class="py-3 px-3 text-outline font-bold">${log.pageCount}p (누적)</td>
          <td class="py-3 px-3"><span class="text-emerald-600 font-bold">🟢 완독</span></td>
          <td class="py-3 px-3 text-outline truncate max-w-sm">${log.memo}</td>
          <td class="py-3 px-3 text-outline text-[11px] font-semibold">이전 1회독 완료분</td>
          <td class="py-3 px-3 text-right text-outline text-xs">-</td>
        </tr>
      `;
    }

    let compBadge = `<span class="text-amber-500 font-bold">🟡 중</span>`;
    if (log.comprehension === "high") compBadge = `<span class="text-emerald-500 font-bold">🟢 상</span>`;
    else if (log.comprehension === "low") compBadge = `<span class="text-red-500 font-bold">🔴 하</span>`;

    return `
      <tr class="hover:bg-surface-container-low transition-colors">
        <td class="py-3 px-3 font-bold text-on-surface">${log.date}</td>
        <td class="py-3 px-3 font-semibold text-on-surface">p.${log.startPage} ~ p.${log.endPage}</td>
        <td class="py-3 px-3 text-primary font-bold">${log.pageCount}p</td>
        <td class="py-3 px-3">${compBadge}</td>
        <td class="py-3 px-3 text-outline truncate max-w-sm">${log.memo}</td>
        <td class="py-3 px-3 text-primary text-[11px] font-semibold">5주기 자동 배정됨</td>
        <td class="py-3 px-3 text-right">
          <button type="button" class="p-1 rounded-lg text-outline hover:text-red-500 hover:bg-red-50 transition-colors" onclick="handleDeleteLog('${log.id}')" title="삭제">
            <span class="material-symbols-outlined text-[16px]">delete</span>
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

// ----------------------------------------------------------------------------
// 통계 탭 요약 렌더링
// ----------------------------------------------------------------------------
function renderAnalyticsSummary(metrics) {
  document.getElementById("analyticsTotalPages").innerText = `${metrics.totalReadPages}p`;
  document.getElementById("analyticsTotalPct").innerText = `전체 ${AppState.settings.totalPages}p 중 ${metrics.currentProgressPct}% 완독`;

  const dailyAvg = (metrics.totalReadPages / metrics.daysPassed).toFixed(1);
  document.getElementById("analyticsDailyAvg").innerText = `${dailyAvg}p / 일`;
  const compPct = ((dailyAvg / (AppState.settings.totalPages / AppState.settings.targetDays)) * 100).toFixed(0);
  document.getElementById("analyticsDailyTargetComp").innerText = `목표 페이스 대비 ${compPct}% 속도`;

  const daysToFinish = dailyAvg > 0 ? Math.ceil(metrics.remainingPages / dailyAvg) : 999;
  document.getElementById("analyticsEstimatedDays").innerText = `D-${daysToFinish}`;
  const expectedDate = formatDate(addDays(new Date(), daysToFinish));
  document.getElementById("analyticsExpectedDate").innerText = `${expectedDate} 완독 예상 (목표 시험일 대비 순항)`;

  const totalReviewsCount = AppState.reviews.length;
  const doneReviewsCount = AppState.reviews.filter(r => r.isDone).length;
  const reviewPct = totalReviewsCount > 0 ? Math.round((doneReviewsCount / totalReviewsCount) * 100) : 100;
  document.getElementById("analyticsReviewRate").innerText = `${reviewPct}%`;
  document.getElementById("analyticsReviewFraction").innerText = `총 ${totalReviewsCount}건 중 ${doneReviewsCount}건 완수`;

  document.getElementById("userLevelBadge").innerText = metrics.userLevel;
}

// ============================================================================
// 7. 차트 렌더링 (Chart.js)
// ============================================================================

function getChartGridColor() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  return isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)";
}

function getChartTextColor() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  return isDark ? "#94a3b8" : "#64748b";
}

function renderWeeklyChart(metrics) {
  const ctx = document.getElementById("weeklyChart");
  if (!ctx) return;

  const labels = [];
  const pageData = [];
  const targetLineData = [];
  const targetPerDay = Math.round(AppState.settings.totalPages / AppState.settings.targetDays);

  for (let i = 6; i >= 0; i--) {
    const dStr = formatDate(addDays(new Date(), -i));
    labels.push(dStr.slice(5));
    targetLineData.push(targetPerDay);

    const logForDay = AppState.logs.find(l => l.date === dStr && !l.isHistoryBase && l.pageCount <= 60);
    pageData.push(logForDay ? logForDay.pageCount : 0);
  }

  if (weeklyChartInstance) {
    weeklyChartInstance.destroy();
  }

  weeklyChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "당일 학습 페이지",
          data: pageData,
          backgroundColor: "#0059b9",
          borderRadius: 8,
          order: 2
        },
        {
          label: "일일 권장 목표선",
          data: targetLineData,
          type: "line",
          borderColor: "#fc5933",
          borderDash: [4, 4],
          borderWidth: 2,
          pointRadius: 0,
          fill: false,
          order: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: getChartTextColor() }
        },
        y: {
          grid: { color: getChartGridColor() },
          ticks: { color: getChartTextColor() },
          beginAtZero: true
        }
      }
    }
  });
}

function renderCumulativeChart(metrics) {
  const ctx = document.getElementById("cumulativeChart");
  if (!ctx) return;

  const labels = [];
  const plannedData = [];
  const actualData = [];
  const targetDays = AppState.settings.targetDays;
  const totalPages = AppState.settings.totalPages;

  const step = Math.max(1, Math.round(targetDays / 6));
  for (let d = 0; d <= targetDays; d += step) {
    labels.push(`${d}일차`);
    plannedData.push(Math.round((totalPages / targetDays) * d));
    
    if (d <= metrics.daysPassed) {
      actualData.push(Math.round((metrics.maxEndPage / targetDays) * d));
    }
  }

  if (cumulativeChartInstance) {
    cumulativeChartInstance.destroy();
  }

  cumulativeChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "내 실제 누적 페이지",
          data: actualData,
          borderColor: "#0059b9",
          backgroundColor: "rgba(0, 89, 185, 0.1)",
          fill: true,
          tension: 0.3,
          borderWidth: 3,
          pointBackgroundColor: "#0059b9",
          pointRadius: 4
        },
        {
          label: "60일 이상적 계획선",
          data: plannedData,
          borderColor: "#c1c6d6",
          borderDash: [5, 5],
          borderWidth: 2,
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: { color: getChartTextColor() }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: getChartTextColor() }
        },
        y: {
          grid: { color: getChartGridColor() },
          ticks: { color: getChartTextColor() }
        }
      }
    }
  });
}

function renderComprehensionChart() {
  const ctx = document.getElementById("comprehensionChart");
  if (!ctx) return;

  let high = 0, mid = 0, low = 0;
  AppState.logs.forEach(l => {
    if (l.comprehension === "high") high++;
    else if (l.comprehension === "low") low++;
    else mid++;
  });

  if (high === 0 && mid === 0 && low === 0) mid = 1;

  if (comprehensionChartInstance) {
    comprehensionChartInstance.destroy();
  }

  comprehensionChartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["상 (완전숙지)", "중 (원리이해)", "하 (난해파트)"],
      datasets: [
        {
          data: [high, mid, low],
          backgroundColor: ["#10b981", "#f59e0b", "#ef4444"],
          borderWidth: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: { color: getChartTextColor() }
        }
      },
      cutout: "70%"
    }
  });
}

// ============================================================================
// 8. 전역 이벤트 핸들러 & 모달 동작
// ============================================================================

window.handleReviewCheck = function(reviewId) {
  const isDone = AppState.toggleReviewDone(reviewId);
  if (isDone && typeof confetti === "function") {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#0059b9", "#fc5933", "#10b981"]
    });
  }
  renderAll();
};

window.handleDeleteLog = function(logId) {
  if (confirm("정말 이 학습 일지와 연결된 에빙하우스 복습 스케줄을 삭제하시겠습니까?")) {
    AppState.deleteLog(logId);
    renderAll();
  }
};

function setupTabs() {
  const navItems = document.querySelectorAll(".nav-item");
  const panes = document.querySelectorAll(".tab-pane");

  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const tabId = item.getAttribute("data-tab");
      navItems.forEach(n => n.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      item.classList.add("active");
      const targetPane = document.getElementById(`tab-${tabId}`);
      if (targetPane) targetPane.classList.add("active");

      if (tabId === "analytics") {
        setTimeout(() => {
          if (cumulativeChartInstance) cumulativeChartInstance.resize();
          if (comprehensionChartInstance) comprehensionChartInstance.resize();
        }, 50);
      } else if (tabId === "dashboard") {
        setTimeout(() => {
          if (weeklyChartInstance) weeklyChartInstance.resize();
        }, 50);
      }
    });
  });

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentReviewFilter = btn.getAttribute("data-filter");
      renderFullReviewTable();
    });
  });
}

// 모달 제어
function setupModals() {
  const logModal = document.getElementById("logModal");
  const settingsModal = document.getElementById("settingsModal");
  const selectChapter = document.getElementById("selectChapter");
  const presetBtns = document.querySelectorAll(".preset-btn");

  // 28개 챕터 드롭다운 채우기
  function populateChapterSelect() {
    if (!selectChapter) return;
    selectChapter.innerHTML = `<option value="">-- 직접 입력 또는 챕터 선택 --</option>`;

    const optGroup1 = document.createElement("optgroup");
    optGroup1.label = "=== 제1권 : 화재역학 & 소방기계 (CH 01~14) ===";

    const optGroup2 = document.createElement("optgroup");
    optGroup2.label = "=== 제2권 : 제연 & 소방전기 & 방재 (CH 15~28) ===";

    MASTER_CHAPTERS.forEach((ch, idx) => {
      const opt = document.createElement("option");
      opt.value = idx;
      opt.text = `${ch.name} (p.${ch.startPage}~${ch.endPage}, ${ch.pages}p) - ${ch.part}`;
      if (ch.vol === 1) optGroup1.appendChild(opt);
      else optGroup2.appendChild(opt);
    });

    selectChapter.appendChild(optGroup1);
    selectChapter.appendChild(optGroup2);
  }

  populateChapterSelect();

  selectChapter.addEventListener("change", (e) => {
    const val = e.target.value;
    if (val === "") return;
    const ch = MASTER_CHAPTERS[parseInt(val)];
    if (ch) {
      document.getElementById("inputStartPage").value = ch.startPage;
      document.getElementById("inputEndPage").value = ch.endPage;
      const memoField = document.getElementById("inputTopicMemo");
      memoField.value = `[${ch.name}] ${ch.part}\n핵심키워드: ${ch.keywords}`;
      updateCalcHint();
    }
  });

  presetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      presetBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const presetKey = btn.getAttribute("data-preset");
      const preset = BOOK_PRESETS[presetKey];
      if (preset) {
        document.getElementById("settingBookTitle").value = preset.title;
        document.getElementById("settingTotalPages").value = preset.totalPages;
        document.getElementById("settingTargetDays").value = preset.targetDays;
      }
    });
  });

  const openLog = () => {
    document.getElementById("inputLogDate").value = formatDate(new Date());
    const metrics = calculatePacingMetrics();
    document.getElementById("inputStartPage").value = metrics.targetRangeStart;
    document.getElementById("inputEndPage").value = metrics.targetRangeEnd;
    if (selectChapter) selectChapter.value = "";
    updateCalcHint();
    logModal.classList.add("active");
  };

  document.getElementById("btnOpenLogModal")?.addEventListener("click", openLog);
  document.getElementById("btnOpenLogModal2")?.addEventListener("click", openLog);
  document.getElementById("mBtnOpenLog")?.addEventListener("click", openLog);
  document.querySelectorAll(".btn-open-log-trigger").forEach(b => b.addEventListener("click", openLog));

  document.getElementById("btnCloseLogModal")?.addEventListener("click", () => logModal.classList.remove("active"));
  document.getElementById("btnCancelLog")?.addEventListener("click", () => logModal.classList.remove("active"));

  document.getElementById("btnEditTarget")?.addEventListener("click", () => {
    document.getElementById("settingBookTitle").value = AppState.settings.bookTitle;
    document.getElementById("settingTotalPages").value = AppState.settings.totalPages;
    document.getElementById("settingTargetDays").value = AppState.settings.targetDays;
    document.getElementById("settingStartDate").value = AppState.settings.startDate;
    document.getElementById("settingExamDate").value = AppState.settings.examDate;

    presetBtns.forEach(b => {
      const pk = b.getAttribute("data-preset");
      if (BOOK_PRESETS[pk] && BOOK_PRESETS[pk].totalPages === AppState.settings.totalPages) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });

    settingsModal.classList.add("active");
  });

  document.getElementById("btnCloseSettingsModal")?.addEventListener("click", () => settingsModal.classList.remove("active"));
  document.getElementById("btnCancelSettings")?.addEventListener("click", () => settingsModal.classList.remove("active"));

  const startInput = document.getElementById("inputStartPage");
  const endInput = document.getElementById("inputEndPage");
  const calcHint = document.getElementById("calcHint");

  function updateCalcHint() {
    const s = parseInt(startInput.value) || 0;
    const e = parseInt(endInput.value) || 0;
    const diff = Math.max(0, e - s + 1);
    calcHint.innerText = `학습 분량: 총 ${diff} 페이지 (${s}p ~ ${e}p)`;
  }
  startInput.addEventListener("input", updateCalcHint);
  endInput.addEventListener("input", updateCalcHint);

  document.getElementById("logForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const date = document.getElementById("inputLogDate").value;
    const startPage = parseInt(startInput.value);
    const endPage = parseInt(endInput.value);
    const memo = document.getElementById("inputTopicMemo").value.trim() || "소방기술사 핵심 개념 학습";
    const compRadio = document.querySelector('input[name="comprehension"]:checked');
    const comprehension = compRadio ? compRadio.value : "mid";

    if (endPage < startPage) {
      alert("종료 페이지가 시작 페이지보다 작을 수 없습니다!");
      return;
    }

    const newLog = {
      id: "log_" + Date.now(),
      date,
      startPage,
      endPage,
      pageCount: endPage - startPage + 1,
      comprehension,
      memo,
      createdAt: new Date().toISOString()
    };

    AppState.addLog(newLog);
    logModal.classList.remove("active");
    document.getElementById("inputTopicMemo").value = "";

    if (typeof confetti === "function") {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }

    renderAll();
  });

  document.getElementById("settingsForm").addEventListener("submit", (e) => {
    e.preventDefault();
    AppState.settings.bookTitle = document.getElementById("settingBookTitle").value.trim();
    AppState.settings.totalPages = parseInt(document.getElementById("settingTotalPages").value);
    AppState.settings.targetDays = parseInt(document.getElementById("settingTargetDays").value);
    AppState.settings.startDate = document.getElementById("settingStartDate").value;
    AppState.settings.examDate = document.getElementById("settingExamDate").value;
    AppState.saveSettings();

    settingsModal.classList.remove("active");
    renderAll();
  });

  document.getElementById("coachModeSelect")?.addEventListener("change", (e) => {
    AppState.settings.coachMode = e.target.value;
    manualQuoteOffset = 0;
    AppState.saveSettings();
    renderCoachQuote();
  });

  document.getElementById("btnNextQuote")?.addEventListener("click", () => {
    renderCoachQuote(true);
  });
}

// ----------------------------------------------------------------------------
// 밝은 모드 / 다크 모드 제어 (Tailwind & CSS 연동)
// ----------------------------------------------------------------------------
function applyTheme(theme) {
  const currentTheme = (theme === "dark") ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  document.documentElement.classList.toggle("dark", currentTheme === "dark");

  const btn = document.getElementById("btnThemeToggle");
  const btnText = document.getElementById("btnThemeToggleText");
  if (btn && btnText) {
    if (currentTheme === "dark") {
      btn.innerHTML = `<span class="material-symbols-outlined text-[16px] text-amber-400">light_mode</span> <span>밝은 모드로 전환</span>`;
      btn.classList.add("is-dark");
    } else {
      btn.innerHTML = `<span class="material-symbols-outlined text-[16px] text-indigo-500">dark_mode</span> <span>다크 모드로 전환</span>`;
      btn.classList.remove("is-dark");
    }
  }
}

function setupTheme() {
  const currentTheme = AppState.settings.theme || "light";
  applyTheme(currentTheme);

  const btn = document.getElementById("btnThemeToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const isCurrentlyDark = document.documentElement.getAttribute("data-theme") === "dark";
      const nextTheme = isCurrentlyDark ? "light" : "dark";

      AppState.settings.theme = nextTheme;
      AppState.saveSettings();
      applyTheme(nextTheme);

      if (typeof renderAll === "function") {
        renderAll();
      }
    });
  }
}

// ----------------------------------------------------------------------------
// 포모도로 타이머 로직
// ----------------------------------------------------------------------------
let timerInterval = null;
let timerTotalSeconds = 3000;
let timerRemainingSeconds = 3000;
let isTimerRunning = false;

function setupTimer() {
  const display = document.getElementById("timerDisplay");
  const status = document.getElementById("timerStatus");
  const btnStart = document.getElementById("btnTimerStart");
  const btnReset = document.getElementById("btnTimerReset");
  const progressCircle = document.getElementById("timerProgressCircle");
  const pillBtns = document.querySelectorAll(".pill-btn");
  const circumference = 2 * Math.PI * 88;

  function updateTimerDisplay() {
    const mins = Math.floor(timerRemainingSeconds / 60);
    const secs = timerRemainingSeconds % 60;
    const timeStr = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    
    if (display) display.innerText = timeStr;

    const mDisplay = document.getElementById("mTimerDisplay");
    if (mDisplay) mDisplay.innerText = timeStr;

    const mBtnStart = document.getElementById("mBtnTimerStart");
    if (mBtnStart) {
      mBtnStart.innerHTML = isTimerRunning
        ? `<span class="material-symbols-outlined text-[16px]">pause</span> 정지`
        : `<span class="material-symbols-outlined text-[16px]">play_arrow</span> 시작`;
    }

    if (progressCircle) {
      const offset = circumference - (timerRemainingSeconds / timerTotalSeconds) * circumference;
      progressCircle.style.strokeDashoffset = offset;
    }
  }

  pillBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (isTimerRunning) return;
      pillBtns.forEach(b => {
        b.classList.remove("active");
        b.classList.add("bg-surface-container-low", "text-outline");
      });
      btn.classList.add("active");
      btn.classList.remove("bg-surface-container-low", "text-outline");

      timerTotalSeconds = parseInt(btn.getAttribute("data-time"));
      timerRemainingSeconds = timerTotalSeconds;
      updateTimerDisplay();
    });
  });

  if (btnStart) {
    btnStart.addEventListener("click", () => {
      if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        btnStart.innerHTML = `<span class="material-symbols-outlined text-[20px]">play_arrow</span> <span>계속하기</span>`;
        if (status) status.innerText = "일시정지 중";
      } else {
        isTimerRunning = true;
        btnStart.innerHTML = `<span class="material-symbols-outlined text-[20px]">pause</span> <span>일시정지</span>`;
        if (status) status.innerText = "🔥 소방기술사 집중 모드 가동 중";

        timerInterval = setInterval(() => {
          timerRemainingSeconds--;
          updateTimerDisplay();

          if (timerRemainingSeconds <= 0) {
            clearInterval(timerInterval);
            isTimerRunning = false;
            btnStart.innerHTML = `<span class="material-symbols-outlined text-[20px]">play_arrow</span> <span>집중 시작</span>`;
            if (status) status.innerText = "🎉 집중 세션 완료!";
            playBeepSound();
            if (typeof confetti === "function") {
              confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
            }
          }
        }, 1000);
      }
    });
  }

  if (btnReset) {
    btnReset.addEventListener("click", () => {
      clearInterval(timerInterval);
      isTimerRunning = false;
      timerRemainingSeconds = timerTotalSeconds;
      if (btnStart) btnStart.innerHTML = `<span class="material-symbols-outlined text-[20px]">play_arrow</span> <span>집중 시작</span>`;
      if (status) status.innerText = "집중 준비 완료";
      updateTimerDisplay();
    });
  }

  // 홈의 '포모도로 시작' 빠른 버튼
  document.getElementById("btnStartPomodoroQuick")?.addEventListener("click", () => {
    const timerNavItem = document.querySelector('.nav-item[data-tab="timer"]');
    if (timerNavItem) timerNavItem.click();
    if (!isTimerRunning && btnStart) btnStart.click();
  });

  updateTimerDisplay();
}

function playBeepSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(587.33, ctx.currentTime);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);
    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  } catch (e) {
    console.log("Audio:", e);
  }
}

// ----------------------------------------------------------------------------
// 데이터 백업 및 복원
// ----------------------------------------------------------------------------
function setupBackupAndRestore() {
  const btnExport = document.getElementById("btnExportData");
  const btnImport = document.getElementById("btnImportData");
  const fileInput = document.getElementById("fileInput");

  btnExport?.addEventListener("click", () => {
    const exportData = {
      version: "2.0-stitch",
      exportDate: new Date().toISOString(),
      settings: AppState.settings,
      logs: AppState.logs,
      reviews: AppState.reviews
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `소방기술사_학습데이터_${formatDate(new Date())}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  btnImport?.addEventListener("click", () => fileInput?.click());

  fileInput?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported.settings && imported.logs) {
          AppState.settings = imported.settings;
          AppState.logs = imported.logs;
          AppState.reviews = imported.reviews || [];
          AppState.saveSettings();
          AppState.saveLogs();
          AppState.saveReviews();
          alert("성공적으로 데이터를 복원했습니다!");
          renderAll();
        } else {
          alert("올바르지 않은 백업 파일 형식입니다.");
        }
      } catch (err) {
        alert("파일 오류: " + err.message);
      }
    };
    reader.readAsText(file);
    fileInput.value = "";
  });
}

// ----------------------------------------------------------------------------
// 뷰 모드 전환 (PC 프로 뷰 vs 모바일 심플 뷰)
// ----------------------------------------------------------------------------
function setupViewMode() {
  const btnToggle = document.getElementById("btnViewToggle");
  const mBtnSwitchToPc = document.getElementById("mBtnSwitchToPc");
  const pcContainer = document.getElementById("pcAppContainer");
  const mobileContainer = document.getElementById("mobileSimpleContainer");

  function applyViewMode(mode) {
    AppState.settings.viewMode = mode;
    AppState.saveSettings();

    if (mode === "mobile") {
      if (pcContainer) pcContainer.style.display = "none";
      if (mobileContainer) mobileContainer.style.display = "block";
      if (btnToggle) {
        btnToggle.innerHTML = `<span class="material-symbols-outlined text-[16px]">desktop_windows</span> <span>PC 프로 뷰</span>`;
        btnToggle.setAttribute("title", "PC 프로 대시보드로 전환");
      }
    } else {
      if (pcContainer) pcContainer.style.display = "flex";
      if (mobileContainer) mobileContainer.style.display = "none";
      if (btnToggle) {
        btnToggle.innerHTML = `<span class="material-symbols-outlined text-[16px]">smartphone</span> <span>모바일 심플 뷰</span>`;
        btnToggle.setAttribute("title", "모바일 심플 뷰로 전환");
      }
    }
  }

  btnToggle?.addEventListener("click", () => {
    const nextMode = AppState.settings.viewMode === "mobile" ? "desktop" : "mobile";
    applyViewMode(nextMode);
  });

  mBtnSwitchToPc?.addEventListener("click", () => {
    applyViewMode("desktop");
  });

  const mBtnTimerStart = document.getElementById("mBtnTimerStart");
  const mBtnTimerReset = document.getElementById("mBtnTimerReset");
  const btnTimerStart = document.getElementById("btnTimerStart");
  const btnTimerReset = document.getElementById("btnTimerReset");

  if (mBtnTimerStart && btnTimerStart) {
    mBtnTimerStart.addEventListener("click", () => btnTimerStart.click());
  }
  if (mBtnTimerReset && btnTimerReset) {
    mBtnTimerReset.addEventListener("click", () => btnTimerReset.click());
  }

  applyViewMode(AppState.settings.viewMode);
}

// ============================================================================
// 9. 애플리케이션 진입점 (DOMContentLoaded)
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  AppState.init();
  setupTheme();
  setupTabs();
  setupModals();
  setupTimer();
  setupBackupAndRestore();
  setupViewMode();
  renderAll();
});

// 전역 디버깅 및 연동 편의 노출
window.AppState = AppState;
window.renderAll = renderAll;
window.calculatePacingMetrics = calculatePacingMetrics;
