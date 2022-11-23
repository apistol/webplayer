import { useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Listen from "./pages/Listen";
import Single from "./pages/Single";
import Player from "./components/Player"
import useMediaQuery from "./hooks/useMediaQuery";
import Menu from "./pages/Menu";
import { ImSpinner2 } from "react-icons/im";

function App() {

  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [loader, setloader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloader(false)
    }, 3000)

  }, [])

  return (
    <div className='h-screen overflow-hidden bg-black'>
      {loader && <div id="loader">
        <ImSpinner2 color="#FFF" size={50} />
      </div>}
      <div className='flex justify-center'>
        <div className={`${isDesktop && "w-2/12"}`}>
          {isDesktop && <SideBar />}
        </div>
        <div className={`${isDesktop && "w-10/12"}`}>
          <Router>
            <SearchBar isDesktop={isDesktop} />
            <Routes>
              <Route path="/" element={<Dashboard isDesktop={isDesktop} />} />
              <Route path="/single/:id" element={<Single />} />
              <Route path="/song/:songId" element={<Listen />} />
              <Route path="/menu" element={<Menu isDesktop={isDesktop} />} />
            </Routes>
          </Router>
        </div>
      </div>



    </div>
  );
}

export default App;
