import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Card = (props) => {
  const { resData } = props;
  const cuisine = resData.info.cuisines.join(", ");
  return (
    <div className="card">
      <div className="img-wrapper">
        <img
          src={IMG_URL + resData.info.cloudinaryImageId}
          alt={resData.info.name}
        />
      </div>
      <div className="card-content">
        <div className="name-rating">
          <h3 className="res-name">{resData.info.name}</h3>
          <span className="rating">⭐ {resData.info.avgRating}</span>
        </div>

        <p className="cuisine">{cuisine}</p>
        <div className="card-details">
          <span className="price">{resData.info.costForTwoMessage}</span>
          <span className="eta">{resData.info.sla.slaString}</span>
        </div>
      </div>
      <div className="addButton">
        <Link to={`/restaurants/${resData.info.id}`} style={{ textDecoration: "none", color: "inherit" }} className="buttonLink">View Restaurant</Link>
      </div>
    </div>
  );
};


export default Card;
