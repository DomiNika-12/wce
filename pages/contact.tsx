import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import styles from '../styles/contact.module.css'

const Contact: NextPage = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>Interested in our work?</div>
          <div className={styles.border}>
            <div className={styles.meeting}>
              <div className={styles.timeText}>Stop by at our weekly meetings during Fall 2022 semester!</div>
              <div className={styles.time}>Dow 641</div>
              <div className={styles.time}>Thursdays 7pm</div>
            </div>
            <div className={styles.advisor}>
              <div>If you need more information reach out to our advisor Kit Cischke</div>
              <a href="mailto:cmcischk@mtu.edu"
                target={"_blank"}
                rel={"noreferrer"}
                className={styles.mail}>
                cmcischk@mtu.edu
              </a>
              <div>or fillout the contact form below.</div>
            </div>
          </div>

          <div className={styles.form}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScyl-4dae6LIakSsJ4mJaBtSbzD1x14pZyaQ_Rmb7gjFe2X7A/viewform?embedded=true" width="100%" height="100%" frameBorder="0" className={styles.frame}>Loading…</iframe>
          </div>
        </div>
        <Footer />

      </div>
    </div >
  )
}

export default Contact