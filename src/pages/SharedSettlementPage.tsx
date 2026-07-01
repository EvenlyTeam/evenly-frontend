import { BalanceSummary } from '@/components';
import {
  SharedSettlementError,
  SharedSettlementFooterLink,
  SharedSettlementHeader,
  SharedSettlementStyleWrapper,
  TransferList,
} from '@/features/settlement/components';

/* @TODO: 임시 정적 데이터 */
const GROUP_NAME = '강릉 여행 모임';
const TOTAL = 392000;

const BALANCES = [
  { name: '준호', amount: 142000 },
  { name: '민지', amount: 22000 },
  { name: '서연', amount: -66000 },
  { name: '태우', amount: -98000 },
];

const TRANSFERS = [
  { from: '태우', to: '준호', amount: 98000 },
  { from: '서연', to: '준호', amount: 44000 },
  { from: '서연', to: '민지', amount: 22000 },
];

interface SharedSettlementPageProps {
  error?: boolean;
}

export function SharedSettlementPage({
  error = false,
}: SharedSettlementPageProps) {
  if (error) {
    return <SharedSettlementError />;
  }

  return (
    <SharedSettlementStyleWrapper>
      <SharedSettlementStyleWrapper.Header>
        <SharedSettlementHeader groupName={GROUP_NAME} total={TOTAL} />
      </SharedSettlementStyleWrapper.Header>

      <SharedSettlementStyleWrapper.Body>
        <TransferList transfers={TRANSFERS} />

        <div className="mt-6">
          <BalanceSummary.NetBalances balances={BALANCES} />
        </div>
      </SharedSettlementStyleWrapper.Body>

      <SharedSettlementStyleWrapper.Footer>
        {/* @TODO: 라우터 도입 후 홈/로그인 경로로 연결 */}
        <SharedSettlementFooterLink text="evenly로 직접 정산하기 →" href="/" />
      </SharedSettlementStyleWrapper.Footer>
    </SharedSettlementStyleWrapper>
  );
}
