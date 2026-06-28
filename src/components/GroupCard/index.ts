import { Attendees } from './Attendees';
import { Base } from './Base';
import { Detail } from './Detail';
import { Status } from './Status';
import { Title } from './Title';

export const GroupCard = Object.assign(Base, {
  Title,
  Detail,
  Status,
  Attendees,
});
