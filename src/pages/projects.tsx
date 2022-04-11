import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { NavBar } from '../components/NavBar';
import { Link } from '../components/Link';
import { Tag } from '../components/Tag';
import { PageHead } from '../components/PageHead';

export default function ProjectsPage() {
  return (
    <>
      <PageHead title="Kai's Projects" />
      <NavBar />
      <main className='mt-8 p-2 max-w-lg mx-auto'>
        <h1 className='hidden'>Kai's Projects</h1>

        <section className='pb-12 flex flex-col items-center'>
          <h2 className='text-4xl font-bold mb-4'>Share Housework</h2>
          <StaticImage
            src='../images/screenshot-share-housework.png'
            alt='screen shot of share housework'
            className='mb-4'
          />
          <Link target='_blank' to='https://housework.likaiguang.com' className='mb-4'>
            https://housework.likaiguang.com
          </Link>
          <p className='text-lg mb-4 text-center'>
            A web app to track the housework performed by my <s>roommate</s> wife and me. If she
            does a house chore, she gets paid by me. If I do some housework, I don't need to pay
            her, which encourages me to do more.
          </p>
          <div className='flex flex-wrap mb-4'>
            <Tag className='mr-1 mb-1 bg-[#61dafb]'>React</Tag>
            <Tag className='mr-1 mb-1 bg-[#61dafb]'>Recoil</Tag>
            <Tag className='mr-1 mb-1 bg-[#61dafb]'>Material-UI</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS Amplify</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS SAM</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS Lambda</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS DynamoDB</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS API Gateway</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS Cognito</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS IAM</Tag>
          </div>
          <Link target='_blank' to='https://github.com/Kaiguang/share-housework-web'>
            source code for front end
          </Link>
          <Link target='_blank' to='https://github.com/Kaiguang/share-housework-aws'>
            source code for serverless
          </Link>
        </section>

        <hr />

        <section className='pt-12 pb-12 flex flex-col items-center'>
          <h2 className='text-4xl font-bold mb-4'>Yi Embroidery</h2>
          <StaticImage
            src='../images/screenshot-yi-embroidery.png'
            alt='screen shot of yi embroidery'
            className='mb-4'
          />
          <Link target='_blank' to='https://yiyiyili.com' className='mb-4'>
            https://yiyiyili.com
          </Link>
          <p className='text-lg mb-4 text-center'>
            Online store for awesome embroidery arts by Yi Li.
          </p>
          <div className='flex flex-wrap mb-4'>
            <Tag className='mr-1 mb-1 bg-[#61dafb]'>Gatsby</Tag>
            <Tag className='mr-1 mb-1 bg-[#61dafb]'>React</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS S3</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS CloudFront</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS Lambda</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS DynamoDB</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS API Gateway</Tag>
            <Tag className='mr-1 mb-1 bg-[#5b63ff]'>Stripe</Tag>
          </div>
          <Link target='_blank' to='https://github.com/Kaiguang/yiyiyili.com-gatsby'>
            source code for front end
          </Link>
          <Link target='_blank' to='https://github.com/Kaiguang/yiyiyili.com-serverless'>
            source code for serverless
          </Link>
        </section>

        <hr />

        <section className='pt-12 pb-12 flex flex-col items-center'>
          <h2 className='text-4xl font-bold mb-4'>Poems (余事)</h2>
          <StaticImage
            src='../images/screenshot-fgjhsq-com.png'
            alt='screen shot of fgjhsq.com'
            className='mb-4'
          />
          <Link target='_blank' to='https://fgjhsq.com' className='mb-4'>
            https://fgjhsq.com
          </Link>
          <p className='text-lg mb-4 text-center'>
            A Chinese poem website, poems are written by 放歌江海山阙.
          </p>
          <div className='flex flex-wrap mb-4'>
            <Tag className='mr-1 mb-1 bg-[#61dafb]'>Gatsby</Tag>
            <Tag className='mr-1 mb-1 bg-[#61dafb]'>React</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS S3</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS CloudFront</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>AWS Route 53</Tag>
          </div>
          <Link target='_blank' to='https://github.com/Kaiguang/fgjhsq-com'>
            source code
          </Link>
        </section>

        <hr />

        <section className='pt-12 pb-12 flex flex-col items-center'>
          <h2 className='text-4xl font-bold mb-4'>Clean Restaurant</h2>
          <StaticImage
            src='../images/screenshot-clean-restaurant.png'
            alt='screen shot of clean restaurant'
            className='mb-4'
          />
          <Link
            target='_blank'
            to='https://apps.apple.com/ca/app/clean-restaurant/id1551890360'
            className='mb-4'
          >
            try it from the iOS App Store
          </Link>
          <p className='text-lg mb-4 text-center'>
            Keep a record of your business's cleaning history.
          </p>
          <div className='flex flex-wrap mb-4'>
            <Tag className='mr-1 mb-1 bg-[#61dafb]'>React Native</Tag>
            <Tag className='mr-1 mb-1 bg-[#61dafb]'>Expo</Tag>
            <Tag className='mr-1 mb-1 bg-[#ec7211]'>SQLite</Tag>
          </div>
        </section>
      </main>
    </>
  );
}
