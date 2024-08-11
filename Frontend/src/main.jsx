import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // routing ke liye hme in tino ko import krna hota hai
import App from "./App.jsx";
import "./index.css";
import HomePage from "./Landing-Page/home/HomePage.jsx";
import AboutPage from "./Landing-Page/about/AboutPage.jsx";
import Signup from "./Landing-Page/signup/Signup.jsx";
import ProductPage from "./Landing-Page/products/ProductPage.jsx";
import PricingPage from "./Landing-Page/pricing/PricingPage.jsx";
import SupportPage from "./Landing-Page/support/SupportPage.jsx";
import Navbar from "./Landing-Page/Navbar.jsx";
import Footer from "./Landing-Page/Footer.jsx";
import PageNotFound from "./Landing-Page/PageNotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />}>
        {" "}
      </Route>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
