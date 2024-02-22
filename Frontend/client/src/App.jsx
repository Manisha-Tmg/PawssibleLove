import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./User/Components/Navbar";
import Home from "./User/Pages/HomePage";
import Resources from "./User/Pages/Resources";
import "./index.css";
import SuccessStories from "./User/Pages/SuccessStories";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/success-stories" element={<SuccessStories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
