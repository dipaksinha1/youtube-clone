import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SiderBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early Return Pattern-more readable
  if (!isMenuOpen) return null;

  return (
    <div className="w-24 shadow-lg mt-4">
      <h1 className="font-bold mt-6">Sidebar</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold mt-6">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold mt-6">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SiderBar;
