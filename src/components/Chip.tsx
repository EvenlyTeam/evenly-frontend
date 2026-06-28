import { type PropsWithChildren } from 'react';

import CloseIcon from '@/assets/close.svg?react';

interface ChipProps {
  variant?: 'default' | 'highlight';
  onRemove?: () => void;
}

export function Chip({
  children,
  variant = 'default',
  onRemove,
}: PropsWithChildren<ChipProps>) {
  const variantClass =
    variant === 'highlight'
      ? 'bg-preview-surface font-semibold text-preview-foreground'
      : 'bg-surface-muted text-foreground';

  return (
    <span
      className={`inline-flex h-8.5 items-center gap-1.5 rounded-full pl-3.5 text-body-sm ${
        onRemove ? 'pr-2' : 'pr-3.5'
      } ${variantClass}`}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`${children} 삭제`}
          className="flex size-4.5 shrink-0 cursor-pointer items-center justify-center rounded-full bg-border-subtle text-subtle-foreground"
        >
          <CloseIcon aria-hidden className="size-2.75" />
        </button>
      )}
    </span>
  );
}
