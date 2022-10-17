import { useNavigate } from "react-router-dom";
type Props = { viewall: string };
const ViewAll = ({ viewall }: Props) => {
  const navigate = useNavigate();
  const handlesubmit = () => {
    navigate({
      pathname: "/viewall",
      search: `?${viewall}`,
    });
  };
  return (
    <div className="view-all-button-wrapper mt-4">
      <button className="view-all" id="view-all" onClick={handlesubmit}>
        View All
      </button>
    </div>
  );
};
export default ViewAll;
