import React, { Component } from "react";

export default class MainContent extends Component {
  state = { 
    pageTitle: "Customers", 
    customersCount: 5,
    customers: [
      {id: 1, name: "Scott", phone: "123-456"},
      {id: 2, name: "Jones", phone: "123-456"},
      {id: 3, name: "Allen", phone: "123-456"},
      {id: 4, name: "James", phone: null},
      {id: 5, name: "John", phone: null},
    ]
 };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}

          <span className="badge bg-secondary m-2">{this.state.customersCount}</span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>ID #</th>
              <th>Customer Name</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>
                      {customer.phone ? (
                        customer.phone ) : (
                        <div className="bg-warning p-2 text-center">N/A</div>
                        )}
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }

  // Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 7
    });
  }
}
