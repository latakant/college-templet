import React from "react";

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <div className="brand">
          {/* Replace with your logo file in public/ or an imported asset */}
          <img
            src="https://www.cmr.edu.in/wp-content/uploads/2025/10/CMR-NAAC-LOGO.png"
            alt="Panjab University logo"
            className="brand-logo"
          />
          <div className="brand-text">
            {/* <h1>CMR University</h1> */}
            <div className="est">Established in 1882</div>
          </div>
        </div>

        <nav className="top-links" aria-label="top links">
          <a href="#home">Home</a>
          <a href="#pu@mail">PU@Mail</a>
          <a href="#contact">Contact PU</a>
        </nav>
      </div>
    </header>
  );
}
