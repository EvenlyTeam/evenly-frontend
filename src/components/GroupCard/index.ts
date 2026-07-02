import { Base } from './Base';
import { Detail } from './Detail';
import { Participants } from './Participants';
import { Status } from './Status';
import { Title } from './Title';

export const GroupCard = Object.assign(Base, {
  Title,
  Detail,
  Status,
  Participants,
});
