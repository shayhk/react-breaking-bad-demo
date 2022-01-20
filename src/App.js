import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./styles.css";
import About from "./pages/about";
import Search from "./pages/search";
import Home from "./pages/home";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Header</h1>

        <ul>
          <li></li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <a href="/search">Search with redirect</a>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <div>Footer</div>
      </BrowserRouter>
    </div>
  );
}
