import type { NextPage } from 'next'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../redux/store'
import styles from '../styles/Home.module.scss'
import HomeContents from './homeContents/HomeContents'

const Home: NextPage = () => {
  return (
    <Provider store={store} >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      </Head>
      <HomeContents />
      <footer className={styles.footer}>

      </footer>
    </Provider>
  )
}

export default Home
