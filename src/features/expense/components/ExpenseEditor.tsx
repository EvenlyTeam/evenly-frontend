import { Button, Modal } from '@/components';
import { useIsDesktop } from '@/hooks/useIsDesktop';

import { ExpenseForm } from './ExpenseForm';
import { ExpenseScreenLayout } from './ExpenseScreenLayout';
import { ExpenseSummarySaveBar } from './ExpenseSummarySaveBar';
import { FinalAmountList } from './FinalAmountList';
import type { ExpenseParticipantRow } from './ParticipantSelector';
import { PerPersonSplitCard } from './PerPersonSplitCard';

interface ExpenseEditorProps {
  mode: 'add' | 'edit';
  description: string;
  amount: number;
  participants: ExpenseParticipantRow[];
  perPersonAmount: number;
  canSave: boolean;
}

export function ExpenseEditor({
  mode,
  description,
  amount,
  participants,
  perPersonAmount,
  canSave,
}: ExpenseEditorProps) {
  const isDesktop = useIsDesktop();
  const title = mode === 'edit' ? '지출 수정' : '지출 추가';

  const isAllChecked =
    participants.length > 0 &&
    participants.every((participant) => participant.isChecked);

  const checkedRows = participants
    .filter((participant) => participant.isChecked)
    .map((participant) => ({
      id: participant.id,
      name: participant.name,
      amount: participant.finalAmount,
    }));

  const deleteButton =
    mode === 'edit' ? (
      <button
        type="button"
        className="cursor-pointer text-body-sm font-semibold text-danger"
      >
        삭제하기
      </button>
    ) : undefined;

  const form = (
    <ExpenseForm
      description={description}
      amount={amount}
      onAmountChange={() => {}}
      onAmountQuickAdd={() => {}}
      onAmountClear={() => {}}
      participants={participants}
      isAllChecked={isAllChecked}
      showFinalAmount={!isDesktop}
    />
  );

  if (isDesktop) {
    return (
      <Modal title={title} headerRight={deleteButton} className="max-w-190">
        <div className="flex gap-7">
          <div className="min-w-0 flex-[0_0_54%]">{form}</div>

          <div className="flex min-w-0 flex-1 flex-col">
            <PerPersonSplitCard perPersonAmount={perPersonAmount} />

            <div className="mt-4.5">
              <FinalAmountList rows={checkedRows} />
            </div>

            <div className="mt-auto pt-5">
              <Button size="md" className="w-full" disabled={!canSave}>
                저장
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <ExpenseScreenLayout
      title={title}
      headerRight={deleteButton}
      bottomBar={
        <ExpenseSummarySaveBar
          checkedCount={checkedRows.length}
          perPersonAmount={perPersonAmount}
          canSave={canSave}
        />
      }
    >
      {form}
    </ExpenseScreenLayout>
  );
}
