import React from 'react';
import './App.css';
 import Landing from './components/Landing';
  import { Route, Link } from 'react-router-dom';
  import Consumer from './components/Consumer';
  import Distributors from './components/Distributors';
  import Farms from './components/Farms';



  function App() {
    return (
      <div className="App">



            <Route exact path="/" component={Landing} />
               <Route path="/consumer" component={Consumer} />

                  <Route path="/distributors" component={Distributors} />
                     <Route path="/farms" component={Farms} />


      </div>
    );
  }

export default App;
