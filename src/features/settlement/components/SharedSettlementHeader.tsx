import { Amount } from '@/components';

interface SharedSettlementHeaderProps {
  groupName: string;
  amount: number;
}

export function SharedSettlementHeader({
  groupName,
  amount,
}: SharedSettlementHeaderProps) {
  return (
    <div className="border-b border-border-subtle bg-surface p-4 lg:px-6">
      <div className="mx-auto w-full max-w-content">
        <div className="flex items-center justify-between gap-2">
          <h1 className="min-w-0 truncate text-heading-md font-semibold text-foreground lg:text-heading-lg">
            {groupName}
          </h1>
          <span className="inline-flex shrink-0 items-center rounded-badge bg-surface-muted px-2 py-1.25 text-label leading-none text-muted-foreground">
            읽기 전용
          </span>
        </div>

        <p className="mt-1 text-body-sm text-muted-foreground">
          링크로 공유된 정산 결과예요 · 총{' '}
          <Amount value={amount} className="text-muted-foreground" />
        </p>
      </div>
    </div>
  );
}
