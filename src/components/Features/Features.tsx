export const Features: React.FC = () => {
  return (
    <div className="text-center font-rubik-500">
      <div className="text-[42px] font-bold max-md:text-[25px] max-md:mx-2">Features</div>
      <div className="text-2xl text-lightGrey mx-96 mt-6 mb-24 max-md:mb-16 max-md:text-[16px] max-md:mx-8 max-lg:mx-24">
        Our aim is to make it quick and easy for you to access your favourite websites. Your
        bookmarks sync between your devices so you can access them on the go.
      </div>
      <div className="flex flex-col items-center">
        <div role="tablist" className="tabs tabs-bordered m-0 flex justify-center">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Simple Bookmarking"
          />

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Speedy Searching"
            checked
          />

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Easy Sharing"
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 1
          </div>
          <div role="tabpanel" className="tab-content p-10">
            Tab content 2
          </div>
          <div role="tabpanel" className="tab-content p-10">
            Tab content 3
          </div>
        </div>
      </div>
    </div>
  );
};
