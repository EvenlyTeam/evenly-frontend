import { Base } from './Base';
import { CreateBody } from './CreateBody';
import { DetailBody } from './DetailBody';
import { Expenses } from './Expenses';
import { ListBody } from './ListBody';
import { Navbar } from './Navbar';
import { Summary } from './Summary';

export const GroupLayout = Object.assign(Base, {
  Navbar,
  ListBody,
  CreateBody,
  DetailBody,
  Expenses,
  Summary,
});
