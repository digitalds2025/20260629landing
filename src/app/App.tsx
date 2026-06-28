import { useState, type ReactNode } from "react";
import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import { GuideModal } from "./components/GuideModal";
import kakaotalkLogo from "../assets/kakaotalk.png";
import seesignLogo from "../assets/SEESIGN.svg";
import adDbScreenshot from "../assets/화면 캡처 2026-06-28 233249.png";
import smartArchiveScreenshot from "../assets/화면 캡처 2026-06-28 233303.png";
import adAiSummaryScreenshot from "../assets/화면 캡처 2026-06-28 233325.png";
import newsAnalysisScreenshot from "../assets/화면 캡처 2026-06-28 233808.png";
import newsReportScreenshot from "../assets/화면 캡처 2026-06-28 234144.png";
import newsAlertScreenshot from "../assets/화면 캡처 2026-06-28 234202.png";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Sparkles,
  PenLine,
  Network,
  Newspaper,
  Megaphone,
  ExternalLink,
  BookOpen,
  Keyboard,
  ArrowRight,
  Mail,
  ZoomIn,
} from "lucide-react";

type ServiceAction = {
  label: string;
  type?: "modal";
  href?: string;
  variant?: "secondary";
};

type Service = {
  name: string;
  label: string;
  description: string;
  icon: LucideIcon;
  accentGlow: string;
  nodeColor: string;
  bubbleBg: string;
  bubbleBorder: string;
  bubbleText: string;
  tagline?: string;
  beta?: string;
  devNote?: string;
  pains: string[];
  actions: ServiceAction[];
  newFeatures?: {
    name: string;
    icon: typeof Newspaper;
    summary: string;
    highlights: string[];
    guideUrl: string;
    appUrl: string;
  }[];
};

const services: Service[] = [
  {
    name: "디대봇",
    label: "01 · 사내 지식/예약",
    description:
      "지금은 그룹웨어 게시글, 식단표, 회의실 현황, FAQ 정도만 학습해 이 범위 안의 질문에 답합니다. 회사 정보를 더 넓게 학습하면 훨씬 뛰어난 업무 도구가 될 수 있어요.",
    icon: Bot,
    accentGlow:
      "from-blue-500/30 via-sky-400/10 to-transparent",
    nodeColor: "bg-blue-500",
    bubbleBg: "bg-blue-50",
    bubbleBorder: "border-blue-100",
    bubbleText: "text-blue-950",
    pains: [
      "😤 그룹웨어 게시글, 사내 규정 검색이 어려워요.",
      "😩 오늘 점심메뉴가 뭘까요?",
      "🥲 매번 전화로 물어보기가 너무 미안해요.",
      "📅 2차 인증 때문에 밖에서 회의실 예약이 힘들어요.",
      "🔎 필요한 공지를 어디서 봤는지 기억이 안 나요.",
      "🙋 신규 입사자가 자주 묻는 질문을 매번 반복해서 답해요.",
    ],
    actions: [
      {
        label: "🤖 디대봇에 질문하기",
        type: "modal" as const,
      },
    ],
  },
  {
    name: "SEE:SIGN",
    label: "02 · 인사이트 시그널",
    tagline: "내외부 데이터를 인사이트로.",
    description:
      "디지털대성 직원이라면 누구나 뉴스, 광고, 커뮤니티부터 마이맥 Q&A와 수강후기, SNS까지 사내외 모든 데이터를 실무 인사이트로 전환할 수  있어요.",
    icon: PenLine,
    accentGlow:
      "from-cyan-500/30 via-teal-400/10 to-transparent",
    nodeColor: "bg-cyan-500",
    bubbleBg: "bg-cyan-50",
    bubbleBorder: "border-cyan-100",
    bubbleText: "text-cyan-950",
    pains: [
      "😫 트위터·커뮤니티에서 강사님 여론이 어떤지 날것의 반응이 궁금해요.",
      "⏳ 경쟁사 광고 디자인·카피를 매일 수집하기 힘들어요.",
      "😓 Q&A와 수강후기의 내용을 분석하고 싶어요.",
      "📝 아이들이 원하는 게 뭔지 파악해서 사은품을 기획하고 싶어요..",
      "📣 최신 교육 트렌드 뉴스를 매일 카테고리별로 알아서 요약 배달해줬으면 해요.",
      "🧠 경쟁사 유튜브 영상에 대한 반응이 궁금해요.",
    ],
    actions: [
      {
        label: "SEE:SIGN 시작하기",
        href: "https://seesign-admin.digitalds.store/",
      },
      {
        label: "SEE:SIGN 가이드 봇",
        href: "https://seesign.mintlify.app/guide/introduction",
        variant: "secondary" as const,
      },
    ],
    newFeatures: [
      {
        name: "뉴스 모니터링",
        icon: Newspaper,
        summary:
          "수집, 분석, 요약, 그리고 일간 레포트와 공유까지—뉴스 모니터링에 필요한 실무 동선을 단 SEE:SIGN 안에서 완벽하게 자동화해 드립니다.",
        highlights: [],
        guideUrl:
          "https://seesign.mintlify.app/guide/news/setting",
        appUrl:
          "https://seesign-admin.digitalds.store/news/browse",
      },
      {
        name: "광고 모니터링",
        icon: Megaphone,
        summary:
          "주요 광고 채널의 소재, 문구, 랜딩페이지를 자동 수집 및 분석해 광고 브리핑 리포트를 제공합니다.",
        highlights: [],
        guideUrl:
          "https://seesign-admin.digitalds.store/ads/list",
        appUrl:
          "https://seesign-admin.digitalds.store/ads/list",
      },
    ],
  },
  {
    name: "AiBle CHAT",
    label: "03 · 데이터 분석 AI 채팅",
    tagline: "엑셀을 올리고, 말로 물어보세요.",
    description:
      "엑셀 파일을 업로드하면 AI가 데이터를 읽고 표·인사이트·차트로 답해주는 분석 채팅입니다.",
    icon: Sparkles,
    accentGlow:"from-violet-500/30 via-fuchsia-400/10 to-transparent",
    nodeColor: "bg-violet-500",
    bubbleBg: "bg-violet-50",
    bubbleBorder: "border-violet-100",
    bubbleText: "text-violet-950",
    beta: "SEE:SIGN에서 다운받은 엑셀과 찰떡 궁합! SEE:SIGN 데이터를 바로 올려 분석해보세요.",
    pains: [
      "📊 GPT에 우리 회사, 우리 고객 데이터를 업로드하기 무서워요.",
      "🔍 Q&A 데이터에서 질문이 몰린 교재·페이지를 찾기 힘들어요.",
      "💬 수강후기·커뮤니티 글에서 반복되는 키워드를 정리하고 싶어요.",
      "📈 다양한 광고 데이터로 겹치지 않는 광고 카피를 기획하고 싶어요.",
      "🧮 커뮤니티, Q&A, 수강후기에서 우리 강사님의 개선점을 분석하고 싶어요.",
      "📋 분석 결과를 PDF로 저장해서 팀에 바로 공유하고 싶어요.",
    ],
    actions: [
      {
        label: "AiBle CHAT 시작하기",
        href: "https://aible-box.vercel.app/chat",
      },
    ],
  },
];

