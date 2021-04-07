import "./SideNavBar.css";

export const SideNavBar = () => {
  return (
    <nav class="nav-site">
      <div class="nav-site-list">
        <span>Categories</span>
        <a href="#setup">Investing</a>
        <a href="#avatars">Trading</a>
        <a href="#alerts">Options</a>
        <a href="#badges">Economy</a>
      </div>
      <div class="nav-site-list">
        <span>Account</span>
        <a href="#setup">PlayList</a>
        <a href="#avatars">History</a>
        <a href="#alerts">Saved</a>
      </div>
    </nav>
  );
};
