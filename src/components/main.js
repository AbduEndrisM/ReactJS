

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingPage';
import About from './about.js'; 
import Contact from './contact';
import Login from './login';
import Survey from './survey';
import Register from './Register';
import Loginscreen from './Loginscreen';

const Main =() =>(
    <Switch> 
        <Route exact path="/" component ={LandingPage} /> 
        <Route exact path="/about" component ={About} /> 
        <Route exact path="/contact" component ={Contact} /> 
        <Route exact path="/login" component ={Login} /> 
        <Route exact path="/survey" component ={Survey} /> 
        <Route exact path="/Register" component ={Register} /> 
        <Route exact path="/Loginscreen" component ={Loginscreen} /> 
       

        
 
    </Switch>

)
  
export default Main;