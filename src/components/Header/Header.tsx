import bookmark from "../../images/logo-bookmark.svg";

export const Header: React.FC = () => {
  const navigation = ["features", "pricing", "contact"];

  return (
    <div className="flex flex-col lg:flex-row items-center tracking-wider mx-16 lg:mx-24">
      <div className="mx-8 lg:mx-12 p-4 lg:p-6">
        <img src={bookmark} alt="Bookmark" className="bookmark-icon" />
      </div>
      <div className="flex-grow flex justify-end mx-8 lg:mx-12">
        <ul className="menu menu-horizontal uppercase gap-8 flex items-center">
          {navigation.map((navi) => (
            <li key={navi}>
              <a className="hover:text-lightRed hover:bg-transparent">{navi}</a>
            </li>
          ))}
          <button className="btn btn-error uppercase text-white px-10 pt-1 tracking-wider shadow-lg hover:bg-white hover:text-lightRed hover:">
            login
          </button>
        </ul>
      </div>
    </div>
  );
};
