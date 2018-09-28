import React, { Component } from "react";
import "../Style/output.css";

class Cart extends Component {
  
  _cartRender = () => {
    const { cartProducts } = this.props;
    return cartProducts.map(product => (
      <div className="cartItem">
        <p>
          <button onClick={() => this.deleteFromCart(product)}> x </button>
          {product.id} - {product.name} - {product.price}
          zł
        </p>
      </div>
    ));
  };

  deleteFromCart = cartItem => {
    const x = this.props.cartProducts;
    const y = this.props.cartProducts.indexOf(cartItem);
    x.splice(y, 1);
    this.setState({
      cartProducts: x
    });
  };

  render() {
    return (
      <div className="_Cart">
        <section className="ProductCart">
          <div className="CartPage">
            <div className="CartTitle">
              <h1>Twój koszyk</h1>
            </div>
            <div className="CartProducts">{this._cartRender()}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Cart;
