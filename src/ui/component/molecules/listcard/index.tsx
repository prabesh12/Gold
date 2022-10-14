import HappyClient from "../../atoms/buttons/happyclient";
import Offer from "../../atoms/buttons/offer";

type Props = {image:string, brand:string, location:string, discount:string, deadline: string, feature: boolean, key: any}

const ListCard = ({image, brand, location, discount, deadline, feature, key}: Props) => {
  return (
    <div className="col-md-4 col-lg-3 col-xl-3 col-sm-6 mt-4">
      <div className="list-card">
        <div className="img-wrapper">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h4 className="brand">{brand}</h4>
          <span className="location">{location}</span>
          <div className="offer-wrapper">
            <Offer />
            <p className="offered-discount">{discount}</p>
          </div>
          {feature && (
            <div className="deadline">
              <p className="deal">Deal Ends In :</p>
              <p className="time"> {deadline}</p>
            </div>
          )}
          <HappyClient />
        </div>
      </div>
    </div>
  );
};

export default ListCard;
