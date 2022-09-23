import type { NextPage } from 'next';
import Layout from 'components/commons/Layout';
import styles from 'styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout color='white'>
      <h2>
        <ul>
          <li>Twitterアカウント：
            <a href="https://twitter.com/JapaneseComicss" className={styles.a}>
              https://twitter.com/JapaneseComicss
            </a>
          </li>
          <li>Twitter Analytics：
            <a href="https://analytics.twitter.com/user/JapaneseComicss/home" className={styles.a}>
              https://analytics.twitter.com/user/JapaneseComicss/home
            </a>
            </li>
          <li>Amazon Affiliate：
            <a href="https://affiliate-program.amazon.com/home" className={styles.a}>
              https://affiliate-program.amazon.com/home
            </a>
          </li>
        </ul>
      </h2>
    </Layout>
  )
}

export default Home
