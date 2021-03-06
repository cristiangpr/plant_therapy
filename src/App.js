import React from 'react';
import './App.css';

 import Landing from './components/Landing';
  import { Route,Router, BrowserRouter, Switch } from 'react-router-dom';
  import Consumer from './components/Consumer';
    import Tshirts from './components/Tshirts';
      import Jackets from './components/Jackets';
        import Accessories from './components/Accessories';
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
import AddPhoto from "./admin/AddPhoto";
import AddUser from "./admin/AddUser";
import Cart from "./core/Cart";
import ManageOrders from "./admin/ManageOrders";
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
    import ManageMessages from "./admin/ManageMessages";
  import UpdateCategory from "./admin/UpdateCategory";
    import UpdateInventory from "./admin/UpdateInventory";
  import UpdateCoupon from "./admin/UpdateCoupon";
  import UpdateMessage from "./admin/UpdateMessage";
    import UpdateOrder from "./admin/UpdateOrder";
  import ManageInvoices from "./admin/ManageInvoices";
    import UpdateInvoice from "./admin/UpdateInvoice";
      import ViewInvoice from "./admin/ViewInvoice";
    import ManageGears from "./admin/ManageGears";
   import UpdateGear from "./admin/UpdateGear";
   import AddGear from "./admin/AddGear";
    import ReactGA from 'react-ga';
    import {TrackedRoute} from "./core/TrackedRoute";

ReactGA.initialize('UA-154425185-1');
ReactGA.plugin.require('ecommerce', {debug: true});

  require('dotenv').config()


  function App() {
    return (
      <BrowserRouter>

          <Switch>
           <TrackedRoute exact path="/" component={Landing} />
            <TrackedRoute path="/consumer" component={Consumer} />
                <TrackedRoute path="/t_shirts" component={Tshirts} />
                  <TrackedRoute path="/jackets" component={Jackets} />
              <TrackedRoute path="/accessories" component={Accessories} />
              <TrackedRoute path="/about" component={About} />

            <TrackedRoute path="/DistributorsLanding" component={DistributorsLanding} />
            <TrackedRoute path="/FarmsLanding" component={FarmsLanding} />

            <TrackedRoute path="/StoreLocator" component={StoreLocator} />
            <TrackedRoute path="/signin" exact component={Signin} />
            <TrackedRoute path="/signup" exact component={Signup} />
            <TrackedRoute path="/contact" exact component={Contact} />
            <PrivateRoute path="/user_dashboard" exact component={UserDashboard} />
            <AdminRoute path="/admin_dashboard" exact component={AdminDashboard}  />
              <AdminRoute path="/create_category" exact component={AddCategory}/>
              <AdminRoute path="/create_product" exact component={AddProduct}/>

                <AdminRoute path="/create_photo" exact component={AddPhoto}/>
                  <AdminRoute path="/create_gear" exact component={AddGear}/>
                  <AdminRoute path="/create_user" exact component={AddUser}/>
                <TrackedRoute path="/cart" exact component={Cart} />
                  <AdminRoute path="/admin_orders" exact component={ManageOrders} />
                      <AdminRoute path="/admin_invoices" exact component={ManageInvoices} />
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
                     path="/admin_gears"
                     exact
                    component={ManageGears}
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
                      path="/admin/gear/update/:gearId"
                      exact
                      component={UpdateGear}
                  />
                  <AdminRoute
                      path="/admin_users"
                      exact
                      component={ManageUsers}
                  />
                  <AdminRoute
                      path="/admin_messages"
                      exact
                      component={ManageMessages}
                  />
                  <AdminRoute
                      path="/admin_invoices"
                      exact
                      component={ManageInvoices}
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
                  <AdminRoute
                      path="/admin/message/update/:messageId"
                      exact
                      component={UpdateMessage}
                  />
                  <AdminRoute
                      path="/admin/invoice/update/:invoiceId"
                      exact
                      component={UpdateInvoice}
                  />
                  <AdminRoute
                      path="/admin/invoice/view/:invoiceId"
                      exact
                      component={ViewInvoice}
                  />
                 </Switch>

      </BrowserRouter>
    );
  }

export default App;
