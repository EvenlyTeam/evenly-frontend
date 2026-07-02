import { Amount } from '@/components';

interface PersonalExpensePreviewRow {
  id: string;
  name: string;
  amount: number;
}

interface PersonalExpensePreviewListProps {
  rows: PersonalExpensePreviewRow[];
}

export function PersonalExpensePreviewList({
  rows,
}: PersonalExpensePreviewListProps) {
  return (
    <div>
      <p className="mb-2 text-label text-muted-foreground">
        최종 지출 금액{' '}
        <span className="text-subtle-foreground">· 다른 지출 합산</span>
      </p>

      <ul className="max-h-33 overflow-y-auto">
        {rows.map((row) => (
          <li
            key={row.id}
            className="flex items-baseline justify-between border-b border-border-subtle py-2.25 pr-2"
          >
            <span className="text-body-md text-foreground">{row.name}</span>
            <Amount
              value={row.amount}
              signed
              emphasizePositive={false}
              className="text-body-md font-semibold"
            />
          </li>
        ))}
      </ul>

      <p className="mt-2 text-caption text-subtle-foreground">
        결제자는 받을 금액이라 마이너스(−)로 표시돼요
      </p>
    </div>
  );
}
