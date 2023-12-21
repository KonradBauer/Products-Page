import React from "react";
import { Card } from "../Card/Card";
import chrome from "../../images/logo-chrome.svg";
import firefox from "../../images/logo-firefox.svg";
import opera from "../../images/logo-opera.svg";

export const Extension: React.FC = () => {
  return (
    <div className="font-rubik-500 text-center">
      <div className="text-[42px] font-bold max-md:mx-2 max-md:text-[25px]">
        Download the extension
      </div>
      <div className="mx-96 mb-24 mt-6 text-2xl font-semibold text-lightGrey max-lg:mx-24 max-md:mx-8 max-md:mb-16 max-md:text-[16px]">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </div>
      <div className="mb-32 flex flex-wrap justify-center gap-10 max-lg:mx-24 max-md:mx-12 max-md:gap-0">
        <Card
          searchEngine="Chrome"
          version="62"
          image={chrome}
          alt="chrome search engine logo"
          customClassName="mb-20 max-md:mb-0"
        />
        <Card
          searchEngine="Firefox"
          version="55"
          image={firefox}
          alt="firefox search engine logo"
          customClassName="mb-10 mt-10 max-md:mb-0 max-md:mt-8 "
        />
        <Card
          searchEngine="Opera"
          version="46"
          image={opera}
          alt="opera search engine logo"
          customClassName="mt-20 max-md:mt-8"
        />
      </div>
    </div>
  );
};
