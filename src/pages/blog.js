import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout.js";
import SEO from "../components/SEO";
import styles from "./blog.module.css";

export default function Blog({ data }) {
  return (
    <Layout selectedNavLink="blog">
      <SEO
        title="Blog"
        description="Kai's personal blog posts are found here. Some can be treasure."
      />

      <div className={styles.blogList}>
        {data.allMarkdownRemark.nodes.map(({ frontmatter, fields }) => (
          <Link
            key={fields.slug}
            to={`/blog${fields.slug}`}
            className={styles.blogLink}
          >
            <div className={styles.blogTitle}>
              <span>{frontmatter.title}</span>
            </div>
            <div className={styles.blogTagsAndDate}>
              <div>
                {frontmatter.tags.map((tag) => (
                  <span key={tag} className={styles.blogTag}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className={styles.blogTag}>{frontmatter.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          tags
        }
        fields {
          slug
        }
      }
    }
  }
`;
