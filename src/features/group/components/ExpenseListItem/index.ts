import { Actions } from './Actions';
import { Amount } from './Amount';
import { Avatar } from './Avatar';
import { Base } from './Base';
import { Content } from './Content';

export const ExpenseListItem = Object.assign(Base, {
  Avatar,
  Content,
  Amount,
  Actions,
});
