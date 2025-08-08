import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Auth/Login.jsx'
import Signup from './pages/Auth/Signup.jsx'
import Home from './pages/Dashboard/Home.jsx'
import Income from './pages/Dashboard/Income.jsx'
import Expense from './pages/Dashboard/Expense.jsx'

const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path='/dashboard' exact element={<Home />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expense" exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

const Root = () => {
  //check if token exsists in local storage
  const isAuthenticated = !!localStorage.getItem("token");

  //redirect to dashboard if authenticated, else to login
  return isAuthenticated ? (<Navigate to="/dashboard" />) : (<Navigate to="/login" />);

};