// SVG connector line paths — coordinates match the 3-col grid layout
// Left column right edge ≈ x:36, right column left edge ≈ x:64
// Core circle tangents ≈ x:44 (left) and x:56 (right)
// 3 cards per column spaced evenly: top cy≈17, mid cy≈50, bot cy≈83
const LEFT_PATHS = [
  "M 36 33 C 40 33 43 48 43 50",
  "M 36 50 L 43 50",
  "M 36 67 C 40 67 43 52 43 50",
];
const RIGHT_PATHS = [
  "M 64 33 C 60 33 57 48 57 50",
  "M 64 50 L 57 50",
  "M 64 67 C 60 67 57 52 57 50",
];

const seesignDataSources = [
  "뉴스",
  "GDN 광고",
  "메타 광고",
  "유튜브 광고",
  "디시인사이드",
  "네이버 카페",
  "오르비",
  "마이맥 데이터",
  "유튜브",
  "네이버 블로그",
  "X (트위터)",
];

const adMonitoringScreens = [
  {
    step: "01",
    title: "전체 광고 DB",
    description:
      "디지털대성이 봐야할 키워드·광고주별로 수집된 모든 광고. 카피부터 랜딩페이지까지 DB화했으니, 이젠 검색해보세요.",
    image: adDbScreenshot,
  },
  {
    step: "02",
    title: "스마트 아카이브",
    description:
      "원하는 키워드가 들어간 광고만 자동으로 모아 보는 나만의 폴더예요.",
    image: smartArchiveScreenshot,
  },
  {
    step: "03",
    title: "AI 광고 인사이트",
    description:
      "기간별 광고 카피·키워드·매체·형태를 AI가 한눈에 요약해 드려요.",
    image: adAiSummaryScreenshot,
  },
];

const newsMonitoringScreens = [
  {
    step: "01",
    title: "뉴스 육하원칙 분석",
    description:
      "나의 뉴스그룹이 수집한 기사를 AI가 육하원칙으로 분석하고, 한 줄로 요약해요.",
    image: newsAnalysisScreenshot,
  },
  {
    step: "02",
    title: "일간 뉴스 레포트",
    description:
      "뉴스그룹의 업무 & 관심사와 밀접한 최근 24시간의 기사만 골라, 설정한 시간에 메일로 보내드려요.",
    image: newsReportScreenshot,
  },
  {
    step: "03",
    title: "키워드 알림",
    description:
      "등록한 키워드가 포함된 뉴스가 발행되면 그룹웨어 메일로 바로 알려드려요.",
    image: newsAlertScreenshot,
  },
];

const aibleChatService = services.find(
  (s) => s.name === "AiBle CHAT",
)!;
const didaebotService = services.find((s) => s.name === "디대봇")!;
const seesignService = services.find((s) => s.name === "SEE:SIGN")!;

type ChatMessage = {
  variant: "bot" | "user";
  message: string;
  buttons?: [string, string];
};

const didaebotCurrentData = [
  "그룹웨어 게시글",
  "식단표",
  "회의실 현황",
  "FAQ",
];

type ComingSoonScenario = {
  dataSource: string;
  question: string;
  answer: string;
};

