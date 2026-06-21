import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const AuthInput = ({ label, id, className, ...props }: InputProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-label text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        className={`h-12 w-full rounded-input border border-border bg-input px-3.5 font-sans text-body-lg text-foreground transition-all duration-150 outline-none placeholder:text-subtle-foreground focus:border-primary focus:ring-3 focus:ring-primary/35 ${className ?? ''}`}
        {...props}
      />
    </div>
  );
};

export default AuthInput;
