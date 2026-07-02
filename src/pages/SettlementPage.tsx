import { BalanceSummary, Navbar } from '@/components';
import {
  SettlementActions,
  SettlementLayout,
  SettlementTotal,
  TransferList,
} from '@/features/settlement/components';
import { useIsDesktop } from '@/hooks/useIsDesktop';

/* @TODO: 임시 정적 데이터 */
const TOTAL = 392000;
const MY_BALANCE = 142000;

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

export function SettlementPage() {
  const isDesktop = useIsDesktop();

  return (
    <SettlementLayout>
      <SettlementLayout.Navbar>
        {/* @TODO: 임시 정적 props */}
        <Navbar>
          <Navbar.Start>
            <Navbar.BackButton />
            <Navbar.Title title="정산 결과" />
          </Navbar.Start>

          <Navbar.End>
            <SettlementTotal value={TOTAL} />
          </Navbar.End>
        </Navbar>
      </SettlementLayout.Navbar>

      <SettlementLayout.Body>
        <SettlementLayout.Transfers>
          {!isDesktop && (
            <BalanceSummary>
              <BalanceSummary.MyBalance amount={MY_BALANCE} />
            </BalanceSummary>
          )}

          <TransferList transfers={TRANSFERS} />

          {!isDesktop && <BalanceSummary.NetBalances balances={BALANCES} />}
        </SettlementLayout.Transfers>

        {isDesktop && (
          <SettlementLayout.Summary>
            <BalanceSummary>
              <BalanceSummary.MyBalance amount={MY_BALANCE} />
              <BalanceSummary.NetBalances balances={BALANCES} />
              <BalanceSummary.Divider />
              <BalanceSummary.Actions>
                <SettlementActions />
              </BalanceSummary.Actions>
            </BalanceSummary>
          </SettlementLayout.Summary>
        )}
      </SettlementLayout.Body>

      {!isDesktop && (
        <SettlementLayout.MobileBar>
          <BalanceSummary.Actions>
            <SettlementActions />
          </BalanceSummary.Actions>
        </SettlementLayout.MobileBar>
      )}
    </SettlementLayout>
  );
}
