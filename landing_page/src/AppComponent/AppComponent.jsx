import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "../Component/navbar";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/contact";
import Product from "../pages/product/product";
import About from "../pages/about/about";
function AppComponent() {
    return (<>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/products" element={<Product />}></Route>
            </Routes>
        </BrowserRouter>
    </>)
}
export default AppComponent