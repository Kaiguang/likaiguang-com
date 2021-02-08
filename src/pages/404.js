import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import styles from "./404.module.css";

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Page Not Found" />

      <h1>404: Page Not Found</h1>
      <p>This page no longer exists.</p>
      <p>You can...</p>
      <div className={styles.link}>
        <Link to="/">Go to home page</Link>
      </div>
      <div className={styles.link}>
        <Link to="/blog">Read blog</Link>
      </div>
      <div className={styles.link}>
        <Link to="/contact">Contact me</Link>
      </div>
    </Layout>
  );
}
