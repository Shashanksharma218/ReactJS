import { LOGO_URL } from "../utils/constants";
const Header = () => (
  <div className="header">
    <div className="logoContainer">
      <img className="logo" src={LOGO_URL} />
      <div className="title">
        <h1>Feasto</h1>
      </div>
    </div>
    <div className="navBar">
      <ul className="navList">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
