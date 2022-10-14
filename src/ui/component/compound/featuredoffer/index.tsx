import React, { useContext, useEffect } from "react";
import ListCard from "../../molecules/listcard";
import Axios from "axios";
import ViewAll from "../../atoms/buttons/viewall";
import GlobalSearchContext from "../../../../context/GlobalContext";
type Props = { title: string; api: string; feature: boolean, viewall: string };
const Offers = ({ title, api, feature, viewall }: Props) => {
const {data , setData} = useContext<any>(GlobalSearchContext);
  useEffect(() => {
    Axios.get(`http://localhost:3001/${api}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [api, setData]);

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
        <ViewAll viewall = {viewall} />
      </div>
    </>
  );
};

export default Offers;
