import { Amount } from '@/components';

interface PerPersonSplitCardProps {
  perPersonAmount: number;
}

export function PerPersonSplitCard({
  perPersonAmount,
}: PerPersonSplitCardProps) {
  return (
    <div className="flex flex-col gap-1.5 rounded-card bg-preview-surface p-5 text-preview-foreground">
      <span className="text-body-md text-preview-foreground/85">
        이 지출 기준 각자
      </span>
      <Amount
        value={perPersonAmount}
        className="text-display tracking-tight text-preview-foreground"
      />
    </div>
  );
}
