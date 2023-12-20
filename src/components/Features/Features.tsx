import React, { useState } from "react";

interface Tab {
  label: string;
  content: string;
}

export const Features: React.FC = () => {
  const tabs: Tab[] = [
    { label: "Simple Bookmarking", content: "Tab content 1" },
    { label: "Speedy Searching", content: "Tab content 2" },
    { label: "Easy Sharing", content: "Tab content 3" },
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="text-center font-rubik-500 mt-24">
      <div className="text-[42px] font-bold max-md:text-[25px] max-md:mx-2">Features</div>
      <div className="text-2xl text-lightGrey mx-96 mt-6 mb-24 max-md:mb-16 max-md:text-[16px] max-md:mx-8 max-lg:mx-24">
        Our aim is to make it quick and easy for you to access your favourite websites. Your
        bookmarks sync between your devices so you can access them on the go.
      </div>
      <div className="tabs tabs-bordered mx-72">
        {tabs.map((tab, index) => (
          <React.Fragment key={index}>
            <label
              className={`tab text-xl pb-14 cursor-pointer font-bold focus:border-b-1 border-lightRed relative ${
                index === selectedTab
                  ? "text-black font-bold border-b-1 border-lightRed"
                  : "text-lightGrey hover:text-lightRed"
              }`}
            >
              <input
                type="radio"
                name={`my_tabs_${index}`}
                role="tab"
                className="hidden"
                aria-label={tab.label}
                checked={index === selectedTab}
                onChange={() => setSelectedTab(index)}
              />
              {index === selectedTab && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-lightRed"></div>
              )}
              {tab.label}
            </label>
          </React.Fragment>
        ))}
      </div>
      <div className="mt-8">
        {tabs.map((tab, index) => (
          <div
            key={index}
            role="tabpanel"
            className={`tab-content p-10 ${index === selectedTab ? "" : "hidden"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
