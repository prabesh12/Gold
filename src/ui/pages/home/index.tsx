import React from "react";
import Footer from "../../component/atoms/footer/footer";
import Header from "../../component/atoms/header/index";
import Offers from "../../component/compound/featuredoffer";
import HeroSlider from "../../component/compound/herobanner";
import GetUpdates from "../../component/molecules/getupdates";

const data : {title: string, api: string, feature: boolean, viewall: string} []= [
  { title: "Featured Offer", api: "featuredoffer", feature: false, viewall: "featured" },
  { title: "Limited Offer", api: "limitedoffer", feature: true , viewall: "limitedoffer" },
];

const Home = () => {

  return (
    <div className="homepage">
      <Header />
      <HeroSlider/>
      {data.map((data) => {
        return (
          <Offers
            key={data.title}
            title={data.title}
            api={data.api}
            feature={data?.feature ? true : false}
            viewall={data?.viewall}
          />
        );
      })}
      <GetUpdates />
      <Footer />
    </div>
  );
};

export default Home;
