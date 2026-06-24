import { type ClassValue, clsx } from 'clsx';

import { twMerge } from './twMerge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
