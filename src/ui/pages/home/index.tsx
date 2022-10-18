import { useGolbalSearch } from "../../../context/GlobalContext";
import Footer from "../../component/atoms/footer/footer";
import Header from "../../component/atoms/header/index";
import Scroll from "../../component/atoms/scrolltotop/ScrollToTop";
import Offers from "../../component/compound/featuredoffer";
import HeroSlider from "../../component/compound/herobanner";
import GetUpdates from "../../component/molecules/getupdates";



const Home = () => {
 const {subject} = useGolbalSearch();
  const showBelow = 300;
  return (
    <div className="homepage">
      <Header />
      <HeroSlider/>
      {subject.map((data:any) => {
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
      <Scroll showBelow={showBelow} />
      <GetUpdates />
      <Footer />
    </div>
  );
};

export default Home;
