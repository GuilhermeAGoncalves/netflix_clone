import React from "react";
import "./Header.style.scss";

function Header({ blackHeader }) {
  return (
    <header className={blackHeader ? "black" : ""}>
      {" "}
      <div className="logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          ></img>
        </a>
      </div>
      <div className="user">
        <a href="/">
          <img
            src="https://i.pinimg.com/736x/47/0c/33/470c336a187a11796277738cf2c1ae60.jpg"
            alt="user"
          ></img>
        </a>
      </div>
    </header>
  );
}

export default Header;
