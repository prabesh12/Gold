import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../../component/atoms/footer/footer";
import Header from "../../component/atoms/header";
import Axios from "axios";
import GetUpdates from "../../component/molecules/getupdates";
const DetailPage = () => {
  const location = useLocation();
  const { id } = useParams();
  const [data, setData] = useState<any>();
  useEffect(() => {
    const detail = location.search.split("?");
    Axios.get(`http://localhost:3001/${detail?.[1]}/${id}`)
      .then((res) => {
        console.log("response data", res.data.image);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id, location]);
  return (
    <>
      <Header />
      <div className="detail-page container-fluid">
        {data && (
          <>
            <div className="row">
              <div className="col-md-6 col-xl-6 col-sm-12 col-lg-6 ">
                <img className="detail-image" src={data.image} alt="" />
              </div>
              <div className="col-md-6 col-xl-6 col-sm-12 col-lg-6 ">
                <div className="content">
                  <p className="brand">{data.brand}</p>
                  <p className="location">{data.location}</p>
                  <p className="discount">{data.discount}</p>
                  {data.feature && (
                    <div className="deadline">
                      <p className="text">Deal Ends In :</p>
                      <p className="time"> {data.deadline}</p>
                    </div>
                  )}
                  <a href={data?.link} target="_blank" rel="noreferrer">
                    open link to grab the offer
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <GetUpdates />
      <Footer />
    </>
  );
};

export default DetailPage;
