import Navbar from "./Navbar";
import Home from "./Home";
import List from "./List";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Details from "./Details";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<Details />} />
            <Route path="*" element={NotFound}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
