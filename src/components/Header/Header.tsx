import bookmark from "../../images/logo-bookmark.svg";

export const Header = () => {
  const navigation = ["features", "pricing", "contact"];

  return (
    <div className="navbar flex justify-between items-center tracking-wider">
      <div className="navbar-start">
        <a>
          <img src={bookmark} alt="Bookmark" className="bookmark-icon" />
        </a>
      </div>
      <div className="navbar-end lg:flex sm:flex md:flex">
        <ul className="menu menu-horizontal uppercase gap-6 flex items-center">
          {navigation.map((navi) => (
            <li key={navi}>
              <a className="hover:text-lightRed hover:bg-transparent">{navi}</a>
            </li>
          ))}
          <li>
            <a className="bg-lightRed text-white px-8 py-3 hover:bg-white hover:text-lightRed hover:border-solid hover:border-4 hover:border-current">
              login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
