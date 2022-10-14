import React from "react";
import BestOffer from "../../atoms/buttons/bestoffer";
const HeroBannerCard = ({image, brand,discount }) => {
  return (
    <>
      <div className="herobannercard">
        <img src={image} alt="" />
        <div className="content">
          <p className="offering-brand">{brand}</p>
          <p className="offered-package">{discount}</p>
          <BestOffer />
        </div>
      </div>
    </>
  );
};
export default HeroBannerCard;
