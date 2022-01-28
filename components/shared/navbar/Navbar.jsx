import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg w-100">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image
              width={120}
              height={60}
              src="/assets/impeks_logo.svg"
              className="logo"
              alt="impex-logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#insuranses">
                  Sug`urta
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#news">
                  OAV uchun
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#about">
                  Aloqa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
