// import resDataArray from "../utils/resDataArray";
import Card from "./Card";
import { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";
import withPromotedLabel from "./withPromotedLabel";
const Body = () => {
  const [resData, setResData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=29.1491875&lng=75.7216527&str=all%20restaurants%20in%20hisar&trackingId=undefined&submitAction=ENTER&queryUniqueId=aeba7787-92d7-b861-d174-15310d29d016"
      );
      const data = await response.json();
      const restaurants =
        data?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
      console.log(restaurants);
      setResData(restaurants || []);
      setFilteredData(restaurants || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResData([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = resData.filter((res) =>
      res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchText, resData]);

  const PromotedCard = withPromotedLabel(Card);


  return (
    <div className="bodyContainer">
      <div className="searchBar">
        <input
          type="text"
          className="inputBox"
          placeholder="Type Restaurant Name"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          className="searchBtn"
          onClick={() =>
            setFilteredData(
              resData.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              )
            )
          }
        >
          Search
        </button>

        <button
          className="topResBtn"
          onClick={() => {
            const topData = resData.filter(
              (res) => res.card.card.info.avgRating > 4.4
            );
            setFilteredData(topData);
          }}
        >
          <span>⭐ Top Rated Restaurants</span>
        </button>
      </div>
      <div className="cardContainer">
        {isLoading ? (
          Array(16)
            .fill(null)
            .map((_, i) => <SkeletonCard key={i} />) // 👈 show 8 skeletons
        ) : filteredData.length === 0 ? (
          <div className="noResults">
            No restaurant name matches your search.
          </div>
        ) : (
          filteredData.map((resObj) => (
              resObj.card.card.info.promoted?
              <PromotedCard resData={resObj.card.card} key={resObj.card.card.info.id} />: 
              <Card resData={resObj.card.card} key={resObj.card.card.info.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
