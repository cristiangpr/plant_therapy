import React from "react";

import { Link } from "react-router-dom";


const AdminLinks = () => {
     return (
         <div className="card" >
             <h4 className="card-header name">Admin Links</h4>
             <ul className="list-group">
             <li className="list-group-item">
               <Link className="nav-link-dash" to="/admin_dashboard">
            Dashboard
                 </Link>
             </li>
                      <li className="list-group-item">
                        <Link className="nav-link-dash" to="/admin_inventories">
                        Inventory
                          </Link>
                      </li>
                      <li className="list-group-item">

                     <Link className="nav-link-dash" to="/admin_categories">
                  Categories
                     </Link>
                 </li>
                 <li className="list-group-item">
                     <Link className="nav-link-dash" to="/admin_products">
                   Products
                     </Link>
                 </li>
                 <li className="list-group-item">
                     <Link className="nav-link-dash" to="/admin_orders">
                         Orders
                     </Link>
                 </li>
                 <li className="list-group-item">
                     <Link className="nav-link-dash" to="/admin_coupons">
                    Coupons
                     </Link>
                 </li>


                 <li className="list-group-item">
                     <Link className="nav-link-dash" to="/admin_users">
                     Users
                     </Link>
                 </li>
             </ul>
         </div>
     );
 };
export default AdminLinks;
