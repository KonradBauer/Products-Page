import bookmark from "../../images/logo-bookmark.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";

export const Footer: React.FC = () => {
  const navigation = ["features", "pricing", "contact"];

  return (
    <div className="navbar justify-between tracking-wider bg-darkBlue">
      <div className="mx-44 p-6">
        <a>
          <img src={bookmark} alt="Bookmark" className="bookmark-icon flex-shrink" />
        </a>
        <ul className="menu menu-horizontal uppercase gap-6 flex items-center ml-10">
          {navigation.map((navi) => (
            <li key={navi}>
              <a className="text-lightGrey hover:text-lightRed hover:bg-transparent">{navi}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-white gap-12 mr-36">
        <img src={facebook} alt="Facebook" className="facebook-icon cursor-pointer" />
        <img src={twitter} alt="Twitter" className="twitter-icon cursor-pointer" />
      </div>
    </div>
  );
};
