import Menu from "../components/component-menu/Menu.js";
import "./pageExplorar.css";

export default function PageExplorar() {
  return (
    <div>
      <Menu />

      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
