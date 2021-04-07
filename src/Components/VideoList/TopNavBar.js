import "./TopNavBar.css";

export const TopNavBar = () => {
  return (
    <nav class="navigation-bar">
      <div class="navigation-container">
        <span class="bold-text">Fin View</span>
      </div>

      <div className="navigation-container">
        <input class="searchbar" type="text" placeholder="Search" />
      </div>
      <div class="navigation-container">
        <ul>
          <li class="navigation-list">
            <button class="badge-icon notification">
              <img src="./assets/bell.svg" alt="bell" class="badge-image" />
              <span class="button-badge-number">13</span>
            </button>
          </li>

          <li class="navigation-list">
            <button class="badge-icon wishlist">
              <img src="./assets/heart.svg" alt="heart" class="badge-image" />
              <span class="button-badge-number">7</span>
            </button>
          </li>

          <li class="navigation-list">
            <button class="badge-icon cart">
              <img src="./assets/cart.svg" alt="cart" class="badge-image" />
              <span class="button-badge-number">3</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
