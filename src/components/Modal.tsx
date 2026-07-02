import { type PropsWithChildren, type ReactNode, useId } from 'react';

import CloseIcon from '@/assets/close.svg?react';
import { cn } from '@/utils/cn';

interface ModalProps {
  title: string;
  headerRight?: ReactNode;
  onClose?: () => void;
  className?: string;
}

export function Modal({
  title,
  headerRight,
  onClose,
  className,
  children,
}: PropsWithChildren<ModalProps>) {
  const titleId = useId();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
        className={cn(
          'max-h-[90vh] w-full max-w-125 overflow-y-auto rounded-modal bg-surface p-8 shadow-2xl',
          className,
        )}
      >
        <div className="flex items-center justify-between">
          <h2
            id={titleId}
            className="text-heading-md font-semibold text-foreground"
          >
            {title}
          </h2>
          <div className="flex items-center gap-4">
            {headerRight}
            <button
              type="button"
              onClick={onClose}
              aria-label="닫기"
              className="flex cursor-pointer items-center justify-center text-subtle-foreground"
            >
              <CloseIcon aria-hidden className="size-5.5" />
            </button>
          </div>
        </div>

        <hr className="mt-4 mb-5.5 border-border-subtle" />

        {children}
      </div>
    </div>
  );
}
