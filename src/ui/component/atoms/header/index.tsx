import { useState } from "react";
import { Link } from "react-router-dom";
import { useGolbalSearch } from "../../../../context/GlobalContext";
const menu: { name: string }[] = [
  { name: "Home" },
  { name: "New Offer" },
  { name: "About Us" },
  { name: "Contact Us" },
];
const Header = () => {
  const [tab, setTab] = useState<string>("Home");
  const {searchData, setSearchData} = useGolbalSearch();
  const handleSearch = (e: any) => {
    setSearchData(e.target.value);
    console.log(e.target.value);
  };
  return (
    <header>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5 col-lg-5 col-xl-4">
            <nav>
              <ol>
                {menu.map((data) => {
                  return (
                    <li key={data.name}>
                      <Link
                        to="/"
                        className={`${
                          data.name === tab ? "active" : "nav-item"
                        }`}
                        onClick={() => setTab(data.name)}
                      >
                        {data.name}
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-4">
            <div className="logo-wrapper">
              <img src="/images/logo.webp" alt="" />
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4">
            <div className="search-wrapper">
              {/* <img src="/icons/search.png" alt="" /> */}
              <form action="" onSubmit={(e)=>e.preventDefault}>
                <input
                  value={searchData}
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search brand"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
