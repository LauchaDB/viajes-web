import { User } from "@auth0/auth0-react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import "./menu.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../Logout";
import LoginButton from "../../Login";

export default function Munu() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <header className="r">
      <nav className="navbar-menu">
        {/* Menu normal */}
        <ul className="menu">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              Home
            </NavLink>
          </li>
          {isAuthenticated && (
            <>
              <li>
                <NavLink
                  to={"/viajesGuardados"}
                  className={({ isActive }) => (isActive ? "activo" : "")}
                >
                  Viajes Guardados
                </NavLink>
                {/*<ul class="submenu two">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>*/}
              </li>
            </>
          )}

          <li>
            <NavLink
              to={"/explorar"}
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              Explorar
            </NavLink>
            {/*<ul class="submenu three">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>*/}
          </li>

          <li>
            <NavLink
              to={"/cuenta"}
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              {isAuthenticated && (
                <img src={user.picture} className="imgPerfilUs" />
              )}
              {!isAuthenticated && (
                <img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png" />
              )}
            </NavLink>
            {/*<ul class="submenu five">
                <li><a>Contact me</a></li>
                <li><a>About me</a></li>
            </ul>*/}
          </li>
          <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
        </ul>
        {/* Mini Menu */}
        <nav className="navbar-mini-menu">
          <div className="menu-select">
            <span className="menu-actual tituloMiniMenu">
              <img className="imgLogoNav" src="../logoPestaña.png" />
            </span>
            <span className="btn-select"></span>
          </div>
          <ul className="mini-menu-options">
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a>Clasificar</a>
            </li>
            <li tabIndex={0}>
              <a>Explorar</a>
              {/*
                    <ul class="submenu five">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>*/}
            </li>
            <li tabIndex={0}>
              <a>Menu 3</a>
            </li>
            <li tabIndex={0}>
              <a>About</a>
              {/* Mini Menu
                    <ul class="submenu five">
                        <li><a>Contact me</a></li>
                        <li><a>About me</a></li>
                    </ul>*/}
            </li>
          </ul>{" "}
          {/* Fin lista mini menu */}
        </nav>{" "}
        {/* Fin mini menu */}
      </nav>{" "}
    </header>
  );
}
