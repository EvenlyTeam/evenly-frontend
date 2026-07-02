import { AmountField, TextField } from '@/components';

import {
  type ExpenseParticipantRow,
  ParticipantSelector,
} from './ParticipantSelector';

interface ExpenseFormProps {
  description: string;
  amount: number;
  onAmountChange: (value: number) => void;
  onAmountQuickAdd: (amount: number) => void;
  onAmountClear: () => void;
  participants: ExpenseParticipantRow[];
  isAllChecked: boolean;
  showFinalAmount: boolean;
}

export function ExpenseForm({
  description,
  amount,
  onAmountChange,
  onAmountQuickAdd,
  onAmountClear,
  participants,
  isAllChecked,
  showFinalAmount,
}: ExpenseFormProps) {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex flex-col"
    >
      <div className="flex flex-col gap-4.5">
        <TextField
          id="expense-description"
          label="내용"
          placeholder="어디에 썼나요?"
          value={description}
        />
        <AmountField
          id="expense-amount"
          label="금액"
          value={amount}
          onChange={onAmountChange}
          onQuickAdd={onAmountQuickAdd}
          onClear={onAmountClear}
        />
      </div>

      <div className="mt-5">
        <ParticipantSelector
          participants={participants}
          isAllChecked={isAllChecked}
          showFinalAmount={showFinalAmount}
        />
      </div>
    </form>
  );
}
