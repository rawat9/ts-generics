import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function Homepage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p>Solutions repository for <Link className={styles.linkText} to={"https://github.com/type-challenges/type-challenges"}>Type Challenges</Link></p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary', styles.special)}
            to="/category/easy">
            Easy
          </Link>
          <Link
            className={clsx("button button--warning", styles.special)}
            to="/category/medium">
            Medium
          </Link>
          <Link
            className={clsx("button button--danger", styles.special)}
            to="/category/hard">
            Hard
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      description="TypeScript Generics challenges with various difficult level">
      <main>
        <Homepage />
      </main>
    </Layout>
  );
}
