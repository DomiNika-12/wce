import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import styles from '../components/members.module.css'

interface MemberInfo {
  name: string,
  major: string,
  email: string,
  linkedin: string,
  team: string,
  resume?: string
}
const data: MemberInfo[] = [
  {
    name: "Dominika Bobik",
    major: "Computer Engineering",
    email: "dbobik@mtu.edu",
    linkedin: "....",
    team: "5G Tower"
  },
  {
    name: "Dominika Bobik",
    major: "Computer Engineering",
    email: "dbobik@mtu.edu",
    linkedin: "....",
    team: "5G Tower"
  },
  {
    name: "Dominika Bobik",
    major: "Computer Engineering",
    email: "dbobik@mtu.edu",
    linkedin: "....",
    team: "5G Tower"
  }
]

const Members: NextPage = () => {
  return (
    <div>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.members}>
          {data.map((e, i) => {
            return (<div key={i} className={styles.member}>
              <div>{e.team}</div>
              <div className={styles.nameMajor}>
                <div>{e.name}</div>
                <div className={styles.major}>{e.major}</div>
              </div>
              <div className={styles.socials}>
                <div>{e.email}</div>
                <div className={styles.linkedin}>{e.linkedin}</div>
              </div>
            </div>)
          })}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Members