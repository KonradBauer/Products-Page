import React, { useEffect, useState } from "react";
import bookmark from "../../images/logo-bookmark.svg";
import navbookmark from "../../images/logo-bookmark-nav.svg";
import burgerButton from "../../images/icon-hamburger.svg";
import closeNav from "../../images/icon-close.svg";
import { Button } from "../Button/Button";
import { Facebook } from "../SvgComponents/FacebookIcon";
import { Twitter } from "../SvgComponents/TwitterIcon";

export const Header: React.FC = () => {
  const navigation = ["features", "pricing", "contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.classList.toggle("overflow-hidden", isMenuOpen);
    }

    return () => {
      if (body) {
        body.classList.remove("overflow-hidden");
      }
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative">
      {isMenuOpen && <div className="fixed inset-0 bg-darkBlue z-50" />}
      <div className="flex items-center justify-between mx-20 lg:p-6 font-rubik-500 max-md:mx-8 max-md:mt-2 relative z-50">
        {isMenuOpen && (
          <div className="flex flex-row flex-1">
            <img src={navbookmark} alt="Bookmark" className="" />
          </div>
        )}
        <div className="flex flex-row">
          <img src={bookmark} alt="Bookmark" className={`${isMenuOpen ? "hidden" : ""}`} />
        </div>
        <div className="md:hidden">
          <button className="burger-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <img src={closeNav} alt="CloseButton" className="burger-btn" />
            ) : (
              <img src={burgerButton} alt="BurgerButton" className="hamburger-icon" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <ul
              className={`menu uppercase flex-col items-center absolute left-0 w-full bg-darkBlue opacity-100 mt-12 ${
                isMenuOpen ? "h-screen min-h-screen" : ""
              }`}
            >
              {navigation.map((navi) => (
                <li key={navi}>
                  <a
                    className={`hover:text-lightRed hover:bg-transparent font-bold p-4 ${
                      isMenuOpen ? "text-white font-md rounded-none mt-4 font-normal text-xl" : ""
                    }`}
                    onClick={() => {
                      toggleMenu();
                      scrollToSection(navi);
                    }}
                  >
                    {navi}
                  </a>
                </li>
              ))}
              <button className="w-full border-2 py-2 rounded-md uppercase mt-4 text-xl bg-transparent text-white">
                login
              </button>
              <div className="flex justify-center mt-40 gap-6">
                <a className="cursor-pointer mx-2">
                  <Facebook />
                </a>
                <a className="cursor-pointer mx-2">
                  <Twitter />
                </a>
              </div>
            </ul>
          </div>
        )}

        <div className="hidden md:flex md:items-center md:space-x-6">
          <ul className="menu menu-horizontal uppercase flex items-center">
            {navigation.map((navi) => (
              <li key={navi}>
                <a
                  className="hover:text-lightRed hover:bg-transparent font-bold"
                  onClick={() => {
                    scrollToSection(navi);
                  }}
                >
                  {navi}
                </a>
              </li>
            ))}
          </ul>
          <Button text="login" />
        </div>
      </div>
    </div>
  );
};
