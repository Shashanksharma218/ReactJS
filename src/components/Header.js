import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  return (
  <div className="header">
    <div className="logoContainer">
      <img className="logo" src={LOGO_URL} />
      <div className="title">
        <h1>Feasto</h1>
      </div>
    </div>
    <div className="navBar">
      <button className="loginBtn" onClick={()=>{loginButton==="Login"?setLoginButton("Logout"):setLoginButton("Login")}}>{loginButton}</button>
      <ul className="navList">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
)};

export default Header;
