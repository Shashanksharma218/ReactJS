import React from "react";
import ReactDOM from "react-dom/client";

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

const Card = ({
  imgSrc,
  resName,
  cuisine,
  rating,
  price,
  eta,
  offer,
  promoted,
}) => (
  <div className="card">
    <div className="img-wrapper">
      <img src={imgSrc} alt={resName} />
      {promoted && <span className="promoted">Promoted</span>}
      {offer && <span className="offer">{offer}</span>}
    </div>
    <div className="card-content">
      <div className="name-rating">
        <h3 className="res-name">{resName}</h3>
        <span className="rating">⭐ {rating}</span>
      </div>

      <p className="cuisine">{cuisine}</p>

      <div className="card-details">
        <span className="price">{price}</span>
        <span className="eta">{eta}</span>
      </div>
    </div>
    <div className="addButton">
      <button>Add to Cart</button>
    </div>
  </div>
);

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
      <Card
        imgSrc="https://b.zmtcdn.com/data/pictures/8/20614928/811a1f150a0c57f670920151098b5589_o2_featured_v2.jpg"
        resName="Apni Rasoi"
        cuisine="North Indian, Chinese, Fast Food"
        rating="4.1"
        price="₹150 for one"
        eta="31 min"
        offer="₹125 OFF"
        promoted={true}
      />
      <Card
        imgSrc="https://b.zmtcdn.com/data/pictures/8/310448/cc8f83eb4e1cb9421c88bfb16fb7a82e_o2_featured_v2.jpg"
        resName="Burger King"
        cuisine="Burger, Fast Food, Dessert..."
        rating="4.5"
        price="₹200 for one"
        eta="38 min"
        offer="₹25 OFF"
        promoted={true}
      />
      <Card
        imgSrc="https://b.zmtcdn.com/data/pictures/8/20424478/51e2e8230a40752b7018f7367fa13dfa_o2_featured_v2.jpg"
        resName="Domino's"
        cuisine="Pizza, Beverages, Desserts"
        rating="4.3"
        price="₹150 for one"
        eta="25 min"
        offer="50% OFF"
        promoted={false}
      />
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
