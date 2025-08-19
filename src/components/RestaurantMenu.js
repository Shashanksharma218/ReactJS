import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import CategoryItem from "./CategoryItem";
const RestaurantMenu = () => {
    const { resId } = useParams(); //got the resId from card

    const [resData, setresData] = useState(null); //state variable to store resData

    const [showIndex, setShowIndex] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.1491875&lng=75.7216527&restaurantId=${resId}`
        );
        const json = await data.json();
        console.log(json);
        setresData(json?.data);
    };

    const name = resData?.cards[2]?.card?.card?.info.name;
    const categories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) => {
        const type = card?.card?.card?.["@type"];
        return (
            type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
    });

    console.log(categories);



    return resData === null ? (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "70vh", width: "100vw" }}>
            <Loader />
        </div>
    ) : (
        <div style={{ padding: "0px 30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="text-3xl font-bold m-5">
                {name}
            </div>
            {categories.map((category, index) => {
                return <CategoryItem
                    data={category?.card?.card}
                    key={category?.card?.card?.categoryId}
                    showItem={index === showIndex ? true : false}
                    setIndex={() => setShowIndex(p => p===index?null:index)} />
            })}
        </div>
    );

};

export default RestaurantMenu;
