import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import Project, { ProjectProps } from '../components/project'
import styles from "../styles/projects.module.css"

const dataCurrent: ProjectProps[] = [
  {
    title: "Whirlpool",
    description: "",
    sponsor: "Whirlpool",
    sponsorLogoPath: "./whirlpool.png"
  },
  {
    title: "Stellantis",
    description: "",
    sponsor: "Stellantis",
    sponsorLogoPath: "./stellantis.png"
  },
  {
    title: "5G Tower",
    description: "",
    sponsor: "MTU",
    sponsorLogoPath: "./mtuHusky.png"
  },
  {
    title: "Automatic Window",
    description: "",
    sponsor: "MTU",
    sponsorLogoPath: "./mtuHusky.png"
  },
  {
    title: "Wireless Band",
    description: "",
    sponsor: "MTU",
    sponsorLogoPath: "./mtuHusky.png"
  }
]

const dataPast: ProjectProps[] = [
  {
    title: "Broomball Scoreboard",
    description: "The Broomball Scoreboard team is designing and building three wirelessly-controlled electronic scoreboards for the MTU Broomball Association.  This project utilizes Arduinos and I2C for in-board communication and Xbees for wireless control.  Check out the scoreboards in action on the Broomball website!",
    sponsor: "MTU",
    sponsorLogoPath: "./mtuHusky.png"
  },
  {
    title: "Drone AI",
    description: "The Drone AI team is building a custom quadcopter with on-board LIDAR, GPS, cameras and other goodies.  The code for the flight controller, LIDAR positioning and other controls is developed in-house.",
    sponsor: "MTU",
    sponsorLogoPath: "./mtuHusky.png"
  },
  {
    title: "Roomba Bluetooth Adapter",
    description: "Michigan Tech’s First-Year Engineering program uses the iRobot Roombas to teach Matlab programming constructs, but they needed a Bluetooth adapter to download the code.  The team constructed the adapter, including an Adafruit Bluetooth board, and 3D printed the case.  Then they taught the students how to use the interface.",
    sponsor: "Roomba",
    sponsorLogoPath: "./irobot.png"
  },
  {
    title: "Ford Motor Company",
    description: "We have two exciting multi-year projects with the Ford Motor Company pertaining to their plug-in, hybrid and electric vehicles.",
    sponsor: "Ford",
    sponsorLogoPath: "./fordLogo.png"
  },
  {
    title: "Inverted Pendulum",
    description: "Desiring to push the edge of complexity for undergraduate Controls projects, the team is developing a fuzzy logic controller for an inverted double pendulum.  Tools in their toolbox include Simulink, Matlab, servo motors and 3D printing.",
    sponsor: "MTU",
    sponsorLogoPath: "./mtuHusky.png"
  },
  {
    title: "Kyocera Document Solutions",
    description: "Kyocera has an enduring interest in Bluetooth Low Energy (BLE) Beacon technologies and how they can be applied to their core businesses of printing and document handling.  This team is continuing research and development of these technologies.",
    sponsor: "Kyocera Document Solutions",
    sponsorLogoPath: "./kyocera.png"
  },
  {
    title: "Wireless MIDI",
    description: "In partnership with the Visual and Performing Arts Department, the team is developing a system for actors to trigger on-stage sound effects through industry-standard software.  Xbees provide the wireless infrastructure and Python code glues the system together.",
    sponsor: "MTU",
    sponsorLogoPath: "./mtuHusky.png"
  }
]

const Projects: NextPage = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>Current Projects</div>
          <p className={styles.text}>Currently we are working on the variety of projects that include: ... . Every project is fully managed by the group of 4-6 students with background in electrical engineering, computer science and computer engineering.</p>
          {dataCurrent.map((e, i) => {
            return (
              <Project key={i}
                title={e.title}
                description={e.description}
                sponsor={e.sponsor}
                sponsorLogoPath={e.sponsorLogoPath} />)
          })}
          <div className={styles.sectionTitle}>Past Projects</div>
          <p className={styles.text}>Take a look at what we did in the past!</p>
          {dataPast.map((e, i) => {
            return (
              <Project key={i}
                title={e.title}
                description={e.description}
                sponsor={e.sponsor}
                sponsorLogoPath={e.sponsorLogoPath} />)
          })}
        </div>
        <Footer />

      </div>
    </div>
  )
}

export default Projects