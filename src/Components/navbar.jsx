import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-md fixed-top ${scrolled ? "bg-dark shadow" : "bg-transparent"}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/navImage.png" alt="title" height="40" />
        </Link>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${scrolled ? "text-white" : "text-white"}`} to="/about-us">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${scrolled ? "text-white" : "text-white"}`} to="/contact-us">
                CONTACT US
              </Link>
            </li>
            {localStorage.getItem("token") && (
              <li className="nav-item">
                <Link className="nav-link text-light" to="/admin/dashboard">
                  Admin-Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
