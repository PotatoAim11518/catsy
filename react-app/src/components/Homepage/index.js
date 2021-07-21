import ExploreCats from './ExploreCats';
import AboutMe from './AboutMe';
import "./HomePage.css"

const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <ExploreCats />
        <AboutMe />
        <div className="mailing-list">
          <div>Hello World</div>
        </div>
      </div>
    </>
  )
}

export default Homepage;