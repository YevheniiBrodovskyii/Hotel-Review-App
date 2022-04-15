import { useTheme } from "../hooks/use-theme";

import "../../App.css";

function Header() {
  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme("light");
  };
  const handleDarkThemeClick = () => {
    setTheme("dark");
  };

  return (
    <nav className="layout-color">
      <button onClick={handleLightThemeClick}>Light</button>
      <button onClick={handleDarkThemeClick}>Dark</button>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Sky-shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/YevheniiBrodovskyii/Sky-shop-Task-React-">
              GitHub Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
