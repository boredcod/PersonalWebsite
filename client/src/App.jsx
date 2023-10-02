import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Home, AboutMe, PersonalProjects } from './pages'

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <header class="site-header">
        <div class="site-identity">
        <h1><Link to="/">John Kim</Link></h1>
      </div>  
        <nav class="site-navigation">
          <ul class="nav">
            <li><Link to="/about-me">About Me</Link></li> 
            <li><Link to="/personal-projects">Personal Projects</Link></li> 
          </ul>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about-me" element={ <AboutMe />}/>
          <Route path="personal-projects" element={ <PersonalProjects/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
