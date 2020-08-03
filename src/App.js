import React , { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
//import Footer from './Footer';

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  // useEffect <<<<<<<< POWERFUL
  // Piece of code which runs on a given condition
  useEffect(() => {
    const unsubscribe= auth.onAuthStateChanged((authUser => {
      if (authUser) {
        // the user is logged in ...
        
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        // the user is logged out...
        
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    }))
    return () => {
      //any cleanup operation is going to go here
      unsubscribe();
    }
  }, [])

        console.log("USER IS >>>", user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />

          </Route>

          {/* This is the default route */}
          <Route path="/">
            <Header />
            <Home />
           
          </Route>
        </Switch>

        {/* We need react-router  */}
        {/* localhost.com */}
        {/* localhost.com/checkout */}
        {/* localhost.com/login */}



      </div>
    </Router>
  );
}

export default App;
