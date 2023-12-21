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

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
          parseFloat(prevState.populationText) - decrementPerSecond
        );
        return {
          ...prevState,
          populationText: `${newPopulation.toFixed(0)} already joined`,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="bg-lightBlue text-white flex flex-col items-center p-4 max-sm:pb-0 flex-wrap font-rubik-500">
        <span className="text-sm font-normal uppercase tracking-widest w-full flex justify-center mt-14">
          {state.populationText}
        </span>
        <span className="text-3xl max-sm:text-2xl flex justify-center text-center mt-10 mb-6 max-sm:mt-2 mx-0 font-bold tracking-wide lg:max-w-md">
          Stay up-to-date with what we're doing
        </span>
        <div className="max-sm:flex-wrap mb-16 lg:w-2/4 flex justify-center items-center relative">
          <div className="max-md:flex-1 mx-4">
            <input
              className={`input rounded-md w-full max-sm:w-[100%] text-black lg:mr-4  ${
                state.isValidEmail === false ? <Error /> : ""
              }`}
              placeholder="Enter your email address"
              value={state.email}
              onChange={handleEmailChange}
            />
            {state.isValidEmail === false && (
              <div>
                <div className="w-full bg-lightRed px-6 mb-4 rounded-md">
                  Whoops! Make sure it's an email.
                </div>
              </div>
            )}
          </div>
          <Button text="contact us" specialWidth marginTop capitalize onClick={handleButtonClick} />
        </div>
      </div>

      {state.showToast && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-green-500 text-white py-2 px-4 rounded">Success!</div>
        </div>
      )}

      <div className="navbar flex flex-col lg:flex-row justify-between tracking-wider bg-darkBlue p-6 lg:px-[56px] sm:flex-wrap font-bold">
        <img src={bookmark} alt="Bookmark" className="bookmark-icon text-white" />
        <div className="mx-8 lg:mx-12 p-4 lg:p-6 flex flex-1">
          <ul className="menu menu-horizontal uppercase gap-6 flex mt-4 lg:mt-0 lg:ml-10 max-md:flex-col items-center">
            {navigation.map((navi) => (
              <li key={navi.key}>
                <a className="text-lightGrey hover:text-lightRed hover:bg-transparent">
                  {navi.key}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-10 mx-6">
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
