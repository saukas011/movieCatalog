import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SearchTool from "./components/SearchTool/SearchTool.jsx"
import Footer from "./components/Footer/Footer.jsx";
import './index.css'

function App() {

  return (
    <>
        <NavBar />
        <SearchTool />
        <div className="line"></div>
        <Outlet />
        <Footer />
    </>
  );
}

export default App
