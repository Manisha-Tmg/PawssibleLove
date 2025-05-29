import { BrowserRouter } from "react-router-dom";
// import "../src/output.css";
import Navbar from "./User/Components/Navbar";
import Home from "./User/Pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
