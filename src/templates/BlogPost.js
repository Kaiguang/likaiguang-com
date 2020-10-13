import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout.js";
import styles from "./BlogPost.module.css";

export default function BlogPost({ data, pageContext }) {
  const md = data.markdownRemark;

  const readingTime = () => {
    const minutes = Math.ceil(md.wordCount.words / 200);
    return `${minutes} min read`;
  };

  return (
    <Layout selectedNavLink="Blog">
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

      <Link to={`/Blog#${pageContext.slug}`}>{`Back`}</Link>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
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
    }
  }
`;
