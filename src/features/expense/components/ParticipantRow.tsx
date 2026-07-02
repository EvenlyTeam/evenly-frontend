import { Amount } from '@/components';
import { cn } from '@/utils/cn';

import CheckIcon from '../assets/check.svg?react';
import CrownIcon from '../assets/crown.svg?react';

interface ParticipantRowProps {
  name: string;
  isPayer: boolean;
  isChecked: boolean;
  finalAmount: number;
  showFinalAmount: boolean;
}

export function ParticipantRow({
  name,
  isPayer,
  isChecked,
  finalAmount,
  showFinalAmount,
}: ParticipantRowProps) {
  return (
    <div className="flex h-14 items-center gap-2.5 border-b border-border-subtle lg:h-13 lg:gap-3 lg:pr-2.5">
      <button
        type="button"
        aria-pressed={isPayer}
        aria-label={`${name} 결제자로 지정`}
        className="flex shrink-0 cursor-pointer items-center"
      >
        <CrownIcon
          aria-hidden
          className={cn(
            'size-6',
            isPayer ? 'fill-current text-primary' : 'text-subtle-foreground',
          )}
        />
      </button>

      <span className="min-w-0 flex-1 truncate text-body-lg font-medium text-foreground">
        {name}
      </span>

      {showFinalAmount && (
        <Amount
          value={finalAmount}
          signed
          emphasizePositive={false}
          className="text-body-sm font-semibold text-muted-foreground"
        />
      )}

      <button
        type="button"
        role="checkbox"
        aria-checked={isChecked}
        aria-label={`${name} 분담 대상`}
        className="flex shrink-0 cursor-pointer items-center"
      >
        <span
          className={cn(
            'flex size-5.5 items-center justify-center rounded-md border',
            isChecked
              ? 'border-primary bg-primary text-on-primary'
              : 'border-border bg-surface',
          )}
        >
          {isChecked && <CheckIcon aria-hidden className="size-3.25" />}
        </span>
      </button>
    </div>
  );
}
