interface FeatureElementProps {
  hero: string;
  title: string;
  description: string;
}

export const FeatureElement: React.FC<FeatureElementProps> = ({
  hero,
  title,
  description,
}) => {
  return (
    <div className="mb-32 mt-12 flex justify-center max-md:mt-4">
      <div className="flex flex-col items-start gap-32 max-md:gap-2 lg:flex-row">
        <div className="absolute left-0 mt-20 h-96 w-[39%] rounded-r-full bg-lightBlue max-md:mt-8 max-md:h-48 max-md:w-[83%]" />
        <img
          src={hero}
          className="relative w-full max-w-2xl rounded-lg lg:w-auto"
        />
        <div className="text-left">
          <h1 className="mt-12 text-left text-4xl font-bold max-md:text-center max-md:text-2xl">
            {title}
          </h1>
          <p className="max-w-lg py-5 text-xl font-semibold text-lightGrey max-md:mx-0 max-md:text-center max-md:text-[16px]">
            {description}
          </p>
          <div className="mt-4 justify-start max-lg:flex max-md:hidden">
            <button className="btn ml-0 border-2 border-transparent bg-lightBlue px-8 font-bold text-white hover:border-lightBlue hover:bg-white hover:text-lightBlue max-md:mr-4">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
