import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className }: Props) {
  return <span className={`border-0 rounded-full text-sm px-2 py-1 ${className}`}>{children}</span>;
}
