import { FC } from "react"
import styles from "../styles/project.module.css"

export interface ProjectProps {
  title: string,
  description: string,
  sponsor: string,
  sponsorLogoPath?: string,
  picturePath?: string
}

const Project: FC<ProjectProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.container}>
        <div className={styles.sponsorBox}>
          <img src={props.sponsorLogoPath} alt={'sponsor logo'} width={70}></img>
          <div className={styles.sponsorText}>Sponsor: {props.sponsor}</div>
        </div>
        <p className={styles.text}>{props.description}</p>

      </div>
    </div>)
}

export default Project