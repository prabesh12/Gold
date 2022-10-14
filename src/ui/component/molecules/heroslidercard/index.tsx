import BestOffer from "../../atoms/buttons/bestoffer";
type Props = {image:string, brand: string, discount: string}
const HeroBannerCard = ({image, brand,discount }: Props) => {
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
