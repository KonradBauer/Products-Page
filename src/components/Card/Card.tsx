import ornament from "../../images/bg-dots.svg";

interface CardProps {
  searchEngine: string;
  version: string;
  image: string;
  alt: string;
  customClassName?: string;
}

export const Card: React.FC<CardProps> = ({
  searchEngine,
  version,
  image,
  alt,
  customClassName,
}) => {
  return (
    <div
      className={`font-rubik-500 card w-80 bg-base-100 shadow-xl ${
        customClassName || ""
      }`}
    >
      <figure className="px-10 pt-10">
        <img src={image} alt={alt} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-[21px] font-bold">
          Add to {searchEngine}
        </h2>
        <p className="mb-6 text-lightGrey">Minimum version {version}</p>
        <div className="card-actions">
          <img src={ornament} alt="ornament" className="mb-3" />
          <button className="btn btn-primary w-full border-lightBlue bg-lightBlue font-bold hover:border-lightBlue hover:bg-white hover:text-lightBlue">
            Add & Install Extension
          </button>
        </div>
      </div>
    </div>
  );
};
