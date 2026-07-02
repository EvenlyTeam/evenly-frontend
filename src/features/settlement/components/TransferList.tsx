import type { Transfer } from '../types';
import { TransferItem } from './TransferItem';

interface TransferListProps {
  transfers: Transfer[];
}

export function TransferList({ transfers }: TransferListProps) {
  return (
    <section className="w-full">
      <div className="mb-3.5 flex items-baseline gap-2">
        <h2 className="text-heading-sm font-semibold text-foreground lg:text-heading-md">
          이렇게 보내면 끝나요
        </h2>
        <span className="text-body-sm text-muted-foreground lg:text-body-md">
          {`· 송금 ${transfers.length}번`}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {transfers.map((transfer) => (
          <TransferItem
            key={`${transfer.from}-${transfer.to}`}
            from={transfer.from}
            to={transfer.to}
            amount={transfer.amount}
          />
        ))}
      </div>
    </section>
  );
}
