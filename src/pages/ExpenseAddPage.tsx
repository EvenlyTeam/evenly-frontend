import { ExpenseEditor } from '@/features/expense/components';

const PARTICIPANTS = [
  {
    id: 'junho',
    name: '준호',
    isPayer: false,
    isChecked: true,
    finalAmount: 0,
  },
  {
    id: 'minji',
    name: '민지',
    isPayer: false,
    isChecked: true,
    finalAmount: 0,
  },
  {
    id: 'seoyeon',
    name: '서연',
    isPayer: false,
    isChecked: true,
    finalAmount: 0,
  },
  {
    id: 'taewoo',
    name: '태우',
    isPayer: false,
    isChecked: true,
    finalAmount: 0,
  },
];

export function ExpenseAddPage() {
  return (
    <ExpenseEditor
      mode="add"
      description=""
      amount={0}
      participants={PARTICIPANTS}
      perPersonAmount={0}
      canSave={false}
    />
  );
}
