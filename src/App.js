/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import Navlocal from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TestComponent from './components/TestComponent';
import Setinstructions from './components/Setinstructions';

function App() {
  return (
    <Router>
      <div>
        <Navlocal/>
      </div>
      <Route path="/" exact component={TestComponent}/>
      <Route path="/instructions" exact component={Setinstructions}/>

    </Router>

  );
}


export default App;
