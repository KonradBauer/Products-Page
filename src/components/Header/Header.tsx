import bookmark from "../../images/logo-bookmark.svg";

export const Header: React.FC = () => {
  const navigation = ["features", "pricing", "contact"];

  return (
    <div className="flex flex-col lg:flex-row items-center tracking-wider mx-16 lg:mx-24">
      <div className="mx-8 lg:mx-12 p-4 lg:p-6">
        <a href="#">
          <img src={bookmark} alt="Bookmark" className="bookmark-icon" />
        </a>
      </div>

      <div className="flex-grow flex justify-end mx-8 lg:mx-12">
        <ul className="menu menu-horizontal uppercase gap-8 flex items-center">
          {navigation.map((navi) => (
            <li key={navi}>
              <a className="hover:text-lightRed hover:bg-transparent">{navi}</a>
            </li>
          ))}
          <li>
            <a className="bg-lightRed text-white px-9 py-3 shadow-md hover:bg-white hover:text-lightRed hover:border-solid hover:border-4 hover:border-current hover:shadow-lg">
              login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
