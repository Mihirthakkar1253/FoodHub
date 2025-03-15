import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Title = () => (
  <div>
    <Link to="/">
      {" "}
      <img
        className="logo"
        alt="logo"
        src="https://brand.foodhub.com/images/png/foodhub_vertical_new.png"
      ></img>
    </Link>
  </div>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title></Title>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/"> Home</Link>
          </li>

          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="/cart">Cart</Link>
          </li>

          {isLoggedIn ? (
            <button
              className={"logout-btn"}
              style={{
                background: "none",
                cursor: "pointer",
                border: "1px solid black",
                borderRadius: "10px",
                margin: "2px",
              }}
              onClick={() => setIsLoggedIn(false)}
            >
              LogOut
            </button>
          ) : (
            <button
              className={"login-btn"}
              style={{
                background: "none",
                cursor: "pointer",
                border: "1px solid black",
                borderRadius: "10px",
                margin: "2px",
              }}
              onClick={() => setIsLoggedIn(true)}
            >
              LogIn
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
