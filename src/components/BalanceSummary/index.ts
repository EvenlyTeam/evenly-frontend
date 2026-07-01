import { Actions } from './Actions';
import { Base } from './Base';
import { Divider } from './Divider';
import { MyBalance } from './MyBalance';
import { NetBalances } from './NetBalances';
import { Total } from './Total';

export const BalanceSummary = Object.assign(Base, {
  MyBalance,
  Total,
  Divider,
  NetBalances,
  Actions,
});
