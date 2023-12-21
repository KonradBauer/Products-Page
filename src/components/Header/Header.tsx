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

  const openModal = () => {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.showModal();
    }
  };

  setTimeout(() => {
    openModal();
  }, 30000);

  return (
    <div className="relative">
      {isMenuOpen && <div className="fixed inset-0 z-50 bg-darkBlue" />}

      <div className="font-rubik-500 relative z-50 mx-20 flex items-center justify-between max-md:mx-8 max-md:mt-2 lg:p-6">
        {isMenuOpen && (
          <div className="flex flex-1 flex-row">
            <img src={navbookmark} alt="Bookmark" />
          </div>
        )}

        <div className="flex flex-row">
          <img
            src={bookmark}
            alt="Bookmark"
            className={`${isMenuOpen ? "hidden" : ""}`}
            onMouseEnter={openModal}
          />
        </div>

        <div className="md:hidden">
          <button
            className="burger-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <img src={closeNav} alt="CloseButton" className="burger-btn" />
            ) : (
              <img
                src={burgerButton}
                alt="BurgerButton"
                className="hamburger-icon"
              />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <ul
              className={`menu absolute left-0 mt-12 w-full flex-col items-center bg-darkBlue uppercase opacity-100 ${
                isMenuOpen ? "h-screen min-h-screen" : ""
              }`}
            >
              {navigation.map((navi) => (
                <li
                  key={navi}
                  className="opa w-full items-center border-b tracking-widest"
                >
                  <a
                    className={`p-4 font-bold hover:bg-transparent hover:text-lightRed ${
                      isMenuOpen
                        ? "font-md mt-4 rounded-none text-xl font-normal text-white"
                        : ""
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
              <button className="mt-8 w-full rounded-md border-2 bg-transparent py-1 text-xl uppercase tracking-widest text-white">
                login
              </button>
              <div className="mt-40 flex justify-center gap-6">
                <a className="mx-2 cursor-pointer">
                  <Facebook />
                </a>
                <a className="mx-2 cursor-pointer">
                  <Twitter />
                </a>
              </div>
            </ul>
          </div>
        )}

        <div className="hidden md:flex md:items-center md:space-x-6">
          <ul className="menu menu-horizontal flex items-center uppercase">
            {navigation.map((navi) => (
              <li key={navi}>
                <a
                  className="font-bold hover:bg-transparent hover:text-lightRed"
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
