interface FeatureElementProps {
  hero: string;
  title: string;
  description: string;
}

export const FeatureElement: React.FC<FeatureElementProps> = ({ hero, title, description }) => {
  return (
    <div className="mt-12 mb-32 max-md:mt-4 flex justify-center">
      <div className="flex flex-col lg:flex-row gap-32 max-md:gap-2 items-start">
        <div className="absolute bg-lightBlue h-96 mt-20 w-[39%] left-0 rounded-r-full"></div>
        <img src={hero} className="max-w-2xl rounded-lg w-full lg:w-auto relative" />
        <div className="text-left">
          <h1 className="text-4xl font-bold mt-12 max-md:text-2xl text-left max-md:text-center">
            {title}
          </h1>
          <p className="py-5 text-lightGrey font-semibold text-xl max-w-lg max-md:mx-0 max-md:text-[16px] max-md:text-center">
            {description}
          </p>
          <div className="mt-4 max-lg:flex justify-start max-md:hidden">
            <button className="btn bg-lightBlue text-white border-transparent border-2 font-bold hover:bg-white hover:text-lightBlue hover:border-lightBlue px-8 max-md:mr-4 ml-0">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
