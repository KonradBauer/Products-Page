interface ModalElementProps {
  hero: string;
  title: string;
  description: string;
}

export const ModalElement: React.FC<ModalElementProps> = ({ hero, title, description }) => {
  return (
    <div className="max-md:mx-4">
      <div className="flex flex-col lg:flex-row gap-32 max-md:gap-2 items-start">
        <img src={hero} className="max-w-2xl rounded-lg w-full lg:w-auto" />
        <div className="text-left">
          <h1 className="text-4xl font-bold mt-12 text-left max-md:text-center max-md:text-xl">
            {title}
          </h1>
          <p className="py-5 text-lightGrey font-semibold text-xl max-w-lg max-md:mx-0 max-md:text-[16px] max-md:text-center max-md:text-sm">
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
