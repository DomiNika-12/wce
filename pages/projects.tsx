import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import Project, { ProjectProps } from '../components/project'
import styles from "../styles/projects.module.css"

const data: ProjectProps[] = [
  {
    title: "Broomball Scoreboard",
    description: "The Broomball Scoreboard team is designing and building three wirelessly-controlled electronic scoreboards for the MTU Broomball Association.  This project utilizes Arduinos and I2C for in-board communication and Xbees for wireless control.  Check out the scoreboards in action on the Broomball website!",
    sponsor: "MTU"
  },
  {
    title: "Drone AI",
    description: "The Drone AI team is building a custom quadcopter with on-board LIDAR, GPS, cameras and other goodies.  The code for the flight controller, LIDAR positioning and other controls is developed in-house.",
    sponsor: "MTU"
  },
  {
    title: "Roomba Bluetooth Adapter",
    description: "Michigan Tech’s First-Year Engineering program uses the iRobot Roombas to teach Matlab programming constructs, but they needed a Bluetooth adapter to download the code.  The team constructed the adapter, including an Adafruit Bluetooth board, and 3D printed the case.  Then they taught the students how to use the interface.",
    sponsor: "Roomba"
  }
]

const Projects: NextPage = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.gradientBackground}></div>
          <div>Current Projects</div>
          <p>Currently we are working on the variety of projects that include: ... . Every project is fully managed by the group of 4-6 students with background in electrical engineering, computer science and computer engineering.</p>
          <div>Past Projects</div>
          {data.map((e, i) => {
            return (
              <Project key={i}
                title={e.title}
                description={e.description}
                sponsor={e.sponsor} />)
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects