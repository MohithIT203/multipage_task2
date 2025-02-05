import React from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.css';
function Navbar() {
    const location = useLocation();
    return (
        <>

            <div className="navbar-options" style={{ backgroundColor: "skyblue", height: "40px", alignContent: 'center', fontSize: "18px" }}>
                <Link
                    className={location.pathname === "/" ? "active" : ""}
                    to='/'
                    style={{
                        textDecoration: "none",
                        padding: "10px",
                        margin: "20px",
                        color: "black"
                    }}

                >Home</Link>
                <Link
                    className={location.pathname === "/about" ? "active" : ""}
                    to='/about'
                    style={{
                        textDecoration: "none",
                        padding: "10px",
                        margin: "20px",
                        color: "black"
                    }}
                >About</Link>
                <Link
                    className={location.pathname === "/products" ? "active" : ""}
                    to='/products'
                    style={{
                        textDecoration: "none",
                        padding: "10px",
                        margin: "20px",
                        color: "black"
                    }}
                >Products</Link>
                <Link
                    className={location.pathname === "/contact" ? "active" : ""}
                    to='/contact'
                    style={{
                        textDecoration: "none",
                        padding: "10px",
                        margin: "20px",
                        color: "black"
                    }}

                >Contact</Link>
            </div>
        </>
    );
}
export default Navbar