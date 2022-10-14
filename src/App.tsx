import { useState } from "react";
import GlobalSearchContext from "./context/GlobalContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/scss/styles.scss"
import Home from "./ui/pages/home";
import ViewAll from "./ui/pages/viewall";
function App() {
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState<any>([]);
  return (
    <div className="App">
      <GlobalSearchContext.Provider value={{ searchData, setSearchData, data, setData }}>
        <Router>
          <Routes>
               <Route path="/"  element={<Home />} />
               <Route path="/viewall" element ={<ViewAll />} />
          </Routes>
        </Router>
      </GlobalSearchContext.Provider>
    </div>
  );
}

export default App;
