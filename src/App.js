// import "./App.css";
import { SideNavBar } from "./Components/VideoList/SideNavBar";
import { TopNavBar } from "./Components/VideoList/TopNavBar";
import { Routes, Route } from "react-router-dom";
import { ListingArea } from "./Components/VideoList/ListingArea";
import { useState } from "react";

function App() {
  const [toast, setToast] = useState("toastDiv");
  // const toast = document.getElementById("toastDiv");
  function showToast() {
    setToast("showtoastDiv");

    setTimeout(() => {
      setToast("toastDiv");
    }, 4000);
  }
  return (
    <div className="App">
      <button onClick={showToast} class="toast-button">
        Show toast
      </button>
      <div id={toast}>Toast Message</div>
      {/* <Routes>
        <Route path="/" element={<TopNavBar />} />
        <Route path="/" element={<SideNavBar />} />
      </Routes> */}
      <TopNavBar />
      <SideNavBar />
      <ListingArea />
      {/* {JSON.stringify(toast)} */}
    </div>
  );
}

export default App;
