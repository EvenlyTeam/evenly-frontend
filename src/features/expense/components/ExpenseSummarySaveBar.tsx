import { Button } from '@/components';

interface ExpenseSummarySaveBarProps {
  checkedCount: number;
  perPersonAmount: number;
  canSave: boolean;
}

export function ExpenseSummarySaveBar({
  checkedCount,
  perPersonAmount,
  canSave,
}: ExpenseSummarySaveBarProps) {
  return (
    <div className="sticky bottom-0 z-10 flex h-16 shrink-0 items-center justify-between border-t border-[rgb(197,213,236)] bg-preview-surface px-4">
      <span className="text-heading-sm font-bold text-preview-foreground tabular-nums">
        {checkedCount}명 분담 · 각자 {perPersonAmount.toLocaleString('ko-KR')}원
      </span>
      {/* @TODO: 저장 클릭 */}
      <Button size="sm" disabled={!canSave}>
        저장
      </Button>
    </div>
  );
}
