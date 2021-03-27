import React from "react";

import "./Header.scss";

const Header = ({ navLinks }) => {
  return (
    <header className="header">
      <nav className="header__navigation">
        {navLinks.map((item, index) => <a key={index} className="header__link" href={item}>{item}</a>)}
      </nav>
    </header>

  )
}

export default Header;