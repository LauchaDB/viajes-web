import { NavLink, BrowserRouter as Router } from "react-router-dom";
import "./menu.css";

export default function Munu() {
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
          <li>
            <NavLink
              to={"/filtrar"}
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              Filtrar
            </NavLink>
            {/*<ul class="submenu two">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>*/}
          </li>
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
              to={"/clasificar"}
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              Clasificar
            </NavLink>
            {/*<ul class="submenu four">
                <li><a>SubMenu 1</a></li>
                <li><a>SubMenu 2</a></li>
            </ul>*/}
          </li>
          <li>
            <NavLink
              to={"/cuenta"}
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              <img src="https://img.icons8.com/ios-filled/30/000000/user-male-circle.png" />
            </NavLink>
            {/*<ul class="submenu five">
                <li><a>Contact me</a></li>
                <li><a>About me</a></li>
            </ul>*/}
          </li>
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
