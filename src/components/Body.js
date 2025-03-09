import { RestruantCard } from "./RestruantCard";
import { restaurantList } from "../utils/contants";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [searchClicked, setSearchClicked] = useState(false);
  function filterData(searchText, restaurants) {
    console.log("-----", restaurants);
    const filter = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("---filter--", filter);

    return filter;
  }
  useEffect(() => {
    getRestuarants();
  }, []);

  const handleSearch=()=>{
  
  
  }
  async function getRestuarants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(
      jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setAllRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    
    console.log(jsonData);
    setFilteredRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
   
  } //if my restuarant empty=>shimmer UI
  //if resturant has data then load actual UI

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <input
        type="text"
        placeholder="search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setTimeout(()=>{

            handleSearch();
          },3000)
        }}
        className={"searchInput"}
      />
      <button
        className="search-btn"
        onClick={() => {
          //need to filter a data
          const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        search
      </button>
    <h1 className={"heading1"}>{"Restaurants with online food delivery in India"} </h1>
    <hr/>
      <div className="restcard">
        {filteredRestaurants.length === 0 ? (
          <h1> No restuarant found for this filter</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestruantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
