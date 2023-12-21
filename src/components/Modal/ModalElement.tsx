interface ModalElementProps {
  hero: string;
  title: string;
  description: string;
}

export const ModalElement: React.FC<ModalElementProps> = ({
  hero,
  title,
  description,
}) => {
  return (
    <div className="max-md:mx-4">
      <div className="flex flex-col items-start gap-32 max-md:gap-2 lg:flex-row">
        <img src={hero} className="w-full max-w-2xl rounded-lg lg:w-auto" />
        <div className="text-left">
          <h1 className="mt-12 text-left text-4xl font-bold max-md:text-center max-md:text-xl">
            {title}
          </h1>
          <p className="max-w-lg py-5 text-xl font-semibold text-lightGrey max-md:mx-0 max-md:text-center max-md:text-[16px] max-md:text-sm">
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
