// import { useState } from "react";
// import GlobalSearchContext from "./context/GlobalContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/scss/styles.scss";
import { GlobalSearchProvider } from "./context/GlobalContext";
import DetailPage from "./ui/pages/detail";
import Home from "./ui/pages/home";
import ViewAll from "./ui/pages/viewall";
function App() {
  // const [searchData, setSearchData] = useState("");
  // const [data, setData] = useState<any>([]);
  return (
    <div className="App">
      <GlobalSearchProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viewall" element={<ViewAll />} />
            <Route path="/detailpage/:id" element={<DetailPage />} />
          </Routes>
        </Router>
      </GlobalSearchProvider>
    </div>
  );
}

export default App;
