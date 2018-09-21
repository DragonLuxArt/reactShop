import React, { Component } from "react";
import "../Style/output.css";
import _ from "lodash";

const API = "http://private-1c19e-reactlesson.apiary-mock.com/products";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSearch: "",
      products: []
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

  _productsRender = () => {
    const { products } = this.state;
    return products.map(product => (
      <div key={product.objectID}>
        <img src={product.photo} />
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button disabled={!product.in_stock}>Dodaj do koszyka</button>
        </div>
      </div>
    ));
  };

  onChanges = (key, value) => {
    this.setState({ [key]: value });
    console.log(this.state);
  };

  filterProducts = (products, textSearch) => {
    _.filter(products, p => _.includes(p.name, textSearch));
  };

  render() {
    const { textSearch } = this.state;
    console.log(this.state);
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

        <section className="_ProductList">{this._productsRender()}</section>

        <section className="ProductCart">
          <div className="CartPage">
            <div className="CartTitle">
              <h1>Twój koszyk</h1>
            </div>
            <div className="CartProducts">
              <h1>Zawartość</h1>
            </div>
            <div className="CartCaption">
              <p>
                Podsumowanie {}
                zł
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MainPage;
