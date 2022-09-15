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
      <div>{props.title}</div>
      <p>{props.description}</p>
      <div>Sponsor: {props.sponsor}</div>
    </div>)
}

export default Project