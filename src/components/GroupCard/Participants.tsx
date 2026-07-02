import { cn } from '@/utils/cn';
import { createCompoundGuard } from '@/utils/createCompoundGuard';

import { Avatar } from '../Avatar';

const Guard = createCompoundGuard('GroupCard');

const MAX_VISIBLE = 3;

const participantsDefaultStyles = 'ring-2 ring-surface -ml-2 first:ml-0';

const participantsExtraStyles = 'bg-surface-muted text-subtle-foreground';

export function Participants({ names }: { names: string[] }) {
  Guard.useGuard('Participants');

  const visible = names.slice(0, MAX_VISIBLE);
  const extra = names.length - visible.length;

  return (
    <div className="flex items-center">
      {visible.map((name, i) => (
        <Avatar
          key={i}
          size="sm"
          label={name.charAt(0)}
          className={participantsDefaultStyles}
        />
      ))}

      {extra > 0 && (
        <Avatar
          size="sm"
          label={`+${extra}`}
          className={cn(participantsDefaultStyles, participantsExtraStyles)}
        />
      )}
    </div>
  );
}
