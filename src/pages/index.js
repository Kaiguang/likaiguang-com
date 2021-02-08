import React from "react";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import styles from "./index.module.css";
import kaiStory1 from "../images/kai-story-1.png";
import kaiStory2 from "../images/kai-story-2.png";
import kaiStory3 from "../images/kai-story-3.png";
import kaiStory4 from "../images/kai-story-4.png";
import kaiStory5 from "../images/kai-story-5.png";

export default function HomePage() {
  return (
    <Layout selectedNavLink="home">
      <SEO />

      <img className={styles.kaiStoryImg} src={kaiStory1} alt="Hi, I'm Kai." />
      <img
        className={styles.kaiStoryImg}
        src={kaiStory2}
        alt="I do web development."
      />
      <img
        className={styles.kaiStoryImg}
        src={kaiStory3}
        alt="I grew up in China and went to Canada for college."
      />
      <img
        className={styles.kaiStoryImg}
        src={kaiStory4}
        alt="I now live in Edmonton, Alberta."
      />
      <img
        className={styles.kaiStoryImg}
        src={kaiStory5}
        alt="Welcome to my personal website."
      />
    </Layout>
  );
}
