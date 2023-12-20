import React, { useState } from "react";
import { SimpleBookmarking } from "./SimpleBookmarking";
import { SpeedySearching } from "./SpeedySearching";
import { EasySharing } from "./EasySharing";

interface Tab {
  label: string;
  content: React.ReactNode;
}

export const Features: React.FC = () => {
  const tabs: Tab[] = [
    { label: "Simple Bookmarking", content: <SimpleBookmarking /> },
    { label: "Speedy Searching", content: <SpeedySearching /> },
    { label: "Easy Sharing", content: <EasySharing /> },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].label);

  const redColor =
    "text-lightRed border-lightRed hover:text-red-500 focus:border-b-1 border-red-500";

  return (
    <div className="text-center font-rubik-500 mt-24">
      <div className="text-[42px] font-bold max-md:text-[25px] max-md:mx-2">Features</div>
      <div className="text-2xl text-lightGrey font-semibold mx-96 mt-6 mb-24 max-md:mb-16 max-md:text-[16px] max-md:mx-8 max-lg:mx-24">
        Our aim is to make it quick and easy for you to access your favourite websites. Your
        bookmarks sync between your devices so you can access them on the go.
      </div>
      <div
        className={
          "tabs tabs-bordered mx-6 sm:mx-72 flex flex-col items-center sm:flex-row sm:justify-center"
        }
      >
        {tabs.map((tab) => (
          <React.Fragment key={tab.label}>
            <label
              className={`tab text-xl pb-14 cursor-pointer font-semibold border-red relative max-md:pt-4 ${
                tab.label === selectedTab
                  ? `text-black font-bold border-b-1 ${redColor}`
                  : "text-lightGrey hover:text-lightRed border-lightRed"
              }`}
            >
              <input
                type="radio"
                name={`my_tabs_${tab.label}`}
                role="tab"
                className="hidden"
                aria-label={tab.label}
                checked={tab.label === selectedTab}
                onChange={() => setSelectedTab(tab.label)}
              />
              {tab.label === selectedTab && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-lightRed md-max:p-4"></div>
              )}
              {tab.label}
            </label>
          </React.Fragment>
        ))}
      </div>
      <div className="mt-8">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            role="tabpanel"
            className={`tab-content p-10 ${tab.label === selectedTab ? "" : ""}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
