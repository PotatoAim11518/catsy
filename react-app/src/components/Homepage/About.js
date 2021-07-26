import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutHeader}>What is Catsy?</h1>
      <div className={styles.aboutSection}>
        <div className={styles.imageContainer}
          style={{ backgroundImage: `url(assets/community_cat.jpg)` }}
        ></div>
        <div className={styles.aboutSectionText}>
          <h2 className={styles.aboutSectionHeading}>A community for cat lovers</h2>
          <p className={styles.aboutText}>{`Whether you're a cat mom/dad, someone who's thinking about adopting, or literally a cat (because on the internet, no one knows), Catsy welcomes you!`}</p>
        </div>
      </div>
      <div className={styles.aboutSection}>
        <div className={styles.aboutSectionText}>
          <h2 className={styles.aboutSectionHeading}>Caring for life</h2>
          <p className={styles.aboutText}>{`Every life is precious. From our oldest whiskered grandpa to the most illegally smol kitten, these felines are looking for an amazing hooman to give them a place to call home.`}</p>
        </div>
        <div className={styles.imageContainerAlt}
          style={{ backgroundImage: `url(assets/transcendent_cat.jpg)` }}
        ></div>
      </div>
      <div className={styles.aboutSection}>
        <div className={styles.imageContainer}
          style={{ backgroundImage: `url(assets/family_cat.jpg)` }}
        ></div>
        <div className={styles.aboutSectionText}>
          <h2 className={styles.aboutSectionHeading}>Get to know your next family member</h2>
          <p className={styles.aboutText}>{`Knowing what comes "out of the box" is important. We strive to provide as much information on each cat we have as we can so that you feel comfortable going into the adoption process.`}</p>
        </div>
      </div>
    </div>

  )
}

export default About;