const didaebotComingSoonScenarios: ComingSoonScenario[] = [
  {
    dataSource: "직원별 업무분장표",
    question: "김승리 강사 담당자가 누구였지?",
    answer: "컨텐츠본부 XXX 프로입니다.",
  },
  {
    dataSource: "서비스·업무 담당 안내",
    question: "시사인에 대해 질문하려는데 누구한테 물어봐야 해?",
    answer: "경영기획팀 XXX 프로에게 문의하시면 됩니다.",
  },
  {
    dataSource: "MIS 프로젝트 이력",
    question:
      "작년 3월 이미지 강사 XXX 관련 프로모션 디자인 작업 누가 했지?",
    answer:
      "디자인은 XXX 프로, 기획은 XXX 프로, 개발은 XXX 프로가 진행했습니다.",
  },
  {
    dataSource: "MIS 업무 진행·마무리 이력",
    question:
      "저번 달 유대종 강사 XXX 프로모션 업무가 어떻게 진행됐고, 어떻게 마무리됐는지 알려줘.",
    answer:
      "XXX 프로와 XXX 프로가 협의해 기획 방향을 잡았고, ○○을 목표로 작업 방향이 결정되었습니다. 이후 기획·디자인·개발이 순차적으로 진행되어 △△으로 마무리되었습니다.",
  },
  {
    dataSource: "마이맥 어드민 · 시사인 매뉴얼 · 업무 매뉴얼",
    question:
      "강사님들 수강후기를 봐야 하는데 어떤 권한을 오픈 요청하면 되는 거야?",
    answer:
      "○○ 어드민 경로에서 확인할 수 있습니다. ○○ 품의서로 결재를 올리시고, 결재라인은 ○○ → ○○ 순으로 설정하시면 됩니다.",
  },
  {
    dataSource: "그룹웨어 결재·지출 안내",
    question:
      "이번 달 XXX 업체 지출결의서 상신하려는데 그룹웨어에서 어떻게 결재 올리면 되는 거야?",
    answer:
      "그룹웨어 → ○○ 메뉴 → ○○ 양식 선택 → 증빙 첨부 → 결재라인 ○○ → ○○ 설정 후 상신하시면 됩니다. 단계별로 안내해 드릴게요.",
  },
];

const didaebotConversation: ChatMessage[] = [
  { variant: "user", message: "오늘 점심 뭐야?" },
  {
    variant: "bot",
    message:
      "2026년 6월 18일 점심 식단입니다.\nA코너 : 순대국밥&소면사리, 백미밥, 명란 떡갈비, 두부조림, 부추겉절이, 깍두기\nB코너 : 소고기짜장덮밥, 짬뽕국, 찹쌀탕수육, 물만두찜, 삼색냉채, 배추김치",
  },
  { variant: "user", message: "이번달 특식 뭐야?" },
  {
    variant: "bot",
    message:
      "이번 6월 특식은 임직원 투표 결과 최다 득표를 받은 '냉면&삼겹살'입니다.",
  },
  {
    variant: "user",
    message:
      "나 지금 24320원 있는데 솔트 휘낭시에 최대한 많이 사고 얼마 남아?",
  },
  {
    variant: "bot",
    message:
      "D.DDLE 카페에서 솔트 휘낭시에는 개당 2,500원이므로 24,320원으로 9개를 구매할 수 있으며, 1,820원이 남습니다.",
  },
  { variant: "user", message: "오늘 비어있는 회의실 알려줘." },
  {
    variant: "bot",
    message:
      "2026년 6월 19일 회의실별 사용 가능한 시간은 다음과 같습니다.\n1. 6-A • 17:00 ~ 18:00\n2. 7-1 • 11:30 ~ 14:00",
  },
  { variant: "user", message: "7-1회의실 12시~13시 예약해" },
  {
    variant: "bot",
    message: "6월 19일 12:00 ~ 13:00 7-1 예약하시겠습니까?",
    buttons: ["네", "아니요"],
  },
  { variant: "user", message: "우리 회사 복지가 뭐뭐 있어?" },
  {
    variant: "bot",
    message:
      "디지털대성 복지로는 생일 반차, 패밀리데이, 건강검진, 경조휴가 및 비용지원, 사내 식당, 쏘카 지원, 휘트니스 지원 등이 있습니다.",
  },
  {
    variant: "user",
    message: "인사제도, 인사평가제도가 어떻게 바뀐거야?",
  },
  {
    variant: "bot",
    message:
      "인사제도는 사원-프로 2단계 직위체계로 개편되었고, 프로 전환 연한이 4년으로 단축됩니다. 인사평가는 10월에 온라인 평가도구로 부서별 항목에 맞춰 성과 향상 중심으로 진행되며, 인센티브는 12월에 지급됩니다.",
  },
  { variant: "user", message: "오늘 내가 예약한 회의실 전부 취소해." },
  {
    variant: "bot",
    message: "6월 19일 12:00 ~ 13:00 7-1 취소하시겠습니까?",
    buttons: ["네", "아니요"],
  },
];

