import bookmark from "../../images/logo-bookmark.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";

export const Footer: React.FC = () => {
  const navigation = ["features", "pricing", "contact"];

  return (
    <div className="navbar flex flex-col lg:flex-row justify-between tracking-wider bg-darkBlue p-6 lg:px-[56px] sm:flex-wrap">
      <img src={bookmark} alt="Bookmark" className="bookmark-icon text-white" />
      <div className="mx-8 lg:mx-12 p-4 lg:p-6 flex flex-1">
        <ul className="menu menu-horizontal uppercase gap-6 flex mt-4 lg:mt-0 lg:ml-10 max-md:flex-col">
          {navigation.map((navi) => (
            <li key={navi}>
              <a className="text-lightGrey hover:text-lightRed hover:bg-transparent">{navi}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-10 mx-6">
        <a className="facebook-icon cursor-pointer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a className="twitter-icon cursor-pointer">
          <img src={twitter} alt="Twitter" />
        </a>
      </div>
    </div>
  );
};
