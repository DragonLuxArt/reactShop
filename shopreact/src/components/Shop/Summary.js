import React, { Component } from "react";
import "../Style/output.css";
import { sumBy } from "lodash";

class Summary extends Component {
  sumCartItems = () => {
    return sumBy(this.props.cartProducts, e => e.price);
  };

  render() {
    return (
      <div className="_Summary">
        <div className="CartCaption">
          <p>Podsumowanie: {this.sumCartItems()} zł</p>
        </div>
      </div>
    );
  }
}

export default Summary;
