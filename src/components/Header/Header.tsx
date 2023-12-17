import React, { useState } from "react";
import bookmark from "../../images/logo-bookmark.svg";
import burgerButton from "../../images/icon-hamburger.svg";

export const Header: React.FC = () => {
  const navigation = ["features", "pricing", "contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between mx-16 lg:mx-24">
      <div className="p-4 lg:p-6">
        <img src={bookmark} alt="Bookmark" className="bookmark-icon" />
      </div>
      <div className="md:hidden">
        <button
          className="burger-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{ width: "30px" }}
        >
          <img src={burgerButton} alt="BurgerButton" className="hamburger-icon" />
        </button>
      </div>
      <ul
        className={`menu menu-horizontal uppercase gap-8 flex items-center ${
          isMenuOpen ? "hidden md:flex" : "md:flex hidden"
        }`}
      >
        {navigation.map((navi) => (
          <li key={navi}>
            <a className="hover:text-lightRed hover:bg-transparent">{navi}</a>
          </li>
        ))}
        <button className="btn btn-error uppercase text-white px-10 pt-1 tracking-wider shadow-lg hover:bg-white hover:text-lightRed hover:">
          login
        </button>
      </ul>
    </div>
  );
};
