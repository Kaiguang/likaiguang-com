import React from 'react';
import { GitHubIcon } from '../components/GitHubIcon';
import { Link } from '../components/Link';
import { LinkedIn } from '../components/LinkedIn';
import { NavBar } from '../components/NavBar';
import { PageHead } from '../components/PageHead';
import { TwitterIcon } from '../components/TwitterIcon';

export default function ContactPage() {
  return (
    <>
      <PageHead title='Contact Kai' />
      <NavBar />
      <main className='mt-8 p-2 flex flex-col items-center'>
        <h1 className='text-3xl font-thin mb-4'>get in touch with Kai</h1>
        <p className='text-2xl mb-2 font-bold'>Kaiguang Li</p>
        <p className='text-2xl mb-8'>hello@likaiguang.com</p>

        <div className='flex'>
          <Link
            target='_blank'
            to='https://github.com/Kaiguang'
            className='m-2 hover:fill-kaibluelight'
          >
            <GitHubIcon className='h-8' />
          </Link>
          <Link
            target='_blank'
            to='https://www.linkedin.com/in/kaiguang-li/'
            className='m-2 hover:fill-kaibluelight'
          >
            <LinkedIn className='h-8' />
          </Link>
          <Link
            target='_blank'
            to='https://twitter.com/KaiguangLi'
            className='m-2 hover:fill-kaibluelight'
          >
            <TwitterIcon className='h-8' />
          </Link>
        </div>
      </main>
    </>
  );
}
