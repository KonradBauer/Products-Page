import React, { useState } from "react";
import bookmark from "../../images/logo-bookmark.svg";
import burgerButton from "../../images/icon-hamburger.svg";
import { Button } from "../Button/Button";

export const Header: React.FC = () => {
  const navigation = ["features", "pricing", "contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between mx-20 lg:p-6 font-rubik-500 max-md:mx-8 max-md:mt-2">
      <div>
        <img src={bookmark} alt="Bookmark" className="bookmark-icon" />
      </div>
      <div className="md:hidden">
        <button className="burger-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <img src={burgerButton} alt="BurgerButton" className="hamburger-icon" />
        </button>
      </div>
      <ul
        className={`menu menu-horizontal uppercase gap-6 flex items-center ${
          isMenuOpen ? "" : "hidden md:flex"
        }`}
      >
        {navigation.map((navi) => (
          <li key={navi}>
            <a className="hover:text-lightRed hover:bg-transparent font-bold">{navi}</a>
          </li>
        ))}
        <Button text="login" />
      </ul>
    </div>
  );
};
