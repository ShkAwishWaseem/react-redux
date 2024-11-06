import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
// import Comments from "./components/Comments";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/post" element={<Posts/>} />
        {/* <Route path="/comments" element={<Comments/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
