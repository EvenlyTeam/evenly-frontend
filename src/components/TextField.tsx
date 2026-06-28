import { type InputHTMLAttributes } from 'react';

import { Input } from './Input';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export function TextField({ label, id, className, ...props }: TextFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-label text-muted-foreground">
        {label}
      </label>
      <Input id={id} className={className} {...props} />
    </div>
  );
}
