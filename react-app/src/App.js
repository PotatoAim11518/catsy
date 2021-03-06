import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProtectedRoute from './components/auth/ProtectedRoute';
import CommentPage from './components/Comments/Comments_Page';
import UsersList from './components/UsersList';
import User from './components/User';
import Cart from './components/Cart'
import Cat from './components/Cat'
import { authenticate } from './store/session';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage'
import AdoptionPage from './components/AdoptionPage';
import SearchResultsPage from './components/SearchResultsPage';
import Footer from './components/Footer/FooterIndex';
import Category from './components/Category';


function App() {
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact={true}>
          <Homepage />
        </Route>
        <Route path='/search/:searchTerm' >
          <SearchResultsPage />
        </Route>
        <Route path='/cats/:cat_id' exact={true}>
          <Cat />
        </Route>
        <Route path='/cart' exact={true} >
          <Cart />
        </Route>
        <Route path='/category/:category'>
          <Category/>
        </Route>
        <ProtectedRoute path='/adopted' exact={true} >
          <AdoptionPage />
        </ProtectedRoute>
        <Route path='/cats/comments' exact={true}>
          <CommentPage comments={comments} />
        </Route>
        {/*<Route path='/cats/:id/comments' exact={true}>*/}
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
