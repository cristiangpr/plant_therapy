import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listUsers, deleteUser, updateUser } from "./apiAdmin";
import moment from "moment";
import {Table} from 'react-bootstrap';
import AdminLinks from "./AdminLinks";


const ManageUsers = () => {
    const [users, setUsers] = useState([]);


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



    const destroy = userId => {
        deleteUser( userId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadUsers();
            }
        });
    };
    const createUser = () => (
      <Link to='create_product'>
          <button className="btn btn-outline-success">
              Create User
          </button>
      </Link>

    )

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
                      <Table striped bordered hover>
                      <thead>
                             <tr>

                               <th> Name</th>
                               <th>E mail</th>
                               <th>Role</th>
                               <th></th>
                               <th></th>
                               <th>{createUser()}</th>
                             </tr>
                      </thead>
                      <tbody>

                          {users.map((u, i) => (
                            <tr>
                              <td

                              >
                                  <strong>{u.name}</strong>
                                  </td>
                                  <td

                                  >
                                      <strong>{u.email}</strong>
                                      </td>
                                      <td

                                      >
                                          <strong>{u.role}</strong>
                                          </td>
                                          <td>

                                          <Link to={`/admin/product/update/${u._id}`}>
                                              <button className="btn btn-outline-primary">
                                                  View
                                              </button>
                                          </Link>
                                          </td>

                                  <td>

                                  <Link to={`/admin/user/update/${u._id}`}>
                                      <button className="btn btn-outline-warning">
                                          Update
                                      </button>
                                  </Link>
                                  </td>
                                  <td>
                                  <button
                                      type="button"
                                      onClick={() => destroy(u._id)}
                                      className="btn btn-outline-danger"
                                  >
                                      Delete
                                  </button>
                              </td>
                              </tr>
                          ))}
                          </tbody>
                      </Table>
                  </div>
              </div>
          </Layout>
      );
};
export default ManageUsers;
