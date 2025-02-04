import logo from "./logo.svg";
import "./App.css";
import Home from "./Page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Page/Test";
import BlogDeatials from "./Page/BlogDeatials";
import { Staking } from "./Hook";
import AboutUs from "./Page/aboutUs";
import Privacy from "./Page/Privacy";
import Terms from "./Page/Terms";

function App() {
  return (
    <div className="bg-gray-100 py-1">
      <BrowserRouter>
        <Staking>
          <Routes>
            <Route path="/ss" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/details/:id" element={<BlogDeatials />} />
            <Route path="/" element={<Test />} />
          </Routes>
        </Staking>
      </BrowserRouter>
    </div>
  );
}

export default App;
