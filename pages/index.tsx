import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <title>Wireless Communication Enterprise</title>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.blocks}>
            <div className={styles.title}>Who Are We</div>
            <p className={styles.text}>
              The Wireless Communication Enterprise (WCE) is a student-led organization hosted by the Electrical and Computer Engineering Department at Michigan Tech. As part of the Enterprise Program  at the university, we are focused on wireless, optical, renewable energy and biomedical technology.
            </p>
          </div>
          <div className={styles.blocks}>
            <div className={styles.title}>What Do We Do</div>
            <p className={styles.text}>
              WCE has competent project experience in lasers, RFID, wind/solar power, PCB design, and embedded systems programming. We work as a think-tank for companies looking to push their product lines to a higher level. We also work as entrepreneurs, taking our own ideas to a level where they can be useful for industry and consumers alike.
            </p>
          </div>
          <div className={styles.blocks}>
            <div className={styles.title}>Want Us to Work For You</div>
            <p className={styles.text}>
              We are always looking for sponsors to challenge us with projects across our spectrum of expertise.  Contact our advisor Kit Cischke to get the process started.  Check out our Sponsors page to see who else we’ve worked with.
            </p>
          </div>
          <div className={styles.blocksBackground}></div>
        </div>
      </div>
      <Footer />
    </div >)
}

export default Home