function ChatBubble({
  message,
  variant,
  buttons,
}: ChatMessage) {
  if (variant === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[88%] rounded-[18px] rounded-tr-sm bg-[#FEE500] px-4 py-3 text-[15px] font-medium leading-6 text-slate-900 shadow-sm">
          {message}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2.5">
      <div className="grid h-10 w-10 flex-none place-items-center rounded-full bg-[#3C1E1E] shadow-md">
        <Bot className="h-5 w-5 text-white" />
      </div>
      <div className="max-w-[78%] rounded-[18px] rounded-tl-sm bg-white px-4 py-3 text-[15px] leading-6 text-slate-800 shadow-sm">
        <p className="whitespace-pre-line">{message}</p>
        {buttons && (
          <div className="mt-3 flex gap-2 border-t border-slate-100 pt-3">
            {buttons.map((label) => (
              <span
                key={label}
                className="flex-1 rounded-lg bg-[#F2F3F5] py-2 text-center text-sm font-medium text-slate-700"
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function DidaebotSection({ onOpenGuide }: { onOpenGuide: () => void }) {
  const { description } = didaebotService;

  return (
    <div className="space-y-10 md:space-y-12">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 flex-none place-items-center rounded-full bg-[#3C1E1E] text-white shadow-lg shadow-[#3C1E1E]/30">
              <Bot className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold tracking-[-0.03em] text-slate-900 md:text-5xl">
              디대봇
            </h3>
          </div>

          <p className="mt-5 text-lg leading-8 text-slate-800/85 md:text-xl md:leading-9">
            {description}
          </p>

          <div className="mt-6">
            <p className="text-xs font-bold tracking-[0.12em] text-[#3C1E1E]/70">
              현재 학습 데이터
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {didaebotCurrentData.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#3C1E1E]/15 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#3C1E1E] shadow-sm md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Button
            onClick={onOpenGuide}
            style={{ boxShadow: "0 6px 0 rgba(0,0,0,0.25)" }}
            className="mt-8 h-14 w-full rounded-2xl bg-[#191919] text-base font-bold text-white transition-all duration-100 hover:bg-[#2d2d2d] active:translate-y-1 active:shadow-none sm:w-fit sm:px-10"
          >
            🤖 디대봇 사용하기
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="pointer-events-none absolute -inset-4 rounded-[2.75rem] bg-[#3C1E1E]/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-black/10 bg-[#ABC1D1] shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-3 border-b border-black/5 bg-[#3C1E1E] px-5 py-4">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#FEE500]">
                <Bot className="h-5 w-5 text-[#3C1E1E]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">디대봇</p>
                <p className="text-xs text-white/60">디지털대성 AI 오피스 메이트</p>
              </div>
            </div>

            <div className="flex max-h-[560px] flex-col gap-3 overflow-y-auto px-4 py-5 md:gap-3.5 md:px-5 md:py-6">
              {didaebotConversation.map((msg, i) => (
                <ChatBubble key={i} {...msg} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-[#3C1E1E]/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm md:rounded-[2.5rem] md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[#3C1E1E] px-3 py-1 text-xs font-bold tracking-[0.14em] text-white uppercase">
            Coming Soon
          </span>
          <h4 className="text-xl font-bold text-[#3C1E1E] md:text-2xl">
            곧 학습할 데이터 · 더 똑똑해지는 답변
          </h4>
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
          디대봇이 회사 정보를 더 넓게 학습하면, 담당자 안내·프로젝트 이력·권한
          요청·결재 방법까지 한 번에 답해 줄 수 있습니다.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {didaebotComingSoonScenarios.map((scenario) => (
            <article
              key={scenario.dataSource}
              className="rounded-2xl border border-[#3C1E1E]/10 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-bold tracking-[0.08em] text-[#3C1E1E]/70">
                {scenario.dataSource}
              </p>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
                Q. {scenario.question}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A. {scenario.answer}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#3C1E1E]/15 bg-[#3C1E1E]/[0.06] px-5 py-4">
          <Mail className="mt-0.5 h-5 w-5 flex-none text-[#3C1E1E]" />
          <p className="text-sm leading-6 text-slate-800">
            디대봇이 추가로 학습했으면 하는 데이터가 있다면{" "}
            <span className="font-bold text-[#3C1E1E]">
              경영기획팀 심준혁 프로
            </span>
            에게 요청해 주세요.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactNotice({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
      <Mail className="mt-0.5 h-4 w-4 flex-none text-white" />
      <p className="text-xs leading-5 text-white/90 md:text-sm md:leading-6">
        {children}
      </p>
    </div>
  );
}

function FeatureScreenCard({
  step,
  title,
  description,
  image,
}: {
  step: string;
  title: string;
  description: string;
  image: string;
}) {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-white p-4 shadow-lg md:p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-[#5e72e4] text-sm font-black text-white shadow-sm">
            {step}
          </span>
          <h5 className="text-base font-bold leading-snug text-slate-900 md:text-lg">
            {title}
          </h5>
        </div>

        <button
          type="button"
          onClick={() => setPreviewOpen(true)}
          aria-label={`${title} 화면 크게 보기`}
          className="group relative mt-3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 text-left shadow-md transition-all hover:border-[#5e72e4]/30 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5e72e4]/40"
        >
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <p className="min-w-0 flex-1 truncate text-center text-xs font-semibold text-[#5e72e4] md:text-sm">
              SEE:SIGN · {title}
            </p>
          </div>

          <div className="relative">
            <img
              src={image}
              alt={title}
              className="block h-44 w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.02] sm:h-48 md:h-52 lg:h-56"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#5e72e4]/0 transition-colors duration-200 group-hover:bg-[#5e72e4]/[0.06]" />
            <span className="pointer-events-none absolute right-2 bottom-2 flex items-center gap-1 rounded-md bg-slate-900/35 px-1.5 py-1 text-[10px] text-white/80 opacity-60 backdrop-blur-[2px] transition-opacity group-hover:opacity-100 md:text-[11px]">
              <ZoomIn className="h-3 w-3" />
              <span className="hidden sm:inline">클릭하여 확대</span>
            </span>
          </div>
        </button>

        <p className="mt-3 text-sm leading-6 text-slate-600 md:mt-4 md:text-[15px] md:leading-7">
          {description}
        </p>
      </article>

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="flex max-h-[96vh] w-[calc(100vw-1rem)] !max-w-[calc(100vw-1rem)] flex-col gap-2 overflow-hidden p-2 sm:w-[calc(100vw-2rem)] sm:!max-w-[1400px] sm:p-3">
          <DialogHeader className="shrink-0 space-y-1 px-1">
            <DialogTitle className="text-base md:text-lg">{title}</DialogTitle>
            <DialogDescription className="text-left text-xs leading-5 text-slate-500 md:text-sm">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="min-h-0 flex-1 overflow-auto rounded-lg border border-slate-200 bg-slate-50">
            <img
              src={image}
              alt={title}
              className="block h-auto w-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function SeesignSection() {
  const { description, pains, actions, newFeatures } = seesignService;

  return (
    <div className="space-y-12 md:space-y-16">
      {/* ── Intro ── */}
      <div className="text-center">
        <img
          src={seesignLogo}
          alt="SEE:SIGN"
          className="mx-auto h-10 w-auto md:h-12"
        />
        <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold leading-8 text-[#5e72e4] md:text-xl">
          디지털대성 전용 · 내외부 데이터 플랫폼
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>
      </div>

      {/* ── Data Hub ── */}
      <div className="relative overflow-hidden rounded-[2rem] border border-[#5e72e4]/15 bg-gradient-to-br from-[#5e72e4]/[0.07] via-white to-[#5e72e4]/[0.04] p-6 md:rounded-[2.5rem] md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(94,114,228,0.12),transparent_65%)]" />

        <p className="relative mb-8 text-center text-sm font-bold tracking-[0.18em] text-[#5e72e4] uppercase">
          Connected Data Sources
        </p>

        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 flex flex-wrap justify-center gap-2 md:gap-2.5">
            {seesignDataSources.slice(0, 6).map((source) => (
              <span
                key={source}
                className="rounded-full border border-[#5e72e4]/20 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#4a5fd1] shadow-sm md:text-sm"
              >
                {source}
              </span>
            ))}
          </div>

          <div className="relative mx-auto flex max-w-sm flex-col items-center">
            <div className="hidden h-8 w-px bg-[#5e72e4]/30 md:block" />
            <div className="relative grid place-items-center rounded-full border-4 border-[#5e72e4]/20 bg-white p-6 shadow-[0_20px_60px_rgba(94,114,228,0.25)] md:p-8">
              <div className="absolute -inset-3 rounded-full bg-[#5e72e4]/10 blur-xl" />
              <img
                src={seesignLogo}
                alt=""
                className="relative h-8 w-auto md:h-10"
              />
              <p className="relative mt-3 text-center text-xs font-bold text-[#5e72e4] md:text-sm">
                모든 데이터가
                <br />
                SEE:SIGN에 연결
              </p>
            </div>
            <div className="hidden h-8 w-px bg-[#5e72e4]/30 md:block" />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-2.5">
            {seesignDataSources.slice(6).map((source) => (
              <span
                key={source}
                className="rounded-full border border-[#5e72e4]/20 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#4a5fd1] shadow-sm md:text-sm"
              >
                {source}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Use Cases ── */}
      <div>
        <h3 className="mb-5 text-center text-xl font-bold text-slate-900 md:text-2xl">
          이렇게 활용해 보세요
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#5e72e4]/10 bg-white px-4 py-4 text-sm leading-6 text-slate-700 shadow-sm md:px-5 md:py-5 md:text-[15px]"
            >
              {pain}
            </div>
          ))}
        </div>
      </div>

      {/* ── CTAs + Guide Tip ── */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          {actions.map((action) => (
            <Button
              key={action.label}
              variant={action.variant === "secondary" ? "outline" : "default"}
              style={
                action.variant === "secondary"
                  ? { boxShadow: "0 4px 0 rgba(94,114,228,0.25)" }
                  : { boxShadow: "0 4px 0 #3d4fb8" }
              }
              className={`h-12 rounded-2xl px-8 text-sm font-semibold transition-all duration-100 active:translate-y-1 active:shadow-none ${
                action.variant === "secondary"
                  ? "border-[#5e72e4]/30 bg-white text-[#5e72e4] hover:bg-[#5e72e4]/5"
                  : "bg-[#5e72e4] text-white hover:bg-[#4a5fd1]"
              }`}
              onClick={() => {
                if (action.href) window.open(action.href, "_blank");
              }}
            >
              {action.label}
            </Button>
          ))}
        </div>

        <div className="flex max-w-xl items-start gap-3 rounded-2xl border border-[#5e72e4]/15 bg-[#5e72e4]/[0.06] px-5 py-4">
          <Keyboard className="mt-0.5 h-5 w-5 flex-none text-[#5e72e4]" />
          <p className="text-sm leading-6 text-slate-600">
            <span className="font-semibold text-[#5e72e4]">가이드 팁</span> —
            가이드 페이지에 들어가서{" "}
            <kbd className="rounded border border-[#5e72e4]/25 bg-white px-1.5 py-0.5 font-mono text-xs font-bold text-[#5e72e4]">
              Ctrl
            </kbd>{" "}
            +{" "}
            <kbd className="rounded border border-[#5e72e4]/25 bg-white px-1.5 py-0.5 font-mono text-xs font-bold text-[#5e72e4]">
              I
            </kbd>{" "}
            를 누르면 SEE:SIGN 가이드 챗봇이 열려요.
          </p>
        </div>
      </div>

      {/* ── NEW Features (강조) ── */}
      {newFeatures && (
        <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#3d4fb8] via-[#5e72e4] to-[#7b8eed] p-1 shadow-[0_24px_60px_rgba(94,114,228,0.35)] md:rounded-[2rem]">
          <div className="rounded-[1.6rem] bg-gradient-to-br from-[#2f3fa8] via-[#4a5fd1] to-[#5e72e4] md:rounded-[1.85rem]">
            <div className="border-b border-white/10 px-5 py-5 text-center md:px-8 md:py-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[11px] font-black tracking-[0.18em] text-[#5e72e4] uppercase shadow-lg">
                ✦ NEW · 2026
              </span>
              <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                이번에 새로 오픈한 기능
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-white/80 md:text-base">
                뉴스 모니터링 · 광고 모니터링 — 수집부터 분석·리포트·알림까지
                SEE:SIGN 하나로
              </p>
            </div>

            {/* ── 광고 모니터링 ── */}
            <div className="border-b border-white/10 px-4 py-5 md:px-8 md:py-6">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-[#5e72e4] shadow-lg">
                    <Megaphone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-white/60 uppercase">
                      Ad Monitoring
                    </p>
                    <h4 className="text-xl font-bold text-white md:text-2xl">
                      광고 모니터링
                    </h4>
                    <p className="mt-0.5 text-xs text-white/70 md:text-sm">
                      GDN · META · YOUTUBE 등 주요 채널 광고를 자동 수집·분석
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                  <Button
                    className="h-9 gap-2 rounded-lg bg-white px-4 text-xs font-bold text-[#5e72e4] hover:bg-white/90 md:h-10 md:px-5 md:text-sm"
                    onClick={() =>
                      window.open(
                        "https://seesign-admin.digitalds.store/ads/list",
                        "_blank",
                      )
                    }
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    광고 모니터링 바로가기
                  </Button>
                  <Button
                    variant="outline"
                    className="h-9 gap-2 rounded-lg border-white/30 bg-white/10 px-4 text-xs font-semibold text-white hover:bg-white/20 md:h-10 md:px-5 md:text-sm"
                    onClick={() =>
                      window.open(
                        "https://seesign-admin.digitalds.store/ads/list",
                        "_blank",
                      )
                    }
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    가이드 보기
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
                {adMonitoringScreens.map((screen) => (
                  <FeatureScreenCard key={screen.step} {...screen} />
                ))}
              </div>
              <p className="mt-2 text-right text-[11px] text-white/40">
                화면을 클릭하면 크게 볼 수 있어요
              </p>

              <div className="mt-4">
                <ContactNotice>
                  광고 수집·조회, 나만의 광고 아카이브를 만들고 싶으시면{" "}
                  <strong className="font-bold text-white">
                    경영기획팀 심준혁 프로
                  </strong>
                  에게 연락해 주세요.
                </ContactNotice>
              </div>
            </div>

            {/* ── 뉴스 모니터링 ── */}
            <div className="px-4 py-5 md:px-8 md:py-6">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-[#5e72e4] shadow-lg">
                    <Newspaper className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-white/60 uppercase">
                      News Monitoring
                    </p>
                    <h4 className="text-xl font-bold text-white md:text-2xl">
                      뉴스 모니터링
                    </h4>
                    <p className="mt-0.5 text-xs text-white/70 md:text-sm">
                      키워드 수집 · AI 분석 · 일간 레포트 · 실시간 알림
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                  <Button
                    className="h-9 gap-2 rounded-lg bg-white px-4 text-xs font-bold text-[#5e72e4] hover:bg-white/90 md:h-10 md:px-5 md:text-sm"
                    onClick={() =>
                      window.open(
                        "https://seesign-admin.digitalds.store/news/browse",
                        "_blank",
                      )
                    }
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    뉴스 모니터링 바로가기
                  </Button>
                  <Button
                    variant="outline"
                    className="h-9 gap-2 rounded-lg border-white/30 bg-white/10 px-4 text-xs font-semibold text-white hover:bg-white/20 md:h-10 md:px-5 md:text-sm"
                    onClick={() =>
                      window.open(
                        "https://seesign.mintlify.app/guide/news/setting",
                        "_blank",
                      )
                    }
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    가이드 보기
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
                {newsMonitoringScreens.map((screen) => (
                  <FeatureScreenCard key={screen.step} {...screen} />
                ))}
              </div>
              <p className="mt-2 text-right text-[11px] text-white/40">
                화면을 클릭하면 크게 볼 수 있어요
              </p>

              <div className="mt-4">
                <ContactNotice>
                  뉴스 모니터링 그룹을 새로 만들고 싶으시면{" "}
                  <strong className="font-bold text-white">
                    경영기획팀 심준혁 프로
                  </strong>
                  에게 연락해 주세요.
                </ContactNotice>
              </div>
            </div>

            <div className="border-t border-white/10 px-4 py-3 text-center md:px-6">
              <p className="inline-flex flex-wrap items-center justify-center gap-1.5 text-xs text-white/80 md:text-sm">
                <Keyboard className="h-3.5 w-3.5" />
                가이드에서{" "}
                <kbd className="rounded bg-white/15 px-1.5 py-0.5 font-mono text-[10px] md:text-xs">
                  Ctrl + I
                </kbd>{" "}
                → SEE:SIGN 가이드 챗봇에게 바로 질문
                <ArrowRight className="h-3.5 w-3.5" />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ServiceSection({
  service,
  onOpenGuide,
}: {
  service: Service;
  onOpenGuide: () => void;
}) {
  const Icon = service.icon;

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_24px_90px_rgba(15,23,42,0.08)]">
        <div
          className={`absolute -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${service.accentGlow} blur-3xl right-12`}
        />

        <div className="relative grid gap-0 lg:grid-cols-[0.9fr_1.3fr]">
          <div className="flex flex-col justify-between border-b border-slate-100 p-6 lg:border-b-0 lg:border-r lg:p-8">
            <div>
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-slate-950 text-white shadow-xl">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl">
                    {service.name}
                  </h2>
                  {service.tagline && (
                    <p className="mt-1 text-base font-medium text-slate-400">
                      {service.tagline}
                    </p>
                  )}
                </div>
              </div>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {service.description}
              </p>

              {service.beta && (
                <div className="mt-4 flex items-start gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3">
                  <span className="mt-0.5 flex-none rounded-full bg-violet-500 px-2 py-0.5 text-[11px] font-bold text-white tracking-wide">
                    BETA
                  </span>
                  <p className="text-sm text-violet-700">{service.beta}</p>
                </div>
              )}
              {service.devNote && (
                <div className="mt-3 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                  <span className="mt-0.5 flex-none rounded-full bg-amber-400 px-2 py-0.5 text-[11px] font-bold text-white tracking-wide">
                    DEV
                  </span>
                  <p className="text-sm text-amber-800">{service.devNote}</p>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {service.actions.map((action) => (
                <Button
                  key={action.label}
                  variant={
                    action.variant === "secondary" ? "outline" : "default"
                  }
                  style={
                    action.variant === "secondary"
                      ? { boxShadow: "0 5px 0 #cbd5e1" }
                      : { boxShadow: "0 5px 0 #0f172a" }
                  }
                  className={`h-12 w-full rounded-2xl text-sm font-semibold transition-all duration-100 active:translate-y-[4px] active:shadow-none ${
                    action.variant === "secondary"
                      ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      : "bg-slate-800 text-white hover:bg-slate-700"
                  }`}
                  onClick={() => {
                    if (action.type === "modal") onOpenGuide();
                    if (action.href) window.open(action.href, "_blank");
                  }}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="relative bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,#f8fbff_50%,#eef4ff_100%)] p-4 md:p-6">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {LEFT_PATHS.map((d, i) => (
                <path
                  key={`l${i}`}
                  d={d}
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="0.8"
                  strokeDasharray="3 4"
                />
              ))}
              {RIGHT_PATHS.map((d, i) => (
                <path
                  key={`r${i}`}
                  d={d}
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="0.8"
                  strokeDasharray="3 4"
                />
              ))}
            </svg>

            <div className="relative grid h-full min-h-[420px] grid-cols-[1fr_auto_1fr] items-stretch gap-x-3 md:min-h-[460px]">
              <div className="flex flex-col justify-center gap-3 py-1">
                {service.pains.slice(0, 3).map((pain, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border px-3 py-3 text-xs leading-5 shadow-sm md:px-4 md:text-sm md:leading-6 ${service.bubbleBg} ${service.bubbleBorder} ${service.bubbleText}`}
                  >
                    {pain}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center px-1">
                <div className="relative grid h-28 w-28 flex-none place-items-center rounded-full bg-slate-950 text-center text-white shadow-[0_20px_60px_rgba(15,23,42,0.35)] md:h-32 md:w-32">
                  <div
                    className={`absolute -inset-4 rounded-full bg-gradient-to-br ${service.accentGlow} blur-lg`}
                  />
                  <div className="relative px-2">
                    <Icon className="mx-auto mb-1.5 h-7 w-7 md:h-8 md:w-8" />
                    <p className="text-xs font-bold leading-4 md:text-sm">
                      {service.name}
                    </p>
                    <p className="mt-0.5 text-[10px] text-white/60">
                      solution core
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3 py-1">
                {service.pains.slice(3, 6).map((pain, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border px-3 py-3 text-xs leading-5 shadow-sm md:px-4 md:text-sm md:leading-6 ${service.bubbleBg} ${service.bubbleBorder} ${service.bubbleText}`}
                  >
                    {pain}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {service.newFeatures && (
          <div className="bg-gradient-to-br from-cyan-950 to-slate-900">
            <div className="flex items-center gap-3 px-6 py-5 md:px-8">
              <span className="flex items-center gap-1.5 rounded-full bg-cyan-400 px-2.5 py-1 text-[11px] font-bold tracking-wide text-cyan-950">
                ✦ NEW
              </span>
              <span className="font-semibold text-white">
                신규 기능 오픈 — 뉴스 모니터링 · 광고 모니터링
              </span>
            </div>

            <div className="grid gap-4 px-6 pb-6 pt-0 md:grid-cols-2 md:px-8 md:pb-8">
              {service.newFeatures.map((feature) => {
                const FIcon = feature.icon;
                return (
                  <div
                    key={feature.name}
                    className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" />

                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <div className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-cyan-400 text-cyan-950 shadow-lg">
                          <FIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400/70">
                            신규 오픈
                          </p>
                          <h3 className="font-bold text-white leading-tight">
                            {feature.name}
                          </h3>
                        </div>
                      </div>

                      <p className="text-base font-medium leading-7 text-white/90">
                        {feature.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-2">
                      <Button
                        className="h-10 w-full gap-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-cyan-950 text-sm font-semibold"
                        onClick={() =>
                          window.open(feature.appUrl, "_blank")
                        }
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {feature.name} 바로가기
                      </Button>
                      <Button
                        variant="outline"
                        className="h-10 w-full gap-2 rounded-xl border-white/30 bg-white/10 text-white hover:bg-white/20 text-sm"
                        onClick={() =>
                          window.open(feature.guideUrl, "_blank")
                        }
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        가이드 보기
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
  );
}

export default function App() {
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-blue-200/70">
      {/* ── Hero ── */}
      <section className="relative px-5 py-10 md:px-8 md:py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(139,92,246,0.18),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#ffffff_46%,#f2f7ff_100%)]" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 text-white">
              <Network className="h-4 w-4" />
            </div>
            <span className="font-semibold tracking-[-0.01em]">
              디지털대성 AI도구, [디대봇 · SEE:SIGN · AiBle
              CHAT] 오픈{" "}
            </span>
          </div>
          <span className="hidden rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600 md:inline-flex items-center gap-1.5">
            경영기획팀
          </span>
        </nav>

        <div className="relative z-10 mx-auto max-w-5xl py-16 text-center md:py-28">
          <p className="mx-auto max-w-2xl text-xl text-slate-600 md:text-2xl">
            디지털대성 임직원의 업무 편의를 위한
            <br />
            AI 오피스 메이트
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] md:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              디대봇 · SEE:SIGN · AiBle CHAT
            </span>
          </h1>
          <div className="mx-auto mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-blue-100 bg-white/80 px-6 py-4 text-lg font-semibold text-slate-900 shadow-lg shadow-blue-100/60 backdrop-blur md:text-2xl">
            <Sparkles className="h-7 w-7 text-violet-600 md:h-8 md:w-8" />
            디지털대성 전용 AI도구 3가지를 공개합니다!
          </div>
        </div>
      </section>

      {/* ── Service sections ── */}
      <main className="relative pb-16 md:pb-24">
        <div className="space-y-10">
          {/* ── 디대봇 (카카오톡 스타일) ── */}
          <div className="w-full bg-[#FEE500] py-8 md:py-12">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <h2 className="mb-8 flex items-center justify-center gap-4 text-center text-3xl font-bold tracking-[-0.02em] text-[#3C1E1E] md:mb-10 md:gap-5 md:text-4xl">
                <img
                  src={kakaotalkLogo}
                  alt="카카오톡"
                  className="h-14 w-14 flex-none object-contain md:h-16 md:w-16"
                />
                카톡으로 물어보세요. 디대봇이 답합니다.
              </h2>
              <DidaebotSection onOpenGuide={() => setGuideModalOpen(true)} />
            </div>
          </div>

          {/* ── SEE:SIGN ── */}
          <div className="w-full bg-gradient-to-b from-[#5e72e4]/[0.06] via-white to-[#5e72e4]/[0.04] py-10 md:py-14">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <SeesignSection />
            </div>
          </div>
        </div>
      </main>

      {/* ── AiBle BOX + AiBle CHAT ── */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#050505] to-violet-400">
        {/* ── Coming Soon ── */}
        <div className="relative px-6 py-24 md:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Coming Soon
            </div>

            <div className="mb-6 flex items-center justify-center gap-4 flex-wrap">
              <span className="text-5xl font-bold tracking-[-0.04em] text-white md:text-7xl">
                AI
              </span>
              <span className="text-4xl font-light text-white/20 md:text-6xl">
                +
              </span>
              <span className="text-5xl font-bold tracking-[-0.04em] text-white md:text-7xl">
                ABLE
              </span>
              <span className="text-4xl font-light text-white/20 md:text-6xl">
                =
              </span>
              <span className="text-5xl font-bold tracking-[-0.04em] bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent md:text-7xl">
                AiBle
              </span>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-white/40 md:text-xl">
              내 동료를 위한 업무 도구를{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                AI
              </span>
              로 직접 코딩하고 배포하며,
              <br />
              혁신의 일상화를{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                가능
              </span>
              하게 하는{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                디지털대성
              </span>
              의 CREW
            </p>

            <p className="mt-10 text-sm text-white/50">
              AiBle BOX · 디지털대성 AI 도구 플랫폼
            </p>
          </div>
        </div>

        {/* ── AiBle 첫번째 업무 도구 ── */}
        <div className="relative px-5 md:px-8">
          <div className="relative mx-auto max-w-4xl pb-10 text-center md:pb-14">
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="hidden h-px w-16 bg-gradient-to-r from-transparent to-white/30 sm:block" />
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-violet-100" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-white uppercase">
                  AiBle Launch · 01
                </span>
              </div>
              <span className="hidden h-px w-16 bg-gradient-to-l from-transparent to-white/30 sm:block" />
            </div>

            <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-6xl">
              <span className="text-white/80">AiBle의 첫번째 업무 도구 </span>
             
            </h2>
          </div>

          <div className="relative mx-auto max-w-7xl pb-16 md:pb-24">
            <ServiceSection
              service={aibleChatService}
              onOpenGuide={() => setGuideModalOpen(true)}
            />
          </div>
        </div>
      </div>

      <GuideModal
        open={guideModalOpen}
        onOpenChange={setGuideModalOpen}
      />
    </div>
  );
}