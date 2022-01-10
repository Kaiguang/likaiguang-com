import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'

function HomepageHeader() {
   const { siteConfig } = useDocusaurusContext()
   return (
      <header className={clsx('hero', styles.heroBanner)}>
         <div className='container'>
            <h1 className='hero__title'>{siteConfig.title}</h1>
            <p className='hero__subtitle'>[ kahy-gwahng lee ]</p>
         </div>
      </header>
   )
}

function Main() {
   return (
      <main className={clsx('container', styles.container)}>
         <div>
            <h2>Hello World,</h2>
            <p>Feel free to call me Kai.</p>
            <p>I'm a fullstack software developer based in Edmonton AB, Canada.</p>
            <p>This is my personal website to keep track of my projects, notes and articles.</p>
            <p>
               Send me an email at <code>hello@likaiguang.com</code> if you would like to talk.
            </p>
         </div>
      </main>
   )
}

export default function Home(): JSX.Element {
   return (
      <Layout description='Home page of Kaiguang Li'>
         <HomepageHeader />
         <Main />
      </Layout>
   )
}
