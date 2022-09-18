import { FC } from "react"
import styles from '../styles/footer.module.css'


export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logos}>
        <a>
          <img src="wcelogo.png" height={50}></img>
        </a>
        <a
          href="https://mtu.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/mtuece.png" alt="MTU ECE logo" height={50} />
        </a>

      </div>
      <a
        href="https://dominikabobik.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.signature}
      >
        2022 @Dominika Bobik
      </a>
    </footer>

  )
}

