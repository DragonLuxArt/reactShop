import React, { Component } from "react";
import "../Style/output.css";
import _ from "lodash";
const API = "http://private-1c19e-reactlesson.apiary-mock.com/products";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSearch: "",
      products: [],
      cart: []
    };
  }

  _getData = () => {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  componentDidMount() {
    this._getData();
  }

  _productsRender = (products, textSearch) => {
    return this.filterProducts(products, textSearch).map(product => (
      <div key={product.objectID}>
        <img src={product.photo} />
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price} zł</p>
          <button
            onClick={() => this.addtoCart(product)}
            disabled={!product.in_stock}
          >
            Dodaj do koszyka
          </button>
        </div>
      </div>
    ));
  };

  _cartRender = () => {
    const { cart } = this.state;
    return cart.map(product => (
      <div className="cartItem">
        <p>
          <button onClick={() => this.deleteFromCart(product)}> x </button>
          {product.id} - {product.name} - {product.price}zł
        </p>
      </div>
    ));
  };

  onChanges = (key, value) => {
    this.setState({ [key]: value });
  };

  filterProducts = (products, textSearch) => {
    return _.filter(products, p =>
      _.includes(p.name.toLowerCase(), textSearch.toLowerCase())
    );
  };

  addtoCart = cartItem => {
    this.setState({
      cart: [...this.state.cart, cartItem]
    });
  };

  deleteFromCart = cartItem => {
    const x = this.state.cart;
    const y = this.state.cart.indexOf(cartItem);
    x.splice(y, 1);
    this.setState({
      cart: x
    });
  };

  sumCartItems = () => {
     return _.sumBy(this.state.cart, e => e.price);
  };

  render() {
    const { products, textSearch } = this.state;
    return (
      <div className="_MainPage">
        <section>
          <div className="_Search">
            <input
              className="_searchInput"
              name="textSearch"
              value={textSearch}
              placeholder="Szukaj..."
              onChange={e => this.onChanges("textSearch", e.target.value)}
            />
          </div>
        </section>

        <section className="_ProductList">
          {this._productsRender(products, textSearch)}
        </section>

        <section className="ProductCart">
          <div className="CartPage">
            <div className="CartTitle">
              <h1>Twój koszyk</h1>
            </div>
            <div className="CartProducts">{this._cartRender()}</div>
            <div className="CartCaption">
              <p>
                Podsumowanie: {this.sumCartItems()} zł
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MainPage;
