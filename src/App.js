import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard'
import EmployeePortal from './components/EmployeePortal'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/employee" element={<EmployeePortal />} />
      </Routes>
    </Router>
  )
}

export default App;
