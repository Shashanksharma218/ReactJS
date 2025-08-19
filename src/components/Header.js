import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import ThemeToggleButton from "./Toggle";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = (props) => {
  const {onlineStatus} = props;
  const [loginButton, setLoginButton] = useState("Login");
  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
        <div className="title">
          <h1>Feasto</h1>
        </div>
      </div>
      <div className="navBar">
        {/* <div>Online Status:</div> */}
        <div className="mx-4">
          <ThemeToggleButton/> 
        </div>
        <div>
          {loggedInUser}
        </div>
        <button
          className="loginBtn"
          onClick={() => {
            loginButton === "Login"
              ? setLoginButton("Logout")
              : setLoginButton("Login");
          }}
        >
          {loginButton}
        </button>
        <ul className="navList">
          <li><Link to="/" className="navBtn">Home</Link></li>
          <li><Link to="/about" className="navBtn">About</Link></li>
          <li><Link to="/contact" className="navBtn">Contact Us</Link></li>
          <li><Link to="/cart" className="navBtn">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
