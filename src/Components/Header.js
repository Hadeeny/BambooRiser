import "../Styles/Header.css";
const Header = ({ isToggled, menu }) => {
  return (
    <div className="container">
      <div className="nav-container">
        <nav>
          <div className="logo">
            <img className="head-logo" src="images/logo.svg" />
            <img
              className="hamburger toggle"
              src={`${
                !menu
                  ? `images/icon-close-menu.svg`
                  : "images/icon-hamburger.svg"
              }`}
              onClick={isToggled}
            />
          </div>
          <ul className={`item${menu ? "-active" : ""}`}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
