import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Axios from "axios";
import HeroBannerCard from "../../molecules/heroslidercard";
const HeroSlider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/bestoffer")
      .then((res) => {
        setData(res.data);
        console.log("i am fetched data", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    PrevArrow:false,
    NextArrow:false
  };
  return (
    <div className="banner_wrap ">
      <Slider {...settings}>
        {data &&
          data?.map((data:any) => {
            return (
                <div className="banner_img"  key={data.id}>
                  <a href={data.link}  className="banner-card-content-link" title="grab the best offer" target="_blank" rel="noreferrer">
                     <HeroBannerCard  {...data} />
                  </a>
                </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default HeroSlider;
