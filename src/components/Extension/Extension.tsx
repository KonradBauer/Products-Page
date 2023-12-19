import React from "react";
import { Card } from "../Card/Card";
import chrome from "../../images/logo-chrome.svg";
import firefox from "../../images/logo-firefox.svg";
import opera from "../../images/logo-opera.svg";

export const Extension: React.FC = () => {
  return (
    <div className="text-center font-rubik-500">
      <div className="text-[42px] font-bold max-md:text-[25px] max-md:mx-2">
        Download the extension
      </div>
      <div className="text-2xl text-lightGrey mx-96 mt-6 mb-24 max-md:mb-16 max-md:text-[16px] max-md:mx-8 max-lg:mx-24">
        We've got more browsers in the pipeline. Please do let us know if you've got a favourite
        you'd like us to prioritize.
      </div>
      <div className="flex justify-center gap-10 max-lg:mx-24 max-md:mx-0 mb-32 flex-wrap">
        <Card
          searchEngine="Chrome"
          version="62"
          image={chrome}
          alt="chrome search engine logo"
          customClassName="mb-20"
        />
        <Card
          searchEngine="Firefox"
          version="55"
          image={firefox}
          alt="firefox search engine logo"
          customClassName="mb-10 mt-10"
        />
        <Card
          searchEngine="Opera"
          version="46"
          image={opera}
          alt="opera search engine logo"
          customClassName="mt-20"
        />
      </div>
    </div>
  );
};
