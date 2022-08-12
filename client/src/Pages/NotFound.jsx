import { NotFoundImage } from "../Assets";
import { notFoundText } from "../constants";
import RippleButton from "../Shared/RippleButton";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="notFoundContainer">
      <img src={NotFoundImage} alt="notFound" className="notFoundImage" />
      <div className="notFoundText">{notFoundText}</div>
      <RippleButton
        label="Go To Homepage"
        align="justifyCenter"
        handleClick={handleClick}
      />
    </div>
  );
}

export default NotFound;
