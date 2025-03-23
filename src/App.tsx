import "./index.css";

import Gallery from "./components/gallery/gallery";
import LeftBar from "./components/left-bar/left-bar";
import TopBar from "./components/top-bar/top-bar";

function App() {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
