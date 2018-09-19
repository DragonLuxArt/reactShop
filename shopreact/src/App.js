import React, { Component } from "react";
import Header from "./components/Shop/Header";
import Footer from "./components/Shop/Footer";
import MainPage from "./components/Shop/Main_Page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainPage />
        <Footer/>
      </div>
    );
  }
}

export default App;
