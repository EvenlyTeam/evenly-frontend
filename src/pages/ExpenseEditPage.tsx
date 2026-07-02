import { ExpenseView } from '@/features/expense/components';

const PARTICIPANTS = [
  {
    id: 'junho',
    name: '준호',
    isPayer: false,
    isChecked: true,
    finalAmount: 11125,
  },
  {
    id: 'minji',
    name: '민지',
    isPayer: true,
    isChecked: true,
    finalAmount: -60875,
  },
  {
    id: 'seoyeon',
    name: '서연',
    isPayer: false,
    isChecked: false,
    finalAmount: 19125,
  },
  {
    id: 'taewoo',
    name: '태우',
    isPayer: false,
    isChecked: true,
    finalAmount: 30625,
  },
];

export function ExpenseEditPage() {
  return (
    <ExpenseView
      mode="edit"
      description="저녁 고깃집"
      amount={120000}
      participants={PARTICIPANTS}
      perPersonAmount={40000}
      canSave
    />
  );
}
