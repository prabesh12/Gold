import { useState } from "react";
import { Link } from "react-router-dom";


const menu : {name:string}[]=[
  { name: "Home" },
  { name: "New Offer" },
  { name: "About Us" },
  { name: "Contact Us" },
];
const Header = () => {
  const [tab, setTab] = useState<string>("Home");
  return (
      <header>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-4 col-lg-4 col-xl-4">
              <nav>
                <ol>
                  {menu.map((data) => {
                    return (
                      <li>
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
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="logo-wrapper">
                <img src="images/logo.webp" alt="" />
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="search-wrapper">
                <img src="icons/search.png" alt="" />
                <input type="text" placeholder="Search brand" />
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
