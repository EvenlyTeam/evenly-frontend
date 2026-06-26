import { type PropsWithChildren } from 'react';

import CloseIcon from '@/assets/icons/close.svg?react';

interface ChipProps {
  variant?: 'default' | 'highlight';
  onRemove?: () => void;
  removeLabel?: string;
}

export function Chip({
  children,
  variant = 'default',
  onRemove,
  removeLabel,
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
          aria-label={removeLabel}
          className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-border-subtle text-subtle-foreground"
        >
          <CloseIcon aria-hidden className="size-2.75" />
        </button>
      )}
    </span>
  );
}
