import React from "react";

import { Route, Routes } from "react-router-dom";

import AdminNav from "./admin/header/AdminNav";
import About from "./admin/pages/About";
import Contact from "./admin/pages/Contact";
import Home from "./admin/pages/Home";
import Product from "./admin/pages/Product";
import UserNav from "./user/header/AdminNav";
import UserHome from "./user/pages/Home"
import UserAbout from "./user/pages/About"
import UserContact from "./user/pages/Contact"
import UserProduct from "./user/pages/Product"

const App = () => {
  let role = "user"
  if (role === "admin") {
    return ( 
      <>
        <AdminNav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/product" exact element={<Product />} />

          <Route />
        </Routes>
      </>
    );
  } else if (role === "user") {
    return (
      <>
        <UserNav />
        <Routes>
          <Route path="/" exact element={<UserHome />} />
          <Route path="/about" exact element={<UserAbout />} />
          <Route path="/contact" exact element={<UserContact />} />
          <Route path="/product" exact element={<UserProduct />} />
        </Routes>
      </>
    );
  } else {
    return <h1>Not found</h1>;
  }
};

export default App;
