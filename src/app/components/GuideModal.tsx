import { QRCodeSVG } from "qrcode.react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { CtaButton } from "./CtaButton";
import { FileText, MessageCircle } from "lucide-react";

interface GuideModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DIDAEBOT_URL = "https://pf.kakao.com/_QGQxlX";
const GUIDE_URL = "https://drive.google.com/file/d/1h2haDAJMYf22l1e5xZyA5M4OOvlO7v2j/view?usp=sharing";

export function GuideModal({ open, onOpenChange }: GuideModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">디대봇 빠르게 시작하기</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-2">
          {/* QR 코드 */}
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-md">
              <QRCodeSVG
                value={DIDAEBOT_URL}
                size={200}
                bgColor="#ffffff"
                fgColor="#0f172a"
                level="M"
              />
            </div>
            <p className="text-sm text-slate-500">QR코드를 스캔하면 디대봇으로 바로 이동합니다</p>
          </div>

          {/* 구분선 */}
          <div className="flex w-full items-center gap-3">
            <div className="h-px flex-1 bg-slate-100" />
            <span className="text-xs text-slate-400">또는</span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          {/* 모바일 접속 안내 */}
          <div className="flex w-full flex-col items-center gap-3 rounded-xl bg-slate-50 p-4 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              모바일로 접속하신 분들은 아래 버튼으로 접속하여 디대봇을 시작하세요.
            </p>
            <CtaButton
              className="h-12 w-full gap-2 rounded-xl"
              onClick={() => window.open(DIDAEBOT_URL, "_blank")}
            >
              <MessageCircle className="h-4 w-4" />
              디대봇 시작하기
            </CtaButton>
          </div>

          {/* 가이드 보기 */}
          <div className="flex w-full flex-col items-center gap-2">
            <CtaButton
              className="h-12 w-full gap-2 rounded-xl bg-slate-950 hover:bg-slate-800"
              onClick={() => window.open(GUIDE_URL, "_blank")}
            >
              <FileText className="h-4 w-4" />
              디대봇 가이드 보기
            </CtaButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
