import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="#" element={<App></App>}></Route>
        </Routes>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Content />
        </div>
      </div>
    </Router>
  );
}

export default App;
