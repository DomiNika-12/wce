import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import styles from '../styles/members.module.css'
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface MemberInfo {
  name: string,
  major: string,
  email: string,
  linkedin: string,
  team: string,
  resume?: string
}
const data5G: MemberInfo[] = [
  {
    name: "Dominika Bobik",
    major: "Computer Engineering",
    email: "dbobik@mtu.edu",
    linkedin: "....",
    team: "5G Tower"
  }
]
const dataWhirlpool: MemberInfo[] = [
  {
    team: "Whirlpool",
    name: "Emma Korhonen",
    major: "Robotics Engineering",
    email: "emkorhon@mtu.edu",
    linkedin: ""
  }
]
const dataStellantis: MemberInfo[] = [
  {
    team: "Stellantis",
    name: "Afsana Khanom",
    major: "Electrical Engineering",
    email: "Akhanom@mtu.edu",
    linkedin: ""
  }
]

const dataSmartWindow: MemberInfo[] = [
  {
    name: "Alex Stockman",
    major: "Computer Engineering",
    email: "ahstockm@mtu.edu",
    linkedin: "https://www.linkedin.com/in/alex-stockman-2a86291b0",
    team: "Smart Window"
  },
  {
    team: "Smart Window",
    name: "Ryan Peckham",
    major: "Electrical Engineering",
    linkedin: "",
    email: "rjpeckha@mtu.edu"
  },
  {
    team: "Smart Window",
    name: "Benjamin Stier",
    major: "Electrical and Computer Engineering",
    email: "bjstier@mtu.edu",
    linkedin: "https://www.linkedin.com/in/benjamin-stier-4829a91b6"
  },
  {
    team: "Smart Window",
    name: "Stephen Gillman",
    major: "Computer Engineering",
    email: "svgillma@mtu.edu",
    linkedin: "https://www.linkedin.com/in/stephen-gillman-36a8231a3/"
  }
]

const dataBand: MemberInfo[] = [
  {
    name: "Caroline Czyzewski",
    major: "Computer Engineering",
    email: "csczyzew@mtu.edu",
    linkedin: "https://www.linkedin.com/in/carolineczyzewski",
    team: "Wireless Band"
  }
]
const Members: NextPage = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.projectWrapper}>
            <div className={styles.content}>
              <p className={styles.projectTitle}>5G Tower</p>
              <div className={styles.members}>
                {data5G.map((e, i) => {
                  return (<div key={i} className={styles.member}>
                    <div className={styles.nameMajor}>
                      <div>{e.name}</div>
                      <div className={styles.major}>{e.major}</div>
                    </div>
                    <div className={styles.socials}>
                      <a href={`mailto:${e.email}`} target={"_blank"} rel={"noreferrer"}>
                        <MailIcon className={styles.mail} />
                      </a>
                      <a href={`${e.linkedin}`} target={"_blank"} rel={"noreferrer"}>
                        <LinkedInIcon className={styles.linkedin} />
                      </a>
                    </div>
                    <div className={styles.borderDiv} />
                  </div>)
                })}
              </div>
            </div>
            <div className={styles.gradientBackground}></div>
          </div>

          <div className={styles.projectWrapper}>
            <div className={styles.content}>
              <p className={styles.projectTitle}>Whirlpool</p>
              <div className={styles.members}>
                {dataWhirlpool.map((e, i) => {
                  return (<div key={i} className={styles.member}>
                    {/* <div>{e.team}</div> */}
                    <div className={styles.nameMajor}>
                      <div>{e.name}</div>
                      <div className={styles.major}>{e.major}</div>
                    </div>
                    <div className={styles.socials}>
                      <a href={`mailto:${e.email}`} target={"_blank"} rel={"noreferrer"}>
                        <MailIcon className={styles.mail} />
                      </a>
                      <a href={`${e.linkedin}`} target={"_blank"} rel={"noreferrer"}>
                        <LinkedInIcon className={styles.linkedin} />
                      </a>
                    </div>
                    <div className={styles.borderDiv} />
                  </div>)
                })}
              </div>
            </div>
            <div className={styles.gradientBackground}></div>
          </div>

          <div className={styles.projectWrapper}>
            <div className={styles.content}>
              <p className={styles.projectTitle}>Stellantis</p>
              <div className={styles.members}>
                {dataStellantis.map((e, i) => {
                  return (<div key={i} className={styles.member}>
                    <div className={styles.nameMajor}>
                      <div>{e.name}</div>
                      <div className={styles.major}>{e.major}</div>
                    </div>
                    <div className={styles.socials}>
                      <a href={`mailto:${e.email}`} target={"_blank"} rel={"noreferrer"}>
                        <MailIcon className={styles.mail} />
                      </a>
                      <a href={`${e.linkedin}`} target={"_blank"} rel={"noreferrer"}>
                        <LinkedInIcon className={styles.linkedin} />
                      </a>
                    </div>
                    <div className={styles.borderDiv} />
                  </div>)
                })}
              </div>
            </div>
            <div className={styles.gradientBackground}></div>
          </div>
          <div className={styles.projectWrapper}>
            <div className={styles.content}>
              <p className={styles.projectTitle}>Wireless Band</p>
              <div className={styles.members}>
                {dataBand.map((e, i) => {
                  return (<div key={i} className={styles.member}>
                    {/* <div>{e.team}</div> */}
                    <div className={styles.nameMajor}>
                      <div>{e.name}</div>
                      <div className={styles.major}>{e.major}</div>
                    </div>
                    <div className={styles.socials}>
                      <a href={`mailto:${e.email}`} target={"_blank"} rel={"noreferrer"}>
                        <MailIcon className={styles.mail} />
                      </a>
                      <a href={`${e.linkedin}`} target={"_blank"} rel={"noreferrer"}>
                        <LinkedInIcon className={styles.linkedin} />
                      </a>
                    </div>
                    <div className={styles.borderDiv} />
                  </div>)
                })}
              </div>
            </div>
            <div className={styles.gradientBackground}></div>
          </div>

          <div className={styles.projectWrapper}>
            <div className={styles.content}>
              <p className={styles.projectTitle}>Smart Window</p>
              <div className={styles.members}>
                {dataSmartWindow.map((e, i) => {
                  return (<div key={i} className={styles.member}>
                    {/* <div>{e.team}</div> */}
                    <div className={styles.nameMajor}>
                      <div>{e.name}</div>
                      <div className={styles.major}>{e.major}</div>
                    </div>
                    <div className={styles.socials}>
                      <a href={`mailto:${e.email}`} target={"_blank"} rel={"noreferrer"}>
                        <MailIcon className={styles.mail} />
                      </a>
                      <a href={`${e.linkedin}`} target={"_blank"} rel={"noreferrer"}>
                        <LinkedInIcon className={styles.linkedin} />
                      </a>
                    </div>
                    <div className={styles.borderDiv} />
                  </div>)
                })}
              </div>
            </div>
            <div className={styles.gradientBackground}></div>
          </div>
        </div>
        <Footer />

      </div>
    </div >
  )
}

export default Members