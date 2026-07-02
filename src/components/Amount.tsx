import { cn } from '@/utils/cn';

interface AmountProps {
  value: number;
  signed?: boolean;
  emphasizePositive?: boolean;
  className?: string;
}

// @TODO: Amount 인터페이스 개선 방안 고려, 현재 도메인에 묶여있는 듯
export function Amount({
  value,
  signed = false,
  emphasizePositive = true,
  className,
}: AmountProps) {
  const isNegative = value < 0;
  const isPositive = value > 0;
  const showPlusSign = signed && isPositive && emphasizePositive;
  const showMinusSign = signed && isNegative;

  const sign = showMinusSign ? '−' : showPlusSign ? '+' : '';
  const formatted = Math.abs(value).toLocaleString('ko-KR');
  const text = `${sign}${formatted}원`;

  return (
    <span
      className={cn(
        'tabular-nums',
        'text-foreground',
        className,
        showPlusSign && 'text-positive',
        showMinusSign && 'text-negative',
      )}
    >
      {text}
    </span>
  );
}
