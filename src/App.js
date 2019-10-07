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
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import UserDashboard from "./components/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./components/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";



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
              <Route path="/home" exact component={Home} />
            <PrivateRoute path="/user_dashboard" exact component={UserDashboard} />
            <AdminRoute path="/admin_dashboard" exact component={AdminDashboard}  />
              <AdminRoute path="/create_category" exact component={AddCategory}/>
              <AdminRoute path="/create_product" exact component={AddProduct}/>
                <Route path="/cart" exact component={Cart} />
                  <AdminRoute path="/admin/orders" exact component={Orders} />
                  <PrivateRoute
                      path="/profile/:userId"
                      exact
                      component={Profile}
                  />

                  <AdminRoute
                      path="/admin/products"
                      exact
                      component={ManageProducts}
                  />
                  <AdminRoute
                      path="/admin/product/update/:productId"
                      exact
                      component={UpdateProduct}
                  />


        </Switch>
      </BrowserRouter>
    );
  }

export default App;
