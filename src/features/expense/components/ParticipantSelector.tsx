import { ParticipantRow } from './ParticipantRow';

export interface ExpenseParticipantRow {
  id: string;
  name: string;
  isPayer: boolean;
  isChecked: boolean;
  finalAmount: number;
}

interface ParticipantSelectorProps {
  participants: ExpenseParticipantRow[];
  isAllChecked: boolean;
  showFinalAmount: boolean;
}

export function ParticipantSelector({
  participants,
  isAllChecked,
  showFinalAmount,
}: ParticipantSelectorProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between px-0.5">
        <span className="text-label text-muted-foreground">결제자</span>
        <div className="flex items-center gap-3">
          <span className="text-label text-muted-foreground">분담 대상</span>
          <button
            type="button"
            className="cursor-pointer text-label font-semibold text-primary"
          >
            {isAllChecked ? '전체 해제' : '전체 선택'}
          </button>
        </div>
      </div>

      <ul className="lg:max-h-58 lg:overflow-y-auto">
        {participants.map((participant) => (
          <li key={participant.id}>
            <ParticipantRow
              name={participant.name}
              isPayer={participant.isPayer}
              isChecked={participant.isChecked}
              finalAmount={participant.finalAmount}
              showFinalAmount={showFinalAmount}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
