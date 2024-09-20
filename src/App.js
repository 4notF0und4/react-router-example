import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import User from './User';
import Dashboard from './Dashboard';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const isAuthenticated = false;

  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        {'|'}
        <Link to='/about'>About</Link>
        {'|'}
        <Link to='/user/1'>User</Link>
        {'|'}
        <Link to='/dashboard'>Dashboard</Link>
        {'|'}
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='user/:id' element={<User />}></Route>
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
