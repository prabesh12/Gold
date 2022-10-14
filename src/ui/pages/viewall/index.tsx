import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GlobalSearchContext from "../../../context/GlobalContext";
import Footer from "../../component/atoms/footer/footer";
import Header from "../../component/atoms/header";
import ListCard from "../../component/molecules/listcard";
import { Link } from "react-router-dom";

const ViewAll = () => {
  const { data } = useContext<any>(GlobalSearchContext);
  console.log(data);
  const location = useLocation();
  console.log(location.search);

  const [displayData, setDisplayData] = useState([]);
  console.log(displayData);

  useEffect(() => {
    if (location.search === "?limitedoffer") {
      setDisplayData(data);
    } else {
      setDisplayData(data);
    }
  }, [location, data]);

  return (
    <>
      <Header />
      <div>
        <Link to="/">Home <span>{`>`}</span> <span>{location.search ==="?limitedoffer" ? "limitedoffer" :"featured"}</span></Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          {displayData &&
            displayData?.map((item: any) => {
              return (
                <ListCard
                  key={item.id}
                  image={item.image}
                  brand={item.brand}
                  location={item.location}
                  discount={item.discount}
                  deadline={item.deadline}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewAll;
