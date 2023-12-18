import React, { useState, useEffect } from "react";
import bookmark from "../../images/logo-bookmark-white.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import { Button } from "../Button/Button";

interface FooterProps {}

interface NavigationItem {
  key: string;
}

interface State {
  populationText: string;
  email: string;
  isValidEmail: boolean;
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
    isValidEmail: true,
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      email: e.target.value,
      isValidEmail: validateEmail(e.target.value),
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleButtonClick = () => {
    if (state.isValidEmail) {
      console.log("Email is valid:", state.email);
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
      <div className="bg-lightBlue text-white flex flex-col items-center p-4 max-sm: pb-0 flex-wrap font-rubik">
        <span className="text text-sm font-normal uppercase tracking-widest w-full flex justify-center mt-14">
          {state.populationText}
        </span>
        <span className="text-3xl max-sm:text-2xl flex justify-center text-center mt-10 mb-6 max-sm:mt-2 mx-0 font-bold tracking-wide lg:max-w-md">
          Stay up-to-date with what we're doing
        </span>
        <div className="max-sm:flex-wrap mb-16 lg:w-2/4 flex justify-center items-center">
          <input
            className={`input input-bordered rounded-md join-item w-[40%] max-sm:w-[95%] text-black lg:mr-4 md:mr-4 max-sm:mb-4 ${
              state.isValidEmail ? "" : "border-error"
            }`}
            placeholder="Enter your email address"
            value={state.email}
            onChange={handleEmailChange}
          />
          <Button text="contact us" capitalize width onClick={handleButtonClick} />
        </div>
      </div>

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
          <a className="facebook-icon cursor-pointer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a className="twitter-icon cursor-pointer">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </>
  );
};
