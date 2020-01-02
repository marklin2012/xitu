import React from 'react'
import Head from 'next/head'
import Nav from '../nav'
import GoldList from '../GoldList'
import Github from '../Github'
import styles from './index.module.less'

const CategoryList = [
  { key: 'all', name: '首页' },
  { key: 'frontend', name: '前端' },
  { key: 'backend', name: '后端' }
]

const Home = () => (
  <div className={styles.home}>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <div className={styles.content}>
      <GoldList />
      <Github />
    </div>
  </div>
)

export default Home
