import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import styles from '../styles/contact.module.css'

const Contact: NextPage = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.main}>
      </div>
      <Footer />
    </div>
  )
}

export default Contact