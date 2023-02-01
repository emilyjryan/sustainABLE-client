import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Home from './components/pages/Home'
import NewHabit from './components/pages/NewHabit'
import HabitDetails from './components/pages/HabitDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import jwt_decode from 'jwt-decode'

function App() {
  // the currently logged in user will be stored up here in state
  const [currentUser, setCurrentUser] = useState(null)

  // useEffect -- if the user navigates away form the page, we will log them back in
  useEffect(() => {
    // check to see if token is in storage
    const token = localStorage.getItem('jwt')
    if (token) {
      // if so, we will decode it and set the user in app state
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, []) // happen only once

  // event handler to log the user out when needed
  const handleLogout = () => {
    // check to see if a token exists in local storage
    if (localStorage.getItem('jwt')) {
      // if so, delete it
      localStorage.removeItem('jwt')
      // set the user in the App state to be null
      setCurrentUser(null)
    }
  }

  return (
    <div className='bg-image' style={{backgroundImage: `url(https://www.pixelstalk.net/wp-content/uploads/images1/Plant-growth-wallpaper.jpg}`, height: '100vh', width: '100%', backgroundSize: 'cover'}} >
    <Router>
      <header>
        <Navbar 
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
      </header>

      <div className="App">
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />

          <Route 
            path="/users/register"
            element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route 
            path="/users/login"
            element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route 
            path="/users/:id"
            element={<Profile handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route
            path="/habits/new"
            element={<NewHabit />}
          />

          <Route
            path="/habits/:id"
            element={<HabitDetails />}
          />

        </Routes>
      </div>

      <footer>
        <Footer/>
      </footer>

    </Router>
    </div>
  );
}

export default App;
