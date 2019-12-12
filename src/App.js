import React from 'react';
import './App.css';

 import Landing from './components/Landing';
  import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';
  import Consumer from './components/Consumer';
  import DistributorsLanding from './components/DistributorsLanding';
  import FarmsLanding from './components/FarmsLanding';

  import Signup from "./user/Signup";
  import Signin from "./user/Signin";
  import StoreLocator from "./components/StoreLocator";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import UserDashboard from "./components/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./components/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import AddUser from "./admin/AddUser";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import ManageUsers from "./admin/ManageUsers";
import UpdateUser from "./admin/UpdateUser";
import AddInventory from "./admin/AddInventory";
 import About from './components/About';
 import AddCoupon from "./admin/AddCoupon";
 import Contact from './components/Contact';
 import ManageCategories from "./admin/ManageCategories";
  import ManageInventories from "./admin/ManageInventories";
import ManageCoupons from "./admin/ManageCoupons";
import UpdateCategory from "./admin/UpdateCategory";
import UpdateInventory from "./admin/UpdateInventory";
import UpdateCoupon from "./admin/UpdateCoupon"
import UpdateOrder from "./admin/UpdateOrder";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();
    ReactGA.initialize('UA-154425185-1');
    history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });


  require('dotenv').config()


  function App() {
    return (
      <BrowserRouter>
        <Switch>
           <Route exact path="/" component={Landing} />
            <Route path="/consumer" component={Consumer} />
              <Route path="/about" component={About} />

            <Route path="/DistributorsLanding" component={DistributorsLanding} />
            <Route path="/FarmsLanding" component={FarmsLanding} />

            <Route path="/StoreLocator" component={StoreLocator} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/contact" exact component={Contact} />
            <PrivateRoute path="/user_dashboard" exact component={UserDashboard} />
            <AdminRoute path="/admin_dashboard" exact component={AdminDashboard}  />
              <AdminRoute path="/create_category" exact component={AddCategory}/>
              <AdminRoute path="/create_product" exact component={AddProduct}/>
                  <AdminRoute path="/create_user" exact component={AddUser}/>
                <Route path="/cart" exact component={Cart} />
                  <AdminRoute path="/admin_orders" exact component={Orders} />
                  <PrivateRoute
                      path="/profile/:userId"
                      exact
                      component={Profile}
                  />

                  <AdminRoute
                      path="/admin_products"
                      exact
                      component={ManageProducts}
                  />
                  <AdminRoute
                      path="/admin_categories"
                      exact
                      component={ManageCategories}
                  />
                  <AdminRoute
                      path="/admin_inventories"
                      exact
                      component={ManageInventories}
                  />
                  <AdminRoute
                      path="/admin_coupons"
                      exact
                      component={ManageCoupons}
                  />
                  <AdminRoute
                      path="/admin/product/update/:productId"
                      exact
                      component={UpdateProduct}
                  />
                  <AdminRoute
                      path="/admin_users"
                      exact
                      component={ManageUsers}
                  />
                  <AdminRoute
                      path="/admin/user/update/:userId"
                      exact
                      component={UpdateUser}
                  />
                  <AdminRoute
                      path="/create_inventory"
                      exact
                      component={AddInventory}
                  />
                  <AdminRoute
                      path="/create_coupon"
                      exact
                      component={AddCoupon}
                  />
                  <AdminRoute
                      path="/admin/category/update/:categoryId"
                      exact
                      component={UpdateCategory}
                  />
                  <AdminRoute
                      path="/admin/inventory/update/:inventoryId"
                      exact
                      component={UpdateInventory}
                  />
                  <AdminRoute
                      path="/admin/coupon/update/:couponId"
                      exact
                      component={UpdateCoupon}
                  />
                  <AdminRoute
                      path="/admin/order/update/:orderId"
                      exact
                      component={UpdateOrder}
                  />

        </Switch>
      </BrowserRouter>
    );
  }

export default App;
