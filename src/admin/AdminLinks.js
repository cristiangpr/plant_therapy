import React from "react";

import { Link } from "react-router-dom";


const AdminLinks = () => {
     return (
         <div className="card" id="dark-card" >
             <h4 className="card-header name">Admin Links</h4>
             <ul className="list-group">
             <li className="list-group-item list-group-item-dark">
               <Link className="nav-link" to="/admin_dashboard">
            Dashboard
                 </Link>
             </li>
                      <li className="list-group-item list-group-item-dark">
                        <Link className="nav-link" to="/admin_inventories">
                        Inventory
                          </Link>
                      </li>
                      <li className="list-group-item list-group-item-dark">

                     <Link className="nav-link" to="/admin_categories">
                  Categories
                     </Link>
                 </li>
                 <li className="list-group-item list-group-item-dark">
                     <Link className="nav-link" to="/admin_products">
                   Products
                     </Link>
                 </li>
                 <li className="list-group-item list-group-item-dark">
                     <Link className="nav-link" to="/admin_orders">
                         Orders
                     </Link>
                 </li>
                 <li className="list-group-item list-group-item-dark">
                     <Link className="nav-link" to="/admin_coupons">
                    Coupons
                     </Link>
                 </li>


                 <li className="list-group-item list-group-item-dark">
                     <Link className="nav-link" to="/admin_users">
                     Users
                     </Link>
                 </li>
             </ul>
         </div>
     );
 };
export default AdminLinks;
