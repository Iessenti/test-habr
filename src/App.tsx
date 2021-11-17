import React, {useState, useEffect} from 'react'
import {  
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import {Profile} from './pages/Profile'
import { LoginPage } from './pages/LoginPage'
import {Navbar} from './components/Navbar'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false)

  useEffect( () => {

    const authState: any = localStorage.getItem('authdata')

    setIsAuthenticated(authState)

  }, [])

  return (
    <Router>
      <Navbar/>

      <Switch>

            <Route
              path='/' exact
            >
              <div>mainpage</div>
            </Route>

            <Route
              path='/news' exact
            >
              <div>news</div>
            </Route>

            <Route
              path='/profile' exact
            >
              <Profile />
            </Route>

            <Route 
              path="/login" exact
            >
              <LoginPage/>
            </Route>
      </Switch>
    </Router>
  )
}

export default App;
