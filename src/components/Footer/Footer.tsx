import React, { useState } from "react";
import bookmark from "../../images/logo-bookmark-white.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import { Button } from "../Button/Button";

export const Footer: React.FC = () => {
  const navigation = ["features", "pricing", "contact"];

  const populationText = "35.000+ already joined";
  const newsletterHeadText = "Stay up-to-date with what we're doing";

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleButtonClick = () => {
    if (isValidEmail) {
      console.log("Email is valid:", email);
    } else {
      console.log("Invalid email address");
    }
  };

  return (
    <>
      <div className="bg-lightBlue text-white flex flex-col items-center p-4 max-sm: pb-0 flex-wrap font-rubik">
        <span className="text text-sm font-normal uppercase tracking-widest w-full flex justify-center mt-14">
          {populationText}
        </span>
        <span className="text-3xl max-sm:text-2xl flex justify-center text-center mt-10 mb-6 max-sm:mt-2 mx-0 font-bold tracking-wide lg:max-w-md">
          {newsletterHeadText}
        </span>
        <div className="max-sm:flex-wrap mb-16 lg:w-2/4 flex justify-center items-center">
          <input
            className={`input input-bordered rounded-md join-item w-[40%] max-sm:w-[95%] text-black lg:mr-4 md:mr-4 max-sm:mb-4 ${
              isValidEmail ? "" : "border-error"
            }`}
            placeholder="Enter your email address"
            value={email}
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
              <li key={navi}>
                <a className="text-lightGrey hover:text-lightRed hover:bg-transparent">{navi}</a>
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
