// import "./App.css";
import { SideNavBar } from "./Components/VideoList/SideNavBar";
import { TopNavBar } from "./Components/VideoList/TopNavBar";
import { Routes, Route } from "react-router-dom";
import { ListingArea } from "./Components/VideoList/ListingArea";
import { useState } from "react";
import { useVideoManagement } from "./Contexts/VideoContextProvider";

function App() {
  // const toast = document.getElementById("toastDiv");
  const { toast, toastMessage } = useVideoManagement();

  return (
    <div className="App">
      {/* <button onClick={showToast} class="toast-button">
        Show toast
      </button> */}
      <div className={toast}>{toastMessage}</div>
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
