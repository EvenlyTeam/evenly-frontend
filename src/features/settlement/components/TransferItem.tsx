import { Amount, Avatar } from '@/components';
import { getInitial } from '@/utils/getInitial';

import ArrowRightIcon from '../assets/arrow-right.svg?react';
import CopyIcon from '../assets/copy.svg?react';

interface TransferItemProps {
  from: string;
  to: string;
  amount: number;
}

export function TransferItem({ from, to, amount }: TransferItemProps) {
  return (
    <div className="flex items-center gap-2.5 rounded-card border border-border-subtle bg-surface px-4 py-3.5 shadow-card lg:gap-3.5 lg:px-4.5 lg:py-4">
      <div className="flex min-w-0 flex-1 items-center gap-2 lg:gap-2.5">
        <Avatar size="sm" text={getInitial(from)} className="max-lg:hidden" />
        <span className="text-body-md font-medium text-foreground">{from}</span>

        <ArrowRightIcon
          aria-hidden
          className="size-4 shrink-0 text-subtle-foreground"
        />

        <Avatar size="sm" text={getInitial(to)} className="max-lg:hidden" />
        <span className="text-body-md font-medium text-foreground">{to}</span>
      </div>

      <Amount value={amount} className="text-body-lg font-semibold" />

      <button
        type="button"
        aria-label={`${from}님이 ${to}님에게 보낼 금액 복사`}
        className="flex shrink-0 cursor-pointer items-center justify-center text-subtle-foreground"
      >
        <CopyIcon aria-hidden className="size-5" />
      </button>
    </div>
  );
}
