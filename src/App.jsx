import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./Components/TopNav";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import SingleItem from "./Components/SingleItem";
import Cart from "./Components/Cart";
import Clothing from "./Components/Clothing";
import Items from "./Components/Items";
import Checkout from "./Components/Checkout";
function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/singleItem" element={<SingleItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/items" element={<Items />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
