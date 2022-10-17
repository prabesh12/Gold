import React, { useEffect } from "react";
import ListCard from "../../molecules/listcard";
import Axios from "axios";
import ViewAll from "../../atoms/buttons/viewallbutton";
import { useNavigate } from "react-router-dom";
import { useGolbalSearch } from "../../../../context/GlobalContext";
type Props = { title: string; api: string; feature: boolean; viewall: string };

const Offers = ({ title, api, feature, viewall }: Props) => {
  const { data, setData, searchData} = useGolbalSearch();
  const navigate = useNavigate();
  const handleDetailPage = (id: any, detail: string) => {
    navigate({
      pathname: `/detailpage/${id}`,
      search: `${detail}`,
    });
  };
  useEffect(() => {
    Axios.get(`http://localhost:3001/${api}`)
      .then((res) => {
        console.log(res.data, "res data");
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [api, setData]);

  const filteredData = data?.filter((item:any) => {
    return item?.brand.includes(searchData);
  });
  return (
    <>
      <div className="featured-offer" id="featured-offer">
        <div className="container-fluid mt-5 mb-5">
          <h5>{title}</h5>
          <div className="row ">
            { !filteredData  && data ?
              data?.slice(0, 8).map((item: any) => {
                return (
                  <div
                    className="col-md-4 col-lg-3 col-xl-3 col-sm-6 mt-4"
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
              :
               filteredData?.map((item:any)=>{
                return (
                  <div
                    className="col-md-4 col-lg-3 col-xl-3 col-sm-6 mt-4"
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
            }
          </div>
          <ViewAll viewall={viewall} />
        </div>
      </div>
    </>
  );
};

export default Offers;
