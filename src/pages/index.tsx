import React from 'react';
import { NavBar } from '../components/NavBar';
import { PageHead } from '../components/PageHead';

export default function IndexPage() {
  return (
    <>
      <PageHead title='Kai' />
      <NavBar />
      <main className='mt-8 p-2 flex flex-col items-center'>
        <h1 className='text-3xl font-bold'>Kaiguang Li</h1>
        <p className='text-gray-400 mb-4'>[ kahy-gwahng lee ]</p>
        <p className='text-lg mb-4'>software developer</p>
        <p className='text-lg mb-4'>
          mostly <span className='font-mono'>JavaScript</span>
        </p>
      </main>
    </>
  );
}
