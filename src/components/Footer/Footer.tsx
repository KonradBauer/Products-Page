import bookmark from "../../images/logo-bookmark.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";

export const Footer: React.FC = () => {
  const navigation = ["features", "pricing", "contact"];

  return (
    <div className="navbar flex flex-col lg:flex-row items-center justify-between tracking-wider bg-darkBlue p-6 lg:px-24">
      <div className="mx-8 lg:mx-12 p-4 lg:p-6">
        <a>
          <img src={bookmark} alt="Bookmark" className="bookmark-icon flex-shrink" />
        </a>
        <ul className="menu menu-horizontal uppercase gap-6 flex items-center mt-4 lg:mt-0 lg:ml-10">
          {navigation.map((navi) => (
            <li key={navi}>
              <a className="text-lightGrey hover:text-lightRed hover:bg-transparent">{navi}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-10 mx-16">
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
