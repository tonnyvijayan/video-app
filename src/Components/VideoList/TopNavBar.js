import "./TopNavBar.css";
import "../../App.css";
import { Link } from "react-router-dom";
import stock from "./Assets/stock.svg";
import menu from "./Assets/menu.svg";
import { useVideoManagement } from "../../Contexts/VideoContextProvider";

export const TopNavBar = () => {
  const { menuValue, setMenuValue } = useVideoManagement();
  return (
    <nav class="navigation-bar">
      <div class="navigation-container">
        {/* <span class="bold-text">
          <img src={stock} alt="stock" />
        </span> */}
        <img src={stock} alt="stock" />
        <strong>Fin View</strong>
      </div>

      {/* <div className="navigation-container">
        <input class="searchbar" type="text" placeholder="Search" />
      </div> */}
      <div class="navigation-container">
        <Link to="/login" class="navigation-buttons bg-cl-blue cl-white">
          SignIn
        </Link>

        <Link
          to="/signup"
          class="navigation-buttons bg-cl-white cl-blue border-blue"
        >
          SignUp
        </Link>

        <button
          class="menu-button"
          onClick={() => {
            setMenuValue(!menuValue);
          }}
        >
          <img src={menu} />
        </button>
      </div>
    </nav>
  );
};
