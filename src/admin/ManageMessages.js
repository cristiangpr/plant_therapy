import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getMessages } from "./apiAdmin";
import {Table} from 'react-bootstrap';
import AdminLinks from './AdminLinks'
import Datatable from 'react-bs-datatable';

const ManageMessages = () => {
    const [messages, setMessages] = useState([]);
    const [header, setHeader] = useState([
        { title: "Name", prop: "name", sortable: true, filterable: true },
        { title: "E mail", prop: "email", sortable: true, filterable: true },
          { title: "Subject", prop: "subject", sortable: true, filterable: true },

          {title: "Message", prop: "message"},
              {title: "", prop: "view"},

    ]);


    const { user, token } = isAuthenticated();

    const loadMessages = () => {
        getMessages().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessages(data);
            }
        });
    };




    const body =   messages.map((v, i) => (
          {    name: v.name,
               email: v.email,
               subject: v.subject,
              message: v.message,
                view:    <Link to={`/admin/message/update/${v._id}`}>
                        <button className="btn btn-outline-primary">
                        View
                        </button>
                    </Link>
               }
                ))

    useEffect(() => {
        loadMessages();
    }, []);

    return (
        <Layout
            title="Manage Messages"

            className="container-fluid"
        >  <h2 className="text-center">
              Total {messages.length} messages
          </h2>
            <div className="row">
                <div className="col-sm-3" id="admin-links">{AdminLinks()}

                </div>
                <div className="col-sm-9">

                    <hr />
                    <Datatable
                      tableHeaders={header}
                      tableBody={body}
                      keyName="categoryTable"
                      tableClass="striped border responsive"
                      rowsPerPage={10}
                      rowsPerPageOption={[3, 5, 8, 10]}
                      initialSort={{ prop: "name", isAscending: true }}
                    />

                </div>
            </div>
        </Layout>
    );
};

export default ManageMessages;
