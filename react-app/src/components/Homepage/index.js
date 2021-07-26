import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ExploreCats from './ExploreCats';

import About from './About';
import { getCats } from '../../store/cats';
import Footer from '../Footer/FooterIndex';
import styles from './HomePage.module.css'

const Homepage = () => {
  const dispatch = useDispatch();
  const cats = useSelector((state) => Object.values(state.cats))
  const category_names = useSelector((state) => Object.keys(state.categories))

  useEffect(() => {
    dispatch(getCats())
  },[dispatch])

  return (
      <div className="styles.homepageContainer">
        <ExploreCats cats={cats} category_names={category_names}/>
        <About />
        <Footer />
      </div>
  )
}

export default Homepage;
