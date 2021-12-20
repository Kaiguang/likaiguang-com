import React from 'react'

import { Seo } from '../components/SeoComponent'
import Layout from '../components/Layout'
import * as styles from './index.module.css'

export default function HomePage() {
   return (
      <Layout selectedNavLink="home">
         <Seo />

         <h1>Kaiguang Li</h1>
         <span className={styles.pronunciation}>[ kahy-gwahng lee ]</span>

         <h2>Synonym</h2>
         <ul>
            <li>Kai</li>
         </ul>

         <h2>Noun</h2>
         <ol>
            <li>A person's name</li>
            <li>A Canadian resident, usually found in Edmonton, AB</li>
            <li>A software developer</li>
            <li>A front-end dev for web apps and mobile apps</li>
            <li>A back-end dev for databases and services</li>
            <li>A DevOp that publishes human-friendly softwares</li>
         </ol>
      </Layout>
   )
}
