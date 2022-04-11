import React, { PropsWithoutRef } from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

export function Link<TState>({ children, ...props }: PropsWithoutRef<GatsbyLinkProps<TState>>) {
  if (props.target === '_blank') {
    return (
      <a
        href={props.to}
        rel='noopener noreferrer'
        target='_blank'
        className={`text-lg text-sky-500 underline ${props.className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <GatsbyLink<TState> {...props} className={`text-sky-500 underline ${props.className}`}>
      {children}
    </GatsbyLink>
  );
}
