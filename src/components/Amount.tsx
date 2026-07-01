import { cn } from '@/utils/cn';

interface AmountProps {
  value: number;
  signed?: boolean;
  className?: string;
}

export function Amount({ value, signed = false, className }: AmountProps) {
  const sign = value > 0 ? '+' : value < 0 ? '−' : '';
  const formatted = Math.abs(value).toLocaleString('ko-KR');
  const text = signed ? `${sign}${formatted}원` : `${formatted}원`;

  const colorClass = !signed
    ? 'text-foreground'
    : value > 0
      ? 'text-positive'
      : value < 0
        ? 'text-negative'
        : 'text-foreground';

  return (
    <span className={cn('tabular-nums', colorClass, className)}>{text}</span>
  );
}
