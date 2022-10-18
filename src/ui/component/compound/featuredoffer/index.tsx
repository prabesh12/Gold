import { useEffect, useState } from "react";
import ListCard from "../../molecules/listcard";
import Axios from "axios";
import ViewAll from "../../atoms/buttons/viewallbutton";
import { useNavigate } from "react-router-dom";
import { useGolbalSearch } from "../../../../context/GlobalContext";
type Props = { title: string; api: string; feature: boolean; viewall: string };

const Offers = ({ title, api, feature, viewall }: Props) => {
  const { data, setData, searchData } = useGolbalSearch();
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  console.log(data, "setData");
  const handleDetailPage = (id: any, detail: string) => {
    navigate({
      pathname: `/detailpage/${id}`,
      search: `${detail}`,
    });
  };

  useEffect(() => {
    Axios.get(`http://localhost:3001/${api}`)

      .then((res) => {
        console.log(res.data.slice(0, 8), "res data");
        setData(res.data.slice(0, 8));
      })
      .catch((err) => console.log(err));
  }, [api, setData]);
  useEffect(() => {
    const filter = data?.filter((item: any) => {
      return item?.brand.includes(searchData);
    });
    console.log(filter, "5");
    setFilteredData(filter);
  }, [searchData, data]);

  return (
    <>
      <div className="featured-offer" id="featured-offer">
        <div className="container-fluid mt-5 mb-5">
          <h5>{title}</h5>
          <div className="row ">
            {filteredData.length === 0 && data.length !==0
              ? data?.map((item: any) => {
                  return (
                    <div
                      className="col-md-4 col-lg-4 col-xl-3 col-sm-6 mt-4"
                      key={item.id}
                    >
                      <div
                        onClick={() =>
                          handleDetailPage(
                            item.id,
                            feature ? "limitedoffer" : "featuredoffer"
                          )
                        }
                      >
                        <ListCard
                          image={item.image}
                          brand={item.brand}
                          location={item.location}
                          discount={item.discount}
                          deadline={item.deadline}
                          feature={feature}
                        />
                      </div>
                    </div>
                  );
                })
              : filteredData?.map((item: any) => {
                  return (
                    <div
                      className="col-md-4 col-lg-4 col-xl-3 col-sm-6  mt-4"
                      key={item.id}
                    >
                      <div
                        onClick={() =>
                          handleDetailPage(
                            item.id,
                            feature ? "limitedoffer" : "featuredoffer"
                          )
                        }
                      >
                        <ListCard
                          image={item.image}
                          brand={item.brand}
                          location={item.location}
                          discount={item.discount}
                          deadline={item.deadline}
                          feature={feature}
                        />
                      </div>
                    </div>
                  );
                })}
          </div>
          <ViewAll viewall={viewall} />
        </div>
      </div>
    </>
  );
};

export default Offers;
