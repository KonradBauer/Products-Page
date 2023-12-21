import hero from "../../images/illustration-hero.svg";

export const Subheader = () => {
  return (
    <div className="flex mt-12 mb-10 max-md:mt-16 relative">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <div className="absolute bg-lightBlue h-96 mt-44 w-[40%] right-0 rounded-l-full max-md:w-[83%] max-md:h-48 max-md:mt-0 max-md:mb-72" />
          <img src={hero} className="max-w-2xl rounded-lg w-full relative" />
          <div>
            <h1 className="text-5xl font-bold max-w-lg max-md:text-[28px] max-md:flex max-lg:text-center max-md:justify-center">
              A Simple Bookmark Manager
            </h1>
            <p className="py-6 text-lightGrey font-semibold text-2xl max-w-lg max-md:mx-4 max-md:text-center max-md:text-[16px]">
              A clean and simple interface to organize your favourite websites. Open a new browser
              tab and see your sites load instantly. Try it for free.
            </p>
            <div className="mt-4 max-lg:flex justify-center">
              <button className="btn bg-lightBlue text-white border-transparent border-2 font-bold hover:bg-white hover:text-lightBlue hover:border-lightBlue px-8 mr-6 max-md:mr-4 max-md:px-4">
                Get it on Chrome
              </button>
              <button className="btn bg-[#f7f7f7] text-[#626471] font-bold border-transparent border-2 hover:border-[#626471] hover:bg-white px-8 max-md:px-4">
                Get it on Firefox
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
