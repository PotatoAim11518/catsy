import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ExploreCats from './ExploreCats';
import AboutMe from './AboutMe';
import { getCats } from '../../store/cats';
import "./HomePage.css"

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCats())
  },[dispatch])

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
