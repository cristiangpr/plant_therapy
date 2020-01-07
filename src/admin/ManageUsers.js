import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listUsers, updateUser } from "./apiAdmin";
import moment from "moment";
import {Table} from 'react-bootstrap';
import AdminLinks from "./AdminLinks";
import Datatable from 'react-bs-datatable';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [header, setHeader] = useState([
        { title: "Name", prop: "name", sortable: true, filterable: true, editable: true },
        {title: "E-mail", prop: "email", sortable: true, filterable: true},
        {title: "Phone", prop: "phone"},
        {title: "Role", prop: "role", sortable: true, filterable: true},
        {title: "Edit", prop: "edit"},
])


    const { user, token } = isAuthenticated();

    const loadUsers = () => {
        listUsers().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setUsers(data);
            }
        });
    };



    const createUser = () => (
      <Link to='create_user'>
          <button className="btn btn-outline-success">
              Create User
          </button>
      </Link>

    )
    const body =  users.map((u, i) => (

            {   name: u.name,
                email: u.email,
                phone: u.phone,
                role: u.role,
                edit:    <Link to={`/admin/user/update/${u._id}`}>
                        <button className="btn btn-outline-warning">
                          Edit
                        </button>
                    </Link>
               }
                ))

    useEffect(() => {
        loadUsers();

    }, []);


      return (
          <Layout
              title="Manage Users"

              className="container-fluid"
          >    <h2 className="text-center">
                  Total {users.length} users
              </h2>
              <div className="row">

                  <div className="col-sm-3" id="admin-links">{AdminLinks()}</div>
                  <div className="col-sm-9">

                      <hr />
                      <Datatable
                        tableHeaders={header}
                        tableBody={body}


                        rowsPerPage={50}
                        rowsPerPageOption={[50, 100, 200]}
                        initialSort={{ prop: "name", isAscending: true }}

                      />
                      {createUser()}
                  </div>
              </div>
          </Layout>
      );
};
export default ManageUsers;
