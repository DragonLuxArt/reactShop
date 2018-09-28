import React, { Component } from "react";
import Cart from "./Cart";
import Summary from "./Summary";
import "../Style/output.css";
import { filter, includes } from "lodash";
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
      <div className="_ItemsDesc" key={product.objectID}>
        <img src={product.photo} />
        <div>
          <h1 className="productsTitle">{product.name}</h1>
          <p>Cena: {product.price} zł</p>
          <p>{product.description}</p>
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

  onChanges = (key, value) => {
    this.setState({ [key]: value });
  };

  filterProducts = (products, textSearch) => {
    return filter(products, p =>
      includes(p.name.toLowerCase(), textSearch.toLowerCase())
    );
  };

  addtoCart = cartItem => {
    debugger
    this.setState({
      cart: [...this.state.cart, cartItem]
    });
  };
  
  render() {
    console.log("mmm",this.state.cart)
    const { products, textSearch, cart } = this.state;
    return (
      <div className="_MainPage">
        <div className="leftSide">
          <section className="searchSection">
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
        </div>
        <Cart cartProducts={cart} />
        <Summary cartProducts={cart}/>
      </div>
    );
  }
}

export default MainPage;
