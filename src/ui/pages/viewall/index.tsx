import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../component/atoms/footer/footer";
import Header from "../../component/atoms/header";
import ListCard from "../../component/molecules/listcard";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useGolbalSearch } from "../../../context/GlobalContext";
import GetUpdates from "../../component/molecules/getupdates";

const ViewAll = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.search, "url");
  const { searchData, setSearchData } = useGolbalSearch();
  const [displayData, setDisplayData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  console.log(displayData, "display data");
  const handleDetailPage = (id: string, detail: string) => {
    navigate({
      pathname: `/detailpage/${id}`,
      search: `${detail}`,
    });
  };
  useEffect(() => {
    if (location.search === "?featured") {
      Axios.get(`http://localhost:3001/featuredoffer`).then((res) => {
        setDisplayData(res.data);
      });
    } else {
      Axios.get(`http://localhost:3001/limitedoffer`).then((res) => {
        setDisplayData(res.data);
      });
    }
  }, [location]);
  useEffect(() => {
    console.log(location.pathname, "path");
    if (location.pathname === "/viewall") setSearchData("");
  }, [location, setSearchData]);
  useEffect(() => {
    const filter = displayData?.filter((item: any) => {
      return item?.brand.includes(searchData);
    });
    console.log(filter, "5");
    setFilteredData(filter);
  }, [searchData, displayData]);
  return (
    <>
      <Header />
      <div className=" mb-4">
        <div
          className="container-fluid "
          style={{ position: "relative", top: "90px" }}
        >
          <div className="d-flex">
            <Link to="/" style={{ textDecoration: "none", color: "#bd6300" }}>
              Home<span>{`/`}</span>{" "}
            </Link>
            <p className="text-secondary">
              {location.search === "?limitedoffer"
                ? "limitedoffer"
                : "featured"}
            </p>
          </div>
          <div className="row">
            {filteredData.length === 0 && displayData
              ? displayData?.map((item: any) => {
                  return (
                    <div
                      className="col-md-4 col-lg-3 col-xl-3 col-sm-6 mt-4"
                      key={item.id}
                    >
                      <div
                        onClick={() =>
                          handleDetailPage(
                            item.id,
                            item.feature ? "limitedoffer" : "featuredoffer"
                          )
                        }
                      >
                        <ListCard
                          image={item.image}
                          brand={item.brand}
                          location={item.location}
                          discount={item.discount}
                          deadline={item.deadline}
                          feature={item.feature}
                        />
                      </div>
                    </div>
                  );
                })
              : filteredData?.map((item: any) => {
                  return (
                    <div
                      className="col-md-4 col-lg-3 col-xl-3 col-sm-6 mt-4"
                      key={item.id}
                    >
                      <div
                        onClick={() =>
                          handleDetailPage(
                            item.id,
                            item.feature ? "limitedoffer" : "featuredoffer"
                          )
                        }
                      >
                        <ListCard
                          image={item.image}
                          brand={item.brand}
                          location={item.location}
                          discount={item.discount}
                          deadline={item.deadline}
                          feature={item.feature}
                        />
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
      <GetUpdates />
      <Footer />
    </>
  );
};
export default ViewAll;
