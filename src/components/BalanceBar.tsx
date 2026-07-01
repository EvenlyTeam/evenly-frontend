import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { cn } from '@/utils/cn';

import { Amount } from './Amount';

interface BalanceBarProps {
  name: string;
  amount: number;
  maxAbs: number;
}

export function BalanceBar({ name, amount, maxAbs }: BalanceBarProps) {
  const isPositive = amount >= 0;
  const data = [{ name, value: Math.abs(amount) }];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="text-body-lg font-medium text-foreground">{name}</span>
        <Amount value={amount} signed className="text-body-lg font-semibold" />
      </div>

      <div
        className={cn(
          'h-2 rounded-full bg-surface-muted',
          isPositive
            ? '[&_.recharts-rectangle]:fill-(--color-positive)'
            : '[&_.recharts-rectangle]:fill-(--color-negative)',
        )}
      >
        <ResponsiveContainer width="100%" height={8}>
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            barCategoryGap={0}
          >
            <XAxis type="number" domain={[0, maxAbs]} hide />
            <YAxis type="category" dataKey="name" hide />
            <Bar
              dataKey="value"
              radius={4}
              maxBarSize={8}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
