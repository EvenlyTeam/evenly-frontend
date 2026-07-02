import { BalanceSummary } from '@/components';
import {
  SettlementLayout,
  SharedSettlementError,
  SharedSettlementFooterLink,
  SharedSettlementHeader,
  TransferList,
} from '@/features/settlement/components';
import { useIsDesktop } from '@/hooks/useIsDesktop';

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

const CTA_HREF = '/';

interface SharedSettlementPageProps {
  error?: boolean;
}

export function SharedSettlementPage({
  error = false,
}: SharedSettlementPageProps) {
  const isDesktop = useIsDesktop();

  if (error) {
    return <SharedSettlementError />;
  }

  return (
    <SettlementLayout>
      <SettlementLayout.Navbar>
        {/* @TODO: 임시 정적 props */}
        <SharedSettlementHeader groupName={GROUP_NAME} total={TOTAL} />
      </SettlementLayout.Navbar>

      <SettlementLayout.Body>
        <SettlementLayout.Transfers>
          <TransferList transfers={TRANSFERS} />

          {!isDesktop && <BalanceSummary.NetBalances balances={BALANCES} />}
        </SettlementLayout.Transfers>

        {isDesktop && (
          <SettlementLayout.Summary>
            <BalanceSummary>
              <BalanceSummary.NetBalances balances={BALANCES} />
              <BalanceSummary.Divider />
              <SharedSettlementFooterLink
                text="evenly로 직접 정산하기 →"
                href={CTA_HREF}
              />
            </BalanceSummary>
          </SettlementLayout.Summary>
        )}
      </SettlementLayout.Body>

      {!isDesktop && (
        <SettlementLayout.MobileBar>
          <SharedSettlementFooterLink
            text="evenly로 직접 정산하기 →"
            href={CTA_HREF}
          />
        </SettlementLayout.MobileBar>
      )}
    </SettlementLayout>
  );
}
