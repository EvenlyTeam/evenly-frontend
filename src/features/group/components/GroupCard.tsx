/* eslint-disable react-refresh/only-export-components */

import type { PropsWithChildren } from 'react';

import { Avatar } from '@/components/Avatar';
import { cn } from '@/utils/cn';
import { createCompoundGuard } from '@/utils/createCompoundGuard';

export const GroupCard = Object.assign(Base, {
  Title,
  Detail,
  Status,
  Attendees,
});

const Guard = createCompoundGuard('GroupCard');

function Base({ children }: PropsWithChildren) {
  return (
    <Guard.Provider>
      <div className="cursor-pointer rounded-card bg-surface p-5 shadow-card">
        {children}
      </div>
    </Guard.Provider>
  );
}

function Title({
  title,
  className = '',
}: {
  title: string;
  className?: string;
}) {
  Guard.useGuard('Title');

  return (
    <div
      className={`text-body-sm font-semibold text-foreground lg:text-body-md ${className}`}
    >
      {title}
    </div>
  );
}

/**
 * @TODO: 날짜 문자열 오류 컴파일 타임 오류 대책 필요
 */
function Detail({
  attendeeCount,
  date,
  className = '',
}: {
  attendeeCount: number;
  date: string;
  className?: string;
}) {
  Guard.useGuard('Detail');

  return (
    <div className={`text-body-sm text-subtle-foreground ${className}`}>
      {`${attendeeCount}명 · ${date}`}
    </div>
  );
}

const statusConfig = {
  ongoing: { label: '진행 중', tone: 'bg-primary/12 text-primary' },
  settled: { label: '정산 완료', tone: 'bg-positive-surface text-settled' },
} as const;

function Status({ status }: { status: 'ongoing' | 'settled' }) {
  Guard.useGuard('Status');

  const { label, tone } = statusConfig[status];

  return (
    <span
      className={[
        'inline-flex items-center rounded-badge px-2 py-1.25',
        'text-label leading-none',
        tone,
      ].join(' ')}
    >
      {label}
    </span>
  );
}

function Attendees({ names }: { names: string[] }) {
  Guard.useGuard('Attendees');

  const MAX_VISIBLE = 3;
  const visible = names.slice(0, MAX_VISIBLE);
  const extra = names.length - visible.length;

  const avatarStackStyles =
    'ring-2 ring-surface -ml-2 first:ml-0 lg:size-7 lg:text-[12px]';

  return (
    <div className="flex items-center">
      {visible.map((name, i) => (
        <Avatar
          key={i}
          size="sm"
          label={name.charAt(0)}
          className={avatarStackStyles}
        />
      ))}

      {extra > 0 && (
        <Avatar
          size="sm"
          label={`+${extra}`}
          className={cn(
            avatarStackStyles,
            'bg-surface-muted text-subtle-foreground',
          )}
        />
      )}
    </div>
  );
}
