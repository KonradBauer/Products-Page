import React, { useState } from "react";
import { FeatureElement } from "./FeatureElement";
import heroFirst from "../../images/illustration-features-tab-1.svg";
import heroSecond from "../../images/illustration-features-tab-2.svg";
import heroThird from "../../images/illustration-features-tab-3.svg";

interface Tab {
  label: string;
  content: React.ReactNode;
}

export const Features: React.FC = () => {
  const tabs: Tab[] = [
    {
      label: "Simple Bookmarking",
      content: (
        <FeatureElement
          hero={heroFirst}
          title="Bookmark in one click"
          description="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you
    complete control over how you manage your favourite sites."
        />
      ),
    },
    {
      label: "Speedy Searching",
      content: (
        <FeatureElement
          hero={heroSecond}
          title="Intelligent search"
          description="Our powerful search feature will help you find saved sites in no time at all. No needed
          to trawl through all of your bookmarks."
        />
      ),
    },
    {
      label: "Easy Sharing",
      content: (
        <FeatureElement
          hero={heroThird}
          title="Share your bookmarks"
          description="Easily share your bookmarks and collections with others. Createa shareable link that you can send at the click of a button."
        />
      ),
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].label);

  const redColor =
    "text-lightRed border-lightRed hover:text-red-500 focus:border-b-1 border-red-500";

  return (
    <div className="font-rubik-500 mt-24 text-center" id="features">
      <div className="text-[42px] font-bold max-md:mx-2 max-md:text-[25px]">
        Features
      </div>
      <div className="mx-96 mb-24 mt-6 text-2xl font-semibold text-lightGrey max-lg:mx-24 max-md:mx-8 max-md:mb-8 max-md:text-[16px]">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </div>
      <div
        className={
          "tabs tabs-bordered mx-6 flex flex-col items-center sm:mx-72 sm:flex-row sm:justify-center"
        }
      >
        {tabs.map((tab) => (
          <React.Fragment key={tab.label}>
            <label
              className={`border-red tab relative cursor-pointer pb-14 text-xl font-semibold max-md:pt-4 ${
                tab.label === selectedTab
                  ? `border-b-1 font-bold text-black ${redColor}`
                  : "border-lightRed text-lightGrey hover:text-lightRed"
              } w-72`}
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
                <div className="md-max:p-4 absolute inset-x-0 bottom-0 h-1 bg-lightRed"></div>
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
            className={`tab-content p-10 ${
              tab.label === selectedTab ? "block" : "hidden"
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
