import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nopad">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Logo
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 centered-nav">
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === "home" ? "active" : ""}`} to="#"onClick={() => handleClick("home")}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === "services" ? "active" : ""}`} to="#"onClick={() => handleClick("services")}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === "blog" ? "active" : ""}`} to="#"onClick={() => handleClick("blog")}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === "offers" ? "active" : ""}`} to="#"onClick={() => handleClick("offers")}>
                Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === "about" ? "active" : ""}`} to="#"onClick={() => handleClick("about")}>
                About us
              </Link>
            </li>
          </ul>
          <div className="icon-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
