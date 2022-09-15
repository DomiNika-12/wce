import { FC } from "react"
import styles from '../styles/footer.module.css'


export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
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
      {/* <a
        href="https://dominikabobik.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Website created by @Dominika Bobik
      </a> */}
    </footer>
  )
}

