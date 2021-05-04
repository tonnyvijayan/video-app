// import "./App.css";
import { SideNavBar } from "./Components/VideoList/SideNavBar";
import { TopNavBar } from "./Components/VideoList/TopNavBar";
import { Routes, Route } from "react-router-dom";
import { ListingArea } from "./Components/VideoList/ListingArea";
import { useState } from "react";
import { useVideoManagement } from "./Contexts/VideoContextProvider";

function App() {
  const { toast, toastMessage } = useVideoManagement();

  return (
    <div className="App">
      <div className={toast}>{toastMessage}</div>

      <TopNavBar />
      <SideNavBar />
      <ListingArea />
    </div>
  );
}

export default App;
