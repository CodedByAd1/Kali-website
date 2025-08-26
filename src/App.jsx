import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Team from './components/Team'
import Projects from './components/Projects'
import JoinUs from './components/JoinUs'
import Blogs from './components/Blogs'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  )
}

export default App
