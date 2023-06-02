import Head from 'next/head';
import Header from '../components/header';
import Buttons from '../components/button-grid';
import styles from '../app/Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.button}>
        <Buttons />
      </div>
    </div>
  )
}