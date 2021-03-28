import React from "react";
import { Link } from "react-router-dom";

import formatService from "../../services/format-service";

import "./Header.scss";

const Header = () => {
  const navLinks = ["characters", "books", "houses"];

  return (
    <header className="header">
      <nav className="header__navigation">
        <Link to="/characters" className="header__link">Characters</Link>
        <Link to="/books" className="header__link">Books</Link>
        <Link to="/houses" className="header__link">Houses</Link>
      </nav>
    </header>

  )
}

export default Header;