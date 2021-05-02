// import "./App.css";
import { SideNavBar } from "./Components/VideoList/SideNavBar";
import { TopNavBar } from "./Components/VideoList/TopNavBar";
import { Routes, Route } from "react-router-dom";
import { ListingArea } from "./Components/VideoList/ListingArea";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<TopNavBar />} />
        <Route path="/" element={<SideNavBar />} />
      </Routes> */}
      <TopNavBar />
      <SideNavBar />
      <ListingArea />
    </div>
  );
}

export default App;
