export const Subheader = () => {
  return (
    <div className="flex">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">A Simple Bookmark Manager</h1>
            <p className="py-6 text-lightGrey text-lg">
              A clean and simple interface to organize your favourite websites. Open a new browser
              tab and see you sites load instantly. Try it for free.
            </p>
            <button className="btn btn-primary bg-lightBlue text-white border-none">
              Get it on Chrome
            </button>
            <button className="btn btn-primary bg-lightGrey text-black border-none">
              Get it on Firefox
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
