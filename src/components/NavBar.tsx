import React, { ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useLocation } from '@reach/router';
import { Logo } from './Logo';
import { BookIcon } from './BookIcon';

export function NavBar() {
  return (
    <nav className='flex justify-center items-stretch sm:p-2'>
      <GatsbyLink to='/'>
        <Logo className='h-10 border-0 rounded-md' />
      </GatsbyLink>
      <NavBarLink path='/projects'>projects</NavBarLink>
      <NavBarLink path='/contact'>contact</NavBarLink>
      <NavBarLink path='/notes'>
        <BookIcon className='h-8 self-center pt-2' />
      </NavBarLink>
    </nav>
  );
}

function NavBarLink({ path, children }: { path: string; children: ReactNode }) {
  const { pathname } = useLocation();
  const isMatch = new RegExp(`^${path}`, 'gi').test(pathname);
  const className =
    `flex items-end text-lg font-light h-10 ml-1 sm:ml-2 px-2 pb-[2px] ` +
    `border-0 rounded-md border-transparent ` +
    `hover:bg-kaibluelight hover:text-gray-100 hover:fill-gray-100 ` +
    (isMatch ? `bg-gradient-to-b from-kaiblue to-kaibluelight text-gray-100 fill-gray-100` : '');

  return (
    <GatsbyLink to={path} className={className}>
      {children}
    </GatsbyLink>
  );
}
