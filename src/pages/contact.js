import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import { Seo } from '../components/SeoComponent'

import * as styles from './contact.module.css'

export default function Contact() {
   const data = useStaticQuery(graphql`
      {
         nameIcon: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
               fixed(width: 32) {
                  ...GatsbyImageSharpFixed
               }
            }
         }
         emailIcon: file(relativePath: { eq: "email-icon.png" }) {
            childImageSharp {
               fixed(width: 32) {
                  ...GatsbyImageSharpFixed
               }
            }
         }
         githubIcon: file(relativePath: { eq: "GitHub-Mark-120px-plus.png" }) {
            childImageSharp {
               fixed(width: 32) {
                  ...GatsbyImageSharpFixed
               }
            }
         }
         linkedInIcon: file(relativePath: { eq: "LI-In-Bug.png" }) {
            childImageSharp {
               fixed(width: 32) {
                  ...GatsbyImageSharpFixed
               }
            }
         }
         twitterIcon: file(
            relativePath: { eq: "Twitter_Social_Icon_Square_Color.png" }
         ) {
            childImageSharp {
               fixed(width: 32) {
                  ...GatsbyImageSharpFixed
               }
            }
         }
      }
   `)

   const [myNameTooltipText, setMyNameTooltipText] = useState('Click to copy')

   const handleCopyMyNameClick = () => {
      const textArea = document.createElement('textarea')
      textArea.value = 'Kaiguang Li'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      textArea.remove()
      setMyNameTooltipText('Copied')
   }

   const handleMyNameMouseLeave = () => {
      setMyNameTooltipText('Click to copy')
   }

   const [myEmailTooltipText, setMyEmailTooltipText] = useState('Click to copy')

   const handleCopyMyEmailClick = () => {
      const textArea = document.createElement('textarea')
      textArea.value = 'hello@likaiguang.com'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      textArea.remove()
      setMyEmailTooltipText('Copied')
   }

   const handleMyEmailMouseLeave = () => {
      setMyEmailTooltipText('Click to copy')
   }

   return (
      <Layout selectedNavLink="contact">
         <Seo
            title="Contact Kai"
            description="Get in touch with Kai, all messages are welcome."
         />

         <div className={styles.contactContainer}>
            <code>{`---`}</code>

            <code>
               <span
                  className={`${styles.hoverAndTooltip} ${styles.contactLine}`}
                  onClick={handleCopyMyNameClick}
                  onKeyPress={handleCopyMyNameClick}
                  onMouseLeave={handleMyNameMouseLeave}
                  role="button"
                  tabIndex="0"
               >
                  <Img
                     fixed={data.nameIcon.childImageSharp.fixed}
                     alt="Name"
                     style={{ backgroundColor: `black` }}
                  />
                  Kaiguang Li
                  <span className={styles.hoverAndTooltipTooltipText}>
                     {myNameTooltipText}
                  </span>
               </span>
            </code>

            <code>
               <span
                  className={`${styles.hoverAndTooltip} ${styles.contactLine}`}
                  onClick={handleCopyMyEmailClick}
                  onKeyPress={handleCopyMyEmailClick}
                  onMouseLeave={handleMyEmailMouseLeave}
                  role="button"
                  tabIndex="0"
               >
                  <Img
                     fixed={data.emailIcon.childImageSharp.fixed}
                     alt="Email"
                     style={{ backgroundColor: `white` }}
                  />
                  hello@likaiguang.com
                  <span className={styles.hoverAndTooltipTooltipText}>
                     {myEmailTooltipText}
                  </span>
               </span>
            </code>

            <code>
               <a
                  className={styles.contactLine}
                  href="https://github.com/Kaiguang"
                  target="_blank"
                  rel="noreferrer"
               >
                  <Img
                     fixed={data.githubIcon.childImageSharp.fixed}
                     alt="GitHub"
                     style={{ backgroundColor: `white` }}
                  />
                  Kaiguang
               </a>
            </code>

            <code>
               <a
                  className={styles.contactLine}
                  href="https://www.linkedin.com/in/kaiguang-li/"
                  target="_blank"
                  rel="noreferrer"
               >
                  <Img
                     fixed={data.linkedInIcon.childImageSharp.fixed}
                     alt="LinkedIn"
                     style={{ backgroundColor: `white` }}
                  />
                  kaiguang-li
               </a>
            </code>

            <code>
               <a
                  className={styles.contactLine}
                  href="https://twitter.com/KaiguangLi"
                  target="_blank"
                  rel="noreferrer"
               >
                  <Img
                     fixed={data.twitterIcon.childImageSharp.fixed}
                     alt="Twitter"
                     style={{ backgroundColor: `white` }}
                  />
                  <span>@KaiguangLi</span>
               </a>
            </code>

            <code>{`---`}</code>
         </div>
      </Layout>
   )
}
