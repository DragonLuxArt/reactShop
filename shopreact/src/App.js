import React, { Component } from "react";
import Header from "./components/Shop/Header";
import Footer from "./components/Shop/Footer";
import Products from "./components/Shop/Products";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Products />
        <Footer/>
      </div>
    );
  }
}

export default App;
