import React, { Component } from "react";
import Datatable from "react-bs-datatable"; // Import this package


class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.header = [
      { title: "Name", prop: "name", sortable: true, filterable: true },
      {
        title: "User Name",
        prop: "username",
        sortable: true,
        filterable: true
      },
      { title: "Phone", prop: "phone", sortable: true, filterable: true },
      { title: "Website", prop: "website", sortable: true, filterable: true }
    ];
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(this.state.items);
      return (
        <div class="container">
          <Datatable
            tableHeaders={this.header}
            tableBody={this.state.items}
            keyName="userTable"
            tableClass="striped hover responsive"
            rowsPerPage={3}
            rowsPerPageOption={[3, 5, 8, 10]}
            initialSort={{ prop: "username", isAscending: true }}
          />
        </div>
      );
    }
  }
}
export default DataTable;
