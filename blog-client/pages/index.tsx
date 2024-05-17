// pages/index.tsx
import { GetServerSideProps } from 'next';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import Card from '@/components/Card';
import React from 'react';
import { Post } from '@/types/Post';
import Link from 'next/link';

const Home: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <div>
    <div className={styles.gradientBackground}>
      <div className={styles.flex}>
        <h1 className={styles.title}>Your Personal Blog</h1>
      </div>
      <div className={styles.flex}>
        <Link href={'/dashboard'}>
        <button className={styles.button}>Post</button>
        </Link>
      </div>
    </div>
    <div className={styles.container}>

      <section className={styles.cards}>
        {posts.map((post, key) => (
          <Card post={post} key={key} />
        ))}
      </section>
    </div>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {

  
  const res = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL + 'posts');
  const posts = res.data;

  return { props: { posts } };
};

export default Home;
