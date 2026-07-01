import { Amount } from '@/components';

interface SharedHeaderProps {
  groupName: string;
  total: number;
}

export function SharedSettlementHeader({
  groupName,
  total,
}: SharedHeaderProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <h1 className="min-w-0 truncate text-heading-md font-semibold text-foreground">
          {groupName}
        </h1>
        <span className="inline-flex shrink-0 items-center rounded-badge bg-surface-muted px-2 py-1.25 text-label leading-none text-muted-foreground">
          읽기 전용
        </span>
      </div>

      <p className="mt-1 text-body-sm text-muted-foreground">
        링크로 공유된 정산 결과예요 · 총{' '}
        <Amount value={total} className="text-muted-foreground" />
      </p>
    </div>
  );
}
