import React from 'react';
import './App.css';

 import Landing from './components/Landing';
  import { Route, BrowserRouter, Switch } from 'react-router-dom';
  import Consumer from './components/Consumer';
  import DistributorsLanding from './components/DistributorsLanding';
  import FarmsLanding from './components/FarmsLanding';
    import Distributors from './components/Distributors';
  import Farms from './components/Farms';

  import StoreLocator from "./components/StoreLocator";

import PrivateRoute from "./auth/PrivateRoute";
import UserDashboard from "./components/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./components/AdminDashboard";
  require('dotenv').config()


  function App() {
    return (
      <BrowserRouter>
        <Switch>


            <Route exact path="/" component={Landing} />
            <Route path="/consumer" component={Consumer} />
            <Route path="/Distributors" component={Distributors} />
            <Route path="/DistributorsLanding" component={DistributorsLanding} />
            <Route path="/FarmsLanding" component={FarmsLanding} />
            <Route path="/Farms" component={Farms} />
            <Route path="/StoreLocator" component={StoreLocator} />

            <PrivateRoute path="/user_dashboard" exact component={UserDashboard} />
            <AdminRoute path="/admin_dashboard" exact component={AdminDashboard}  />



        </Switch>
      </BrowserRouter>
    );
  }

export default App;
