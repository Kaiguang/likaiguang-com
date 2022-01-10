import React from 'react'
import Layout from '@theme/Layout'
import clsx from 'clsx'

import styles from './email.module.css'

export default function Email() {
   return (
      <Layout title='Email' description="Kai's email">
         <div className={clsx('container', styles.container)}>
            <h1 className='hero__title'>Email</h1>
            <p className='hero__subtitle'>hello@likaiguang.com</p>
         </div>
      </Layout>
   )
}
