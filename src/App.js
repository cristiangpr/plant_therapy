import React from 'react';
import './App.css';
 import Landing from './components/Landing';
  import { Route, Link } from 'react-router-dom';


  function App() {
    return (
      <div className="App">



            <Route exact path="/" component={Landing} />


      </div>
    );
  }

export default App;
