export interface ExpenseListItemData {
  id: string;
  payer: string;
  description: string;
  shareLabel: string;
  amount: number;
}

export interface GroupSummaryItem {
  id: string;
  name: string;
  participantNames: string[];
  participantCount: number;
  date: string;
  status: 'ongoing' | 'settled';
}
