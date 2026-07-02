import { cn } from '@/utils/cn';
import { formatNumber } from '@/utils/format';

interface AmountFieldProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  quickAddAmounts?: number[];
  onQuickAdd?: (amount: number) => void;
  onClear?: () => void;
  placeholder?: string;
  className?: string;
}

const DEFAULT_QUICK_ADD_AMOUNTS = [10000, 50000, 100000];

function formatQuickAddLabel(amount: number): string {
  return `+${formatNumber(amount / 10000)}만`;
}

// @TODO: QuickAddAmounts 분리 고려, 공용 컴포넌트는 className을 항상 열어놓아야 할까?ㄴ
export function AmountField({
  id,
  label,
  value,
  onChange,
  quickAddAmounts = DEFAULT_QUICK_ADD_AMOUNTS,
  onQuickAdd,
  onClear,
  placeholder = '0',
  className,
}: AmountFieldProps) {
  const display = value > 0 ? formatNumber(value) : '';

  const handleChange = (raw: string) => {
    const digits = raw.replace(/[^\d]/g, '');
    onChange(digits === '' ? 0 : Number(digits));
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-label text-muted-foreground"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          inputMode="numeric"
          placeholder={placeholder}
          value={display}
          onChange={(event) => handleChange(event.target.value)}
          className={cn(
            'h-12 w-full rounded-input border border-border bg-input pr-9 pl-3.5 font-sans text-heading-sm font-semibold text-foreground tabular-nums transition-all duration-150 outline-none placeholder:font-normal placeholder:text-subtle-foreground focus:border-primary focus:ring-3 focus:ring-primary/35',
            className,
          )}
        />
        <span className="absolute top-1/2 right-4 -translate-y-1/2 text-body-lg text-muted-foreground">
          원
        </span>
      </div>

      <div className="mt-2.5 flex gap-2">
        {quickAddAmounts.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => onQuickAdd?.(amount)}
            className="inline-flex h-8 cursor-pointer items-center rounded-full border border-border bg-surface px-3.25 text-body-sm font-medium text-muted-foreground"
          >
            {formatQuickAddLabel(amount)}
          </button>
        ))}
        <button
          type="button"
          onClick={onClear}
          className="ml-auto cursor-pointer px-1 text-body-sm font-medium text-subtle-foreground"
        >
          지우기
        </button>
      </div>
    </div>
  );
}
