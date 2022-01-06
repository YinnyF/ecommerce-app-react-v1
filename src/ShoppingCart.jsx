import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "A", price: 1, quantity: 0 },
      { id: 2, productName: "B", price: 2, quantity: 0 },
      { id: 3, productName: "C", price: 3, quantity: 0 },
      { id: 4, productName: "D", price: 4, quantity: 0 },
      { id: 5, productName: "E", price: 5, quantity: 0 },
    ],
  };

  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                productName={product.productName}
                price={product.price}
                quantity={product.quantity}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
