import { Base } from './Base';
import { Create } from './Create';
import { Detail } from './Detail';
import { Expenses } from './Expenses';
import { List } from './List';
import { Navbar } from './Navbar';
import { Summary } from './Summary';

export const GroupStyleWrapper = Object.assign(Base, {
  Navbar,
  List,
  Create,
  Detail,
  Expenses,
  Summary,
});
