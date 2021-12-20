import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export function Seo({ description, lang, meta, title }) {
   const { site } = useStaticQuery(
      graphql`
         query {
            site {
               siteMetadata {
                  title
                  description
                  author
               }
            }
         }
      `,
   )

   const defaultTitle = title
      ? `${title} | ${site.siteMetadata.title}`
      : site.siteMetadata.title

   const defaultDescription = description
      ? description
      : site.siteMetadata.description

   return (
      <Helmet
         htmlAttributes={{
            lang,
         }}
         title={title}
         meta={[
            {
               property: `og:title`,
               content: title,
            },
            {
               property: `og:description`,
               content: defaultDescription,
            },
            {
               property: `og:type`,
               content: `website`,
            },
            {
               name: `twitter:card`,
               content: `summary`,
            },
            {
               name: `twitter:creator`,
               content: site.siteMetadata.author || ``,
            },
            {
               name: `twitter:title`,
               content: title,
            },
            {
               name: `twitter:description`,
               content: defaultDescription,
            },
         ].concat(meta)}
      >
         <title>{defaultTitle}</title>
         <meta name="description" content={defaultDescription} />
         <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link
            href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
            rel="stylesheet"
         />
      </Helmet>
   )
}

Seo.defaultProps = {
   lang: `en`,
   meta: [],
}

Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string,
}
