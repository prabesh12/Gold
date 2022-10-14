import React, { useEffect, useState } from "react";
import ListCard from "../../molecules/listcard";
import Axios from "axios";
import ViewAll from "../../atoms/buttons/viewall";
type Props = { title: string; api: string; feature: boolean };
const Offers = ({ title, api, feature }: Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/${api}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [api]);

  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <h5>{title}</h5>
        <div className="row ">
          {data &&
            data?.slice(0, 8).map((item:any) => {
              return (
                <ListCard
                  key={item.id}
                  image={item.image}
                  brand={item.brand}
                  location={item.location}
                  discount={item.discount}
                  deadline={item.deadline}
                  feature={feature}
                />
              );
            })}
        </div>
        <ViewAll />
      </div>
    </>
  );
};

export default Offers;
