import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [],
  };

  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  // render ends here

  // executes after constructor and render method (includes life cycle of child components if any) of current component
  componentDidMount = async () => {
    // fetch data from data source
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await response.json();
    // console.log(prods);

    this.setState({ products: prods });
    // promise.then((response) => {
    //   var promise2 = response.json();
    //   promise2.then((products) => {
    //     console.log(products);

    //     this.setState({ products: products });
    //   });
    // });
  };
  // executes when the user clicks on + button
  handleIncrement = (product, maxValue) => {
    // clone products array, get index of the selected product
    var allProducts = [...this.state.products];
    var index = allProducts.indexOf(product);

    // update the value directly
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      // overwrite the changes in the state using setState method
      this.setState({ products: allProducts });
    }
  };

  // executes when the user clicks on - button
  handleDecrement = (product, minValue) => {
    // clone products array, get index of the selected product
    var allProducts = [...this.state.products];
    var index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      // update the value directly
      allProducts[index].quantity--;

      // overwrite the changes in the state using setState method
      this.setState({ products: allProducts });
    }
  };

  // executes when the user clicks on Delete (x) button in the Product component.
  handleDelete = (product) => {
    // clone products array, get index of the selected product
    var allProducts = [...this.state.products];
    var index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete?")) {
      // delete product based on index (1 element will be removed from the allProducts array)
      allProducts.splice(index, 1);

      // update the state of the current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}
