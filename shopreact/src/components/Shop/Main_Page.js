import React, { Component } from "react";
import "../Style/output.css";

const API = "http://private-1c19e-reactlesson.apiary-mock.com/products";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }
  render() {
    const { products } = this.state;
    //console.log(this.state)
    return (
      <div className="_MainPage">
        <section>
          <div className="_Search">
            <input className="_searchInput" placeholder="Szukaj..." />
          </div>
        </section>

        <section className="_productList">
          {products.map(product => (
            <div key={product.objectID}>
              <h1>{product.name}</h1>
              <img src={product.photo} />
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default MainPage;
