import "./SideNavBar.css";
import { Link } from "react-router-dom";

export const SideNavBar = () => {
  return (
    <nav class="nav-site">
      <div class="nav-site-list">
        <span>Categories</span>
        <Link to="/investing">Investing</Link>
        <Link to="/trading">Trading</Link>
        <Link to="/options">Options</Link>
        <Link to="/economy">Economy</Link>
      </div>
      <div class="nav-site-list">
        <span>Account</span>
        <Link to="/playlist">PlayList</Link>
        <Link to="/history">History</Link>
        <Link to="/saved">Saved</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};
