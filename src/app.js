import React from "react";
import ReactDOM from "react-dom/client";
import resDataArray from "../api.json";

const Header = () => (
  <div className="header">
    <div className="logoContainer">
      <img
        className="logo"
        src="https://img.freepik.com/premium-vector/food-logo-vector-design-template_600323-3904.jpg?semt=ais_hybrid&w=740"
      />
      <div className="title">
        <h1>Feasto</h1>
      </div>
    </div>
    <div className="navBar">
      <ul className="navList">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const Card = (props) => {
  const { resData } = props;
  const cuisine = resData.info.cuisines.join(", ");

  return (
    <div className="card">
      <div className="img-wrapper">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info.cloudinaryImageId
          }
          alt={resData.info.name}
        />
      </div>
      <div className="card-content">
        <div className="name-rating">
          <h3 className="res-name">{resData.info.name}</h3>
          <span className="rating">⭐ {resData.info.avgRating}</span>
        </div>


        <div className="card-details">
          <p className="cuisine">{cuisine}</p>
          <span className="price">{resData.costForTwo}</span>
          <span className="eta">{resData.info.sla.slaString}</span>
        </div>
      </div>
      <div className="addButton">
        <button>See More</button>
      </div>
    </div>
  );
};

const Body = () => (
  <div className="bodyContainer">
    <div className="searchBar">
      <form>
        <input type="text" placeholder="Search for food"></input>
        <button type="submit" className="searchButton">
          <span>Search</span>
        </button>
      </form>
    </div>
    <div className="cardContainer">
      {resDataArray.map((resObj) => (
        <Card resData={resObj} key = {resObj.info.id}/>
      ))}
    </div>
  </div>
);

const Main = () => (
  <div className="mainContainer">
    <Header />
    <Body />
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
