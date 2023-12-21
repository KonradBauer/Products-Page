import hero from "../../images/illustration-hero.svg";

export const Subheader = () => {
  return (
    <div className="relative mb-10 mt-12 flex max-md:mt-16">
      <div className="hero">
        <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
          <div className="absolute right-0 mt-44 h-96 w-[40%] rounded-l-full bg-lightBlue max-lg:mb-64 max-lg:mt-0 max-lg:w-[70%] max-md:mb-72 max-md:mt-0 max-md:h-48 max-md:w-[83%]" />
          <img src={hero} className="relative w-full max-w-2xl rounded-lg" />
          <div>
            <h1 className="max-w-lg text-5xl font-bold max-lg:text-center max-md:flex max-md:justify-center max-md:text-[28px]">
              A Simple Bookmark Manager
            </h1>
            <p className="max-w-lg py-6 text-2xl font-semibold text-lightGrey max-md:mx-4 max-md:text-center max-md:text-[16px]">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="mt-4 justify-center max-lg:flex">
              <button className="btn mr-6 border-2 border-transparent bg-lightBlue px-8 font-bold text-white hover:border-lightBlue hover:bg-white hover:text-lightBlue max-md:mr-4 max-md:px-4">
                Get it on Chrome
              </button>
              <button className="btn border-2 border-transparent bg-[#f7f7f7] px-8 font-bold text-[#626471] hover:border-[#626471] hover:bg-white max-md:px-4">
                Get it on Firefox
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
