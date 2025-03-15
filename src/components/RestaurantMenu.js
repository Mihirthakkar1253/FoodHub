import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL, IMAGE_CDN_URL } from "../utils/contants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    getRestuarantInfo();
  }, []);

  const getRestuarantInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=" +
        id
    );
    const json = await data.json();
    setRestaurantInfo(json);
    console.log("---", json);
  };

  if (restaurantInfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    avgRatingString,
    areaName,
    sla,
    feeDetails,
  } = restaurantInfo?.data?.cards[2]?.card?.card?.info;
  // console.log(restaurantInfo?.data?.cards[2]?.card?.card?.info?)
  // console.log( restaurantInfo?.cards,"***")
    const { itemCards } =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

  //   console.log(restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("category below");
  console.log(categories);
  console.log("category above");

  //   const {
  //     name,
  //     cuisines,
  //     costForTwoMessage,
  //     totalRatingsString,
  //     avgRatingString,
  //     areaName,
  //     sla,
  //     feeDetails,
  //   } = resInfo?.cards[2]?.card?.card?.info;

  //   const { itemCards } =
  // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);

  //   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  //   const categories =
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //       (c) =>
  //         c.card?.card?.["@type"] ===
  //         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //     );
  //   console.log("category below");
  //   console.log(categories);
  //   console.log("category above");

  return (
    <div className="menu">
      <div className="title1">
        Home/India/{restaurantInfo?.data?.cards[0]?.card?.card.text}
      </div>
      <h1 className="heading11">{name}</h1>
      {/* <hr /> */}
      <div className={"parentmenu"}>
      <div className="menucard">

        <div className={"menucard1"}>
          <div className="rating">
            <span className="span">★</span> &nbsp;
            {avgRatingString}({totalRatingsString})&nbsp; • &nbsp;
            {costForTwoMessage}
          </div>
        </div>
        <div className="cuisines">{cuisines}</div>
        <div className="outlet">
          <div className="sc-lizKOf bBYPYZ">
            <div className="sc-fsvrbR jnMRZP"></div>
            <div className="sc-jOnpCo kEBcrx"></div>
            <div className="sc-fsvrbR jnMRZP"></div>
          </div>
          <div className="wewqdiok">
            Outlet
            <span className="card1">&nbsp; &nbsp;{areaName}</span>▾
            <div>{sla?.slaString}</div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="msg">
          <img
            width="20px"
            height="20px"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
          />
        </div>
      </div>
      </div>
      <div className="boxgray"></div>
      {/* Categories Accordion */}
      {/* {
        categories.map((category , index) => {
          return <ResCategory key={category?.card?.card?.title
          } data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=> setShowIndex(index)}
          />
        })
      } */}
    </div>
  );
};

export default RestaurantMenu;
