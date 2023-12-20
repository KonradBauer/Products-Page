import hero from "../../images/illustration-hero.svg";

export const Subheader = () => {
  return (
    <div className="flex">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <img src={hero} className="max-w-2xl rounded-lg w-full" />
          <div>
            <h1 className="text-5xl font-bold max-w-lg">A Simple Bookmark Manager</h1>
            <p className="py-6 text-lightGrey text-lg max-w-lg">
              A clean and simple interface to organize your favourite websites. Open a new browser
              tab and see you sites load instantly. Try it for free.
            </p>
            <div className="">
              <button className="btn bg-lightBlue text-white border-transparent border-2 font-bold hover:bg-white hover:text-lightBlue hover:border-lightBlue px-8 mr-6">
                Get it on Chrome
              </button>
              <button className="btn bg-[#f7f7f7] text-[#626471] font-bold border-transparent border-2 hover:border-[#626471] hover:bg-white px-8">
                Get it on Firefox
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
