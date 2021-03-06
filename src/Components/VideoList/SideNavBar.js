import "./SideNavBar.css";
import "../../App.css";
import { Link } from "react-router-dom";
import { useVideoManagement } from "../../Contexts/VideoContextProvider";

export const SideNavBar = () => {
  const { menuValue } = useVideoManagement();
  return (
    <nav
      class="finview-nav-site"
      style={menuValue ? { display: "flex" } : { display: "" }}
    >
      <div class="finview-nav-site-list">
        <span>Categories</span>
        <Link to="/">Home</Link>

        <Link to="/investing">Investing</Link>
        <Link to="/trading">Trading</Link>
        <Link to="/options">Options</Link>
        <Link to="/economy">Economy</Link>
      </div>
      <div class="finview-nav-site-list">
        <span>Account</span>
        <Link to="/playlist">PlayList</Link>
        <Link to="/history">History</Link>
        <Link to="/watchlater">Watch Later</Link>
        {/* <Link to="/login">Login</Link> */}
      </div>
    </nav>
  );
};
