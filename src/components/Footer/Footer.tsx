import React, { useState, useEffect } from "react";
import bookmark from "../../images/logo-bookmark-white.svg";
import { Facebook } from "../SvgComponents/FacebookIcon";
import { Button } from "../Button/Button";
import { Twitter } from "../SvgComponents/TwitterIcon";
import { Error } from "../SvgComponents/ErrorIcon";

interface FooterProps {}

interface NavigationItem {
  key: string;
}

interface State {
  populationText: string;
  email: string;
  isValidEmail: boolean | null;
  showToast: boolean;
}

const initialPopulation = 35000;
const decrementPerSecond = initialPopulation / 20;

export const Footer: React.FC<FooterProps> = () => {
  const navigation: NavigationItem[] = [
    { key: "features" },
    { key: "pricing" },
    { key: "contact" },
  ];

  const [state, setState] = useState<State>({
    populationText: `${initialPopulation}+ already joined`,
    email: "",
    isValidEmail: null,
    showToast: false,
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      email: e.target.value,
      isValidEmail: null,
    }));
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleButtonClick = () => {
    const isValid = validateEmail(state.email);
    setState((prevState) => ({
      ...prevState,
      isValidEmail: isValid,
      showToast: isValid,
    }));

    if (isValid) {
      console.log("Email is valid:", state.email);

      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          showToast: false,
        }));
      }, 3000);
    } else {
      console.log("Invalid email address");
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setState((prevState) => {
        const newPopulation = Math.max(
          0,
          parseFloat(prevState.populationText) - decrementPerSecond,
        );
        return {
          ...prevState,
          populationText: `${newPopulation.toFixed(0)} already joined`,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    <>
      <div
        className="font-rubik-500 flex flex-col flex-wrap items-center bg-lightBlue p-4 text-white max-sm:pb-0"
        id="contact"
      >
        <span className="mt-14 flex w-full justify-center text-sm font-normal uppercase tracking-widest">
          {state.populationText}
        </span>
        <span className="mx-0 mb-6 mt-10 flex justify-center text-center text-3xl font-bold tracking-wide max-sm:mt-2 max-sm:text-2xl lg:max-w-md">
          Stay up-to-date with what we're doing
        </span>
        <div className="relative mb-16 flex items-center justify-center max-sm:flex-wrap lg:w-2/4">
          <div className="relative mx-4 max-md:flex-1">
            <input
              className={`input w-full rounded-md pr-10 text-black max-sm:w-full lg:mr-4  ${
                state.isValidEmail === false ? "border-error" : ""
              }`}
              placeholder="Enter your email address"
              value={state.email}
              onChange={handleEmailChange}
            />
            {state.isValidEmail === false && (
              <div className="absolute right-0 top-1.5 mr-2 mt-2">
                <Error />
              </div>
            )}
            {state.isValidEmail === false && (
              <div className="mb-4 w-full rounded-md bg-lightRed px-6">
                Whoops! Make sure it's an email.
              </div>
            )}
          </div>

          <Button
            text="contact us"
            specialWidth
            marginTop
            capitalize
            onClick={handleButtonClick}
          />
        </div>
      </div>

      {state.showToast && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="rounded bg-green-500 px-4 py-2 text-white">
            Success!
          </div>
        </div>
      )}

      <div className="navbar flex flex-col justify-between bg-darkBlue p-6 font-bold tracking-wider sm:flex-wrap lg:flex-row lg:px-[56px]">
        <img
          src={bookmark}
          alt="Bookmark"
          className="bookmark-icon text-white"
        />
        <div className="mx-8 flex flex-1 p-4 lg:mx-12 lg:p-6">
          <ul className="menu menu-horizontal mt-4 flex items-center gap-6 uppercase max-md:flex-col lg:ml-10 lg:mt-0">
            {navigation.map((navi) => (
              <li key={navi.key}>
                <a
                  className="text-lightGrey hover:bg-transparent hover:text-lightRed"
                  onClick={() => scrollToSection(navi.key)}
                >
                  {navi.key}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-6 flex gap-10">
          <a className="cursor-pointer">
            <Facebook />
          </a>
          <a className="cursor-pointer">
            <Twitter />
          </a>
        </div>
      </div>
    </>
  );
};
