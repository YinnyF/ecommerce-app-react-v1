import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { 
        id: 1,
        name: "Scott",
        phone: "123-456",
        photo: "https://randomuser.me/api/portraits/men/75.jpg" 
      },
      { 
        id: 2,
        name: "Jones",
        phone: "123-456",
        photo: "https://randomuser.me/api/portraits/men/76.jpg" 
      },
      { 
        id: 3,
        name: "Allen",
        phone: "123-456",
        photo: "https://randomuser.me/api/portraits/men/77.jpg" 
      },
      { 
        id: 4,
        name: "James",
        phone: null,
        photo: "https://randomuser.me/api/portraits/men/78.jpg" 
      },
      { 
        id: 5,
        name: "John",
        phone: null,
        photo: "https://randomuser.me/api/portraits/men/79.jpg" 
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}

          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>ID #</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  // Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) {
      return phone;
    } else {
      return <div className="bg-warning p-2 text-center">N/A</div>;
    }
  };

  // executes when the user clicks on "Change Photo" button in the grid
  // receives the "customer" object and index of the currently clicked customer

  onChangePhotoClick = (customer, index) => {
    // get existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "https://randomuser.me/api/portraits/men/80.jpg";

    // update "customers" array in the state
    this.setState({customers: custArr})
  }

  getCustomerRow = () => {
    return this.state.customers.map((customer, index) => {
      return (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>
            <img src={customer.photo} alt="Customer"/>
            <div>
              <button className="btn btn-sm btn-secondary" onClick={() => {this.onChangePhotoClick(customer, index);}}>Change Photo</button>
            </div>
          </td>
          <td>{customer.name}</td>
          <td>{this.getPhoneToRender(customer.phone)}</td>
        </tr>
      );
    });
  };
}
