import ECComponent from "./EmbeddedChat/EmbeddedChat";
import styles from "./App.module.css";
import newsImage from "../assets/news_img.jpg";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";
function App() {
  const [isEcOpen, setIsECOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.projectContainer}>
          <div className={styles.projectInfo}>
            <h1 className={styles.projectName}>NEWS AGGREGATION APP</h1>
            <h2 className={styles.projectAbstract}>
              The app allows you to aggregate news from various sources and
              share them within your Rocket Chat instance. Its benefits would
              be:
            </h2>

            <ol className={styles.alternatingColors}>
              <li>
                Convenience: Users can easily access their favorite news content
                while enjoying leisure moments with their teams.
              </li>

              <li>
                Increased Engagement: With news readily available, users will
                spend more time on the platform, leading to increased engagement
                and interaction within the community.
              </li>

              <li>
                Perspective Exchange: By offering this feature, admins can
                promote discussions among team members on various topics,
                encouraging critical thinking abilities, and welcoming different
                perspectives.
              </li>
              <li>
                Competitive Advantage: Providing news aggregation within the
                Rocket.Chat platform through this app will set Rocket.Chat apart
                from other communication platforms. This can attract new users
                and organizations seeking a platform that promotes the exchange
                of ideas among teams.
              </li>
            </ol>
            <div className={styles.btnContainer}>
              <a
                className={styles.proposalBtn}
                href="https://github.com/Spiral-Memory/GSoC-Proposal/blob/main/News%20aggregation%20GSoC%20Proposal.pdf"
              >
                View Proposal
              </a>
              <button
                className={styles.tryBtn}
                onClick={() => setIsECOpen((prev) => !prev)}
              >
                {isEcOpen ? "Close" : "Try Now!"}
              </button>
            </div>
          </div>

          <div className={styles.projectImageContainer}>
            <div className={styles.blankSquare} />
            <div className={styles.blankSquare2} />
            <img src={newsImage} alt="news" className={styles.projectImage} />
          </div>
        </div>
      </div>

      {isEcOpen && <ECComponent />}
    </div>
  );
}

export default App;
