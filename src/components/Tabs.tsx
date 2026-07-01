import { cn } from '@/utils/cn';

interface TabItem<T extends string> {
  value: T;
  label: string;
}

interface TabsProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  tabs: ReadonlyArray<TabItem<T>>;
  className?: string;
}

export function Tabs<T extends string>({
  value,
  onChange,
  tabs,
  className,
}: TabsProps<T>) {
  return (
    <div
      role="tablist"
      className={cn(
        'flex gap-1 rounded-button bg-surface-muted p-1',
        className,
      )}
    >
      {tabs.map((tab) => {
        const selected = tab.value === value;

        return (
          <button
            key={tab.value}
            type="button"
            role="tab"
            onClick={() => onChange(tab.value)}
            className={cn(
              'flex-1 cursor-pointer rounded-md py-2 text-body-md font-medium transition-colors',
              selected
                ? 'bg-surface text-foreground shadow-card'
                : 'text-subtle-foreground',
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
