import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"



import Home from './components/home';
//import Test from './components/test';
import About from './components/about';
import Projects from './components/projects';
import Resume from './components/resume';
import Arcade from './components/arcade';

import HomeN from './components/homeN';
import AboutN from './components/aboutN';
import ProjectsN from './components/projectsN';
import ResumeN from './components/resumeN';
import ArcadeN from './components/arcadeN';





class App extends React.Component {
  render() {
  return (
    
    <div className="container">
      <Router>
          <Route exact path="/">
            <Redirect to="/homeN" /> : <HomeN/>
          </Route>
       
          
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/arcade" component={Arcade}/>

      <Route path="/homeN" component={HomeN}/>
      <Route path="/aboutN" component={AboutN}/>
      <Route path="/projectsN" component={ProjectsN}/>
      <Route path="/resumeN" component={ResumeN}/>
      <Route path="/arcadeN" component={ArcadeN}/>
      
     
      
      </Router>
      
    </div>
  );
}
}

export default App;



