import logo from "./logo.svg";
import "./App.css";
import Home from "./Page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Page/Test";
import BlogDeatials from "./Page/BlogDeatials";

function App() {
  return (
    <div className="bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/ss" element={<Home />} />
          <Route path="/details" element={<BlogDeatials />} />
          <Route path="/" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
