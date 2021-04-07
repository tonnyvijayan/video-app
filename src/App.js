import "./App.css";
import { SideNavBar } from "./Components/VideoList/SideNavBar";
import { TopNavBar } from "./Components/VideoList/TopNavBar";

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <SideNavBar />
    </div>
  );
}

export default App;
