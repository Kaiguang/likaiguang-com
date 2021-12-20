import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { Seo } from '../components/SeoComponent'
import * as styles from './BlogPost.module.css'

export default function BlogPost({ data }) {
   const md = data.markdownRemark

   const readingTime = () => {
      const minutes = Math.ceil(md.wordCount.words / 200)
      return `${minutes} min read`
   }

   return (
      <Layout selectedNavLink="blog">
         <Seo
            title={md.frontmatter.title}
            description={md.excerpt ? md.excerpt : md.frontmatter.title}
         />

         <h1>{md.frontmatter.title}</h1>

         <div className={styles.frontmatter}>
            <span>
               {md.frontmatter.date} ☕️ {readingTime()}
            </span>

            <div>
               {md.frontmatter.originalDate ? (
                  <em className={styles.originalDate}>
                     Originally posted {md.frontmatter.originalDate}
                  </em>
               ) : null}
            </div>

            <div>
               {md.frontmatter.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                     {tag}
                  </span>
               ))}
            </div>
         </div>

         <div dangerouslySetInnerHTML={{ __html: md.html }} />
      </Layout>
   )
}

export const query = graphql`
   query ($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
         frontmatter {
            date(formatString: "YYYY-MM-DD")
            originalDate(formatString: "YYYY-MM-DD")
            tags
            title
         }
         html
         wordCount {
            words
         }
         excerpt(pruneLength: 200)
      }
   }
`
