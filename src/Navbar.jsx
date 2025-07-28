import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div id="Navbar" className="container-fluid">
        <a className="navbar-brand " href="#" style={{ color: "white" }}>
          <img
            src="/img/logo1.png"
            id="navTitle"
            alt="logo"
            width={80}
            height={80}
          />
          Lamine-Fit
        </a>
        <div id="div_men" style={{ color: "white" }}>
          <Link className="mx-3" id="goupe_men" to={"/"}>
            {" "}
            Accueil{" "}
          </Link>
          <Link className="mx-3" id="goupe_men" to="/objectifs">
            Objectifs{" "}
          </Link>
          <Link className="mx-3" id="goupe_men" to={"/Exercices"}>
            {" "}
            Exercices{" "}
          </Link>
          <Link className="mx-3" id="goupe_men" to={"/Conseils"}>
            {" "}
            Conseils{" "}
          </Link>
        </div>
        <button
          id="btn_men"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ width: 250 }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <a className="navbar-brand " href="#" style={{ color: "white" }}>
                <img
                  src="/img/logo1.png"
                  id="navTitle"
                  alt="logo"
                  width={80}
                  height={80}
                />
                Lamine-Fit
              </a>
            </h5>
            <button
              id="btnoff"
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item" id="li_of">
                <Link className="" id="goupe_of" to={"/"}>
                  {" "}
                  Accueil{" "}
                </Link>
              </li>
              <li className="nav-item" id="li_of">
                <Link className="" id="goupe_of" to="/objectifs">
                  Objectifs{" "}
                </Link>
              </li>
              <li className="nav-item" id="li_of">
                <Link className="" id="goupe_of" to={"/Exercices"}>
                  {" "}
                  Exercices{" "}
                </Link>
              </li>
              <li className="nav-item" id="li_of">
                <Link className="" id="goupe_of" to={"/Conseils"}>
                  {" "}
                  Conseils{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
