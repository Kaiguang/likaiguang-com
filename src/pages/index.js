import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/SEO";
import Layout from "../components/Layout";

export default function HomePage() {
  const data = useStaticQuery(graphql`
    {
      rainbowDev: file(relativePath: { eq: "rainbow-developer.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout selectedNavLink="home">
      <SEO />

      <Img
        fluid={data.rainbowDev.childImageSharp.fluid}
        alt="Developer, laptop, rainbow and stars"
      />

      <span
        style={{
          fontSize: 32,
          fontFamily: `'Fredoka One', cursive`,
        }}
      >
        Build responsive and blazing fast websites and apps with Kai
      </span>
    </Layout>
  );
}
