import hero from "../../images/illustration-hero.svg";

export const Subheader = () => {
  return (
    <div className="flex mt-12 mb-10 max-md:mt-16">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <img src={hero} className="max-w-2xl rounded-lg w-full" />
          <div>
            <h1 className="text-5xl font-bold max-w-lg max-md:text-[28px] max-md:flex max-md:text-center">
              A Simple Bookmark Manager
            </h1>
            <p className="py-6 text-lightGrey text-lg max-w-lg max-md:mx-3 max-md:text-center">
              A clean and simple interface to organize your favourite websites. Open a new browser
              tab and see you sites load instantly. Try it for free.
            </p>
            <div className="mt-4 max-md:flex justify-center">
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
